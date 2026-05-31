## 2024-05-18 - Replacing static icons with loading spinners in async operations

**Learning:** Replacing static icons (like a 'Send' arrow) with an animated spinner during form submission provides immediate, clear visual feedback that an action is in progress, improving perceived performance and preventing multiple clicks. Adding `aria-hidden="true"` to these decorative icons ensures screen readers don't read out irrelevant or changing icon names when the button text itself ("Sending..." or "Submit Request") is sufficient.

**Action:** Whenever implementing async form submission buttons, conditionally render an animated spinner in place of any static trailing icon, and ensure all non-informative icons within buttons have `aria-hidden="true"`.
