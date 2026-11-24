$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$configPath = Join-Path $projectRoot '.env'
if (-not (Test-Path -LiteralPath $configPath)) { Copy-Item -LiteralPath (Join-Path $projectRoot '.env.example') -Destination $configPath }
Start-Process -FilePath 'notepad.exe' -ArgumentList @('"' + $configPath + '"')
