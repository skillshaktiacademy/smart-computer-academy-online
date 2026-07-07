import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-muted/20 border-t border-border">
      <div className="container px-4 md:px-6">
        <SectionHeader 
          title={<>Get in <span className="gradient-text">Touch</span></>} 
          subtitle="Have questions? Our team is here to help you."
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div className="bg-card border border-border p-8 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-input bg-background" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-input bg-background" placeholder="Your phone" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-input bg-background" placeholder="Your email" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-input bg-background h-32 resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-xl font-bold transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Our Location</h4>
                <p className="text-muted-foreground mt-1">123 Tech Park, Phase 1, <br/>New Delhi, India 110001</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Phone Number</h4>
                <p className="text-muted-foreground mt-1">+91 98765 43210 <br/>+91 11 2345 6789</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Email Address</h4>
                <p className="text-muted-foreground mt-1">info@smartcomputeracademy.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Working Hours</h4>
                <p className="text-muted-foreground mt-1">Mon - Sat: 9:00 AM - 7:00 PM <br/>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
