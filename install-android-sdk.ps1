$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$sdkRoot = Join-Path $root "android-sdk"
$cmdlineLatest = Join-Path $sdkRoot "cmdline-tools\latest"
$downloadDir = Join-Path $root ".downloads"
$zipPath = Join-Path $downloadDir "commandlinetools-win-14742923_latest.zip"
$downloadUrl = "https://dl.google.com/android/repository/commandlinetools-win-14742923_latest.zip"

New-Item -ItemType Directory -Force -Path $downloadDir | Out-Null
New-Item -ItemType Directory -Force -Path $sdkRoot | Out-Null

if (!(Test-Path -LiteralPath (Join-Path $cmdlineLatest "bin\sdkmanager.bat"))) {
    if (!(Test-Path -LiteralPath $zipPath)) {
        Invoke-WebRequest -Uri $downloadUrl -OutFile $zipPath
    }

    $extractDir = Join-Path $downloadDir "cmdline-tools-extract"
    if (Test-Path -LiteralPath $extractDir) {
        Remove-Item -LiteralPath $extractDir -Recurse -Force
    }
    New-Item -ItemType Directory -Force -Path $extractDir | Out-Null
    Expand-Archive -LiteralPath $zipPath -DestinationPath $extractDir -Force

    if (Test-Path -LiteralPath $cmdlineLatest) {
        Remove-Item -LiteralPath $cmdlineLatest -Recurse -Force
    }
    New-Item -ItemType Directory -Force -Path $cmdlineLatest | Out-Null
    Copy-Item -Path (Join-Path $extractDir "cmdline-tools\*") -Destination $cmdlineLatest -Recurse -Force
}

$sdkManager = Join-Path $cmdlineLatest "bin\sdkmanager.bat"
$env:ANDROID_HOME = $sdkRoot
$env:ANDROID_SDK_ROOT = $sdkRoot

& $sdkManager --sdk_root=$sdkRoot "platform-tools" "platforms;android-35" "build-tools;35.0.0"
if ($LASTEXITCODE -ne 0) {
    exit $LASTEXITCODE
}

1..20 | ForEach-Object { "y" } | & $sdkManager --sdk_root=$sdkRoot --licenses
if ($LASTEXITCODE -ne 0) {
    exit $LASTEXITCODE
}

$sdkDir = $sdkRoot.Replace("\", "/")
Set-Content -LiteralPath (Join-Path $root "local.properties") -Value "sdk.dir=$sdkDir" -Encoding ASCII
