## 2026-07-18 - Prevent Redundant Screen Reader Announcements in Buttons
**Learning:** When combining text with a supplementary icon inside a button (such as 'Submit Request' alongside a 'Send' or 'Loader2' icon), screen readers might announce both the text and the icon's fallback text, causing confusion.
**Action:** Always apply `aria-hidden="true"` to supplementary icons inside buttons to ensure screen readers only announce the intended button text.
