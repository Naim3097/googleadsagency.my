import SEO from '../components/SEO.tsx';
import ContactForm from '../components/ContactForm.tsx';
import FadeIn from '../components/FadeIn.tsx';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with GoogleAdsAgency.my. Questions about running Google Ads for your Malaysian business?"
        canonical="/contact"
      />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <FadeIn>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Contact</h1>
          <p className="text-gray-500 mt-2 text-sm">
            Have a question about Google Ads? Want to suggest an article topic? Send us a message.
          </p>
        </FadeIn>

        <div className="mt-10 grid md:grid-cols-5 gap-8">
          <FadeIn delay={100} className="md:col-span-3">
            <ContactForm />
          </FadeIn>

          <div className="md:col-span-2 space-y-4">
            {[
              { title: 'Email', content: 'hello@googleadsagency.my', href: 'mailto:hello@googleadsagency.my' },
              { title: 'Response Time', content: 'Usually within 1–2 business days' },
              { title: 'Based in', content: 'Kuala Lumpur, Malaysia' },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={150 + i * 80}>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wider">{item.title}</h3>
                  {'href' in item ? (
                    <a href={item.href} className="text-primary text-sm hover:underline mt-1 block">{item.content}</a>
                  ) : (
                    <p className="text-sm text-gray-500 mt-1">{item.content}</p>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
