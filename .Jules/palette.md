## 2023-10-25 - Async Button Feedback & Icon Accessibility
**Learning:** Adding loading states to async form submissions prevents double-submissions, and supplementary icons without `aria-hidden="true"` can confuse screen reader users. The project uses `Loader2` with `animate-spin` for loading states.
**Action:** Apply `aria-hidden="true"` to decorative icons in buttons and always provide visual feedback (spinners) for async actions to improve both UX and accessibility.
