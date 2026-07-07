import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const points = [
    "Practical training focused on real-world skills",
    "Experienced faculty and industry-focused curriculum",
    "Empowering careers in IT and software development",
    "Comprehensive digital marketing & office automation courses"
  ];

  return (
    <section id="about" className="w-full py-20 md:py-32 bg-background relative">
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
            <div className="relative bg-muted/40 border border-border rounded-3xl p-8 aspect-square flex items-center justify-center overflow-hidden">
               {/* Replace with actual image in production */}
               <div className="w-full h-full bg-slate-200 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                  <span className="text-muted-foreground">About Image/Video Mockup</span>
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
