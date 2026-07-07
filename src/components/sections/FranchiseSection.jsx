import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const benefits = [
  'Brand Support', 'Marketing Support', 'ERP Software', 
  'Student Management', 'Certificates', 'Digital Platform', 
  'Training Materials', 'Technical Support'
];

export default function FranchiseSection() {
  return (
    <section id="franchise" className="w-full py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Start Your Own <br/>
              <span className="gradient-text">Smart Computer Academy</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Become a franchise partner and build your own successful computer training centre with complete support from Smart Computer Academy.
            </p>

            <div className="grid grid-cols-2 gap-4 py-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="text-secondary shrink-0" size={20} />
                  <span className="font-medium text-sm md:text-base">{benefit}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-foreground text-background hover:bg-foreground/90 px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto">
              Become a Franchise <ArrowRight size={18} />
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-card border border-border p-8 rounded-3xl shadow-2xl relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-center">Franchise Inquiry</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-input bg-background" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-input bg-background" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input type="email" className="w-full px-4 py-2 rounded-lg border border-input bg-background" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-2 rounded-lg border border-input bg-background" placeholder="+91" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">City</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-input bg-background" placeholder="New Delhi" />
                </div>
                <button type="button" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-xl font-bold transition-colors mt-4">
                  Submit Request
                </button>
              </form>
            </div>
            {/* Background decoration */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-secondary/10 rounded-3xl border border-secondary/20 -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
