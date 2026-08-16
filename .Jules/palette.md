## 2026-08-16 - Accessible Loading States
**Learning:** When combining dynamic text (like "Sending...") and an icon inside a button, screen readers can redundantly announce the icon's role alongside the text, creating a confusing experience. This is especially true when swapping icons for loading states.
**Action:** Always apply `aria-hidden="true"` to supplementary or decorative icons (like `Send` and `Loader2`) inside buttons when the adjacent text already provides full context about the button's current state.
