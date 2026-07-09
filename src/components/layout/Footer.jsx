import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight, GraduationCap, Building2, BadgeCheck } from 'lucide-react';
import { siteInfo } from '@/config/site';
import SocialLinks from '../ui/SocialLinks';
import logo from '../../assets/Logo/sca-logo-256.png';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Lead-gen CTA band */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative rounded-3xl bg-gradient-to-r from-primary to-blue-700 p-6 sm:p-10 mt-12 md:mt-16 overflow-hidden shadow-xl">
          <div className="absolute -top-16 -right-10 w-56 h-56 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="text-white">
              <h2 className="text-2xl sm:text-3xl font-bold">Ready to Start Your Journey?</h2>
              <p className="text-white/90 mt-2 max-w-xl">
                Admission open for all courses — or start your own computer centre with our franchise. Talk to us today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
              <Link
                to="/admission"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-white/90 px-6 py-3.5 rounded-full font-bold transition-colors touch-manipulation"
              >
                <GraduationCap size={18} /> Apply for Admission
              </Link>
              <Link
                to="/franchise"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 border border-white/40 text-white hover:bg-white/15 px-6 py-3.5 rounded-full font-bold transition-colors touch-manipulation"
              >
                <Building2 size={18} /> Become a Franchise
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 md:px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 group text-white">
              <img src={logo} alt="Smart Computer Academy logo" width={44} height={44} loading="lazy" className="h-11 w-11 object-contain" />
              <span className="text-lg font-bold tracking-tight leading-tight">
                Smart Computer<br /><span className="text-primary text-xs">Academy · Kahalgaon</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              {siteInfo.tagline}. An ISO 9001:2015 Certified computer training institute empowering students with
              100% practical, job-ready skills.
            </p>
            <div className="flex flex-wrap gap-2">
              {siteInfo.registrations
                .filter((r) => r.code)
                .map((r) => (
                  <span key={r.code} className="inline-flex items-center gap-1 text-[11px] text-slate-400 bg-slate-900 border border-slate-800 rounded-full px-2.5 py-1">
                    <BadgeCheck size={12} className="text-primary" /> {r.code}
                  </span>
                ))}
            </div>
            <SocialLinks className="pt-1" />
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-1">
              {[
                { to: '/courses', label: 'All Courses' },
                { to: '/admission', label: 'Admission Enquiry' },
                { to: '/franchise', label: 'Become a Franchise' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact Us' },
                { to: '/verify-certificate', label: 'Verify Certificate' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="group flex items-center gap-1.5 py-2 text-sm text-slate-400 hover:text-primary transition-colors">
                    <ArrowRight size={13} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal">
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-1">
              {[
                { to: '/privacy', label: 'Privacy Policy' },
                { to: '/terms', label: 'Terms of Service' },
                { to: '/refund', label: 'Refund Policy' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="block py-2 text-sm text-slate-400 hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-0.5" size={18} />
                <span className="leading-relaxed">{siteInfo.address.full}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-primary shrink-0 mt-0.5" size={18} />
                <span className="flex flex-col">
                  <a href={`tel:${siteInfo.phoneRaw}`} className="hover:text-primary transition-colors">{siteInfo.phone}</a>
                  {siteInfo.altPhones?.map((n) => (
                    <a key={n} href={`tel:+91${n}`} className="hover:text-primary transition-colors">+91 {n}</a>
                  ))}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <a href={`mailto:${siteInfo.email}`} className="hover:text-primary transition-colors break-all">{siteInfo.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-primary shrink-0 mt-0.5" size={18} />
                <span className="leading-relaxed">{siteInfo.hours.weekdays}<br />{siteInfo.hours.note}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500 gap-3 text-center md:text-left">
          <p>&copy; {year} {siteInfo.name}. All rights reserved.</p>
          <p>Director: {siteInfo.director} · Made in Kahalgaon, Bihar 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
