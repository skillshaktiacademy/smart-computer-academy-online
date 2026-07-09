import { motion } from 'framer-motion';
import { CheckCircle2, BadgeCheck } from 'lucide-react';
import { siteInfo } from '@/config/site';
import praveenImg from '../../assets/Team/praveen.jpeg';

export default function AboutSection() {
  const points = [
    "Practical training focused on real-world skills",
    "Experienced faculty and industry-focused curriculum",
    "Empowering careers in IT and software development",
    "Comprehensive digital marketing & office automation courses"
  ];

  return (
    <section id="about" className="w-full py-16 md:py-24 bg-background relative">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative rounded-3xl aspect-[4/5] max-w-sm mx-auto lg:max-w-none overflow-hidden border border-border shadow-xl bg-muted">
               <img
                 src={praveenImg}
                 alt={`${siteInfo.founder} — ${siteInfo.founderTitle}, ${siteInfo.name}`}
                 className="w-full h-full object-cover object-top"
                 loading="lazy"
               />
               {/* Name badge */}
               <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-sm border border-border shadow-lg rounded-2xl px-4 py-3">
                 <p className="font-bold text-base leading-tight">{siteInfo.founder}</p>
                 <p className="text-xs text-primary font-medium flex items-center gap-1">
                   <BadgeCheck size={13} /> {siteInfo.founderTitle}
                 </p>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Why <span className="gradient-text">Smart Computer Academy?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Smart Computer Academy is committed to providing high-quality computer education through practical training, experienced faculty, and industry-focused curriculum.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We empower students with real-world skills that help them build successful careers in IT, software development, digital marketing, office automation, and professional computing.
            </p>
            
            <ul className="space-y-3 pt-4">
              {points.map((point, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                  <span className="text-foreground font-medium">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
