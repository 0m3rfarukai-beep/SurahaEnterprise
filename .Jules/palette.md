## 2024-09-09 - Accessible Loading States in Action Buttons
**Learning:** Adding a visual loading spinner (`Loader2` with `animate-spin`) next to "Sending..." text makes the async wait much clearer for users. However, these icons are supplementary to the text label.
**Action:** Always add `aria-hidden="true"` to supplementary icons (like `Send` or `Loader2`) inside buttons so screen readers don't announce redundant or confusing information, keeping the focus on the clear text label.
