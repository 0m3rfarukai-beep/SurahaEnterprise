
## 2025-02-20 - Form Semantic Types and Loading State
**Learning:** Standard text inputs in Shadcn forms can easily miss semantic types (email, tel, url), harming mobile UX. Buttons handling async form submissions (via react-hook-form) also often lack explicit loading states or hide decorative icons from screen readers.
**Action:** When auditing forms, enforce specific HTML5 input types for contact fields, implement `Loader2` for active submissions, and aggressively apply `aria-hidden="true"` to supplementary button icons.
