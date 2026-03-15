import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    title: "Interior Painting",
    description: "Complete interior painting starting at just $85 per room. Walls, trim, ceilings, and accent walls with clean, professional results.",
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
    title: "Cabinet Refinishing",
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
    description: "Protect and beautify your deck with professional staining and sealing. Extend the life of your outdoor living space.",
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

const whyChooseUs = [
  {
    title: "Affordable Pricing",
    description: "Interior rooms from $85, full exteriors from $1,200. Professional quality at prices that fit your budget.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
  {
    title: "26 Years Experience",
    description: "Over two decades of painting and property services. We have the expertise to handle any project, big or small.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
    ),
  },
  {
    title: "Military Discount",
    description: "We proudly offer a military discount to active duty, veterans, and their families as our way of saying thank you.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
    ),
  },
  {
    title: "Multiple Services",
    description: "From painting to lawn care to janitorial cleaning. One call handles all your property needs with consistent quality.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
    ),
  },
];

const reviews = [
  {
    name: "Marcus T.",
    location: "Little Rock, AR",
    rating: 5,
    text: "Anthony and his crew painted 4 rooms in my house in one day. $85 a room is unbeatable and the quality was excellent. Clean lines, no mess. Highly recommend.",
  },
  {
    name: "Jennifer W.",
    location: "North Little Rock, AR",
    rating: 5,
    text: "Had my entire 1-story exterior painted for $1,200. They prepped everything properly, used quality paint, and it looks amazing. My neighbors keep asking who did it.",
  },
  {
    name: "David R.",
    location: "Maumelle, AR",
    rating: 5,
    text: "Got my kitchen cabinets refinished instead of replacing them. Saved thousands and they look brand new. Anthony really knows what he is doing after 26 years.",
  },
];

const serviceAreas = [
  "Little Rock",
  "North Little Rock",
  "Maumelle",
  "Sherwood",
  "Jacksonville",
  "Bryant",
  "Benton",
  "Conway",
  "Cabot",
  "Central Arkansas",
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
    answer: "We serve Little Rock, North Little Rock, Maumelle, Sherwood, Jacksonville, Bryant, Benton, Conway, Cabot, and the greater Central Arkansas area. If you are not sure whether we serve your area, give us a call.",
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

      {/* Hero */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              <span className="text-white/90 text-sm font-medium">Military Discount Available</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Little Rock&apos;s Affordable{" "}
              <span className="text-accent">Painting Experts</span>
            </h1>
            <p className="text-xl text-white/85 leading-relaxed mb-8 max-w-2xl">
              26 years of experience. Interior rooms from <span className="font-bold text-white">$85</span>. Full exteriors from <span className="font-bold text-white">$1,200</span>. Professional quality at prices that make sense.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" className="bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg text-center shadow-lg">
                Get Free Estimate
              </Link>
              <a href="tel:+15019603578" className="border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg text-center flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (501) 960-3578
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="py-4">
              <p className="text-3xl sm:text-4xl font-black text-primary">26</p>
              <p className="text-sm text-gray-600 font-medium mt-1">Years Experience</p>
            </div>
            <div className="py-4 border-x border-gray-100">
              <p className="text-3xl sm:text-4xl font-black text-primary">$85</p>
              <p className="text-sm text-gray-600 font-medium mt-1">Per Room</p>
            </div>
            <div className="py-4">
              <div className="flex items-center justify-center gap-1.5">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
              <p className="text-sm text-gray-600 font-medium mt-1">Military Discount</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Affordable Rates, Professional Results</h2>
              <p className="text-white/90 text-lg">Interior rooms from $85. Full 1-story exteriors from $1,200. No hidden fees.</p>
            </div>
            <Link href="/#contact" className="bg-white hover:bg-gray-50 text-accent font-semibold px-8 py-4 rounded-lg transition-colors text-lg whitespace-nowrap shadow-sm">
              Get Your Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* About / Team */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">About MSI</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Meet Anthony, Your Local Painting Expert</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                With 26 years of hands-on experience in painting and property services, Anthony founded MSI Major Minor Services in 2018 to bring affordable, professional-quality work to Little Rock homeowners.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                As a proudly Latinx-owned business, MSI serves the greater Central Arkansas area with a commitment to quality craftsmanship, fair pricing, and honest work. Whether it is a single room or an entire exterior, every project gets the same attention to detail.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                MSI is more than just painting. From cabinet refinishing to drywall repair, deck staining to property preservation, we handle it all so you have one reliable team for every need.
              </p>
              <Link href="/about" className="text-primary font-semibold hover:text-primary-light transition-colors inline-flex items-center gap-2">
                Learn More About Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="bg-warm rounded-2xl p-8 sm:p-10">
              <div className="text-center">
                <div className="w-28 h-28 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-black text-white">A</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Anthony</h3>
                <p className="text-accent font-semibold mb-4">Owner & Lead Contractor</p>
                <div className="space-y-3 text-sm text-gray-600">
                  <p className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    26 Years of Experience
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Little Rock, Arkansas
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>
                    Latinx-Owned Business
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    Established 2018
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From interior painting to property preservation, we provide comprehensive property services across Central Arkansas.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow group border border-gray-100">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Why MSI</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">&ldquo;{review.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Coverage</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Areas We Serve</h2>
            <p className="text-lg text-gray-600">Proudly serving the greater Central Arkansas area</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span key={area} className="bg-primary/5 text-primary font-medium px-5 py-2.5 rounded-full text-sm border border-primary/10">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-light py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Contact */}
      <ContactForm />
    </>
  );
}
