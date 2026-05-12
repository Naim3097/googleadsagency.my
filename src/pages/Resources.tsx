import SEO from '../components/SEO.tsx';
import FadeIn from '../components/FadeIn.tsx';

const RESOURCES = [
  {
    title: 'Google Ads Campaign Setup Checklist',
    desc: 'A step-by-step checklist covering account settings, campaign structure, keywords, ads, and conversion tracking.',
    format: 'PDF Checklist',
  },
  {
    title: 'Malaysian PPC Benchmarks 2026',
    desc: 'Average CPC, CTR, conversion rate, and CPA benchmarks across key Malaysian industries.',
    format: 'PDF Report',
  },
  {
    title: 'Negative Keywords Master List',
    desc: 'Pre-built negative keyword lists for 10 common Malaysian business verticals to prevent wasted spend.',
    format: 'Spreadsheet',
  },
  {
    title: 'Quality Score Audit Template',
    desc: 'A structured worksheet to audit and improve Quality Score across all your keywords.',
    format: 'Google Sheets',
  },
  {
    title: 'Landing Page Conversion Checklist',
    desc: 'Ensure your Google Ads landing pages have every element needed to convert Malaysian visitors.',
    format: 'PDF Checklist',
  },
  {
    title: 'Google Ads Budget Calculator',
    desc: 'Input your industry, target CPA, and conversion rate to calculate your recommended monthly budget.',
    format: 'Spreadsheet',
  },
];

export default function Resources() {
  return (
    <>
      <SEO
        title="Free Resources"
        description="Download free Google Ads checklists, benchmark reports, keyword lists, and templates for Malaysian businesses."
        canonical="/resources"
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <FadeIn>
          <h1 className="text-3xl md:text-4xl font-medium text-white tracking-tight" style={{ letterSpacing: '-0.02em' }}>Free Resources</h1>
          <p className="text-white/45 mt-2 text-sm max-w-lg">
            Checklists, templates, and benchmark reports to improve your Google Ads performance. No signup required.
          </p>
        </FadeIn>

        <div className="mt-10 space-y-3">
          {RESOURCES.map((resource, i) => (
            <FadeIn key={resource.title} delay={i * 80}>
              <div className="glass-card flex items-start gap-4 p-5 rounded-xl">
                <span className="mt-0.5 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/20 border border-primary/20 text-primary text-xs font-bold shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold text-white">{resource.title}</h2>
                  <p className="text-sm text-white/50 mt-1 leading-relaxed">{resource.desc}</p>
                </div>
                <div className="shrink-0">
                  <span className="text-xs font-medium text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded-full">
                    {resource.format}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={100}>
          <div className="mt-14 glass-card rounded-2xl p-6 md:p-8 text-center">
            <h2 className="text-lg font-semibold text-white">More resources coming soon</h2>
            <p className="text-white/45 mt-1 text-sm">
              We add new guides and templates monthly. Check back regularly.
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
