# Personal Portfolio — Umang Ratra

A single-page HTML/CSS/JS portfolio site with a dev/terminal-inspired
visual style: a left "IDE nav rail," a commit-log-style experience
timeline, and skill bars styled like loading meters.

## Structure

```
portfolio-project/
├── index.html          Main page — all sections live here
├── css/
│   └── style.css        All styling (design tokens at the top)
├── js/
│   └── script.js         Mobile menu, active-link highlighting,
│                          typing effect, skill-bar animation,
│                          contact form handling
├── assets/
│   └── resume.pdf         Umang's resume (swap this file whenever it's updated)
└── README.md
```

## Sections included

1. **Header / hero** — name, tagline, avatar, call-to-action buttons
2. **About** — bio, photo, mini "commit log" experience timeline, stats
3. **Skills** — animated skill bars + a row of tool "chips"
4. **Projects** — four project cards with description, tags, and links
5. **Resume** — button to download `assets/resume.pdf`
6. **Contact** — email/phone/location plus a front-end contact form
7. **Footer** — copyright + quick links

## How to customize

- **Name & copy**: edit the text directly in `index.html`. Search for
  "Umang Ratra" if you need to update the name throughout.
- **Photo**: the hero and about sections currently use a generated SVG
  avatar (no photo included, so nothing here is a stock or borrowed
  image). Replace `<svg class="avatar-svg">…</svg>` with an
  `<img src="assets/photo.jpg" alt="Your name">` tag once you add your
  own photo to `assets/`.
- **Colors / fonts**: all design tokens are declared as CSS custom
  properties at the top of `css/style.css` under `:root`.
- **Skills**: adjust the `width` percentage on each `.skill__fill` in
  `index.html`.
- **Projects**: duplicate a `<article class="card">…</article>` block
  and update its title, description, tags, and links.
- **Resume**: replace `assets/resume.pdf` with your real resume, same
  filename, or update the `href` in the Resume section.
- **Contact form**: the form currently only shows a confirmation
  message in the browser (no backend). Wire it up to a form service
  (e.g. Formspree) or your own API endpoint by changing the `<form>`
  action/handler in `js/script.js`.

## Running it

No build step is required. Open `index.html` directly in a browser,
or serve the folder locally, e.g.:

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000`.
