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
        <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-gray-600 truncate">{article.title}</span>
        </nav>

        <header>
          <span className="inline-block text-xs font-semibold text-primary bg-primary/8 px-2 py-0.5 rounded">
            {article.category}
          </span>
          <h1 className="mt-3 text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
            {article.title}
          </h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
            <span className="font-medium text-gray-700">{article.author}</span>
            <span>&middot;</span>
            <time dateTime={article.dateISO}>{article.date}</time>
            <span>&middot;</span>
            <span>{article.readTime}</span>
          </div>
        </header>

        <div
          className="mt-10 prose prose-gray max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {article.faq.length > 0 && (
          <section className="mt-12 border-t border-gray-100 pt-10">
            <h2 className="text-xl font-extrabold text-gray-900 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {article.faq.map((q, i) => (
                <details key={i} className="group border border-gray-100 rounded-lg">
                  <summary className="cursor-pointer px-4 py-3 font-medium text-sm text-gray-900 flex items-center justify-between">
                    {q.question}
                    <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-4 pb-3 text-sm text-gray-600 leading-relaxed">{q.answer}</div>
                </details>
              ))}
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="mt-12 border-t border-gray-100 pt-10">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  to={`/blog/${a.slug}`}
                  className="p-4 rounded-lg border border-gray-100 hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  <span className="text-xs font-semibold text-primary">{a.category}</span>
                  <h3 className="font-semibold text-gray-900 mt-1 text-sm leading-snug">{a.title}</h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
