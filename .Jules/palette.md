## 2024-06-12 - Form Submission Async Feedback
**Learning:** Adding a visible loading state to form submit buttons significantly improves perceived performance and prevents duplicate submissions while the mock request completes.
**Action:** Always swap static submit icons (like `Send`) with an animated spinner (`Loader2` with `animate-spin`) when a form transitions to a `loading` state.
