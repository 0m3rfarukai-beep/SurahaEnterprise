## 2026-07-08 - Accessible Contact Form Icons
**Learning:** Decorative icons in submit buttons (like the Send icon alongside text) are read aloud by screen readers if not hidden, creating a redundant and poor UX (e.g., 'Submit Request Send').
**Action:** Always add `aria-hidden="true"` to supplementary, purely visual icons when paired with descriptive text in buttons or interactive elements.
