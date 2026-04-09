export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  dateISO: string;
  author: string;
  keywords: string[];
  content: string;
  faq: { question: string; answer: string }[];
}

export const articles: Article[] = [
  {
    slug: 'google-ads-guide-malaysian-businesses-2026',
    title: 'The Complete Google Ads Guide for Malaysian Businesses in 2026',
    excerpt: 'Everything you need to know to launch your first Google Ads campaign in Malaysia — from account setup to your first conversion.',
    category: 'Getting Started',
    readTime: '14 min read',
    date: 'April 5, 2026',
    dateISO: '2026-04-05',
    author: 'Hafiz Rahman',
    keywords: ['google ads malaysia', 'google ads guide 2026', 'ppc advertising malaysia', 'how to run google ads'],
    faq: [
      { question: 'How much does Google Ads cost in Malaysia?', answer: 'There is no minimum spend. Most Malaysian SMBs start with RM30–RM100 per day. Costs depend on your industry and keyword competition — service-based keywords like "accountant KL" might cost RM3–RM8 per click, while less competitive niches can be under RM1.' },
      { question: 'Is Google Ads worth it for small businesses?', answer: 'Yes. Google Ads captures high-intent traffic — people actively searching for your product or service. Unlike social media ads, you reach people at the moment they need you. Even with modest budgets, the return can be significant if campaigns are properly targeted.' },
      { question: 'Do I need a website to run Google Ads?', answer: 'A landing page is strongly recommended for Search and Display campaigns. However, you can run call-only ads or use Google Business Profile ads without a traditional website.' },
    ],
    content: `## Why Google Ads matters for Malaysian businesses

Google processes over 8.5 billion searches daily. In Malaysia, Google holds roughly 97% of the search engine market. When someone in Kuala Lumpur searches "best accounting firm near me" or a Penang resident looks up "wedding photographer Penang," they are actively looking to buy. That is the fundamental difference between Google Ads and other advertising platforms — you are reaching people with intent.

For Malaysian SMBs, this means you can put your business in front of the right people at the exact moment they are looking for what you offer.

## Setting up your Google Ads account

Start at ads.google.com and create an account using a dedicated business email. Google will try to push you into a Smart Campaign — skip this. Choose "Switch to Expert Mode" at the bottom of the screen. This gives you full control over targeting, bidding, and ad formats.

Set your account to:
- **Time zone:** (GMT+8:00) Kuala Lumpur
- **Currency:** MYR (Malaysian Ringgit)
- **Billing:** Credit card or online banking

These settings cannot be changed later, so double-check before proceeding.

## Campaign types explained

Google Ads offers several campaign types. Here is what matters for most Malaysian businesses:

**Search Campaigns** — Text ads that appear when someone searches a keyword. This is where most businesses should start. You pay per click (PPC), and you only show up when someone is actively searching.

**Display Campaigns** — Banner ads across Google's network of 2 million+ websites. Good for brand awareness and retargeting, but lower intent than Search.

**Performance Max** — Google's AI-driven campaign type that runs across Search, Display, YouTube, Gmail, and Maps simultaneously. Powerful but requires conversion data to optimize well.

**Shopping Campaigns** — Product-based ads for e-commerce stores. Shows product images, prices, and store name directly in search results.

**YouTube Ads** — Video ads on YouTube. Good for brand awareness or retargeting warm audiences.

For most Malaysian SMBs, **start with Search campaigns**. They give you the most control and target the highest-intent traffic.

## Keyword research for the Malaysian market

Keywords are the foundation of Search campaigns. Here is how to approach research:

**1. Start with Google Keyword Planner.** It is free inside your Google Ads account. Enter seed terms related to your business and filter by Malaysia.

**2. Think in buyer intent tiers:**
- High intent: "hire accountant KL," "buy office chair online Malaysia"
- Medium intent: "best accounting software Malaysia," "ergonomic chair review"
- Low intent: "what does an accountant do," "types of office chairs"

Focus your budget on high and medium intent keywords first.

**3. Include local modifiers.** Malaysians often search with location: "dentist Bangsar," "plumber Shah Alam," "catering service Johor Bahru." These long-tail keywords are cheaper and convert better.

**4. Use Bahasa Malaysia keywords too.** Depending on your audience, terms like "kedai perabot murah KL" or "servis aircond Selangor" can have lower competition and cost.

## Campaign structure best practices

A clean structure makes optimization easier:

\`\`\`
Account
└── Campaign: [Service/Product Category]
    └── Ad Group: [Specific keyword theme]
        ├── Keywords (5–15 tightly themed)
        └── Ads (3 responsive search ads)
\`\`\`

For example, a pest control company might have:
- Campaign: Termite Services
  - Ad Group: Termite Inspection → keywords: "termite inspection KL," "check for termites house"
  - Ad Group: Termite Treatment → keywords: "termite treatment price Malaysia," "anti termite spray"

Keep each ad group focused on one keyword theme. This improves your Quality Score and lowers cost per click.

## Writing ads that convert

Responsive Search Ads (RSAs) let you provide up to 15 headlines and 4 descriptions. Google mixes and matches them. Here are tips for Malaysian audiences:

- **Include price or offer in headlines:** "From RM99/month," "Free Consultation Today"
- **Use location:** "Serving Klang Valley," "KL & Selangor"
- **Add urgency when genuine:** "Limited Slots This Month," "Book Before Raya"
- **Speak to the problem:** "Tired of Ads That Don't Convert?" rather than just listing features

Pin your strongest headline to Position 1 so it always shows.

## Setting your budget

Start conservative. A daily budget of RM50–RM100 is enough to gather meaningful data within 2–4 weeks. Here is a rough framework:

| Monthly Budget | Suitable For |
|---|---|
| RM900–RM1,500 | Testing + single service |
| RM1,500–RM5,000 | One focused campaign, serious lead gen |
| RM5,000–RM15,000 | Multiple campaigns, scaling |
| RM15,000+ | Multi-location, e-commerce |

The key is not how much you spend — it is how well you track returns and optimize based on data.

## Conversion tracking setup

Without conversion tracking, you are flying blind. Set up at minimum:
- **Phone calls** (click-to-call tracking)
- **Form submissions** (thank-you page or event tracking)
- **Purchases** (for e-commerce)

Use Google Tag Manager to install your conversion tags. For landing pages, tools like [Nexova](https://nexova.my), Unbounce, or Carrd often have built-in Google Ads tracking integrations that simplify this process.

## Common mistakes to avoid

1. **Running only broad match keywords** — this burns budget on irrelevant searches. Use phrase match and exact match, especially early on.
2. **Not adding negative keywords** — if you sell premium products, add "free," "cheap," "DIY" as negatives.
3. **Sending traffic to your homepage** — create dedicated landing pages that match the search intent.
4. **Ignoring mobile** — over 70% of Malaysian searches happen on mobile. Your landing page must load fast and be mobile-optimized.
5. **Not reviewing Search Terms report** — check weekly what actual searches triggered your ads and add irrelevant ones as negatives.

## Measuring success

Track these metrics weekly:
- **CTR (Click-Through Rate):** Above 3% for Search is healthy
- **CPC (Cost Per Click):** Varies by industry, RM1–RM10 typical in Malaysia
- **Conversion Rate:** 3–8% is good for landing pages
- **Cost Per Conversion:** Your north star metric
- **ROAS:** Revenue divided by ad spend

Give campaigns at least 2–4 weeks before making major changes. Google's algorithm needs data to optimize.`,
  },
  {
    slug: 'google-ads-quality-score-optimization',
    title: 'How to Improve Your Google Ads Quality Score (and Pay Less Per Click)',
    excerpt: 'Quality Score directly impacts how much you pay and where your ads appear. Here is how to optimize all three components.',
    category: 'Optimization',
    readTime: '9 min read',
    date: 'March 30, 2026',
    dateISO: '2026-03-30',
    author: 'Hafiz Rahman',
    keywords: ['google ads quality score', 'improve quality score', 'lower cpc google ads', 'ad rank optimization'],
    faq: [
      { question: 'What is a good Quality Score?', answer: 'A Quality Score of 7 or above is considered good. Scores of 8-10 are excellent and mean you are paying below-average costs. Anything below 5 should be prioritized for improvement.' },
      { question: 'Does Quality Score affect ad position?', answer: 'Yes. Ad Rank is calculated as your bid multiplied by Quality Score (simplified). A higher Quality Score means you can achieve better positions while paying less than competitors with lower scores.' },
    ],
    content: `## What Quality Score actually is

Quality Score is Google's 1–10 rating of the overall experience your keywords, ads, and landing pages provide to searchers. It is measured at the keyword level and has three components:

1. **Expected Click-Through Rate (CTR)** — how likely someone is to click your ad
2. **Ad Relevance** — how closely your ad matches the search intent
3. **Landing Page Experience** — how useful and relevant your landing page is

Each component is rated Below Average, Average, or Above Average. Google uses these signals to determine your Ad Rank (how high your ad appears) and your actual cost per click.

## Why it matters for Malaysian advertisers

In competitive Malaysian markets — legal services, property, education — CPCs can reach RM8–RM15. A Quality Score of 8 versus 5 can mean paying 30–40% less per click for the same position. Over a month, that translates to thousands of ringgit saved.

## Improving Expected CTR

Expected CTR predicts whether your keyword is likely to lead to a click. Here is how to improve it:

**Tighten your ad groups.** Each ad group should target 5–15 closely related keywords. If your ad group mixes "accounting firm" with "bookkeeping services," neither ad will be perfectly relevant to both searches.

**Use the keyword in headlines.** If someone searches "pest control Petaling Jaya," your headline should contain "Pest Control Petaling Jaya," not just "Pest Control Services."

**Add compelling differentiators.** Phrases like "Rated 4.9/5 on Google," "Since 2015," or "Free Same-Day Quote" push CTR up because they give searchers a reason to click you over competitors.

**Test ad variations continuously.** Run 3 RSAs per ad group and pause underperformers monthly.

## Improving Ad Relevance

Ad Relevance measures whether your ad copy matches the user's search. This is largely about structure:

**One theme per ad group.** If you sell both residential and commercial cleaning, separate them into distinct ad groups with tailored ad copy.

**Mirror the language of the search.** If your keyword is "wedding caterer Kuala Lumpur," use that exact phrase in your ad, not just "catering services."

**Use all headline and description slots.** RSAs perform better when given a full set of 15 headlines and 4 descriptions. Include keyword variations, benefits, CTAs, and location in different headlines so Google can assemble the best combination.

## Improving Landing Page Experience

This is where most Malaysian advertisers lose points. Common issues:

**Slow loading.** Test your landing page on PageSpeed Insights. A mobile score below 50 is hurting your Quality Score. Common fixes: compress images, remove unnecessary scripts, use a fast host.

**Mismatch between ad and page.** If your ad says "Free Consultation" but the landing page does not mention a free consultation prominently, Google sees that as a poor experience.

**Thin content.** Pages with just a form and a logo score poorly. Add genuine, helpful content — explain your process, show credentials, include FAQs.

**Mobile experience.** Buttons should be tap-friendly, text should be readable without zooming, and forms should be simple. Over 70% of Malaysian traffic is mobile.

**Trust signals.** Include a privacy policy, business registration number (SSM), physical address, and client logos or reviews where possible.

## A practical optimization workflow

1. Export your keyword report and sort by Quality Score ascending
2. Filter for keywords with at least 50 impressions (enough data to be meaningful)
3. For each low-score keyword, check which component is Below Average
4. Apply the relevant fixes above
5. Allow 2–3 weeks for scores to update, then reassess

Quality Score improvements compound over time. A campaign-wide lift from 5 to 7 average can reduce your cost per lead by 20–35%.`,
  },
  {
    slug: 'google-ads-keyword-research-malaysia',
    title: 'Google Ads Keyword Research: A Step-by-Step Guide for Malaysian Markets',
    excerpt: 'Find profitable keywords that Malaysian customers actually search for. Includes tools, techniques, and local nuances.',
    category: 'Keywords',
    readTime: '11 min read',
    date: 'March 23, 2026',
    dateISO: '2026-03-23',
    author: 'Hafiz Rahman',
    keywords: ['google ads keyword research', 'keyword research malaysia', 'ppc keywords', 'google keyword planner malaysia'],
    faq: [
      { question: 'What is the best free keyword research tool for Google Ads?', answer: 'Google Keyword Planner within your Google Ads account is the best free option. It shows actual search volumes and estimated CPCs for Malaysia specifically. Pair it with Google Trends for seasonal insights.' },
      { question: 'Should I bid on Bahasa Malaysia keywords?', answer: 'It depends on your audience. BM keywords often have significantly lower competition and CPCs. If your target customers search in Bahasa, bidding on those terms can be highly cost-effective.' },
      { question: 'How many keywords should an ad group have?', answer: 'Keep it between 5 and 15 tightly themed keywords per ad group. This ensures your ads stay highly relevant to each search, which improves Quality Score and lowers costs.' },
    ],
    content: `## Why keyword research is the foundation

Every Google Ads campaign begins and ends with keywords. Choose the wrong ones and you will pay for clicks from people who will never buy. Choose the right ones and your ads appear in front of motivated buyers at the exact moment they need you.

For Malaysian businesses, keyword research has extra layers — bilingual search behavior, local geographic modifiers, and industry-specific terms that differ from global markets.

## Step 1: Seed keyword brainstorm

Start by listing every way a customer might search for your product or service. Think about:

- **What you sell:** "accounting services," "tax filing," "audit"
- **Problems you solve:** "late tax penalty Malaysia," "messy bookkeeping"
- **Locations you serve:** "accountant Petaling Jaya," "tax agent Penang"
- **Qualifiers:** "affordable," "certified," "experienced," "near me"

Do not filter at this stage. Write down at least 30–50 seed terms.

## Step 2: Google Keyword Planner

Open Google Ads → Tools → Keyword Planner → Discover new keywords. Enter your seed terms and set:
- **Location:** Malaysia (or specific states)
- **Language:** English and Malay
- **Date range:** Last 12 months

The tool returns search volume, competition level, and estimated CPC for each keyword plus suggestions. Export the full list to a spreadsheet.

## Step 3: Categorize by intent

Not all keywords are equal. Sort them into:

**Transactional (buy now):** "hire accountant KL," "order birthday cake Subang" — these convert best and deserve the most budget.

**Commercial investigation:** "best accounting firm Malaysia review," "wedding photographer price KL" — people comparing options, still very valuable.

**Informational:** "how to file tax Malaysia," "what is SST" — lower conversion rate but useful for content marketing or Display campaigns.

Focus 70–80% of your Search budget on transactional and commercial keywords.

## Step 4: Local modifiers matter

Malaysian search behavior is location-heavy. Build keyword variations with:
- State names: Selangor, Johor, Penang, Sabah
- City names: KL, PJ, Shah Alam, JB, Ipoh, Kota Kinabalu
- Area names: Bangsar, TTDI, Damansara, Bukit Bintang
- "Near me" variations (Google auto-locates the user)

A keyword like "dentist" has enormous competition. "Dentist Bangsar" is cheaper and converts better because it matches local intent.

## Step 5: Bahasa Malaysia keywords

Depending on your target market, BM keywords can be goldmines. Examples:

| English | Bahasa Malaysia | Typical difference |
|---|---|---|
| wedding photographer | jurugambar perkahwinan | 40–60% lower CPC |
| house cleaning service | servis cuci rumah | 50–70% lower CPC |
| car workshop | bengkel kereta | 30–50% lower CPC |

Use Google Trends to compare relative search interest between English and BM versions of your keywords. Create separate ad groups for each language with tailored ad copy.

## Step 6: Competitor analysis

Search your main keywords in Google and note:
- Which competitors appear in the top ads
- What headlines and offers they use
- Which landing pages they send traffic to

Tools like Semrush and SpyFu can reveal which keywords your competitors bid on and their approximate budgets. This is not about copying — it is about finding opportunities they are missing.

## Step 7: Negative keywords

Equally important is knowing what you do NOT want to show up for:
- "Free" (if you sell premium services)
- "DIY" or "how to" (if you are a service provider)
- Competitor brand names (unless you deliberately run competitor campaigns)
- Unrelated services (an accountant does not want "accounting degree" clicks)

Build a shared negative keyword list and apply it across all campaigns. Review Search Terms weekly and keep adding negatives.

## Step 8: Match types

Google offers three match types:

**Exact match** \`[keyword]\` — ads show only for that specific search or very close variants. Most control, least volume.

**Phrase match** \`"keyword"\` — ads show for searches containing your keyword in order, with additional words before or after.

**Broad match** \`keyword\` — widest reach, Google uses AI to match related searches. Powerful with Smart Bidding but risky without conversion data.

For new campaigns, start with phrase and exact match. Add broad match later once you have conversion tracking established and enough data for Google's algorithms to optimize toward.

## Putting it all together

A well-researched keyword list for a KL-based renovation contractor might look like:

- Ad Group: Kitchen Renovation → "kitchen renovation KL," "ubah suai dapur KL," [kitchen cabinet contractor Petaling Jaya]
- Ad Group: Bathroom Renovation → "bathroom renovation price Malaysia," "renovate toilet cost KL"
- Ad Group: House Renovation → [house renovation contractor Selangor], "kontraktor renovate rumah KL"

Each group has tight keyword themes, a mix of English and BM, and location-specific modifiers. This structure leads to relevant ads, better Quality Scores, and lower costs.`,
  },
  {
    slug: 'google-shopping-ads-malaysia-ecommerce',
    title: 'Google Shopping Ads: How Malaysian E-Commerce Stores Get More Sales',
    excerpt: 'Set up Google Shopping campaigns that show your products with images and prices directly in search results.',
    category: 'E-Commerce',
    readTime: '10 min read',
    date: 'March 16, 2026',
    dateISO: '2026-03-16',
    author: 'Hafiz Rahman',
    keywords: ['google shopping ads malaysia', 'google merchant center malaysia', 'ecommerce google ads', 'product listing ads'],
    faq: [
      { question: 'Do I need a website to run Google Shopping Ads?', answer: 'Yes. You need a website with product pages that Google can crawl. Platforms like WooCommerce, Shopify, or custom-built stores using tools like Nexova all work. Your site must display prices in MYR and have a clear checkout process.' },
      { question: 'How much do Google Shopping Ads cost in Malaysia?', answer: 'CPCs for Shopping Ads in Malaysia typically range from RM0.50 to RM4, lower than Search Ads for the same products. Actual costs depend on your product category, competition, and bid strategy.' },
    ],
    content: `## What Google Shopping Ads look like

When someone searches "buy wireless earbuds Malaysia," Google often shows a row of product cards at the top of the results — with product images, prices, store names, and ratings. These are Shopping Ads (also called Product Listing Ads or PLAs).

For e-commerce businesses, Shopping Ads have some of the highest conversion rates in Google Ads because the searcher can see the product and price before clicking. This pre-qualifies traffic.

## Prerequisites

Before you can run Shopping Ads, you need:

1. **A website with product pages** — each product needs its own URL with price, description, images, and availability
2. **Google Merchant Center account** — this is where your product data lives
3. **A product feed** — a structured data file (XML, CSV, or Google Sheets) listing all your products
4. **Linked Google Ads account** — Merchant Center connects to Google Ads for campaign management

## Setting up Google Merchant Center

Go to merchants.google.com and create an account. Key settings:

- **Business information:** Use your Malaysian business address and phone number
- **Website URL:** Must match your product page domain exactly
- **Website verification:** Verify via HTML tag, Google Analytics, or Google Tag Manager
- **Shipping:** Set up shipping rates for Malaysia (flat rate, free above threshold, or calculated)
- **Tax:** Malaysia does not have a sales tax display requirement in the same way as the US, but ensure your prices include SST if applicable

## Building your product feed

The product feed is the most critical piece. Each product entry needs:

| Attribute | Required | Example |
|---|---|---|
| id | Yes | SKU-12345 |
| title | Yes | Wireless Bluetooth Earbuds TWS with Case |
| description | Yes | Premium true wireless earbuds with... |
| link | Yes | https://yourstore.my/products/earbuds |
| image_link | Yes | https://yourstore.my/images/earbuds.jpg |
| price | Yes | 89.90 MYR |
| availability | Yes | in_stock |
| brand | Yes | AudioTech |
| condition | Yes | new |
| gtin or mpn | Recommended | 8901234567890 |

**Optimization tips for the Malaysian market:**

- **Titles matter enormously.** Put the most searched term first: "Wireless Earbuds Bluetooth 5.3 — AudioTech" beats "AudioTech Premium Series TWS-500." Include the product type, key feature, and brand.
- **Use high-quality images.** White background product photos perform best. No watermarks, no promotional text on images.
- **Prices in MYR.** Ensure your feed and website both show prices in Malaysian Ringgit.
- **Keep stock status updated.** Disapproved products from out-of-stock items hurt your account standing.

If you use WooCommerce, plugins like "Google Listings & Ads" auto-generate feeds. Shopify has a native Google channel. For custom stores, a Google Sheets feed works well for smaller catalogs (under 500 products).

## Campaign structure

**Standard Shopping campaigns** give you manual control over bids and product grouping. You can segment by:
- Product type
- Brand
- Custom labels (margin tier, best-seller, clearance)
- Price range

**Performance Max campaigns** include Shopping placements plus Search, Display, YouTube, and Gmail. Google's AI handles targeting and bidding. PMax works well once you have consistent conversion data (at least 30 conversions per month).

For Malaysian stores just starting: begin with a Standard Shopping campaign. Once you hit 30+ monthly conversions, test a Performance Max campaign alongside it.

## Bidding strategy

Start with **Manual CPC** or **Enhanced CPC** for Standard Shopping. Set bids at the product group level — bid higher on your best-sellers and highest-margin products.

Once you have 15+ conversions in 30 days, switch to **Target ROAS** or **Maximize Conversion Value** for automated bidding.

## Optimization checklist

1. Review Search Terms report weekly — add irrelevant searches as campaign-level negatives
2. Segment products by performance — separate top sellers into their own product groups with higher bids
3. Update product titles quarterly to match trending search terms
4. Ensure all product images meet Google's requirements (no overlays, clean backgrounds)
5. Monitor Merchant Center diagnostics weekly for disapproved products
6. Add custom labels for seasonal products, high-margin items, or clearance stock
7. Test promotional pricing with Merchant Promotions (feeds-based or manually added)

## Common issues for Malaysian stores

- **Currency mismatch:** Your feed says MYR but your website shows prices without currency. Fix by adding "MYR" or "RM" visibly on product pages.
- **Shipping policy missing:** Google requires a clear shipping policy page. Add delivery timeframes and costs.
- **Return policy:** Required. Even if your policy is strict, it must be stated clearly on your website.
- **Website crawl errors:** If Google cannot reach your product pages, those products get disapproved. Monitor in Merchant Center > Diagnostics.`,
  },
  {
    slug: 'google-ads-landing-page-best-practices',
    title: 'Google Ads Landing Pages: What Converts Malaysian Visitors into Customers',
    excerpt: 'Your ad is only half the equation. Here is how to build landing pages that turn Google Ads clicks into leads and sales.',
    category: 'Conversion',
    readTime: '9 min read',
    date: 'March 9, 2026',
    dateISO: '2026-03-09',
    author: 'Hafiz Rahman',
    keywords: ['google ads landing page', 'landing page optimization', 'conversion rate optimization malaysia', 'ppc landing page'],
    faq: [
      { question: 'Should I send Google Ads traffic to my homepage?', answer: 'Almost never. Homepages serve many purposes and dilute focus. A dedicated landing page that matches your ad message and has a single call-to-action will convert 2-5x better than a homepage.' },
      { question: 'How fast should my landing page load?', answer: 'Under 3 seconds on mobile. Google research shows 53% of mobile users abandon pages that take longer than 3 seconds. Use PageSpeed Insights to test — aim for a mobile score above 70.' },
    ],
    content: `## The landing page gap

Most Malaysian advertisers spend hours perfecting their ad copy and keywords but send traffic to a generic homepage or an outdated service page. This is the single biggest source of wasted ad spend.

A purpose-built landing page can double or triple your conversion rate compared to a homepage. When someone clicks your ad for "wedding photographer Penang," they should land on a page about wedding photography in Penang — not your general portfolio page.

## Anatomy of a high-converting landing page

Every effective Google Ads landing page follows a structure. The order and emphasis vary, but these elements should be present:

**1. Headline that matches the ad.** If your ad says "Professional Pest Control in KL — Free Inspection," the landing page headline should closely mirror that. Consistency between ad and page builds trust and improves Quality Score.

**2. Subheadline with your value proposition.** One sentence explaining what makes you different: "Serving Klang Valley since 2012 with same-day service and a 6-month warranty."

**3. Hero section.** A clean above-the-fold area with headline, subheadline, and a primary CTA button. No clutter.

**4. Social proof.** Google or Facebook reviews, client logos, case study numbers, or certification badges. Malaysian consumers are heavily influenced by reviews — 87% read online reviews before making a purchase decision.

**5. Benefits, not just features.** Instead of "24/7 customer support," say "Got an emergency pest issue at 2am? We answer."

**6. Clear call-to-action.** One primary action you want visitors to take — a form submission, a phone call, or a WhatsApp message. Repeat the CTA at least twice on the page.

**7. Trust elements.** SSM registration number, physical address, years in business, money-back guarantee. These matter more for service businesses in Malaysia where trust is a common conversion barrier.

## Malaysian-specific landing page tips

**WhatsApp CTA is powerful.** Many Malaysian consumers prefer WhatsApp over phone calls or email. Add a WhatsApp button with a pre-filled message. The click-to-WhatsApp conversion rate consistently outperforms form submissions in B2C markets here.

**Bilingual options.** If your audience spans both English and BM speakers, consider having BM landing page variants for BM keyword ad groups.

**Price transparency.** Malaysian consumers frequently comparison-shop. Showing a starting price or price range on your landing page (even for services) reduces bounce rate because it qualifies visitors immediately.

**Mobile-first.** Over 70% of Malaysian Google searches happen on mobile. Design your landing page for a phone screen first, then scale up for desktop. Large tap targets, minimal form fields, fast loading.

## Landing page builders

You do not need a developer to build effective landing pages. Options include:

- **[Nexova](https://nexova.my)** — drag-and-drop page builder with built-in analytics
- **Unbounce** — established landing page platform with A/B testing
- **Carrd** — simple one-page builder for basic landing pages
- **WordPress + Elementor** — flexible but requires more setup

The best tool is the one you will actually use to create and test pages. Any of these can produce a landing page that converts well.

## Speed optimization

Page speed is both a ranking factor in Google Ads Quality Score and a direct conversion factor. For Malaysian audiences on mobile data:

1. **Compress all images** — use WebP format, aim for under 100KB per image
2. **Minimize JavaScript** — remove analytics tools you do not use, defer non-critical scripts
3. **Use a CDN** — Cloudflare's free tier is excellent for Malaysian sites
4. **Choose a fast host** — servers in Singapore or Hong Kong have the lowest latency to Malaysian visitors
5. **Test on 4G** — not everyone in Malaysia has fiber. Test your page on a throttled 4G connection

## Measuring landing page performance

Track these metrics in Google Ads:
- **Conversion rate:** Percentage of visitors who complete your desired action
- **Bounce rate:** Percentage who leave without any interaction
- **Time on page:** Longer is usually better for consideration purchases
- **CPA (Cost Per Acquisition):** Your ultimate metric

Run A/B tests on:
- Headline variations
- CTA button text and color
- Form length (fewer fields usually wins)
- Social proof placement
- Price display vs. no price

Even a 1-2% conversion rate improvement at scale saves thousands in monthly ad spend.`,
  },
  {
    slug: 'google-ads-bidding-strategies-explained',
    title: 'Google Ads Bidding Strategies Explained: Which One Should You Use?',
    excerpt: 'Manual CPC, Target CPA, Maximize Conversions — a practical breakdown of every bidding strategy and when to use each.',
    category: 'Optimization',
    readTime: '8 min read',
    date: 'March 2, 2026',
    dateISO: '2026-03-02',
    author: 'Hafiz Rahman',
    keywords: ['google ads bidding strategy', 'target cpa vs maximize conversions', 'smart bidding google ads', 'manual cpc vs automated bidding'],
    faq: [
      { question: 'When should I switch from Manual CPC to automated bidding?', answer: 'Once you have at least 15-30 conversions per month in a campaign, automated strategies have enough data to optimize effectively. Below that threshold, Manual or Enhanced CPC gives you more reliable control.' },
      { question: 'What is a good target CPA for Google Ads in Malaysia?', answer: 'It depends entirely on your industry and customer lifetime value. Service businesses in Malaysia often see CPAs of RM30-RM150. E-commerce purchases range from RM15-RM80. Calculate your maximum CPA based on what a customer is worth to you, not industry averages.' },
    ],
    content: `## Why bidding strategy matters

Your bidding strategy determines how Google spends your money. Choose wrong and you either overpay for clicks, miss out on conversions, or burn through your budget on low-quality traffic. For Malaysian SMBs where every ringgit counts, getting this right is critical.

## Manual CPC

**How it works:** You set a maximum bid for each keyword or ad group. Google never charges more than your max bid per click.

**Best for:** New campaigns, small budgets, or when you want full control. Also good when you are still learning which keywords convert.

**Pros:**
- Complete control over spend
- No algorithm learning period
- Predictable costs

**Cons:**
- Time-intensive to manage
- Cannot react to real-time signals like device, location, or time of day
- You might underbid on high-value clicks and overbid on low-value ones

**Practical tip:** Start here if your monthly budget is under RM3,000 or if your campaign has fewer than 15 conversions per month.

## Enhanced CPC (ECPC)

**How it works:** You set manual bids, but Google can adjust them up or down based on the likelihood of conversion. It is a hybrid between manual and automated.

**Best for:** The step between Manual CPC and full automation. Good when you have some conversion data but not enough for pure Smart Bidding.

**Pros:**
- Retains your manual bid as a baseline
- Google's adjustments can capture conversions you would miss
- Low risk transition from Manual CPC

**Cons:**
- Adjustments can sometimes be significant
- Less predictable than pure Manual CPC

## Maximize Clicks

**How it works:** Google automatically sets bids to get as many clicks as possible within your daily budget.

**Best for:** Brand awareness, driving traffic to content, or research phase. Not ideal for conversion-focused campaigns.

**Pros:**
- Simple setup
- Good for traffic volume

**Cons:**
- Optimizes for clicks, not conversions
- May attract low-quality traffic
- No cost-per-conversion control

## Maximize Conversions

**How it works:** Google uses machine learning to get as many conversions as possible within your budget. You do not set individual bids.

**Best for:** Campaigns with at least 15+ conversions per month and a fixed daily budget you are comfortable fully spending.

**Pros:**
- Powerful machine learning optimization
- Considers hundreds of real-time signals
- Fully automated

**Cons:**
- Will spend your entire daily budget (always)
- No control over cost per conversion
- Needs sufficient conversion data to work well

**Malaysian context:** This works well for lead generation campaigns in competitive markets (legal, education, property) where you have consistent conversion volume.

## Target CPA (Cost Per Acquisition)

**How it works:** You tell Google your target cost per conversion. The algorithm bids to achieve that average CPA over time.

**Best for:** Mature campaigns with 30+ conversions per month where you know your acceptable cost per lead or sale.

**Pros:**
- Controls your cost per conversion
- Balances volume and efficiency
- Adapts to competitive changes automatically

**Cons:**
- Requires sufficient conversion data (30+ per month recommended)
- May reduce volume if your target CPA is too low
- Learning period of 1–2 weeks when first applied

**Setting your target:** Calculate your maximum acceptable CPA based on customer lifetime value. If an average customer is worth RM500 to your business, and you close 1 in 5 leads, your max CPA is RM100 per lead.

## Target ROAS (Return on Ad Spend)

**How it works:** You set a target return. For example, Target ROAS of 400% means for every RM1 spent, you want RM4 in revenue. Google bids accordingly.

**Best for:** E-commerce campaigns with revenue tracking and at least 30+ conversions per month.

**Pros:**
- Directly tied to revenue
- Prioritizes high-value conversions
- Scales profitably

**Cons:**
- Requires accurate revenue tracking
- Can significantly reduce volume if ROAS target is too aggressive
- Not suitable for lead generation (revenue is not immediate)

## The decision framework

| Scenario | Recommended Strategy |
|---|---|
| New campaign, < 15 conversions/month | Manual CPC or ECPC |
| 15–30 conversions/month, fixed budget | Maximize Conversions |
| 30+ conversions/month, known CPA target | Target CPA |
| E-commerce, 30+ purchases/month | Target ROAS |
| Brand awareness or content promotion | Maximize Clicks |

## Transition tips

1. **Never jump from Manual CPC directly to Target CPA.** Go Manual → ECPC → Maximize Conversions → Target CPA. Each step gives the algorithm more data.
2. **Set realistic targets.** Look at your historical CPA and set your target 10–20% above it initially. Tighten gradually.
3. **Allow learning periods.** Do not change strategies during the 1–2 week learning phase. Performance will fluctuate — that is normal.
4. **Monitor search terms and negatives** regardless of bidding strategy. Automation handles bids, not relevance.`,
  },
  {
    slug: 'google-ads-for-local-businesses-malaysia',
    title: 'Google Ads for Local Businesses in Malaysia: A Practical Playbook',
    excerpt: 'How clinics, restaurants, workshops, and service providers across Malaysia can use Google Ads to get more local customers.',
    category: 'Local',
    readTime: '10 min read',
    date: 'February 22, 2026',
    dateISO: '2026-02-22',
    author: 'Hafiz Rahman',
    keywords: ['google ads local business', 'local ppc malaysia', 'google ads clinic malaysia', 'google my business ads'],
    faq: [
      { question: 'How much should a local business spend on Google Ads in Malaysia?', answer: 'Most local businesses see good results starting at RM50-RM100 per day (RM1,500-RM3,000/month). The key is geographic targeting — limit your ads to your actual service area to avoid wasting spend on clicks from too far away.' },
      { question: 'Do I need Google Business Profile to run local ads?', answer: 'It is not required for Search Ads, but it is strongly recommended. A verified Google Business Profile enables Location Assets (formerly extensions) which show your address, phone number, and ratings directly in ads. This significantly improves click-through rates for local searches.' },
    ],
    content: `## Why local businesses win with Google Ads

When someone searches "24 hour plumber Shah Alam" at 11pm, they need a plumber right now. This is the power of local Google Ads — you reach people with immediate buying intent in your specific service area.

Unlike social media ads where you interrupt people browsing content, Google Ads captures demand that already exists. For local businesses in Malaysia, this means higher conversion rates and faster results.

## Google Business Profile is your foundation

Before running ads, ensure your Google Business Profile (GBP) is verified and optimized:

- Complete business name, address, phone number
- Correct business categories (primary + secondary)
- Business hours including public holidays
- High-quality photos (exterior, interior, team, products)
- Respond to all reviews (positive and negative)
- Post updates weekly

A strong GBP profile improves your organic Maps visibility AND enables Location Assets in your ads. When your ad shows your rating (4.5 stars, 120 reviews), click-through rate can jump 15–25%.

## Campaign setup for local businesses

**Geographic targeting is everything.** Set your campaign to target only the area you actually serve:
- Radius targeting: 5km, 10km, or 25km from your location
- Or specific areas: Subang Jaya, Petaling Jaya, Shah Alam

Choose "Presence" not "Presence or interest" in location settings. You want people physically in your area, not people researching your area from elsewhere.

**Ad schedule:** Run ads during your business hours (and slightly before). A clinic open 9am–5pm should not pay for midnight clicks unless they offer emergency services.

**Device bid adjustments:** If most conversions come from mobile (common for local businesses), increase mobile bids by 15–30%.

## Keyword strategy for local businesses

Build keywords around three elements: **service + location + modifier**

Examples for a dental clinic in Bangsar:
- "dentist Bangsar"
- "dental clinic near Bangsar Village"
- "teeth cleaning Bangsar price"
- "emergency dentist KL"
- "doktor gigi Bangsar" (Bahasa Malaysia)

For restaurants and F&B:
- "nasi lemak delivery Damansara"
- "best café TTDI"
- "restaurant birthday party KL"

Add "near me" keywords — Google automatically maps these to the user's location:
- "dentist near me"
- "car workshop near me"
- "salon near me"

## Ad copy that works locally

**Include your location prominently:** "Dental Clinic in Bangsar — Walk-Ins Welcome"

**Mention what locals care about:**
- Parking availability: "Free Parking Available"
- Proximity to landmarks: "Next to Bangsar Village"
- Operating hours: "Open Saturdays 9am–1pm"

**Use local trust signals:**
- "Serving Bangsar Since 2015"
- "Rated 4.8/5 by 200+ Patients"
- "SSM Registered"

**Include a strong CTA:**
- "Call Now for Same-Day Appointment"
- "WhatsApp Us — Reply Within 5 Minutes"
- "Book Online — Takes 30 Seconds"

## Call Ads and Call Assets

For businesses where phone calls drive revenue (clinics, workshops, home services), set up:

**Call Assets** — add your phone number to existing ads. Shows a clickable call button on mobile.

**Call-Only Ads** — ads designed purely to generate phone calls. When tapped, they dial directly instead of opening a website. Effective when your conversion happens on the phone.

Track call conversions in Google Ads to measure which keywords and ads generate the most calls.

## Location Assets

Link your Google Business Profile to Google Ads to enable Location Assets. Your ads will show:
- Business address
- Map pin
- Distance from the searcher
- Star rating and review count
- Opening hours

This turns a standard text ad into a highly trust-rich local result.

## Budget allocation framework

For a single-location business:

| Monthly Budget | Strategy |
|---|---|
| RM1,000–RM2,000 | One campaign, 2–3 ad groups, tight radius |
| RM2,000–RM5,000 | Separate campaigns for core services |
| RM5,000+ | Full coverage + Display retargeting |

Allocate 70% to your highest-intent keywords (service + location), 20% to broader service terms, and 10% to testing new keywords.

## Measuring local ROI

Track:
- **Phone calls** from ads (call tracking)
- **Direction requests** and map clicks
- **Form submissions** or WhatsApp clicks
- **Walk-in attribution** (ask new customers how they found you)

For service businesses, a simple CPA calculation works: if your monthly ad spend is RM3,000 and you receive 40 qualified leads, your CPA is RM75. If you convert 25% into customers worth RM500 each, your ROAS is 1,667%.

Keep a simple spreadsheet tracking leads from Google Ads and close rates. This data is what allows you to confidently increase spend.`,
  },
  {
    slug: 'google-ads-vs-seo-malaysia',
    title: 'Google Ads vs SEO: Which Should Malaysian Businesses Invest In?',
    excerpt: 'A practical comparison of paid search and organic search for the Malaysian market. Spoiler — most businesses need both.',
    category: 'Strategy',
    readTime: '8 min read',
    date: 'February 15, 2026',
    dateISO: '2026-02-15',
    author: 'Hafiz Rahman',
    keywords: ['google ads vs seo', 'seo vs ppc malaysia', 'search engine marketing malaysia', 'should I do seo or google ads'],
    faq: [
      { question: 'Should I do SEO or Google Ads first?', answer: 'If you need leads or sales within weeks, start with Google Ads. If you can invest for 6-12 months before seeing returns, SEO offers better long-term ROI. Ideally, run both — Google Ads for immediate results while building SEO foundations simultaneously.' },
      { question: 'How long does SEO take to work in Malaysia?', answer: 'For moderately competitive keywords, expect 4-8 months to reach page one. Highly competitive terms (property, legal, finance) can take 12+ months. Local keywords with geographic modifiers typically rank faster.' },
    ],
    content: `## The fundamental difference

**Google Ads** puts your website at the top of search results immediately — you pay per click. Stop paying, stop appearing.

**SEO** (Search Engine Optimization) earns your website a position in organic results. It takes months to build, but traffic is essentially free once you rank.

Both target the same place — Google search results. But the mechanics, timelines, and economics are completely different.

## Google Ads: Strengths

**Speed.** Launch a campaign today, get clicks tomorrow. For new businesses, product launches, or time-sensitive promotions, nothing beats the immediacy of Google Ads.

**Precision.** Target specific keywords, locations, devices, times of day, and even household income brackets. A law firm in JB can show ads only to people in Johor searching for "divorce lawyer" during business hours.

**Measurability.** Every click, conversion, and ringgit is tracked. You know exactly what you are getting for your spend.

**Scalability.** Found a keyword that converts at RM50 CPA with a customer worth RM500? Increase budget and scale profitably.

## Google Ads: Weaknesses

**Cost compounds.** You pay for every visitor, repeatedly. A keyword costing RM5/click that sends 100 visitors/day costs RM15,000/month — forever.

**Ad fatigue and competition.** As more competitors enter Google Ads in Malaysia, CPCs rise. Keywords that were RM2 in 2023 might be RM5 in 2026.

**Clicks stop when budget stops.** There is no residual value. Turn off your campaigns and traffic drops to zero immediately.

## SEO: Strengths

**Compounding returns.** A well-optimized page can rank for years, generating thousands of free clicks monthly. A single blog post ranking #1 for "best CRM for Malaysian businesses" could bring in 2,000+ visitors per month at zero marginal cost.

**Trust.** Many Malaysian users skip ads and go straight to organic results. Ranking organically signals authority and legitimacy.

**Broad keyword coverage.** A strong SEO strategy captures hundreds or thousands of keyword variations through content marketing — far more than you could profitably bid on in Google Ads.

## SEO: Weaknesses

**Slow.** Expect 4–12 months before meaningful organic traffic. This is not viable for businesses that need leads this month.

**Unpredictable.** Google algorithm updates can tank rankings overnight. What worked last year may not work today.

**Competitive.** In established Malaysian industries (property, legal, healthcare), the top organic spots are held by domains with years of authority.

**Ongoing investment.** SEO is not "set and forget." Content needs updating, backlinks need building, and technical issues need monitoring.

## The Malaysian search landscape

Some data points for context:
- Google holds about 97% of search market share in Malaysia
- Mobile accounts for 70%+ of searches
- Bahasa Malaysia searches are growing but English still dominates for commercial terms
- Local intent searches ("near me" + city names) are increasing year over year
- Competition in Google Ads is rising across all major industries

## The case for both

For most Malaysian businesses, the optimal strategy is running both simultaneously:

**Google Ads handles the short term.** You get immediate visibility, test which keywords convert, and generate revenue while SEO ramps up.

**SEO builds the long-term foundation.** Target informational and long-tail keywords through content that Google Ads cannot profitably cover.

**Data flows between them.** Google Ads reveals which keywords actually convert — this informs your SEO content strategy. SEO content that ranks well gives you landing page ideas for Google Ads.

## Budget allocation guide

| Business Stage | Google Ads | SEO |
|---|---|---|
| Just launched, need revenue now | 80% | 20% |
| Established, growing steadily | 50% | 50% |
| Strong organic traffic | 30% | 70% |
| Mature market position | 20% | 80% |

The ratio shifts over time. Early on, you are buying traffic while building organic assets. As organic rankings mature, you can reduce ad spend on keywords where you already rank #1–3 organically.

## Quick wins for each

**Google Ads quick wins:**
1. Set up a Search campaign targeting your highest-intent keywords
2. Create dedicated landing pages for each ad group
3. Add negative keywords aggressively
4. Enable call tracking and conversion tracking

**SEO quick wins:**
1. Optimize your Google Business Profile (local SEO)
2. Fix technical issues (site speed, mobile usability, broken links)
3. Create location pages for each area you serve
4. Publish in-depth content targeting long-tail question keywords

Neither replaces the other. Together, they form a comprehensive search strategy that captures both immediate demand (ads) and builds sustainable traffic (SEO).`,
  },
  {
    slug: 'performance-max-campaigns-malaysia-guide',
    title: 'Performance Max Campaigns: A Practical Guide for Malaysian Advertisers',
    excerpt: 'Google Performance Max runs across all ad surfaces with AI optimization. Here is how to set it up properly and when it makes sense.',
    category: 'Strategy',
    readTime: '9 min read',
    date: 'February 8, 2026',
    dateISO: '2026-02-08',
    author: 'Hafiz Rahman',
    keywords: ['performance max campaigns', 'pmax google ads', 'google ads automation malaysia', 'performance max setup guide'],
    faq: [
      { question: 'Can I run Performance Max alongside regular Search campaigns?', answer: 'Yes, and this is the recommended approach. Search campaigns serve as a safety net for your most important keywords, while PMax finds additional conversions across Google properties. PMax will take priority for identical keyword matches, but your Search campaigns will still serve for queries PMax does not cover.' },
      { question: 'How much budget does Performance Max need to work well?', answer: 'Google recommends at least RM100-RM150 per day for PMax campaigns. The algorithm needs enough budget to test across multiple channels (Search, Display, YouTube, Gmail, Maps). Lower budgets limit the learning phase and reduce optimization potential.' },
    ],
    content: `## What Performance Max is

Performance Max (PMax) is Google's AI-driven campaign type that runs across every Google surface simultaneously — Search, Display, YouTube, Gmail, Maps, and Discovery. Instead of creating separate campaigns for each channel, PMax uses machine learning to allocate budget where conversions are most likely.

You provide creative assets (text, images, video), audience signals, and a conversion goal. Google handles the rest.

## How it differs from standard campaigns

| Aspect | Standard Search | Performance Max |
|---|---|---|
| Channels | Search only | All Google channels |
| Targeting | Keywords you choose | AI-determined from signals |
| Creative | Text ads (RSAs) | Text + images + video |
| Bidding | You choose strategy | Automated (conversion-based) |
| Reporting | Keyword-level | Asset group level (limited) |

The tradeoff is clear: PMax offers broader reach and automation at the cost of granular control and transparency.

## When PMax makes sense

**Good fit:**
- E-commerce stores with product feeds (PMax replaces Shopping campaigns effectively)
- Businesses with strong conversion tracking and 30+ monthly conversions
- Advertisers looking to scale beyond Search into Display and YouTube without managing separate campaigns
- Lead generation businesses comfortable with a higher CPA initially during learning

**Poor fit:**
- Brand new accounts with no conversion history
- Businesses without conversion tracking set up
- Advertisers who need keyword-level reporting for client transparency
- Very small budgets (under RM50/day)

## Setting up a PMax campaign

### 1. Conversion tracking

PMax requires solid conversion tracking. Set up:
- Primary conversion action (form submission, purchase, or phone call)
- Assign correct conversion values (even for lead gen — estimate a lead value)
- Verify tracking fires correctly before launching

### 2. Asset groups

Create at least 2–3 asset groups, each targeting a different product/service segment. Each group needs:

**Text assets:**
- Up to 5 headlines (30 characters each)
- Up to 5 long headlines (90 characters each)
- Up to 5 descriptions (90 characters each)

**Image assets:**
- Landscape (1200×628)
- Square (1200×1200)
- Portrait (960×1200)
- Provide at least 3 images per orientation

**Video assets (optional but recommended):**
- If you do not provide video, Google auto-generates it from your images. These auto-videos are usually low quality. Upload at least one 15-second and one 30-second video.

**Final URL:** Your landing page for each asset group.

### 3. Audience signals

Audience signals tell PMax where to start looking for converters. They are suggestions, not hard restrictions:

- **Custom segments:** Enter search terms your ideal customers use, websites they visit, or apps they use
- **Your data:** Upload customer email lists, website visitor audiences (remarketing)
- **Interests and demographics:** Select relevant in-market audiences

The more signals you provide, the faster PMax finds your ideal audience. Without signals, the algorithm takes longer and spends more during the learning phase.

### 4. Bidding

Choose:
- **Maximize Conversions** — if you want volume at any cost
- **Maximize Conversion Value** — if conversions have different values
- **Target CPA** or **Target ROAS** — if you have specific efficiency targets

Start with Maximize Conversions for the first 2–4 weeks, then switch to Target CPA/ROAS once the algorithm has data.

## Optimization strategies

**1. Layer Search campaigns underneath.** Run branded and top-performing keywords in standard Search campaigns. PMax will not compete for these if your Search campaign uses exact match. This gives you a safety net of controlled, predictable performance.

**2. Use asset group-level URLs.** Instead of letting PMax choose which page to send traffic to, set specific final URLs per asset group. This improves landing page relevance.

**3. Review Insights tab weekly.** PMax reporting is limited, but the Insights tab shows:
- Top search categories driving conversions
- Audience segments performing best
- Asset performance ratings

**4. Refresh creative monthly.** Replace "Low" performing assets with new variations. Keep testing headlines, images, and descriptions.

**5. Monitor for wasted spend.** PMax can spend on branded searches and irrelevant Display placements. Check search term insights (limited, but available) and add brand exclusions if needed.

## PMax for Malaysian e-commerce

If you run an online store, PMax effectively replaces Shopping campaigns. Connect your Google Merchant Center feed and PMax will show product listing ads alongside Search, Display, and YouTube placements.

For Malaysian e-commerce, ensure:
- Product feed titles are optimized for local search terms
- Prices are in MYR
- Shipping and return policies are clearly stated on your website
- Product images meet Google's quality standards

PMax Shopping tends to outperform standard Shopping campaigns by 10–25% once the learning period completes, primarily because it reaches customers across more touchpoints in their buying journey.

## Expected timeline

- **Week 1–2:** Learning period. Performance will be erratic. Do not make changes.
- **Week 3–4:** Performance stabilizes. Begin reviewing asset ratings and search categories.
- **Month 2:** Optimization window. Replace weak assets, adjust audience signals, tighten CPA/ROAS targets.
- **Month 3+:** Scale. Increase budget on performing asset groups, create new groups for untapped segments.

PMax is not a "set and forget" tool. It requires consistent monitoring and creative refreshes. But for advertisers willing to invest in proper setup, it often delivers the best blended performance across all Google channels.`,
  },
  {
    slug: 'google-ads-conversion-tracking-setup',
    title: 'Google Ads Conversion Tracking: The Complete Setup Guide',
    excerpt: 'Without conversion tracking, you are guessing. Here is how to set up every type of conversion tracking for your Google Ads campaigns.',
    category: 'Technical',
    readTime: '8 min read',
    date: 'February 1, 2026',
    dateISO: '2026-02-01',
    author: 'Hafiz Rahman',
    keywords: ['google ads conversion tracking', 'google tag manager setup', 'conversion tracking website', 'google ads tag installation'],
    faq: [
      { question: 'What is the difference between Google Ads conversion tracking and Google Analytics goals?', answer: 'Google Ads conversion tracking uses its own tag and reports directly in Google Ads. Google Analytics goals track all traffic sources. For Google Ads optimization, use Google Ads conversion tracking as the primary source — it is what Smart Bidding algorithms use to optimize.' },
      { question: 'Do I need Google Tag Manager?', answer: 'Not strictly required, but strongly recommended. GTM lets you manage all tracking tags (Google Ads, Analytics, Facebook Pixel, etc.) from one interface without editing website code. It also makes debugging much easier.' },
    ],
    content: `## Why conversion tracking is non-negotiable

Running Google Ads without conversion tracking is like driving with your eyes closed. You know you are spending money, but you have no idea whether it is working.

Conversion tracking tells you:
- Which keywords generate actual business results
- Which ads drive conversions vs. just clicks
- Your true cost per customer acquisition
- Whether to increase, decrease, or reallocate budget

Without it, Smart Bidding strategies (Target CPA, Maximize Conversions, Target ROAS) cannot function at all. They literally need conversion data to optimize.

## Types of conversions to track

### Website actions
- **Form submissions** — contact forms, quote requests, booking forms
- **Purchases** — for e-commerce stores
- **Button clicks** — WhatsApp buttons, phone number clicks, download links
- **Page views** — thank-you pages, confirmation pages

### Phone calls
- **Calls from ads** — when someone taps the call button directly on your ad
- **Calls from website** — when someone clicks your phone number after visiting your site
- **Call duration** — track calls longer than 60 seconds as conversions (filters out wrong numbers)

### Offline
- **Imported conversions** — upload CRM data to match leads with ad clicks
- **Store visits** — available for businesses with physical locations (requires significant traffic volume)

## Method 1: Google Ads tag (direct installation)

The simplest approach for basic setups:

1. In Google Ads → Tools → Conversions → New conversion action
2. Choose "Website" → enter your website URL
3. Define the conversion (form submit, purchase, page view)
4. Copy the Global Site Tag and event snippet
5. Paste the Global Site Tag in your website's \`<head>\` section
6. Place the event snippet on your conversion page (e.g., thank-you page)

This works but gets messy quickly if you have multiple conversion types or other tracking tools.

## Method 2: Google Tag Manager (recommended)

GTM is the professional standard:

### Step 1: Install GTM
Create a GTM container at tagmanager.google.com. Add the container snippet to every page of your website — one in the \`<head>\` and one after the opening \`<body>\` tag.

### Step 2: Create your Google Ads conversion tag
In GTM:
- New Tag → Google Ads Conversion Tracking
- Enter your Conversion ID and Conversion Label (from Google Ads conversion setup)
- Set the trigger (e.g., "Page View" on a thank-you page URL)

### Step 3: Set up triggers for different conversions

**Form submission trigger:**
- Trigger type: Form Submission
- Fire on: pages containing your contact form
- Add a condition: Page URL contains "/contact" or Form ID equals "contact-form"

**Button click trigger:**
- Trigger type: Click - All Elements
- Fire on: Click URL contains "wa.me" (for WhatsApp) or "tel:" (for phone clicks)

**Purchase trigger (e-commerce):**
- Trigger type: Custom Event or Page View
- Fire on: order confirmation page URL
- Send transaction value and currency (MYR) as parameters

### Step 4: Test in Preview mode
GTM's Preview mode lets you browse your website and see exactly which tags fire on which pages. Verify every conversion tag fires correctly before publishing.

### Step 5: Publish
Once tested, publish your GTM container. Conversions will start appearing in Google Ads within 24–48 hours.

## Enhanced conversions

Enhanced conversions improve tracking accuracy by sending hashed first-party data (email, phone, name) alongside conversion events. This helps Google match conversions even when cookies are blocked.

Enable it in Google Ads → Conversions → Settings → Enhanced conversions. GTM has a built-in enhanced conversions variable that auto-captures form data.

This is increasingly important as privacy changes limit cookie-based tracking in Malaysia and globally.

## Verifying your setup

After installation:
1. **Google Tag Assistant** (Chrome extension) — browse your site and verify tags fire
2. **GTM Preview mode** — real-time tag debugging
3. **Google Ads conversion status** — check for "Recording conversions" status
4. **Real-time Google Analytics** — confirm events appear

Test with actual conversions — submit your own form, make a test purchase, click the WhatsApp button. Then verify the conversion appears in Google Ads within 24 hours.

## Conversion value and counting

**Counting:** For lead generation, set "One" conversion per click (counting every form submit from the same person inflates data). For e-commerce, use "Every" to count each purchase.

**Value:** For e-commerce, pass the actual transaction value. For lead generation, assign an estimated value based on your average close rate. If 20% of leads become RM500 customers, your conversion value is RM100.

**Attribution model:** Use "Data-driven" attribution if available (requires sufficient data). Otherwise, "Time decay" or "Position-based" are better than "Last click" for understanding the full customer journey.

## Common troubleshooting

- **Conversions not recording:** Check that the tag fires on the correct page. Verify in GTM Preview mode.
- **Duplicate conversions:** Your tag might fire multiple times. Add a trigger condition to fire only once per session.
- **Delayed conversions:** Google Ads can take up to 72 hours to report conversions. Check the conversion lag report.
- **Mismatch between Analytics and Ads data:** Different attribution models and tracking methods cause this. It is normal — focus on Google Ads conversion data for campaign optimization.`,
  },
  {
    slug: 'google-ads-remarketing-retargeting-malaysia',
    title: 'Google Ads Remarketing: How to Bring Back Visitors Who Did Not Convert',
    excerpt: 'Most visitors leave without converting. Remarketing keeps your business in front of them across the web and YouTube until they are ready to buy.',
    category: 'Retargeting',
    readTime: '9 min read',
    date: 'January 25, 2026',
    dateISO: '2026-01-25',
    author: 'Hafiz Rahman',
    keywords: ['google ads remarketing', 'retargeting google ads malaysia', 'display remarketing', 'youtube remarketing ads'],
    faq: [
      { question: 'How long should I remarket to someone?', answer: 'For most businesses, 30-90 days is the sweet spot. High-consideration purchases (property, education courses) can extend to 180 days. Short purchase cycles (F&B, retail) should be 7-30 days. Always create audiences with different durations and test which performs best.' },
      { question: 'Is remarketing creepy or annoying?', answer: 'When done well, no. The key is frequency capping (limit impressions per person per day), using helpful rather than pushy messaging, and excluding people who have already converted. Bad remarketing follows someone with the same ad 50 times. Good remarketing shows relevant, evolving messages at reasonable frequency.' },
    ],
    content: `## Why remarketing matters

Only 2–5% of website visitors convert on their first visit. That means 95–98% of people leave without taking action. They might be comparing options, not ready yet, or simply got distracted.

Remarketing puts your ads back in front of those visitors as they browse other websites, watch YouTube, or check Gmail. It works because you are targeting people who already showed interest — they know who you are.

For Malaysian businesses, where purchase decisions often involve family consultation or price comparison, remarketing bridges the gap between first visit and conversion.

## Types of remarketing in Google Ads

### Standard Display Remarketing
Your banner ads appear on websites within Google's Display Network (over 2 million sites). Visitors who viewed your website see your ads while reading news, browsing recipes, or checking weather.

### Dynamic Remarketing
For e-commerce stores: shows the exact products a visitor viewed, complete with image, name, and price. Much more effective than generic banners because the ad is personally relevant.

### YouTube Remarketing
Video ads (skippable, non-skippable, or bumper) shown to your website visitors when they watch YouTube. Powerful for brand reinforcement and trust building.

### RLSA (Remarketing Lists for Search Ads)
Bid higher when past visitors search for your keywords again. Someone who visited your "wedding photography" page and later searches "wedding photographer KL" sees your ad prominently — you can afford to bid more because they are a warm lead.

### Customer Match
Upload your customer email list and show ads to those people (and similar audiences) across Google. Great for upselling, re-engagement, or win-back campaigns.

## Setting up remarketing audiences

### Step 1: Install the Google Ads tag
Add the Google Ads remarketing tag to every page of your website. If you use Google Tag Manager, create a "Google Ads Remarketing" tag with your conversion ID and set it to fire on all pages.

### Step 2: Create audience segments

Build segments based on behavior:
- **All visitors** — broadest audience, 30-day window
- **Product/service page visitors** — people who looked at specific offerings
- **Cart abandoners** — e-commerce visitors who added to cart but did not check out
- **Blog readers** — lower intent, but useful for nurturing campaigns
- **High-value page visitors** — pricing page, contact page, demo request page
- **Past converters** — create this as an exclusion list (do not remarket to people who already bought)

### Step 3: Set membership duration

How long someone stays in your audience:
| Business Type | Recommended Duration |
|---|---|
| Restaurant/café | 7–14 days |
| Retail/e-commerce | 14–30 days |
| Services (cleaning, repairs) | 30–60 days |
| B2B/professional services | 60–90 days |
| High-value (property, education) | 90–180 days |

## Creative strategy for remarketing

Remarketing creative should be different from prospecting creative. These people already know you — move them further down the funnel:

**Stage 1 (days 1–7): Remind**
"Still looking for a photographer in KL?" with a portfolio image. Soft reminder without pressure.

**Stage 2 (days 7–21): Incentivize**
"Book this month — 10% off your wedding package." Add urgency or an offer.

**Stage 3 (days 21–60): Social proof**
"Trusted by 300+ couples in KL" with a testimonial. Build confidence.

**Stage 4 (days 60+): Last chance**
"Limited slots for December weddings" or "We just opened new dates." Creates FOMO.

Rotate creative every 2–3 weeks to prevent ad fatigue.

## Frequency capping

This is crucial. Without frequency caps, the same person can see your ad 30+ times in a day. That crosses from "helpful reminder" to "annoying stalker."

Set frequency caps at:
- **Display:** 3–5 impressions per person per day
- **YouTube:** 2–3 views per person per week
- **Campaign level:** 15–20 impressions per person per week

## Budget allocation

Remarketing is cheap. Because you are targeting a small, known audience, CPMs and CPCs are significantly lower than prospecting campaigns.

Typical allocation: 10–20% of your total Google Ads budget for remarketing. If you spend RM5,000/month total, RM500–RM1,000 on remarketing is usually sufficient.

The ROAS on remarketing is typically 2–5x higher than prospecting campaigns because you are converting warm traffic.

## E-commerce dynamic remarketing

For online stores, dynamic remarketing is exceptionally powerful. Setup requires:

1. **Product feed in Google Merchant Center** (same as Shopping Ads)
2. **Custom parameters on your website** — pass product IDs, page type (product, cart, purchase), and values for each page view
3. **Dynamic ad templates** — Google auto-generates ads using your product images and prices

A visitor who viewed three products on your store will see an ad featuring those exact three products next time they browse a news site. This specificity drives click-through rates 2–3x higher than generic banners.

## Measuring remarketing success

Track:
- **View-through conversions:** Someone saw your remarketing ad but converted later via another channel. Important for understanding full impact.
- **Assisted conversions:** Remarketing often assists the final conversion rather than being the last click. Check the assisted conversions report in Google Ads.
- **Frequency vs. conversion rate:** Monitor whether higher frequency leads to more or fewer conversions. Find the sweet spot.
- **Audience performance:** Compare conversion rates across your different audience segments (all visitors vs. cart abandoners vs. pricing page visitors).`,
  },
  {
    slug: 'google-ads-a-b-testing-framework',
    title: 'A/B Testing Google Ads: A Systematic Framework for Better Results',
    excerpt: 'Stop guessing which ads work. Follow this structured testing framework to continuously improve your Google Ads performance.',
    category: 'Optimization',
    readTime: '7 min read',
    date: 'January 18, 2026',
    dateISO: '2026-01-18',
    author: 'Hafiz Rahman',
    keywords: ['google ads a/b testing', 'ad testing framework', 'google ads experiments', 'responsive search ad testing'],
    faq: [
      { question: 'How long should I run an A/B test?', answer: 'Run tests until you have at least 100 clicks per variation and a statistically significant difference (90%+ confidence). For most Malaysian SMB campaigns, this takes 2-4 weeks. Do not end tests early based on gut feeling.' },
      { question: 'How many ad variations should I test at once?', answer: 'For RSAs, run 2-3 per ad group. For landing pages, test 2 at a time (A vs. B). Testing more than 2 landing pages simultaneously requires enough traffic to reach significance for each, which most Malaysian SMB budgets cannot support.' },
    ],
    content: `## Why systematic testing wins

Most advertisers create ads once and forget them. The best advertisers treat every campaign element as a hypothesis to test. Over 12 months of systematic testing, even small improvements compound into dramatically better performance.

A 10% CTR improvement plus a 15% conversion rate improvement plus a 5% CPC reduction equals a 33% lower cost per acquisition. Testing gets you there.

## What to test (in priority order)

### 1. Ad headlines
Headlines have the biggest impact on CTR. Test:
- Benefit-led vs. feature-led ("Save 30% on Accounting" vs. "Certified Accountants Since 2010")
- Question vs. statement ("Tired of Tax Headaches?" vs. "Tax Filing Made Simple")
- Price inclusion vs. no price ("From RM99/month" vs. "Affordable Plans")
- Location presence vs. absence ("Accountants in KL" vs. "Professional Accountants")

### 2. Landing pages
The highest-impact test after ad copy. Test:
- Long form vs. short form
- Video header vs. static image
- Form above fold vs. below fold
- WhatsApp CTA vs. form CTA (often dramatic differences in Malaysia)
- Testimonials prominent vs. minimal

### 3. Bidding strategies
Test using Google Ads Experiments:
- Manual CPC vs. Target CPA
- Different CPA targets (RM50 vs. RM80)
- Maximize Conversions vs. Target CPA

### 4. Audience targeting
- Different geographic radius sizes
- Device bid adjustments
- Ad schedule (business hours vs. always-on)
- Demographic adjustments (age, income)

### 5. Keywords
- Match type comparison (exact vs. phrase for same terms)
- Keyword expansion (adding new themes)
- Negative keyword impact

## The testing framework

### Step 1: Identify one variable
Test only one thing at a time. If you change the headline AND the landing page simultaneously, you will not know which change caused the result.

### Step 2: State your hypothesis
Write it down: "I believe that including the price in the headline will increase CTR by 15% because it pre-qualifies clicks and attracts budget-conscious searchers."

### Step 3: Set success criteria
Before starting, define what "winning" means:
- Minimum sample size (100+ clicks per variation)
- Statistical significance threshold (90%+ confidence)
- Primary metric (CTR, conversion rate, CPA, or ROAS)
- Test duration (minimum 2 weeks)

### Step 4: Run the test
For ad copy tests, use RSA headline pinning to control which elements appear. Pin the test headline to Position 1 in one RSA and your control headline to Position 1 in another.

For landing page tests, use Google Ads Experiments to split traffic 50/50 between two URLs.

For bidding strategy tests, use campaign experiments to run both strategies simultaneously.

### Step 5: Analyze results
After reaching your minimum sample:
1. Compare primary metric between test and control
2. Check statistical significance (use a free calculator online)
3. Look at secondary metrics — a headline with higher CTR but lower conversion rate might not be a winner
4. Document the result regardless of outcome

### Step 6: Implement and iterate
If the test wins, implement the change. If it loses, document what you learned. Then start the next test.

## Testing calendar

Maintain a rolling test schedule:
- **Week 1–2:** Headline test
- **Week 3–4:** Landing page test
- **Week 5–6:** Bidding strategy test
- **Week 7–8:** Audience/targeting test

This ensures continuous improvement without overwhelming your analysis capacity.

## Common testing mistakes

1. **Ending tests too early.** Three days of data is not enough. Wait for statistical significance.
2. **Testing too many things at once.** Multivariate testing requires enormous traffic volumes most Malaysian SMBs do not have.
3. **Ignoring seasonal effects.** A test running during Hari Raya will show different results than a normal week. Account for seasonality.
4. **Not documenting results.** Keep a spreadsheet of every test: hypothesis, dates, results, and learnings. This prevents repeating failed tests.
5. **Only testing ads.** Landing pages and bidding strategies often have bigger impact than ad copy alone.

## Sample test results log

| Test | Variable | Winner | Impact | Date |
|---|---|---|---|---|
| Headline A vs B | Price in headline | B (with price) | +22% CTR | Jan 2026 |
| Landing page | WhatsApp vs Form | WhatsApp | +35% conv rate | Feb 2026 |
| Bid strategy | Manual vs tCPA | tCPA | -18% CPA | Mar 2026 |

Over a quarter, three winning tests can transform campaign performance. This is how professional advertisers consistently improve — not through guesswork, but through structured experimentation.`,
  },
  {
    slug: 'google-ads-mistakes-malaysian-businesses',
    title: '10 Costly Google Ads Mistakes Malaysian Businesses Keep Making',
    excerpt: 'These common errors waste thousands of ringgit every month. Check if your campaigns are making any of them.',
    category: 'Getting Started',
    readTime: '8 min read',
    date: 'January 10, 2026',
    dateISO: '2026-01-10',
    author: 'Hafiz Rahman',
    keywords: ['google ads mistakes', 'common google ads errors', 'google ads waste money', 'ppc mistakes to avoid'],
    faq: [
      { question: 'What is the most common Google Ads mistake?', answer: 'Not adding negative keywords. This single oversight can waste 20-40% of your budget on irrelevant clicks. Review your Search Terms report weekly and add negatives aggressively.' },
      { question: 'How do I know if my Google Ads agency is doing a good job?', answer: 'Ask for monthly reports showing: conversion count, cost per conversion, Search Terms report (what queries triggered your ads), Quality Score trends, and what tests they are running. If they cannot provide these, reconsider the relationship.' },
    ],
    content: `## Mistake 1: No conversion tracking

This is the most fundamental error, yet we see it constantly. Without conversion tracking, you are optimizing for clicks, not business results. A keyword with a sky-high CTR might generate zero leads.

**The fix:** Set up conversion tracking before spending a single ringgit on ads. Track form submissions, phone calls, WhatsApp clicks, and purchases. Use Google Tag Manager for clean implementation.

## Mistake 2: Ignoring negative keywords

Your ad for "accountant KL" might show up when someone searches "accountant salary KL" or "free accounting software." Every irrelevant click costs money.

**The fix:** Review your Search Terms report weekly. Add irrelevant terms as negative keywords. Build a shared negative keyword list including: "job," "salary," "free," "DIY," "course," "template," "download" (unless your business offers these).

## Mistake 3: Sending traffic to the homepage

Your homepage is designed for many purposes — about you, services, blog, contact, careers. Someone who searched for a specific service gets lost in the noise.

**The fix:** Create dedicated landing pages for each major ad group. A search for "pest control Petaling Jaya" should land on a page specifically about pest control services in PJ, with a clear CTA to book a service.

## Mistake 4: Using only broad match keywords

Broad match gives Google enormous latitude in deciding what triggers your ad. "Dental clinic" might match "dental school admission" or "clinic management software."

**The fix:** Start with phrase match and exact match keywords. Only add broad match once you have:
- Conversion tracking working
- A solid negative keyword list
- Enough conversion data for Smart Bidding to optimize

## Mistake 5: Not testing ad copy

Running a single ad variation per ad group means you will never know if a better version exists. You are leaving performance on the table.

**The fix:** Run at least 2–3 RSAs per ad group. Test different headline angles (price, trust, urgency, benefit). Review ad performance monthly and replace weak performers.

## Mistake 6: Wrong location targeting settings

Google's default location setting is "Presence or interest" — which means someone in Singapore searching "restaurant KL" can see your ad even though they are not in KL and probably will not visit this week.

**The fix:** Change to "Presence: People in or regularly in your targeted locations." This ensures you only pay for clicks from people physically in your service area.

## Mistake 7: Not adjusting for mobile

Over 70% of Malaysian searches happen on mobile. If your landing page is slow, hard to navigate, or has tiny form fields on phone screens, you are wasting most of your clicks.

**The fix:** Test your landing page on a phone. Ensure:
- Page loads in under 3 seconds
- Buttons are tap-friendly (at least 44x44px)
- Forms have minimal fields
- Phone number is clickable (tel: link)
- WhatsApp button is prominent

## Mistake 8: Setting and forgetting

Google Ads is not a "launch and leave" platform. Search behavior changes, competitors enter and exit, and seasonal patterns shift. A campaign left unmanaged for weeks will waste money.

**The fix:** Dedicate at least 2–3 hours per week to:
- Reviewing Search Terms and adding negatives
- Checking conversion data
- Adjusting bids on underperforming keywords
- Testing new ad variations
- Reviewing Quality Scores

## Mistake 9: Bidding on too many keywords

Starting with 200 keywords across 5 ad groups spreads your budget thin. None get enough data to optimize, and your ads become generically relevant rather than specifically relevant.

**The fix:** Start with 15–30 of your highest-intent keywords in 2–3 tightly themed ad groups. Let these gather data and prove performance before expanding.

## Mistake 10: No call tracking

For service businesses in Malaysia, phone calls often outnumber form submissions 3-to-1. If you are not tracking calls, you are blind to your biggest conversion source.

**The fix:** Enable call assets in your ads (shows a clickable phone number). Set up call conversion tracking with a minimum duration threshold (60–90 seconds filters out wrong numbers). Track website call clicks as conversions too.

## The compounding cost

Each of these mistakes individually wastes 10–30% of your budget. Combined, it is common for poorly managed campaigns to waste 50–70% of total spend.

A RM5,000/month campaign making mistakes 1, 2, 3, and 6 might effectively only have RM1,500 working toward actual business results. Fix these issues and you triple your effective budget without spending a ringgit more.

Audit your campaigns against this list today. The fixes are straightforward, and the impact is immediate.`,
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export const categories = Array.from(new Set(articles.map((a) => a.category)));
