'use client';

import React from 'react';

interface ServicesSectionProps {
  onOpenModal: () => void;
}

export default function ServicesSection({ onOpenModal }: ServicesSectionProps) {
  const services = [
    {
      icon: '📄',
      color: 'from-blue-500 to-cyan-500',
      title: 'AI-Redesigned Landing Pages & Offers',
      description: 'We rebuild or create the pages your traffic actually lands on.',
      benefits: [
        'Tight, benefit-driven messaging (built with AI + human editing)',
        'Offers that your best customers want to say yes to',
        'Forms that don\'t scare people away but still qualify intent',
      ],
      outcome: 'More visitors → qualified leads.',
      outcomeColor: 'text-blue-700',
    },
    {
      icon: '🎯',
      color: 'from-pink-500 to-purple-500',
      title: 'Smarter Ads & Targeting Ideas',
      description: 'We strengthen the front door of your funnel.',
      benefits: [
        'New ad angles and hooks generated with AI',
        'Variants for testing (pain, proof, urgency, logic)',
        'Suggestions on targeting/structure that match your funnel',
      ],
      outcome: 'Better click-through and cheaper cost per lead/sale.',
      outcomeColor: 'text-pink-700',
    },
    {
      icon: '💬',
      color: 'from-green-500 to-emerald-500',
      title: 'AI-Assisted Follow-Up & Sales',
      description: 'We stop hot leads from going cold because no one followed up.',
      benefits: [
        'AI-written email + WhatsApp sequences customized to your business',
        'Templates / scripts for your team to use on calls and chats',
        'Simple rules: when to send what, and to whom',
      ],
      outcome: 'More leads actually become customers.',
      outcomeColor: 'text-green-700',
    },
    {
      icon: '⚡',
      color: 'from-orange-500 to-red-500',
      title: 'AI Automation of Repetitive Work',
      description: 'We remove manual grunt work that eats your time.',
      benefits: [
        'Auto-replies for FAQs and "first contact"',
        'Automated reminders and check-ins',
        'Simple dashboards or summaries sent to your inbox',
      ],
      outcome: 'You and your team spend more time closing, less time chasing.',
      outcomeColor: 'text-orange-700',
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What We Do <span className="text-gray-500">(In Plain Language)</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We don't just "build a landing page" or "write some AI copy". We install a{' '}
            <span className="text-blue-600 font-semibold">90-day AI Revenue System</span> on top of your existing marketing.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl text-4xl`}>
                  {service.icon}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              {/* Benefits */}
              <ul className="space-y-3 mb-6">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Outcome */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm font-semibold text-green-700">
                  <span className="text-gray-600">Outcome:</span> {service.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-10 py-5 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            ✅ Want this in your business? Book your AI Revenue Call
          </button>
        </div>
      </div>
    </section>
  );
}
