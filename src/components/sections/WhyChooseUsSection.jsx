import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import {
  Monitor, GraduationCap, Briefcase, Award, Target, Wallet,
  Cpu, Clock, Globe, BookOpen, Shield, Heart
} from 'lucide-react';
import { siteInfo } from '@/config/site';

const iconMap = {
  Monitor, GraduationCap, Briefcase, Award, Target, Wallet,
  Cpu, Clock, Globe, BookOpen, Shield, Heart,
};

export default function WhyChooseUsSection() {
  // Sort features by number for display order
  const sorted = [...siteInfo.features].sort((a, b) => a.number - b.number);

  return (
    <section
      id="features"
      aria-label="Why choose Smart Computer Academy"
      className="w-full py-14 md:py-24 bg-background"
    >
      <div className="container px-4 md:px-6">
        <SectionHeader
          title={<>Our Key <span className="gradient-text">Features</span></>}
          subtitle="Smart Computer Academy Kahalgaon provides the best environment, expert faculty, and resources for your IT education journey."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
          {sorted.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Monitor;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.93 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="bg-card border border-border rounded-2xl p-4 md:p-5 flex items-start gap-4 hover:shadow-lg hover:border-primary/50 transition-all group"
              >
                {/* Number badge + icon */}
                <div className="relative shrink-0">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon size={20} />
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary text-white text-[9px] font-bold flex items-center justify-center shadow">
                    {feature.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-sm md:text-base mb-1 leading-snug">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div>
            <p className="font-bold text-lg">{siteInfo.taglineHindi}</p>
            <p className="text-sm text-muted-foreground mt-1">
              Call: <a href={`tel:${siteInfo.phoneRaw}`} className="text-primary font-semibold hover:underline">{siteInfo.phone}</a>
            </p>
          </div>
          <a
            href={`tel:${siteInfo.phoneRaw}`}
            className="shrink-0 bg-primary hover:bg-primary/90 text-white font-bold px-7 py-3 rounded-full transition-colors shadow-lg shadow-primary/20 touch-manipulation"
          >
            Call Us Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
