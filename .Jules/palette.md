## 2026-08-15 - Prevent Redundant Screen Reader Announcements for Icons
**Learning:** When combining text with a supplementary icon inside a button or label (such as 'Submit Request' alongside a 'Send' icon), screen readers may redundantly announce the icon's name in addition to the text, causing confusing user experiences.
**Action:** Apply `aria-hidden="true"` to supplementary icons when adjacent descriptive text is already present to prevent redundant screen reader announcements.
