## 2024-10-16 - Adding `sr-only` Labels to CSS Grid Inputs
**Learning:** When adding `sr-only` (visually hidden) labels to inputs that are direct children of a CSS Grid layout, the label element itself becomes a grid item, which unexpectedly alters the grid's column/row structure and breaks the layout.
**Action:** Wrap both the visually hidden `<label>` and the `<input>` element inside a parent `<div>` element, and apply `w-full` class to the input to ensure it fills the container. This prevents the grid layout from breaking while preserving full screen reader accessibility.
