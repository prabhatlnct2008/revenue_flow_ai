'use client';

import React from 'react';

interface ProcessSectionProps {
  onOpenModal: () => void;
}

export default function ProcessSection({ onOpenModal }: ProcessSectionProps) {
  const steps = [
    {
      number: '1',
      title: 'Free AI Revenue Call',
      duration: '30 mins',
      description: 'We look at your current funnel together (website, ads, follow-up). You tell us your numbers and goals. We give you 2–3 concrete ideas on the spot.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '2',
      title: 'AI Revenue Blueprint',
      duration: 'Within a few days',
      description: 'You get a simple, no-fluff document with: Where your funnel is leaking • Which AI-powered fixes we recommend • What we expect to improve (with rough projections) • A clear project scope and fixed price',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: '3',
      title: 'Implementation Sprint',
      duration: '2–4 weeks',
      description: 'If you\'re in, we execute: New/updated landing pages • Ad angles & creatives • Follow-up sequences • Basic automations. You get weekly updates and a clear "before/after" view at the end.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How We Work Together <span className="text-gray-500">(No Jargon)</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-1 h-3/4 bg-gradient-to-b from-blue-200 via-purple-200 to-green-200" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex items-center gap-8`}
              >
                {/* Content */}
                <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white`}>
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      <p className="text-sm text-gray-500">{step.duration}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>

                {/* Number Circle */}
                <div className="flex-shrink-0 relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                    {step.number}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-10 py-5 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            ✅ Start with the free call — decide after you see the plan
          </button>
        </div>
      </div>
    </section>
  );
}
