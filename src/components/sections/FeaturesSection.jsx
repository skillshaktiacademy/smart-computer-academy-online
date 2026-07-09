import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  ClipboardList,
  BookOpen,
  GraduationCap,
  QrCode,
  FileCheck,
  UserPlus,
  CreditCard,
  Smartphone,
  Wallet,
} from 'lucide-react';

// Each card carries a short descriptor and its own accent colour so the
// grid feels crafted and premium rather than a uniform block.
const featuresList = [
  { name: 'Student Portal', desc: 'Personal dashboard for every student', icon: LayoutDashboard, color: 'blue' },
  { name: 'Teacher Portal', desc: 'Manage batches, marks & attendance', icon: Users, color: 'indigo' },
  { name: 'Attendance', desc: 'Digital daily attendance tracking', icon: CalendarCheck, color: 'green' },
  { name: 'Assignments', desc: 'Practical tasks & submissions online', icon: ClipboardList, color: 'orange' },
  { name: 'Study Materials', desc: 'Complete notes & resources', icon: BookOpen, color: 'purple' },
  { name: 'Online Results', desc: 'Instant exam results access', icon: GraduationCap, color: 'cyan' },
  { name: 'QR Certificates', desc: 'Verifiable QR-coded certificates', icon: QrCode, color: 'teal' },
  { name: 'Digital Marksheet', desc: 'Download marksheets anytime', icon: FileCheck, color: 'pink' },
  { name: 'Online Admit Card', desc: 'Exam admit cards on your phone', icon: UserPlus, color: 'amber' },
  { name: 'Fee Tracking', desc: 'Track fees & payment history', icon: CreditCard, color: 'red' },
  { name: 'Fee Reminders', desc: 'Timely dues & receipt updates', icon: Wallet, color: 'green' },
  { name: 'Mobile Friendly', desc: 'Works on any phone or device', icon: Smartphone, color: 'blue' },
];

const colorMap = {
  blue: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  indigo: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
  green: 'bg-green-500/10 text-green-600 dark:text-green-400',
  orange: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
  purple: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
  cyan: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
  teal: 'bg-teal-500/10 text-teal-600 dark:text-teal-400',
  pink: 'bg-pink-500/10 text-pink-600 dark:text-pink-400',
  amber: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  red: 'bg-red-500/10 text-red-600 dark:text-red-400',
};

export default function FeaturesSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-muted/30 border-y border-border">
      <div className="container px-4 md:px-6">
        <SectionHeader
          title={<>Modern <span className="gradient-text">Digital Infrastructure</span></>}
          subtitle="A complete digital platform — everything students, teachers and parents need in one place."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {featuresList.map((feature, i) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (i % 4) * 0.05 }}
              className="group relative flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30"
            >
              <div className={`h-11 w-11 rounded-xl flex items-center justify-center ${colorMap[feature.color]} transition-transform duration-300 group-hover:scale-110`}>
                <feature.icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base leading-tight">{feature.name}</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-snug">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
