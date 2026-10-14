## 2024-10-24 - Accessibility improvements for CSS grid forms
**Learning:** When adding `sr-only` labels to inputs within CSS grid layouts, it can break the visual layout because the visually hidden label becomes an unintended grid item.
**Action:** Wrap the `sr-only` label and the input inside a parent `<div>` container. Additionally, ensure the inner input receives a `w-full` class to maintain its intended width within the new container.
