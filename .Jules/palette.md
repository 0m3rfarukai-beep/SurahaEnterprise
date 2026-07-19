## 2024-07-19 - Screen Reader Redundancy in Buttons
**Learning:** Decorative icons inside buttons that already contain descriptive text (e.g., a "Send" icon next to "Submit Request") cause redundant and confusing screen reader announcements if they aren't explicitly hidden from assistive technology.
**Action:** Always apply `aria-hidden="true"` to supplementary or decorative icons that accompany text labels within interactive elements like buttons.
