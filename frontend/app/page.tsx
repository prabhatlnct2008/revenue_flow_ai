'use client';

import React, { useState } from 'react';
import Hero from './components/Hero/Hero';
import ProblemSection from './components/NewSections/ProblemSection';
import ServicesSection from './components/NewSections/ServicesSection';
import CaseStudiesSection from './components/NewSections/CaseStudiesSection';
import QualificationSection from './components/NewSections/QualificationSection';
import ProcessSection from './components/NewSections/ProcessSection';
import PricingSection from './components/NewSections/PricingSection';
import LeadForm from './components/LeadForm/LeadForm';
import Modal from './components/Modal/Modal';
import ExitIntent from './components/ExitIntent/ExitIntent';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Segment 1: Hero Section */}
      <Hero
        onOpenModal={() => setIsModalOpen(true)}
        onOpenEmailModal={() => setIsEmailModalOpen(true)}
      />

      {/* Segments 2-3: Problem Section */}
      <ProblemSection onOpenModal={() => setIsModalOpen(true)} />

      {/* Segments 4-5: Services/What We Do */}
      <ServicesSection onOpenModal={() => setIsModalOpen(true)} />

      {/* Segments 6-8: Case Studies */}
      <CaseStudiesSection onOpenModal={() => setIsModalOpen(true)} />

      {/* Segment 9: Qualification - Who This Is For */}
      <QualificationSection onOpenModal={() => setIsModalOpen(true)} />

      {/* Segments 10-11: Process Timeline */}
      <ProcessSection onOpenModal={() => setIsModalOpen(true)} />

      {/* Segments 12-13: Pricing */}
      <PricingSection onOpenModal={() => setIsModalOpen(true)} />

      {/* Segments 14-15: Final Lead Form Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-indigo-600 via-purple-700 to-purple-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Final Step
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Book Your Free AI Revenue Call
            </h2>
            <p className="text-lg text-purple-100">
              In 30 minutes, we'll:
            </p>
          </div>

          <LeadForm />
        </div>
      </section>

      {/* Modal for Call Booking */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Modal for Email (Example Wins) */}
      <Modal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        title="Get 3 Example Wins via Email"
      />

      {/* Exit Intent */}
      <ExitIntent />
    </div>
  );
}
