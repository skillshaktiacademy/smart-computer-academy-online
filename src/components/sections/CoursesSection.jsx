import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { Clock, GraduationCap, Wallet, ArrowRight } from 'lucide-react';
import { siteInfo } from '../../data/site';

export default function CoursesSection() {
  return (
    <section id="courses" className="w-full py-16 md:py-32 bg-muted/20">
      <div className="container px-4 md:px-6">
        <SectionHeader 
          title={<>Our <span className="gradient-text">Popular Courses</span></>} 
          subtitle="Explore our wide range of professional computer courses designed to make you industry-ready."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {siteInfo.courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group flex flex-col h-full"
            >
              {/* Course Image Placeholder */}
              <div className="h-40 md:h-48 bg-slate-100 dark:bg-slate-800 relative shrink-0">
                {course.popular && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Popular
                  </div>
                )}
              </div>
              
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{course.name}</h3>
                
                <div className="space-y-3 mb-6 text-sm text-muted-foreground flex-grow">
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-primary shrink-0" />
                    <span>Duration: {course.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap size={16} className="text-primary shrink-0" />
                    <span>Eligibility: {course.eligibility}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wallet size={16} className="text-primary shrink-0" />
                    <span>Fees: <span className="font-medium text-foreground">{course.fees}</span></span>
                  </div>
                </div>
                
                <a href="#contact" className="inline-flex items-center justify-center w-full bg-primary/10 hover:bg-primary text-primary hover:text-white font-semibold py-3 md:py-3.5 px-4 rounded-xl transition-colors group/btn touch-manipulation">
                  Learn More 
                  <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="text-primary font-medium hover:underline inline-flex items-center gap-2 p-2 touch-manipulation">
            View all courses <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
