
## 2023-10-27 - Accessible Loading States and Supplementary Icons
**Learning:** Adding a loading state to async forms is a critical UX improvement, but replacing text with just a spinner or appending a spinner next to text can be confusing for screen readers if not handled properly. Supplementary icons (like "Send" or a loading spinner) inside buttons that already have descriptive text must be hidden from screen readers using `aria-hidden="true"` to prevent redundant or confusing announcements.
**Action:** When adding supplementary icons or loading spinners (e.g., `Loader2` from `lucide-react`) to buttons that have descriptive text (like "Submit Request" or "Sending..."), always apply `aria-hidden="true"` to the icon element to maintain a clean screen reader experience.
