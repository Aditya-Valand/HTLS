import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GroupDiscountBanner } from "./GroupDiscountBanner";

// (The OfflineConfirmationScreen component remains the same as you provided)
function OfflineConfirmationScreen({ details, formData }) {
  const handleNotifyClick = () => {
    const organizerPhoneNumber = "918469434555";
    const message = `Hello HTLS Team,\n\nI have reserved my ticket(s) for offline payment.\n\n- Name: ${formData.name}\n- Email: ${formData.email}\n- Department: ${formData.department}\n- Semester: ${formData.semester}\n- Tickets: ${details.ticketQuantity}\n- Order ID: ${details.orderId}\n- Amount to Pay: ₹${details.totalAmount}\n\nPlease let me know how to proceed with the payment.`;
    const whatsappUrl = `https://wa.me/${organizerPhoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      key="offline-confirmation"
      className="text-center backdrop-blur-xl bg-white/5 border border-blue-400/30 p-12 rounded-3xl shadow-2xl"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div className="text-8xl mb-6">👍</motion.div>
      <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-6">
        Reservation Successful!
      </h3>
      <p className="text-xl text-gray-300 mb-4">
        Your ticket is reserved. To confirm, please complete the next step.
      </p>
      <p className="text-lg text-gray-400 mb-8">
        Click the button below to notify our team on WhatsApp and arrange your payment.
      </p>
      <motion.button
        onClick={handleNotifyClick}
        className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white text-xl font-bold py-4 px-10 rounded-xl shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Notify Organizers on WhatsApp
      </motion.button>
    </motion.div>
  );
}

export function Tickets() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    semester: '',
    ticketQuantity: 1,
    stayTiming: "full_day",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPriceBreakdown, setShowPriceBreakdown] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [offlineOrderDetails, setOfflineOrderDetails] = useState(null);

  const BACKEND_URL = "https://htls-backend.onrender.com";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateGroupPrice = (quantity) => {
    const regularPrice = 549;
    let total = 0;
    let savings = 0;
    const qty = parseInt(quantity) || 1;
    let originalPrice = qty * regularPrice;
    let breakdownDetails = [{ tickets: qty, price: regularPrice, detail: 'Standard' }];

    if (qty === 4) {
        const discountedPrice = regularPrice * 0.80;
        total = (3 * regularPrice) + discountedPrice;
        breakdownDetails = [
            { tickets: 3, price: regularPrice, detail: 'Standard' },
            { tickets: 1, price: discountedPrice, detail: '20% OFF' }
        ];
    } else if (qty === 5) {
        const discountedPrice = regularPrice * 0.70;
        total = (4 * regularPrice) + discountedPrice;
        breakdownDetails = [
            { tickets: 4, price: regularPrice, detail: 'Standard' },
            { tickets: 1, price: discountedPrice, detail: '30% OFF' }
        ];
    } else {
        total = qty * regularPrice;
    }
    savings = originalPrice - total;
    return {
        total: Math.round(total),
        originalPrice: Math.round(originalPrice),
        savings: Math.round(savings),
        breakdown: breakdownDetails
    };
  };

  const handleOfflineReservation = async () => {
    if (!formData.name || !formData.email || !formData.department || !formData.semester) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!termsAccepted) {
      setError("You must accept the Terms & Conditions.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`${BACKEND_URL}/api/payment/create-offline-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to reserve ticket");
      setOfflineOrderDetails(data);
      setIsFormSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`${BACKEND_URL}/api/payment/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to create order");
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
      name: "HTLS 2k25",
      description: `${formData.ticketQuantity} Ticket(s) for HTLS 2k25`,
      order_id: orderData.id,
      handler: function (response) {
        setIsFormSubmitted(true);
        setLoading(false);
      },
      prefill: {
        name: formData.name,
        email: formData.email,
      },
      theme: { color: "#F59E0B" },
      modal: {
        ondismiss: function () {
          setLoading(false);
          setError("Payment was cancelled.");
        },
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const priceBreakdown = calculateGroupPrice(formData.ticketQuantity);

  return (
    <motion.section id="tickets" className="py-20 bg-gradient-to-r from-gray-900/60 to-black/60 backdrop-blur-xl">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div className="text-center mb-12" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Secure Your Memories!
          </h2>
          <p className="mt-6 text-xl text-gray-300">Don't miss out on the event of a lifetime!</p>
        </motion.div>
        
        <GroupDiscountBanner/>

        <AnimatePresence mode="wait">
          {!isFormSubmitted ? (
            <motion.form key="form" onSubmit={handleFormSubmit} className="backdrop-blur-xl bg-white/5 border border-yellow-400/30 p-8 rounded-3xl shadow-2xl">
              {error && <motion.div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-center">{error}</motion.div>}

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full Name" required className="w-full bg-black/50 border border-yellow-400/40 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-400" />
                  <motion.input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" required className="w-full bg-black/50 border border-yellow-400/40 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-400" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.select name="department" value={formData.department} onChange={handleInputChange} required className="w-full bg-black/50 border border-yellow-400/40 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white">
                    <option value="" disabled className="bg-black">Select Your Department</option>
                    <option value="Computer Engineering" className="bg-black">Computer Engineering</option>
                    <option value="Mechanical Engineering" className="bg-black">Mechanical Engineering</option>
                    <option value="Civil Engineering" className="bg-black">Civil Engineering</option>
                    <option value="Electrical Engineering" className="bg-black">Electrical Engineering</option>
                    <option value="Electronics & Communication" className="bg-black">Electronics & Communication</option>
                    <option value="IC" className="bg-black">IC</option>
                    <option value="Robotics" className="bg-black">Robotics</option>
                    <option value="AI & DS" className="bg-black">AI & DS</option>
                    <option value="Others" className="bg-black">Others</option>
                  </motion.select>
                  <motion.select name="semester" value={formData.semester} onChange={handleInputChange} required className="w-full bg-black/50 border border-yellow-400/40 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white">
                      <option value="" disabled className="bg-black">Select Your Semester</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                          <option key={sem} value={sem} className="bg-black">{sem}</option>
                      ))}
                  </motion.select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.select name="ticketQuantity" value={formData.ticketQuantity} onChange={handleInputChange} className="w-full bg-black/50 border border-yellow-400/40 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white">
                        <option value="1" className="bg-black">1 Ticket</option>
                        <option value="2" className="bg-black">2 Tickets</option>
                        <option value="3" className="bg-black">3 Tickets</option>
                        <option value="4" className="bg-black">4 Tickets</option>
                        <option value="5" className="bg-black">5 Tickets</option>
                    </motion.select>
                    <div>
                        <label className="font-semibold mb-2 block text-gray-300">Stay Duration</label>
                        <div className="flex space-x-4">
                            <label className="flex items-center space-x-2 cursor-pointer"><input type="radio" name="stayTiming" value="full_day" checked={formData.stayTiming === "full_day"} onChange={handleInputChange} className="form-radio text-yellow-500 bg-gray-800" /><span>10am - 10pm</span></label>
                            <label className="flex items-center space-x-2 cursor-pointer"><input type="radio" name="stayTiming" value="half_day" checked={formData.stayTiming === "half_day"} onChange={handleInputChange} className="form-radio text-yellow-500 bg-gray-800" /><span>10am - 6pm</span></label>
                        </div>
                    </div>
                </div>

                <motion.div className="p-4 bg-black/30 rounded-xl border border-yellow-400/20">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Price Breakdown:</span>
                        <button type="button" onClick={() => setShowPriceBreakdown(!showPriceBreakdown)} className="text-yellow-400 hover:text-yellow-300 text-sm">{showPriceBreakdown ? "Hide" : "Show"} Details</button>
                    </div>
                    <AnimatePresence>
                        {showPriceBreakdown && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="space-y-2 text-sm">
                            {priceBreakdown.breakdown.map((item, index) => (
                                <div key={index} className="flex justify-between">
                                    <span>{item.tickets} Ticket{item.tickets > 1 ? 's' : ''} × ₹{Math.round(item.price)}{item.detail !== 'Standard' && ` (${item.detail})`}</span>
                                    <span>₹{item.tickets * Math.round(item.price)}</span>
                                </div>
                            ))}
                            <div className="border-t border-gray-600 pt-2">
                                <div className="flex justify-between font-medium"><span>Total:</span><span>₹{priceBreakdown.total}</span></div>
                                {priceBreakdown.savings > 0 && <div className="flex justify-between text-green-400 text-xs"><span>You save:</span><span>₹{priceBreakdown.savings}</span></div>}
                            </div>
                        </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <div className="flex items-start space-x-3 pt-2">
                  <input id="terms" name="terms" type="checkbox" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} className="h-5 w-5 mt-1 rounded border-gray-400 text-yellow-500 focus:ring-yellow-500 cursor-pointer"/>
                  <div className="text-sm"><label htmlFor="terms" className="font-medium text-gray-300">I agree to the <button type="button" onClick={() => setShowTermsModal(true)} className="underline text-yellow-400 hover:text-yellow-300 font-semibold">Terms & Conditions</button></label></div>
                </div>

                <motion.button type="submit" disabled={loading || !termsAccepted} className={`w-full mt-6 ${loading || !termsAccepted ? "bg-gray-600 cursor-not-allowed" : "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"} text-black text-xl font-bold py-4 px-10 rounded-xl shadow-2xl shadow-yellow-400/40 transition-all`}>
                    {loading ? <div className="flex items-center justify-center space-x-2"><div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div><span>Processing...</span></div> : <>Proceed to Pay ₹{priceBreakdown.total}{priceBreakdown.savings > 0 && <span className="ml-2 line-through opacity-70">₹{priceBreakdown.originalPrice}</span>}</>}
                </motion.button>
                <motion.button type="button" onClick={handleOfflineReservation} disabled={loading} className="w-full mt-4 bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-10 rounded-xl transition-all">{loading ? "Processing..." : "Reserve for Offline Payment"}</motion.button>
              </div>
            </motion.form>
          ) : offlineOrderDetails ? (
            <OfflineConfirmationScreen details={offlineOrderDetails} formData={formData} />
          ) : (
            <motion.div key="confirmation" className="text-center backdrop-blur-xl bg-white/5 border border-green-400/30 p-12 rounded-3xl shadow-2xl">
              <motion.div className="text-8xl mb-6" animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>🎉</motion.div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-6">Payment Successful!</h3>
              <p className="text-xl text-gray-300 mb-4">Your {formData.ticketQuantity} ticket{formData.ticketQuantity > 1 ? "s have" : " has"} been confirmed!</p>
              <p className="text-lg text-gray-400">Unique QR code{formData.ticketQuantity > 1 ? "s" : ""} and event details have been sent to <span className="text-yellow-400">{formData.email}</span></p>
              <motion.button onClick={() => window.location.reload()} className="mt-6 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-medium rounded-xl hover:shadow-lg transition-all" whileHover={{ scale: 1.05 }}>Book Another Ticket</motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showTermsModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowTermsModal(false)}>
            <motion.div initial={{ scale: 0.9, y: -20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: -20 }} className="bg-gray-900 border border-yellow-400/30 rounded-2xl p-8 max-w-lg w-full text-white" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">🎟 Event Terms & Conditions</h3>
              <ul className="space-y-3 text-gray-300 list-disc list-inside">
                <li>Tickets are non-refundable & non-transferable.</li>
                <li>Venue/date may change as per footfall or circumstances.</li>
                <li>Misbehavior or nuisance = removal by security (no refund).</li>
                <li>Drugs, alcohol & prohibited items strictly banned.</li>
                <li>Organizers are not responsible for loss, theft, or injury.</li>
                <li>Entry only with valid ticket & ID proof.</li>
                <li>By entering, you agree to being part of event photos/videos.</li>
                <li>Organizer’s decision is final.</li>
              </ul>
              <button type="button" onClick={() => setShowTermsModal(false)} className="mt-6 w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-2 px-4 rounded-lg">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}