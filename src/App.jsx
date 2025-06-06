import React from 'react';
import './index.css';
import HeroSection from './components/HeroSection';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import Events from './components/Events';
import Recognition from './components/Recognition';
import CampusLife from './components/CampusLife';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Helmet } from 'react-helmet';
import HeaderTop from './components/HeaderTop';
import WhatsAppButton from './components/WhatsAppButton';
import CallButton from './components/CallButton';
import InstagramPostGrid from './components/InstagramPostGrid';
import AchievementSection from './components/AchievementSection';


function App() {
  return (
    <div className="App">
      <Helmet>
        <title>BAMS Admission 2025 – Naiminath Ayurvedic Medical College, Agra</title>
        <meta
          name="description"
          content="Apply for BAMS Admission 2025 at Naiminath Ayurvedic Medical College, Agra. 100% approved by NCISM, Ministry of AYUSH. Hostel, labs, and expert faculty available."
        />
      </Helmet>
      <HeaderTop/>
      <Navbar />
      <HeroSection />
      <About />
      <WhyChoose />
      <Events />
      <CampusLife />
       <AchievementSection/>
      <Testimonials />
      <Recognition />
      <InstagramPostGrid/>
      <CallButton/>
      <WhatsAppButton/>
      <Footer />
      
    </div>
  );
}

export default App;
