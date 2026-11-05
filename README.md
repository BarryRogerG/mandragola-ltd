# Mandragola Ltd — recruitment demonstration

A mobile-first rebuild of the public [Mandragola Ltd](https://mandragolaltd.com/) website, produced as a developer recruitment assignment. It is **not** the official site.

The banner on every page reads:

> Demonstration for a recruitment assignment, not the official Mandragola website.

## Pages

| Route | Source |
|---|---|
| `/` | Homepage |
| `/our-mission` | [Our Mission](https://mandragolaltd.com/our-mission/) |
| `/values` | [Values](https://mandragolaltd.com/values/) |

Expertise, Transactions and Articles were not rebuilt. The homepage still links selected transactions to the official site.

## Run locally

```bash
cd mandragola
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). If that port is taken, Next.js will not start; run `npx next dev -p 3100` instead.

```bash
npm run build
npm start
```

Set the public URL before a deploy so canonical tags, Open Graph URLs, `robots.txt` and the sitemap resolve correctly:

```bash
NEXT_PUBLIC_SITE_URL=https://your-demo.example
```

## Stack

- Next.js 16 App Router, React 19, TypeScript (strict, `noUncheckedIndexedAccess`)
- Tailwind CSS v4
- Fully static pages (no database, auth or form submissions)
- React Server Components by default. Client components are used for navigation, the demonstration contact dialog, count-up stats, and Framer Motion reveals.

## Design

The visual direction is **editorial minimalism**: warm paper, charcoal type, a restrained forest accent, and Cormorant Garamond with Plus Jakarta Sans.

The original background video and full-bleed green panels are gone. Photography is architectural atmosphere only (Unsplash stills in `public/images/`). It does not depict Mandragola offices, holdings or transactions.

Typography and colour tokens live in `src/app/globals.css`.

## Content rules

Copy is taken from the original public website and lives in typed modules under `src/content/`. Company facts, services and transaction lines are not invented.

Deliberate omissions and limits:

- **Team portraits** on the original homepage use placeholder names (Amanda Miler, John Smith, Elizabeth Williams). Those people are not shown here. The original team paragraph is kept.
- **Contact form** is a demonstration dialog only. It does not send, store or persist messages. The footer also includes a `mailto:` link and the published Netanya address.
- **Transaction cards** use only the one-line card text from the original Transactions page. The original detail pop-ups mostly repeat the DFSL/BiomX summary regardless of the deal, so they are not reproduced. Tessera is the name BiomX adopted on 11 September 2026; the original cards already use that name.
- **Section labels** such as “What we do” and “How we work” are interface chrome, not company claims.

## SEO, accessibility and performance

- Unique title and meta description on each page
- `robots: noindex, nofollow` in metadata **and** an `X-Robots-Tag: noindex, nofollow` header on every response
- `robots.txt` allows crawling so bots can see the noindex signal, and points at `/sitemap.xml`
- JSON-LD: `Organization`, `WebSite`, `WebPage` / `AboutPage`, `BreadcrumbList`, and an `ItemList` of values. No fake `SearchAction`
- Semantic landmarks, one `h1` per page, skip link, visible focus, `prefers-reduced-motion`, and contrast-checked colour tokens
- No third-party scripts, carousels or accessibility overlays

## Project layout

```
src/app/          routes, metadata, sitemap, robots, Open Graph image
src/components/   layout, UI, page sections (server components unless noted)
src/content/      verbatim copy and organisation facts
src/lib/          metadata, JSON-LD and small client hooks
public/brand/     Mandragola logo (dark and white)
public/images/    atmospheric architectural photographs
public/logos/     company marks copied from the original site
```
