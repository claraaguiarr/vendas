import React from 'react';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import BookingForm from './components/BookingForm';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="font-sans text-text-dark">
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <AboutSection />
      <BookingForm />
      <FaqSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;