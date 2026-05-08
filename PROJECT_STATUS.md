# Project Status: Yangdo Tax Calculator AI

## Current Version: v3.4.4
**Last Updated:** 2026-05-09 01:38:00

## Recent Changes
- **v3.4.4**: Fixed spacing in report text (보유/거주기간 -> 보유/거주 기간).
- **v3.4.3**: Synced history/version, removed redundant AI comment text, and changed note area background to light gray.
- **v3.4.2**: Implemented premium styling for "View Details" boxes with animations and expert-tier typography.
- **v3.4.1**: Fixed critical 'incomePerPerson' undefined error in calculation engine.
- **3-Column Expert Report**: Implemented "Label | Value | Expert Note" layout for professional insights.
- **Logic Correction**: Fixed high-value housing (12억) taxable gain proration based on selling price.
- **LTDC Breakdown**: Added a toggleable 6-step breakdown for long-term holding deductions.
- **UI Cleanup**: Removed redundant asterisks (*) from Acquisition/Transfer date labels.
- **Workflow Optimization**: Consolidated "Tax Exemption" tab into the main calculation results flow.

## Pending Tasks
- [x] Remove asterisks (*) from remaining mandatory labels (Selling Price, Acquisition Price, etc.) for consistency.
- [ ] Implement 'Land' and 'Building' calculation logic (currently placeholders).
- [ ] Mobile responsive audit for the 3-column grid.
- [ ] Data persistence (LocalStorage) enhancements.

## Technical Notes
- Core Logic: `_updateCalc()` in `yangdo_tax_calculator_v2_5.html`.
- Style: Vanilla CSS grid-based layout.
- Version Control: Using Git tags for restoration points.
