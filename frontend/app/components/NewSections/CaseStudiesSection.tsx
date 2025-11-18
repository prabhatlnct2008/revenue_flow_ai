'use client';

import React from 'react';

interface CaseStudiesSectionProps {
  onOpenModal: () => void;
}

export default function CaseStudiesSection({ onOpenModal }: CaseStudiesSectionProps) {
  const caseStudies = [
    {
      location: 'Bangalore',
      business: 'Dental Clinic, Bangalore',
      quote: '"We\'re getting leads, but appointments are low."',
      color: 'from-cyan-500 to-blue-600',
      before: [
        '₹35,000/month',
        '~120 leads/month',
        'Only 10–12 new patients',
      ],
      implemented: [
        'New landing page focused on single core offer: "New Patient Check-up + Cleaning Package"',
        'Removed 4 unnecessary form fields and added 1 smart qualifier',
        'AI-written WhatsApp follow-up: Instant "thanks + booking link", 24hr reminder, weekend nudge',
      ],
      outcomes: [
        { label: 'CONVERSION RATE', value: '8% → 22%', change: '+14%' },
        { label: 'ADDITIONAL CUSTOMERS', value: '+24 patients/month' },
        { label: 'REVENUE', value: '₹72,000/month extra' },
      ],
      investment: '~₹20,000 implementation',
    },
    {
      location: 'Delhi NCR',
      business: 'Fitness Studio, Delhi NCR',
      quote: '"We get enquiries for our 21-day program, but they ghost us."',
      color: 'from-purple-500 to-pink-600',
      before: [
        '₹40,000/month',
        'Generic homepage, inconsistent sign-ups',
      ],
      implemented: [
        'Focused funnel for "21-Day Transformation Challenge"',
        'AI-built landing page with clear transformation, proof, FAQs',
        '5 high-converting ad creatives (pain, proof, limited seats, etc.)',
        'Email + WhatsApp automation tied to batch start dates',
      ],
      outcomes: [
        { label: 'COST PER CUSTOMER', value: '₹1,800 → ₹1,050', change: '-₹750' },
        { label: 'SIGN UPS', value: '22 → 35/month', change: '+13/month' },
        { label: 'REVENUE', value: '₹78,000+ extra/month' },
      ],
      investment: '~₹25,000–₹30,000',
    },
    {
      location: 'Remote',
      business: 'B2B Consultant (High-Ticket)',
      quote: '"Lots of people read my content. Very few book calls."',
      color: 'from-green-500 to-emerald-600',
      before: [
        'LinkedIn + content',
        '3–4 discovery calls/month',
      ],
      implemented: [
        'New "Flagship Offer" landing page with clear outcome & proof',
        'Short "mini-diagnosis" form to pre-qualify serious buyers',
        '4-email AI-generated nurture sequence adapted to founder\'s voice',
        'Calendar + reminder automation for no-show reduction',
      ],
      outcomes: [
        { label: 'CONVERSION RATE', value: '0.9% → 3.5%', change: '+2.6%' },
        { label: 'CALLS', value: '3–4 → 8–10 calls/month', change: '+5-6/month' },
        { label: 'DEALS', value: '3 → 9 deals/quarter', change: '+6/quarter' },
      ],
      investment: '$500–$750 equivalent',
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What This Looks Like for Real Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These are representative examples of how this system plays out. Numbers are rounded, but the
            patterns are exactly what we aim for.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Side - Business Info */}
                <div className={`lg:col-span-1 bg-gradient-to-br ${study.color} p-8 text-white`}>
                  <div className="flex items-center gap-2 text-sm mb-4 opacity-90">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {study.location}
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{study.business}</h3>

                  <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-6">
                    <p className="italic">{study.quote}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Before:</h4>
                    <ul className="space-y-2">
                      {study.before.map((item, idx) => (
                        <li key={idx} className="text-sm opacity-95">• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Middle - What We Did */}
                <div className="lg:col-span-1 p-8">
                  <h4 className="font-bold text-gray-900 mb-4">What we implemented:</h4>
                  <ol className="space-y-4">
                    {study.implemented.map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                          {idx + 1}
                        </span>
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Right - Results */}
                <div className="lg:col-span-1 p-8 bg-green-50">
                  <div className="flex items-center gap-2 text-green-700 font-bold mb-6">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    90-Day Outcome:
                  </div>

                  <div className="space-y-4">
                    {study.outcomes.map((outcome, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-2xl font-bold text-green-600 mb-1">{outcome.value}</div>
                        <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{outcome.label}</div>
                        {outcome.change && (
                          <div className="text-xs text-green-700 mt-1">{outcome.change}</div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-green-200">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Project investment:</span> {study.investment}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center">
          <p className="text-2xl text-white font-semibold mb-6">
            📞 See what this would look like in your numbers
          </p>
          <button
            onClick={onOpenModal}
            className="bg-white hover:bg-gray-100 text-blue-600 font-bold px-10 py-5 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Book Your Free AI Revenue Call
          </button>
          <p className="text-purple-100 text-sm mt-4">
            We'll quickly estimate what's realistic based on your traffic, prices and current funnel.
          </p>
        </div>
      </div>
    </section>
  );
}
