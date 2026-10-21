## 2024-05-18 - Improve Button Loading State and Add aria-hidden to Icon
**Learning:** Adding visual feedback to the contact form button with an animated spinner provides immediate feedback. In addition, applying `aria-hidden="true"` to supplementary icons alongside text inside interactive elements avoids confusing screen reader announcements.
**Action:** Replace text-only loading indicator with an animated loading spinner (from `lucide-react`) combined with text, and ensure the "Send" icon has `aria-hidden="true"`.
