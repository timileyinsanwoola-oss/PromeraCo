import { motion } from "framer-motion";
import {
  Trophy,
  Clock,
  Shield,
  TrendingUp,
  LineChart,
  Magnet,
  Flame,
  Rocket,
  Crosshair,
  Layers,
  Calendar,
  CheckCircle2,
  FileText,
  Globe,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const MoreInfo = () => (
  <section id="more-info" className="py-24 relative border-t border-border">
    <div className="container mx-auto px-6 space-y-24">
      {/* Intro — 30-Day Framework */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div {...fadeUp}>
          <p className="text-primary font-heading font-semibold tracking-[0.2em] uppercase text-sm mb-3">
            More info
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
            The 30-Day Client Growth Framework
          </h2>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
            Get clients with proven Facebook ads — guaranteed results in 30 days or your money back.
          </p>
        </motion.div>
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl aspect-[4/3] flex items-center justify-center border border-border/60 bg-gradient-to-br from-primary/10 via-card/40 to-card/60"
        >
          <div className="text-center p-8">
            <Crosshair className="w-14 h-14 text-primary/80 mx-auto mb-4" />
            <p className="font-heading text-xl text-foreground font-semibold">Precision growth</p>
            <p className="text-muted-foreground text-sm mt-2 max-w-xs mx-auto">
              Targeting, funnel, and optimization — built for your niche.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Why 30 Days */}
      <div>
        <motion.div {...fadeUp} className="mb-12">
          <p className="inline-flex items-center gap-2 text-primary font-heading font-semibold tracking-[0.15em] uppercase text-xs mb-3">
            <Clock className="w-4 h-4" />
            30-day guarantee
          </p>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Why 30 Days?</h3>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Fast Results",
              body: "Most businesses see slow, uncertain growth with ads. We guarantee measurable results in just 30 days — no waiting, no guesswork.",
            },
            {
              title: "Proven Performance",
              body: "Our system is designed to generate at least 10 closed jobs or $20,000 in new revenue every single month.",
            },
            {
              title: "Zero Risk",
              body: "Your $2,000 investment is a common starting point — prices are negotiable so we can make it work for both of us. It's still protected: if we don't deliver, you get your money back — simple as that.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              {...fadeUp}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-xl p-8 border border-border/60 hover:border-primary/30 transition-colors"
            >
              <h4 className="font-heading text-lg font-semibold text-foreground mb-3">{card.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Investment & guarantee */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div {...fadeUp} className="space-y-6">
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Why $2,000? The Investment &amp; Guarantee
          </h3>
          <p className="text-primary font-heading font-medium">Everything You Need for Success</p>
          <p className="text-muted-foreground leading-relaxed">
            Your $2,000 investment isn't just a fee — it's a comprehensive growth package with zero risk and complete
            accountability.
          </p>
          <div className="glass rounded-xl p-6 border border-border/60 space-y-3">
            <p className="font-heading font-semibold text-foreground">What's included</p>
            <ul className="text-muted-foreground text-sm space-y-2 list-disc list-inside">
              <li>Complete Facebook ads setup and optimization</li>
              <li>Full campaign management and monitoring</li>
              <li>Professional creative production and testing</li>
              <li>Weekly reporting and strategy adjustments</li>
            </ul>
          </div>
          <div className="glass rounded-xl p-6 border border-primary/25 bg-primary/5">
            <p className="font-heading font-semibold text-foreground mb-2">Our guarantee</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We put skin in the game: if you don't hit{" "}
              <span className="text-foreground font-medium">10 closed jobs or $20K in new revenue</span>, you get
              your money back. Period. No hidden fees. No upsells. Just results.
            </p>
          </div>
        </motion.div>
        <motion.div {...fadeUp} className="flex flex-col gap-6">
          <div className="glass rounded-2xl p-10 border border-border/60 flex flex-col items-center text-center">
            <Shield className="w-16 h-16 text-primary mb-4" />
            <p className="font-heading text-xl font-bold text-foreground">Money Back Guarantee</p>
            <p className="text-muted-foreground text-sm mt-2">Your investment is protected when we partner.</p>
          </div>
          <div className="glass rounded-2xl p-8 border border-border/60 flex items-center gap-4">
            <TrendingUp className="w-12 h-12 text-primary shrink-0" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Built to compound: predictable pipeline growth month over month.
            </p>
          </div>
        </motion.div>
      </div>

      {/* What to expect */}
      <div>
        <motion.div {...fadeUp} className="mb-10">
          <p className="inline-flex items-center gap-2 text-primary font-heading font-semibold tracking-[0.15em] uppercase text-xs mb-3">
            <LineChart className="w-4 h-4" />
            Proven results
          </p>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground">What You Can Expect in 30 Days</h3>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {[
            {
              stat: "10+",
              label: "Closed Jobs",
              desc: "Minimum guaranteed closed jobs every single month",
            },
            {
              stat: "$20K+",
              label: "New Revenue",
              desc: "Tracked new revenue generated monthly or your money back",
            },
            {
              stat: "8–10%",
              label: "Conversion Rate",
              desc: "Average client conversion rates from targeted Facebook campaigns",
            },
          ].map((m, i) => (
            <motion.div key={m.label} {...fadeUp} transition={{ delay: i * 0.08 }} className="text-center md:text-left">
              <p className="font-heading text-4xl md:text-5xl font-bold text-foreground">{m.stat}</p>
              <p className="font-heading font-semibold text-foreground mt-2">{m.label}</p>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          {...fadeUp}
          className="glass rounded-xl p-6 md:p-8 border border-primary/20 bg-primary/5 flex gap-4 items-start"
        >
          <FileText className="w-6 h-6 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-heading font-semibold text-foreground">Complete transparency</p>
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
              You'll receive detailed reporting so you see exactly where every dollar goes and how every lead is
              generated. No black box, no surprises — just clear, measurable results.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Step 1 */}
      <div id="step-1" className="scroll-mt-24">
        <motion.div {...fadeUp} className="mb-8">
          <span className="inline-block text-xs font-heading font-semibold tracking-widest text-primary border border-primary/40 rounded-md px-2 py-1 mb-4">
            STEP 1
          </span>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Laser-Targeted Facebook Ads Setup</h3>
          <p className="text-primary font-heading font-medium mt-2">Precision Targeting for Maximum Impact</p>
          <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
            We don't waste your budget on generic audiences. Our approach is surgical, data-driven, and optimized for
            your exact client profile.
          </p>
        </motion.div>
        <div className="space-y-0 border border-border/60 rounded-xl overflow-hidden glass">
          {[
            {
              n: "01",
              title: "Custom Audience Building",
              body: "We create highly specific audiences based on your ideal clients' behaviors, interests, demographics, and purchasing patterns.",
            },
            {
              n: "02",
              title: "Facebook Pixel Integration",
              body: "Advanced tracking technology captures every interaction, enabling precise retargeting and performance measurement.",
            },
            {
              n: "03",
              title: "High-Converting Creatives",
              body: "Deploy professionally tested ad creatives specifically optimized for your niche and proven to generate engagement.",
            },
          ].map((row, i) => (
            <motion.div
              key={row.n}
              {...fadeUp}
              className={`p-6 md:p-8 ${i > 0 ? "border-t border-border/60" : ""}`}
            >
              <div className="flex gap-4">
                <span className="font-heading text-2xl font-bold text-primary/90 shrink-0">{row.n}</span>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-foreground">{row.title}</h4>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{row.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Step 2 */}
      <div>
        <motion.div {...fadeUp} className="mb-8">
          <span className="inline-block text-xs font-heading font-semibold tracking-widest text-primary border border-primary/40 rounded-md px-2 py-1 mb-4">
            STEP 2
          </span>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground">The Client Attraction Funnel</h3>
          <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
            We guide prospects from awareness to action with a strategic three-stage funnel designed to build trust
            and drive conversions.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Magnet,
              title: "Engage Cold Audiences",
              body: "Capture attention with value-driven content including educational guides, compelling videos, and irresistible introductory offers that showcase your expertise.",
            },
            {
              icon: Flame,
              title: "Warm Leads with Retargeting",
              body: "Build trust and create urgency through strategic retargeting ads that keep your business top-of-mind and address objections.",
            },
            {
              icon: Rocket,
              title: "Capture & Convert",
              body: "Use optimized landing pages and compelling lead magnets to transform interested prospects into qualified leads ready for your sales process.",
            },
          ].map((step, i) => (
            <motion.div
              key={step.title}
              {...fadeUp}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-xl p-8 border border-border/60 relative overflow-hidden group hover:border-primary/30 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
              <div className="relative">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-3">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Step 3 */}
      <div>
        <motion.div {...fadeUp} className="mb-8">
          <span className="inline-block text-xs font-heading font-semibold tracking-widest text-primary border border-primary/40 rounded-md px-2 py-1 mb-4">
            STEP 3
          </span>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Optimizing Your Facebook Ad Campaigns
          </h3>
          <p className="text-primary font-heading font-medium mt-2">Maximize Your Return with Expert Ad Management</p>
          <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
            Beyond lead generation, we ensure your ad spend delivers measurable results through precise targeting and
            continuous improvement.
          </p>
        </motion.div>
        <div className="space-y-6">
          {[
            {
              title: "Strategic Facebook Ad Setup",
              body: "From audience research to creative development, we design high-performing Facebook ad campaigns tailored to your goals.",
            },
            {
              title: "Proactive Campaign Management",
              body: "Our experts continuously monitor your campaigns, making real-time adjustments to bids, targeting, and ad placements for optimal performance.",
            },
            {
              title: "Data-Driven Optimization",
              body: "We analyze campaign data to identify growth opportunities, ensuring your ads are always evolving to deliver the best possible return on investment.",
            },
          ].map((row, i) => (
            <motion.div
              key={row.title}
              {...fadeUp}
              className="flex gap-4 items-start glass rounded-xl p-6 border border-border/60"
            >
              <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-sm shrink-0">
                {i + 1}
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground">{row.title}</h4>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{row.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 11 — Websites */}
      <div id="step-11" className="scroll-mt-24">
        <motion.div {...fadeUp} className="mb-8 flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
          <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-heading text-2xl font-bold shrink-0">
            11
          </div>
          <div className="flex-1">
            <span className="inline-block text-xs font-heading font-semibold tracking-widest text-primary border border-primary/40 rounded-md px-2 py-1 mb-4">
              ALSO OFFERED
            </span>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Websites — design &amp; sales</h3>
            <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
              Beyond ads and funnels, we sell custom websites: fast, mobile-first builds focused on clarity, trust, and
              conversions. Whether you need a fresh brand site, landing pages for campaigns, or a full rebuild, we handle
              structure, copy alignment, and launch — so your online presence matches the performance we drive with paid
              media.
            </p>
            <div className="mt-6 flex items-start gap-3 text-muted-foreground text-sm max-w-2xl">
              <Globe className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p>
                <span className="text-foreground font-medium">Available standalone or bundled</span> with growth
                packages — ask on your strategy call how a new site can support your 30-day results.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* How we work */}
      <div>
        <motion.div {...fadeUp} className="mb-12 max-w-2xl">
          <p className="inline-flex items-center gap-2 text-primary font-heading font-semibold tracking-[0.15em] uppercase text-xs mb-3">
            <Calendar className="w-4 h-4" />
            Partnership
          </p>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground">How We Work Together</h3>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            A partnership built on collaboration, transparency, and your success. Here's exactly what happens from day
            one.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            {
              week: "Week 1",
              title: "Foundation",
              body: "Kickoff call to deeply understand your business, target clients, unique value proposition, and growth goals. We build your custom strategy.",
            },
            {
              week: "Week 2",
              title: "Launch",
              body: "Facebook ads go live with precision targeting. Landing pages launch. Lead magnets deploy. Your funnel starts attracting qualified prospects.",
            },
            {
              week: "Week 3",
              title: "Optimize",
              body: "We analyze early data, refine ad creatives, adjust targeting, and optimize for maximum conversions.",
            },
            {
              week: "Week 4",
              title: "Scale",
              body: "Double down on what's working. Scale winning campaigns. Close deals. Hit or exceed your guarantee threshold.",
            },
          ].map((w, i) => (
            <motion.div key={w.week} {...fadeUp} transition={{ delay: i * 0.06 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center font-heading font-bold text-primary">
                  {i + 1}
                </div>
              </div>
              <p className="text-xs font-heading font-semibold text-primary tracking-wide">{w.week}</p>
              <h4 className="font-heading text-lg font-semibold text-foreground mt-1">{w.title}</h4>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{w.body}</p>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeUp} className="glass rounded-xl p-8 border border-border/60">
          <h4 className="font-heading text-lg font-semibold text-foreground mb-4">Ongoing support</h4>
          <ul className="space-y-2 text-muted-foreground text-sm">
            {[
              "Weekly progress updates and performance reviews",
              "Real-time optimization based on campaign data",
              "Direct access to troubleshoot and strategize",
            ].map((item) => (
              <li key={item} className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Case studies */}
      <div>
        <motion.div {...fadeUp} className="mb-10">
          <p className="inline-flex items-center gap-2 text-primary font-heading font-semibold tracking-[0.15em] uppercase text-xs mb-3">
            <Trophy className="w-4 h-4" />
            Success story
          </p>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Case Study Snapshot</h3>
          <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
            Real businesses, real results — see how our framework delivers transformational growth in just 30 days.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div
            {...fadeUp}
            className="glass rounded-xl p-8 border border-border/60 hover:border-primary/25 transition-colors"
          >
            <h4 className="font-heading text-xl font-bold text-foreground">Client X: 12x Return on Investment</h4>
            <p className="text-primary font-heading font-semibold text-sm mt-3">
              $2,000 investment → $25,000 new revenue in 30 days
            </p>
            <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
              A home services business closed 14 jobs in the first month, exceeding the guarantee threshold by 40% with
              a repeatable ad and funnel system.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.08 }}
            className="glass rounded-xl p-8 border border-border/60 hover:border-primary/25 transition-colors"
          >
            <h4 className="font-heading text-xl font-bold text-foreground">Client Y: Explosive Growth</h4>
            <p className="text-primary font-heading font-semibold text-sm mt-3">
              12 new clients closed, 15% monthly revenue increase
            </p>
            <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
              A professional services firm moved from inconsistent leads to a predictable, scalable client acquisition
              system.
            </p>
          </motion.div>
        </div>
        <motion.div
          {...fadeUp}
          className="rounded-xl p-6 md:p-8 border border-primary/30 bg-primary/10 flex gap-4 items-start"
        >
          <Layers className="w-6 h-6 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-heading font-semibold text-foreground">Repeatable system</p>
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
              This isn't luck or a one-time win. Our framework has been proven across multiple industries, from home
              services to professional consulting to e-commerce.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Final CTA */}
      <motion.div {...fadeUp} className="glass rounded-2xl p-8 md:p-12 border border-border/60">
        <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Ready to Grow Your Business in 30 Days?
        </h3>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="rounded-xl border border-border/60 p-6 bg-card/30">
            <p className="font-heading font-semibold text-foreground mb-2">Your investment</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <span className="text-foreground font-semibold">$2,000 all-in</span> — complete setup, management, and
              creative with zero hidden fees or upsells.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 p-6 bg-card/30">
            <p className="font-heading font-semibold text-foreground mb-2">Your guarantee</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <span className="text-foreground font-semibold">10 closed jobs or $20K in new revenue</span> — or your
              money back. We only win when you win.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 p-6 bg-card/30">
            <p className="font-heading font-semibold text-foreground mb-2">Your next step</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Book your free strategy call today and discover exactly how we'll transform your client acquisition in the
              next 30 days.
            </p>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-lg glow-box hover:scale-[1.02] transition-transform"
          >
            Book Your Free Strategy Call
          </a>
        </div>
        <p className="text-muted-foreground text-sm mt-8 max-w-2xl">
          Don't let another month go by with inconsistent results. Take action now and start closing clients fast with
          our proven 30-day framework.
        </p>
      </motion.div>
    </div>
  </section>
);

export default MoreInfo;
