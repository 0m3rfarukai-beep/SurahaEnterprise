## 2024-03-01 - Prevent redundant screen reader announcements for decorative icons in buttons
**Learning:** Decorative icons placed inside buttons alongside text (like a 'Send' icon next to 'Submit Request' text or a loading spinner) can cause screen readers to announce them unnecessarily, creating a confusing or redundant user experience.
**Action:** Always add `aria-hidden="true"` to supplementary/decorative icons inside elements that already have clear textual descriptions or labels.
