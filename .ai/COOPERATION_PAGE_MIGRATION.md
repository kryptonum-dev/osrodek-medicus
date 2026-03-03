# Cooperation Page (/współpraca) — Migration Guide for OTK & Alma-Med

> This document describes every change made to **Ośrodek Zdrowia Medicus** to add the `/wspolpraca` cooperation subpage. Use it as a step-by-step guide when replicating the feature on **Ośrodek TK** and **Alma-Med**.

---

## Table of Contents

1. [Overview of Changes](#1-overview-of-changes)
2. [Sanity Studio — Schema Changes](#2-sanity-studio--schema-changes)
3. [Sanity Studio — Content Creation](#3-sanity-studio--content-creation)
4. [Frontend — New Files](#4-frontend--new-files)
5. [Frontend — Modified Files](#5-frontend--modified-files)
6. [API Route — Cooperation Form](#6-api-route--cooperation-form)
7. [Navigation — Adding the Link](#7-navigation--adding-the-link)
8. [CTA Schema — Anchor & Mailto Support](#8-cta-schema--anchor--mailto-support)
9. [Image Null-Safety Fixes](#9-image-null-safety-fixes)
10. [Resend DNS Setup](#10-resend-dns-setup)
11. [GraphQL Deployment](#11-graphql-deployment)
12. [Checklist per Codebase](#12-checklist-per-codebase)

---

## 1. Overview of Changes

The cooperation page (`/wspolpraca`) is a new subpage for recruiting doctors, residents, nurses, midwives, and POZ management teams. It consists of:

- **Hero** — heading, subheading, image, CTA button
- **Intro** — short intro paragraph about why to cooperate
- **Groups** — 4 cooperation categories (internships, residencies, clinical cooperation, training & consulting), each with icon, heading, and markdown content
- **Network Showcase** — dark section showing all clinics in the network (pulled from `sanityGlobal.networkClinics`)
- **Contact Form** — reuses the existing `ContactForm` component with configurable endpoint, subjects, and target email (from Sanity)
- **FAQ** — reuses the existing `Faq` section with 5 cooperation-specific FAQ documents

### Files Created (new)
```
studio/schemas/singleTypes/cooperation.js     — Sanity singleton schema
studio/schemas/components/cooperationGroup.js  — Reusable object type for groups array
web/src/api/cooperation.js                     — Serverless API route for form
web/src/components/sections/Cooperation/Intro.js
web/src/components/sections/Cooperation/Groups.js
web/src/components/sections/Cooperation/Network.js
web/src/pages/wspolpraca.js                    — Gatsby page component
```

### Files Modified (existing)
```
studio/schemas/index.js              — Register cooperation + cooperationGroup
studio/schemas/components/cta.js     — Allow # and mailto: links
web/src/components/atoms/Button.js   — Handle anchor/mailto as <a> not <Link>
web/src/components/atoms/ImageDecorative.js — Null-safety + showShape prop
web/src/components/organisms/ContactForm.js — Accept endpoint/subjects/targetEmail props
web/src/components/organisms/Nav.js  — Add "Współpraca" nav link
web/src/components/sections/Contact/Form.js — Pass formProps to ContactForm
web/src/components/sections/Faq.js   — Null-safety for icon
web/src/components/sections/Hero.js  — showShape prop
```

---

## 2. Sanity Studio — Schema Changes

### 2a. Create `studio/schemas/components/cooperationGroup.js`

This is a reusable object type used in the `groups` array. **Must be a top-level schema** (not inline) because Sanity GraphQL requires named types for array items.

```js
import { removeMarkdown } from "../../utils/functions"

export default {
  name: 'cooperationGroup',
  title: 'Grupa współpracy',
  type: 'object',
  fields: [
    { name: 'heading', type: 'markdown', title: 'Nagłówek' },
    { name: 'content', type: 'markdown', title: 'Treść',
      description: 'Wspiera Markdown — listy punktowane, pogrubienia, akapity itp.' },
    { name: 'img', type: 'image', title: 'Zdjęcie (opcjonalne)' },
  ],
  preview: {
    select: { title: 'heading', media: 'img' },
    prepare({ title, media }) {
      return { title: removeMarkdown(title), media }
    }
  }
}
```

### 2b. Create `studio/schemas/singleTypes/cooperation.js`

Full singleton schema with 7 field groups: Hero, Intro, Groups, Network, Form, FAQ, SEO.

Key fields:
- `hero_Heading` (markdown), `hero_Subheading` (markdown), `hero_Img` (image), `hero_Cta` (array of cta)
- `intro_Heading` (markdown), `intro_Paragraph` (markdown)
- `groups` (array of `cooperationGroup`)
- `network_Heading` (markdown), `network_Paragraph` (markdown)
- `form_Heading` (markdown), `form_Img` (image), `form_TargetEmail` (string, email validated)
- `faqSection` (faqSection — existing reusable component)
- `seo` (seo — existing reusable component)

**Important:** `form_TargetEmail` is the email address the cooperation form sends to. It's editable in Sanity so each clinic can set their own destination.

### 2c. Register in `studio/schemas/index.js`

```js
// Add imports
import cooperation from './singleTypes/cooperation'
import cooperationGroup from './components/cooperationGroup'

// Add to singleTypes array (after contact)
export const singleTypes = [
  // ...existing types...
  contact,
  cooperation,  // <-- add here
  // ...rest...
]

// Add to schemaTypes components section
// cooperationGroup goes alongside other components like networkClinic
```

---

## 3. Sanity Studio — Content Creation

### 3a. Create 5 FAQ documents (type: `faq`)

Each with a `question` and `answer` field. Topics:
1. Jak zapisać się na staż podyplomowy w POZ?
2. Jak wygląda szkolenie rezydenckie w Państwa przychodniach?
3. Czy nowi współpracownicy otrzymują wsparcie na etapie wdrożenia?
4. Czy prowadzicie szkolenia dla zespołów i kadry zarządzającej POZ?
5. Z kim i w jakim zakresie współpracujecie?

**Publish all 5 FAQ documents.**

### 3b. Create the cooperation singleton document

Open Sanity Studio → Współpraca → Fill in all fields as described.

The `faqSection.list` field should reference the 5 FAQ documents created above.

**Important:** The singleton document ID should match the schema name (`cooperation`). Sanity Studio handles this automatically when you create it through the desk structure.

### 3c. Upload images

- **Hero image** — e.g. a medical professional photo
- **Group icons** — SVG icons for each cooperation category (syringe, shield, handshake, chart)
- **Form icon** — optional decorative icon next to the contact form
- **FAQ icon** — optional decorative icon next to the FAQ section

---

## 4. Frontend — New Files

### 4a. `web/src/pages/wspolpraca.js`

Gatsby page component. Key aspects:
- Queries `sanityCooperation` for all page data
- Queries `sanityGlobal.networkClinics` for the Network section
- Defines `cooperationSubjects` array for the form dropdown (adjust per clinic)
- Passes `formProps` to the `Form` component: `{ endpoint: '/api/cooperation', subjects, targetEmail }`
- SEO component with breadcrumbs and FAQ schema markup

**IMPORTANT for each codebase:** Update the `cooperationSubjects` array to match what each clinic offers.

### 4b. `web/src/components/sections/Cooperation/Intro.js`

Simple section: heading + markdown paragraph. Max-width 900px. Light layout.

### 4c. `web/src/components/sections/Cooperation/Groups.js`

Full-width alternating sections layout:
- Even groups get a subtle tinted background (`color-mix` with primary color at 4%)
- Giant watermark numbers (01, 02...) faintly in the background
- SVG icons displayed in circular containers with gradient background
- **SVG handling**: Detects `.svg` URLs and renders as `<img>` tags instead of `GatsbyImage` (which doesn't handle vectors well)
- Custom bullet points (teal circles instead of default bullets)
- Responsive: stacks on mobile

### 4d. `web/src/components/sections/Cooperation/Network.js`

Dark section showing all clinics in the network:
- Primary-colored background
- Clinic cards in a 3-column grid
- Each card shows: logo, name, city, address, phone, email
- Current site gets a "Aktualnie przeglądasz" badge
- Non-current sites link externally
- Uses `sanityGlobal.networkClinics` data

**IMPORTANT for each codebase:** The `isCurrentSite()` function compares `window.location.hostname` against clinic URLs. Each site will auto-detect which clinic card is "current". The network clinics data comes from the shared `global` singleton in Sanity — make sure each clinic's Sanity has the same `networkClinics` array.

---

## 5. Frontend — Modified Files

### 5a. `ContactForm.js` — Configurable props

Added optional props:
- `endpoint` (default: `/api/contact`) — API route to submit to
- `subjects` (default: original contact subjects array) — dropdown options
- `targetEmail` (optional) — if provided, added as a hidden field sent to the API

The existing contact page is unaffected (uses defaults).

### 5b. `Contact/Form.js` — Pass through formProps

The `Form` wrapper component now accepts a `formProps` object and spreads it onto `<ContactForm {...formProps} />`.

### 5c. `Hero.js` — Optional shape

Added `showShape` prop (default: `true`). Passes through to `ImageDecorative`.

### 5d. `ImageDecorative.js` — Null-safety + showShape

- Returns `null` if `data?.asset?.gatsbyImageData` is missing (prevents crash when no image uploaded)
- Accepts `showShape` prop to conditionally render the decorative SVG blob
- **Shape colors updated** to match logo: right side changed from `#3FA99D` to `#1A3F4D` (dark petrol blue)

---

## 6. API Route — Cooperation Form

### `web/src/api/cooperation.js`

Nearly identical to `contact.js` but:
- Accepts `targetEmail` from the form body (comes from Sanity's `form_TargetEmail` field)
- CORS allows both production domain and `http://localhost:8000`
- Email subject: `Formularz współpracy - {name} przesyła wiadomość`
- `from` address: `Ośrodek Zdrowia Medicus <rejestracja@osrodek-medicus.pl>`

**For each codebase, change:**
1. The `from` field to match that clinic's domain (e.g. `rejestracja@osrodektk.pl`)
2. The `allowedOrigins` to match that clinic's production domain
3. The email subject prefix if desired

### Form validation requires:
- `name` (non-empty)
- `email` (valid regex)
- `tel` (optional, but validated if provided)
- `subject` (non-empty)
- `message` (non-empty)
- `legal` (truthy — privacy policy accepted)
- `targetEmail` (non-empty)

---

## 7. Navigation — Adding the Link

### `Nav.js`

The nav links are **hardcoded** in the JSX (not CMS-managed). Add the cooperation link before the contact link:

```jsx
<li>
  <Link to='/wspolpraca' onClick={() => handleLink()} title='Współpraca'>Współpraca</Link>
</li>
```

Insert between "Mapa strony" and "Kontakt" (or wherever appropriate for each site).

---

## 8. CTA Schema — Anchor & Mailto Support

### `studio/schemas/components/cta.js`

The CTA `href` validation was updated to also allow:
- `#anchor` links (for in-page scrolling)
- `mailto:` links (for email CTAs)

Previously only `/relative` and `https://external` were allowed.

### `web/src/components/atoms/Button.js`

Added handling for anchor (`#`) and `mailto:` links — renders them as plain `<a href>` tags instead of Gatsby `<Link>` components.

**This change should be applied to all codebases** regardless of the cooperation page, as it's a general improvement.

---

## 9. Image Null-Safety Fixes

Three components were crashing when image fields were `null` in Sanity:

### `ImageDecorative.js`
```js
// Before: crashes if data is null
<GatsbyImage image={data.asset.gatsbyImageData} ... />

// After: returns null if no image
if (!data?.asset?.gatsbyImageData) return null;
```

### `Contact/Form.js`
```jsx
// Wrapped GatsbyImage in conditional
{icon?.asset?.gatsbyImageData && (
  <GatsbyImage image={icon.asset.gatsbyImageData} ... />
)}
```

### `Faq.js`
```jsx
// Same pattern
{data.icon?.asset?.gatsbyImageData && (
  <GatsbyImage image={data.icon.asset.gatsbyImageData} ... />
)}
```

**Apply these null-safety fixes to all codebases** — they prevent crashes when CMS images haven't been uploaded yet.

---

## 10. Resend DNS Setup

Each clinic domain needs to be verified in Resend to send emails. Add these DNS records:

| Type | Name | Content |
|------|------|---------|
| TXT | `resend._domainkey` | DKIM public key from Resend dashboard |
| MX | `send` | `feedback-smtp.{region}.amazonses.com` (Priority: 10) |
| TXT | `send` | `v=spf1 include:amazonses.com ~all` |
| TXT | `_dmarc` | `v=DMARC1; p=none;` (optional but recommended) |

All clinic domains can share a single Resend account — just add each domain and verify it.

---

## 11. GraphQL Deployment

After adding the new schemas, **you must redeploy the Sanity GraphQL API** for Gatsby to query the new types:

```bash
cd studio && npx sanity graphql deploy --force
```

This is required because `gatsby-source-sanity` uses `graphqlTag: 'default'` which relies on the deployed GraphQL schema.

Also extract the manifest for MCP tools:
```bash
cd studio && npx sanity manifest extract
```

---

## 12. Checklist per Codebase

### For each site (OTK, Alma-Med):

#### Sanity Studio
- [ ] Create `studio/schemas/components/cooperationGroup.js`
- [ ] Create `studio/schemas/singleTypes/cooperation.js`
- [ ] Register both in `studio/schemas/index.js`
- [ ] Deploy GraphQL: `npx sanity graphql deploy --force`
- [ ] Deploy Studio: `npx sanity deploy`
- [ ] Create 5 FAQ documents with cooperation-specific Q&As
- [ ] Create the cooperation singleton document with all content
- [ ] Upload hero image, group icons, form icon, FAQ icon
- [ ] Set `form_TargetEmail` to the correct clinic email
- [ ] Link FAQ documents to `faqSection.list`
- [ ] Publish all documents

#### Frontend — New Files
- [ ] Create `web/src/api/cooperation.js` (update `from` address and CORS domain)
- [ ] Create `web/src/components/sections/Cooperation/Intro.js`
- [ ] Create `web/src/components/sections/Cooperation/Groups.js`
- [ ] Create `web/src/components/sections/Cooperation/Network.js`
- [ ] Create `web/src/pages/wspolpraca.js` (update `cooperationSubjects` if needed)

#### Frontend — Modifications
- [ ] Update `ContactForm.js` — add `endpoint`, `subjects`, `targetEmail` props
- [ ] Update `Contact/Form.js` — pass `formProps` to ContactForm
- [ ] Update `Nav.js` — add "Współpraca" link
- [ ] Update `Button.js` — handle `#anchor` and `mailto:` links
- [ ] Update `ImageDecorative.js` — null-safety + `showShape` prop
- [ ] Update `Faq.js` — null-safety for icon
- [ ] Update `Hero.js` — add `showShape` prop
- [ ] Update `cta.js` schema — allow `#` and `mailto:` in validation

#### Infrastructure
- [ ] Verify clinic domain in Resend (add DNS records)
- [ ] Ensure `RESEND_API_KEY` is set in `web/.env`
- [ ] Test form submission on localhost
- [ ] Test form submission on production after deploy

---

## Content Notes

The cooperation page content should be **customized per clinic**. The structure is the same but:
- Headings and paragraphs should reference the specific clinic name and location
- Group content should reflect what each clinic actually offers
- FAQ answers should be tailored to each clinic's specifics
- The `form_TargetEmail` should point to each clinic's relevant email address
- The `cooperationSubjects` array in `wspolpraca.js` may need adjustment per clinic
- The Network section automatically highlights the current site based on hostname
