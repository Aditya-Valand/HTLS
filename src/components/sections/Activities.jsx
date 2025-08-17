import { motion } from 'framer-motion';
import { Crown, Heart, Mic, Trophy, Camera, Gift } from 'lucide-react';

const activitiesData = [
    { icon: Crown, title: "Ramp Walk", description: "Strut your style on the runway and showcase your fashion sense", color: "from-purple-500 to-pink-500" },
    { icon: Heart, title: "Truth & Dare", description: "Classic game with exciting challenges and hilarious truths", color: "from-red-500 to-rose-500" },
    { icon: Mic, title: "Karaoke Night", description: "Sing your heart out with friends and show off your vocal skills", color: "from-blue-500 to-cyan-500" },
    { icon: Trophy, title: "Dance Battle", description: "Epic dance-offs with amazing prizes for the best performers", color: "from-green-500 to-emerald-500" },
    { icon: Camera, title: "Photo Booth", description: "Capture memories with fun props and instant photo prints", color: "from-yellow-500 to-orange-500" },
    { icon: Gift, title: "Lucky Draw", description: "Win exciting prizes and surprises throughout the night", color: "from-indigo-500 to-purple-500" },
];

export const Activities = () => (
    <motion.section
        id="activities"
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
                    Epic Activities
                </h2>
                <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                    Get ready for the most exciting activities that will make this night unforgettable!
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activitiesData.map((activity, index) => (
                    <motion.div
                        key={index}
                        className="group relative backdrop-blur-xl bg-white/5 border border-yellow-400/20 p-8 rounded-3xl text-center overflow-hidden"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 215, 0, 0.3)", y: -10 }}
                    >
                        <motion.div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                        <motion.div className="text-yellow-400 mb-6 flex justify-center relative z-10" whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.8, type: "spring" }}>
                            <activity.icon size={60} />
                        </motion.div>
                        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors relative z-10">
                            {activity.title}
                        </h3>
                        <p className="text-lg text-gray-300 group-hover:text-white transition-colors relative z-10">
                            {activity.description}
                        </p>
                        <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </motion.div>
                ))}
            </div>
        </div>
    </motion.section>
);