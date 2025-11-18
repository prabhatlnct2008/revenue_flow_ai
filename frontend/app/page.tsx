'use client';

import React, { useState } from 'react';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import BusinessCards from './components/BusinessCards/BusinessCards';
import { WhatYouLack, WhyAI, SaveTimeMoney, HowItWorks } from './components/Features/AdditionalSections';
import LeadForm from './components/LeadForm/LeadForm';
import Modal from './components/Modal/Modal';
import ExitIntent from './components/ExitIntent/ExitIntent';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero onOpenModal={() => setIsModalOpen(true)} />

      {/* Features Section */}
      <Features />

      {/* What You Lack Section */}
      <WhatYouLack />

      {/* Business Cards Section */}
      <BusinessCards />

      {/* How It Works */}
      <HowItWorks />

      {/* Why AI Section */}
      <WhyAI onOpenModal={() => setIsModalOpen(true)} />

      {/* Save Time and Money */}
      <SaveTimeMoney />

      {/* Final Lead Form Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Transform Your Revenue?
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Book your free AI revenue analysis call now
            </p>
          </div>

          <LeadForm />
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Exit Intent */}
      <ExitIntent />
    </div>
  );
}
