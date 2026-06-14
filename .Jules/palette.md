## 2024-06-14 - Visual Placeholders Need Labels
**Learning:** Relying solely on placeholders for input fields creates an accessibility barrier for screen readers, as they may not correctly announce the field's purpose.
**Action:** Use Tailwind's `sr-only` class on `<label>` elements linked via `htmlFor` and input `id` to maintain a clean UI visually while ensuring screen readers can announce the field correctly.
