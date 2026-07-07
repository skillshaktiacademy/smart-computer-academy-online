import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone, MapPin } from 'lucide-react';
import { siteInfo } from '../../data/site';

export default function FranchiseSection() {
  return (
    <section
      id="franchise"
      aria-label="Franchise opportunity at Smart Computer Academy"
      className="w-full py-14 md:py-24 bg-muted/30"
    >
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Top tag */}
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full border border-primary/20">
              Franchise Opportunity
            </span>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              Open Your Own <span className="gradient-text">Computer Center</span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground">
              {siteInfo.franchise.tagline} — Become a franchise partner and build your own successful
              computer training centre with full support from Smart Computer Academy.
            </p>

            {/* Benefits grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
              {siteInfo.franchise.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="text-primary shrink-0" size={18} />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="bg-card border border-border rounded-2xl p-4 space-y-2">
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={16} className="text-primary shrink-0" />
                <span>{siteInfo.franchise.headOffice}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-primary shrink-0" />
                <a
                  href={`tel:${siteInfo.phoneRaw}`}
                  className="text-primary font-bold text-lg hover:underline touch-manipulation"
                >
                  {siteInfo.phone}
                </a>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/franchise"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-7 py-3.5 rounded-full font-bold transition-all shadow-lg shadow-primary/20 touch-manipulation"
              >
                Apply for Franchise <ArrowRight size={16} />
              </Link>
              <a
                href={siteInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-7 py-3.5 rounded-full font-bold transition-colors touch-manipulation"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right: Quick Inquiry form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-card border border-border p-6 sm:p-8 rounded-3xl shadow-2xl relative z-10">
              <h3 className="text-xl font-bold mb-1 text-center">Franchise Inquiry</h3>
              <p className="text-sm text-muted-foreground text-center mb-6">
                हमसे संपर्क करें — हम आपकी मदद करेंगे
              </p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium" htmlFor="f-fname">First Name</label>
                    <input
                      id="f-fname"
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="Rahul"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium" htmlFor="f-lname">Last Name</label>
                    <input
                      id="f-lname"
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="Kumar"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium" htmlFor="f-phone">Phone Number *</label>
                  <input
                    id="f-phone"
                    type="tel"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium" htmlFor="f-city">City / District</label>
                  <input
                    id="f-city"
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="e.g. Bhagalpur"
                  />
                </div>
                <a
                  href={`${siteInfo.whatsappLink}?text=${encodeURIComponent('Hello, I want to enquire about Smart Computer Academy Franchise.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-3 rounded-xl font-bold transition-colors mt-2 touch-manipulation"
                >
                  Submit via WhatsApp <ArrowRight size={16} />
                </a>
              </form>
            </div>
            {/* Decorative bg */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-secondary/10 rounded-3xl border border-secondary/20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
