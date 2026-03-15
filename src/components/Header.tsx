"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const services = [
  { name: "Interior Painting", href: "/services/interior-painting" },
  { name: "Exterior Painting", href: "/services/exterior-painting" },
  { name: "Commercial Painting", href: "/services/commercial-painting" },
  { name: "Office Cleaning", href: "/services/office-cleaning" },
  { name: "Lawn Care", href: "/services/lawn-care" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow-sm"}`}>
      {/* Top bar */}
      <div className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10 text-xs">
          <div className="flex items-center gap-4">
            <span className="hidden sm:flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Mon - Sat: 8AM - 5PM
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Little Rock, AR
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:flex items-center gap-1.5 text-accent font-semibold">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              Military Discount
            </span>
            <span className="font-semibold">Licensed & Insured</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-xl font-black text-white tracking-tighter">MSI</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-lg font-bold text-primary leading-tight">Major Minor</p>
              <p className="text-xs text-gray-500 font-medium tracking-wide uppercase">Services</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors flex items-center gap-1 relative group">
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className="block px-5 py-3 text-sm text-gray-700 hover:bg-surface-alt hover:text-primary transition-colors font-medium">
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/#contact" className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </Link>

            {/* Phone */}
            <a href="tel:+15019603578" className="text-sm font-bold text-primary hover:text-primary-light transition-colors flex items-center gap-2">
              <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              (501) 960-3578
            </a>

            {/* CTA */}
            <Link href="/#contact" className="bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent text-white text-sm font-bold px-7 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Free Estimate
            </Link>
          </nav>

          {/* Mobile toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <a href="tel:+15019603578" className="bg-gradient-to-br from-primary to-primary-light text-white p-2.5 rounded-xl shadow-lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-gray-700">
              {mobileOpen ? (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-2xl">
          <div className="px-4 py-6 space-y-1">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block px-4 py-3.5 text-gray-800 font-semibold rounded-xl hover:bg-surface-alt transition-colors">Home</Link>

            <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="w-full flex items-center justify-between px-4 py-3.5 text-gray-800 font-semibold rounded-xl hover:bg-surface-alt transition-colors">
              Services
              <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 space-y-1">
                {services.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm text-gray-600 rounded-xl hover:bg-surface-alt hover:text-primary font-medium">
                    {s.name}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/about" onClick={() => setMobileOpen(false)} className="block px-4 py-3.5 text-gray-800 font-semibold rounded-xl hover:bg-surface-alt transition-colors">About</Link>
            <Link href="/#contact" onClick={() => setMobileOpen(false)} className="block px-4 py-3.5 text-gray-800 font-semibold rounded-xl hover:bg-surface-alt transition-colors">Contact</Link>

            <div className="pt-4 space-y-3">
              <a href="tel:+15019603578" className="flex items-center justify-center gap-2 text-primary font-bold text-lg py-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (501) 960-3578
              </a>
              <Link href="/#contact" onClick={() => setMobileOpen(false)} className="block text-center bg-gradient-to-r from-accent to-accent-dark text-white font-bold px-6 py-4 rounded-xl transition-all text-lg shadow-lg">
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
