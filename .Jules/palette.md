## 2024-05-19 - Loading State for Actionable Buttons
**Learning:** Adding explicit loading states (like spinners and text changes) to primary action buttons (like "Generate Growth Check") greatly improves user feedback by clarifying that an asynchronous operation is in progress, preventing duplicate submissions, and ensuring a smoother experience.
**Action:** Always implement a robust loading state for interactive buttons linked to async tasks, using accessible indicators (like `aria-hidden="true"` on spinners) and intuitive text changes (e.g., "Generating...").
