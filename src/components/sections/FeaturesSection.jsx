import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { LayoutDashboard, Users, CalendarCheck, ClipboardList, BookOpen, GraduationCap, QrCode, FileCheck, UserPlus, CreditCard, Smartphone } from 'lucide-react';

const featuresList = [
  { name: 'Student Portal', icon: LayoutDashboard },
  { name: 'Teacher Portal', icon: Users },
  { name: 'Attendance', icon: CalendarCheck },
  { name: 'Assignments', icon: ClipboardList },
  { name: 'Study Materials', icon: BookOpen },
  { name: 'Online Results', icon: GraduationCap },
  { name: 'QR Verified Certificates', icon: QrCode },
  { name: 'Digital Marksheet', icon: FileCheck },
  { name: 'Online Admit Card', icon: UserPlus },
  { name: 'Fee Tracking', icon: CreditCard },
  { name: 'Mobile Friendly', icon: Smartphone },
];

export default function FeaturesSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <SectionHeader 
          title={<>Modern <span className="gradient-text">Digital Infrastructure</span></>} 
          subtitle="Everything you need in one powerful platform."
        />

        <div className="flex flex-wrap justify-center gap-4">
          {featuresList.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-3 bg-muted/50 border border-border px-5 py-3 rounded-full hover:bg-primary/10 hover:border-primary/30 transition-colors group cursor-pointer"
            >
              <feature.icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-medium text-foreground text-sm">{feature.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
