param(
    [string]$ReferenceHtml = "",
    [switch]$Release,
    [switch]$Bundle
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$assetDir = Join-Path $root "app\src\main\assets"
$assetHtml = Join-Path $assetDir "yangdo_tax_calculator.html"
$localSdk = Join-Path $root "android-sdk"

# default: use root yangdo_tax_calculator.html in this repo
if ([string]::IsNullOrEmpty($ReferenceHtml)) {
    $ReferenceHtml = Join-Path $root "yangdo_tax_calculator.html"
}

if (Test-Path -LiteralPath $localSdk) {
    $env:ANDROID_HOME = $localSdk
    $env:ANDROID_SDK_ROOT = $localSdk
    $sdkDir = $localSdk.Replace("\", "/")
    Set-Content -LiteralPath (Join-Path $root "local.properties") -Value "sdk.dir=$sdkDir" -Encoding ASCII
}

if (!(Test-Path -LiteralPath $ReferenceHtml)) {
    throw "Reference HTML not found: $ReferenceHtml"
}

New-Item -ItemType Directory -Force -Path $assetDir | Out-Null
Copy-Item -LiteralPath $ReferenceHtml -Destination $assetHtml -Force

$referenceHash = (Get-FileHash -Algorithm SHA256 -LiteralPath $ReferenceHtml).Hash
$assetHash = (Get-FileHash -Algorithm SHA256 -LiteralPath $assetHtml).Hash
if ($referenceHash -ne $assetHash) {
    throw "Asset HTML hash mismatch. Reference=$referenceHash Asset=$assetHash"
}

$gradleBat = Get-Command gradle -ErrorAction SilentlyContinue
if ($gradleBat) {
    $gradle = $gradleBat.Source
} else {
    # fallback: use locally downloaded gradle
    $gradle = Join-Path $root ".tools\gradle-8.14.3\bin\gradle.bat"
}
if (!(Test-Path -LiteralPath $gradle)) {
    throw "Gradle executable not found: $gradle"
}

if ($Bundle) {
    & $gradle --no-daemon bundleRelease
} elseif ($Release) {
    & $gradle --no-daemon assembleRelease
} else {
    & $gradle --no-daemon assembleDebug
}

if ($LASTEXITCODE -ne 0) {
    exit $LASTEXITCODE
}
