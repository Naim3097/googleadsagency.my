import { Link } from 'react-router-dom';
import SEO from '../components/SEO.tsx';
import ArticleCard from '../components/ArticleCard.tsx';
import FadeIn from '../components/FadeIn.tsx';
import { articles } from '../data/articles.tsx';

const FEATURED = articles.slice(0, 3);

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GoogleAdsAgency.my',
  url: 'https://googleadsagency.my',
  description: 'Google Ads strategies, PPC guides, and paid search resources for Malaysian businesses.',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'GoogleAdsAgency.my',
  url: 'https://googleadsagency.my',
};

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Free Google Ads guides, PPC strategies, and paid search resources tailored for Malaysian businesses. Learn to run profitable search campaigns."
        canonical="/"
        schema={[orgSchema, websiteSchema]}
      />

      {/* Hero — full-bleed dark with glass mock */}
      <section className="relative px-4 sm:px-6 py-20 md:py-32 overflow-hidden">
        {/* ambient halo */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-secondary/20 blur-[80px] animate-[breathe_6s_ease-in-out_infinite]" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-primary/15 blur-[60px] animate-[breathe_8s_ease-in-out_infinite_1s]" />
        </div>

        <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <FadeIn delay={80} direction="none">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                PPC Strategies &amp; Guides
              </span>
            </FadeIn>
            <FadeIn delay={160}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.05] tracking-tight" style={{ letterSpacing: '-0.025em' }}>
                Run Google Ads that actually{' '}
                <span className="text-gradient-brand">deliver results</span>
              </h1>
            </FadeIn>
            <FadeIn delay={280}>
              <p className="mt-5 text-white/55 leading-relaxed max-w-md">
                Practical PPC strategies, keyword research guides, and conversion optimization tips built for the Malaysian market.
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/blog"
                  className="px-6 py-2.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-colors duration-150 text-sm"
                >
                  Read the Guides
                </Link>
                <Link
                  to="/resources"
                  className="px-6 py-2.5 border border-white/15 text-white/80 font-semibold rounded-full hover:bg-white/6 hover:border-white/25 transition-all duration-150 text-sm"
                >
                  Free Resources
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={300} direction="right">
            {/* Glass shell wrapper */}
            <div className="rounded-[32px] p-px" style={{ background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.06), transparent 30%), radial-gradient(circle at 70% 70%, rgba(130,115,181,0.3), transparent 40%), linear-gradient(135deg, rgba(95,199,205,0.15), rgba(130,115,181,0.08))' }}>
              <div className="bg-[#1a1a1b]/90 backdrop-blur-xl rounded-[31px] overflow-hidden">
                {/* Browser chrome */}
                <div className="bg-white/4 border-b border-white/8 px-4 py-2.5 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  </div>
                  <div className="flex-1 bg-white/6 rounded-md px-3 py-1 text-xs text-white/30 border border-white/8">
                    google.com
                  </div>
                </div>
                {/* Search bar */}
                <div className="px-5 pt-5 pb-3">
                  <div className="bg-white/5 rounded-full px-4 py-2.5 flex items-center gap-2 border border-white/10">
                    <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <span className="text-sm text-white/50">best running shoes malaysia</span>
                  </div>
                </div>
                {/* Ad result */}
                <div className="px-5 pb-5 space-y-3">
                  <div className="border-l-2 border-primary/60 pl-3">
                    <span className="text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 px-1.5 py-0.5 rounded">Sponsored</span>
                    <p className="text-primary font-bold text-sm mt-1 leading-snug">Premium Running Shoes — Free Delivery Malaysia</p>
                    <p className="text-[11px] text-green-400/80 mt-0.5">www.example.my/running-shoes</p>
                    <p className="text-xs text-white/40 mt-1 leading-relaxed">Shop the latest running shoes. Free delivery across Malaysia. 30-day returns.</p>
                  </div>
                  <div className="pl-3 pt-2 border-t border-white/6">
                    <p className="text-sm font-medium text-white/70 leading-snug">Running Shoes Malaysia — Top 10 Picks for 2026</p>
                    <p className="text-[11px] text-green-400/70 mt-0.5">www.runningmy.com/best-shoes</p>
                    <p className="text-xs text-white/40 mt-1">Compare the best running shoes available in Malaysia...</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Latest Guides */}
      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-2xl font-semibold text-white tracking-tight">Latest Guides</h2>
                <p className="text-white/45 mt-1 text-sm">Practical strategies you can apply today</p>
              </div>
              <Link to="/blog" className="hidden md:block text-sm font-medium text-primary hover:underline transition-opacity duration-150">
                All articles →
              </Link>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-4">
            {FEATURED.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 100}>
                <ArticleCard article={article} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20">
        <FadeIn>
          <h2 className="text-2xl font-semibold text-white tracking-tight">What We Cover</h2>
          <p className="text-white/45 mt-1 text-sm">From first campaign to advanced scaling</p>
        </FadeIn>
        <div className="mt-8 grid sm:grid-cols-2 gap-3">
          {[
            { num: '01', title: 'Campaign Setup', desc: 'Account structure, settings, and launch checklists.' },
            { num: '02', title: 'Keyword Research', desc: 'Find profitable keywords in the Malaysian market.' },
            { num: '03', title: 'Ad Copywriting', desc: 'Write headlines and descriptions that win clicks.' },
            { num: '04', title: 'Bidding & Budget', desc: 'Choose the right bidding strategy for your goals.' },
            { num: '05', title: 'Landing Pages', desc: 'Convert clicks into leads and sales.' },
            { num: '06', title: 'Analytics & Tracking', desc: 'Measure what matters and optimize with data.' },
          ].map((topic, i) => (
            <FadeIn key={topic.num} delay={i * 70}>
              <div className="glass-card rounded-xl flex gap-4 items-start p-4">
                <span className="text-primary font-bold text-base shrink-0 tabular-nums">{topic.num}</span>
                <div>
                  <h3 className="font-semibold text-white text-sm">{topic.title}</h3>
                  <p className="text-sm text-white/50 mt-0.5">{topic.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 md:pb-24">
        <FadeIn>
          <div className="relative rounded-[32px] p-px overflow-hidden" style={{ background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1), transparent 30%), radial-gradient(circle at 68% 58%, rgba(130,115,181,0.25), transparent 28%), linear-gradient(135deg, rgba(95,199,205,0.18), rgba(130,115,181,0.08))' }}>
            <div className="relative bg-[#1a1a1b]/80 backdrop-blur-xl rounded-[31px] p-10 md:p-14 text-center overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/20 blur-[40px] rounded-full" aria-hidden="true" />
              <p className="relative text-xs font-semibold tracking-widest uppercase text-primary/70 mb-3">Get Started Free</p>
              <h2 className="relative text-2xl md:text-3xl font-medium text-white tracking-tight" style={{ letterSpacing: '-0.02em' }}>
                Start running profitable Google Ads
              </h2>
              <p className="relative mt-3 text-white/50 text-sm max-w-md mx-auto leading-relaxed">
                Everything you need to know, from the basics to advanced optimization. All free.
              </p>
              <div className="relative mt-7 flex justify-center gap-3 flex-wrap">
                <Link to="/blog" className="px-6 py-2.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-colors duration-150 text-sm">
                  Browse Guides
                </Link>
                <Link to="/contact" className="px-6 py-2.5 border border-white/15 text-white/70 font-semibold rounded-full hover:bg-white/6 hover:border-white/25 transition-all duration-150 text-sm">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
