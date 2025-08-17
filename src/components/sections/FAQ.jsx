import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
    { question: "Is this event open to students from other colleges?", answer: "This event is exclusively for the students of all departments of Government Engineering College, Rajkot (GECR). A valid college ID may be required for entry." },
    { question: "What does the ticket price include?", answer: "The ₹500 ticket price includes entry to the event, access to all activities (ramp walk, truth & dare, karaoke, dance battles, photo booth), unlimited food and soft drinks, and participation in lucky draws." },
    { question: "Can I buy tickets at the venue?", answer: "Tickets are available online only and are expected to sell out quickly. We highly recommend booking your ticket in advance through this website to guarantee your spot at this epic celebration." },
    { question: "What should I wear for the ramp walk?", answer: "Dress to impress! Whether it's formal, casual chic, or your own unique style - show off your fashion sense. There will be prizes for the best dressed participants!" },
    { question: "Are there any prizes for the activities?", answer: "We have exciting prizes for winners of dance battles, best dressed in ramp walk, karaoke champions, and surprise gifts through lucky draws throughout the night." },
];

export const FAQ = () => {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <motion.section
            id="faq"
            className="py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    className="text-center mb-16"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                        Got Questions?
                    </h2>
                    <p className="mt-6 text-xl text-gray-300">We've got all the answers you need</p>
                </motion.div>

                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="backdrop-blur-xl bg-white/5 border border-yellow-400/20 rounded-2xl overflow-hidden"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <motion.button
                                className="w-full flex justify-between items-center text-left p-6 hover:bg-yellow-400/10 transition-colors"
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                whileHover={{ x: 10 }}
                            >
                                <span className="text-xl font-bold text-white">{faq.question}</span>
                                <motion.span className="text-3xl text-yellow-400 font-thin" animate={{ rotate: openFaq === index ? 45 : 0 }} transition={{ duration: 0.3 }}>
                                    +
                                </motion.span>
                            </motion.button>
                            <AnimatePresence>
                                {openFaq === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-gray-300 text-lg leading-relaxed">{faq.answer}</div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};