import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../../components/ui/sheet';
import { ThemeToggleButton } from '../theme-toggle-button';
import { cn } from '../../lib/utils';
import logo from '../../../public/hxtlsdao.png';

const navLinks = [
  { href: '#mission', label: 'Mission' },
  { href: '/inquiry', label: 'Inquiry' },
  { href: '#community', label: 'Community' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4"
    >
      <div className={cn(
        "container relative mx-4 flex items-center justify-between rounded-full bg-background/50 p-2 shadow-lg backdrop-blur-xl transition-all duration-300",
        scrolled ? "max-w-4xl" : "max-w-lg"
      )}>
        {/* IMPROVED: Animated Gradient Border */}
        <div className={cn(
          "absolute inset-0 rounded-full border border-transparent transition-all duration-300 -z-10",
          scrolled ? "border-white/10" : "border-transparent"
        )}>
          <div className={cn(
            "absolute inset-0 rounded-full bg-gradient-to-r from-primary/50 to-cyan-400/50 blur-lg transition-opacity duration-300",
            scrolled ? "opacity-100" : "opacity-0"
          )}></div>
        </div>

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 pl-4">
          {/* Constrain the image size with h-8 (height of 2rem) */}
          <img src={logo} alt="HxTLS DAO Logo" className="h-14 w-auto" />
        </a>
        
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 rounded-full bg-secondary/50 p-1">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground rounded-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggleButton />
          
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            
            {/* IMPROVED: Professional Mobile Menu */}
            <SheetContent side="right" className="w-full max-w-xs bg-card p-0 dark:bg-background/90 dark:backdrop-blur-xl border-l border-border">
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b border-border">
                        <span className="font-bold text-lg">HxTLS DAO</span>
                        <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setIsMobileMenuOpen(false)}>
                            <X className="h-5 w-5" />
                            <span className="sr-only">Close Menu</span>
                        </Button>
                    </div>

                    <div className="h-px bg-border/50"></div>
                    
                    <nav className="flex flex-col gap-2 p-4 mt-4">
                    {navLinks.map((link) => (
                        <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground p-3 rounded-md"
                        >
                        {link.label}
                        </a>
                    ))}
                    </nav>

                    <div className="flex-grow"></div>
                    
                    <div className="h-px bg-border/50"></div>

                    <div className="p-4 flex flex-col gap-4">
                        
                        <div className="flex justify-center">
                          <ThemeToggleButton />
                        </div>
                    </div>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}