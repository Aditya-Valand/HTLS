import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const PageWrapper = ({ children }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
            <motion.div
                className="fixed w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full pointer-events-none z-50 mix-blend-screen opacity-80"
                style={{
                    left: mousePosition.x - 16,
                    top: mousePosition.y - 16,
                }}
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            {children}
        </div>
    );
};