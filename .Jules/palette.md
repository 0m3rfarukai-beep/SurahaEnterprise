## 2024-05-24 - Preserving CSS Grid Layouts with sr-only Labels
**Learning:** When adding `sr-only` labels to inputs within a CSS grid layout, the label itself can become a grid item and break the intended layout structure if added directly adjacent to the input.
**Action:** Always wrap the visually hidden label and its associated input inside a parent `<div>` container. Additionally, ensure the input element has `w-full` applied so it continues to fill the grid cell properly.
