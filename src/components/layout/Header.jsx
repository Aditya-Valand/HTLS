import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for the mobile menu

// An array to hold navigation items for clean mapping
const navItems = [
  { name: "Activities", href: "#activities" },
  { name: "Venue", href: "#venue" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "FAQ", href: "#faq" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 mt-[48px] backdrop-blur-xl bg-black/30 border-b border-yellow-400/30"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* --- LOGO --- */}
          <motion.div whileHover={{ scale: 1.1, rotate: 2 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <img src="/finallogo.png" alt="HTLS 2025 Logo" className="h-16" />
            </Link>
          </motion.div>

          {/* --- DESKTOP NAVIGATION (Hidden on Mobile) --- */}
          <div className="hidden md:flex items-center space-x-8 text-xl">
            {navItems.map((item) => (
              <motion.a key={item.name} href={item.href} className="hover:text-yellow-400 transition-colors duration-300 relative font-medium" whileHover={{ y: -3 }}>
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* --- DESKTOP ACTION BUTTONS (Hidden on Mobile) --- */}
          <div className="hidden md:flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/djparty" className="text-purple-300 border border-purple-400/50 font-bold py-3 px-6 rounded-full hover:bg-purple-500/20 hover:text-white transition-all duration-300">
                DJ Party Access
              </Link>
            </motion.div>
            <motion.a href="#tickets" className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black font-bold py-3 px-8 rounded-full shadow-lg" whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255, 215, 0, 0.6)" }} whileTap={{ scale: 0.95 }}>
              Get Tickets
            </motion.a>
          </div>

          {/* --- MOBILE HAMBURGER BUTTON (Visible on Mobile) --- */}
          <div className="md:hidden">
            <motion.button onClick={() => setIsMenuOpen(!isMenuOpen)} whileTap={{ scale: 0.9 }}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-30 pt-32 pb-8 bg-black/80 backdrop-blur-2xl md:hidden"
          >
            <div className="container mx-auto px-6 flex flex-col items-center gap-y-6 text-center">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold hover:text-yellow-400 transition-colors">
                  {item.name}
                </a>
              ))}
              <hr className="w-1/2 border-gray-700 my-2" />
              <Link to="/djparty" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-purple-300 hover:text-purple-200 transition-colors">
                DJ Party Access
              </Link>
              <a href="#tickets" onClick={() => setIsMenuOpen(false)} className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 px-10 rounded-full text-lg w-full mt-4">
                Get Tickets
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}