## 2024-05-18 - Missing labels in generic form controls
**Learning:** Found that custom/inline tools like the Free Website Growth Check occasionally use raw `<input>` and `<select>` fields relying only on `placeholder` attributes rather than properly linked `<label>` tags. Since it wasn't using `react-hook-form` and Shadcn components, basic HTML accessibility principles were bypassed.
**Action:** When inspecting small tools or widgets outside the main contact forms, always verify that raw HTML `<input>`s are accompanied by `<label htmlFor="...">` and matching `id` attributes.
