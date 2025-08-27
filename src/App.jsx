import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Countdown } from './components/sections/Countdown';
import { Activities } from './components/sections/Activities';
import { Venue } from './components/sections/Venue';
import { Sponsors } from './components/sections/Sponsors';
import { Tickets } from './components/sections/Tickets';
import { FAQ } from './components/sections/FAQ';
import { FloatingElements } from './components/layout/FloatingElements';
import { ParticleBackground } from './components/ui/ParticleBackground';
import { StickyBanner } from './components/ui/StickyBanner';
import { Gallery } from './components/sections/Gallery'; // Import the new Gallery component
import { EventHighlights } from './components/sections/EventHighlights';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden"> {/* Removed padding-top */}
        <motion.div
            className="fixed w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full pointer-events-none z-50 mix-blend-screen opacity-80"
            style={{
                left: mousePosition.x - 16,
                top: mousePosition.y - 16,
            }}
            animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
        <ParticleBackground />
        <FloatingElements />
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
    </div>
  );
}

export default App;