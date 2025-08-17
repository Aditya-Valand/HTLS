import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 mt-[48px] backdrop-blur-xl bg-black/30 border-b border-yellow-400/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        
        {/* --- LOGO WITH ABSOLUTE POSITIONING --- */}
        <motion.div
          className="absolute left-6 top-1/2 -translate-y-1/2"
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src="/finallogo.png" alt="HTLS 2025 Logo" className="h-26" />
        </motion.div>

        {/* This empty div acts as a spacer to push the nav links to the center */}
        <div className="w-16 flex-shrink-0 font-bold md:w-24"></div>

        <div className="hidden text-xl md:flex flex-grow justify-center space-x-8">
          {["Activities", "Venue", "Sponsors", "FAQ"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-yellow-400 transition-all duration-300 relative font-medium"
              whileHover={{ y: -3, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {item}
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>
        <motion.a
          href="#tickets"
          className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black font-bold py-3 px-8 rounded-full shadow-lg shadow-yellow-400/30"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 40px rgba(255, 215, 0, 0.6)",
            rotate: 1,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Get Tickets
        </motion.a>
      </div>
    </motion.nav>
  );
}