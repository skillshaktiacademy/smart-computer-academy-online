import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle2 } from 'lucide-react';
import AdmissionEnquiryForm from '../components/admission/AdmissionEnquiryForm';
import { siteInfo } from '../data/site';

const highlights = [
  '100% Practical Training',
  'ISO 9001:2015 Certified',
  'Morning / Evening Batches',
  'Certificate on Completion',
  'Job & Placement Support',
  'Affordable Fees',
];

export default function AdmissionPage() {
  return (
    <div className="pt-16">
      <section
        id="admission-enquiry"
        aria-label="Admission enquiry form"
        className="w-full py-14 md:py-24 bg-background"
      >
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-10 md:mb-12"
          >
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full border border-primary/20 mb-4">
              <GraduationCap size={16} /> Admission Open
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Apply for <span className="gradient-text">Admission</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg">
              Take the first step towards your digital career at {siteInfo.name}, Kahalgaon. Fill in the
              details below and our admission team will guide you through the process.
            </p>
          </motion.div>

          {/* Highlights */}
          <div className="max-w-4xl mx-auto mb-10 md:mb-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium"
              >
                <CheckCircle2 size={18} className="text-primary shrink-0" />
                {item}
              </div>
            ))}
          </div>

          <AdmissionEnquiryForm />
        </div>
      </section>
    </div>
  );
}
