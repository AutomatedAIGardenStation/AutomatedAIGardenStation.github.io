# Public Site

This is the public-facing brand, product marketing, and support website for **Garden Station**.

## Purpose

The Public Site serves prospective and existing customers over the internet. It provides:
- Product features and architecture overview.
- Pricing information.
- Customer support portals and FAQs.
- Links to download the operator app.

## Documentation

For full architecture and design documentation, please see the module documentation in: `project-info/Docs/06_Software/Public_Site/`

- [Public Site Architecture](../../project-info/Docs/06_Software/Public_Site/Public%20Site%20Architecture.md)
- [Pages and Use Cases](../../project-info/Docs/06_Software/Public_Site/Pages%20and%20Use%20Cases.md)
- [UX / UI Design](../../project-info/Docs/06_Software/Public_Site/UX%20UI%20Design.md)

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS (v4)
- **Language:** TypeScript

## Architecture Decisions

- **Deployment Mode:** Strict Static Generation (SSG) via `output: 'export'`.
- **Dynamic Content (SSR/ISR):** Not supported due to the GitHub Pages deployment target. Future CMS/blog implementations must fetch content at build time and output static HTML files.

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
