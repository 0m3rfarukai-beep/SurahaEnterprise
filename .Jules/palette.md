## 2024-06-17 - [Accessible Input Grid Layouts]
**Learning:** When adding `sr-only` labels to inputs within CSS grid layouts, adding the label as a sibling element can break the grid layout structure (making the visually hidden label act as a grid item).
**Action:** Always wrap the `sr-only` label and its associated `<input>` in a parent `<div>` container to preserve the intended grid layout, and ensure the input maintains `w-full` if it previously relied on grid-stretching.
