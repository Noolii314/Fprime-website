# Fprime Next.js Landing Page

This is a Next.js (App Router) version of the Fprime landing page, with:

- Aggressive, confident copy in English
- Sector-specific sections (industry, retail, finance, agriculture)
- Hero background slideshow (3 images rotated on a timer)
- Responsive layout with a mobile nav drawer
- Minimal, production-ready structure – ready for Vercel/Netlify

## Getting started

1. Install dependencies:

   ```bash
   npm install
   # or
   pnpm install
   ```

2. Run the dev server:

   ```bash
   npm run dev
   ```

   Then open http://localhost:3000 in your browser.

3. Add your own images

   Put your images in `public/images/` and follow the hints in
   `public/images/README.txt`.

## Deploying

- The project is ready to be deployed to Vercel out of the box.
- You can also use any platform that supports a standard Next.js app.

## Notes

- The contact form is front-end only. Wire it to your own backend (email API, CRM,
  ticketing, etc.) as needed.
- The hero slideshow uses `HERO_IMAGES` in `app/page.tsx`. Adjust the filenames or
  add/remove images as you like.
