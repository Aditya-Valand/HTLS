import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { Award, Check } from 'lucide-react';

// IMPORTANT: Make sure you have included the Razorpay checkout script in your public/index.html file
// <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
function OfflineConfirmationScreen({ details, formData }) {
  const handleNotifyClick = () => {
    // --- IMPORTANT: Replace with your team's WhatsApp number ---
    const organizerPhoneNumber = "7863028015"; // Use country code, no "+" or spaces

    const message = `Hello HTLS Team,\n\nI have reserved my ticket(s) for offline payment.\n\n- Name: ${formData.name}\n- Email: ${formData.email}\n- Department: ${formData.department}\n- Tickets: ${details.ticketQuantity}\n- Order ID: ${details.orderId}\n- Amount to Pay: ₹${details.totalAmount}\n\nPlease let me know how to proceed with the payment.`;

    const whatsappUrl = `https://wa.me/${organizerPhoneNumber}?text=${encodeURIComponent(
      message
    )}`;
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
        Click the button below to notify our team on WhatsApp and arrange your
        payment.
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
  const [ticketData, setTicketData] = useState({
    ticketsSold: 0,
    ticketsLeft: 102,
    totalEarlyBirdTickets: 102,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    ticketQuantity: 1,
    stayTiming: "full_day", // Default value
    
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [orderDetails, setOrderDetails] = useState(null);
  const [showPriceBreakdown, setShowPriceBreakdown] = useState(false);
  // Add these with your other useState hooks
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [offlineOrderDetails, setOfflineOrderDetails] = useState(null);
//   const [showFlexAwardModal, setShowFlexAwardModal] = useState(false);

  // Define the backend URL
  const BACKEND_URL = "https://htls-backend.onrender.com";

  // Fetch early bird status
  useEffect(() => {
    fetchEarlyBirdStatus();
    const interval = setInterval(fetchEarlyBirdStatus, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const fetchEarlyBirdStatus = async () => {
    try {
      // Use the full backend URL
      const response = await fetch(
        `${BACKEND_URL}/api/payment/early-bird-status`
      );
      const data = await response.json();
      setTicketData(data);
    } catch (error) {
      console.error("Failed to fetch early bird status:", error);
    }
  };

  const progressPercentage =
    (ticketData.ticketsSold / ticketData.totalEarlyBirdTickets) * 100;

  const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

  const calculateTotalPrice = () => {
    const availableEarlyBird = ticketData.ticketsLeft;
    const quantity = parseInt(formData.ticketQuantity);

    let earlyBirdTickets = 0;
    let regularTickets = 0;

    if (availableEarlyBird >= quantity) {
      earlyBirdTickets = quantity;
    } else if (availableEarlyBird > 0) {
      earlyBirdTickets = availableEarlyBird;
      regularTickets = quantity - availableEarlyBird;
    } else {
      regularTickets = quantity;
    }

    const total = earlyBirdTickets * 494 + regularTickets * 549;
    const originalPrice = quantity * 549;
    const savings = originalPrice - total;

    return { total, originalPrice, savings, earlyBirdTickets, regularTickets };
  };
  // src/components/Tickets.jsx

  const handleOfflineReservation = async () => {
    if (!formData.name || !formData.email || !formData.department) {
      setError("Please fill in all the details first.");
      return;
    }
    if (!termsAccepted) {
      // Also check for terms
      setError("You must accept the Terms & Conditions.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${BACKEND_URL}/api/payment/create-offline-order`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to reserve ticket");
      }

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
      // Use the full backend URL
      const response = await fetch(`${BACKEND_URL}/api/payment/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create order");
      }

      setOrderDetails(data);
      initiateRazorpayPayment(data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const initiateRazorpayPayment = (orderData) => {
    const options = {
      // IMPORTANT: Add your Razorpay Key ID to your project's environment variables
      // For local development, create a .env file in your root directory with:
      // REACT_APP_RAZORPAY_KEY_ID=your_key_id
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: orderData.amount,
      currency: orderData.currency,
      name: "HTLS 2k25",
      description: `${formData.ticketQuantity} Ticket(s) for HTLS 2k25`,
      order_id: orderData.id,
      handler: function (response) {
        // Payment successful
        setIsFormSubmitted(true);
        setLoading(false);
        console.log("Payment successful:", response);
      },
      prefill: {
        name: formData.name,
        email: formData.email,
      },
      theme: {
        color: "#F59E0B",
      },
      modal: {
        ondismiss: function () {
          // This function is called when the user closes the modal
          setLoading(false);
          setError("Payment was cancelled.");
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const priceBreakdown = calculateTotalPrice();

  return (
    <motion.section
      id="tickets"
      className="py-20 bg-gradient-to-r from-gray-900/60 to-black/60 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Secure Your Memories!
          </h2>
          <p className="mt-6 text-xl text-gray-300">
            Don't miss out on the event of a lifetime!
          </p>
        </motion.div>

        {/* Early Bird Offer Card */}
        <motion.div
          className="mb-8 p-6 border-2 border-dashed border-yellow-400/50 rounded-2xl bg-yellow-400/10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-yellow-400 mb-3">
            {ticketData.ticketsLeft > 0
              ? "Early Bird Offer ENDING SOON!"
              : "Early Bird Offer ENDED!"}
          </h3>
          <p className="text-lg text-white mb-4">
            <span className="font-bold text-white">
              {ticketData.ticketsLeft}
            </span>{" "}
            discounted tickets left!
          </p>
          <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
            <motion.div
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-4 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
          <p className="text-sm text-gray-300">
            {ticketData.ticketsSold} of {ticketData.totalEarlyBirdTickets} sold
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isFormSubmitted ? (
            <motion.form
              key="form"
              onSubmit={handleFormSubmit}
              className="backdrop-blur-xl bg-white/5 border border-yellow-400/30 p-8 rounded-3xl shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {error && (
                <motion.div
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {error}
                </motion.div>
              )}

              <div className="space-y-6">
                {/* All your form inputs (name, email, etc.) go here */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    required
                    className="w-full bg-black/50 border border-yellow-400/40 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-white placeholder-gray-400"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(255, 215, 0, 0.3)",
                    }}
                  />
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className="w-full bg-black/50 border border-yellow-400/40 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-white placeholder-gray-400"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(255, 215, 0, 0.3)",
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-yellow-400/40 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-white"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(255, 215, 0, 0.3)",
                    }}
                  >
                    <option value="" disabled className="bg-black">
                      Select Your Department
                    </option>
                    <option value="Computer Engineering" className="bg-black">
                      Computer Engineering
                    </option>
                    <option value="Mechanical Engineering" className="bg-black">
                      Mechanical Engineering
                    </option>
                    <option value="Civil Engineering" className="bg-black">
                      Civil Engineering
                    </option>
                    <option value="Electrical Engineering" className="bg-black">
                      Electrical Engineering
                    </option>
                    <option
                      value="Electronics & Communication"
                      className="bg-black"
                    >
                      Electronics & Communication
                    </option>
                    <option value="IC" className="bg-black">
                      IC
                    </option>
                    <option value="Robotics" className="bg-black">
                      Robotics
                    </option>
                    <option value="AI & DS" className="bg-black">
                      AI & DS
                    </option>
                    <option value="Others" className="bg-black">
                      Others
                    </option>
                  </motion.select>

                  <motion.select
                    name="ticketQuantity"
                    value={formData.ticketQuantity}
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-yellow-400/40 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-white"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(255, 215, 0, 0.3)",
                    }}
                  >
                    <option value="1" className="bg-black">
                      1 Ticket
                    </option>
                    <option value="2" className="bg-black">
                      2 Tickets
                    </option>
                    <option value="3" className="bg-black">
                      3 Tickets
                    </option>
                    <option value="4" className="bg-black">
                      4 Tickets
                    </option>
                    <option value="5" className="bg-black">
                      5 Tickets
                    </option>
                  </motion.select>

                  
                    {/* Stay Timing Selection */}
                    <div>
                      <label className="font-semibold mb-2 block">
                        Stay Duration
                      </label>
                      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="stayTiming"
                            value="full_day"
                            checked={formData.stayTiming === "full_day"}
                            onChange={handleInputChange}
                            className="form-radio text-yellow-500 bg-gray-800 border-gray-600 focus:ring-yellow-500"
                          />
                          <span>10am - 10pm</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="stayTiming"
                            value="half_day"
                            checked={formData.stayTiming === "half_day"}
                            onChange={handleInputChange}
                            className="form-radio text-yellow-500 bg-gray-800 border-gray-600 focus:ring-yellow-500"
                          />
                          <span>10am - 6pm</span>
                        </label>
                      </div>
                    </div>
                </div>
                

                {/* Price Breakdown */}
                <motion.div
                  className="p-4 bg-black/30 rounded-xl border border-yellow-400/20"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Price Breakdown:</span>
                    <button
                      type="button"
                      onClick={() => setShowPriceBreakdown(!showPriceBreakdown)}
                      className="text-yellow-400 hover:text-yellow-300 text-sm"
                    >
                      {showPriceBreakdown ? "Hide" : "Show"} Details
                    </button>
                  </div>

                  <AnimatePresence>
                    {showPriceBreakdown && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2 text-sm"
                      >
                        {priceBreakdown.earlyBirdTickets > 0 && (
                          <div className="flex justify-between">
                            <span>
                              {priceBreakdown.earlyBirdTickets} Early Bird ×
                              ₹494
                            </span>
                            <span>
                              ₹{priceBreakdown.earlyBirdTickets * 494}
                            </span>
                          </div>
                        )}
                        {priceBreakdown.regularTickets > 0 && (
                          <div className="flex justify-between">
                            <span>
                              {priceBreakdown.regularTickets} Regular × ₹549
                            </span>
                            <span>₹{priceBreakdown.regularTickets * 549}</span>
                          </div>
                        )}
                        <div className="border-t border-gray-600 pt-2">
                          <div className="flex justify-between font-medium">
                            <span>Total:</span>
                            <span>₹{priceBreakdown.total}</span>
                          </div>
                          {priceBreakdown.savings > 0 && (
                            <div className="flex justify-between text-green-400 text-xs">
                              <span>You save:</span>
                              <span>₹{priceBreakdown.savings}</span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                

                {/* Terms and Conditions Checkbox */}
                <div className="flex items-start space-x-3 pt-2">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="h-5 w-5 mt-1 rounded border-gray-400 text-yellow-500 focus:ring-yellow-500 cursor-pointer"
                  />
                  <div className="text-sm">
                    <label
                      htmlFor="terms"
                      className="font-medium text-gray-300"
                    >
                      I agree to the{" "}
                      <button
                        type="button"
                        onClick={() => setShowTermsModal(true)}
                        className="underline text-yellow-400 hover:text-yellow-300 font-semibold"
                      >
                        Terms & Conditions
                      </button>
                    </label>
                  </div>
                </div>

                {/* Online Payment Button */}
                <motion.button
                  type="submit"
                  disabled={loading || !termsAccepted}
                  className={`w-full mt-6 ${
                    loading || !termsAccepted
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"
                  } text-black text-xl font-bold py-4 px-10 rounded-xl shadow-2xl shadow-yellow-400/40 transition-all`}
                  whileHover={
                    !loading && termsAccepted
                      ? {
                          scale: 1.02,
                          boxShadow: "0 0 60px rgba(255, 215, 0, 0.8)",
                        }
                      : {}
                  }
                  whileTap={!loading && termsAccepted ? { scale: 0.98 } : {}}
                >
                  {loading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <>
                      Proceed to Pay ₹{priceBreakdown.total}
                      {priceBreakdown.savings > 0 && (
                        <span className="ml-2 line-through opacity-70">
                          ₹{priceBreakdown.originalPrice}
                        </span>
                      )}
                    </>
                  )}
                </motion.button>

                {/* Offline Payment Button */}
                <motion.button
                  type="button"
                  onClick={handleOfflineReservation}
                  disabled={loading}
                  className="w-full mt-4 bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-10 rounded-xl transition-all"
                >
                  {loading ? "Processing..." : "Reserve for Offline Payment"}
                </motion.button>
              </div>
            </motion.form>
          ) : // --- THIS IS THE UPDATED LOGIC ---
          offlineOrderDetails ? (
            <OfflineConfirmationScreen
              details={offlineOrderDetails}
              formData={formData}
            />
          ) : (
            <motion.div
              key="confirmation"
              className="text-center backdrop-blur-xl bg-white/5 border border-green-400/30 p-12 rounded-3xl shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="text-8xl mb-6"
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎉
              </motion.div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Payment Successful!
              </h3>
              <p className="text-xl text-gray-300 mb-4">
                Your {formData.ticketQuantity} ticket
                {formData.ticketQuantity > 1 ? "s have" : " has"} been
                confirmed!
              </p>
              <p className="text-lg text-gray-400">
                Unique QR code{formData.ticketQuantity > 1 ? "s" : ""} and event
                details have been sent to{" "}
                <span className="text-yellow-400">{formData.email}</span>
              </p>
              <motion.button
                onClick={() => window.location.reload()}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-medium rounded-xl hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
              >
                Book Another Ticket
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* <AnimatePresence>
                {showFlexAwardModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={() => setShowFlexAwardModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: -20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: -20 }}
                            className="bg-gray-900 border-2 border-dashed border-orange-500/50 rounded-2xl p-8 max-w-md w-full text-white text-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-center mb-4">
                                <Award className="h-16 w-16 text-orange-400" />
                            </div>
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
                                The "Entry Flex" Award!
                            </h3>
                            <p className="text-gray-300 text-lg">
                                Want to win this exclusive award? Arrive in your own vehicle, flex your style, and be the charm of the party from the very start. Be unique, be bold!
                            </p>
                            <button
                                type="button"
                                onClick={() => setShowFlexAwardModal(false)}
                                className="mt-6 w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-2 px-4 rounded-lg"
                            >
                                I'm In!
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence> */}
      {/* Add this modal at the end of your component's return statement */}
      <AnimatePresence>
        {showTermsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowTermsModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: -20 }}
              className="bg-gray-900 border border-yellow-400/30 rounded-2xl p-8 max-w-lg w-full text-white"
              onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                🎟 Event Terms & Conditions
              </h3>
              <ul className="space-y-3 text-gray-300 list-disc list-inside">
                <li>Tickets are non-refundable & non-transferable.</li>
                <li>Venue/date may change as per footfall or circumstances.</li>
                <li>
                  Misbehavior or nuisance = removal by security (no refund).
                </li>
                <li>Drugs, alcohol & prohibited items strictly banned.</li>
                <li>
                  Organizers are not responsible for loss, theft, or injury.
                </li>
                <li>Entry only with valid ticket & ID proof.</li>
                <li>
                  By entering, you agree to being part of event photos/videos.
                </li>
                <li>Organizer’s decision is final.</li>
              </ul>
              <button
                type="button"
                onClick={() => setShowTermsModal(false)}
                className="mt-6 w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-2 px-4 rounded-lg"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
