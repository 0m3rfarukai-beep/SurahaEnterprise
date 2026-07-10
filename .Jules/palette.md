## 2025-03-01 - Adding Spinner to Async Submit Button
**Learning:** Loading states for async actions (like form submit buttons) should use the `Loader2` component from `lucide-react` paired with the Tailwind `animate-spin` class per project convention. Also empty catch blocks should be used when error is not needed (`catch {}`) to avoid ESLint `no-unused-vars` error.
**Action:** Adding `Loader2` component when form status is 'loading' to improve UX feedback in `ContactForm.jsx` and fixing the unused `err` variable issue.
