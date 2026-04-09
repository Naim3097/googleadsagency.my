import { Link } from 'react-router-dom';
import type { Article } from '../data/articles.tsx';

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group border border-gray-100 rounded-xl p-5 hover:border-primary/20 hover:shadow-sm transition-all duration-200">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
          {article.category}
        </span>
        <span className="text-gray-300">|</span>
        <span className="text-[10px] text-gray-400 uppercase tracking-wider">{article.readTime}</span>
      </div>
      <h3 className="font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors">
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <p className="mt-1.5 text-sm text-gray-500 leading-relaxed line-clamp-3">{article.excerpt}</p>
      <div className="mt-3 flex items-center gap-3 text-xs text-gray-400">
        <span className="font-medium text-gray-600">{article.author}</span>
        <span>&middot;</span>
        <span>{article.date}</span>
        <span className="ml-auto text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">Read →</span>
      </div>
    </article>
  );
}
