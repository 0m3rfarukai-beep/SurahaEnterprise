## 2024-05-24 - Screen Reader Announcements and Supplementary Icons
**Learning:** When adding supplementary icons (like a 'Send' icon or a 'Loading' spinner) alongside informative text within interactive elements like buttons, screen readers can sometimes incorrectly announce the icon if it has an inferred name or role, leading to redundant or confusing announcements.
**Action:** Always apply `aria-hidden="true"` to decorative or supplementary icons that are accompanied by adjacent descriptive text to prevent screen readers from announcing them and maintain a clean audio experience for users.
