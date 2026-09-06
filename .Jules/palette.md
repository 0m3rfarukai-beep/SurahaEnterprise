## 2024-09-06 - Accessible Async Button States

**Learning:** When using supplementary icons (like a 'Send' icon) alongside text in buttons, and conditionally rendering a loading spinner (like `Loader2`) during async operations, the icons can cause redundant or confusing announcements for screen readers if not properly hidden.

**Action:** Apply `aria-hidden="true"` to both the supplementary icon (e.g., `<Send>`) and the loading spinner (e.g., `<Loader2>`) to ensure screen readers only announce the meaningful text content (e.g., "Submit Request" or "Sending..."). Always pair the loading spinner with the `animate-spin` class for visual feedback.
