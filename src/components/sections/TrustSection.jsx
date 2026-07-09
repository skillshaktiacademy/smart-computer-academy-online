import { motion } from 'framer-motion';
import { siteInfo } from '@/config/site';
import { ShieldCheck, BadgeCheck } from 'lucide-react';

export default function TrustSection() {
  return (
    <section aria-label="Trust signals and certifications" className="w-full py-10 md:py-16 bg-muted/30 border-y border-border">
      <div className="container px-4 md:px-6 space-y-10">

        {/* Certifications row */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
          {siteInfo.registrations.map((reg, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2 shadow-sm"
            >
              <ShieldCheck size={16} className="text-primary shrink-0" />
              <span className="text-xs md:text-sm font-medium">{reg.label}</span>
              {reg.code && (
                <span className="text-[10px] text-muted-foreground hidden sm:inline">({reg.code})</span>
              )}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {siteInfo.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-background/60 transition-colors"
            >
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-1">{stat.value}</p>
              <p className="text-sm md:text-base font-semibold text-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* DigiLocker highlight */}
        <div className="flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
          <BadgeCheck size={18} className="text-primary shrink-0" />
          <span>
            A first in Kahalgaon — get your <strong className="text-foreground">DigiLocker Verified Certificate</strong> at Smart Computer Academy. कहलगांव में पहली बार।
          </span>
        </div>
      </div>
    </section>
  );
}
