import { motion } from 'framer-motion';
import { Building2, CheckCircle2 } from 'lucide-react';
import FranchiseEnquiryForm from '@/features/franchise/components/FranchiseEnquiryForm';
import FAQSection from '../components/sections/FAQSection';
import { siteInfo } from '@/config/site';

export default function FranchisePage() {
  return (
    <div className="pt-16">
      <section
        id="franchise-enquiry"
        aria-label="Franchise enquiry form"
        className="w-full py-14 md:py-24 bg-background"
      >
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-8 md:mb-12"
          >
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full border border-primary/20 mb-4">
              <Building2 size={16} /> Franchise Enquiry
            </span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Start Your Own <span className="gradient-text">Computer Center</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg">
              Fill in the details step by step and our franchise team will get in touch with you.
            </p>
          </motion.div>

          {/* Benefit chips */}
          <div className="max-w-2xl mx-auto mb-10 md:mb-12 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {siteInfo.franchise.benefits.slice(0, 6).map((b) => (
              <div key={b} className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium">
                <CheckCircle2 size={18} className="text-primary shrink-0" />
                {b}
              </div>
            ))}
          </div>

          <FranchiseEnquiryForm />
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
