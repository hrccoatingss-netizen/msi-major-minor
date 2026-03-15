"use client";

import { useState, type FormEvent } from "react";

const serviceOptions = [
  "Interior Painting",
  "Exterior Painting",
  "Cabinet Refinishing",
  "Drywall Repair",
  "Deck Staining",
  "Lawn Care",
  "Janitorial / Office Cleaning",
  "Property Preservation",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // Placeholder - connect to CRM
    await new Promise((r) => setTimeout(r, 1000));

    setSubmitted(true);
    setLoading(false);
  }

  if (submitted) {
    return (
      <div id="contact" className="bg-warm py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-sm p-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600">We received your request. Anthony will get back to you within 24 hours with your free estimate.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="contact" className="bg-warm py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get Your Free Estimate</h2>
          <p className="text-lg text-gray-600">Tell us about your project and we will get back to you within 24 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-8 sm:p-10 space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5">First Name *</label>
              <input id="firstName" name="firstName" type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">Last Name *</label>
              <input id="lastName" name="lastName" type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone *</label>
              <input id="phone" name="phone" type="tel" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
              <input id="email" name="email" type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">Service Needed *</label>
            <select id="service" name="service" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors bg-white">
              <option value="">Select a service...</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Project Details</label>
            <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none" placeholder="Tell us about your project - rooms, square footage, timeline, etc." />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent hover:bg-accent-dark disabled:opacity-50 text-white font-semibold py-4 rounded-lg transition-colors text-lg shadow-sm"
          >
            {loading ? "Sending..." : "Request Free Estimate"}
          </button>

          <p className="text-center text-sm text-gray-500">
            Or call us directly at{" "}
            <a href="tel:+15019603578" className="text-primary font-semibold hover:underline">(501) 960-3578</a>
          </p>
        </form>
      </div>
    </section>
  );
}
