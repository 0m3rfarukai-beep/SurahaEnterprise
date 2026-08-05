## 2026-08-05 - Loading States and Supplementary Icons
**Learning:** Implementing loading states for async actions should use `Loader2` with Tailwind `animate-spin`. Supplementary icons inside a button or label (such as a 'Send' icon alongside 'Submit Request') cause redundant screen reader announcements.
**Action:** Applied `aria-hidden="true"` to supplementary icons and `Loader2` components in form submission buttons to improve accessibility and provide clear feedback.
