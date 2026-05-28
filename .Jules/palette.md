## 2024-05-28 - Placeholder-only inputs without ARIA labels
**Learning:** Found multiple instances where `<input>` elements were using only placeholders for context without any explicit `<label>` or `aria-label`. This is an accessibility issue for screen reader users, who rely on proper labels to understand the purpose of form fields.
**Action:** Always add an `aria-label` attribute to describe the input's purpose when a visible `<label>` is not present.
