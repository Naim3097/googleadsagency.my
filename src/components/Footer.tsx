import { Link } from 'react-router-dom';

const FOOTER_SECTIONS = [
  {
    title: 'Learn',
    links: [
      { href: '/blog', label: 'Blog' },
      { href: '/resources', label: 'Resources' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Tools We Recommend',
    links: [
      { href: 'https://ads.google.com', label: 'Google Ads', external: true },
      { href: 'https://analytics.google.com', label: 'Google Analytics', external: true },
      { href: 'https://www.semrush.com', label: 'Semrush', external: true },
      { href: 'https://nexova.my', label: 'Nexova', external: true, nofollow: true },
      { href: 'https://unbounce.com', label: 'Unbounce', external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <span className="text-lg font-extrabold text-white">
              Google<span className="text-primary-light">Ads</span>Agency
            </span>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Data-driven Google Ads strategies and PPC guides for Malaysian businesses.
            </p>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white text-sm mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel={`noopener noreferrer${'nofollow' in link && link.nofollow ? ' nofollow' : ''}`}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-blue-900 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} GoogleAdsAgency.my. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Not affiliated with Google LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
