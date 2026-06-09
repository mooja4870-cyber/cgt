# Version History

## v4.0.21 (2026-06-09)
- 설명: 앱 아이콘 배경색 변경 — 핑크에서 진한 그린으로
- 내용:
  - **변경 사항**: 앱 아이콘 배경색 #E91E63(핑크) → #1D9E75(진한 그린)
  - **수정 파일**:
    - PNG 이미지: app/src/main/assets/app_icon.png + 10개 mipmap (hdpi/mdpi/xhdpi/xxhdpi/xxxhdpi × 일반/원형)
    - XML 벡터: ic_launcher_background.xml + ic_launcher_foreground.xml
  - **변경 픽셀**: 총 130,436개
  - **색상 통일**: 앱 주 색상 #1D9E75로 일관성 유지
  - 모든 해상도(mdpi 72px ~ xxxhdpi 192px) 동일 적용

## v4.0.20 (2026-06-09)
- 설명: 주택임대사업자 거주주택 비과세 특례 계산 로직 정정
- 내용:
  - **문제**: 주택임대사업자가 장기임대주택 특례 요건 충족해도 양도가 12억 초과분이 비과세되는 오류
  - **원인**: 소령 제155조 제20항 오해 — 임대사업자 거주주택 비과세도 "1세대 1주택 규칙 적용" (완전 비과세 아님)
  - **법령 정정**: 
    - 1세대 1주택: 양도차익 12억원까지 비과세, 초과분은 과세
    - 주택임대사업자 거주주택 비과세 특례: **1세대 1주택과 동일** (양도가액 12억 기준 분할 과세)
  - **해결책**: 
    - `sp <= 120000` 조건 제거 (완전 비과세 아님을 명시)
    - `config.taxableGainLimit = 120000` 설정 추가 (1세대 1주택 고가주택 분할 계산 적용)
    - 5318-5320번 기존 고가주택 로직 활용: `taxGain = gain × (sp - 120000) / sp` 
  - **결과**: 양도가 12억 초과 시 초과분만 과세 (국세청 기준 준수)
  - 양도가 16억, 취득가 6억 예시: 전체 차익 10억 중 25% (2.5억)만 과세 대상, 80% 장특공제 적용 후 약 500만원 세금
  - `assets/yangdo_tax_calculator.html` + 루트 `yangdo_tax_calculator.html` 동일 적용
  - `release/CGT.apk` 재빌드 및 교체

## v4.0.19 (2026-06-05)
- 설명: 앱 버전 자동 동기화 수정 — Git 태그 인식 불안정 해결
- 내용:
  - **문제**: APK를 다운받아 설치해도 앱 내 버전이 항상 `v0.0.0` 표시 (기본값)
  - **원인**: `app/build.gradle`의 `exec { git describe }` 명령이 현재 디렉토리 오류로 Git 태그 읽기 실패
  - **해결책**: `workingDir rootProject.rootDir` 추가 → 항상 프로젝트 루트(CGT/)에서 실행
  - **결과**: `v4.0.19` 커밋 후 빌드하면 `versionName=v4.0.19`, `versionCode=40019` 자동 설정
  - **디버그 로그** 추가 → 빌드 시 `✅ Git Tag 인식: v4.0.19 → versionCode=40019` 출력 (확인용)
  - `release/CGT.apk` 재빌드 및 교체

## v4.0.18 (2026-06-05)
- 설명: 핀치줌 기능 — 구버전 안드로이드(갤럭시 노트20 등) 호환성 개선
- 내용:
  - **원인**: 구버전 안드로이드/웹뷰에서 WebView 줌 설정을 명시하지 않으면 핀치줌 비활성화
  - **현상**: 갤럭시 노트20 울트라(최신)에는 작동, 갤럭시 노트20(구버전)에는 안 됨
  - **해결책** (`MainActivity.java`)
    - `settings.setSupportZoom(true)` — 핀치 제스처 줌 활성화 (매우 중요!)
    - `settings.setBuiltInZoomControls(true)` — 줌 컨트롤 켜기
    - `settings.setDisplayZoomControls(false)` — 기본 +/- 버튼은 숨김 (UI)
  - **viewport 강화** (HTML)
    - `user-scalable=yes, minimum-scale=0.5, maximum-scale=5.0` 추가
    - `assets/yangdo_tax_calculator.html` 및 루트 파일 동일 적용
  - `release/CGT.apk` 재빌드 및 교체

## v4.0.17 (2026-06-05)
- 설명: 단어(어절) 중간 줄바꿈 금지 — 전역 `word-break: keep-all` 적용
- 내용:
  - 전역 `*` 선택자에 `word-break: keep-all` + `overflow-wrap: break-word` 추가
  - 한 단어(한글 어절)가 두 줄에 걸쳐 쪼개지지 않고 공백 기준으로만 줄바꿈
  - `.rcard .rnote`의 `overflow-wrap: anywhere`(단어 중간 강제 분리) → `break-word`로 완화
  - `assets/yangdo_tax_calculator.html` 및 루트 `yangdo_tax_calculator.html` 동일 적용
  - `release/CGT.apk` 재빌드 및 교체

## v4.0.16 (2026-06-04)
- 설명: 화면 회전(가로/세로) 지원 추가
- 내용:
  - `AndroidManifest.xml` configChanges에 `screenLayout|smallestScreenSize` 추가 → 모든 화면 크기 변화 대응
  - `MainActivity.java` `setUseWideViewPort(false)` → `true` 변경 → viewport 메타태그 적용, 가로 모드 반응형 레이아웃 정상 작동
  - `onConfigurationChanged()` 오버라이드 추가 → 회전 시 WebView 레이아웃 즉시 재조정
  - `release/CGT.apk` 재빌드 및 교체

## v4.0.15 (2026-06-04)
- 설명: 취득종류 상속·증여 칩 Coming Soon 비활성화 + 전문앱 안내 배너 추가
- 내용:
  - `기본정보` 탭 취득종류 칩에서 `📜 상속` / `🎁 증여` 비활성화 (클릭 시 🚧 Coming Soon 토스트)
  - `매매` 칩만 선택 가능하도록 변경
  - `itemSelectPage` 상단에 💡 전문앱 안내 배너 추가
    - "이 앱은 주택 양도소득세 전문 계산기입니다"
    - "매매 취득 · 주택(APT포함) 종류만 지원 | 상속·증여·분양권·건물·토지 준비 중"
  - `assets/yangdo_tax_calculator.html` 및 루트 `yangdo_tax_calculator.html` 동일 적용

## v4.0.14 (2026-06-01)
- 설명: 상속·증여 검증 체계 추가
- 내용:
  - `qa/inheritance_gift_test_plan.md` 추가 (배포 전 검증 절차/합격 기준)
  - `qa/inheritance_gift_cases_template.csv` 추가 (케이스 입력/비교 템플릿)

## v4.0.13 (2026-06-01)
- 설명: 설치 실패(앱이 설치되지 않았습니다) 대응 배포
- 내용:
  - 배포 APK를 `debug`에서 `release` 서명본으로 전환
  - `versionCode`를 태그 기반 숫자(`vX.Y.Z` -> `XXYYZZ` 형식)로 자동 증가하도록 변경
  - `release/CGT.apk` 최신본 재배포
  - 참고: 기존에 다른 서명으로 설치된 앱은 1회 삭제 후 재설치 필요

## v4.0.12 (2026-06-01)
- 설명: macOS 빌드 환경 복구 및 최신 APK 재배포
- 내용:
  - macOS용 SDK/JDK/Gradle 환경으로 디버그 APK 재빌드 성공
  - `release/CGT.apk`를 최신 코드 기준으로 교체 배포
  - 로컬 빌드 도구 폴더(`.tools/`, `.android-sdk-mac/`) `.gitignore` 추가

## v4.0.11 (2026-06-01)
- 설명: 앱 버전명을 Git 태그와 자동 동기화
- 내용:
  - `app/build.gradle`에서 최신 Git 태그(`git describe --tags --abbrev=0`)를 읽어 `versionName`으로 사용
  - 태그가 없는 환경에서는 기본값 `v0.0.0` 사용

## v4.0.10 (2026-06-01)
- 설명: 복사 버튼 잔존 소스 정리
- 내용:
  - 루트 소스 `yangdo_tax_calculator.html`의 `📋 계산결과 복사` 버튼 삭제
  - assets 소스와 루트 소스 UI 일치화

## v4.0.9 (2026-06-01)
- 설명: 계산결과 화면 복사 버튼 제거
- 내용:
  - 계산결과 탭의 `📋 계산결과 복사` 버튼 삭제

## v4.0.8 (2026-06-01)
- 설명: GitHub raw APK 직접 다운로드 링크용 파일 추가
- 내용:
  - `release/CGT.apk` 파일 추가
  - GitHub raw 링크 클릭 시 APK 직접 다운로드 가능하도록 배포 경로 고정

## v4.0.7 (2026-06-01)
- 설명: 버전 관리 정책 도입 및 이력 파일 초기화
- 내용:
  - `ver.md` 파일 생성
  - 향후 수정 시 버전/설명/내용 기록 기준 확립
