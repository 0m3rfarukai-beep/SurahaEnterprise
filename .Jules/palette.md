
## 2024-05-14 - Micro-UX Forms and Icons
**Learning:** Using `aria-hidden="true"` on supplementary icons inside buttons (like `Send` or `Loader2` next to text) prevents redundant or confusing screen reader announcements. Additionally, using specific HTML input types (`type="email"`, `type="tel"`, `type="url"`) triggers the correct optimized software keyboards on mobile devices, vastly improving mobile data entry UX.
**Action:** Always apply `aria-hidden="true"` to decorative or supplementary icons when accompanying textual labels inside interactive elements. Ensure form inputs always use the most semantically appropriate `type` for their expected data.
