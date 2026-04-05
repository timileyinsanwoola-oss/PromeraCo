import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="text-primary font-heading font-semibold tracking-[0.2em] uppercase text-sm mb-3">Let's Talk</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Ready to Scale?</h2>
        <p className="text-muted-foreground mt-4 mb-10">
          DM us on Instagram or TikTok to get started. Prices are negotiable — let's find what works for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.instagram.com/promeraco1/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-lg glow-box hover:scale-105 transition-transform"
          >
            <Instagram className="w-5 h-5" />
            @promeraco1
          </a>
          <a
            href="https://tiktok.com/@promeraco0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg glass text-foreground font-heading font-semibold text-lg hover:border-primary/50 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.37a8.16 8.16 0 004.77 1.52V7.44a4.85 4.85 0 01-1.01-.75z" />
            </svg>
            @promeraco0
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;
