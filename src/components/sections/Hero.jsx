import { motion, useScroll, useTransform } from "framer-motion";
import { Users } from "lucide-react"; // Changed icon for relevance

export function Hero() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative pt-40 md:pt-32">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-orange-500/10 to-red-500/10"
        style={{ y: backgroundY }}
      />

      <motion.div
        className="z-10"
        style={{ y: textY }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div className="mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <span className="text-2xl md:text-3xl text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text font-bold tracking-wider">
            Team TLRC Presents
          </span>
        </motion.div>

        <motion.h1
          className="text-7xl md:text-9xl lg:text-[12rem] font-black leading-tight"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
        >
          <motion.span
            className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Hungama
          </motion.span>
          <motion.span
            className="block text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent mt-2"
            animate={{
              rotate: [0, 1, -1, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            x The Last Submission
          </motion.span>
        </motion.h1>

        <motion.h2
          className="text-4xl md:text-6xl font-bold mt-6 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          2K25
        </motion.h2>

        <motion.p
          className="mt-8 text-xl md:text-2xl max-w-4xl mx-auto font-light text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          The most epic celebration in GECR history! A night of unforgettable memories, crazy activities, and pure fun
          for every student.
        </motion.p>
        
        {/* --- UPDATED OFFER TEXT --- */}
        <motion.div 
          className="mt-8 text-lg text-yellow-400 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          Bring Your Crew & Save! Group Discounts Now Live!
        </motion.div>

        <motion.div
          className="mt-6 flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 }}
        >
          {/* --- UPDATED BUTTON --- */}
          <motion.a
            href="#tickets"
            className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black text-xl font-bold py-5 px-12 rounded-full shadow-2xl shadow-yellow-400/40 inline-flex items-center gap-3"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 60px rgba(255, 215, 0, 0.8)",
              rotate: 2,
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 30px rgba(255, 215, 0, 0.4)",
                "0 0 50px rgba(255, 215, 0, 0.7)",
                "0 0 30px rgba(255, 215, 0, 0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Users className="animate-pulse" />
            Get Your Tickets!
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}