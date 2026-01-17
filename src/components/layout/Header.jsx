import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import logo from '../../../public/hxtlsdao.png';
import logo1 from '../../assets/hxtlsdao.png';

const navLinks = [
  { href: '#mission', label: 'Mission' },
  { href: '/inquiry', label: 'Inquiry' },
  { href: '#community', label: 'Community' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Ambient glow effect */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b from-purple-500/20 via-blue-500/10 to-transparent blur-3xl pointer-events-none z-0" />
      
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-6'
      }`}>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className={`relative transition-all duration-500 ${
            scrolled 
              ? 'bg-black/60 backdrop-blur-xl border border-white/10' 
              : 'bg-gradient-to-r from-black/20 via-purple-900/20 to-black/40 backdrop-blur-xl border border-purple-500/30'
          } rounded-full shadow-2xl ${scrolled ? 'shadow-purple-500/5' : 'shadow-purple-500/20'}`}>
            
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
            
            <div className="flex items-center justify-between px-6 sm:px-8 py-4 sm:py-5">
              {/* Logo Section with Animation */}
              <a 
                href="/" 
                className="flex items-center gap-3 group relative z-10"
                onMouseEnter={() => setActiveLink('logo')}
                onMouseLeave={() => setActiveLink('')}
              >
                <div className="relative">
                  {/* Pulsing ring effect */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-md transition-all duration-300 ${
                    activeLink === 'logo' ? 'scale-125 opacity-75' : 'scale-100 opacity-0'
                  }`} />
                  
                  {/* Logo container with glassmorphism */}
                  {/* <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300"> */}
                    {/* Replace with your actual logo */}
                    <img src={logo} alt="HxTLS DAO Logo" className="w-14 h-18 -mt-1 md:w-14 md:h-14" />
                  {/* </div> */}
                  
                </div>
              </a>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-2">
                {navLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setActiveLink(link.href)}
                    onMouseLeave={() => setActiveLink('')}
                    className="relative px-6 py-3 text-base font-bold text-white/80 hover:text-white transition-all duration-300 group"
                  >
                    {/* Hover background effect */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm transition-all duration-300 ${
                      activeLink === link.href ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`} />
                    
                    {/* Animated border */}
                    <div className={`absolute inset-0 rounded-full border border-purple-500/50 transition-all duration-300 ${
                      activeLink === link.href ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`} />
                    
                    <span className="relative z-10">{link.label}</span>
                    
                    {/* Underline effect */}
                    
                  </a>
                ))}
                
                {/* CTA Button */}
                <a href="https://www.instagram.com/hxtls_dao" target="_blank" rel="noopener noreferrer">               <button className="relative ml-4 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 group">
                  <span className="flex items-center gap-2">
                    Join DAO
                    <svg 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button></a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
       <div 
          className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu Drawer */}
        <div className={`lg:hidden fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-gradient-to-b from-black via-purple-950/20 to-black border-l border-purple-500/30 backdrop-blur-2xl transition-transform duration-500 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50 overflow-y-auto`}>
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="px-6 pb-8">
            {/* Logo Section */}
            <div className="mb-12 flex items-center gap-3 pb-8 border-b border-purple-500/20">
              <img src={logo} alt="HxTLS DAO Logo" className="w-16 flex items-center h-16 md:w-16 md:h-16" />
                
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-3 mb-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative px-6 py-4 rounded-xl text-lg font-medium text-white/90 hover:text-white transition-all duration-300 group"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMobileMenuOpen ? 'slideIn 0.4s ease-out forwards' : 'none',
                    opacity: isMobileMenuOpen ? 1 : 0
                  }}
                >
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover border */}
                  <div className="absolute inset-0 border border-purple-500/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <span className="relative z-10 flex items-center justify-between">
                    {link.label}
                    <svg 
                      className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              ))}
            </nav>
            
            {/* CTA Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              style={{
                animationDelay: `${navLinks.length * 50}ms`,
                animation: isMobileMenuOpen ? 'slideIn 0.4s ease-out forwards' : 'none',
                opacity: isMobileMenuOpen ? 1 : 0
              }}
            >
              Join DAO
              <svg 
                className="w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {/* Social Links or Additional Info */}
            <div className="mt-12 pt-8 border-t border-purple-500/20">
              <p className="text-sm text-white/50 text-center">
                Building the future of Web3 in India
              </p>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  );
}