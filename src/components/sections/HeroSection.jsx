import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, UserPlus, Building2 } from 'lucide-react';
import { media } from '@/config/media';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] pt-24 pb-12 flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[40%] rounded-full bg-primary/20 blur-[60px] md:blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[40%] rounded-full bg-secondary/20 blur-[60px] md:blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6 md:space-y-8 mt-8 lg:mt-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]"
          >
            Build Your <span className="gradient-text">Digital Career</span> <br className="hidden md:block"/>
            with Smart Computer Academy
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0"
          >
            Join India's growing computer education network. Learn industry-ready skills, earn certified qualifications, and build a successful career in IT.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Link to="/courses" className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 px-8 py-4 rounded-full text-base font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2 group">
              Explore Courses <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/admission" className="w-full sm:w-auto border-2 border-primary/20 hover:border-primary text-foreground px-8 py-4 rounded-full text-base font-semibold transition-all flex items-center justify-center gap-2 bg-background/50 backdrop-blur-sm">
              <UserPlus size={18} /> Apply for Admission
            </Link>
            <Link to="/franchise" className="w-full sm:w-auto text-muted-foreground hover:text-primary px-4 py-4 font-medium transition-colors flex items-center justify-center gap-2">
              <Building2 size={18} /> Become a Franchise
            </Link>
          </motion.div>
        </div>

        {/* Visual Content / Floating Cards */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 relative w-full max-w-lg lg:max-w-none"
        >
          {/* Main showcase image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/40 dark:border-white/10 shadow-2xl">
            <img
              src={media.heroShowcase}
              alt="A trainer guiding students at computers in Smart Computer Academy's classroom"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Floating Cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 sm:top-4 sm:-left-12 glassmorphism p-4 rounded-xl flex items-center gap-4 shadow-xl border border-white/20"
          >
            <div className="w-12 h-12 bg-green-500/20 text-green-600 rounded-full flex items-center justify-center font-bold text-xl">
              1K+
            </div>
            <div>
              <p className="text-sm font-semibold">Students Enrolled</p>
              <p className="text-xs text-muted-foreground">Across India</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }} 
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 -right-4 sm:bottom-12 sm:-right-8 glassmorphism p-4 rounded-xl flex items-center gap-4 shadow-xl border border-white/20"
          >
            <div className="w-12 h-12 bg-orange-500/20 text-orange-600 rounded-full flex items-center justify-center font-bold text-xl">
              100%
            </div>
            <div>
              <p className="text-sm font-semibold">Placement Assistance</p>
              <p className="text-xs text-muted-foreground">Career support</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
