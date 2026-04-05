import { motion } from "framer-motion";
import { Megaphone, Globe, TrendingUp, Target } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Paid Advertising",
    desc: "Facebook, Instagram, TikTok & Google Ads managed end-to-end to maximize your ROAS.",
  },
  {
    icon: TrendingUp,
    title: "Brand Scaling",
    desc: "Strategic growth plans that take your brand from local to global with data-driven campaigns.",
  },
  {
    icon: Globe,
    title: "Website Design",
    desc: "Custom, conversion-focused websites built to turn visitors into paying customers.",
  },
  {
    icon: Target,
    title: "Creative Strategy",
    desc: "Scroll-stopping creatives and ad copy that connect with your ideal audience.",
  },
];

const Services = () => (
  <section id="services" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-heading font-semibold tracking-[0.2em] uppercase text-sm mb-3">What We Do</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Our Services</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-8 group hover:border-primary/40 transition-all hover:glow-box"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
