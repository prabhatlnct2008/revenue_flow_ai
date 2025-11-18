'use client';

import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';

export default function ExitIntent() {
  const [showModal, setShowModal] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if we've already shown the exit intent modal in this session
    const exitIntentShown = sessionStorage.getItem('exitIntentShown');
    if (exitIntentShown) {
      setHasShown(true);
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse is leaving from the top of the viewport
      if (e.clientY <= 0 && !hasShown && !exitIntentShown) {
        setShowModal(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    // Add event listener for mouse movement
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  return (
    <Modal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      title="Wait! Don't Miss This Opportunity"
    />
  );
}
