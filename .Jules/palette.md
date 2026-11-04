## 2024-11-04 - ARIA labels for GrowthCheckTool inputs
**Learning:** When form controls (`<input>`, `<select>`) rely solely on visual placeholders and strict design constraints preclude a visible `<label>`, always add an explicit `aria-label` attribute to maintain screen reader accessibility.
**Action:** Add `aria-label` to all inputs in `GrowthCheckTool.jsx` and similar components that lack `<label>` tags.
