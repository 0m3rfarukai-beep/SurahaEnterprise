## 2024-09-24 - Missing Loading Spinner on Submit Button
**Learning:** Adding a `Loader2` from `lucide-react` paired with Tailwind `animate-spin` provides better visual feedback on form submission than text change alone, aligning with established project conventions. Additionally, adding `aria-hidden="true"` to supplementary icons in buttons prevents redundant screen reader announcements.
**Action:** Enhance `ContactForm.jsx` submit button with a spinner during loading state, and apply `aria-hidden` to icons.
