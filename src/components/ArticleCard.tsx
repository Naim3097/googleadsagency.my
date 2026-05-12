import { Link } from 'react-router-dom';
import type { Article } from '../data/articles.tsx';

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="glass-card rounded-xl p-5 group">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
          {article.category}
        </span>
        <span className="text-white/20">|</span>
        <span className="text-[10px] text-white/40 uppercase tracking-wider">{article.readTime}</span>
      </div>
      <h3 className="font-bold text-white leading-snug group-hover:text-primary transition-colors duration-150">
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <p className="mt-1.5 text-sm text-white/55 leading-relaxed line-clamp-3">{article.excerpt}</p>
      <div className="mt-3 flex items-center gap-3 text-xs text-white/40">
        <span className="font-medium text-white/60">{article.author}</span>
        <span>&middot;</span>
        <span>{article.date}</span>
        <span className="ml-auto text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-150">Read →</span>
      </div>
    </article>
  );
}
