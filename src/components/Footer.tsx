import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Interior Painting", href: "/services/interior-painting" },
  { name: "Exterior Painting", href: "/services/exterior-painting" },
  { name: "Commercial Painting", href: "/services/commercial-painting" },
  { name: "Office Cleaning", href: "/services/office-cleaning" },
  { name: "Lawn Care", href: "/services/lawn-care" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary-dark to-primary text-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 geo-pattern opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-dark rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-lg font-black text-white tracking-tighter">MSI</span>
              </div>
              <div>
                <p className="text-lg font-bold leading-tight">Major Minor</p>
                <p className="text-xs text-white/60 font-medium tracking-wide uppercase">Services</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Little Rock&apos;s most affordable professional painters. 25+ years of experience serving Central Arkansas homeowners and businesses.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <a
                href="https://www.facebook.com/antnymoss/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-accent/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://www.yelp.com/biz/msi-major-minor-services-little-rock-4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-accent/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206l2.57 2.2c.637.545.44 1.513-.192 1.735l-.708.226zm-8.274 5.21l-1.177-5.08c-.227-.98.98-1.64 1.727-.944l3.857 3.602c.47.437.294 1.2-.298 1.393l-3.51 1.142c-.369.12-.766-.016-.935-.37l-.258-.526-.164-.336.558.12zm-6.566-6.38c.276-.96 1.66-.8 1.974.228l1.632 5.342c.132.432-.12.9-.555 1.032l-2.81.856c-.637.194-1.216-.42-1.054-1.057l.813-6.4zm3.787-8.46l4.54 2.985c.836.548.36 1.82-.683 1.82H7.34c-.654 0-1.067-.728-.735-1.295l2.13-3.217c.21-.36.658-.467 1.012-.293h.36zm-5.33 6.084c.17-.947 1.445-1.097 1.82-.214l1.936 4.57c.198.468-.07 1.01-.565 1.143l-3.196.86c-.65.175-1.193-.48-.983-1.117l.988-5.242z"/></svg>
              </a>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-3 backdrop-blur-sm border border-white/10">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              <span className="text-sm font-semibold">Military Discount Available</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-accent transition-colors flex items-center gap-2 group">
                    <svg className="w-3 h-3 text-accent/50 group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Service Areas
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent" />
            </h3>
            <ul className="space-y-3">
              {["Little Rock", "North Little Rock", "Benton", "Bryant", "Sherwood", "Jacksonville", "Maumelle", "Conway"].map((area) => (
                <li key={area} className="text-sm text-white/60 flex items-center gap-2">
                  <svg className="w-3 h-3 text-accent/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                  {area}, AR
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent" />
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-sm text-white/90 font-medium">100 Baseline Rd</p>
                  <p className="text-sm text-white/60">Little Rock, AR 72209</p>
                </div>
              </div>
              <a href="tel:+15019603578" className="flex items-center gap-3 text-white hover:text-accent transition-colors group">
                <div className="w-10 h-10 bg-white/10 group-hover:bg-accent/20 rounded-lg flex items-center justify-center shrink-0 transition-colors">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <span className="text-sm font-bold">(501) 960-3578</span>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <span className="text-sm text-white/70">Mon - Sat: 8AM - 5PM</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                </div>
                <span className="text-sm text-white/70">Cards & Crypto Accepted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} MSI Major Minor Services. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/30">Licensed & Insured</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-xs text-white/30">Est. 2000</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-xs text-white/30">25+ Years</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
