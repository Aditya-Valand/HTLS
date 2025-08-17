import { motion } from 'framer-motion';

// Set this to true when you have sponsors to show
const showSponsors = false;

const sponsorsData = [
    { name: "TechCorp", logo: "https://placehold.co/120x80/1f2937/eab308?text=TechCorp" },
    { name: "FoodieHub", logo: "https://placehold.co/120x80/1f2937/eab308?text=FoodieHub" },
    { name: "StyleZone", logo: "https://placehold.co/120x80/1f2937/eab308?text=StyleZone" },
    { name: "MusicBox", logo: "https://placehold.co/120x80/1f2937/eab308?text=MusicBox" },
    { name: "EventPro", logo: "https://placehold.co/120x80/1f2937/eab308?text=EventPro" },
    { name: "PhotoMagic", logo: "https://placehold.co/120x80/1f2937/eab308?text=PhotoMagic" },
];

export function Sponsors() {
    return (
        <motion.section
            id="sponsors"
            className="py-20"
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
                        Our Sponsors
                    </h2>
                    <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                        Special thanks to our amazing sponsors who make this event possible
                    </p>
                </motion.div>

                {showSponsors ? (
                    // --- This is your original code for displaying sponsors ---
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {sponsorsData.map((sponsor, index) => (
                            <motion.div
                                key={index}
                                className="group backdrop-blur-xl bg-white/5 border border-yellow-400/20 p-6 rounded-2xl text-center hover:bg-yellow-400/10 transition-all duration-300"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 215, 0, 0.3)", y: -5 }}
                            >
                                <motion.img
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    className="w-full h-16 object-contain mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                    whileHover={{ scale: 1.1 }}
                                />
                                <p className="text-sm font-medium text-gray-400 group-hover:text-yellow-400 transition-colors">
                                    {sponsor.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    // --- This is the new "Coming Soon" placeholder ---
                    <motion.div 
                        className="text-center py-16"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-500 tracking-widest animate-pulse">
                            Coming Soon...
                        </h3>
                    </motion.div>
                )}
            </div>
        </motion.section>
    );
}