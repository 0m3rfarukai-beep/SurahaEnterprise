## 2023-10-27 - Form Submission Loading State A11y

**Learning:** When adding loading icons (like `Loader2` replacing `Send`) to buttons that already have descriptive text (e.g., "Sending..."), the icons themselves can be redundant and distracting for screen readers if not hidden.

**Action:** Always apply `aria-hidden="true"` to supplementary icons within text-labeled buttons to ensure a cleaner, more focused experience for users relying on assistive technologies.
