## 2024-03-20 - Initial setup
**Learning:** Initializing journal
**Action:** Ready to record learnings

## 2024-03-20 - Adding Accessible Labels inside CSS Grids
**Learning:** When using visually hidden (`sr-only`) labels for inputs within CSS grid layouts, adding the label as a sibling to the input can unintentionally cause the hidden label to act as a grid item, which breaks the visual column structure.
**Action:** Always wrap the visually hidden label and its corresponding input in a parent `div` element, and apply `w-full` (or 100% width) to the input itself so it expands properly within the grid cell container.
