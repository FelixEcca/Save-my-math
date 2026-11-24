param([switch]$NoBrowser)
$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$taskNode = (Get-Command node -ErrorAction SilentlyContinue).Source
if (-not $taskNode) { throw 'Node.js ab Version 22.14 wird benoetigt. https://nodejs.org/' }
$taskVersion = & $taskNode -p 'process.versions.node'
if ([version]$taskVersion -lt [version]'22.14.0') { throw 'Bitte Node.js auf Version 22.14 oder neuer aktualisieren.' }
$port = 3456
$configPath = Join-Path $projectRoot '.env'
if (Test-Path -LiteralPath $configPath) {
  foreach ($entry in Get-Content -LiteralPath $configPath) {
    if ($entry -match '^\s*PORT\s*=\s*(\d+)\s*$') { $port = [int]$Matches[1] }
  }
}
$url = "http://localhost:$port"
function Get-LocalStatus {
  $response = $null
  $reader = $null
  try {
    $request = [System.Net.HttpWebRequest]::Create("http://127.0.0.1:$port/api/status")
    $request.Proxy = $null
    $request.Timeout = 1000
    $request.ReadWriteTimeout = 1000
    $response = $request.GetResponse()
    $reader = New-Object System.IO.StreamReader($response.GetResponseStream())
    return ($reader.ReadToEnd() | ConvertFrom-Json)
  } catch { return $null }
  finally { if ($reader) { $reader.Dispose() }; if ($response) { $response.Dispose() } }
}
$existing = Get-LocalStatus
if ($existing -and $existing.app -eq 'av-rettungseinsatz') { if (-not $NoBrowser) { Start-Process $url }; exit 0 }
$dataPath = Join-Path $projectRoot 'data'
New-Item -ItemType Directory -Path $dataPath -Force | Out-Null
$serverPath = Join-Path $projectRoot 'server/index.mjs'
$serverProcess = Start-Process -FilePath $taskNode -ArgumentList @('"' + $serverPath + '"') -WorkingDirectory $projectRoot -WindowStyle Hidden -PassThru -RedirectStandardOutput (Join-Path $dataPath 'server.log') -RedirectStandardError (Join-Path $dataPath 'server-error.log')
Set-Content -LiteralPath (Join-Path $dataPath 'server.pid') -Value $serverProcess.Id
for ($attempt = 0; $attempt -lt 20; $attempt++) {
  Start-Sleep -Milliseconds 250
  try {
    $status = Get-LocalStatus
    if ($status.app -eq 'av-rettungseinsatz') { if (-not $NoBrowser) { Start-Process $url }; exit 0 }
  } catch {}
}
throw 'Die App konnte nicht gestartet werden. Details stehen in data/server-error.log.'
