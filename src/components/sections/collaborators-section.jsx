import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';
import sponsor from '../../assets/img6.png';
// In the future, you can add more logos to this array
const collaborators = [
  { 
    name: 'MEXC Foundation', 
    // It's best to add the logo to your `public` folder and link it like `/mexc-logo.svg`
    // For now, I'm using a placeholder direct link to their logo.
    logoUrl: sponsor, 
    href: 'https://www.mexc.com/' // Link to their website
  }
];

export function CollaboratorsSection() {
  return (
    <section id="collaborators" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-silkscreen uppercase tracking-widest mb-4">
            Our Collaborators
          </h2>
          <p className="text-lg text-muted-foreground">
            We are proud to partner with leading organizations in the Web3 ecosystem to bring our vision to life.
          </p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <a href={collaborators[0].href} target="_blank" rel="noopener noreferrer" className="block max-w-lg mx-auto group">
            <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-primary/50 via-border to-border hover:from-primary hover:to-cyan-400 transition-all duration-300">
              <div className="bg-secondary/80 backdrop-blur-md h-full w-full rounded-[15px] p-8 flex flex-col items-center justify-center text-center">
                <img 
                  src={collaborators[0].logoUrl} 
                  alt={`${collaborators[0].name} Logo`}
                  className="h-12 w-auto invert brightness-0 dark:invert-0 dark:brightness-100 transition-all duration-300"
                />
                
                
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}