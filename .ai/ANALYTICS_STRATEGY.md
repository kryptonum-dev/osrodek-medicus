# ANALYTICS STRATEGY - Ośrodek Zdrowia Medicus

**Status:** AWAITING CLIENT DECISION  
**Date:** 2026-02-05  
**Decision Maker:** Adam Boruch

---

## 🚨 CURRENT SITUATION

The Medicus website was forked from Ośrodek TK and currently has **TWO analytics systems** configured, both still pointing to **Turośń Kościelna's accounts**:

1. **Fathom Analytics** - Site ID: `FURKIXWW` (OTK's account)
2. **Google Tag Manager** - Container ID: `GTM-T7CWTTQ8` (OTK's account)

### What This Means:
- ❌ All Medicus page views are tracked to OTK's dashboard
- ❌ OTK can see Medicus visitor data
- ❌ Medicus has NO analytics visibility for their own site
- ❌ OTK's data is contaminated with Medicus traffic

**This must be resolved before launch.**

---

## ⚖️ THE FOUR OPTIONS

We need to choose ONE of these four approaches:

---

### OPTION A: FATHOM ANALYTICS ONLY
*Privacy-first, simple analytics*

#### What is Fathom?
- Privacy-focused analytics alternative to Google Analytics
- Tracks basic metrics: page views, referrers, countries, devices
- **No cookies required** = No annoying cookie consent banner
- GDPR-compliant by design (no personal data collected)
- Used by privacy-conscious companies

#### What You Get:
- ✅ Page view counts
- ✅ Top pages visited
- ✅ Traffic sources (Google, direct, social media)
- ✅ Basic device info (mobile vs desktop)
- ✅ Countries/cities of visitors
- ❌ NO detailed user behavior tracking
- ❌ NO conversion tracking
- ❌ NO Google Ads integration
- ❌ NO remarketing capabilities

#### Technical Implementation:
- Remove Google Tag Manager completely
- Create new Fathom account for Medicus
- One line of code in the website
- No cookie consent banner needed

#### Costs:
- **€14/month** (~60 PLN/month) for up to 100,000 page views
- Scales up with traffic

#### Time to Setup:
- 10 minutes (create account, update one line of code)

#### Best For:
- ✅ Healthcare businesses (privacy matters)
- ✅ Simple needs (just want to know how many visitors)
- ✅ Avoiding cookie consent complexity
- ✅ Older patient demographic (privacy-conscious)

#### Not Ideal For:
- ❌ Running Google Ads campaigns
- ❌ Tracking conversions/appointments
- ❌ Detailed marketing analysis
- ❌ A/B testing

---

### OPTION B: GOOGLE TAG MANAGER (GTM) + GOOGLE ANALYTICS 4 (GA4)
*Full-featured, free marketing analytics*

#### What is GTM + GA4?
- Google Tag Manager = Container for analytics tags
- Google Analytics 4 = Google's free analytics platform
- Industry standard for website analytics
- Used by most commercial websites

#### What You Get:
- ✅ Everything Fathom has, plus:
- ✅ Detailed user behavior (scroll depth, clicks, time on page)
- ✅ Conversion tracking (appointment bookings, contact form)
- ✅ User demographics and interests
- ✅ Custom events and goals
- ✅ Google Ads integration (if you run ads)
- ✅ Remarketing audiences
- ✅ E-commerce tracking (if needed later)
- ✅ Free forever

#### Requirements:
- **Cookie consent banner required** (GDPR compliance)
- More complex setup and configuration
- Requires Google account

#### Technical Implementation:
- Create Google Tag Manager container
- Create Google Analytics 4 property
- Configure cookie consent banner
- User must accept cookies to be tracked

#### Costs:
- **FREE** (Google Analytics 4 is free)
- No monthly fees

#### Time to Setup:
- 30-60 minutes (create accounts, configure tracking)

#### Best For:
- ✅ Running Google Ads campaigns
- ✅ Detailed visitor behavior analysis
- ✅ Conversion tracking (appointments, calls)
- ✅ Marketing-focused approach
- ✅ Future scalability

#### Not Ideal For:
- ❌ Privacy-first approach
- ❌ Simple analytics needs
- ❌ Avoiding cookie banners

---

### OPTION C: BOTH FATHOM + GTM
*Redundant but belt-and-suspenders approach*

#### How This Works:
- Fathom runs always (no consent needed)
- GTM loads only if user accepts cookies
- Two sets of data to monitor

#### Rationale:
- "Even if users decline cookies, we still get basic stats from Fathom"
- "We have backup data if GTM breaks"

#### Pros:
- ✅ Guaranteed basic analytics even if consent declined
- ✅ Both simple and detailed data available

#### Cons:
- ❌ **Costs €14/month** for Fathom
- ❌ Data in two places (harder to analyze)
- ❌ Reports won't match (confusing)
- ❌ More maintenance overhead
- ❌ Redundant - most users accept cookies anyway

#### Recommendation:
**NOT RECOMMENDED** - This adds complexity and cost without significant benefit. In practice, 70-90% of users accept cookies, so you'd have full GTM data anyway. Fathom becomes an expensive backup.

---

### OPTION D: NEITHER (FOR NOW)
*Clean slate, decide later*

#### How This Works:
- Comment out both analytics systems completely
- Launch with NO tracking
- Add analytics later when ready

#### When This Makes Sense:
- Want to launch quickly without analytics decision
- Haven't decided on marketing strategy yet
- Want to avoid any tracking until properly configured
- Testing/staging phase

#### Pros:
- ✅ Fastest to implement (5 minutes)
- ✅ No wrong-account tracking
- ✅ Clean slate for future
- ✅ Can add analytics anytime later

#### Cons:
- ❌ No visitor data from launch period
- ❌ Miss early traffic insights
- ❌ Can't measure marketing effectiveness

#### When to Add Analytics Later:
- After deciding marketing strategy
- When ready to invest time in setup
- After initial launch stabilizes

---

## 📊 COMPARISON TABLE

| Feature | Fathom Only | GTM + GA4 | Both | Neither |
|---------|-------------|-----------|------|---------|
| **Cost** | €14/month | FREE | €14/month | FREE |
| **Setup Time** | 10 min | 60 min | 90 min | 5 min |
| **Cookie Banner** | ❌ Not needed | ✅ Required | ✅ Required | ❌ Not needed |
| **Privacy-Friendly** | ✅✅✅ | ⚠️ Standard | ⚠️ Standard | ✅✅✅ |
| **Page Views** | ✅ | ✅ | ✅ | ❌ |
| **User Behavior** | ❌ | ✅✅✅ | ✅✅✅ | ❌ |
| **Google Ads** | ❌ | ✅ | ✅ | ❌ |
| **Conversions** | ❌ | ✅ | ✅ | ❌ |
| **Maintenance** | Low | Medium | High | None |
| **Data Quality** | Simple | Detailed | Mixed | None |

---

## 🎯 OUR RECOMMENDATION

Based on the context (healthcare, older patients, need for trust):

### **PRIMARY: Option B (GTM + GA4 Only)**

**Why:**
- Free forever (budget-friendly)
- Industry standard (familiar to any marketing agency)
- Detailed data when you need it
- Can add Google Ads later if needed
- Cookie consent is standard now (users expect it)

**When to choose Fathom instead:**
- If privacy is absolute top priority
- If analytics needs are truly basic
- If €14/month is acceptable cost
- If you want simplest possible setup

### **FALLBACK: Option D (Neither for now)**

**If:**
- Unsure about marketing strategy
- Want fastest launch possible
- Can add analytics in 2-4 weeks after launch

---

## ✅ DECISION CHECKLIST

Please answer these questions to help decide:

1. **Will you run Google Ads campaigns?**
   - Yes → Choose GTM + GA4
   - No → Consider Fathom

2. **Do you need detailed visitor behavior data?**
   - Yes (clicks, scrolls, time on page) → Choose GTM + GA4
   - No (just page views) → Consider Fathom

3. **Is privacy a critical brand value?**
   - Yes, absolutely → Consider Fathom
   - Normal healthcare standard → GTM + GA4 is fine

4. **What's your budget for analytics?**
   - FREE → GTM + GA4
   - €14/month is fine → Either option works

5. **When do you need analytics live?**
   - At launch → Choose Fathom or GTM now
   - Can wait 2-4 weeks → Choose "Neither for now"

---

## 📋 NEXT STEPS

### Once Decision is Made:

#### If Fathom:
1. Client creates Fathom account (https://usefathom.com)
2. Client provides new Site ID
3. We update code (5 min)
4. We remove GTM completely
5. We remove cookie consent banner

#### If GTM + GA4:
1. Client creates Google Tag Manager account (https://tagmanager.google.com)
2. Client creates Google Analytics 4 property (https://analytics.google.com)
3. Client provides GTM Container ID
4. We update code (10 min)
5. We remove Fathom
6. Cookie consent stays

#### If Both:
1. Do both steps above
2. Keep cookie consent
3. We explain it's redundant but proceed if insisted

#### If Neither:
1. We comment out both systems (5 min)
2. Add to future tasks list
3. Can implement later when ready

---

## 🔗 RESOURCES

- **Fathom Analytics:** https://usefathom.com
- **Google Tag Manager:** https://tagmanager.google.com
- **Google Analytics 4:** https://analytics.google.com
- **Comparison article:** https://usefathom.com/vs/google-analytics

---

## 📝 CLIENT DECISION

**Date:** _______________

**Chosen Option:** ☐ A (Fathom) ☐ B (GTM+GA4) ☐ C (Both) ☐ D (Neither)

**Reasoning:**


**Account Details Needed:**
- GTM Container ID: _______________
- GA4 Measurement ID: _______________
- Fathom Site ID: _______________

**Timeline:** Launch with analytics by: _______________

---

*Last Updated: 2026-02-05*
*Prepared by: Development Team*
