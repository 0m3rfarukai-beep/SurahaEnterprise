## 2026-07-17 - Adding loading states to async form submissions
**Learning:** Found a pattern where supplementary icons inside buttons lack `aria-hidden="true"`, which can cause screen readers to announce redundant information. Additionally, async form submissions lack visual loading indicators like spinners, making it unclear to users if their request is being processed.
**Action:** Always include a `Loader2` spinner with `animate-spin` during async operations, and ensure supplementary icons within text buttons have `aria-hidden="true"`.
