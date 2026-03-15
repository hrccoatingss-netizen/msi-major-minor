"use client";

import { useState, type FormEvent } from "react";

const serviceOptions = [
  "Interior Painting",
  "Exterior Painting",
  "Cabinet Painting & Staining",
  "Drywall Repair",
  "Deck Staining",
  "Lawn Care",
  "Office Cleaning",
  "Property Preservation",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  }

  if (submitted) {
    return (
      <div id="contact" className="bg-surface py-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-14 border border-gray-100">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-heading)" }}>Thank You!</h3>
            <p className="text-gray-600 text-lg">We received your request. Anthony will get back to you within 24 hours with your free estimate.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="contact" className="bg-surface py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left info panel */}
          <div className="lg:col-span-2">
            <p className="text-accent font-bold text-sm uppercase tracking-wider mb-3">Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Fill out the form and Anthony will get back to you within 24 hours with a free, no-obligation estimate.
            </p>

            <div className="space-y-6">
              <a href="tel:+15019603578" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Call Us</p>
                  <p className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">(501) 960-3578</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Location</p>
                  <p className="text-base font-semibold text-gray-900">10601 Warren Dr, Little Rock, AR 72209</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Hours</p>
                  <p className="text-base font-semibold text-gray-900">Mon - Sat: 8AM - 5PM</p>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-3">
              {["Licensed & Insured", "Military Discount", "Free Estimates"].map((badge) => (
                <span key={badge} className="bg-primary/5 text-primary text-xs font-bold px-4 py-2 rounded-full border border-primary/10">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 space-y-6 border border-gray-100">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2">First Name *</label>
                  <input id="firstName" name="firstName" type="text" required className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all bg-surface" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2">Last Name *</label>
                  <input id="lastName" name="lastName" type="text" required className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all bg-surface" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone *</label>
                  <input id="phone" name="phone" type="tel" required className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all bg-surface" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input id="email" name="email" type="email" className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all bg-surface" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">Service Needed *</label>
                <select id="service" name="service" required className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all bg-surface">
                  <option value="">Select a service...</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Project Details</label>
                <textarea id="message" name="message" rows={4} className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all resize-none bg-surface" placeholder="Tell us about your project..." />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent disabled:opacity-50 text-white font-bold py-4.5 rounded-xl transition-all text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {loading ? "Sending..." : "Request Free Estimate"}
              </button>

              <p className="text-center text-sm text-gray-500">
                Or call us directly at{" "}
                <a href="tel:+15019603578" className="text-primary font-bold hover:text-accent transition-colors">(501) 960-3578</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
