## 2024-03-21 - Add ARIA hidden to Button Icons
**Learning:** When a button text changes state (e.g., "Submit Request" to "Sending...") and includes an icon, screen readers may redundantly read the icon if it's not hidden.
**Action:** Always add `aria-hidden="true"` to decorative or supplementary icons inside buttons that already have descriptive text.
