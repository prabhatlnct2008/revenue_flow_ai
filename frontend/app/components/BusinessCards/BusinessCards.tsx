'use client';

import React from 'react';

interface BusinessCard {
  color: string;
  gradient: string;
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

const businesses: BusinessCard[] = [
  {
    color: 'blue',
    gradient: 'from-cyan-400 to-blue-500',
    icon: '🏥',
    title: 'Healthcare & Dental Clinics',
    description: 'Turn appointment requests into confirmed bookings automatically',
    benefits: [
      'Automated appointment scheduling',
      'Patient follow-up sequences',
      'Review request automation',
      'Insurance verification support',
    ],
  },
  {
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500',
    icon: '💪',
    title: 'Fitness Studios & Gyms',
    description: 'Convert trial members into long-term subscribers',
    benefits: [
      'Automated trial follow-ups',
      'Membership renewal reminders',
      'Class booking automation',
      'Personalized workout recommendations',
    ],
  },
  {
    color: 'green',
    gradient: 'from-green-400 to-emerald-500',
    icon: '🏠',
    title: 'Real Estate Agencies',
    description: 'Never miss a property inquiry or showing request',
    benefits: [
      'Lead qualification automation',
      'Property matching AI',
      'Showing schedule optimization',
      'Follow-up automation',
    ],
  },
  {
    color: 'orange',
    gradient: 'from-orange-400 to-red-500',
    icon: '🍽️',
    title: 'Restaurants & Cafes',
    description: 'Fill tables and increase repeat customers',
    benefits: [
      'Reservation management',
      'Waitlist automation',
      'Special offers to regulars',
      'Review management',
    ],
  },
  {
    color: 'indigo',
    gradient: 'from-indigo-500 to-purple-600',
    icon: '💼',
    title: 'Professional Services',
    description: 'Convert consultations into retained clients',
    benefits: [
      'Consultation scheduling',
      'Client onboarding automation',
      'Follow-up sequences',
      'Proposal automation',
    ],
  },
  {
    color: 'teal',
    gradient: 'from-teal-400 to-cyan-500',
    icon: '✂️',
    title: 'Salons & Spas',
    description: 'Keep your schedule full with recurring appointments',
    benefits: [
      'Appointment reminders',
      'Rebooking automation',
      'Special offer promotions',
      'Customer loyalty programs',
    ],
  },
];

export default function BusinessCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What This Looks Like for{' '}
            <span className="text-purple-600">Real Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how AI-powered revenue flows work across different industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((business, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${business.gradient} opacity-90`}></div>

              {/* Content */}
              <div className="relative p-8 text-white h-full flex flex-col">
                <div className="text-6xl mb-4">{business.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{business.title}</h3>
                <p className="text-white text-opacity-90 mb-6 flex-grow">
                  {business.description}
                </p>

                {/* Benefits list */}
                <ul className="space-y-2">
                  {business.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
