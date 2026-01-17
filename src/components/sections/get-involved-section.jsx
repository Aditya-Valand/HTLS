import { motion } from "framer-motion";
import { Mail, ArrowRight, Mic, Users, Twitter, Sparkles } from "lucide-react";
import { Button } from "../../components/ui/button";

// Reusable Grid Item - UPDATED with new default and hover styles
const GridItem = ({ children, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={`group relative overflow-hidden rounded-3xl p-[1px] bg-gradient-to-br from-[hsl(var(--crypto-primary))] via-border to-border ${className}`}
  >
    <div
      className={`relative h-full rounded-[23px] p-8 flex flex-col bg-secondary/80 backdrop-blur-xl border-0 transition-all duration-300`}
    >
      {/* --- NEW: Inner glow is now visible by default --- */}
      <div className="absolute inset-0 rounded-3xl opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[hsl(var(--crypto-primary))]/10 via-transparent to-[hsl(var(--crypto-secondary))]/10" />
      
      {/* --- NEW: Added a more intense glow that appears on hover --- */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.15),transparent_40%)]" />

      <div className="relative z-10 flex flex-col h-full">{children}</div>
    </div>
  </motion.div>
);

export function GetInvolvedSection() {
  return (
    <section id="get-involved" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 crypto-grid opacity-30" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[hsl(var(--crypto-primary))]/10 to-[hsl(var(--crypto-secondary))]/10 rounded-full blur-xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-[hsl(var(--crypto-accent))]/10 to-[hsl(var(--crypto-primary))]/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="h-8 w-8 text-[hsl(var(--crypto-primary))]" />
            <h2 className="font-silkscreen text-4xl md:text-5xl uppercase tracking-widest">
              Get Involved
            </h2>
            <Sparkles className="h-8 w-8 text-[hsl(var(--crypto-secondary))]" />
          </div>
          <p className="text-muted-foreground text-xl leading-relaxed">
            HxTLS is driven by its community. Here's how you can be a part of our journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GridItem className="md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10">
                <Mic className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="text-3xl font-bold">Volunteer With Us</h3>
            </div>
            <p className="text-muted-foreground text-lg mb-6 flex-grow">
              Help us shape the future of Web3 in India. We're looking for passionate individuals to help with events, content, and more.
            </p>
            <Button size="lg" className="w-fit group mt-auto bg-gradient-to-r from-primary to-cyan-400 text-white border-0">
              Opening Soon... 
            </Button>
          </GridItem>

          <GridItem>
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="p-3 w-fit rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 mb-4">
              <Users className="h-8 w-8 text-secondary-foreground" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-2">Join The Community</h3>
            <p className="text-muted-foreground mb-6 flex-grow">
              Connect with thousands of builders, creators, and enthusiasts.
            </p>
            
            <a href="https://www.instagram.com/hxtls_dao" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-fit group mt-auto">
                Join Community
              </Button>
            </a>
          </GridItem>
          
          <GridItem>
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="p-3 w-fit rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 mb-4">
              <Twitter className="h-8 w-8 text-secondary-foreground" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-2">Follow The Journey</h3>
            <p className="text-muted-foreground mb-6 flex-grow">
              Stay updated with our latest announcements.
            </p>
            <a href="https://twitter.com/hxtlsdao" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="w-fit mt-auto">Follow on Twitter</Button>
            </a>
          </GridItem>

          <GridItem className="md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10">
                <Mail className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="text-3xl font-bold">Contact Us</h3>
            </div>
            <p className="text-muted-foreground text-lg mb-6 flex-grow">
              Have a question, partnership proposal, or just want to say hi? We'd love to hear from you.
            </p>
            <a
              href="mailto:admin@hxtls.com"
              className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:text-cyan-400 transition-colors duration-200 group mt-auto"
            >
              adminhxtls@gmail.com
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </GridItem>
        </div>
      </div>
    </section>
  )
}