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

      {/* Hero — clean white split layout (different from facebookads.my gradient hero) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn delay={80} direction="none">
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-secondary bg-secondary/10 px-3 py-1 rounded-md mb-5">
                PPC Strategies & Guides
              </span>
            </FadeIn>
            <FadeIn delay={160}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Run Google Ads that actually <span className="text-primary">deliver results</span>
              </h1>
            </FadeIn>
            <FadeIn delay={280}>
              <p className="mt-4 text-gray-500 leading-relaxed max-w-md">
                Practical PPC strategies, keyword research guides, and conversion optimization tips built for the Malaysian market.
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/blog"
                  className="px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm"
                >
                  Read the Guides
                </Link>
                <Link
                  to="/resources"
                  className="px-5 py-2.5 border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  Free Resources
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={300} direction="right">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Browser chrome */}
              <div className="bg-gray-50 border-b border-gray-100 px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                </div>
                <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 border border-gray-200">
                  google.com
                </div>
              </div>
              {/* Search bar */}
              <div className="px-5 pt-5 pb-3">
                <div className="bg-gray-50 rounded-full px-4 py-2.5 flex items-center gap-2 border border-gray-200">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  <span className="text-sm text-gray-600">best running shoes malaysia</span>
                </div>
              </div>
              {/* Ad result + organic */}
              <div className="px-5 pb-5 space-y-3">
                <div className="border-l-2 border-primary pl-3">
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">Sponsored</span>
                  <p className="text-primary font-bold text-sm mt-1 leading-snug">Premium Running Shoes — Free Delivery Malaysia</p>
                  <p className="text-[11px] text-green-700 mt-0.5">www.example.my/running-shoes</p>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">Shop the latest running shoes. Free delivery across Malaysia. 30-day returns.</p>
                </div>
                <div className="pl-3 pt-2 border-t border-gray-50">
                  <p className="text-sm font-medium text-gray-900 leading-snug">Running Shoes Malaysia — Top 10 Picks for 2026</p>
                  <p className="text-[11px] text-green-700 mt-0.5">www.runningmy.com/best-shoes</p>
                  <p className="text-xs text-gray-500 mt-1">Compare the best running shoes available in Malaysia...</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Latest Guides */}
      <section className="bg-gray-50 py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900">Latest Guides</h2>
                <p className="text-gray-500 mt-1 text-sm">Practical strategies you can apply today</p>
              </div>
              <Link to="/blog" className="hidden md:block text-sm font-medium text-primary hover:underline">
                All articles →
              </Link>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-5">
            {FEATURED.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 100}>
                <ArticleCard article={article} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Topics — horizontal list style (different from facebookads.my grid cards) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20">
        <FadeIn>
          <h2 className="text-2xl font-extrabold text-gray-900">What We Cover</h2>
          <p className="text-gray-500 mt-1 text-sm">From first campaign to advanced scaling</p>
        </FadeIn>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {[
            { num: '01', title: 'Campaign Setup', desc: 'Account structure, settings, and launch checklists.' },
            { num: '02', title: 'Keyword Research', desc: 'Find profitable keywords in the Malaysian market.' },
            { num: '03', title: 'Ad Copywriting', desc: 'Write headlines and descriptions that win clicks.' },
            { num: '04', title: 'Bidding & Budget', desc: 'Choose the right bidding strategy for your goals.' },
            { num: '05', title: 'Landing Pages', desc: 'Convert clicks into leads and sales.' },
            { num: '06', title: 'Analytics & Tracking', desc: 'Measure what matters and optimize with data.' },
          ].map((topic, i) => (
            <FadeIn key={topic.num} delay={i * 70}>
              <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <span className="text-primary font-extrabold text-lg shrink-0">{topic.num}</span>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">{topic.title}</h3>
                  <p className="text-sm text-gray-500 mt-0.5">{topic.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA — minimal box style */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 md:pb-20">
        <FadeIn>
          <div className="border border-primary/20 bg-primary/3 rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">Start running profitable Google Ads</h2>
            <p className="mt-2 text-gray-500 text-sm max-w-md mx-auto">
              Everything you need to know, from the basics to advanced optimization. All free.
            </p>
            <div className="mt-5 flex justify-center gap-3">
              <Link to="/blog" className="px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm">
                Browse Guides
              </Link>
              <Link to="/contact" className="px-5 py-2.5 border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-sm">
                Get in Touch
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
