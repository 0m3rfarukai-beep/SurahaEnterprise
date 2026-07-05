## 2026-07-05 - Loading States and Supplementary Icons in Buttons
**Learning:** Adding a loading spinner (Loader2 with animate-spin) to a button on form submission gives great immediate feedback. However, supplementary icons in text buttons (like a "Send" icon alongside "Submit") can cause redundant or confusing announcements for screen readers if not hidden.
**Action:** Always add `aria-hidden="true"` to supplementary icons inside buttons to prevent double-announcing. Standardize on `Loader2` from `lucide-react` with `animate-spin` for loading states to maintain consistency.
