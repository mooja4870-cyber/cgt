# Project Status: Yangdo Tax Calculator AI

## Current Version: v3.4.0
**Last Updated:** 2026-05-09 01:15:00

## Recent Changes
- **v3.4.0**: Implemented "View Details ▾" for ALL calculation steps in the Result Report and enhanced data persistence.
- **v3.3.2**: Refined Joint Ownership report to follow NTS standard (Total -> Prorated Per-Person).
- **v3.3.1**: Fixed critical 'sur is not defined' error in calculation engine.
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
