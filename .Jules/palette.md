## 2026-07-03 - Supplementary Icons Accessibility
**Learning:** Screen readers announce both the text and the supplementary icon in a button, leading to redundant or confusing announcements (e.g., "Submit Request, Send").
**Action:** Always apply `aria-hidden="true"` to supplementary icons inside interactive elements (buttons, links) when the text already clearly describes the action.
