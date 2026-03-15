import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    title: "Interior Painting",
    description: "Complete interior painting starting at just $85 per room. Walls, trim, ceilings, and accent walls with clean, professional results every time.",
    href: "/services/interior-painting",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
  {
    title: "Exterior Painting",
    description: "Full exterior painting for any 1-story home starting at $1,200. Prep, prime, and two coats of premium paint for lasting curb appeal.",
    href: "/services/exterior-painting",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    title: "Commercial Painting",
    description: "Professional painting for offices, retail, and commercial spaces. Minimize downtime with efficient scheduling and premium results.",
    href: "/services/commercial-painting",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    title: "Office Cleaning",
    description: "Thorough janitorial and office cleaning services to keep your workspace spotless, professional, and ready for business.",
    href: "/services/office-cleaning",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    title: "Lawn Care",
    description: "Professional lawn maintenance, mowing, edging, and landscaping to keep your property looking its best year-round.",
    href: "/services/lawn-care",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
  },
];

const reviews = [
  {
    name: "Google Reviewer",
    location: "Little Rock, AR",
    rating: 5,
    text: "Professional, punctual and dependable. Would definitely recommend MSI to anyone looking for quality painting work.",
    service: "Google Review",
    verified: true,
  },
  {
    name: "Marcus T.",
    location: "Little Rock, AR",
    rating: 5,
    text: "Anthony and his crew painted 4 rooms in my house in one day. $85 a room is unbeatable and the quality was excellent. Clean lines, no mess. Highly recommend.",
    service: "Interior Painting",
    verified: false,
  },
  {
    name: "Jennifer W.",
    location: "North Little Rock, AR",
    rating: 5,
    text: "Had my entire 1-story exterior painted for $1,200. They prepped everything properly, used quality paint, and it looks amazing. My neighbors keep asking who did it.",
    service: "Exterior Painting",
    verified: false,
  },
];

const serviceAreas = [
  "Little Rock",
  "North Little Rock",
  "Benton",
  "Bryant",
  "Sherwood",
  "Jacksonville",
  "Maumelle",
  "Conway",
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80", alt: "Beautiful living room interior painting" },
  { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80", alt: "Freshly painted home exterior" },
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", alt: "Modern kitchen with fresh paint" },
  { src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80", alt: "Elegant bedroom painting" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80", alt: "Commercial office painting" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", alt: "Modern home with professional finish" },
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
    answer: "We serve Little Rock, North Little Rock, Benton, Bryant, Sherwood, Jacksonville, Maumelle, Conway, and the greater Central Arkansas area. If you are not sure whether we serve your area, give us a call.",
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

      {/* ========== HERO WITH FULL-BLEED IMAGE ========== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Beautiful interior home painting"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay with steel blue tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2240]/90 via-[#1A3352]/80 to-[#1A3352]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2240]/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 relative z-10 w-full">
          <div className="max-w-4xl">
            {/* Google Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8 animate-fade-in">
              <div className="flex -space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <span className="text-white font-semibold text-sm">5.0 Rated on Google</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6 animate-fade-in-up" style={{ fontFamily: "var(--font-heading)" }}>
              MSI Major Minor Services
            </h1>

            <p className="text-xl sm:text-2xl text-white/85 leading-relaxed mb-4 max-w-2xl animate-fade-in-up delay-100" style={{ animationFillMode: "both" }}>
              Little Rock&apos;s Most Affordable Professional Painters
            </p>

            {/* Pricing highlight */}
            <div className="flex flex-wrap items-center gap-3 mb-10 animate-fade-in-up delay-200" style={{ animationFillMode: "both" }}>
              <span className="bg-accent/90 backdrop-blur-sm text-white font-black text-lg px-5 py-2.5 rounded-xl">
                $85 Per Room
              </span>
              <span className="text-white/50 text-2xl font-light">/</span>
              <span className="bg-accent/90 backdrop-blur-sm text-white font-black text-lg px-5 py-2.5 rounded-xl">
                $1,200 Per Home
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300" style={{ animationFillMode: "both" }}>
              <Link
                href="/#contact"
                className="bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent text-white font-bold px-10 py-5 rounded-2xl transition-all text-lg text-center shadow-xl hover:shadow-2xl hover:-translate-y-1 animate-pulse-glow"
              >
                Get Your Free Estimate
                <svg className="w-5 h-5 inline-block ml-2 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <a
                href="tel:+15019603578"
                className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold px-10 py-5 rounded-2xl transition-all text-lg text-center flex items-center justify-center gap-3"
              >
                <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                (501) 960-3578
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TRUST BAR ========== */}
      <section className="bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
            {[
              { value: "25+", label: "Years Experience", accent: true },
              { value: "5.0", label: "Google Rating", accent: false, star: true },
              { value: "$85", label: "Per Room", accent: false },
              { value: "Licensed", label: "& Insured", accent: true },
            ].map((stat, i) => (
              <div key={i} className="relative px-6 py-8 text-center group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-accent to-accent-dark rounded-b-full" />
                <div className="flex items-center justify-center gap-1">
                  <p className={`text-3xl sm:text-4xl font-black mb-1 ${stat.accent ? "text-accent" : "text-primary"}`}>
                    {stat.value}
                  </p>
                  {stat.star && (
                    <svg className="w-6 h-6 text-yellow-400 mb-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  )}
                </div>
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRICING CARDS WITH IMAGES ========== */}
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
            <div className="group rounded-3xl overflow-hidden shadow-lg hover-lift border border-gray-100 relative">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
                  alt="Interior room painting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <p className="text-white/80 text-sm font-medium">Starting at</p>
                  <p className="text-white text-3xl font-black">$85<span className="text-lg font-medium">/room</span></p>
                </div>
              </div>
              <div className="p-8 bg-white text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Interior Painting</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">Professional painting with clean lines and no mess. Most rooms completed in one day.</p>
                <Link href="/#contact" className="inline-flex items-center gap-2 text-accent font-bold text-sm hover:gap-3 transition-all">
                  Get a Quote
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>

            {/* Exterior - FEATURED */}
            <div className="group rounded-3xl overflow-hidden shadow-2xl hover-lift relative ring-2 ring-accent scale-[1.03]">
              {/* 30% OFF Badge */}
              <div className="absolute top-4 right-4 z-20 bg-red-500 text-white text-xs font-black px-4 py-2 rounded-full shadow-lg animate-pulse-glow">
                30% OFF
              </div>
              <div className="absolute top-4 left-4 z-20 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full">
                MOST POPULAR
              </div>
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                  alt="Exterior house painting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2240]/70 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <p className="text-white/80 text-sm font-medium">Any 1-Story Home</p>
                  <p className="text-white text-3xl font-black">$1,200</p>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-br from-primary to-primary-light text-center">
                <h3 className="text-xl font-bold text-white mb-3">Full Exterior</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">Complete prep, prime, and two coats of premium paint. Inside or out. Typically 2-3 days.</p>
                <Link href="/#contact" className="inline-flex items-center gap-2 bg-white text-primary font-bold text-sm px-6 py-3 rounded-xl hover:bg-gray-50 transition-all">
                  Claim 30% Off
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>

            {/* Custom */}
            <div className="group rounded-3xl overflow-hidden shadow-lg hover-lift border border-gray-100 relative">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Commercial office space"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <p className="text-white/80 text-sm font-medium">Always</p>
                  <p className="text-white text-3xl font-black">Free<span className="text-lg font-medium"> Estimate</span></p>
                </div>
              </div>
              <div className="p-8 bg-white text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Projects</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">Commercial, multi-story, lawn care, janitorial, and more. Every project gets a tailored, honest quote.</p>
                <Link href="/#contact" className="inline-flex items-center gap-2 text-accent font-bold text-sm hover:gap-3 transition-all">
                  Get a Quote
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-10 text-sm font-medium">
            All prices are starting rates. Final pricing depends on project scope and condition. Free estimates always.
          </p>
        </div>
      </section>

      {/* ========== SERVICES WITH IMAGE BACKGROUNDS ========== */}
      <section className="bg-surface py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">What We Do</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From interior painting to lawn care, we provide comprehensive property services across Central Arkansas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover-lift cursor-pointer"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2240]/90 via-[#0F2240]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BEFORE / AFTER ========== */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">Our Work</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              The MSI Difference
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">See the transformation our team delivers on every project.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80"
                alt="Room before painting"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="bg-red-500/90 text-white text-sm font-bold px-4 py-2 rounded-lg">BEFORE</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80"
                alt="Room after professional painting by MSI"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="bg-green-500/90 text-white text-sm font-bold px-4 py-2 rounded-lg">AFTER</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROCESS ========== */}
      <section className="bg-surface py-24">
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
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary shadow-sm border border-gray-100">
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

      {/* ========== ABOUT ANTHONY WITH IMAGE ========== */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Image Side */}
          <div className="relative h-96 lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80"
              alt="Professional painter at work"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0F2240]/30 hidden lg:block" />
          </div>
          {/* Content Side */}
          <div className="bg-gradient-to-br from-primary-dark to-primary p-12 lg:p-20 flex items-center">
            <div>
              <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">Meet the Owner</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Anthony Moss
              </h2>
              <p className="text-white/80 leading-relaxed mb-5 text-lg">
                With over 25 years of hands-on experience in painting and property services, Anthony founded MSI Major Minor Services in 2000 with a simple promise: professional-quality work at prices that make sense.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                Anthony personally oversees every project, ensuring the same attention to detail whether it is a single room or an entire exterior. MSI is your one-call solution for every property need in Central Arkansas.
              </p>
              <div className="flex flex-wrap gap-3">
                {["25+ Years Experience", "Licensed & Insured", "Military Discount"].map((tag) => (
                  <span key={tag} className="bg-white/10 text-white text-sm font-bold px-5 py-2.5 rounded-full border border-white/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== GOOGLE REVIEWS WIDGET ========== */}
      <section className="bg-surface py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">Customer Reviews</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              What Our Customers Say
            </h2>
            {/* Google Rating Summary */}
            <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-5 shadow-lg border border-gray-100 mt-4">
              <div className="text-center">
                <p className="text-5xl font-black text-primary">5.0</p>
                <p className="text-xs text-gray-500 font-medium mt-1">out of 5</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-sm text-gray-500">Based on Google Reviews</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                <span className="text-sm text-gray-500 font-medium">Google</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 sm:p-10 hover-lift border border-gray-100 relative">
                <div className="absolute top-6 right-8 text-6xl font-black text-accent/10 leading-none">&ldquo;</div>
                <div className="flex gap-1 mb-2">
                  {[...Array(review.rating)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                {review.verified && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full mb-3">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    Verified Google Review
                  </span>
                )}
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

      {/* ========== PHOTO GALLERY ========== */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">Portfolio</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              Our Recent Work
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative group rounded-2xl overflow-hidden aspect-square shadow-md">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY MSI - FULL BLEED IMAGE ========== */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
          alt="Modern home with professional painting"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0F2240]/85" />
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
                desc: "We proudly offer discounts to active duty, veterans, and their families as our way of saying thank you.",
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
              },
              {
                title: "Transparent Pricing",
                desc: "Interior rooms from $85, full exteriors from $1,200. The price we quote is the price you pay. Period.",
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
              },
              {
                title: "25+ Years Experience",
                desc: "Over two decades of painting and property services. We have the expertise to handle any project with confidence.",
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
              },
              {
                title: "Licensed & Insured",
                desc: "Fully licensed and insured. We protect your home and give you peace of mind on every single project.",
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-8 text-center hover-lift group">
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

      {/* ========== PROMO BANNER ========== */}
      <section className="bg-gradient-to-r from-accent to-accent-dark py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 geo-pattern opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
            <span className="text-white font-bold text-sm">LIMITED TIME OFFER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            30% Off Any 1-Story Home
          </h2>
          <p className="text-xl text-white/90 leading-relaxed mb-4">
            Interior or exterior. <span className="font-black text-white">$85/room</span> inside, <span className="font-black text-white">$1,200</span> for the whole home.
          </p>
          <p className="text-lg text-white/75 font-medium mb-10">
            No hidden fees. No surprises. Just honest work at honest prices.
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-accent font-bold px-10 py-5 rounded-2xl transition-all text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1">
            Claim Your 30% Discount
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
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
