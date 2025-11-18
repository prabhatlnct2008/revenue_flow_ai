'use client';

import React from 'react';

const features = [
  {
    icon: '📊',
    title: 'Lead Scoring & Qualification',
    description: 'AI analyzes and scores leads automatically, prioritizing the most valuable prospects',
  },
  {
    icon: '🤖',
    title: '24/7 Automated Follow-ups',
    description: 'Never miss a lead with intelligent automated follow-up sequences',
  },
  {
    icon: '💬',
    title: 'Personalized Messaging',
    description: 'AI crafts personalized messages based on customer behavior and preferences',
  },
  {
    icon: '📈',
    title: 'Predictive Analytics',
    description: 'Forecast revenue and identify opportunities before your competitors',
  },
  {
    icon: '⚡',
    title: 'Instant Responses',
    description: 'AI-powered chatbots provide instant answers to customer inquiries',
  },
  {
    icon: '🎯',
    title: 'Smart Targeting',
    description: 'Reach the right audience at the right time with AI-driven targeting',
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What May Be On Your <span className="text-indigo-600">Funnel?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
