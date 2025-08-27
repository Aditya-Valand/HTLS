import { motion } from 'framer-motion';
import { MapPin, Gem } from 'lucide-react';

// Centralized venue information for easy updates
const venueDetails = {
    name: "Shree Banquet",
    address: "Mavdi Main Road, Pal, Rajkot, Gujarat 360004",
    description: "Step into a world of elegance. The stunning architecture and regal ambiance of Shree Banquet provide the perfect backdrop for an unforgettable day of celebration, music, and memories.",
    mapSrc: "http://googleusercontent.com/maps.google.com/3https://maps.google.com/?cid=18200363022388710575&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ"
};

export function Venue() {
    return (
        <motion.section
            id="venue"
            className="py-20 bg-gradient-to-r from-gray-900/60 to-black/60 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                        The Royal Venue
                    </h2>
                    <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                        Experience a night of grandeur at a truly spectacular location.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6 flex items-center gap-4">
                            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                                <Gem size={50} className="text-yellow-400" />
                            </motion.div>
                            {venueDetails.name}
                        </h3>
                        <p className="text-lg md:text-xl mb-6 text-gray-300 font-medium flex items-start gap-2">
                            <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-yellow-500" />
                            <span>{venueDetails.address}</span>
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            {venueDetails.description}
                        </p>
                    </motion.div>

                    <motion.div
                        className="h-96 rounded-3xl overflow-hidden border-2 border-yellow-400/40 shadow-2xl shadow-yellow-400/30"
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(255, 215, 0, 0.5)" }}
                    >
                       <iframe
  src="https://www.google.com/maps?q=Shree+Banquet,+Mavdi+Main+Road,+Rajkot&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title={`${venueDetails.name} Location`}
/>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}