## 2023-10-25 - Contact Form Mobile UX & Loading States
**Learning:** Text inputs in forms often lack appropriate `type` attributes (`email`, `tel`, `url`), which degrades mobile UX by not triggering optimized software keyboards. Additionally, icon-only or supplementary icons in buttons can cause redundant screen reader announcements if not explicitly hidden.
**Action:** Always apply the most semantically appropriate HTML `type` attribute to text inputs. Always pair `Loader2` with `animate-spin` for loading buttons, and add `aria-hidden="true"` to supplementary button icons.
