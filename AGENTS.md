# Ośrodek Zdrowia Medicus - Agent Guidelines

## Project Overview

This is a **monorepo** for a Polish medical center website ("Ośrodek Zdrowia Medicus"). It consists of two main packages:

- **`web/`** - Gatsby 5 frontend (static site generator)
- **`studio/`** - Sanity v3 CMS (content management studio)

### Project Context

This project was forked from the existing "Ośrodek Zdrowia w Turośni Kościelnej" (OTK) project and adapted for a new medical center in Białystok. The codebase, schemas, and structure are largely identical to OTK, with branding and content to be customized for Medicus.

---

## Repository Structure

```
osrodek-medicus/
├── package.json          # Root package with convenience scripts
├── .gitignore            # Git ignore rules for monorepo
├── AGENTS.md             # This file - agent context
├── web/                  # Gatsby frontend
│   ├── gatsby-config.js  # Gatsby configuration (Sanity plugin, etc.)
│   ├── gatsby-node.js    # Build-time logic (redirects generation)
│   ├── gatsby-ssr.js     # SSR wrapper (Layout, fonts)
│   ├── gatsby-browser.js # Browser wrapper (Layout)
│   ├── package.json      # Frontend dependencies
│   ├── .env              # Environment variables (SANITY_*, RESEND_*, GA)
│   └── src/
│       ├── pages/        # File-based routing (each file = one page)
│       ├── components/   # Atomic design components
│       │   ├── atoms/    # Basic elements (Button, Heading, Icons)
│       │   ├── moleculas/# Form components (FormInput, Select)
│       │   ├── organisms/# Complex components (Nav, Footer, ContactForm)
│       │   └── sections/ # Page sections (Hero, Pricing, FAQ)
│       ├── global/       # Global components (Layout, Seo, Schemas)
│       ├── api/          # Serverless API routes (contact, newsletter)
│       ├── styles/       # Global styles (fonts, GlobalStyle)
│       ├── utils/        # Utility functions (Clamp, slugify)
│       ├── constants/    # Constants (regex patterns, data)
│       └── resources/    # Static assets (fonts, images)
└── studio/               # Sanity CMS
    ├── sanity.config.js  # Sanity configuration (plugins, desk structure)
    ├── sanity.cli.js     # Sanity CLI configuration
    ├── package.json      # Studio dependencies
    ├── .env              # Environment variables (SANITY_STUDIO_*)
    ├── components/       # Custom Sanity components (Markdown input)
    ├── schemas/          # Content schemas
    │   ├── index.js      # Schema exports
    │   ├── singleTypes/  # Singleton documents (homepage, contact, etc.)
    │   ├── collectionTypes/ # Collection documents (staff, faq)
    │   └── components/   # Reusable schema components (cta, seo)
    └── utils/            # Utility functions (removeMarkdown)
```

---

## Tech Stack

### Frontend (`web/`)
| Technology | Version | Purpose |
|------------|---------|---------|
| Gatsby | 5.16.0 | Static site generator |
| React | 18.3.1 | UI library |
| Styled Components | 6.3.8 | CSS-in-JS styling |
| gatsby-source-sanity | 7.9.2 | Sanity CMS integration |
| @portabletext/react | 6.0.2 | Portable Text rendering |
| react-hook-form | 7.71.1 | Form management |

### CMS (`studio/`)
| Technology | Version | Purpose |
|------------|---------|---------|
| Sanity | 3.99.0 | Headless CMS |
| @sanity/vision | 3.99.0 | GROQ query tool |
| sanity-plugin-markdown | 5.0.0 | Markdown editor |
| sanity-plugin-media | 2.3.2 | Media management |

---

## Development Commands

From the **root directory**:

```bash
# Start frontend development server
npm run dev:web

# Start Sanity Studio
npm run dev:studio

# Build frontend for production
npm run build:web

# Build Sanity Studio
npm run build:studio

# Install all dependencies
npm run install:all

# Deploy Sanity Studio
npm run deploy:studio

# Deploy Sanity GraphQL API
npm run deploy:graphql
```

From individual folders:

```bash
# In web/
npm run develop    # Start dev server
npm run build      # Build for production
npm run serve      # Serve production build
npm run clean      # Clear Gatsby cache

# In studio/
npm run dev        # Start Sanity Studio
npm run build      # Build Studio
npm run deploy     # Deploy Studio to Sanity.io
```

---

## Content Architecture

### Single Types (Singletons - one document each)
These represent individual pages or global settings:

| Schema | Description |
|--------|-------------|
| `global` | Site-wide settings (nav, footer, contact info, SEO) |
| `homepage` | Homepage content |
| `familyClinic` | Family clinic page |
| `staffPage` | Staff listing page |
| `contact` | Contact page |
| `registration` | Registration information page |
| `faqPage` | FAQ page |
| `ebook` | Ebook download page |
| `pricing` | Pricing/services page |
| `preventionAndDiagnosis` | Prevention & diagnosis page |
| `where` | Where to get tests page |
| `regulations` | Terms and regulations page |
| `privacyPolicy` | Privacy policy page |
| `sitemap` | Sitemap page |
| `notFound` | 404 error page |

### Collection Types (Multiple documents)
| Schema | Description |
|--------|-------------|
| `faq` | FAQ items (question/answer pairs) |
| `staff` | Staff members (photo, name, position, bio) |

### Reusable Components
| Schema | Description |
|--------|-------------|
| `cta` | Call-to-action button |
| `seo` | SEO metadata (title, description) |
| `ctaSection` | CTA section with heading and buttons |
| `faqSection` | FAQ section referencing FAQ items |
| `staffSection` | Staff section referencing staff members |
| `imageAndDescription` | Image with description |
| `imageAndTitle` | Image with title |
| `titleAndDescription` | Title with description |
| `YoutubeEmbed` | YouTube video embed |
| `CompanyInfo` | Company info with map |
| `CtaTiles` | CTA tiles section |

---

## Key Patterns & Conventions

### Component Structure (Atomic Design)
- **Atoms**: Basic building blocks (Button, Heading, Icons)
- **Molecules**: Simple compositions (FormInput, FormCheckbox)
- **Organisms**: Complex components (Nav, Footer, ContactForm)
- **Sections**: Page-specific sections (Hero, Pricing, FAQ)

### Page Pattern
Every page in `web/src/pages/` follows this structure:

```javascript
import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../global/Seo';
import Hero from '../components/sections/Hero';

const PageName = ({ data: { page } }) => {
  return (
    <>
      <Hero data={page.hero} />
      {/* More sections */}
    </>
  );
};

export const query = graphql`
  query {
    page: sanityPageName {
      hero_Heading
      hero_Img { asset { gatsbyImageData } }
      seo { title description }
    }
  }
`;

export const Head = ({ data, location }) => (
  <Seo data={data.page.seo} location={location} />
);

export default PageName;
```

### Naming Conventions
- **Sanity fields**: `section_FieldName` (e.g., `hero_Heading`, `cta_Text`)
- **Components**: PascalCase (e.g., `ContactForm.js`)
- **Utilities**: camelCase functions (e.g., `slugify`, `Clamp`)
- **CSS variables**: kebab-case (e.g., `--primary-color`)

### Styling Conventions
- Styled Components for all styling
- CSS custom properties for theming (colors, fonts)
- `Clamp()` utility for fluid responsive values
- Mobile-first approach

---

## Environment Variables

### Frontend (`web/.env`)
```env
# Sanity CMS Connection
SANITY_PROJECT_ID=xxx
SANITY_DATASET=production
SANITY_TOKEN=xxx
SANITY_READ_TOKEN=xxx

# Analytics
GATSBY_GA_KEY=xxx

# Email API
RESEND_API_KEY=xxx
SENDGRID_APIKEY=xxx
```

### Studio (`studio/.env`)
```env
SANITY_STUDIO_PROJECT_ID=xxx
SANITY_STUDIO_DATASET=production
```

---

## Common Tasks for Agents

### Adding a New Page
1. Create schema in `studio/schemas/singleTypes/`
2. Export in `studio/schemas/index.js`
3. Create page component in `web/src/pages/`
4. Add GraphQL query for Sanity data
5. Add navigation link in global settings (via Sanity Studio)

### Adding a New Section
1. Create section component in `web/src/components/sections/`
2. Add corresponding fields in Sanity schema
3. Import and use in page component

### Modifying Styles
- Global styles: `web/src/styles/GlobalStyle.js`
- Color variables: Defined in GlobalStyle.js `:root`
- Component styles: Styled Components in each component file

### Working with Forms
- Form components use `react-hook-form`
- API routes in `web/src/api/`
- Email sending via Resend API

### Updating Content
- Content is managed in Sanity Studio
- Run `npm run dev:studio` to access the CMS
- Changes reflect in frontend after build (or in dev with watch mode)

---

## Important Files to Know

| File | Purpose |
|------|---------|
| `web/gatsby-config.js` | Gatsby plugins, Sanity connection |
| `web/src/global/Layout.js` | Main layout wrapper |
| `web/src/global/Seo.js` | SEO component with meta tags |
| `web/src/components/atoms/Button.js` | Reusable button component |
| `web/src/styles/GlobalStyle.js` | CSS reset and global styles |
| `studio/sanity.config.js` | Sanity plugins, desk structure |
| `studio/schemas/index.js` | All schema exports |
| `studio/schemas/singleTypes/global.js` | Site-wide settings schema |

---

## Notes for Medicus Project

### TODO Items (from project plan)
1. [ ] Create new Sanity project for Medicus (separate from OTK)
2. [ ] Update branding (colors, logo)
3. [ ] Remove "Fundusze Europejskie" section
4. [ ] Remove Newsletter integration (MailerLite)
5. [ ] Clean up hardcoded social media links
6. [ ] Update contact information (address, phone, email)
7. [ ] Create GlobalNetworkBar component for multi-clinic navigation
8. [ ] Deploy to `osrodek-medicus.pl` domain

### Branding Changes Needed
- Primary color: Change from red to new Medicus color (proposed: Turquoise/Lime)
- Logo: Update to Medicus logo
- Favicon: Update to Medicus favicon
- Contact info: Update all phone, email, address references

### Files Likely Needing Updates
- `web/src/styles/GlobalStyle.js` - Color variables
- `web/src/resources/images/logo.webp` - Logo image
- `web/src/constants/data.js` - Hardcoded data
- `web/src/global/OrganizationSchema.js` - Structured data
- `web/gatsby-config.js` - Site metadata, manifest

---

## Deployment

### Frontend (Netlify)
- Hosted on Netlify
- Builds triggered by git push
- Environment variables set in Netlify dashboard
- `redirects.json` generates `netlify.toml` during build

### Studio (Sanity.io)
- Deployed via `sanity deploy`
- Hosted at `<project-name>.sanity.studio`
- No separate hosting needed

---

## Troubleshooting

### Common Issues

**Gatsby build fails with Sanity errors:**
- Check `SANITY_PROJECT_ID` and `SANITY_TOKEN` in `.env`
- Ensure Sanity schemas match GraphQL queries
- Run `gatsby clean` to clear cache

**Styles not updating:**
- Check for CSS specificity issues
- Verify styled-components is properly configured
- Clear browser cache

**Images not loading:**
- Verify Sanity asset pipeline is working
- Check `gatsbyImageData` in GraphQL query
- Ensure `gatsby-plugin-image` is configured

**Forms not submitting:**
- Check API route in `web/src/api/`
- Verify `RESEND_API_KEY` is set
- Check browser console for errors
