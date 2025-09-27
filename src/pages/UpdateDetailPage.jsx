// src/pages/UpdateDetailPage.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, MapPin, Tag } from 'lucide-react';
import { allUpdatesData } from '../data/events.js'; // Import data from the shared file

export function UpdateDetailPage() {
  const { id } = useParams();
  const [eventData, setEventData] = useState(null);
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 500], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    // Find the event data based on the ID from the URL
    const data = allUpdatesData.find(event => event.id.toString() === id);
    setEventData(data);
    window.scrollTo(0, 0);
  }, [id]);

  if (!eventData) {
    return <div className="min-h-screen flex items-center justify-center">Loading event...</div>;
  }

  return (
    <div className="bg-background text-foreground">
      {/* Immersive Parallax Hero Banner */}
      <motion.div style={{ opacity: heroOpacity }} className="h-[70vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <motion.img 
          src={eventData.imageUrl} 
          alt={eventData.title} 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ y: heroImageY }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent z-10" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center text-center relative z-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <span className="text-primary font-semibold uppercase tracking-widest">{eventData.type}</span>
            <h1 className="font-silkscreen text-4xl md:text-7xl uppercase tracking-widest text-white mt-4">
              {eventData.title}
            </h1>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Main Content with Glass UI Panel */}
      <div className="container mx-auto px-4 -mt-24 relative z-20 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-secondary/50 backdrop-blur-xl border border-border/50 p-6 md:p-10 shadow-2xl shadow-black/30"
        >
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            
            {/* Sticky Sidebar Nav (placeholder for future implementation if needed) */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-28">
                <nav className="flex flex-col gap-2">
                  <a href="#overview" className="font-semibold text-foreground hover:text-primary transition-colors">Overview</a>
                  <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</a>
                </nav>
              </div>
            </aside>

            {/* Page Content */}
            <main className="lg:col-span-9">
              <section id="overview" className="mb-16">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-12">
                    {/* Key Info Cards */}
                </div>
                <h2 className="text-3xl font-bold mb-4">About the Event</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{eventData.description}</p>
              </section>

              <section id="gallery">
                <h2 className="text-3xl font-bold mb-8">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {eventData.gallery.map((img, index) => (
                    <motion.div 
                      key={index} 
                      className="overflow-hidden rounded-xl aspect-video"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <img src={img} alt={`Event gallery image ${index + 1}`} className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
              </section>
            </main>
          </div>
        </motion.div>
      </div>
    </div>
  );
}