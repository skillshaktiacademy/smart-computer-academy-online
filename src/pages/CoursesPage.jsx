import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, GraduationCap, ArrowRight, Tag, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { siteInfo } from '../data/site';

const colorBg = {
  green:  'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/30',
  blue:   'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/30',
  orange: 'bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/30',
  purple: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/30',
  teal:   'bg-teal-500/10 text-teal-700 dark:text-teal-400 border-teal-500/30',
  indigo: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/30',
  pink:   'bg-pink-500/10 text-pink-700 dark:text-pink-400 border-pink-500/30',
  cyan:   'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/30',
  amber:  'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30',
  red:    'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/30',
  slate:  'bg-slate-500/10 text-slate-700 dark:text-slate-400 border-slate-500/30',
};

// Pricing table data matching images
const pricingRows = [
  { name: 'DCA',      duration: '6 Months', regular: '₹2,500',  offer: '₹1,500'  },
  { name: 'CCC',      duration: '6 Months', regular: '₹5,000',  offer: '₹4,000'  },
  { name: 'Tally',    duration: '6 Months', regular: '₹4,500',  offer: '₹3,500'  },
  { name: 'DTTP',     duration: '6 Months', regular: '₹5,000',  offer: '₹3,500'  },
  { name: 'ADCA',     duration: '1 Year',   regular: '₹6,000',  offer: '₹3,500'  },
  { name: 'ADCA+AI',  duration: '1 Year',   regular: '₹6,500',  offer: '₹4,500'  },
  { name: 'CTTC',     duration: '1 Year',   regular: '₹12,000', offer: '₹8,000'  },
  { name: 'PGDCA',    duration: '1 Year',   regular: '₹25,000', offer: '₹18,000' },
];

export default function CoursesPage() {
  return (
    <main className="pt-20 pb-16">
      {/* Hero Banner */}
      <section className="bg-primary/5 border-b border-border py-10 md:py-16">
        <div className="container px-4 md:px-6 text-center space-y-4">
          <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-600 text-xs font-bold px-4 py-1.5 rounded-full">
            <Sparkles size={12} /> New Batch Starting Soon — Limited Seats!
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Our <span className="gradient-text">Computer Courses</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            ISO 9001:2015 Certified | 100% Practical Training | DigiLocker Certificate | Job Placement<br />
            <strong>Morning &amp; Evening Batch Available</strong>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${siteInfo.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-7 py-3 rounded-full transition-colors shadow-lg shadow-primary/20 touch-manipulation"
            >
              <Phone size={16} /> Call: {siteInfo.phone}
            </a>
            <a
              href={siteInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-7 py-3 rounded-full transition-colors touch-manipulation"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>

      {/* All Courses Cards */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <SectionHeader
            title={<>All <span className="gradient-text">Courses</span></>}
            subtitle="Choose the right course for your career goals. All courses include certificate, practical training, and placement support."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {siteInfo.courses.map((course, i) => {
              const hasDiscount = course.regularFees && course.regularFees !== course.fees;
              const badgeClass = colorBg[course.color] || colorBg.blue;

              return (
                <motion.article
                  key={course.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-card border border-border rounded-2xl p-5 hover:shadow-xl hover:border-primary/30 transition-all flex flex-col gap-4"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border ${badgeClass} mb-2`}>
                        {course.name}
                      </span>
                      <h2 className="font-bold text-base leading-snug">{course.fullName}</h2>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      {course.popular && <span className="text-[9px] bg-orange-500 text-white font-bold px-2 py-0.5 rounded-full">Popular</span>}
                      {course.newBatch && <span className="text-[9px] bg-green-500 text-white font-bold px-2 py-0.5 rounded-full">New Batch</span>}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">{course.description}</p>

                  {/* Subjects */}
                  <ul className="space-y-1">
                    {course.subjects.map((s, si) => (
                      <li key={si} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 size={12} className="text-primary shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>

                  {/* Meta */}
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock size={11} className="text-primary" />{course.duration}</span>
                    <span className="flex items-center gap-1"><GraduationCap size={11} className="text-primary" />{course.eligibility}</span>
                  </div>

                  {/* Fees */}
                  <div className="flex items-center gap-2 mt-auto pt-1 border-t border-border">
                    <Tag size={13} className="text-primary" />
                    <span className="text-lg font-bold text-primary">{course.fees}</span>
                    {hasDiscount && (
                      <span className="text-sm text-muted-foreground line-through">{course.regularFees}</span>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full bg-primary/10 hover:bg-primary text-primary hover:text-white font-semibold py-2.5 rounded-xl transition-colors text-sm touch-manipulation"
                    aria-label={`Enquire about ${course.name}`}
                  >
                    Enquire Now <ArrowRight size={14} />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="py-10 md:py-16 bg-muted/20 border-y border-border">
        <div className="container px-4 md:px-6">
          <SectionHeader
            title={<><span className="gradient-text">Fee Structure</span> — Special Offer</>}
            subtitle="Kam fees mein best education. पहले आइए, पहले पाइए — Limited Seats!"
          />

          <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
            <table className="w-full text-sm min-w-[400px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-5 py-3 font-semibold">Course</th>
                  <th className="text-center px-5 py-3 font-semibold">Duration</th>
                  <th className="text-center px-5 py-3 font-semibold">Regular Fees</th>
                  <th className="text-center px-5 py-3 font-semibold">Special Offer</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row, i) => (
                  <tr
                    key={row.name}
                    className={`border-b border-border transition-colors ${i % 2 === 0 ? 'bg-background' : 'bg-muted/30'} hover:bg-primary/5`}
                  >
                    <td className="px-5 py-3.5 font-bold">{row.name}</td>
                    <td className="px-5 py-3.5 text-center text-muted-foreground">{row.duration}</td>
                    <td className="px-5 py-3.5 text-center text-muted-foreground line-through">{row.regular}</td>
                    <td className="px-5 py-3.5 text-center font-bold text-primary">{row.offer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-4">
            * Fees may vary. Contact us for latest offers &amp; scholarship details.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              to="/admission"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-primary/20 touch-manipulation"
            >
              Admission Open — Apply Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
