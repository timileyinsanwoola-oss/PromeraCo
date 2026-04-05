import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Website",
    price: "$1,000",
    period: "one-time",
    desc: "A custom, high-converting website for your brand.",
    features: [
      "Custom responsive design",
      "Mobile optimized",
      "SEO foundations",
      "Fast load speeds",
      "Contact form integration",
      "1 round of revisions",
    ],
    highlight: false,
  },
  {
    name: "Ad Management",
    price: "$2,000",
    period: "/month",
    desc: "Full-service ad campaigns to scale your brand.",
    features: [
      "Multi-platform ad management",
      "Custom creative strategy",
      "Audience research & targeting",
      "Weekly performance reports",
      "A/B testing & optimization",
      "Dedicated account manager",
    ],
    highlight: true,
  },
];

const Pricing = () => (
  <section id="pricing" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-heading font-semibold tracking-[0.2em] uppercase text-sm mb-3">Pricing</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Simple, Transparent Pricing</h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto">Prices can be negotiated — reach out and let's talk about what works for you.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`rounded-2xl p-8 md:p-10 flex flex-col ${
              plan.highlight
                ? "border-2 border-primary glow-box-lg bg-card"
                : "glass"
            }`}
          >
            {plan.highlight && (
              <span className="self-start px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-heading font-semibold tracking-wide mb-4">
                Most Popular
              </span>
            )}
            <h3 className="font-heading text-2xl font-bold text-foreground">{plan.name}</h3>
            <div className="mt-4 flex items-end gap-1">
              <span className="font-heading text-5xl font-bold text-gradient">{plan.price}</span>
              <span className="text-muted-foreground text-sm mb-2">{plan.period}</span>
            </div>
            <p className="text-muted-foreground mt-3 text-sm">{plan.desc}</p>
            <ul className="mt-8 space-y-3 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-8 inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-heading font-semibold transition-transform hover:scale-105 ${
                plan.highlight
                  ? "bg-primary text-primary-foreground glow-box"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Get Started
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
