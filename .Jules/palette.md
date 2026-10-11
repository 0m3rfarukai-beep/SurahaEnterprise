
## 2024-11-20 - Explicit HTML Input Types and Screen Reader Accessibility
**Learning:** Adding explicit HTML `type` attributes (e.g., `type="email"`, `type="tel"`, `type="url"`) to inputs significantly enhances mobile UX by automatically triggering optimized software keyboards (like showing "@" and ".com" for emails). Additionally, when pairing supplementary text and icons inside buttons (e.g., "Submit Request" alongside a Send icon), applying `aria-hidden="true"` to the icon prevents redundant or confusing screen reader announcements, leading to a much smoother auditory experience.
**Action:** Always apply the most semantically appropriate HTML `type` attribute to text inputs and ensure supplementary UI icons that purely reinforce visible text have `aria-hidden="true"`.
