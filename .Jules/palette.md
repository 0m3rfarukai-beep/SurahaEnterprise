# Palette's Journal

## 2025-02-20 - ContactForm Mobile Input & Loading Accessibility
**Learning:** Text inputs default to the standard alphabetic keyboard on mobile devices. However, using specific semantic `type` attributes like `type="email"`, `type="tel"`, and `type="url"` correctly triggers optimized software keyboards (e.g., displaying the '@' symbol prominently or showing a number pad) which significantly enhances mobile data entry UX. Additionally, when supplementing button text with icons, applying `aria-hidden="true"` to the icon prevents screen readers from redundantly announcing the visual decoration alongside the text.
**Action:** Always apply the most semantically appropriate HTML `type` attribute to text inputs to optimize mobile keyboards. Ensure all supplementary icons inside buttons or labels include `aria-hidden="true"` to maintain clear and concise screen reader announcements.
