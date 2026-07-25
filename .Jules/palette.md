## 2024-11-20 - Supplementary Icons Accessibility
**Learning:** When combining text with a supplementary icon inside a button or label (e.g., 'Submit Request' alongside a 'Send' icon, or 'Sending...' alongside a 'Loader2' spinner), the icon needs `aria-hidden="true"` to prevent redundant or confusing screen reader announcements.
**Action:** Always add `aria-hidden="true"` to purely decorative or supplementary icons used alongside descriptive text within interactive elements like buttons.
