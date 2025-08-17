import { motion } from "framer-motion";
import { Music, Flame, Crown, Trophy } from "lucide-react";

export const FloatingElements = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-20 left-10 text-yellow-400 opacity-30"
        animate={{ y: [0, -30, 0], rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Music size={50} />
      </motion.div>
      <motion.div
        className="absolute top-40 right-20 text-orange-400 opacity-30"
        animate={{ y: [0, 25, 0], rotate: [0, -20, 20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Flame size={45} />
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-20 text-pink-400 opacity-30"
        animate={{ y: [0, -20, 0], rotate: [0, 25, -25, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Crown size={40} />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-10 text-purple-400 opacity-30"
        animate={{ y: [0, -35, 0], rotate: [0, 30, -30, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Trophy size={55} />
      </motion.div>
    </div>
);