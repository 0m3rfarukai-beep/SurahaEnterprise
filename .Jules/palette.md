## 2024-05-18 - Standardize Async Action Loading States
**Learning:** Providing immediate visual feedback during async actions (like form submissions) is critical for UX, preventing multiple clicks and assuring the user that the system is processing their request. The established project convention of using `Loader2` from `lucide-react` with Tailwind's `animate-spin` is effective and should be used consistently.
**Action:** Always implement explicit loading states on submit buttons using the `Loader2` convention.
