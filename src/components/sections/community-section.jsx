// src/components/sections/community-section.jsx
import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";

export function CommunitySection() {
  return (
    <section id="community" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-secondary/50 rounded-2xl p-8 md:p-16 text-center border border-dashed border-primary/30"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-pixel mb-4">Join The Movement</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Become part of India's most vibrant Web3 community. Whether you're a developer, a creator, or just starting, your journey begins here.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 shadow-[0_0_20px_rgba(0,124,240,0.4)] hover:shadow-[0_0_30px_rgba(0,124,240,0.6)] transition-shadow">
            Get Involved Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}