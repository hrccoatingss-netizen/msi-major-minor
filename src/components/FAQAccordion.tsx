"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
            openIndex === i
              ? "bg-white border-accent/20 shadow-lg shadow-accent/5"
              : "bg-white border-gray-200 hover:border-gray-300"
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-7 py-6 text-left group"
          >
            <span className="text-base font-bold text-gray-900 pr-4 group-hover:text-primary transition-colors">
              {faq.question}
            </span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
              openIndex === i
                ? "bg-accent text-white rotate-180"
                : "bg-gray-100 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary"
            }`}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96" : "max-h-0"}`}
          >
            <div className="px-7 pb-6">
              <div className="w-12 h-0.5 bg-accent/30 mb-4" />
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
