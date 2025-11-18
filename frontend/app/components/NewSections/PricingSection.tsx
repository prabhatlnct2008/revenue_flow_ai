'use client';

import React from 'react';

interface PricingSectionProps {
  onOpenModal: () => void;
}

export default function PricingSection({ onOpenModal }: PricingSectionProps) {
  const plans = [
    {
      name: 'Funnel Fix',
      subtitle: 'Single Offer',
      price: 'from ₹20,000',
      description: 'For one core service or campaign.',
      features: [
        'AI funnel audit (page + ads + follow-up)',
        '1 high-converting landing page (copy + structure)',
        '3–5 ad variations',
        '1 main follow-up sequence (email or WhatsApp)',
      ],
      buttonText: 'Get Started',
      buttonStyle: 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600',
      popular: false,
      icon: '✨',
    },
    {
      name: 'Growth + Automation Bundle',
      subtitle: 'Multiple Channels',
      price: '₹40,000–₹60,000',
      priceNote: '(depends on number of offers and tools)',
      description: 'For businesses with multiple leads and channels.',
      features: [
        'Everything in Funnel Fix',
        'Additional nurture sequence (email + WhatsApp)',
        '1–2 simple automations (FAQs, reminders, lead tagging)',
        '4–6 weeks of optimisation & tweaks',
      ],
      buttonText: 'Get Started',
      buttonStyle: 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700',
      popular: true,
      icon: '⚡',
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Does This Cost?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every business is different, but most of our implementation projects fall into these
            bands:
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                plan.popular ? 'border-4 border-purple-500' : 'border-2 border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-6 right-6">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card Content */}
              <div className="p-8">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.buttonStyle.split(' ')[0].replace('bg-gradient-to-r', 'bg-gradient-to-br')} rounded-2xl text-4xl mb-6`}>
                  {plan.icon}
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.subtitle}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                  {plan.priceNote && (
                    <p className="text-sm text-gray-500 mt-1">{plan.priceNote}</p>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6">{plan.description}</p>

                {/* Includes */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Includes:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <button
                  onClick={onOpenModal}
                  className={`w-full ${plan.buttonStyle} text-white font-semibold py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-8">
          <p className="text-center text-lg text-gray-900 mb-6">
            We'll confirm what makes sense for you on the free call. If we don't think we can generate a solid return, we'll say so.
          </p>
          <div className="text-center">
            <button
              onClick={onOpenModal}
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-blue-600 font-semibold px-8 py-4 rounded-xl text-lg border-2 border-blue-300 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              📞 Talk through pricing & ROI on your AI Revenue Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
