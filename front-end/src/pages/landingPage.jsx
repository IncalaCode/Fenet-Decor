import React from 'react';
import Navbar from '../components/ui/Navbar';
import Hero from '../components/section/Hero';
import AboutUs from '../components/section/AboutUs';
import ServicesSection from '../components/section/ServicesSection';
import TestimonialsSection from '../components/section/TestimonialsSection';
import Footer from '../components/ui/Footer';

function landingPage() {
  return (
    <div className="wedding-planner-app">
      <Navbar />
      <Hero />
      <AboutUs />
      <ServicesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default landingPage;
