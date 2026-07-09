import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { siteInfo } from '@/config/site';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-32 bg-muted/20 border-t border-border">
      <div className="container px-4 md:px-6">
        <SectionHeader 
          title={<>Get in <span className="gradient-text">Touch</span></>} 
          subtitle="Have questions? Our team is here to help you."
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-8 md:mt-12">
          {/* Contact Form */}
          <div className="bg-card border border-border p-6 md:p-8 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Your phone" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Your email" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-input bg-background h-32 resize-none focus:ring-2 focus:ring-primary focus:outline-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3.5 px-4 rounded-xl font-bold transition-colors touch-manipulation shadow-md shadow-primary/20">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Our Location</h4>
                <p className="text-muted-foreground mt-1 text-sm md:text-base leading-relaxed">
                  {siteInfo.address.line1}, <br/>{siteInfo.address.line2}, <br/>{siteInfo.address.line3}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Phone Number</h4>
                <div className="text-muted-foreground mt-1 space-y-1 text-sm md:text-base">
                  <a href={`tel:${siteInfo.phoneRaw}`} className="block hover:text-primary transition-colors">{siteInfo.phone}</a>
                  {siteInfo.altPhones?.map((num, i) => (
                    <a key={i} href={`tel:${num}`} className="block hover:text-primary transition-colors">+91 {num}</a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Email Address</h4>
                <a href={`mailto:${siteInfo.email}`} className="text-muted-foreground mt-1 block hover:text-primary transition-colors break-all text-sm md:text-base">
                  {siteInfo.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Working Hours</h4>
                <p className="text-muted-foreground mt-1 text-sm md:text-base">
                  {siteInfo.hours.weekdays} <br/>{siteInfo.hours.sunday} <br/>
                  <span className="text-primary/80 font-medium text-xs md:text-sm">{siteInfo.hours.note}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-10 md:mt-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <MapPin size={20} className="text-primary" /> Find Us on the Map
            </h3>
            <a
              href={siteInfo.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline touch-manipulation"
            >
              <Navigation size={16} /> Get Directions
            </a>
          </div>
          <div className="rounded-3xl overflow-hidden border border-border shadow-sm bg-muted">
            <iframe
              title={`${siteInfo.name} location on Google Maps`}
              src={siteInfo.mapEmbedUrl}
              className="w-full h-64 sm:h-80 md:h-96 border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
