import { motion } from "framer-motion";

const stats = [
  { value: "3x", label: "Average ROAS" },
  { value: "50+", label: "Brands Scaled" },
  { value: "$1M+", label: "Revenue Generated" },
  { value: "24/7", label: "Support" },
];

const Results = () => (
  <section id="results" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-heading font-semibold tracking-[0.2em] uppercase text-sm mb-3">Results</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Numbers That Speak</h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-8 text-center"
          >
            <p className="font-heading text-4xl md:text-5xl font-bold text-gradient">{s.value}</p>
            <p className="text-muted-foreground text-sm mt-2">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-16 font-heading text-2xl md:text-3xl italic text-muted-foreground"
      >
        "Spend money to <span className="text-gradient font-semibold not-italic">make money</span>"
      </motion.p>
    </div>
  </section>
);

export default Results;
