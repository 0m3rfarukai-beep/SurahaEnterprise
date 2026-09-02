
## 2024-05-18 - Improved submit button accessibility and loading state
**Learning:** Adding `aria-hidden="true"` to supplementary button icons (like `Send` or `Loader2`) prevents redundant and confusing screen reader announcements when the button text already describes the action. Standardizing on `Loader2` with the `animate-spin` Tailwind class provides a consistent, high-quality micro-interaction for async form submissions.
**Action:** When implementing loading states for async actions (like form submit buttons), use the `Loader2` component from `lucide-react` paired with the Tailwind `animate-spin` class, and ensure all supplementary icons within interactive elements have `aria-hidden="true"`.
