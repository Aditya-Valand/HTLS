import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-16 text-center border-t border-yellow-400/30 bg-gradient-to-r from-gray-900/60 to-black/60 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <motion.p
          className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Hungama x The Last Submission 2K25
        </motion.p>
        <p className="text-gray-400 text-lg mb-4">An initiative by the students of GECR</p>
        <motion.p
          className="mt-4 text-sm text-gray-500"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Crafted with passion by the innovators of GECR ✨
        </motion.p>
      </div>
    </footer>
  );
}