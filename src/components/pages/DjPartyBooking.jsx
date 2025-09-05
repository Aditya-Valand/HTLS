import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Zap, UtensilsCrossed, Mic, Phone, PartyPopper, ShieldCheck } from 'lucide-react';

const DJ_TICKET_PRICE = 499;

// --- NEW: A static, always-visible banner component ---
function GroupOfferBanner() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 p-4 bg-green-500/10 border-2 border-dashed border-green-500/50 rounded-2xl flex items-center gap-4 shadow-lg"
        >
            <PartyPopper className="w-10 h-10 text-green-400 flex-shrink-0 animate-pulse" />
            <div>
                <h4 className="font-bold text-green-400 text-lg">Group Offer Available!</h4>
                <p className="text-sm text-gray-300">
                    Buy 5 tickets and get 1 absolutely FREE! The discount is applied automatically.
                </p>
            </div>
        </motion.div>
    );
}

// --- TermsModal sub-component remains the same ---
function TermsModal({ setShowModal }) {
     return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowModal(false)}
        >
            <motion.div
                initial={{ scale: 0.9, y: -20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: -20 }}
                className="bg-gray-900 border border-purple-400/30 rounded-2xl p-8 max-w-lg w-full text-white"
                onClick={(e) => e.stopPropagation()}
            >
                <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-2"><ShieldCheck /> Event Terms & Conditions</h3>
                <ul className="space-y-3 text-gray-300 list-disc list-inside text-sm">
                    <li>Tickets are strictly non-refundable and non-transferable.</li>
                    <li>Entry is reserved for DJ Party only (6 PM - 10 PM). This ticket does not grant access to the full-day event.</li>
                    <li>Misbehavior or creating a nuisance will result in immediate removal from the venue without a refund.</li>
                    <li>The organizers are not responsible for any loss, theft, or injury. Attend at your own risk.</li>
                    <li>Entry will only be permitted with a valid ticket and government-issued ID proof.</li>
                </ul>
                <button type="button" onClick={() => setShowModal(false)} className="mt-6 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-lg">
                    I Understand & Agree
                </button>
            </motion.div>
        </motion.div>
    );
}


export function DjPartyBooking() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', ticketCount: 1 });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [showTermsModal, setShowTermsModal] = useState(false);

    const BACKEND_URL = "https://htls-backend.onrender.com";

    // Price calculation logic still runs in the background
    const qty = parseInt(formData.ticketCount) || 1;
    const freeTickets = Math.floor(qty / 6);
    const paidTickets = qty - freeTickets;
    const totalPrice = paidTickets * DJ_TICKET_PRICE;
    
    const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!termsAccepted) {
            setError("You must agree to the Terms & Conditions.");
            return;
        }
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`${BACKEND_URL}/api/payment/create-dj-order`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || 'Failed to create order');
            initiateRazorpayPayment(data);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    const initiateRazorpayPayment = (orderData) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: orderData.amount,
            currency: orderData.currency,
            name: "HTLS 2k25 - DJ Party",
            description: `DJ Party Access (6pm-10pm)`,
            order_id: orderData.id,
            handler: () => setIsSubmitted(true),
            prefill: { name: formData.name, email: formData.email, contact: formData.phone },
            theme: { color: "#8B5CF6" },
            modal: { ondismiss: () => setLoading(false) },
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <>
            <section className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4 py-20">
                <div className="container mx-auto max-w-lg">
                    <motion.div className="text-center mb-10" initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                            DJ Party Access
                        </h1>
                        <p className="mt-4 text-xl text-gray-300">6 PM - 10 PM | An Unforgettable Night</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 text-center text-sm font-medium text-gray-300">
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10"><Music className="w-7 h-7 mx-auto mb-2 text-pink-400" /> Live DJ Set</div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10"><UtensilsCrossed className="w-7 h-7 mx-auto mb-2 text-green-400" /> Dinner Included</div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10"><Mic className="w-7 h-7 mx-auto mb-2 text-purple-400" /> Stand-up Comedy</div>
                        </div>
                    </motion.div>
                    
                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <div>
                                {/* --- ALWAYS VISIBLE BANNER --- */}
                                <GroupOfferBanner />

                                <motion.form key="form" onSubmit={handleFormSubmit} className="backdrop-blur-xl bg-white/5 border border-purple-500/30 p-8 rounded-2xl shadow-2xl" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                                    {error && <div className="mb-4 p-3 bg-red-500/20 text-red-400 rounded-lg">{error}</div>}
                                    <div className="space-y-6">
                                        <input name="name" onChange={handleInputChange} placeholder="Full Name" required className="w-full bg-black/50 border border-purple-400/40 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"/>
                                        <input type="email" name="email" onChange={handleInputChange} placeholder="Email" required className="w-full bg-black/50 border border-purple-400/40 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"/>
                                        <input type="tel" name="phone" onChange={handleInputChange} placeholder="Phone Number" required className="w-full bg-black/50 border border-purple-400/40 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"/>
                                        <select name="ticketCount" onChange={handleInputChange} value={formData.ticketCount} className="w-full bg-black/50 border border-purple-400/40 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none">
                                            {[...Array(12).keys()].map(n => <option key={n + 1} value={n + 1} className="bg-gray-800">{n + 1} Ticket{n + 1 > 1 ? 's' : ''}</option>)}
                                        </select>
                                        <div className="flex items-start space-x-3 pt-2">
                                            <input id="terms" type="checkbox" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} className="h-5 w-5 mt-1 rounded border-gray-400 text-purple-500 focus:ring-purple-500 cursor-pointer"/>
                                            <div className="text-sm"><label htmlFor="terms" className="font-medium text-gray-300">I agree to the <button type="button" onClick={() => setShowTermsModal(true)} className="underline text-purple-400 hover:text-purple-300 font-semibold">Terms & Conditions</button></label></div>
                                        </div>
                                        <motion.button type="submit" disabled={loading || !termsAccepted} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-lg shadow-lg disabled:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50 transition-all">
                                            {loading ? 'Processing...' : `Pay ₹${totalPrice}`}
                                        </motion.button>
                                    </div>
                                    <div className="text-center mt-8 border-t border-white/10 pt-4 text-sm text-gray-400">
                                        <p className="flex items-center justify-center gap-2"><Phone className="w-4 h-4"/> For inquiries: 8469434555 / 7990441262 / 7041512005</p>
                                    </div>
                                </motion.form>
                            </div>
                        ) : (
                             <motion.div key="success" className="text-center bg-white/5 p-12 rounded-2xl" initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
                                <Zap className="w-16 h-16 text-green-400 mx-auto mb-4" />
                                <h2 className="text-3xl font-bold text-green-400">Payment Successful!</h2>
                                <p className="mt-4 text-lg">Your DJ Party ticket is confirmed! Details sent to <span className="font-semibold text-purple-400">{formData.email}</span>.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>
            
            <AnimatePresence>
                {showTermsModal && <TermsModal setShowModal={setShowTermsModal} />}
            </AnimatePresence>
        </>
    );
}