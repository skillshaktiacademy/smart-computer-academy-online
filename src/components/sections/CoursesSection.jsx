import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import { Clock, GraduationCap, ArrowRight, Tag, Sparkles } from 'lucide-react';
import { siteInfo } from '../../data/site';

const colorMap = {
  green:  'from-green-500/20 to-green-600/5 border-green-500/30 text-green-600',
  blue:   'from-blue-500/20 to-blue-600/5 border-blue-500/30 text-blue-600',
  orange: 'from-orange-500/20 to-orange-600/5 border-orange-500/30 text-orange-600',
  purple: 'from-purple-500/20 to-purple-600/5 border-purple-500/30 text-purple-600',
  teal:   'from-teal-500/20 to-teal-600/5 border-teal-500/30 text-teal-600',
  indigo: 'from-indigo-500/20 to-indigo-600/5 border-indigo-500/30 text-indigo-600',
  pink:   'from-pink-500/20 to-pink-600/5 border-pink-500/30 text-pink-600',
  cyan:   'from-cyan-500/20 to-cyan-600/5 border-cyan-500/30 text-cyan-600',
  amber:  'from-amber-500/20 to-amber-600/5 border-amber-500/30 text-amber-600',
  red:    'from-red-500/20 to-red-600/5 border-red-500/30 text-red-600',
  slate:  'from-slate-500/20 to-slate-600/5 border-slate-500/30 text-slate-600',
};

// Show only top 6 popular/featured courses on landing page
const featuredCourses = siteInfo.courses.filter(
  (c) => c.popular || c.newBatch
).slice(0, 6);

export default function CoursesSection() {
  return (
    <section id="courses" aria-label="Courses offered by Smart Computer Academy" className="w-full py-14 md:py-24 bg-muted/20">
      <div className="container px-4 md:px-6">
        <SectionHeader
          title={<>Our <span className="gradient-text">Popular Courses</span></>}
          subtitle="ISO 9001:2015 certified courses with 100% practical training. New batch starting soon — Morning & Evening classes available."
        />

        {/* New Batch Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-sm font-semibold px-4 py-2 rounded-full animate-pulse">
            <Sparkles size={14} />
            New Batch Starting Soon — Limited Seats!
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {featuredCourses.map((course, i) => {
            const colorClass = colorMap[course.color] || colorMap.blue;
            const hasDiscount = course.regularFees && course.regularFees !== course.fees;

            return (
              <motion.article
                key={course.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group flex flex-col h-full"
              >
                {/* Color Header */}
                <div className={`h-2 w-full bg-gradient-to-r ${colorClass.split(' ')[0]} ${colorClass.split(' ')[1]}`} />

                <div className="p-5 flex flex-col flex-grow gap-4">
                  {/* Title + badges row */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{course.name}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{course.fullName}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      {course.popular && (
                        <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Popular</span>
                      )}
                      {course.newBatch && (
                        <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">New Batch</span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">{course.description}</p>

                  {/* Meta info */}
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-primary shrink-0" />
                      <span>Duration: <strong className="text-foreground">{course.duration}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap size={14} className="text-primary shrink-0" />
                      <span>Eligibility: {course.eligibility}</span>
                    </div>
                  </div>

                  {/* Fees */}
                  <div className="flex items-center gap-3 mt-auto pt-2">
                    <Tag size={14} className="text-primary shrink-0" />
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-primary">{course.fees}</span>
                      {hasDiscount && (
                        <span className="text-sm text-muted-foreground line-through">{course.regularFees}</span>
                      )}
                    </div>
                    {hasDiscount && (
                      <span className="ml-auto text-[10px] bg-green-500/10 text-green-600 font-bold px-2 py-0.5 rounded-full border border-green-500/20">
                        OFFER
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center w-full bg-primary/10 hover:bg-primary text-primary hover:text-white font-semibold py-3 px-4 rounded-xl transition-colors group/btn touch-manipulation mt-1"
                    aria-label={`Enquire about ${course.name} course`}
                  >
                    Enquire Now
                    <ArrowRight size={15} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* View All + Admission CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-4 p-2 touch-manipulation"
          >
            View All Courses <ArrowRight size={16} />
          </Link>
          <span className="hidden sm:block text-muted-foreground">•</span>
          <a
            href={siteInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-lg shadow-green-600/20 touch-manipulation"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
