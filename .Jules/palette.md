## 2026-06-08 - Adding sr-only labels for visual placeholders
**Learning:** When forms rely purely on visual placeholders for aesthetics, screen readers lack context. Wrapping inputs with `sr-only` labels provides the necessary accessibility context without altering the intended visual design.
**Action:** Use Tailwind's `sr-only` class on explicitly linked `<label>` elements (using `htmlFor` and `id`) whenever inputs only use placeholders visually.
