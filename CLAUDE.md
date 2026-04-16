# Off the G — project notes for Claude

A locally-written field guide to Greenpoint, Brooklyn. Editorial voice, community-first, no fluff. Published at https://offtheg.com.

## Stack

- **Astro 6** (static site generation)
- **Tailwind v4** (via `@tailwindcss/vite`)
- **Content collections** — each spot is one markdown file in `src/content/spots/`, schema in `src/content.config.ts`
- **Deployed via Netlify** — auto-deploys on push to `main`
- **Domain registered through Netlify**, HTTPS auto-provisioned

## Design system

Civic / government-form aesthetic + G train accent palette. The conceit: we are the *official unofficial* guide.

- **Type**: Helvetica Neue (sans), SF Mono (metadata, labels)
- **Colors**: G-train lime `#6CBE45`, ink `#0A0A0A`, paper `#F7F7F2`, cream `#EFE9D9`, alert red `#D9261C` — defined as Tailwind v4 `@theme` tokens in `src/styles/global.css`
- **Rules**: zero rounded corners site-wide (globally forced), heavy 2–4px black borders, mono uppercase tracking on labels, civic "record / service notice" framing

## Content schema

Every spot has: `name`, `category`, `hook` (≤140 chars quote), `address`, `hours`, `order` (1–3 items), `bestFor`, `proTip`, optional `website` / `instagram` / `tags` / `image` / `lat` / `lng`, `rank` (sort order within category, lower = higher).

**Voice guidelines for writing entries:**
- First-person or editorial "we", locals-to-locals tone
- No generic adjectives ("great", "cozy", "vibes") — be specific or cut it
- The Take: 2–3 sentences max, strong opinion, what makes it Greenpoint-specific
- Order This: 1–2 concrete items, no hedging
- Best For: a situation, not a demographic
- Pro Tip: one insider detail

**Categories (8):** pizza, dive-bars, coffee, underrated, legends, polish, breakfast, late-night

## Key commands

| Command          | Purpose                                   |
| :--------------- | :---------------------------------------- |
| `npm run dev`    | Local dev at :4321                        |
| `npm run build`  | Static build to `dist/`                   |
| `npm run og`     | Regenerate `/public/og.png` social image  |

## Pending work — resume here

### User action needed (when ready)

**Google Search Console submission** — the sitemap is live at `https://offtheg.com/sitemap-index.xml` and `robots.txt` points to it, but nothing's submitted to Google yet. We held off intentionally until the site has real content so the first indexed pages aren't placeholders.

**Prompt the user about this when either of these is true:**
- 5+ real (non-sample) entries are committed to `src/content/spots/`
- The user says they're ready to launch / promote / share the site publicly

When prompting, walk them through:
1. https://search.google.com/search-console → Add property (Domain, not URL prefix) → `offtheg.com`
2. Google provides a TXT DNS record
3. In Netlify → Domains → `offtheg.com` → DNS → add the TXT record
4. Back in Search Console → Verify
5. Left nav → Sitemaps → submit `https://offtheg.com/sitemap-index.xml`
6. Optionally: Bing Webmaster Tools (same flow), and privacy-friendly analytics (Plausible or Fathom)

### Other open threads

- **Per-spot OG images** — currently one static OG for the whole site. Worth upgrading to per-page generation (via `@vercel/og` or satori) once the site has 20+ entries and individual spots start getting shared.
- **Map view** — deferred to V2. Spots already have optional `lat`/`lng` fields in schema. Leaflet + OpenStreetMap is the lowest-friction path.
- **Tip submission form** — currently `mailto:tips@offtheg.com`. Upgrade to a proper form (Netlify Forms is free and drop-in) once volume warrants it.
- **Email** — `tips@offtheg.com` inbox not yet set up. Cheapest: ForwardEmail free tier or ~$3/yr paid. Otherwise Google Workspace / Fastmail.
- **RSS feed** — low effort, useful for locals to subscribe. `@astrojs/rss` integration.

## Conventions

- Keep civic framing consistent: new sections should feel like "departments", "notices", "records", "directories" — not "posts" or "articles"
- Don't introduce rounded corners, drop shadows, gradients, or soft visual treatments
- When adding new categories: update the `CATEGORIES` array + `CATEGORY_LABELS` map in `src/content.config.ts`, and the homepage `Directory` grid should auto-handle layout
- Don't commit the `.claude/` dir (gitignored) or any `[Sample]` prefixed content — those were removed when shipping the sitemap
