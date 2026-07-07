import { Link } from 'react-router-dom';
import { MonitorPlay, Globe, MapPin, Phone, Mail } from 'lucide-react';
import { siteInfo } from '../../data/site';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group text-white">
              <div className="bg-primary text-white p-2 md:p-2.5 rounded-lg">
                <MonitorPlay size={24} />
              </div>
              <span className="text-lg md:text-xl font-bold tracking-tight">{siteInfo.name}</span>
            </Link>
            <p className="text-sm mt-4 text-slate-400 leading-relaxed">
              {siteInfo.tagline}
              <br/>
              An ISO 9001:2015 Certified Institute.
            </p>
            <div className="flex gap-4 pt-2">
              <a href={siteInfo.social.facebook} className="p-2 -ml-2 text-slate-400 hover:text-primary transition-colors touch-manipulation"><Globe size={20} /></a>
              <a href={siteInfo.social.instagram} className="p-2 text-slate-400 hover:text-primary transition-colors touch-manipulation"><Globe size={20} /></a>
              <a href={siteInfo.social.youtube} className="p-2 text-slate-400 hover:text-primary transition-colors touch-manipulation"><Globe size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link to="/courses" className="block py-2 text-sm text-slate-400 hover:text-primary transition-colors">All Courses</Link></li>
              <li><Link to="/franchise" className="block py-2 text-sm text-slate-400 hover:text-primary transition-colors">Become a Franchise</Link></li>
              <li><Link to="/about" className="block py-2 text-sm text-slate-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="block py-2 text-sm text-slate-400 hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/verify-certificate" className="block py-2 text-sm text-slate-400 hover:text-primary transition-colors">Verify Certificate</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-1">
              <li><Link to="/privacy" className="block py-2 text-sm text-slate-400 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="block py-2 text-sm text-slate-400 hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/refund" className="block py-2 text-sm text-slate-400 hover:text-primary transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-0.5" size={18} />
                <span className="leading-relaxed">{siteInfo.address.full}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <a href={`tel:${siteInfo.phoneRaw}`} className="hover:text-primary transition-colors">{siteInfo.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <a href={`mailto:${siteInfo.email}`} className="hover:text-primary transition-colors break-all">{siteInfo.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500 gap-4 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} {siteInfo.name}. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
             <p>Director: {siteInfo.director}</p>
             <p className="hidden sm:block">•</p>
             <p className="text-xs">{siteInfo.registrations.map(r => r.code).filter(Boolean).join(' | ')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
