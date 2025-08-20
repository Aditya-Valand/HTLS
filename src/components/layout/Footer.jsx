import { motion } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react"; // Using MessageCircle for WhatsApp

export function Footer() {
  // --- IMPORTANT ---
  // Replace these placeholder URLs with your actual links
  const instagramUrl = "https://www.instagram.com/hungama.x.tls2k25/";
  const whatsappUrl = "https://chat.whatsapp.com/JoYSKW9d9nc2zplrnRJx2s?mode=ac_t";
  const personalInstagramUrl = "https://www.instagram.com/aditya_a4555/";

  return (
    <footer className="py-16 text-center border-t border-yellow-400/30 bg-gradient-to-r from-gray-900/60 to-black/60 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <motion.p
          className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Hungama x The Last Submission 2K25
        </motion.p>
        <p className="text-gray-400 text-lg mb-8">An initiative by the students of GECR</p>

        {/* Social Media Links */}
        <motion.div
          className="flex justify-center items-center space-x-6 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Instagram className="h-8 w-8" />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <MessageCircle className="h-8 w-8" />
            <span className="sr-only">WhatsApp Group</span>
          </a>
        </motion.div>

        <motion.p
          className="mt-4 text-sm text-gray-500"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Crafted with passion by the innovators of GECR ✨
        </motion.p>
        <div className="mt-12 border-t border-gray-700/50 pt-8">
            <a
                href={personalInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-yellow-400 transition-colors duration-300 text-sm inline-flex items-center space-x-2"
            >
                <span>Made by Aditya Valand</span>
                <Instagram className="h-4 w-4" />
            </a>
        </div>
      </div>
    </footer>
  );
}
