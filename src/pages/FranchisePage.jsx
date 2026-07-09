import { motion } from 'framer-motion';
import FranchiseSection from '../components/sections/FranchiseSection';
import FranchiseEnquiryForm from '@/features/franchise/components/FranchiseEnquiryForm';
import FAQSection from '../components/sections/FAQSection';

export default function FranchisePage() {
  return (
    <div className="pt-16">
      <FranchiseSection />

      {/* Detailed franchise enquiry */}
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
            className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
          >
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full border border-primary/20 mb-4">
              Franchise Enquiry Form
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Start Your Own <span className="gradient-text">Computer Center</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Fill in the details below and our franchise team will get in touch with you. All fields help
              us understand your setup and guide you better.
            </p>
          </motion.div>

          <FranchiseEnquiryForm />
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
