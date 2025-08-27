import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-09-10T10:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      className="py-20 bg-gradient-to-r from-gray-900/60 to-black/60 backdrop-blur-xl border-y border-yellow-400/20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto text-center px-4">
        <motion.h2
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          The Party Starts In
        </motion.h2>

        <div className="flex justify-center space-x-2 sm:space-x-6 md:space-x-12 mt-8">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <motion.div
              key={unit}
              className="text-center"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-5xl sm:text-6xl md:text-8xl font-black bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent p-2 sm:p-4 rounded-2xl border border-yellow-400/30 backdrop-blur-sm"
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 20px rgba(255, 215, 0, 0.3)",
                    "0 0 40px rgba(255, 215, 0, 0.6)",
                    "0 0 20px rgba(255, 215, 0, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                {String(value).padStart(2, "0")}
              </motion.div>
              <div className="text-sm sm:text-lg md:text-xl mt-4 uppercase tracking-widest text-gray-400 font-semibold">
                {unit}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};