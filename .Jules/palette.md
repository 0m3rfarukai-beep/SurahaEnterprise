## 2024-05-18 - Keyboard Navigation for Custom Sliders
**Learning:** Custom interactive elements (like the `BeforeAfterSlider`) often miss keyboard navigation, making them inaccessible to keyboard-only users and screen readers. Relying purely on pointer events (`onMouseMove`, `onTouchMove`) is a common accessibility trap.
**Action:** Always add `role="slider"`, `tabIndex={0}`, ARIA attributes (`aria-valuenow`, `aria-valuemin`, `aria-valuemax`, `aria-label`), and an `onKeyDown` handler (supporting Arrow keys, Home, and End) for custom slider components to ensure full accessibility.
