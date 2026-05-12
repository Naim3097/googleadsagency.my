import { Link } from 'react-router-dom';
import SEO from '../components/SEO.tsx';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist."
        noindex
      />

      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h1 className="text-6xl font-medium text-gradient-brand" style={{ letterSpacing: '-0.03em' }}>404</h1>
        <p className="text-white/50 mt-3">
          This page does not exist. It may have been moved or deleted.
        </p>
        <div className="mt-7 flex justify-center gap-3">
          <Link
            to="/"
            className="px-6 py-2.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-colors duration-150 text-sm"
          >
            Go Home
          </Link>
          <Link
            to="/blog"
            className="px-6 py-2.5 border border-white/15 text-white/70 font-semibold rounded-full hover:bg-white/6 hover:border-white/25 transition-all duration-150 text-sm"
          >
            Read the Blog
          </Link>
        </div>
      </section>
    </>
  );
}
