<font size="36">**Frontend Test Task**</font>

**Task:** Implement the Ecosolution landing page according to the technical specifications.

**Deadline:**

**07.07.2024 23:59**

**Technologies:**
 - React

**Materials:**
1. <a href="https://www.figma.com/file/pTbhAbEXjsofeQHmtIE2tK/Ecosolution?type=design&node-id=136%3A1944&mode=design&t=dlfJhTEVY9V6T0vg-1" target="_blank">Design Mockup (Final tab)</a> 
2. Technical Specifications
   
**Components and Requirements:**
- Header:
Fixed Header:
Contains the logo, burger menu, and "Get in touch" (except on mobile).
Changes color on scroll (refer to the UI kit).
Clicking "Get in touch" scrolls smoothly to the "Contact Us" section.
Burger Menu:
Contains a close button, navigation menu, and social media links.
Each menu item is clickable and should scroll smoothly to the corresponding section on the page.
The height of the burger menu should be the full screen, with padding from the screen edges at the bottom the same as the top, as shown in the mockup.
On tablets, the burger menu looks the same as the desktop version.
- Main Section:
Clicking "Learn more" scrolls smoothly to the "Cases" section.
- About (Values) Section:
Use CSS Grid to layout the list of values.
On mobile, only the values are displayed, not the photos.
- Electricity Section:
To earn extra points, implement an automatic counter that increments by 1 per second instead of static numbers. This task is optional.
- Cases Section:
Infinite slider.
The slide can be changed by clicking the corresponding buttons or dragging.
Clicking the button should scroll one slide at a time.
- FAQ Section:
By default, the first answer is open.
Only one answer can be open at a time.
The answers are found in the comments in the mockup.
Clicking "Contact Us" scrolls smoothly to the "Contact Us" section.
- Contact Us Section:
The form must be validated.
The form fields "Full name", "E-mail", and "Phone" are required; the "Message" field is optional.
After simulating form submission, the user should be informed that the form has been sent.
- Footer:
Contains an arrow that scrolls smoothly to the "Main" section when clicked.

**Acceptance Criteria:**
- Fixed Layout in Pixels: The layout should be in fixed pixels.
- Semantic and Valid HTML: Ensure semantic and valid HTML, including basic accessibility settings (a11y).
- Responsive and Cross-browser Compatibility:
- Mobile: from 360px to 480px (responsive layout, should stretch).
- Tablet: 768px.
- Desktop: 1280px.
- Mobile-First Approach: Use a mobile-first design approach.
- Clean Code: Ensure clean code with maintained formatting. It is recommended to use ESLint/Prettier.
- Component-Based Architecture: Break down the code into separate components.
