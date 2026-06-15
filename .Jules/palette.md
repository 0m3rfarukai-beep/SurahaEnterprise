## 2026-06-15 - Consistent Async Button Loading States
**Learning:** The application lacked visual indicators (like spinners) during async form submissions, relying only on text changes. Combining `lucide-react`'s `Loader2` with Tailwind's `animate-spin` provides an accessible, clear, and consistent loading pattern that improves user feedback.
**Action:** Always wrap async submit buttons with this `Loader2` + `animate-spin` pattern alongside the existing `disabled` state.
