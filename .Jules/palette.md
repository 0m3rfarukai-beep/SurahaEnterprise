## 2024-05-15 - Missing Input Labels
**Learning:** Found inputs in `GrowthCheckTool` that lack associated `<label>` elements or `aria-label` attributes, relying solely on placeholders. This is poor for accessibility as screen readers may miss the context when users tab into the input.
**Action:** Adding visually hidden (sr-only) labels or simple aria-labels to all form inputs within the project that only rely on placeholders.
