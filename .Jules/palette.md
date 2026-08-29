## 2024-05-24 - Accessibility for Supplementary Icons in Interactive Elements
**Learning:** When text and supplementary icons (like "Send" or a loading spinner) are used together inside a button, screen readers may redundantly or confusingly announce the icon's name in addition to the text (e.g., "Submit Request Send").
**Action:** Always apply `aria-hidden="true"` to supplementary or decorative icons within interactive elements to ensure screen readers only announce the meaningful text content.
