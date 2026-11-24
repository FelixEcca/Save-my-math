$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$pidPath = Join-Path $projectRoot 'data/server.pid'
if (-not (Test-Path -LiteralPath $pidPath)) { Write-Output 'Es wurde kein gestarteter Rettungseinsatz gefunden.'; exit 0 }
$serverProcessId = [int](Get-Content -LiteralPath $pidPath -Raw).Trim()
$serverProcess = Get-CimInstance Win32_Process -Filter "ProcessId = $serverProcessId"
$expectedScript = Join-Path $projectRoot 'server/index.mjs'
if ($serverProcess -and $serverProcess.Name -eq 'node.exe' -and $serverProcess.CommandLine.Contains($expectedScript)) {
  Stop-Process -Id $serverProcessId
} elseif ($serverProcess) {
  throw 'Die gespeicherte Prozessnummer gehoert nicht zu dieser App. Es wurde kein Prozess beendet.'
}
Remove-Item -LiteralPath $pidPath
Write-Output 'Rettungseinsatz wurde beendet.'
