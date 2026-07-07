import { Link } from 'react-router-dom';
import { MonitorPlay, Globe, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group text-white">
              <div className="bg-primary text-white p-2 rounded-lg">
                <MonitorPlay size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight">Smart Computer<br/><span className="text-primary text-sm leading-none">Academy</span></span>
            </Link>
            <p className="text-sm mt-4 text-slate-400">
              India's leading computer education network. Empowering students with industry-ready skills for a successful career.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-primary transition-colors"><Globe size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Globe size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Globe size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Globe size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#courses" className="hover:text-primary transition-colors">All Courses</a></li>
              <li><a href="#franchise" className="hover:text-primary transition-colors">Become a Franchise</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Verify Certificate</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-0.5" size={18} />
                <span>123 Tech Park, Phase 1, New Delhi, India 110001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span>info@smartcomputeracademy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Smart Computer Academy. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Excellence</p>
        </div>
      </div>
    </footer>
  );
}
