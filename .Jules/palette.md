## 2024-05-24 - Async Button States & ARIA Icons
**Learning:** When pairing visual indicators with async loading states (like `Loader2` for submitting forms), existing icons that were merely supplementary should explicitly have `aria-hidden="true"` so that screen readers don't announce redundant or confusing information to users interacting with the component.
**Action:** Always include `aria-hidden="true"` on icons placed directly alongside readable text inside standard buttons or labels unless the icon carries independent semantic meaning.
