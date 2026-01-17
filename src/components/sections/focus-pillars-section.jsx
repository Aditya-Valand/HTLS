// src/components/sections/focus-pillars-section.jsx
import { motion } from 'framer-motion';
import { BookOpenCheck, Building2, Handshake } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

const pillars = [
  {
    icon: <BookOpenCheck className="h-10 w-10 text-primary" />,
    title: 'Web3 Education',
    description: 'Workshops, bootcamps, blockchain fundamentals, and new tech awareness to empower learners at all levels.'
  },
  {
    icon: <Building2 className="h-10 w-10 text-primary" />,
    title: 'College & University Network',
    description: 'Campus programs, student chapters, hackathons, and faculty collaboration to build the next generation.'
  },
  {
    icon: <Handshake className="h-10 w-10 text-primary" />,
    title: 'Industry Collaboration',
    description: 'Web3 companies sponsoring education, providing tools, events, and career opportunities for growth.'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      ease: 'easeOut',
      duration: 0.5
    }
  })
};

export function FocusPillarsSection() {
  return (
    <section id="focus-pillars" className="py-24 sm:py-32 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300">
              Our Core Vision
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            What We <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Focus On</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three interconnected pillars driving India's Web3 education and innovation ecosystem forward
          </p>
        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-secondary/40 to-secondary/20 backdrop-blur-sm border border-white/10 shadow-xl shadow-black/25 hover:border-white/20 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                    {pillar.icon}
                  </div>
                  <CardTitle className="text-2xl">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
