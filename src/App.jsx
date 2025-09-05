// src/App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- Layout Components ---
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingElements } from './components/layout/FloatingElements';

// --- UI Components ---
import { ParticleBackground } from './components/ui/ParticleBackground';
import { StickyBanner } from './components/ui/StickyBanner';

// --- Section Components for HomePage ---
import { Hero } from './components/sections/Hero';
import { Countdown } from './components/sections/Countdown';
import { Activities } from './components/sections/Activities';
import { Venue } from './components/sections/Venue';
import { Gallery } from './components/sections/Gallery';
import { Sponsors } from './components/sections/Sponsors';
import { EventHighlights } from './components/sections/EventHighlights';
import { Tickets } from './components/sections/Tickets';
import { FAQ } from './components/sections/FAQ';

// --- Page Components ---
import { DjPartyBooking } from './components/pages/DjPartyBooking';

// This new component groups all your main page sections together
function HomePage() {
  return (
    <>
      <StickyBanner/>
      <Header />
      <main>
          <Hero />
          <Countdown />
          <Activities />
          <Venue />
          <Gallery />
          <Sponsors />
          <EventHighlights />
          <Tickets />
          <FAQ />
      </main>
      <Footer />
    </>
  );
}

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
          {/* These global elements will appear on ALL pages */}
          <motion.div
              className="fixed w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full pointer-events-none z-50 mix-blend-screen opacity-80"
              style={{ left: mousePosition.x - 16, top: mousePosition.y - 16 }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <ParticleBackground />
          <FloatingElements />
          
          {/* The Routes component handles which page to show based on the URL */}
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/djparty" element={<DjPartyBooking />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;