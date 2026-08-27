## 2024-03-24 - CSS Grid Accessibility Pattern
**Learning:** Adding `sr-only` labels directly inside a CSS grid container breaks the layout because the visually hidden elements still participate as grid items.
**Action:** When adding accessibility labels to inputs within CSS grid layouts, always wrap the label and input in a parent `<div>` and apply `w-full` to the input to prevent the visually hidden label from acting as an unintended grid item.
