# Off the G

Greenpoint's unofficial field guide. A locally-written catalog of the dive bars,
slice joints, pierogi counters, and neighborhood institutions that make this
place what it is.

Built with [Astro](https://astro.build) + Tailwind v4. Deployed on Netlify.

## Adding a spot

Create a new markdown file in `src/content/spots/`. Any filename works — the
slug doesn't matter, the `category` frontmatter field is what routes it.

```yaml
---
name: "Place Name"
category: "pizza" # see src/content.config.ts for valid categories
hook: "One-line quotable hook, max 140 chars."
address: "123 Manhattan Ave, Brooklyn, NY 11222"
hours: "Mon–Sun, 11am–2am"
website: "https://example.com"      # optional
instagram: "@handle"                # optional
tags: ["cash only", "no rezzy"]     # optional
order:
  - "The thing to order"
  - "The other thing"
bestFor: "The situation this place is perfect for."
proTip: "One insider detail. Keep it short."
rank: 10   # lower = higher on the category page. default 100.
---

The Take — 2-3 sentences. Your real opinion, why it matters, what makes it
Greenpoint and not just good.
```

## Commands

| Command           | What it does                              |
| :---------------- | :---------------------------------------- |
| `npm install`     | Install dependencies                      |
| `npm run dev`     | Start dev server at `localhost:4321`      |
| `npm run build`   | Build production site to `./dist/`        |
| `npm run preview` | Preview the production build locally      |

## Deploy

Push to GitHub, connect the repo to Netlify. `netlify.toml` handles the rest.

## Roadmap

- [ ] Replace sample entries with real ones
- [ ] Logo / favicon
- [ ] Photo handling (Cloudinary or local `/public`)
- [ ] Map view (Leaflet + OpenStreetMap) — V2
- [ ] Tip submission form
- [ ] RSS feed
