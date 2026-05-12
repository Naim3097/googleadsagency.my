import { useParams, Link } from 'react-router-dom';
import { useMemo } from 'react';
import { marked } from 'marked';
import SEO from '../components/SEO.tsx';
import { articles } from '../data/articles.tsx';
import NotFound from './NotFound.tsx';

const renderer = new marked.Renderer();
renderer.link = ({ href, text }) => {
  const isExternal = href.startsWith('http');
  if (isExternal) {
    return `<a href="${href}" target="_blank" rel="nofollow noopener noreferrer">${text}</a>`;
  }
  return `<a href="${href}">${text}</a>`;
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  const html = useMemo(() => {
    if (!article) return '';
    return marked.parse(article.content, { async: false, renderer }) as string;
  }, [article]);

  if (!article) return <NotFound />;

  const related = articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 2);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    url: `https://googleadsagency.my/blog/${article.slug}`,
    datePublished: article.dateISO,
    dateModified: article.dateISO,
    author: { '@type': 'Person', name: article.author },
    publisher: {
      '@type': 'Organization',
      name: 'GoogleAdsAgency.my',
      url: 'https://googleadsagency.my',
    },
    articleSection: article.category,
    keywords: article.keywords.join(', '),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://googleadsagency.my' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://googleadsagency.my/blog' },
      { '@type': 'ListItem', position: 3, name: article.title, item: `https://googleadsagency.my/blog/${article.slug}` },
    ],
  };

  const faqSchema = article.faq.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: article.faq.map((q) => ({
          '@type': 'Question',
          name: q.question,
          acceptedAnswer: { '@type': 'Answer', text: q.answer },
        })),
      }
    : null;

  const schemas = [articleSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])];

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        canonical={`/blog/${article.slug}`}
        ogType="article"
        article={{
          publishedTime: article.dateISO,
          author: article.author,
          section: article.category,
          tags: article.keywords,
        }}
        schema={schemas}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <nav className="flex items-center gap-1.5 text-sm text-white/35 mb-8">
          <Link to="/" className="hover:text-primary transition-colors duration-150">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-primary transition-colors duration-150">Blog</Link>
          <span>/</span>
          <span className="text-white/55 truncate">{article.title}</span>
        </nav>

        <header>
          <span className="inline-block text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
            {article.category}
          </span>
          <h1 className="mt-3 text-2xl md:text-3xl font-medium text-white leading-tight tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            {article.title}
          </h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-white/40">
            <span className="font-medium text-white/60">{article.author}</span>
            <span>&middot;</span>
            <time dateTime={article.dateISO}>{article.date}</time>
            <span>&middot;</span>
            <span>{article.readTime}</span>
          </div>
        </header>

        <div
          className="mt-10 prose prose-invert prose-dark max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {article.faq.length > 0 && (
          <section className="mt-12 border-t border-white/8 pt-10">
            <h2 className="text-xl font-semibold text-white mb-5 tracking-tight">Frequently Asked Questions</h2>
            <div className="space-y-2">
              {article.faq.map((q, i) => (
                <details key={i} className="glass-card rounded-xl group">
                  <summary className="cursor-pointer px-4 py-3 font-medium text-sm text-white/80 flex items-center justify-between">
                    {q.question}
                    <span className="text-white/30 group-open:rotate-45 transition-transform duration-150">+</span>
                  </summary>
                  <div className="px-4 pb-3 text-sm text-white/55 leading-relaxed">{q.answer}</div>
                </details>
              ))}
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="mt-12 border-t border-white/8 pt-10">
            <h2 className="text-lg font-semibold text-white mb-4 tracking-tight">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  to={`/blog/${a.slug}`}
                  className="glass-card p-4 rounded-xl group"
                >
                  <span className="text-xs font-semibold text-primary">{a.category}</span>
                  <h3 className="font-semibold text-white/80 group-hover:text-white mt-1 text-sm leading-snug transition-colors duration-150">{a.title}</h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
