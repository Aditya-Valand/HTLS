import { motion } from 'framer-motion';

export const ParticleBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                initial={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    opacity: 0,
                }}
                animate={{
                    y: [null, -100, window.innerHeight + 100],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                }}
                transition={{
                    duration: Math.random() * 4 + 3,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: "easeInOut",
                }}
            />
        ))}
    </div>
);