# MEDICUS & ALMA-MED INTEGRATION — IMPLEMENTATION PLAN

**Project:** Ośrodek Zdrowia Medicus  
**Status:** IN PROGRESS  
**Owner:** Oliwier  
**Client:** Adam Boruch  
**Started:** January 30, 2026  
**Target Fusion Date:** May 2026

---

## BUSINESS CONTEXT

Adam Boruch is opening a new medical center "Ośrodek Zdrowia Medicus" in Białystok. This project involves:

1. **Ośrodek TK** (Existing, Gatsby) — Technology base
2. **Alma-Med** (Existing, Next.js) — To be integrated later
3. **Medicus** (New, Fork of TK) — Current project

**Main Goal:** Quickly launch the Medicus website based on OTK code, then visually and navigationally integrate all three clinics (network effect).

---

## MEDICUS CLINIC DATA

| Field | Value |
|-------|-------|
| **Address** | ul. Świętego Jerzego 22, 15-349 Białystok |
| **Phone** | 85 745 21 52 |
| **Email** | rejestracja@osrodek-medicus.pl |
| **Hours** | Mon-Fri 8:00 – 18:00 |
| **Online Registration** | [LekarzeBezKolejki](https://lekarzebezkolejki.pl/przychodnia-lekarza-rodzinnego-medicus-bialystok) |
| **Domain** | osrodek-medicus.pl |
| **Hosting Provider** | Home.pl |

---

## PROGRESS TRACKING

### ✅ COMPLETED (ETAP 1 - Setup, Cleanup & Deployment Complete)
- **Repository:** Forked, restructured as monorepo, pushed to GitHub
- **Dependencies:** Updated to latest (Gatsby 5.16, React 18.3, Sanity 3.99)
- **Sanity CMS:** New project created (`faohtp6y`), schemas migrated, GraphQL deployed
- **Content:** 49 documents and 68 assets migrated from OTK
- **API Tokens:** Generated and configured in environment variables
- **Client Access:** Adam Boruch added to Sanity project
- **Development:** Both web and studio running locally (`npm run dev`)
- **Cleanup Tasks:**
  - ✅ Newsletter integration (MailerLite) completely removed
  - ✅ "Fundusze Europejskie" section removed from Footer
  - ✅ Filia w Surażu page and references removed
  - ✅ Social media links hidden (auto-hide when empty in CMS)
  - ✅ Contact information updated in Sanity (email, phone, hours)
- **Content Updates:**
  - ✅ LekarzeBezKolejki booking links updated (Nav + Sanity registration page)
  - ✅ Google Maps updated to Białystok location (ul. Świętego Jerzego 22)
  - ✅ OrganizationSchema.js updated with Medicus data (phone, email, address)
- **Netlify Deployment:**
  - ✅ Netlify site created and configured (`osrodek-medicus`)
  - ✅ Monorepo build settings configured (`netlify.toml`)
  - ✅ All environment variables set in Netlify
  - ✅ Redirects system updated (now uses `_redirects` file)
  - ✅ Successful test deployment to staging
  - ✅ Fixed Sanity token issues in environment variables

### 🔄 IN PROGRESS (ETAP 2 - Branding)
- Ready to update colors, logo, and visual identity

### ⏰ NEXT UP (Priority 2 - Branding)
1. Update color palette (Turquoise or Lime)
2. Replace logo with Medicus branding
3. Replace favicon
4. Update `gatsby-config.js` manifest (name, theme color)
5. Update OrganizationSchema.js with Medicus data

### 🎉 RECENTLY COMPLETED
- ✅ **Netlify Staging Deployment** - Site is live at https://osrodek-medicus.netlify.app
- ✅ **Build Configuration** - Monorepo setup with proper base directory and environment variables
- ✅ **Environment Variables** - All Sanity tokens and API keys configured in Netlify
- ✅ **Redirects System** - Updated to use `_redirects` file (Netlify standard)
- ✅ **Token Fix** - Corrected Sanity token issue in both local and Netlify environments

> 📝 **Note:** Staging site is ready for client review. Production domain deployment comes LAST, after client provides and approves all content.

---

### ETAP 1: SETUP & CORE (HARD TECH)
*Goal: Working copy of TK under Medicus domain*

#### Repository Setup
| Task | Status | Notes |
|------|--------|-------|
| Fork repository `osrodek-tk` → `osrodek-medicus` | ✅ DONE | Copied and renamed |
| Remove connections to `origin` TK (clean start) | ✅ DONE | New GitHub repo created |
| Push to GitHub (kryptonum-dev organization) | ✅ DONE | https://github.com/kryptonum-dev/osrodek-medicus |
| Restructure as monorepo (web/ + studio/) | ✅ DONE | Frontend and CMS in same repo |

#### Refactor & Cleanup
| Task | Status | Notes |
|------|--------|-------|
| Update dependencies (Gatsby, React, plugins) | ✅ DONE | Gatsby 5.16.0, React 18.3.1 |
| Remove "Fundusze Europejskie" section | ✅ DONE | Removed from Footer.js and global.js schema |
| Remove Newsletter integration (MailerLite) | ✅ DONE | All components, API routes, and schemas removed |
| Clean up hardcoded social media links (TK) | ✅ DONE | Auto-hide when empty in Sanity CMS |

#### CMS Setup (Sanity)
| Task | Status | Notes |
|------|--------|-------|
| Export schema from Sanity TK | ✅ DONE | Schemas copied to studio/ |
| Create new Sanity project for Medicus | ✅ DONE | Project ID: `faohtp6y` |
| Import schema | ✅ DONE | All schemas in place |
| Content decision: Import from TK as placeholder | ✅ DONE | 49 documents migrated |
| Add client user to new Sanity | ✅ DONE | Project has 2 members now |
| Deploy Sanity Studio | ✅ DONE | Studio configured and accessible |
| Generate API tokens for frontend | ✅ DONE | Tokens added to web/.env |

#### Deployment (MVP)
| Task | Status | Notes |
|------|--------|-------|
| Set up Netlify project (preview/staging) | ✅ DONE | Site: osrodek-medicus.netlify.app |
| Configure build settings | ✅ DONE | Base: web/, build: npm run build, publish: public |
| Set environment variables for new Sanity | ✅ DONE | All tokens configured in Netlify |
| Fix 404 errors (gatsby-plugin-netlify) | ✅ DONE | Added missing Netlify plugin + fixed publish path |
| Test on Netlify preview domain | ⏳ PENDING | Ready for redeploy after fixes |

---

### ETAP 2: BRANDING & CONTENT (VISUAL)
*Goal: Site looks like Medicus, not TK*

#### Design System Update
| Task | Status | Notes |
|------|--------|-------|
| Replace color palette (remove Red/Primary) | ❌ TODO | New color: Turquoise or Lime |
| Replace Logo (SVG in Header and Footer) | ❌ TODO | "Ośrodek Zdrowia Medicus" |
| Replace Favicon | ❌ TODO | New Medicus icon |
| Update `gatsby-config.js` manifest | ❌ TODO | Name, colors, icons |

#### Content Updates
| Task | Status | Notes |
|------|--------|-------|
| Replace contact data (Header, Footer, Contact page) | ✅ DONE | Email, phone, hours updated in Sanity |
| Replace "ZnanyLekarz" link with "LekarzeBezKolejki" | ✅ DONE | Updated in Nav.js and Sanity (registration page) |
| Update Google Map embed (new address) | ✅ DONE | Białystok location (53.131, 23.161) in Sanity |
| Hide/remove staff photos (if no new ones) | ❌ TODO | Use placeholders or hide |
| Update OrganizationSchema.js | ✅ DONE | Medicus address, phone, email updated |

---

### ETAP 3: NETWORK INTEGRATION (THE FUSION)
*Goal: User sees unified network of 3 clinics*

#### Global Top Bar
| Task | Status | Notes |
|------|--------|-------|
| Create `GlobalNetworkBar` component | ❌ TODO | Links: TK \| Alma \| Medicus |
| Implement in Medicus (Gatsby) | ❌ TODO | Add to Layout |
| Implement in Ośrodek TK (Gatsby) | ❌ TODO | Separate repo update |
| Implement in Alma-Med (Next.js) | ❌ TODO | Different styling approach |

#### Footer Integration
| Task | Status | Notes |
|------|--------|-------|
| Update "Nasze Placówki" section in footers | ❌ TODO | All 3 sites |

#### Career/Cooperation Module
| Task | Status | Notes |
|------|--------|-------|
| Create simple recruitment page/section | ❌ TODO | Text page |
| Link in Menu/Footer on all sites | ❌ TODO | All 3 sites |

---

## DEPLOYMENT WORKFLOW

### Phase 1: Development ✅ COMPLETE
- **Local development:** `npm run dev`
- **URLs:** localhost:8000 (web), localhost:3333 (studio)
- **Purpose:** Development and testing with OTK placeholder content

### Phase 2: Cleanup & Branding ✅ CLEANUP COMPLETE, 🔄 BRANDING IN PROGRESS
- ✅ Remove TK-specific features (newsletter, EU funding, Suraż clinic)
- 🔄 Update branding (colors, logo, favicon)
- ✅ Keep OTK placeholder content for structure

### Phase 3: Staging Deployment ✅ COMPLETE
- **Deploy to:** https://osrodek-medicus.netlify.app
- **Status:** Site successfully deployed and building on Netlify
- **Content:** Using OTK placeholder content (client will update via Sanity)
- **Purpose:** Client can see structure and provide their own content
- **Next Actions:** Client reviews, provides feedback, uploads images/text via Sanity
- **Test Deployment:** Draft deploys available for review before production

**Staging Commands:**
```bash
# Deploy draft for testing
netlify deploy

# When ready, deploy to production URL
netlify deploy --prod

# View deployment status
netlify open
```

### Phase 4: Client Content Integration (UPCOMING)
- Client adds their own:
  - Staff photos and bios
  - Clinic photos
  - Contact information (final phone, email, address)
  - Any custom content/services
- Updates appear automatically on staging domain (via Sanity webhooks)
- Client reviews and approves staging site

### Phase 5: Production Launch (FINAL STEP)
- **Only after:** Client approves ALL content on staging
- **Actions:**
  1. Configure custom domain in Netlify (`osrodek-medicus.pl`)
  2. Update DNS at Home.pl (point to Netlify - A/CNAME records)
  3. Enable SSL (automatic via Netlify Let's Encrypt)
  4. Deploy to production: `netlify deploy --prod`
  5. Final smoke tests on production domain

> ⚠️ **IMPORTANT:** Production domain deployment is the LAST step after client has finalized ALL content and approved the staging site.

---

## TECHNICAL DETAILS

### Repository Structure
```
osrodek-medicus/
├── package.json          # Root with concurrently scripts
├── netlify.toml          # Netlify deployment config (monorepo setup)
├── .gitignore
├── AGENTS.md             # Agent documentation
├── .ai/                  # AI planning files
│   └── IMPLEMENTATION_PLAN.md
├── web/                  # Gatsby frontend
│   ├── gatsby-config.js
│   ├── gatsby-node.js    # Generates _redirects during build
│   ├── redirects.json    # Redirect definitions
│   ├── package.json
│   ├── .env              # Frontend env vars (local only)
│   ├── .netlify/         # Netlify linking config
│   └── src/
└── studio/               # Sanity CMS
    ├── sanity.config.js
    ├── package.json
    ├── .env              # Studio env vars (local only)
    └── schemas/
```

### Environment Variables

#### web/.env
```env
# Sanity CMS
SANITY_PROJECT_ID=faohtp6y        # ✅ Updated
SANITY_DATASET=production          # ✅ Set
SANITY_TOKEN=skxGLJdhz...          # ✅ Generated and added
SANITY_READ_TOKEN=skxGLJdhz...     # ✅ Generated and added

# Google Analytics
GATSBY_GA_KEY=G-CLBTVKJ87J        # ⏳ Using OTK key (need new one)

# Email APIs
RESEND_API_KEY=re_4biiRgLd_...    # ✅ From OTK (shared)
SENDGRID_APIKEY=SG.oHHdo139Q...   # ✅ From OTK (shared)
```

#### studio/.env
```env
SANITY_STUDIO_PROJECT_ID=faohtp6y  # ✅ Updated
SANITY_STUDIO_DATASET=production   # ✅ Set
```

### Sanity Project Details
| Field | Value |
|-------|-------|
| Project ID | `faohtp6y` |
| Dataset | `production` |
| Organization | Adam Boruch |
| GraphQL API | https://faohtp6y.api.sanity.io/v2023-08-01/graphql/production/default |
| Management | https://www.sanity.io/manage/project/faohtp6y |

### Netlify Deployment Details
| Field | Value |
|-------|-------|
| Site ID | `babf44eb-b40d-4147-a0ff-93704a6d8e00` |
| Site Name | `osrodek-medicus` |
| Production URL | https://osrodek-medicus.netlify.app |
| Admin Dashboard | https://app.netlify.com/projects/osrodek-medicus |
| Team | Kryptonum (kryptonumstudio-9u7ce4e) |
| Build Settings | Base: `web/`, Command: `npm run build`, Publish: `web/public` |
| Functions | Auto-handled by `gatsby-adapter-netlify` |
| Redirects | Generated at build time in `web/public/_redirects` |

**Netlify Environment Variables Configured:**
- `GATSBY_GA_KEY` - Google Analytics tracking ID
- `SANITY_PROJECT_ID` - Sanity project identifier
- `SANITY_DATASET` - Sanity dataset name
- `SANITY_PROJECT_DATASET` - Sanity project dataset
- `SANITY_PROJECT_NAME` - Sanity project name
- `SANITY_READ_TOKEN` - Read-only token for content fetching
- `SANITY_TOKEN` - Full access token for Gatsby build
- `SENDGRID_APIKEY` - SendGrid API for contact forms
- `RESEND_API_KEY` - Resend API for email sending

**Configuration Files:**
- `/netlify.toml` - Main Netlify config (monorepo setup, headers, caching)
- `/web/gatsby-node.js` - Generates redirects during build

### Development Commands
```bash
# From root directory
npm run dev          # Start both web + studio
npm run dev:web      # Start only Gatsby (port 8000)
npm run dev:studio   # Start only Sanity (port 3333)
npm run build        # Build Gatsby
npm run deploy:studio # Deploy Sanity Studio

# Netlify deployment commands
netlify deploy       # Deploy draft to Netlify (test)
netlify deploy --prod # Deploy to production URL
netlify open         # Open Netlify dashboard
netlify env:list     # List environment variables
```

---

## FILES TO MODIFY

### High Priority (Branding)
| File | Changes Needed |
|------|----------------|
| `web/src/styles/GlobalStyle.js` | Update CSS variables (colors) |
| `web/src/resources/images/logo.webp` | Replace with Medicus logo |
| `web/gatsby-config.js` | Update manifest name, colors |
| `web/src/global/OrganizationSchema.js` | Update structured data |
| `web/src/constants/data.js` | Check for hardcoded data |

### Medium Priority (Cleanup) - ✅ COMPLETED
| File | Status |
|------|--------|
| `web/src/components/organisms/NewsletterForm.js` | ✅ REMOVED |
| `web/src/components/sections/Newsletter.js` | ✅ REMOVED |
| `web/src/api/newsletter.js` | ✅ REMOVED |
| `web/src/components/organisms/Footer.js` | ✅ EU section removed, social auto-hides |
| `web/src/components/organisms/Nav.js` | ✅ Suraż references removed |

### Pages to Review
| Page | Status | Notes |
|------|--------|-------|
| `filia-w-surazu.js` | ✅ REMOVED | TK-specific branch clinic (deleted) |
| All other pages | ❌ REVIEW | Check for TK-specific content |

---

## DEFINITION OF DONE

### Technical Requirements
1. ✅ **Clean Code:** No technical debt - Newsletter, EU funding, and Suraż removed
2. ✅ **CMS:** Client has access to Sanity and can edit content
3. ⏳ **Identity:** Site has unique Medicus logo and new color scheme (in progress)

### Content Requirements (Client-Dependent)
4. ❌ **Client Content:** All text, images, and data provided by client
5. ⏳ **Data:** Contact info updated in Sanity (phone, email, hours) - still need map/registration links
6. ❌ **Staff Photos:** Real staff photos uploaded (not TK staff)

### Network Integration
7. ❌ **Network:** Top bar visible on Medicus, TK, Alma for switching between clinics

### Production Deployment (FINAL STEP)
8. ❌ **Staging Review:** Client approves site on Netlify preview domain
9. ❌ **Production:** Address `osrodek-medicus.pl` loads correctly with SSL
10. ❌ **Launch:** All final smoke tests passed on production

---

## NEXT IMMEDIATE ACTIONS

### Priority 1 (This Week) - ✅ COMPLETED
1. [x] Remove Newsletter integration (MailerLite)
2. [x] Remove "Fundusze Europejskie" section
3. [x] Remove `filia-w-surazu.js` page (TK-specific)
4. [x] Hide social media links (auto-hide when empty)
5. [x] Update contact information in Sanity (email, phone, hours)

### Priority 2 (Branding - Current)
6. [ ] Update color palette in GlobalStyle.js (Turquoise or Lime)
7. [ ] Replace logo with Medicus branding
8. [ ] Replace favicon
9. [ ] Update `gatsby-config.js` manifest

### Priority 3 (Staging Deployment) - ✅ COMPLETED
17. [x] Set up Netlify project
18. [x] Configure monorepo build settings
19. [x] Set environment variables in Netlify
20. [x] Deploy to Netlify staging domain
21. [x] Fix token issues and test build

### Priority 4 (Content & Network)
22. [ ] Get client's photos/images for staff and clinic
23. [x] Update OrganizationSchema.js with final Medicus data
24. [x] Replace "ZnanyLekarz" with "LekarzeBezKolejki" links
25. [x] Update Google Map embed (Białystok address)
26. [ ] Get new Google Analytics key for Medicus
27. [ ] Create GlobalNetworkBar component
28. [ ] Implement NetworkBar on TK and Alma sites
29. [ ] Client review and approval on staging domain
30. [ ] Final content updates from client feedback

### Priority 5 (Production Launch - FINAL STEP)
31. [ ] Verify all client content is final and approved
32. [ ] Configure custom domain (osrodek-medicus.pl) in Netlify
33. [ ] Update DNS settings at Home.pl (A/CNAME records)
34. [ ] Enable SSL certificate (automatic via Netlify)
35. [ ] Deploy to production domain (`netlify deploy --prod`)
36. [ ] Final smoke tests on production

---

## COMMITS MADE

1. **Initial commit** - Original OTK code
2. **Restructure to monorepo** - web/ + studio/ structure, updated dependencies, AGENTS.md
3. **Cleanup phase** - Removed Newsletter, EU funding, Suraż, updated contact info
4. **Fix Netlify deployment** - Added gatsby-plugin-netlify, fixed publish directory path
3. **Cleanup and Netlify setup** (pending commit):
   - Removed Newsletter integration (MailerLite)
   - Removed Fundusze Europejskie section
   - Removed Suraż clinic page and references
   - Created Netlify configuration (`netlify.toml`)
   - Updated `gatsby-node.js` to generate `_redirects` file
   - Fixed Sanity token in `.env` (removed trailing characters)
   - Updated social media links to auto-hide when empty

---

## RESOURCES

- **GitHub Repo:** https://github.com/kryptonum-dev/osrodek-medicus
- **Sanity Project:** https://www.sanity.io/manage/project/faohtp6y
- **Netlify Dashboard:** https://app.netlify.com/projects/osrodek-medicus
- **Staging URL:** https://osrodek-medicus.netlify.app
- **OTK Reference:** https://osrodektk.pl
- **Notion Task:** https://www.notion.so/2f48947e8c3e809d82c0e9868e8cfb93

---

*Last Updated: January 30, 2026 - 16:30 CET*  
*Status: ETAP 1 & Content Updates Complete - Branding in Progress (ETAP 2)*
