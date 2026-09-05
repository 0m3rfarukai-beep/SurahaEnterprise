## 2024-05-24 - Screen Reader Redundancy on Button Icons
**Learning:** When pairing descriptive text like "Submit Request" with decorative supplementary icons (like a "Send" or "Check" icon) inside buttons, screen readers can redundantly announce the icon's generic name alongside the text, creating a confusing experience.
**Action:** Always apply `aria-hidden="true"` to these supplementary, decorative icons inside buttons and alerts to ensure screen readers focus solely on the primary, descriptive text.
