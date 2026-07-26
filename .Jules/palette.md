## 2026-07-26 - Loading states for screen readers
**Learning:** When adding loading icons (like a spinner) to buttons, screen readers might announce them confusingly if not hidden, alongside the button text. The same applies to visual icons replacing text in loading states.
**Action:** Always use `aria-hidden="true"` on decorative or status icons within buttons to ensure screen readers only announce the button text (e.g., 'Sending...' instead of 'Sending... icon').
