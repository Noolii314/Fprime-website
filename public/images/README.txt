Image guide for backgrounds and logo
====================================

Place your images in this folder. Suggested files:

Hero slideshow (background of the first section):
- /public/images/hero-1.jpg
- /public/images/hero-2.jpg
- /public/images/hero-3.jpg

Other section backgrounds:
- /public/images/industries.jpg   (Industries section)
- /public/images/process.jpg      (How we work section)
- /public/images/team.jpg         (Why Fprime section)
- /public/images/contact.jpg      (Contact section)

Logo:
- The header currently uses a stylised text/logo block (.logo-img).
- If you prefer a proper logo file, add something like `/public/images/fprime-logo.svg`
  and replace the `.logo-img` div in app/page.tsx with an <img> tag, e.g.:

    <div className="logo">
      <img src="/images/fprime-logo.svg" alt="Fprime" className="logo-img" />
      <div>
        <div className="logo-text">Fprime</div>
        <span className="logo-sub">Applied AI</span>
      </div>
    </div>

Make sure images are reasonably optimised for the web.
