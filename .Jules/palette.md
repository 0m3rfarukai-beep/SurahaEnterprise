## 2024-10-31 - Accessibility in CSS Grids
**Learning:** Adding sr-only labels to inputs inside a CSS grid without an enclosing container breaks the grid layout by treating the hidden label as a separate grid item.
**Action:** Wrap the label and input in a parent `div` and apply `w-full` to the input to prevent the visually hidden label from acting as an unintended grid item and breaking the layout.
