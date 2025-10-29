'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "What is the typical timeline for a new project?",
    answer: "Most projects take 4–8 weeks from kickoff to launch, depending on scope. We provide detailed milestones and weekly updates to keep you informed."
  },
  {
    question: "How do you structure your pricing?",
    answer: "We offer flexible pricing models — fixed project fees, retainer-based, or performance-based packages — tailored to your goals and budget."
  },
  {
    question: "What services do you offer?",
    answer: "We specialize in digital advertising, social media strategy, content production, performance marketing, and brand identity development."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left font-medium hover:bg-gray-800 transition"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}