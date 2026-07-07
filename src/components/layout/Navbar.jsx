import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import logo from '../../assets/Logo/sca-logo-256.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About', path: '/about' },
    { name: 'Franchise', path: '/franchise' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glassmorphism py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <img
            src={logo}
            alt="Smart Computer Academy logo"
            width={40}
            height={40}
            className="h-9 w-9 sm:h-10 sm:w-10 object-contain group-hover:scale-105 transition-transform"
          />
          <span className="text-base sm:text-xl font-bold tracking-tight leading-none">
            Smart Computer<br /><span className="text-primary text-xs sm:text-sm leading-none">Academy</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-lg shadow-primary/20 hover:shadow-primary/40"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glassmorphism border-t border-border/50 py-4 px-4 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium p-2 rounded-md transition-colors ${location.pathname === link.path ? 'text-primary bg-primary/10' : 'text-foreground/80 hover:text-primary hover:bg-muted/50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground text-center py-3 rounded-md font-medium mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
