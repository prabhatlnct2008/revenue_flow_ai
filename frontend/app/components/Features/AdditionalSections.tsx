'use client';

import React from 'react';

interface WhyAIProps {
  onOpenModal: () => void;
}

export function WhatYouLack() {
  const lackItems = [
    {
      icon: '⏰',
      title: 'Time to Follow Up',
      description: 'Leads slip through because you\'re too busy running your business',
    },
    {
      icon: '🎯',
      title: 'Consistent Lead Nurturing',
      description: 'Sporadic follow-ups mean lost revenue opportunities',
    },
    {
      icon: '📊',
      title: 'Data-Driven Insights',
      description: 'Making decisions without clear analytics and predictions',
    },
    {
      icon: '🔄',
      title: 'Automated Systems',
      description: 'Manual processes that don\'t scale with your growth',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What Does Your Funnel <span className="text-red-600">Lack?</span>
          </h2>
          <p className="text-base text-gray-600">
            Most businesses lose 60-80% of potential revenue due to these gaps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lackItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-md border-l-4 border-red-500"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyAI({ onOpenModal }: WhyAIProps) {
  const reasons = [
    {
      icon: '💰',
      title: 'Increase Revenue by 40-60%',
      description: 'Stop leaving money on the table with better lead conversion',
    },
    {
      icon: '⚡',
      title: 'Save 20+ Hours Per Week',
      description: 'Automate repetitive tasks and focus on growing your business',
    },
    {
      icon: '🚀',
      title: 'Scale Without Adding Staff',
      description: 'Handle 10x more leads without hiring more people',
    },
    {
      icon: '🎯',
      title: 'Never Miss an Opportunity',
      description: 'AI works 24/7 to capture and nurture every lead',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Why This is a <span className="text-yellow-300">pro AI?</span>
          </h2>
          <p className="text-base text-purple-200">
            The results speak for themselves
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6"
            >
              <div className="text-4xl mb-3">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-sm text-purple-100">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onOpenModal}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            Get Your Free AI Revenue Analysis →
          </button>
        </div>
      </div>
    </section>
  );
}

export function SaveTimeMoney() {
  const savings = [
    {
      metric: '20+',
      unit: 'Hours Saved',
      description: 'Per week on manual follow-ups',
    },
    {
      metric: '60%',
      unit: 'More Revenue',
      description: 'From better lead conversion',
    },
    {
      metric: '24/7',
      unit: 'Always On',
      description: 'Never miss a lead again',
    },
    {
      metric: '90%',
      unit: 'Cost Reduction',
      description: 'Compared to hiring staff',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Save Time And <span className="text-green-600">Money</span>
          </h2>
          <p className="text-base text-gray-600">
            See the tangible impact AI can have on your business
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {savings.map((saving, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <div className="text-4xl font-bold text-green-600 mb-1">
                {saving.metric}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {saving.unit}
              </div>
              <p className="text-xs text-gray-600">{saving.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Book Free Consultation',
      description: 'We analyze your current funnel and identify opportunities',
    },
    {
      number: '2',
      title: 'Custom AI Strategy',
      description: 'Get a personalized plan for your specific business',
    },
    {
      number: '3',
      title: 'Quick Implementation',
      description: 'We set up and integrate AI into your existing systems',
    },
    {
      number: '4',
      title: 'Start Generating Revenue',
      description: 'Watch as AI captures and converts more leads automatically',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            How Does <span className="text-purple-600">This Work?</span>
          </h2>
          <p className="text-base text-gray-600">
            Get started in 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="relative bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
