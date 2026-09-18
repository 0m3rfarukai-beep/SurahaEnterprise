## 2024-05-24 - Input Types & Loading States
**Learning:** React inputs default to `type="text"`. Not setting `type="email"`, `type="tel"`, or `type="url"` severely impacts mobile UX by not bringing up the optimized software keyboard. Also, using purely text for loading buttons isn't as accessible or visually engaging as pairing it with an `aria-hidden` spinner icon.
**Action:** Always verify `type` attributes on contact forms, and ensure decorative or loading icons are given `aria-hidden="true"` so screen readers don't misinterpret them.
