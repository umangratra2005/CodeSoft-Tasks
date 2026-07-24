# Flowdesk — Landing Page (sample project)

A single-page marketing/landing page built with plain HTML, CSS, and a
touch of JavaScript. Designed as a fictional small-business SaaS
("Flowdesk") to give the layout real content to work with — swap it
for your own product any time.

## Structure

```
landing-page-project/
├── index.html          All page markup
├── css/
│   └── style.css        All styling — design tokens at the top
├── js/
│   └── script.js         Mobile nav toggle, animated stat counters
└── README.md
```

## Sections included

1. **Header** — logo, nav links, log in / sign up, mobile hamburger menu
2. **Hero** — headline, sub-copy, two CTAs, a CSS-built dashboard
   "mockup" with a floating stat badge (no stock photos used)
3. **Trust logos** — a row of fictional client wordmarks
4. **Features** — 3-column card grid with icon, title, description
5. **How it works** — 3-step numbered process
6. **Stats** — animated counters (count up when scrolled into view)
7. **Testimonial** — quote block with author
8. **CTA banner** — final call-to-action on a dark panel
9. **Footer** — brand blurb, link columns, legal row

## Design notes

- **Colors, fonts, spacing** are all defined as CSS custom properties
  at the top of `css/style.css` (`:root`), so re-theming the whole
  page is mostly a matter of changing values there.
- The hero visual is a hand-built CSS/SVG "browser mockup" rather than
  a photo — easy to restyle, and there's no image licensing to worry
  about. Replace it with a real product screenshot by swapping the
  `.mockup` markup for an `<img>` if you'd like.
- Layout uses CSS Grid/Flexbox throughout with generous padding and a
  shared `--container` width, to keep alignment consistent and avoid
  overlapping elements at any screen size.

## How to customize

- **Copy**: edit text directly in `index.html`.
- **Branding**: search for "Flowdesk" to replace the product name.
- **Colors**: change the `--panel`, `--accent`, and `--rose` values in
  `css/style.css`.
- **Stats**: adjust `data-count` / `data-suffix` attributes on the
  `.stat__value` spans in the Stats section.
- **Nav links / footer links**: update the `href` attributes to point
  wherever you like.

## Running it

No build step required. Open `index.html` directly in a browser, or
serve the folder locally:

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000`.
