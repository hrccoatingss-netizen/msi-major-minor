import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    title: "Interior Painting",
    description: "Complete interior painting starting at just $85 per room. Walls, trim, ceilings, and accent walls with clean, professional results every time.",
    href: "/services/interior-painting",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    ),
  },
  {
    title: "Exterior Painting",
    description: "Full exterior painting for any 1-story home starting at $1,200. Prep, prime, and two coats of premium paint for lasting curb appeal.",
    href: "/services/exterior-painting",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    ),
  },
  {
    title: "Cabinet Painting & Staining",
    description: "Transform your kitchen with professional cabinet staining, painting, and refinishing. A fraction of the cost of full replacement.",
    href: "/services/cabinet-refinishing",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
    ),
  },
  {
    title: "Drywall Repair",
    description: "Holes, cracks, water damage, and texture matching. Seamless drywall repairs that look like they were never there.",
    href: "/services/drywall-repair",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
    ),
  },
  {
    title: "Deck Staining",
    description: "Protect and beautify your deck with professional staining and sealing. Extend the life of your outdoor living space for years to come.",
    href: "/services/deck-staining",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
    ),
  },
  {
    title: "Property Preservation",
    description: "Complete property preservation services including cleanup, maintenance, and restoration for banks, realtors, and property managers.",
    href: "/services/property-preservation",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
  },
];

const reviews = [
  {
    name: "Marcus T.",
    location: "Little Rock, AR",
    rating: 5,
    text: "Anthony and his crew painted 4 rooms in my house in one day. $85 a room is unbeatable and the quality was excellent. Clean lines, no mess. Highly recommend.",
    service: "Interior Painting",
  },
  {
    name: "Jennifer W.",
    location: "North Little Rock, AR",
    rating: 5,
    text: "Had my entire 1-story exterior painted for $1,200. They prepped everything properly, used quality paint, and it looks amazing. My neighbors keep asking who did it.",
    service: "Exterior Painting",
  },
  {
    name: "David R.",
    location: "Maumelle, AR",
    rating: 5,
    text: "Got my kitchen cabinets refinished instead of replacing them. Saved thousands and they look brand new. Anthony really knows what he is doing.",
    service: "Cabinet Refinishing",
  },
];

const serviceAreas = [
  "Little Rock",
  "North Little Rock",
  "Maumelle",
  "Sherwood",
  "Jacksonville",
  "Benton",
  "Conway",
  "Cabot",
];

const faqs = [
  {
    question: "How much does interior painting cost?",
    answer: "Our interior painting starts at just $85 per room. This includes walls with clean, professional results. Additional charges may apply for trim, ceilings, or accent walls. Contact us for a free estimate tailored to your specific project.",
  },
  {
    question: "How much does exterior painting cost?",
    answer: "We offer full exterior painting for any 1-story home starting at $1,200. This includes prep work, priming, and two coats of premium exterior paint. Multi-story homes are quoted based on size and condition. Call us for a free estimate.",
  },
  {
    question: "Do you offer a military discount?",
    answer: "Yes! We proudly offer a military discount to active duty service members, veterans, and their families. Just let us know when you request your estimate and we will apply the discount.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit cards, cash, and even cryptocurrency. We want to make it as easy as possible for you to pay for our services however works best for you.",
  },
  {
    question: "How long does a painting project take?",
    answer: "Most interior rooms can be completed in a single day. A full exterior typically takes 2-3 days depending on the size and prep work needed. We will give you a clear timeline during your free estimate.",
  },
  {
    question: "What areas do you serve?",
    answer: "We serve Little Rock, North Little Rock, Maumelle, Sherwood, Jacksonville, Benton, Conway, Cabot, and the greater Central Arkansas area. If you are not sure whether we serve your area, give us a call.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ========== HERO ========== */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light relative overflow-hidden">
        <div className="absolute inset-0 geo-pattern" />
        {/* Decorative circles */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 relative">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 mb-8 animate-fade-in">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <span className="text-white/90 text-sm font-semibold">Licensed & Insured</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="text-white/90 text-sm font-semibold">Military Discount</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 animate-fade-in-up" style={{ fontFamily: "var(--font-heading)" }}>
              Major Results.{" "}
              <span className="text-gradient">Minor Hassle.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-white/80 leading-relaxed mb-10 max-w-2xl animate-fade-in-up delay-200" style={{ animationFillMode: "both" }}>
              Little Rock&apos;s go-to painting and property services team. 12+ years of experience delivering quality you can see and prices you can afford.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300" style={{ animationFillMode: "both" }}>
              <Link
                href="/#contact"
                className="bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent text-white font-bold px-10 py-5 rounded-2xl transition-all text-lg text-center shadow-xl hover:shadow-2xl hover:-translate-y-1 animate-pulse-glow"
              >
                Get Your Free Estimate
              </Link>
              <a
                href="tel:+15019603578"
                className="glass hover:bg-white/15 text-white font-bold px-10 py-5 rounded-2xl transition-all text-lg text-center flex items-center justify-center gap-3"
              >
                <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                (501) 960-3578
              </a>
            </div>

            {/* Social proof strip */}
            <div className="mt-14 flex flex-wrap items-center gap-8 animate-fade-in delay-500" style={{ animationFillMode: "both" }}>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <span className="text-white/70 text-sm font-medium">5-Star Rated</span>
              </div>
              <span className="w-px h-6 bg-white/20 hidden sm:block" />
              <span className="text-white/70 text-sm font-medium">Serving Central Arkansas Since 2018</span>
              <span className="w-px h-6 bg-white/20 hidden sm:block" />
              <span className="text-white/70 text-sm font-medium">Latinx-Owned Business</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATS ========== */}
      <section className="bg-white py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
            {[
              { value: "12+", label: "Years Experience", accent: true },
              { value: "$85", label: "Per Room", accent: false },
              { value: "6+", label: "Service Types", accent: false },
              { value: "Vet", label: "Friendly", accent: true },
            ].map((stat, i) => (
              <div key={i} className="relative px-6 py-8 text-center group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-accent to-accent-dark rounded-b-full" />
                <p className={`text-3xl sm:text-4xl font-black mb-1 ${stat.accent ? "text-accent" : "text-primary"}`}>
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHAT SETS MSI APART ========== */}
      <section className="bg-gradient-to-r from-accent to-accent-dark py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 geo-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              What Sets MSI Apart
            </h2>
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-4">
              Interior painting starting at <span className="font-black text-white">$85/room</span>. Complete exterior for any 1-story home at <span className="font-black text-white">$1,200</span>.
            </p>
            <p className="text-lg text-white/75 font-medium">
              No hidden fees. No surprises. Just honest work at honest prices.
            </p>
            <div className="mt-10">
              <Link href="/#contact" className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-accent font-bold px-10 py-5 rounded-2xl transition-all text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Get Your Free Quote
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="bg-surface py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">What We Do</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From interior painting to property preservation, we provide comprehensive property services across Central Arkansas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="card-premium bg-white rounded-2xl p-8 shadow-sm hover-lift group border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-light group-hover:text-white transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.description}</p>
                <div className="mt-6 flex items-center gap-2 text-accent font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROCESS ========== */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">How It Works</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              Simple 4-Step Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From your first call to the final brushstroke, we make it easy.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Free Quote", desc: "Call or fill out our form. We will come out, assess your project, and give you a clear, honest quote.", icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg> },
              { step: "02", title: "Schedule", desc: "Pick a date that works for you. We show up on time, every time. Your schedule, your convenience.", icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
              { step: "03", title: "Transform", desc: "We prep, protect, and paint with precision. Quality materials, clean work, and attention to every detail.", icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg> },
              { step: "04", title: "Done Right", desc: "Walk through with us. If it is not perfect, we will make it right. Your satisfaction is guaranteed.", icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
            ].map((item) => (
              <div key={item.step} className="relative text-center group">
                <div className="w-20 h-20 bg-surface rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary shadow-sm border border-gray-100">
                  {item.icon}
                </div>
                <span className="text-xs font-black text-accent uppercase tracking-widest">Step {item.step}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ABOUT ANTHONY ========== */}
      <section className="bg-surface-alt py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">Meet the Owner</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Anthony Moss
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                With over 12 years of hands-on experience in painting and property preservation, Anthony founded MSI Major Minor Services in 2018 with a simple promise: professional-quality work at prices that make sense.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                As a proudly Latinx-owned business, MSI is built on the values of hard work, integrity, and community. Anthony personally oversees every project, ensuring the same attention to detail whether it is a single room or an entire exterior.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                MSI is more than painting. From cabinet refinishing to drywall repair, deck staining to property preservation, Anthony and his team are your one-call solution for every property need in Central Arkansas.
              </p>
              <div className="flex flex-wrap gap-3">
                {["12+ Years Experience", "Licensed & Insured", "Latinx-Owned", "Military Discount"].map((tag) => (
                  <span key={tag} className="bg-primary/5 text-primary text-sm font-bold px-5 py-2.5 rounded-full border border-primary/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Anthony Card */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl" />
              <div className="bg-white rounded-3xl p-10 sm:p-12 shadow-xl relative border border-gray-100">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                    <span className="text-5xl font-black text-white" style={{ fontFamily: "var(--font-heading)" }}>AM</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Anthony Moss</h3>
                  <p className="text-accent font-bold mb-8">Owner & Lead Contractor</p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-surface rounded-2xl p-5">
                      <p className="text-3xl font-black text-primary">12+</p>
                      <p className="text-sm text-gray-500 font-medium mt-1">Years Exp.</p>
                    </div>
                    <div className="bg-surface rounded-2xl p-5">
                      <p className="text-3xl font-black text-primary">2018</p>
                      <p className="text-sm text-gray-500 font-medium mt-1">Established</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-600">
                    <p className="flex items-center justify-center gap-3">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      Little Rock, Arkansas
                    </p>
                    <p className="flex items-center justify-center gap-3">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>
                      Proudly Latinx-Owned
                    </p>
                    <p className="flex items-center justify-center gap-3">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                      Military Discount Offered
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PRICING TRANSPARENCY ========== */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">Transparent Pricing</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              Honest Pricing. No Surprises.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in upfront pricing. Here is what you can expect when you work with MSI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Interior */}
            <div className="bg-surface rounded-3xl p-10 text-center hover-lift border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-primary-light" />
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Interior Painting</h3>
              <div className="mb-4">
                <span className="text-5xl font-black text-primary">$85</span>
                <span className="text-gray-500 font-medium">/room</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">Professional painting with clean lines and no mess. Most rooms completed in one day.</p>
            </div>

            {/* Exterior - Featured */}
            <div className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-10 text-center hover-lift relative overflow-hidden shadow-2xl scale-105">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent to-accent-dark" />
              <div className="absolute -top-px -right-px bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">POPULAR</div>
              <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Full Exterior</h3>
              <div className="mb-4">
                <span className="text-5xl font-black text-white">$1,200</span>
                <span className="text-white/70 font-medium block mt-1">any 1-story home</span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">Complete prep, prime, and two coats of premium paint. Typically 2-3 days.</p>
            </div>

            {/* Custom */}
            <div className="bg-surface rounded-3xl p-10 text-center hover-lift border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent to-accent-dark" />
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Projects</h3>
              <div className="mb-4">
                <span className="text-5xl font-black text-accent">Free</span>
                <span className="text-gray-500 font-medium block mt-1">estimate</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">Cabinets, drywall, decks, and more. Every project gets a tailored, honest quote.</p>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-10 text-sm font-medium">
            All prices are starting rates. Final pricing depends on project scope and condition. Free estimates always.
          </p>
        </div>
      </section>

      {/* ========== WHY MSI ========== */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-24 relative overflow-hidden">
        <div className="absolute inset-0 geo-pattern" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">Why MSI</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              Why Choose MSI
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Military Discount",
                desc: "We proudly offer discounts to active duty, veterans, and their families as our way of saying thank you for your service.",
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
              },
              {
                title: "Transparent Pricing",
                desc: "Interior rooms from $85, full exteriors from $1,200. The price we quote is the price you pay. Period.",
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
              },
              {
                title: "Licensed Contractors",
                desc: "Fully licensed and insured. We protect your home and give you peace of mind on every single project.",
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
              },
              {
                title: "12+ Years Experience",
                desc: "Over a decade of painting and property services. We have the expertise to handle any project with confidence.",
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
              },
            ].map((item) => (
              <div key={item.title} className="glass rounded-2xl p-8 text-center hover-lift group">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-accent mx-auto mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== REVIEWS ========== */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">Testimonials</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              What Our Customers Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div key={i} className="bg-surface rounded-3xl p-8 sm:p-10 hover-lift border border-gray-100 relative">
                {/* Quote mark */}
                <div className="absolute top-6 right-8 text-6xl font-black text-accent/10 leading-none">&ldquo;</div>
                <div className="flex gap-1 mb-2">
                  {[...Array(review.rating)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <span className="text-xs font-bold text-accent uppercase tracking-wider">{review.service}</span>
                <p className="text-gray-700 leading-relaxed mt-4 mb-8 relative z-10">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{review.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICE AREAS ========== */}
      <section className="bg-surface py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">Coverage</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              Proudly Serving Central Arkansas
            </h2>
            <p className="text-lg text-gray-600">We bring premium painting services to these communities and beyond.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {serviceAreas.map((area) => (
              <div key={area} className="bg-white rounded-2xl p-5 text-center hover-lift border border-gray-100 group">
                <svg className="w-6 h-6 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <p className="font-bold text-gray-900">{area}</p>
                <p className="text-xs text-gray-500 mt-0.5">Arkansas</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Have a question we have not answered here? Give us a call at{" "}
                <a href="tel:+15019603578" className="text-primary font-bold hover:text-accent transition-colors">(501) 960-3578</a>{" "}
                and we will be happy to help.
              </p>
              <Link href="/#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-accent-dark text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg transition-all">
                Get Free Estimate
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
            <div className="lg:col-span-3">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT ========== */}
      <ContactForm />
    </>
  );
}
