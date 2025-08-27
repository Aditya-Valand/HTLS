import { motion } from 'framer-motion';

// 1. Import the new sponsor's logo
import pramukhSoundLogo from '../../assets/SPS Logo CMYK.png';

// Set this to true to show the sponsors
const showSponsors = true;

// 2. Update the data with the real sponsor
const sponsorsData = [
    { name: "Shree Pramukh Sound", logo: pramukhSoundLogo },
    // You can add more real sponsors here as they join
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
                    // 3. Updated layout to center the sponsor(s)
                    <div className="flex justify-center items-center flex-wrap gap-8">
                        {sponsorsData.map((sponsor, index) => (
                            <motion.div
                                key={index}
                                className="group backdrop-blur-xl bg-white/5 border border-yellow-400/20 p-6 rounded-2xl text-center hover:bg-yellow-400/10 transition-all duration-300 w-full max-w-[200px]"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 215, 0, 0.3)", y: -5 }}
                            >
                                <motion.img
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    className="w-full h-20 object-contain mb-4 transition-all duration-300" // Removed grayscale for the main sponsor
                                    whileHover={{ scale: 1.1 }}
                                />
                                <p className="text-sm font-medium text-gray-400 group-hover:text-yellow-400 transition-colors">
                                    {sponsor.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    // This is the "Coming Soon" placeholder
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