Set-Location -LiteralPath $PSScriptRoot
$nodePath=Get-Command node -ErrorAction SilentlyContinue
if($nodePath){$nodeExe=$nodePath.Source}else{$nodeExe=Join-Path $env:USERPROFILE '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe'}
if(!(Test-Path -LiteralPath $nodeExe)){throw 'Install Node.js 20.9 or newer, then run npm install and npm run dev.'}
& $nodeExe 'node_modules/next/dist/bin/next' dev --hostname 127.0.0.1 --webpack
