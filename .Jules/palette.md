## 2024-07-30 - Loader2 in Buttons requires aria-hidden
**Learning:** When using loading icons like 'Loader2' or decorative icons like 'Send' next to text in a submit button, screen readers will announce the icon incorrectly if left visible to them. Since the button text already conveys the state ('Sending...' or 'Submit Request'), the icons are purely decorative.
**Action:** Always add `aria-hidden="true"` to supplementary or loading icons placed inside buttons alongside descriptive text.
