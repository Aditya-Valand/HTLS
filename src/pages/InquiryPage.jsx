import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Button } from "../components/ui/button";
import { CheckCircle, AlertTriangle, Send } from "lucide-react";
import EarthCanvas from "../components/canvas/EarthCanvas"; // <-- Import the new Earth model

export function InquiryPage() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState({ status: null, message: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setFormStatus({ status: 'error', message: 'Please fill out all fields.' });
      return;
    }
    setLoading(true);

    // Using your EmailJS credentials
    emailjs.send(
      "service_5dabe36",
      "template_botu99b",
      { from_name: form.name, to_name: "Aditya Valand", from_email: form.email, message: form.message },
      "_yymVXrC-B8AY6pot"
    ).then(() => {
      setLoading(false);
      setFormStatus({ status: 'success', message: 'Thank you! Your message has been sent.' });
      setForm({ name: "", email: "", message: "" });
    }).catch((error) => {
      setLoading(false);
      console.error(error);
      setFormStatus({ status: 'error', message: 'Ahh, something went wrong. Please try again.' });
    });
  };

  const slideIn = (direction) => ({
    hidden: { x: direction === "left" ? "-50%" : "50%", opacity: 0 },
    show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 50, duration: 1.2 } },
  });

  return (
    <section className="relative min-h-screen bg-background pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 crypto-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div variants={slideIn("left")} initial="hidden" animate="show">
            <div className="mb-8">
              <p className="text-primary font-semibold uppercase tracking-widest mb-2">Get in Touch</p>
              <h1 className="font-silkscreen text-4xl md:text-6xl uppercase">Inquiry</h1>
            </div>
            
            <div className="bg-secondary/50 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/30">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Form fields are the same as before... */}
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Your Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?" className="mt-2 w-full bg-secondary/80 border border-border/50 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary focus:border-primary transition" />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Your Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email?" className="mt-2 w-full bg-secondary/80 border border-border/50 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary focus:border-primary transition" />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Your Message</label>
                  <textarea rows={5} name="message" value={form.message} onChange={handleChange} placeholder="What would you like to discuss?" className="mt-2 w-full bg-secondary/80 border border-border/50 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary focus:border-primary transition resize-none" />
                </div>
                
                <Button type="submit" disabled={loading} size="lg" className="w-full rounded-full text-lg group h-14 bg-gradient-to-r from-primary to-cyan-400 text-white border-0">
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>

              {formStatus.status && (
                <div className={`mt-6 p-4 rounded-lg flex items-center text-sm ${formStatus.status === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                  {formStatus.status === 'success' ? <CheckCircle className="h-5 w-5 mr-3" /> : <AlertTriangle className="h-5 w-5 mr-3" />}
                  {formStatus.message}
                </div>
              )}
            </div>
          </motion.div>

          {/* --- THIS IS THE UPDATED 3D MODEL SECTION --- */}
          <motion.div variants={slideIn("right")} initial="hidden" animate="show" className="h-[400px] lg:h-[600px] w-full cursor-grab">
            <EarthCanvas />
          </motion.div>

        </div>
      </div>
    </section>
  );
}