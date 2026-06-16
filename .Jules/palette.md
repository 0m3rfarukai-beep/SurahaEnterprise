
## 2024-06-16 - Add loading spinner and ARIA attributes to ContactForm
**Learning:** Async operations without visual loading indicators (spinners) and screen reader announcements (`aria-live`) provide poor UX and accessibility during form submissions.
**Action:** Always pair disabled loading states with a `Loader2` spinner (`animate-spin`) and `aria-live="polite"` so both visual and screen reader users understand the system is processing.
