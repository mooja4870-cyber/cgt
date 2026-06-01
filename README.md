# CGT (Capital Gains Tax) Android App

안드로이드에서 양도소득세 계산기를 실행하기 위한 프로젝트입니다.

## 프로젝트 개요
- 핵심 계산 UI: `yangdo_tax_calculator.html`
- 앱 내 포함 경로: `app/src/main/assets/yangdo_tax_calculator.html`
- 실행 방식: `MainActivity`에서 WebView로 로컬 HTML 자산 로드

## 구조
- `app/`: Android 애플리케이션 모듈
- `yangdo_tax_calculator.html`: 원본 계산기 HTML
- `build.gradle`, `settings.gradle`: Gradle 빌드 설정
- `build-play-apk.ps1`: Play 배포용 APK 빌드 스크립트
- `create-upload-keystore.ps1`: 업로드 키스토어 생성 스크립트
- `install-android-sdk.ps1`: Android SDK 설치 스크립트

## 빌드
1. Android SDK 및 JDK 설치
2. 필요 시 `local.properties`에 SDK 경로 설정
3. 프로젝트 루트에서 Gradle 빌드 실행

```bash
./gradlew assembleRelease
```

Windows PowerShell 환경에서는 포함된 `.ps1` 스크립트를 활용할 수 있습니다.

## 라이선스
별도 명시가 없으면 기본적으로 All Rights Reserved로 간주됩니다. 필요 시 LICENSE 파일을 추가하세요.
