import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Results from "@/components/Results";
import MoreInfo from "@/components/MoreInfo";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Services />
    <section className="border-t border-border py-8" aria-label="Framework details">
      <div className="container mx-auto px-6 flex justify-center">
        <a
          href="#step-1"
          className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-border text-foreground font-heading font-semibold text-lg hover:border-primary/50 transition-colors"
        >
          Learn More About Our Process
        </a>
      </div>
    </section>
    <Results />
    <MoreInfo />
    <Pricing />
    <Contact />
    <Footer />
  </div>
);

export default Index;
