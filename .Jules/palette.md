
## 2024-05-14 - Semantic Input Types & Accessible Supplementary Icons
**Learning:** Using semantically correct HTML input types (`type="email"`, `type="tel"`, `type="url"`) significantly improves mobile data entry UX by automatically triggering optimized virtual keyboards (e.g., showing the '@' symbol or a numpad). Furthermore, when combining text with a supplementary icon inside an interactive element like a button, applying `aria-hidden="true"` to the icon prevents redundant or confusing screen reader announcements, ensuring a cleaner auditory experience.
**Action:** Always apply the most semantically appropriate `type` attribute to text inputs and hide purely decorative or supplementary icons from screen readers using `aria-hidden="true"`.
