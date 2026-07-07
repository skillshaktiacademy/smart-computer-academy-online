import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { Clock, GraduationCap, Wallet, ArrowRight } from 'lucide-react';

const courses = [
  { name: 'DCA', duration: '6 Months', eligibility: '10th/12th', fees: 'Affordable', popular: true },
  { name: 'ADCA', duration: '12 Months', eligibility: '10th/12th', fees: 'Affordable', popular: true },
  { name: 'Web Development', duration: '6 Months', eligibility: '12th/Graduation', fees: 'Affordable', popular: true },
  { name: 'Tally Prime', duration: '3 Months', eligibility: '12th Commerce', fees: 'Affordable' },
  { name: 'Python Programming', duration: '3 Months', eligibility: 'Basic Computer', fees: 'Affordable' },
  { name: 'Graphic Designing', duration: '6 Months', eligibility: '10th/12th', fees: 'Affordable' },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="w-full py-20 md:py-32 bg-muted/20">
      <div className="container px-4 md:px-6">
        <SectionHeader 
          title={<>Our <span className="gradient-text">Popular Courses</span></>} 
          subtitle="Explore our wide range of professional computer courses designed to make you industry-ready."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group"
            >
              {/* Course Image Placeholder */}
              <div className="h-48 bg-slate-100 dark:bg-slate-800 relative">
                {course.popular && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Popular
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{course.name}</h3>
                
                <div className="space-y-3 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-primary" />
                    <span>Duration: {course.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap size={16} className="text-primary" />
                    <span>Eligibility: {course.eligibility}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wallet size={16} className="text-primary" />
                    <span>Fees: {course.fees}</span>
                  </div>
                </div>
                
                <a href="#" className="inline-flex items-center justify-center w-full bg-primary/10 hover:bg-primary text-primary hover:text-white font-semibold py-3 rounded-xl transition-colors group/btn">
                  Learn More 
                  <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="text-primary font-medium hover:underline inline-flex items-center gap-2">
            View all courses <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
