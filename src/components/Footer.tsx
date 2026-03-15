import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Interior Painting", href: "/services/interior-painting" },
  { name: "Exterior Painting", href: "/services/exterior-painting" },
  { name: "Cabinet Refinishing", href: "/services/cabinet-refinishing" },
  { name: "Drywall Repair", href: "/services/drywall-repair" },
  { name: "Deck Staining", href: "/services/deck-staining" },
  { name: "Property Preservation", href: "/services/property-preservation" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-baseline gap-1.5 mb-4">
              <span className="text-2xl font-black tracking-tight">MSI</span>
              <span className="text-sm font-medium text-white/70">Major Minor Services</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Professional painting and property services in Little Rock, Arkansas. 26 years of experience serving Central Arkansas homeowners and businesses.
            </p>
            <p className="text-white/80 text-sm leading-relaxed mb-2">
              Proudly Latinx-owned. Established 2018.
            </p>
            <div className="flex items-center gap-2 mt-4 bg-white/10 rounded-lg px-4 py-2.5 inline-block">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              <span className="text-sm font-medium">Military Discount Available</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div>
                  <p className="text-sm text-white/90">10601 Warren Dr</p>
                  <p className="text-sm text-white/90">Little Rock, AR 72209</p>
                </div>
              </div>
              <a href="tel:+15019603578" className="flex items-center gap-3 text-white/90 hover:text-accent transition-colors">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="text-sm font-medium">(501) 960-3578</span>
              </a>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-sm text-white/90">Mon - Sat: 7:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                <span className="text-sm text-white/90">Credit Cards & Crypto Accepted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} MSI Major Minor Services. All rights reserved.
          </p>
          <p className="text-sm text-white/60">
            Serving Little Rock, North Little Rock, Maumelle & Central Arkansas
          </p>
        </div>
      </div>
    </footer>
  );
}
