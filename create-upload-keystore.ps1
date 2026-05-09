$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$keystoreDir = Join-Path $root "keystore"
$keystorePath = Join-Path $keystoreDir "upload-keystore.jks"
$propertiesPath = Join-Path $keystoreDir "keystore.properties"

New-Item -ItemType Directory -Force -Path $keystoreDir | Out-Null

if ((Test-Path -LiteralPath $keystorePath) -and (Test-Path -LiteralPath $propertiesPath)) {
    Write-Host "Upload keystore already exists: $keystorePath"
    exit 0
}

$password = (([guid]::NewGuid().ToString("N")) + ([guid]::NewGuid().ToString("N"))).Substring(0, 32)
$keytool = Join-Path $env:JAVA_HOME "bin\keytool.exe"
if (!(Test-Path -LiteralPath $keytool)) {
    $keytoolCommand = Get-Command keytool -ErrorAction SilentlyContinue
    if (!$keytoolCommand) {
        throw "keytool not found. Install a JDK or set JAVA_HOME."
    }
    $keytool = $keytoolCommand.Source
}

& $keytool -genkeypair -v `
    -keystore $keystorePath `
    -storetype PKCS12 `
    -alias upload `
    -keyalg RSA `
    -keysize 2048 `
    -validity 10000 `
    -storepass $password `
    -keypass $password `
    -dname "CN=Yangdo Tax Calculator, OU=CCT, O=CCT, L=Seoul, ST=Seoul, C=KR"

if ($LASTEXITCODE -ne 0) {
    exit $LASTEXITCODE
}

$relativeStore = "keystore/upload-keystore.jks"
$properties = @(
    "storeFile=$relativeStore",
    "storePassword=$password",
    "keyAlias=upload",
    "keyPassword=$password"
)
Set-Content -LiteralPath $propertiesPath -Value $properties -Encoding ASCII
Write-Host "Created upload keystore: $keystorePath"
Write-Host "Keep keystore/keystore.properties private. It is required for future app updates."

