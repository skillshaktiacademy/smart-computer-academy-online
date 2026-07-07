import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { Award, Briefcase, Code, MonitorSmartphone, FileCheck, Layers, Monitor, Target, Users, HelpCircle } from 'lucide-react'; 

const features = [
  { title: 'Industry Experienced Trainers', icon: Users },
  { title: '100% Practical Learning', icon: Code },
  { title: 'Affordable Fees', icon: Target },
  { title: 'Placement Assistance', icon: Briefcase },
  { title: 'Live Projects', icon: Layers },
  { title: 'Modern Computer Labs', icon: MonitorSmartphone },
  { title: 'Updated Curriculum', icon: FileCheck },
  { title: 'Recognized Certification', icon: Award },
  { title: 'Small Batch Size', icon: Users },
  { title: 'Student Support', icon: HelpCircle },
];

export default function WhyChooseUsSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <SectionHeader 
          title={<>Why Choose <span className="gradient-text">Us</span></>} 
          subtitle="We provide the best environment and resources for your IT education journey."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:shadow-lg hover:border-primary/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                <feature.icon size={24} />
              </div>
              <h3 className="font-semibold text-sm md:text-base leading-tight">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
