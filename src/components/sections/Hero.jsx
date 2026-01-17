// src/components/sections/hero-section.jsx
import { Button } from "../../components/ui/button";
import { MessageCircle, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient & Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,rgba(0,124,240,0.15),transparent)]"></div>
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjMsMzcsNjQsMC4xKSI+PHBhdGggZD0iTTAgLjUgMzIgLjVNMCA4LjUgMzIgOC41TTAgMTYuNSAzMiAxNi41TTAgMjQuNSAzMiAyNC41TS41IDAgLjUgMzJNOS41IDAgOS41IDMyTTE3LjUgMCAxNy41IDMyTTI1LjUgMCAyNS41IDMyIiAvPjwvc3ZnPg==')]"
          style={{ maskImage: 'radial-gradient(ellipse 80% 50% at 50% 120%, #000 0%, transparent 100%)' }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-hero mb-6 tracking-tighter">
            Empowering India's Next
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]">
              Web3 Generation
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground  mb-12 max-w-2xl mx-auto">
            A community for the youth of India to learn, build, and connect in the global blockchain ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.instagram.com/hxtls_dao" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-6 shadow-[0_0_20px_rgba(0,124,240,0.4)] hover:shadow-[0_0_30px_rgba(0,124,240,0.6)] transition-shadow">
                <MessageCircle className="mr-2 h-5 w-5" />
                Join our Community
              </Button>
            </a>
            <a href="https://twitter.com/hxtlsdao" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Twitter className="mr-2 h-5 w-5" />
                Follow on Twitter
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}