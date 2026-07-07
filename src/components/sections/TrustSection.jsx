import { motion } from 'framer-motion';

const stats = [
  { value: '1000+', label: 'Students', subtitle: 'Learned & Placed' },
  { value: '50+', label: 'Professional Courses', subtitle: 'Industry Relevant' },
  { value: '20+', label: 'Certified Trainers', subtitle: 'Expert Faculty' },
  { value: '100%', label: 'Practical Learning', subtitle: 'Hands-on Projects' },
];

export default function TrustSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-muted/30 border-y border-border">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
            Trusted By
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-4 text-foreground/60 font-medium">
            <span>Students</span>
            <span>•</span>
            <span>Trainers</span>
            <span>•</span>
            <span>Parents</span>
            <span>•</span>
            <span>Franchise Owners</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-background/50 transition-colors"
            >
              <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</h3>
              <p className="font-semibold text-lg text-foreground">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
