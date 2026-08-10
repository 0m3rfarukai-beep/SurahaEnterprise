## 2023-10-27 - Accessible Loading States in Buttons
**Learning:** When combining text with a supplementary icon inside a button or label (such as 'Submit Request' alongside a 'Send' or loading spinner icon), screen readers can sometimes announce the icon unnecessarily, causing a confusing experience.
**Action:** Always apply `aria-hidden="true"` to supplementary/decorative icons within buttons that already have clear visible text describing their action. Additionally, utilize `Loader2` with `animate-spin` for clear visual loading feedback.
