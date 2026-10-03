## 2024-10-03 - ContactForm UX Improvement
**Learning:** Found a submit button with a static text loading state ('Sending...') combined with a static Send icon. Missing an accessible loading spinner as expected by the established project convention.
**Action:** Replaced the static Send icon with an animated Loader2 spinner when `status === 'loading'` and added `aria-hidden='true'` to supplementary icons to prevent redundant screen reader announcements.
