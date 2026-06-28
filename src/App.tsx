import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import DoctorProfile from './components/DoctorProfile';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#ddebf0] font-sans text-[#0a5670] scroll-smooth">
      <Navbar />
      <Hero />
      <Services />
      <DoctorProfile />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
