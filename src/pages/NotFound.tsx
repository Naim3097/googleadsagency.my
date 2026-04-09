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
        <h1 className="text-5xl font-extrabold text-gray-900">404</h1>
        <p className="text-gray-500 mt-3">
          This page does not exist. It may have been moved or deleted.
        </p>
        <div className="mt-7 flex justify-center gap-3">
          <Link
            to="/"
            className="px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition text-sm"
          >
            Go Home
          </Link>
          <Link
            to="/blog"
            className="px-5 py-2.5 border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition text-sm"
          >
            Read the Blog
          </Link>
        </div>
      </section>
    </>
  );
}
