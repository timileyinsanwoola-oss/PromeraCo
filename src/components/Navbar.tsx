import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "More info", href: "#more-info" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Promeraco" className="h-14 rounded-md ring-1 ring-border/70 hover:ring-primary/90 transition-all duration-300 p-[2px] bg-card/40 backdrop-blur-sm" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="#contact"
              className="px-5 py-2 rounded-lg bg-primary text-primary-foreground font-heading text-sm font-semibold hover:scale-105 transition-transform whitespace-nowrap"
            >
              Book a Call
            </a>
            <a
              href="#step-1"
              className="px-3 py-2 rounded-lg border border-border text-foreground font-heading text-sm font-semibold hover:border-primary/50 transition-colors text-center leading-snug"
            >
              Learn More About Our Process
            </a>
          </div>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border px-6 pb-6 pt-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-muted-foreground hover:text-foreground transition-colors font-body"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-3 rounded-lg bg-primary text-primary-foreground font-heading text-sm font-semibold text-center"
            onClick={() => setOpen(false)}
          >
            Book a Call
          </a>
          <a
            href="#step-1"
            className="px-5 py-3 rounded-lg border border-border text-foreground font-heading text-sm font-semibold text-center"
            onClick={() => setOpen(false)}
          >
            Learn More About Our Process
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
