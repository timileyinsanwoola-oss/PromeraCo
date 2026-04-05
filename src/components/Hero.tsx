import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40 [filter:hue-rotate(220deg)_saturate(1.05)]"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-heading font-semibold tracking-[0.3em] uppercase text-sm mb-6">
            Ad Marketing · Brand Scaling · Web Design
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
            <span className="text-foreground">Scale Your</span>
            <br />
            <span className="text-gradient">Brand Beyond</span>
            <br />
            <span className="text-foreground">Limits</span>
          </h1>
          <p className="mt-8 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-body leading-relaxed">
            We craft high-converting ad campaigns and stunning websites that turn your brand into a revenue machine.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#pricing"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-lg glow-box hover:scale-105 transition-transform"
          >
            Get Started
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg glass text-foreground font-heading font-semibold text-lg hover:border-primary/50 transition-colors"
          >
            Our Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
