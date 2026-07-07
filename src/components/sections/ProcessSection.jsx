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
    <section className="w-full py-20 md:py-32 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-slate-950 to-slate-950"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeader 
          title={<>Your <span className="text-primary">Learning Journey</span></>} 
          subtitle="A simple step-by-step process to build your digital career."
        />

        <div className="relative mt-16 max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-800"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Connecting Line for mobile/tablet */}
                {i !== steps.length - 1 && (
                  <div className="lg:hidden absolute top-12 left-[50%] w-0.5 h-full bg-slate-800 -z-10"></div>
                )}
                
                <div className="w-20 h-20 rounded-full bg-slate-900 border-4 border-slate-800 flex items-center justify-center text-primary mb-4 z-10 group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-xl">
                  <step.icon size={32} />
                </div>
                
                <div className="bg-slate-900/50 backdrop-blur-sm p-4 rounded-xl border border-slate-800/50 flex-1 w-full lg:w-[140%] group-hover:border-primary/50 transition-colors">
                  <div className="text-xs font-bold text-primary mb-1">STEP {i + 1}</div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
