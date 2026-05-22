## 2024-05-22 - Missing Skip to Content Link and Focus Visibility
**Learning:** Single Page Applications frequently miss a "Skip to Content" link because the overall app shell stays constant, making keyboard navigation repetitive and tedious. Additionally, absolute positioned or floating buttons (like "Back to Top") often neglect focus visible states because developers consider them as secondary non-form elements.
**Action:** Always verify that layout files have a hidden skip link directed at the main content, and ensure floating icon buttons include `focus-visible` outlines.
