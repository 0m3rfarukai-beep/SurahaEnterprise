## 2024-05-16 - Async Button Loading States & Screen Readers
**Learning:** When text is combined with an icon (like 'Send') in a button, screen readers can announce redundant or confusing information if the icon isn't hidden. Similarly, for async buttons, providing visual loading feedback is key to a good user experience.
**Action:** Use `Loader2` with `animate-spin` for loading states on submit buttons, and ensure `aria-hidden="true"` is applied to supplementary icons (like the Send icon or the Loader spinner) to prevent screen reader noise.
