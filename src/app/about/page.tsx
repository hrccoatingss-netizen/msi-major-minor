import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "About MSI Major Minor Services - Latinx-Owned Painting Company in Little Rock, AR",
  description:
    "Learn about MSI Major Minor Services, a Latinx-owned painting company in Little Rock, AR. Owner Anthony brings 26 years of experience to every project. Established 2018.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">About Us</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
              26 Years of Quality, Affordable Painting
            </h1>
            <p className="text-xl text-white/85 leading-relaxed">
              MSI Major Minor Services is a Latinx-owned painting and property services company proudly serving Little Rock and Central Arkansas since 2018.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Anthony started painting over 26 years ago and has never stopped perfecting his craft. What began as a young man learning the trade became a lifelong passion for transforming spaces and helping homeowners take pride in their properties.
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

            <div className="space-y-6">
              {/* Owner Card */}
              <div className="bg-warm rounded-2xl p-8 text-center">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-3xl font-black text-white">A</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Anthony</h3>
                <p className="text-accent font-semibold mb-6">Owner & Lead Contractor</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-2xl font-black text-primary">26</p>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-2xl font-black text-primary">2018</p>
                    <p className="text-gray-600">Established</p>
                  </div>
                </div>
              </div>

              {/* Values */}
              <div className="bg-gray-light rounded-2xl p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Our Values</h3>
                <div className="space-y-4">
                  {[
                    { title: "Affordable Pricing", desc: "Professional quality does not have to break the bank." },
                    { title: "Honest Work", desc: "No surprise charges. The price we quote is the price you pay." },
                    { title: "Community First", desc: "We support our military and give back to Central Arkansas." },
                    { title: "Quality Craftsmanship", desc: "26 years of experience in every brushstroke." },
                  ].map((v) => (
                    <div key={v.title} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div>
                        <p className="font-semibold text-gray-900">{v.title}</p>
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
      <section className="bg-gray-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Full-Service Property Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">One company for all your property needs. Here is what sets MSI apart.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Painting & Staining", items: ["Interior painting ($85/room)", "Exterior painting ($1,200/home)", "Cabinet refinishing", "Ceiling painting", "Deck staining"] },
              { title: "Repairs & Restoration", items: ["Drywall repair", "Texture matching", "Surface prep", "Trim repair", "Water damage repair"] },
              { title: "Property Services", items: ["Lawn care", "Janitorial cleaning", "Office cleaning", "Property preservation", "Bank-owned property care"] },
            ].map((cat) => (
              <div key={cat.title} className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{cat.title}</h3>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
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
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/90 text-lg mb-8">Get a free estimate from Little Rock&apos;s most affordable painting team.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-white hover:bg-gray-50 text-accent font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              Request Free Estimate
            </Link>
            <a href="tel:+15019603578" className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              Call (501) 960-3578
            </a>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
