## 2024-07-21 - Standardizing Loading States and Icon Accessibility
**Learning:**
- The established project convention for async loading states (like form submit buttons) is to use `Loader2` from `lucide-react` with the Tailwind `animate-spin` class.
- When combining text with a supplementary icon inside a button or label, `aria-hidden="true"` must be applied to the icon to prevent redundant or confusing screen reader announcements.
**Action:** Applied this pattern to the ContactForm submit button to improve both UX (visual feedback during loading) and accessibility (cleaner screen reader output).
