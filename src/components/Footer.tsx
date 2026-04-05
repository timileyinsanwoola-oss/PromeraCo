import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <img src={logo} alt="Promeraco" className="h-12 rounded-md ring-1 ring-border/70 hover:ring-primary/90 transition-all duration-300 p-[2px] bg-card/40 backdrop-blur-sm" />
      <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Promeraco. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
