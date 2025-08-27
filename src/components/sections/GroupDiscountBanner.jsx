import { motion } from 'framer-motion';
import { Users } from 'lucide-react'; // Import a more relevant icon

export function GroupDiscountBanner() {
    return (
        <motion.div
            className="mb-8 p-6 md:p-8 border-2 border-dashed border-yellow-400/50 rounded-2xl bg-yellow-400/10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="flex justify-center items-center gap-4 mb-4">
                <Users className="w-8 h-8 text-yellow-400" />
                <h3 className="text-3xl font-bold text-yellow-400">
                    Bring Your Crew & Save!
                </h3>
            </div>
            <p className="text-lg text-white mb-6 max-w-2xl mx-auto">
                The more, the merrier! Grab your friends and unlock amazing deals on your tickets.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {/* Offer 1 */}
                <motion.div
                    className="bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h4 className="font-bold text-xl text-white mb-2">Group of 4</h4>
                    <p className="text-yellow-400 text-lg font-semibold">
                        Buy 3 tickets, get the 4th at <span className="text-orange-400">20% OFF</span>
                    </p>
                    {/* <p className="text-gray-300 text-sm mt-1">(Average price: ~₹522 each)</p> */}
                </motion.div>

                {/* Offer 2 */}
                <motion.div
                    className="bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h4 className="font-bold text-xl text-white mb-2">Group of 5</h4>
                    <p className="text-yellow-400 text-lg font-semibold">
                        Buy 4 tickets, get the 5th at <span className="text-orange-400">30% OFF</span>
                    </p>
                    {/* <p className="text-gray-300 text-sm mt-1">(Average price: ~₹516 each)</p> */}
                </motion.div>
            </div>
        </motion.div>
    );
}