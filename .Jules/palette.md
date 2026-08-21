## 2024-05-18 - Loading States and Icon Accessibility
**Learning:** For async operations, the established convention is to use `Loader2` from `lucide-react` paired with Tailwind's `animate-spin` class for loading feedback. Additionally, when supplementary icons are used inside buttons (e.g. text + icon), the icons must have `aria-hidden="true"` to prevent redundant screen reader announcements.
**Action:** Implement `Loader2` for loading states and add `aria-hidden="true"` to supplementary icons in interactive elements like buttons.
