# Maryam Riaz — Web Developer Portfolio

A responsive React + Vite portfolio with a dark purple visual theme.

## Requirements
- Node.js 18+ (recommended)
- npm

## Run locally
1. Extract the project ZIP.
2. Open the `maryam-riaz-portfolio` folder in VS Code.
3. Open a terminal in that folder.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production website is generated in the `dist` folder.

## Important: replace the CV placeholder
The `public/Maryam-Riaz-CV.pdf` file is a temporary placeholder so the Download CV button works immediately. Replace it with your final CV PDF and keep exactly the same filename, or update the link in `src/App.jsx`.

## Project repository / live demo
The BOOKSHOP card currently links to your GitHub profile. Replace that link with the actual BOOKSHOP repository URL when it is ready. A live demo link can be added beside it in `src/App.jsx`. No project URL has been invented.

## Contact form
The form validates name, email, subject, and message, then opens the visitor's default email app using a `mailto:` link. It does **not** send messages directly from the website. For direct delivery, connect a backend or an email service (for example, EmailJS, Formspree, or your own API) and add its credentials securely.

## Main files
- `src/App.jsx` — page sections and contact form
- `src/styles.css` — responsive styling and visual theme
- `src/components/Navbar.jsx` — sticky navigation and mobile menu
- `src/components/SectionTitle.jsx` — reusable section heading
- `src/components/Footer.jsx` — footer and social links
- `public/Maryam-Riaz-CV.pdf` — replaceable CV PDF
