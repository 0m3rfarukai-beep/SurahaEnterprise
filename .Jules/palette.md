## 2024-05-15 - HTML Input Types for Mobile UX
**Learning:** React Hook Form and UI components (like Shadcn Input) often omit explicit HTML `type` attributes for text inputs by default. Without explicit types (like `type="email"`, `type="tel"`, `type="url"`), mobile devices fallback to the standard text keyboard, leading to poor data entry UX (missing `@` symbols, .com buttons, or number pads).
**Action:** Always apply the most semantically appropriate HTML `type` attribute to text inputs, especially for forms intended for mobile use, to trigger optimized software keyboards.

## 2024-05-15 - ARIA Labels on Supplementary Icons
**Learning:** When combining text with a supplementary icon inside a button or label (such as 'Submit Request' alongside a 'Send' icon), screen readers may announce both the text and a description of the icon (e.g., "Submit Request, Send, button"), which is redundant and confusing.
**Action:** Apply `aria-hidden="true"` to supplementary icons inside buttons or labels to prevent redundant screen reader announcements while maintaining the visual presentation.

## 2024-05-15 - Async Loading States
**Learning:** When implementing loading states for async actions (like form submit buttons), replacing text with just 'Sending...' is a start, but adding a visual indicator (like a spinner) provides much clearer feedback that a background process is ongoing.
**Action:** Use the established project convention: the `Loader2` component from `lucide-react` paired with the Tailwind `animate-spin` class for async action loading states.
