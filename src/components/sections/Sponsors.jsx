import { motion } from 'framer-motion';

// --- SPONSOR LOGOS ---
// 1. Import your actual logos here. I'm using placeholders for now.
import pramukhSoundLogo from '../../assets/SPS Logo CMYK.png'; 
import mexclogo from '../../assets/img6.png'// This one is real
import jklogo from '../../assets/jkimpexlogo.JPG'
import sendme6 from '../../assets/sendme6.png'
import vnslogo from '../../assets/vnslogo.png'
import bonanza from '../../assets/bonanza.png'
import fjartist from '../../assets/fj art.jpg'
// import rkLogo from '../../assets/Rk.jpg'
// Replace these placeholders with your actual logo files
// const mexcLogo = "https://placehold.co/300x150/111827/facc15?text=MEXC+Foundation&font=raleway";
// const sendme6Logo = "https://placehold.co/250x125/111827/fb923c?text=SENDME6&font=raleway";
// const jkImproviseLogo = "https://placehold.co/200x100/111827/9ca3af?text=JK+Improvise&font=raleway";
// const vnsPerfumesLogo = "https://placehold.co/200x100/111827/9ca3af?text=VNS+Perfumes&font=raleway";
// const rkLogo = "https://placehold.co/150x75/111827/6b7280?text=RK&font=raleway";

// 2. Organized sponsor data by tiers for easy management
const sponsors = {
  title: [
    { name: "MEXC Foundation", logo: mexclogo }
  ],
  poweredBy: [
    { name: "SENDME6", logo: sendme6}
  ],
  coPoweredBy: [
    { name: "Shree Pramukh Sound", logo: pramukhSoundLogo },
    { name: "JK Impex", logo: jklogo },
    { name: "VNS Perfumes", logo: vnslogo},
    { name: "Bonanza", logo: bonanza},
    { name: "FJ artist", logo: fjartist},
  ]
};

// Set to false to show "Coming Soon..."
const showSponsors = true; 

// A reusable card component for consistent styling
const SponsorCard = ({ sponsor, tier }) => {
  const tierStyles = {
    title: 'border-yellow-400 p-8',
    poweredBy: 'border-orange-400/80 p-6',
    coPoweredBy: 'border-gray-500/50 p-6',
    supportedBy: 'border-gray-600/50 p-4',
  };

  const logoHeight = {
    title: 'h-24 md:h-28',
    poweredBy: 'h-20 md:h-24',
    coPoweredBy: 'h-16 md:h-20',
    
  };

  return (
    <motion.div
      className={`group backdrop-blur-xl bg-white/5 rounded-2xl text-center hover:bg-yellow-400/10 transition-all duration-300 w-full ${tierStyles[tier]}`}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 215, 0, 0.2)", y: -5 }}
    >
      <img
        src={sponsor.logo}
        alt={sponsor.name}
        className={`w-full object-contain mb-4 mx-auto ${logoHeight[tier]}`}
      />
      <p className="text-sm font-medium text-gray-400 group-hover:text-yellow-400 transition-colors">
        {sponsor.name}
      </p>
    </motion.div>
  );
};


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
                        Our Valued Partners
                    </h2>
                    <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                        This event is made possible by the incredible support of our sponsors.
                    </p>
                </motion.div>

                {showSponsors ? (
                    <div className="space-y-16">
                        {/* --- Title Sponsor Tier --- */}
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
                            <h3 className="text-center text-2xl font-bold text-yellow-400 tracking-widest uppercase mb-6">Title Sponsor</h3>
                            <div className="max-w-md mx-auto">
                                <SponsorCard sponsor={sponsors.title[0]} tier="title" />
                            </div>
                        </motion.div>

                        {/* --- Powered By Tier --- */}
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
                            <h3 className="text-center text-xl font-bold text-orange-400 tracking-wider uppercase mb-6">Powered By</h3>
                            <div className="max-w-sm mx-auto">
                                <SponsorCard sponsor={sponsors.poweredBy[0]} tier="poweredBy" />
                            </div>
                        </motion.div>

                        {/* --- Co-Powered By Tier --- */}
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}>
                            <h3 className="text-center text-lg font-semibold text-gray-300 tracking-wider uppercase mb-6">Co-Powered By</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                {sponsors.coPoweredBy.map((sponsor, index) => (
                                    <SponsorCard key={index} sponsor={sponsor} tier="coPoweredBy" />
                                ))}
                            </div>
                        </motion.div>
                        
                        {/* --- Supported By Tier --- */}
                        {/* <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} viewport={{ once: true }}>
                             <h3 className="text-center text-base font-medium text-gray-400 tracking-wider uppercase mb-6">Supported By</h3>
                            <div className="max-w-xs mx-auto">
                                <SponsorCard sponsor={sponsors.supportedBy[0]} tier="supportedBy" />
                            </div>
                        </motion.div> */}
                    </div>
                ) : (
                    <motion.div className="text-center py-16" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-500 tracking-widest animate-pulse">Coming Soon...</h3>
                    </motion.div>
                )}
            </div>
        </motion.section>
    );
}