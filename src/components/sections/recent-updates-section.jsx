import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allUpdatesData } from '../../data/events.js';
import event1 from "../../assets/E1.png"
import event2 from "../../assets/event2.jpg"

const updatesData = [
  {
    id: 1,
    imageUrl: event1,
    date: '3 jun, 2025',
    title: 'Web3 Into Reality',
    description: 'A deep-dive workshop session at the Govt College of Engineering.',
    category: 'workshop'
  },
  {
    id: 2, // Make sure IDs are unique
    imageUrl: event2,
    date: '10 Aug, 2025',
    title: 'Decentralized Future Hackathon',
    description: 'A 24-hour hackathon focused on building innovative dApps and solutions.',
    category: 'hackathon'
  },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
    
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export function RecentUpdatesSection() {
  return (
    <section id="updates" className="py-24 sm:py-32 border-t border-border/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-silkscreen gradient-text mb-4 tracking-widest uppercase">
            Recent Updates
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with the latest happenings in the HxTLS DAO ecosystem.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {updatesData.map((update) => (
            <motion.div
              key={update.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <Link to={`/update/${update.id}`}>
                   <div className="bg-secondary/50 backdrop-blur-sm border border-white/10 shadow-xl shadow-black/25 hover:border-white/20 transition-all duration-300 group-hover:scale-105 rounded-2xl overflow-hidden flex flex-col w-full">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={update.imageUrl}
                      alt={update.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">
                      {update.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                      {update.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2 leading-relaxed flex-grow">
                      {update.description}
                    </p>
                    <div className="text-sm text-muted-foreground/70 mb-4 flex items-center">
                      <Calendar className="h-4 w-4 mr-2" /> {update.date}
                    </div>
                    <div className="inline-flex items-center gap-2 text-primary font-medium group/link transition-colors duration-300 mt-auto">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            View All Updates
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}