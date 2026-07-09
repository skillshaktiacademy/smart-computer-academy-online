import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight, GraduationCap, FileText, MessagesSquare, BadgeCheck } from 'lucide-react';

const steps = [
  { icon: GraduationCap, title: 'Skill Training', desc: 'Hands-on, job-focused practical learning', accent: 'bg-green-100 text-green-600' },
  { icon: FileText, title: 'Resume Building', desc: 'A professional, standout resume', accent: 'bg-blue-100 text-blue-600' },
  { icon: MessagesSquare, title: 'Mock Interviews', desc: 'Real interview practice & feedback', accent: 'bg-orange-100 text-orange-600' },
  { icon: BadgeCheck, title: 'Job Placement', desc: 'Placement support till you get hired', accent: 'bg-purple-100 text-purple-600' },
];

const stats = [
  { value: '500+', label: 'Placements' },
  { value: '1000+', label: 'Students Trained' },
  { value: '100%', label: 'Career Support' },
];

export default function PlacementSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32 hidden lg:block" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10 grid lg:grid-cols-2 items-center gap-12">
        {/* Left */}
        <div className="space-y-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/15 ring-1 ring-white/20 px-4 py-2 rounded-full font-medium text-sm"
          >
            <Briefcase size={16} /> Placement Cell
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Your Career Starts Here
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-blue-50/90 max-w-xl mx-auto lg:mx-0"
          >
            We prepare students with practical skills and interview readiness to help them succeed in
            today&apos;s competitive job market.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0"
          >
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/10 ring-1 ring-white/15 px-3 py-4 text-center">
                <div className="text-2xl md:text-3xl font-extrabold">{s.value}</div>
                <div className="text-xs text-blue-50/80 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-blue-50 px-8 py-4 rounded-full font-bold transition-colors shadow-xl touch-manipulation"
            >
              Get Career Guidance <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Right: career path steps */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-md mx-auto"
        >
          <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 shadow-2xl">
            <div className="relative flex flex-col gap-3">
              {/* connecting line */}
              <div className="absolute left-10 top-6 bottom-6 w-px bg-white/20 hidden sm:block" />
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex items-center gap-4 bg-white rounded-2xl p-3 sm:p-4 shadow-sm"
                >
                  <div className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center ${step.accent}`}>
                    <step.icon size={22} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-slate-900 font-bold text-sm sm:text-base flex items-center gap-2">
                      <span className="text-primary">{i + 1}.</span> {step.title}
                    </div>
                    <div className="text-slate-500 text-xs sm:text-sm truncate">{step.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
