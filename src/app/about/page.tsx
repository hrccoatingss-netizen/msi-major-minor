import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "About MSI Major Minor Services | Latinx-Owned Painting Company in Little Rock, AR",
  description:
    "Learn about MSI Major Minor Services, a Latinx-owned painting company in Little Rock, AR. Owner Anthony Moss brings 12+ years of experience to every project. Licensed & insured. Est. 2018.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-24 relative overflow-hidden">
        <div className="absolute inset-0 geo-pattern" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <span className="text-white/90 text-sm font-semibold">Our Story</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              12+ Years of Quality, Affordable Painting
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              MSI Major Minor Services is a Latinx-owned painting and property services company proudly serving Little Rock and Central Arkansas since 2018.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">Our Journey</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: "var(--font-heading)" }}>Our Story</h2>
              <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
                <p>
                  Anthony Moss started painting over 12 years ago and has never stopped perfecting his craft. What began as a young man learning the trade became a lifelong passion for transforming spaces and helping homeowners take pride in their properties.
                </p>
                <p>
                  In 2018, Anthony officially founded MSI Major Minor Services with a simple mission: provide professional-quality painting and property services at prices that real families can afford. No inflated quotes, no hidden fees, just honest work at fair prices.
                </p>
                <p>
                  The name says it all. Whether it is a major project like a full exterior repaint or a minor touch-up, MSI handles it with the same level of care and attention to detail. From interior rooms at $85 to full 1-story exteriors at $1,200, the pricing speaks for itself.
                </p>
                <p>
                  As a proudly Latinx-owned business, MSI is rooted in the values of hard work, family, and community. Anthony and his team serve homeowners, property managers, realtors, and businesses across Little Rock, North Little Rock, Maumelle, and the greater Central Arkansas area.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Owner Card */}
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl" />
                <div className="bg-white rounded-3xl p-10 text-center shadow-xl relative border border-gray-100">
                  <div className="w-28 h-28 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <span className="text-4xl font-black text-white" style={{ fontFamily: "var(--font-heading)" }}>AM</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Anthony Moss</h3>
                  <p className="text-accent font-bold mb-6">Owner & Lead Contractor</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-surface rounded-2xl p-5">
                      <p className="text-3xl font-black text-primary">12+</p>
                      <p className="text-gray-500 font-medium mt-1">Years Experience</p>
                    </div>
                    <div className="bg-surface rounded-2xl p-5">
                      <p className="text-3xl font-black text-primary">2018</p>
                      <p className="text-gray-500 font-medium mt-1">Established</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Values */}
              <div className="bg-surface rounded-3xl p-10 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-heading)" }}>Our Values</h3>
                <div className="space-y-5">
                  {[
                    { title: "Affordable Pricing", desc: "Professional quality does not have to break the bank." },
                    { title: "Honest Work", desc: "No surprise charges. The price we quote is the price you pay." },
                    { title: "Community First", desc: "We support our military and give back to Central Arkansas." },
                    { title: "Quality Craftsmanship", desc: "12+ years of experience in every brushstroke." },
                  ].map((v) => (
                    <div key={v.title} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{v.title}</p>
                        <p className="text-sm text-gray-600">{v.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-surface py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">Complete Solutions</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              Full-Service Property Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">One company for all your property needs. Here is what sets MSI apart.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Painting & Staining", items: ["Interior painting ($85/room)", "Exterior painting ($1,200/home)", "Cabinet refinishing", "Ceiling painting", "Deck staining"] },
              { title: "Repairs & Restoration", items: ["Drywall repair", "Texture matching", "Surface prep", "Trim repair", "Water damage repair"] },
              { title: "Property Services", items: ["Lawn care", "Office cleaning", "Property preservation", "Bank-owned property care", "General maintenance"] },
            ].map((cat) => (
              <div key={cat.title} className="card-premium bg-white rounded-2xl p-10 border border-gray-100 hover-lift">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-600">
                      <div className="w-6 h-6 bg-accent/10 rounded-md flex items-center justify-center shrink-0">
                        <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-accent to-accent-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 geo-pattern opacity-20" />
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5" style={{ fontFamily: "var(--font-heading)" }}>Ready to Get Started?</h2>
          <p className="text-white/90 text-xl mb-10">Get a free estimate from Little Rock&apos;s most trusted painting team.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-white hover:bg-gray-50 text-accent font-bold px-10 py-5 rounded-2xl transition-all text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Request Free Estimate
            </Link>
            <a href="tel:+15019603578" className="glass hover:bg-white/15 text-white font-bold px-10 py-5 rounded-2xl transition-all text-lg flex items-center justify-center gap-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call (501) 960-3578
            </a>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
