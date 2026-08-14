## 2024-05-18 - sr-only labels in grid layout
**Learning:** Adding screen reader labels (`sr-only` class) adjacent to inputs that exist inside a CSS grid container will inadvertently make those visually hidden labels act as new grid items, breaking the expected column layout.
**Action:** When adding `sr-only` labels to inputs within grid layouts, wrap the `<label>` and `<input>` together in a parent `<div>` and apply `w-full` (or similar 100% width) to the input to maintain the intended grid column structure.
