import { motion } from 'framer-motion';
import { MapPin, Gem } from 'lucide-react'; // Changed icon to Gem for a more royal feel

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
                        Experience a night of grandeur at a truly spectacular heritage location.
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
                            Ratna Vilas Palace
                        </h3>
                        <p className="text-lg md:text-xl mb-6 text-gray-300 font-medium flex items-start gap-2">
                            <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-yellow-500" />
                            <span>Kalavad Rd, near ISKCON temple, Rajkot, Gujarat 360005</span>
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Step into a world of elegance and history. The stunning architecture and regal ambiance of Ratna Vilas Palace provide the perfect backdrop for an unforgettable day of celebration, music, and memories.
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.486799435688!2d70.73311507507026!3d22.26005094406286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb5e4c276145%3A0xace1c96ad715c3e1!2sRATNA%20VILAS%20PALACE!5e0!3m2!1sen!2sin!4v1723928111951!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ratna Vilas Palace Location"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
