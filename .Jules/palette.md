## 2024-05-15 - Accessible Loading States in Buttons
**Learning:** Adding a loading spinner to a submit button provides critical feedback for async operations, but screen readers might redundantly announce supplementary icons (like a "Send" icon alongside "Submit Request"). The project convention uses `Loader2` from `lucide-react` with Tailwind's `animate-spin`.
**Action:** Implement `Loader2` with `animate-spin` for async button loading states and apply `aria-hidden="true"` to supplementary icons inside buttons to prevent confusing screen reader announcements.
