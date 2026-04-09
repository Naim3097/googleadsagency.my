import SEO from '../components/SEO.tsx';
import FadeIn from '../components/FadeIn.tsx';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Hafiz Rahman',
  jobTitle: 'Google Ads Strategist',
  url: 'https://googleadsagency.my/about',
  description: 'Google Ads specialist helping Malaysian businesses run profitable search campaigns.',
};

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Meet Hafiz Rahman — a Google Ads strategist helping Malaysian businesses grow through profitable search advertising."
        canonical="/about"
        schema={personSchema}
      />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <FadeIn>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">About</h1>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="mt-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center text-white text-xl font-bold shrink-0">
              HR
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Hafiz Rahman</h2>
              <p className="text-primary text-sm font-medium">Google Ads Strategist</p>
              <div className="mt-4 space-y-3 text-gray-600 text-sm leading-relaxed">
                <p>
                  I have spent the last 6 years managing Google Ads campaigns for Malaysian
                  businesses — from single-location clinics in Penang to multi-branch retail
                  chains across the Klang Valley. In that time, I have managed over RM3 million
                  in ad spend and helped dozens of businesses build reliable customer acquisition
                  through paid search.
                </p>
                <p>
                  I started GoogleAdsAgency.my because the quality of Google Ads education
                  available specifically for the Malaysian market is poor. Most resources are
                  written for US or UK audiences, and the strategies do not always translate
                  to our market. CPC ranges, consumer behavior, bilingual search patterns,
                  and local competitive dynamics are all different here.
                </p>
                <p>
                  Everything on this site is based on real campaign data from Malaysian
                  accounts. No hypothetical examples. No generic global advice.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="mt-10 grid grid-cols-3 gap-4">
          {[
            { value: '6+', label: 'Years in Google Ads' },
            { value: 'RM3M+', label: 'Ad spend managed' },
            { value: '150+', label: 'Campaigns launched' },
          ].map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 90}>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-xl font-extrabold text-primary">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={100}>
          <div className="mt-10 border border-gray-200 rounded-xl p-5 md:p-6">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Approach</h2>
            <ul className="mt-3 space-y-2.5 text-sm text-gray-600">
              <li className="flex gap-3">
                <span className="text-primary font-bold">01</span>
                <span><strong>Data-driven.</strong> Every recommendation is backed by real campaign performance from Malaysian accounts.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">02</span>
                <span><strong>Practical.</strong> Step-by-step processes you can implement today, not marketing theory.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">03</span>
                <span><strong>Local.</strong> Malaysian CPC benchmarks, bilingual keyword strategies, and audience behaviors specific to our market.</span>
              </li>
            </ul>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
