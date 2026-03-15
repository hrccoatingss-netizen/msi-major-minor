"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  { name: "Interior Painting", href: "/services/interior-painting" },
  { name: "Exterior Painting", href: "/services/exterior-painting" },
  { name: "Cabinet Refinishing", href: "/services/cabinet-refinishing" },
  { name: "Drywall Repair", href: "/services/drywall-repair" },
  { name: "Deck Staining", href: "/services/deck-staining" },
  { name: "Property Preservation", href: "/services/property-preservation" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-1.5 group">
            <span className="text-3xl font-black text-primary tracking-tight">MSI</span>
            <span className="text-sm font-semibold text-gray-600 hidden sm:inline">Major Minor Services</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-sm font-medium text-gray-700 hover:text-primary transition-colors flex items-center gap-1">
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-warm hover:text-primary transition-colors">
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/#contact" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Contact
            </Link>

            {/* Phone */}
            <a href="tel:+15019603578" className="text-sm font-semibold text-primary hover:text-primary-light transition-colors flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              (501) 960-3578
            </a>

            {/* CTA */}
            <Link href="/#contact" className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors shadow-sm">
              Get Free Estimate
            </Link>
          </nav>

          {/* Mobile toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <a href="tel:+15019603578" className="bg-primary text-white p-2.5 rounded-lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-gray-700">
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-1">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-warm">Home</Link>

            <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="w-full flex items-center justify-between px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-warm">
              Services
              <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 space-y-1">
                {services.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="block px-4 py-2.5 text-sm text-gray-600 rounded-lg hover:bg-warm hover:text-primary">
                    {s.name}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/about" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-warm">About</Link>
            <Link href="/#contact" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-warm">Contact</Link>

            <div className="pt-3">
              <Link href="/#contact" onClick={() => setMobileOpen(false)} className="block text-center bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
