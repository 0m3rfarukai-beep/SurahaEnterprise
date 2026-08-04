## 2024-08-04 - Screen Reader Compatibility for Icons in Buttons
**Learning:** Decorative or supplementary icons placed alongside text within a button or label (e.g. "Send" icon next to "Submit Request") will be redundantly or confusingly announced by screen readers if not properly hidden.
**Action:** Always apply `aria-hidden="true"` to supplementary icons in interactive elements where the text already provides sufficient context.
