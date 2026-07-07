import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { BookOpen, FileText, Monitor, CheckCircle, Award, Briefcase } from 'lucide-react';

const steps = [
  { title: 'Choose Course', icon: BookOpen, desc: 'Select from our wide range of professional courses.' },
  { title: 'Admission', icon: FileText, desc: 'Complete the simple admission process.' },
  { title: 'Practical Training', icon: Monitor, desc: 'Learn through hands-on practical sessions.' },
  { title: 'Assessment', icon: CheckCircle, desc: 'Clear the exams and project evaluations.' },
  { title: 'Certificate', icon: Award, desc: 'Earn your recognized certification.' },
  { title: 'Career Support', icon: Briefcase, desc: 'Get assistance for placements and jobs.' },
];

export default function ProcessSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-slate-950 to-slate-950"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeader
          title={<>Your <span className="text-primary">Learning Journey</span></>}
          subtitle="A simple step-by-step process to build your digital career."
        />

        <div className="relative mt-12 md:mt-16 max-w-6xl mx-auto">
          {/* Horizontal connector track (desktop only) — aligned to icon centers */}
          <div
            className="hidden lg:block absolute top-10 left-[8.33%] right-[8.33%] h-0.5 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800"
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4 relative">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group flex flex-col items-center text-center"
                >
                  {/* Icon with step number */}
                  <div className="relative w-20 h-20 rounded-full bg-slate-900 border-4 border-slate-800 flex items-center justify-center text-primary mb-5 z-10 group-hover:border-primary group-hover:scale-105 transition-all duration-300 shadow-xl">
                    <Icon size={30} />
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center border-2 border-slate-950">
                      {i + 1}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="bg-slate-900/60 backdrop-blur-sm p-4 rounded-xl border border-slate-800/60 w-full flex-1 group-hover:border-primary/50 transition-colors">
                    <div className="text-[11px] font-bold text-primary mb-1 uppercase tracking-wider">
                      Step {i + 1}
                    </div>
                    <h3 className="font-bold mb-1.5 text-sm sm:text-base leading-snug">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
