import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.tsx';
import ArticleCard from '../components/ArticleCard.tsx';
import FadeIn from '../components/FadeIn.tsx';
import { articles, categories } from '../data/articles.tsx';

const ALL_CATS = ['All', ...categories];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Blog — GoogleAdsAgency.my',
  description: 'Free Google Ads and PPC advertising guides for Malaysian businesses.',
  url: 'https://googleadsagency.my/blog',
};

export default function Blog() {
  const [cat, setCat] = useState('All');
  const filtered = cat === 'All' ? articles : articles.filter((a) => a.category === cat);

  return (
    <>
      <SEO
        title="Blog"
        description="Free Google Ads tutorials, PPC strategies, and paid search guides written for Malaysian businesses."
        canonical="/blog"
        schema={schema}
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <FadeIn>
          <h1 className="text-3xl md:text-4xl font-medium text-white tracking-tight" style={{ letterSpacing: '-0.02em' }}>Blog</h1>
          <p className="text-white/45 mt-2 text-sm max-w-lg">
            Practical Google Ads guides and PPC strategies for Malaysian businesses.
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="mt-7 flex flex-wrap gap-2">
            {ALL_CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${
                  cat === c
                    ? 'bg-primary/15 text-primary border border-primary/30'
                    : 'bg-white/5 text-white/50 border border-white/8 hover:bg-white/10 hover:text-white/80'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Featured read */}
        {cat === 'All' && filtered.length > 0 && (
          <FadeIn>
            <Link to={`/blog/${filtered[0].slug}`} className="block mt-8 glass-card rounded-2xl p-6 md:p-8 group">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary/15 border border-secondary/20 px-2 py-0.5 rounded-full">Featured Read</span>
                <span className="text-[10px] text-white/35 uppercase tracking-wider">{filtered[0].readTime}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white group-hover:text-primary transition-colors duration-150 leading-snug tracking-tight">
                {filtered[0].title}
              </h2>
              <p className="mt-2 text-white/50 leading-relaxed max-w-2xl">{filtered[0].excerpt}</p>
              <div className="mt-4 flex items-center gap-3 text-xs text-white/35">
                <span className="font-medium text-white/55">{filtered[0].author}</span>
                <span>&middot;</span>
                <span>{filtered[0].date}</span>
                <span className="ml-auto text-primary font-semibold group-hover:underline">Read the full guide →</span>
              </div>
            </Link>
          </FadeIn>
        )}

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {(cat === 'All' ? filtered.slice(1) : filtered).map((article, i) => (
            <FadeIn key={article.slug} delay={i * 70}>
              <ArticleCard article={article} />
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
