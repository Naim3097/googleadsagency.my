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

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <FadeIn>
          <h1 className="text-3xl md:text-4xl font-medium text-white tracking-tight" style={{ letterSpacing: '-0.02em' }}>About</h1>
          <p className="mt-3 text-white/50 text-sm max-w-xl leading-relaxed">
            GoogleAdsAgency.my is a resource hub built for Malaysian businesses who want to run smarter, more profitable Google Ads campaigns — without the guesswork. Every guide, checklist, and strategy on this site comes from real campaign experience in the local market.
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-white">Hafiz Rahman</h2>
            <p className="text-primary text-sm font-medium mt-0.5">Google Ads Strategist</p>
            <div className="mt-4 space-y-3 text-white/60 text-sm leading-relaxed">
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
        </FadeIn>

        <div className="mt-10 grid grid-cols-3 gap-4">
          {[
            { value: '6+', label: 'Years in Google Ads' },
            { value: 'RM3M+', label: 'Ad spend managed' },
            { value: '150+', label: 'Campaigns launched' },
          ].map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 90}>
              <div className="glass-card text-center p-4 rounded-xl">
                <div className="text-xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-white/45 mt-1">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={100}>
          <div className="mt-10 glass-card rounded-xl p-5 md:p-6">
            <h2 className="text-sm font-semibold text-white/70 uppercase tracking-wider">Approach</h2>
            <ul className="mt-3 space-y-2.5 text-sm text-white/55">
              <li className="flex gap-3">
                <span className="text-primary font-bold">01</span>
                <span><strong className="text-white/80">Data-driven.</strong> Every recommendation is backed by real campaign performance from Malaysian accounts.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">02</span>
                <span><strong className="text-white/80">Practical.</strong> Step-by-step processes you can implement today, not marketing theory.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">03</span>
                <span><strong className="text-white/80">Local.</strong> Malaysian CPC benchmarks, bilingual keyword strategies, and audience behaviors specific to our market.</span>
              </li>
            </ul>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
