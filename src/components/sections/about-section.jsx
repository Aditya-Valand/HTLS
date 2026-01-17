import { motion } from 'framer-motion';
import { Trophy, Flag, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      ease: 'easeOut',
      duration: 0.5
    }
  })
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-border/50">
      <div className="container mx-auto px-4 text-center">
        {/* === Part 1: Headline === */}
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="font-silkscreen text-5xl md:text-5xl uppercase font-pixel tracking-widest mb-12"
        >
          Who Are We?
        </motion.h2>

        {/* === Part 2: Central Graphic === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-md mx-auto mb-16"
        >
          {/* !!! IMPORTANT !!!
            REPLACE THIS DIV WITH YOUR OWN IMAGE/GRAPHIC
            For example: <img src="/path/to/your/graphic.png" alt="HxTLS DAO Graphic" />
          */}
          <div className="relative aspect-square w-full flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,124,240,0.2),transparent_60%)] animate-pulse"></div>
            <div className="absolute h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgODAwIj48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjMsMzcsNjQsMC4yKSIgc3Ryb2tlLXdpZHRoPSIxIiBkPSJNNTAgM2w0NDggNDQ4TTUwIDc5N2w0NDgtNDQ4TTM1MCAzbDQ0OC00NDhNMzUwIDc5N2wtNDQ4LTQ0OCIvPjwvc3ZnPg==')]" style={{ maskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 80%)' }}></div>
            <p className="font-silkscreen text-6xl text-primary z-10">DAO</p>
          </div>
        </motion.div>

        {/* === Part 3: Description Paragraph === */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl font-hero  mx-auto text-muted-foreground text-lg mb-20 text-balance tracking-wide"
        >
          HxTLS is a social community that connects everyone on Web3 in India in a contextually meaningful way. The community provides opportunity for individuals in the Web3 space to connect and uplift each and every member. With an objective to setup a Web3 ecosystem in India to provide education and networking opportunities to members to build, grow, and scale Web3.
        </motion.p>
        
        {/* === Part 4: Mission, Vision, Goals === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 h-full bg-secondary/50 backdrop-blur-sm border border-white/10 shadow-xl shadow-black/25 hover:border-white/20 transition-all duration-300 group hover:scale-105">
            <motion.div custom={0} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
              <div className="bg-secondary/30 p-8 rounded-lg h-full">
                <div className="inline-block p-4 bg-secondary rounded-xl mb-4">
                  <Trophy className="h-8 w-8 text-primary"/>
                </div>
                <h3 className="text-2xl font-bold mb-2">Mission</h3>
                <p className="text-muted-foreground font-hero">Democratize Web3 knowledge, resources & accessibility and build India's largest Web3 community.</p>
              </div>
            </motion.div>
          </Card>

          <Card className="p-8 h-full bg-secondary/50 backdrop-blur-sm border border-white/10 shadow-xl shadow-black/25 hover:border-white/20 transition-all duration-300 group hover:scale-105">
            <motion.div custom={1} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
              <div className="bg-secondary/30 p-8 rounded-lg h-full">
                <div className="inline-block p-4 bg-secondary rounded-xl mb-4">
                  <Flag className="h-8 w-8 text-primary"/>
                </div>
                <h3 className="text-2xl font-bold mb-2">Vision</h3>
                <p className="text-muted-foreground font-hero">To provide education, job & networking opportunities to enthusiasts to build, grow and scale in Web3.</p>
              </div>
            </motion.div>
          </Card>

          <Card className="p-8 h-full bg-secondary/50 backdrop-blur-sm border border-white/10 shadow-xl shadow-black/25 hover:border-white/20 transition-all duration-300 group hover:scale-105">
            <motion.div custom={2} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
              <div className="bg-secondary/30 p-8 rounded-lg h-full">
                <div className="inline-block p-4 bg-secondary rounded-xl mb-4">
                  <Target className="h-8 w-8 text-primary"/>
                </div>
                <h3 className="text-2xl font-bold mb-2">Goals</h3>
                <p className="text-muted-foreground  font-hero">To make India a global Web3 hub.</p>
              </div>
            </motion.div>
          </Card>
        </div>
      </div>
    </section>
  );
}