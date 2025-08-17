import { motion } from 'framer-motion';
import { TicketPercent } from 'lucide-react';

export function StickyBanner() {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black text-center p-2 sm:p-3 font-bold shadow-lg flex items-center justify-center gap-2"
    >
      <TicketPercent className="h-5 w-5 flex-shrink-0" />
      <span className="text-xs sm:text-base">
        Early Bird Offer! First 102 students get 10% OFF! Grab your ticket now!
      </span>
    </motion.div>
  );
}