import { motion } from 'framer-motion';
import { PlayCircle, Music, Zap, Camera, Users } from 'lucide-react';

// You can add this component to your main page, for example, right above the <Tickets /> component.
export function EventHighlights() {
    // --- IMPORTANT ---
    // Replace this with the actual path to your video file in your project's `public` folder,
    // or a URL if you are hosting it elsewhere (like YouTube or Vimeo).
    const videoSrc = "HTLS.mp4"; // Example path

    const highlights = [
        {
            icon: <Music className="h-8 w-8 text-yellow-400" />,
            title: "DJ Sets",
            description: "Experience non-stop beats from top local DJs spinning the hottest tracks."
        },
        {
            icon: <Zap className="h-8 w-8 text-orange-500" />,
            title: "Captivating Live Performances",
            description: "Witness incredible performances by talented artists from our college, enhanced by mind-bending visual effects."
        },
        {
            icon: <Camera className="h-8 w-8 text-red-500" />,
            title: "Unforgettable Memories",
            description: "Capture perfect moments at our venue and interactive installations."
        },
        {
            icon: <Users className="h-8 w-8 text-yellow-300" />,
            title: "Connect & Celebrate",
            description: "Join hundreds of fellow students for the biggest celebration of the year. The ultimate party experience awaits!"
        }
    ];

    return (
        <motion.section
            id="highlights"
            className="py-20 bg-black/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-12"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                        Experience The Unforgettable
                    </h2>
                    <p className="mt-6 text-xl text-gray-300">This isn't just a party; it's a core memory in the making.</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Video Player Section */}
                    <motion.div
                        className="relative rounded-2xl overflow-hidden border-2 border-yellow-400/30 shadow-2xl shadow-yellow-400/20"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <video
                            className="w-full h-full object-cover"
                            src={videoSrc}
                            autoPlay
                            loop
                            muted
                            playsInline // Important for autoplay on mobile
                            controls // Show default video controls
                        >
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
                        <div className="absolute top-4 left-4 flex items-center space-x-2 bg-black/50 backdrop-blur-sm p-2 rounded-full">
                            <PlayCircle className="h-6 w-6 text-red-500 animate-pulse" />
                            <span className="text-white font-semibold">Official Aftermovie</span>
                        </div>
                    </motion.div>

                    {/* Highlights List Section */}
                    <div className="space-y-8">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="flex items-start space-x-6"
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <div className="flex-shrink-0 bg-white/10 p-4 rounded-full">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                                    <p className="text-gray-400 text-lg">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
