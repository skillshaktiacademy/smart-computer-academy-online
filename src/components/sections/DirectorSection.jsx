import { motion } from 'framer-motion';
import { Quote, Phone, BadgeCheck } from 'lucide-react';
import { siteInfo } from '@/config/site';
import praveenImg from '../../assets/Team/praveen.jpeg';

export default function DirectorSection() {
  return (
    <section
      id="director"
      aria-label="Message from the Director"
      className="w-full py-16 md:py-28 bg-background relative overflow-hidden"
    >
      {/* soft background accent */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-3xl blur-lg" />
              <div className="relative rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl w-64 sm:w-72 md:w-80 aspect-[3/4] bg-muted">
                <img
                  src={praveenImg}
                  alt={`${siteInfo.founder} — ${siteInfo.founderTitle}, ${siteInfo.name}`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              {/* Name badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-max max-w-[90%] bg-card border border-border shadow-lg rounded-2xl px-5 py-3 text-center">
                <p className="font-bold text-base leading-tight">{siteInfo.founder}</p>
                <p className="text-xs text-primary font-medium flex items-center justify-center gap-1">
                  <BadgeCheck size={13} /> {siteInfo.founderTitle}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6 pt-4 lg:pt-0"
          >
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full border border-primary/20">
              Message from the Director
            </span>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Meet Our <span className="gradient-text">Founder</span>
            </h2>

            <div className="relative">
              <Quote className="absolute -top-2 -left-1 text-primary/15" size={44} />
              <p className="relative text-base md:text-lg text-muted-foreground leading-relaxed pl-6">
                At {siteInfo.name}, our mission is simple — <span className="text-foreground font-medium">"{siteInfo.motto}"</span>.
                We believe every student deserves quality, practical computer education that leads to real career
                opportunities. With experienced faculty, 100% hands-on training, and constant support, we help our
                students turn their skills into a successful future.
              </p>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Whether you are a beginner or looking to advance your skills, we welcome you to join our growing family
              of learners in Kahalgaon. Your success is our greatest achievement.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <div>
                <p className="font-bold text-lg">{siteInfo.founder}</p>
                <p className="text-sm text-muted-foreground">{siteInfo.founderTitle}, {siteInfo.name}</p>
              </div>
              <a
                href={`tel:${siteInfo.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-lg shadow-primary/20 touch-manipulation sm:ml-auto"
              >
                <Phone size={16} /> {siteInfo.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
