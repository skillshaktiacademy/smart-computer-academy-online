import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Store, ArrowRight, Phone, BadgeCheck, TrendingUp, Headset } from 'lucide-react';
import { siteInfo } from '@/config/site';

const points = [
  { icon: BadgeCheck, label: 'ISO Certified Brand' },
  { icon: TrendingUp, label: 'Low Investment, High Returns' },
  { icon: Headset, label: 'Full Training & Support' },
];

export default function FranchiseCTA() {
  return (
    <section aria-label="Become a franchise owner" className="w-full py-14 md:py-20 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 px-6 py-12 md:px-14 md:py-16 shadow-2xl shadow-primary/20"
        >
          {/* Decorative glows / grid */}
          <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center gap-6 lg:flex-row lg:justify-between lg:text-left">
            <div className="max-w-2xl space-y-4">
              <span className="inline-flex items-center gap-2 bg-white/15 text-white text-sm font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm ring-1 ring-white/20">
                <Store size={15} /> Franchise Opportunity
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-white leading-tight">
                Become a Franchise Owner
              </h2>
              <p className="text-base md:text-lg text-blue-50/90">
                Start your own computer training centre under the Smart Computer Academy brand — with
                ERP software, marketing support, DigiLocker certificates and complete training.
                <span className="block mt-1 font-medium text-white">अपना कंप्यूटर सेंटर खोलें — पूरा सहयोग हमारा।</span>
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 pt-1">
                {points.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-sm font-medium text-white/95">
                    <Icon size={16} className="text-orange-300" /> {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto">
              <Link
                to="/franchise"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-7 py-3.5 rounded-full font-bold transition-colors shadow-lg touch-manipulation whitespace-nowrap"
              >
                Apply for Franchise <ArrowRight size={17} />
              </Link>
              <a
                href={`tel:${siteInfo.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white hover:bg-white/20 ring-1 ring-white/30 px-7 py-3.5 rounded-full font-bold transition-colors touch-manipulation whitespace-nowrap"
              >
                <Phone size={16} /> {siteInfo.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
