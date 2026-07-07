import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { CheckCircle2 } from 'lucide-react';
import { siteInfo } from '../../data/site';

export default function WhyChooseUsSection() {
  return (
    <section className="w-full py-16 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <SectionHeader 
          title={<>Our Key <span className="gradient-text">Features</span></>} 
          subtitle="We provide the best environment and resources for your IT education journey."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {siteInfo.features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-card border border-border rounded-2xl p-5 md:p-6 flex items-start gap-4 hover:shadow-lg hover:border-primary/50 transition-all group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="font-bold text-base md:text-lg mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
