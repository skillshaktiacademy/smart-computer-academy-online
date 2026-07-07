import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight } from 'lucide-react';

export default function PlacementSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-primary text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32 hidden lg:block"></div>
      
      <div className="container px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full font-medium text-sm mb-4"
          >
            <Briefcase size={16} /> Placement Cell
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Your Career Starts Here
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl"
          >
            We prepare students with practical skills and interview readiness to help them succeed in today's competitive job market.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-full font-bold transition-all shadow-xl">
              Get Career Guidance <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-md"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-8 rounded-3xl shadow-2xl overflow-hidden">
             <div className="flex flex-col gap-4 sm:gap-6">
               <div className="bg-white p-3 sm:p-4 rounded-xl flex items-center gap-3 sm:gap-4">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-lg sm:text-xl">1</div>
                 <div className="text-slate-900 font-semibold text-sm sm:text-base">Skill Training</div>
               </div>
               <div className="bg-white p-3 sm:p-4 rounded-xl flex items-center gap-3 sm:gap-4 ml-3 sm:ml-8">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg sm:text-xl">2</div>
                 <div className="text-slate-900 font-semibold text-sm sm:text-base">Resume Building</div>
               </div>
               <div className="bg-white p-3 sm:p-4 rounded-xl flex items-center gap-3 sm:gap-4 ml-6 sm:ml-16">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-lg sm:text-xl">3</div>
                 <div className="text-slate-900 font-semibold text-sm sm:text-base">Mock Interviews</div>
               </div>
               <div className="bg-white p-3 sm:p-4 rounded-xl flex items-center gap-3 sm:gap-4 ml-9 sm:ml-24">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-lg sm:text-xl">4</div>
                 <div className="text-slate-900 font-semibold text-sm sm:text-base">Job Placement</div>
               </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
