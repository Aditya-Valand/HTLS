import { motion } from 'framer-motion';
import { Twitter, Send, Instagram, MessageCircle } from 'lucide-react';

export function ContactFooterSection() {
  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter' },
    { icon: <Send className="h-5 w-5" />, href: '#', name: 'Telegram' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', name: 'Instagram' },
    { icon: <MessageCircle className="h-5 w-5" />, href: '#', name: 'WhatsApp' },
  ];

  return (
    <footer id="contact" className="border-t border-border/50 bg-gradient-to-r from-red-500/5 via-background to-blue-500/5">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="container mx-auto px-4 py-20 text-center"
      >
        <h2 className=" text-4xl uppercase tracking-widest font-pixel text-foreground">
          Contact Us
        </h2>
        <p className="mt-4 text-muted-foreground">
          Contact us regarding any queries
        </p>

        <div className="w-full max-w-xs mx-auto h-px bg-border my-8"></div>

        <a href="mailto:hxtlsdao@example.com" className="text-primary hover:underline text-lg">
          hxtlsdao@gmail.com
        </a>

        <div className="flex justify-center gap-4 mt-6">
          {socialLinks.map((social) => (
            <a 
              key={social.name} 
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
            >
              {social.icon}
              <span className="sr-only">{social.name}</span>
            </a>
          ))}
        </div>
      </motion.div>
      
      {/* Bottom Footer Bar */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-center">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
            <span className="font-bold">HxTLS DAO</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 HxTLS DAO
          </p>
        </div>
      </div>
    </footer>
  );
}