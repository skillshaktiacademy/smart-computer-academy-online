import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, GraduationCap, Building2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { siteInfo } from '../../data/site';
import logo from '../../assets/Logo/sca-logo-256.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Courses', path: '/courses' },
  { name: 'About', path: '/about' },
  { name: 'Franchise', path: '/franchise' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glassmorphism py-2.5' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group shrink-0" onClick={() => setMobileMenuOpen(false)}>
          <img
            src={logo}
            alt="Smart Computer Academy logo"
            width={40}
            height={40}
            className="h-9 w-9 sm:h-11 sm:w-11 object-contain group-hover:scale-105 transition-transform"
          />
          <span className="text-base sm:text-xl font-bold tracking-tight leading-none">
            Smart Computer
            <br />
            <span className="text-primary text-xs sm:text-sm leading-none">Academy · Kahalgaon</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-sm font-medium transition-colors ${
                isActive(link.path) ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-primary" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={`tel:${siteInfo.phoneRaw}`}
            className="inline-flex items-center gap-2 border border-primary/30 text-primary hover:bg-primary/10 px-4 py-2.5 rounded-full text-sm font-semibold transition-colors"
          >
            <Phone size={16} /> Call Now
          </a>
          <Link
            to="/admission"
            className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary/90 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-lg shadow-primary/20 hover:shadow-primary/40"
          >
            <GraduationCap size={16} /> Apply Now
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <a
            href={`tel:${siteInfo.phoneRaw}`}
            aria-label="Call now"
            className="h-10 w-10 rounded-full border border-primary/30 text-primary flex items-center justify-center"
          >
            <Phone size={18} />
          </a>
          <ThemeToggle />
          <button
            className="h-10 w-10 rounded-full flex items-center justify-center text-foreground"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden glassmorphism border-t border-border/50"
          >
            <div className="px-4 py-4 flex flex-col gap-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-base font-medium px-3 py-3 rounded-xl transition-colors ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/80 hover:text-primary hover:bg-muted/50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Lead CTAs */}
              <div className="grid grid-cols-2 gap-3 mt-3">
                <Link
                  to="/admission"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-semibold text-sm"
                >
                  <GraduationCap size={16} /> Admission
                </Link>
                <Link
                  to="/franchise"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 border border-primary/30 text-primary py-3 rounded-xl font-semibold text-sm"
                >
                  <Building2 size={16} /> Franchise
                </Link>
              </div>

              <a
                href={`${siteInfo.whatsappLink}?text=${encodeURIComponent(siteInfo.whatsappMessage || '')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-semibold text-sm mt-1"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" /></svg>
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
