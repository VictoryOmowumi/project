import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/timeline/Timeline';
import Achievements from './components/achievements/Achievements';
import Testimonials from './components/testimonials/Testimonials';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import DownloadCV from './components/cv/DownloadCV';
import CustomCursor from './components/common/CustomCursor';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <CustomCursor />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Timeline />
      <Achievements />
      <Testimonials />
      <Certifications />
      <Contact />
      <Footer />
      <DownloadCV />
    </div>
  );
}

export default App;