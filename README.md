# Agni Club — Static Information Blog

A pure-HTML, production-ready informational blog about the Agni Club app.
No build step, no framework — just open `index.html` or deploy the folder
to any static host (Netlify, Cloudflare Pages, Vercel static, GitHub Pages,
Nginx, S3, etc.).

## Structure

```
.
├── index.html              # Home
├── 404.html                # Custom not-found page
├── about/                  # About Us
├── contact/                # Contact form (static demo)
├── login/                  # Login guide + preview form
├── register/               # Register guide + preview form
├── signup/                 # Sign-up guide
├── giftcode/               # Gift code explanation
├── responsible-gaming/     # Responsible-gaming guidelines
├── privacy-policy/         # Privacy policy
├── terms/                  # Terms of use
├── disclaimer/             # Disclaimer
├── blogs/                  # Blog index + 4 articles
├── assets/
│   ├── css/style.css       # Single design-system stylesheet
│   ├── js/main.js          # Nav + small interactions
│   ├── images/             # Logo + bonus reference images (WebP)
│   └── favicon/            # Favicon
├── robots.txt
├── sitemap.xml
└── manifest.json           # PWA manifest
```

## Customise

- **Brand colors:** edit the `:root` block in `assets/css/style.css`.
- **Logo:** replace `assets/images/logo.webp` (same filename keeps everything wired).
- **Domain:** the canonical URLs and sitemap currently use
  `https://agniclublogin.com` — find/replace to swap in your final domain.
- **Add a blog post:** copy `blogs/safe-play-checklist/index.html` to a new
  slug folder, edit content, and add the URL to `sitemap.xml` and the
  `blogs/index.html` card grid.

## SEO / Performance Notes

- One critical CSS file, system + Google fonts.
- Every page has a unique title, meta description, canonical, OG and
  Twitter tags.
- JSON-LD ships per page: Organization, WebSite + SearchAction,
  SoftwareApplication, FAQPage, BreadcrumbList, Article.
- Images use WebP and `loading="lazy"`.
- Mobile-first responsive nav.

## Disclaimer

Informational blog only. Not affiliated with any operator. 18+.
