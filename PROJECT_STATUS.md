# Project Status: Yangdo Tax Calculator AI

## Current Version: v3.2.1
**Last Updated:** 2026-05-08 23:30:00

## Recent Changes
- **v3.2.1**: Removed all mandatory indicator asterisks (*) from UI labels (Static/Dynamic).
- **v3.2.0**: Unified versioning across UI and Audit Report; Agent takeover.
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
