# Version History

## v4.3.0 (2026-06-07)
- 설명: [실동작 1단계] 시나리오(지금 팔까 vs 나중에) 실제 계산 연동
- 내용:
  - 재방문 위젯 공용 **추정 엔진** 추가(`engEstimateTax`): 저장된 입력값(`localStorage` `yangdo_v19_state`)으로 양도차익→장특공(표1/표2)→12억 안분 비과세→기본공제→누진세율(6~45%)→다주택 중과(2026.5.10~)→지방소득세 추정
  - **시나리오 위젯**을 오늘/6개월 뒤/2년 거주 충족 후 3시점으로 실제 계산, 최저 세액 자동 강조
  - 데이터 없으면 "예시" 표기 후 샘플 유지(정직), 데이터 있으면 "내 계산 기준 추정치"
  - 카카오톡 공유를 실제 표 값 기반(`engShareScenarioReal`)으로 연결
  - ※ "추정치"이며 정밀 계산은 본 계산기에서 수행(면책 유지)
  - `assets/yangdo_tax_calculator.html` 및 루트 파일 동일 적용

## v4.2.2 (2026-06-07)
- 설명: '어떻게 놀까요' 가이드·재방문 섹션의 개발/구현 투 표현을 사용자 친화 문구로 정리
- 내용:
  - 슬라이드 제목·섹션 라벨의 일련번호(`①~⑤`) 제거 → 깔끔한 기능명
  - 본문 라벨 `· 개인화`(스펙 태그) 제거
  - 슬라이드1: "기한 임박 시 **빨강**으로 강조"(UI 구현) → "눈에 띄게 알려드려요"
  - 슬라이드3: "적용 시점(**YYYY.MM.DD**)"·"**앱 반영 여부** 표시" → "언제부터 적용되는지"·"쉬운 말로 정리"
  - 슬라이드4: "최저 세액 시점 **자동 하이라이트**"(UI 용어) → "세금이 가장 적은 시점을 한눈에"
  - 슬라이드5: 리텐션 전략 설명("한 번 쓰고 마는 계산기가 아니라…") → 사용자 혜택 문구로 재작성
  - 속보 배지: "… 적용. **앱에 반영 완료.**"(개발 노트) → "계산에 반영되어 있어요."
  - `assets/yangdo_tax_calculator.html` 및 루트 파일 동일 적용

## v4.2.1 (2026-06-06)
- 설명: 두 CTA 버튼 위치 이동 — 소제목2 `양도소득세야, 놀자 ~` 직전으로
- 내용:
  - `사용 가이드 보기 →` / `바로 양도세 계산하기 →` 버튼(`.intro-cta-wrap`)을 페이지 하단에서 **재방문 유도 섹션(소제목2) 직전**으로 이동
  - 순서: 특징 리스트 → **[CTA 두 버튼]** → `양도소득세야, 놀자 ~` → 스토리·①~⑤
  - 버튼 기능/스타일은 동일 (핑크 점멸 유지)
  - `assets/yangdo_tax_calculator.html` 및 루트 파일 동일 적용

## v4.2.0 (2026-06-06)
- 설명: 소제목2 옆 `어떻게 놀까요 →` 버튼 + 놀이 가이드 슬라이드(5장) 추가
- 내용:
  - **버튼**: 소제목2 `양도소득세야, 놀자 ~`를 flex 행으로 바꾸고 오른쪽에 핑크 그라데이션 `어떻게 놀까요 →`(`.eng-howto-btn`, 글로우 점멸) 배치
  - **놀이 가이드 오버레이**(`#playGuide`, `.pgd-*`): 기존 사용 가이드의 `gs-*` 스타일을 재사용한 풀스크린 모달
    - **5슬라이드 = 1장당 1기능** (①D-Day ②OX퀴즈 ③세법·시세 속보 ④시점별 비교 ⑤월간 리포트)
    - 각 슬라이드 = **설명문(`.gs-sub`) + 개조식(`⚡ 이렇게 놉니다` 불릿) + 💡팁(`.gs-warn`)** 구성
    - 하단 네비: 점(dots) + `← 이전`/`다음 →`(첫 장 `✕ 닫기`, 마지막 장 `✓ 다 봤어요`)
  - **JS**: `playOpen / playClose / playGo / playStep` 추가
  - `assets/yangdo_tax_calculator.html` 및 루트 파일 동일 적용

## v4.1.4 (2026-06-06)
- 설명: 소제목1 문구 수정 — `꺼려하는 양도소득세,` → `꺼려하는 양도세,`
- 내용:
  - 히어로 헤드라인 텍스트만 변경 (스타일/애니메이션 동일)
  - `assets/yangdo_tax_calculator.html` 및 루트 파일 동일 적용

## v4.1.3 (2026-06-06)
- 설명: 소제목1·소제목2에 무지개 흐름 + 글로우 점멸 애니메이션 적용 (강조)
- 내용:
  - `@keyframes rainbowSweep`(그라데이션 좌→우 흐름) + `@keyframes rainbowGlow`(글로우 점멸) 추가
  - `.intro-headline.rainbow` 규칙: 7색 무지개 `linear-gradient`를 `background-clip:text`로 글자에 입히고 무한 애니메이션
  - 적용 대상:
    - 소제목1 = `전문 세무사도 꺼려하는 양도소득세, AI가 대신합니다` (히어로)
    - 소제목2 = `양도소득세야, 놀자 ~`
  - `.hl` 강조 span도 무지개에 포함되도록 처리
  - `assets/yangdo_tax_calculator.html` 및 루트 파일 동일 적용

## v4.1.2 (2026-06-06)
- 설명: 인트로 재방문 섹션에 소제목2 `양도소득세야, 놀자 ~` 추가 (⭐ NEW 배지 대체)
- 내용:
  - 기존 `⭐ NEW` 핑크 배지(`.eng-tag.pink`) 삭제
  - 그 자리에 **소제목2** 배치 — 히어로 헤드라인(소제목1)과 동일한 `.intro-headline` 스타일(28px/900), `놀자 ~`는 녹색(`.hl`) 강조
  - `assets/yangdo_tax_calculator.html` 및 루트 파일 동일 적용
  - `.gitignore`에 `mockups/shots/`(검증용 캡처) 추가

## v4.1.1 (2026-06-06)
- 설명: `바로 양도세 계산하기 →` 버튼 파스텔 라이트 핑크 점멸(blink) 효과 적용
- 내용:
  - `@keyframes pastelPinkBlink` 추가 (배경/테두리/글자색/글로우가 1.3초 주기로 부드럽게 깜빡임)
  - `.intro-cta-btn-outline` 기본색을 녹색 → **파스텔 라이트 핑크**(`#FFC2CE`, `rgba(255,182,193,…)`)로 변경하고 무한 점멸 애니메이션 적용
  - hover/active 색상도 핑크 계열로 통일
  - `assets/yangdo_tax_calculator.html` 및 루트 파일 동일 적용

## v4.1.0 (2026-06-06)
- 설명: 인트로 화면에 재방문 유도(engagement) 6개 섹션 추가
- 내용:
  - **목적**: 1회성 사용에 그치는 양도세 계산기를 수시 재방문하는 앱으로 전환 (리텐션 강화)
  - **위치**: 기존 인트로 내용은 그대로 유지하고, 특징 리스트와 `사용 가이드 보기` 버튼 **사이(직전)**에 삽입
  - **추가 섹션 6종** (`.eng-wrap`)
    1. ⭐ **오늘의 양도세 한 컷** — 성공/실패 실화형 사례를 핑크/레드 강조 박스로 노출. 큐레이션 5편을 날짜 기준 순환(매일 갱신), 하단 점 인디케이터·`자세히 보기`
    2. **절세 D-Day** — 처분기한/거주2년/장특공제 등 개인 데드라인 카드(현재 샘플값, 추후 입력값 연동 예정)
    3. **오늘의 OX 퀴즈** — 클릭 시 정답·해설 표시, 스트릭 표기
    4. **세법·시세 속보** — 다주택 중과 재개 등 변경사항 배지
    5. **지금 팔까 vs 나중에 팔까** — 시점별 예상세액 비교표 + 카카오톡 공유
    6. **월 1회 절세 리포트** — 개인 절세 리포트 카드
  - **구현**: `yangdo_tax_calculator.html` 인트로 `<style>`에 `.eng-*` 클래스 추가, HTML 블록 삽입, JS(`ENG_STORIES` 순환·`engQuizAnswer`·`engShareScenario`·`engStoryDetail`) 추가
  - `assets/yangdo_tax_calculator.html` 및 루트 파일 동일 적용
  - 참고: 시안 목업 `mockups/home_preview_v5.html` 추가
  - 비고: ②④⑤는 현재 샘플 데이터 표시 — 후속 단계에서 사용자 입력값 기반 개인화로 고도화 예정

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
