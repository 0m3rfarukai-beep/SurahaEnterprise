## YYYY-MM-DD - Initial Setup
**Learning:** Initial setup of palette journal.
**Action:** Ready to track critical UX/accessibility learnings.

## 2023-10-25 - Mobile-Friendly Form Inputs and Loading States
**Learning:** Adding correct semantic HTML types (`type="email"`, `type="tel"`, `type="url"`) significantly improves mobile form completion rates by triggering the appropriate software keyboards. Additionally, when swapping icons during async actions (like replacing a 'Send' icon with a 'Loader2' spinner), it is crucial to use `aria-hidden="true"` on both to avoid redundant and confusing screen reader announcements for purely visual states.
**Action:** Always verify input types align semantically with the data expected. For async buttons, implement explicit visual loading states (e.g., `Loader2 animate-spin`) combined with proper `aria-hidden` attributes for decorative icons.
