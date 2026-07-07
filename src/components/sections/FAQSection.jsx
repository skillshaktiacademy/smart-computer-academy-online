import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "What courses are available?", a: "We offer a variety of courses including DCA, ADCA, Tally Prime, Web Development, Graphic Designing, Python, C++, Digital Marketing, AI Tools, and Cyber Security." },
  { q: "How can I take admission?", a: "You can apply online by clicking the 'Apply for Admission' button or visit our nearest center for manual registration." },
  { q: "Is placement assistance available?", a: "Yes, we provide 100% placement assistance, resume building, and mock interviews for our professional course students." },
  { q: "Can I become a franchise partner?", a: "Absolutely! We offer a comprehensive franchise model with brand, marketing, and technical support. Fill the franchise inquiry form to get started." },
  { q: "How are certificates verified?", a: "All our certificates come with a unique QR code and registration number that can be instantly verified on our online portal." },
  { q: "Do you provide study materials?", a: "Yes, students receive complete digital study materials, access to the student portal, and practical assignments." },
  { q: "Are the courses practical or theoretical?", a: "We strongly believe in 100% practical learning. Our courses are designed with hands-on projects and live assignments." },
  { q: "What is the eligibility for ADCA?", a: "Students who have passed 10th or 12th standard are eligible for the ADCA course." }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6 max-w-4xl">
        <SectionHeader 
          title={<>Frequently Asked <span className="gradient-text">Questions</span></>} 
          subtitle="Everything you need to know about Smart Computer Academy."
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-border rounded-xl overflow-hidden bg-card"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between font-semibold text-left focus:outline-none hover:bg-muted/50 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown 
                  className={`text-muted-foreground transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : ''}`} 
                  size={20} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 pt-0 text-muted-foreground border-t border-border mt-2 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
