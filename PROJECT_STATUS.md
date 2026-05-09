# Project Status: Yangdo Tax Calculator AI

## Current Version: v4.0.5
**Last Updated:** 2026-05-09 21:27:12

## Recent Changes
- **v4.0.5**: Updated launcher label to "양도세 계산", replaced the header emoji with the app icon, removed the header version text, and lowered the font view controls.
- **v4.0.4**: Added the "166% 보기" text-size option beside "200% 보기" and "기본 보기"; preserved the intro headline exclusion.
- **v4.0.3**: Added fixed top-right "크게 보기/기본 보기" text-size controls. Large mode doubles app text size while excluding the intro headline slogan.
- **v4.0.1**: 용어 정정 - [취득 원인 정의]를 보다 직관적인 **[취득 종류]**로 변경.
- **v4.0.0**: **구조적 대개편 (Structural Overhaul)** - [취득 원인]을 계산의 최상위 부모 정보로 격상. 전문가용 신고 프로세스(취득->보유->양도) 논리 완성.
- **v3.5.2**: Structural UI 개편 - [취득 원인] 선택을 기본정보 탭 최상단으로 이동.
- **v3.5.1**: Marked Inheritance (상속) and Gift (증여) acquisitions as [Comming Soon !] in the UI to focus on 매매 logic stability.
- **v3.4.4**: Fixed spacing in report text (보유/거주 기간).
- **v3.4.3**: Synced history/version, removed AI comment text, and changed note area background to light gray.
- **3-Column Expert Report**: Implemented "Label | Value | Expert Note" layout for professional insights.
- **Logic Correction**: Fixed high-value housing (12억) taxable gain proration based on selling price.
- **LTDC Breakdown**: Added a toggleable 6-step breakdown for long-term holding deductions.
- **UI Cleanup**: Removed redundant asterisks (*) from Acquisition/Transfer date labels.
- **Workflow Optimization**: Consolidated "Tax Exemption" tab into the main calculation results flow.

## Pending Tasks
- [x] Establish and Register Deployment Rules (KI: tax_calculator_rules).
- [ ] Implement 'Land' and 'Building' calculation logic (currently placeholders).
- [ ] Mobile responsive audit for the 3-column grid.
- [ ] Data persistence (LocalStorage) enhancements.

## Development Rules
- **Rule 01**: Every update must pass a Node-based syntax check before delivery.
- **Rule 02**: Browser verification with cache bypass is mandatory for version bumps.
- **Rule 03**: Extensionless URL support (--ext html) must be maintained in the dev server.

## Technical Notes
- Core Logic: `_updateCalc()` in `yangdo_tax_calculator_v2_5.html`.
- Style: Vanilla CSS grid-based layout.
- Version Control: Using Git tags for restoration points.
