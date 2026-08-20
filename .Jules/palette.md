## 2025-02-20 - Supplementary Icon Screen Reader Avoidance
**Learning:** Adding icons inside interactive elements like buttons without proper ARIA attributes can cause screen readers to redundantly announce the SVG content or disrupt the core button label.
**Action:** Always apply `aria-hidden="true"` to supplementary decorative icons (like `Send` or `Loader2`) alongside text inside buttons to ensure a clean, focused screen reader experience.
