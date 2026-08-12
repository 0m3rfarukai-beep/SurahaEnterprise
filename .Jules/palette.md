## 2024-05-24 - Screen Reader Redundancy in Buttons
**Learning:** Decorative or supplementary icons (like "Send" next to "Submit") within buttons are read aloud by screen readers alongside the text, causing confusing, redundant announcements.
**Action:** Always apply `aria-hidden="true"` to supplementary icons inside labeled interactive elements (like buttons or labels) to keep announcements clean.
