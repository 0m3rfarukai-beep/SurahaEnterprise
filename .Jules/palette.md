## 2024-06-29 - Loading State Feedback & Icon Accessibility
**Learning:** Adding visual loading feedback is crucial for forms that fake async delays to prevent multi-submissions. Additionally, decorative icons placed next to text inside buttons trigger redundant screen reader output if not explicitly hidden.
**Action:** Always add `Loader2` (with Tailwind's `animate-spin`) for submitting states in this app, and ensure all purely visual Lucide icons within interactive elements have the `aria-hidden="true"` attribute.
