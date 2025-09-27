import { motion } from 'framer-motion';

// A custom button component for the special gradient style
const GradientButton = ({ children }) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#007cf0_0%,#00dfd8_50%,#007cf0_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-8 py-1 text-sm font-medium text-foreground backdrop-blur-3xl group-hover:bg-background/80 transition-all duration-200">
        {children}
      </span>
    </button>
  );
};

export function VolunteerSection() {
  return (
    <section id="volunteer" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjMsMzcsNjQsMC4xKSI+PHBhdGggZD0iTTAgLjUgMzIgLjVNMCA4LjUgMzIgOC41TTAgMTYuNSAzMiAxNi41TTAgMjQuNSAzMiAyNC41TS41IDAgLjUgMzJNOS41IDAgOS41IDMyTTE3LjUgMCAxNy41IDMyTTI1LjUgMCAyNS41IDMyIiAvPjwvc3ZnPg==')]"
          style={{ maskImage: 'linear-gradient(to_bottom, transparent, black 20%, black 80%, transparent)' }}
        ></div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <h2 className="font-pixel text-4xl uppercase tracking-widest text-foreground mb-6">
          Volunteer With Us
        </h2>
        <p className="max-w-xl mx-auto text-muted-foreground text-lg mb-10 text-balance">
          We are growing and are always on the hunt for volunteers to help us make our vision reality. We'll help you find a role best suited to your skillset!
        </p>
        
        <GradientButton>Apply</GradientButton>
      </motion.div>
    </section>
  );
}