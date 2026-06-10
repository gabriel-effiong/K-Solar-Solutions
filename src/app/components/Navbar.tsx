import { useState, useEffect } from "react";
import { Menu, X, Sun } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#FAF8F4]/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("#hero")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
            <Sun size={16} className="text-white" strokeWidth={2.5} />
          </div>
          <span
            className="text-primary"
            style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.25rem" }}
          >
            SolarVerde
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="px-5 py-2 rounded-full text-sm text-white transition-opacity hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: "var(--accent)", fontFamily: "Inter, sans-serif" }}
          >
            Get Free Quote
          </button>
        </nav>

        <button
          className="md:hidden text-foreground cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#FAF8F4] border-t border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="text-left text-base text-foreground/80 hover:text-foreground cursor-pointer"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="w-full py-3 rounded-full text-sm text-white text-center cursor-pointer"
            style={{ backgroundColor: "var(--accent)", fontFamily: "Inter, sans-serif" }}
          >
            Get Free Quote
          </button>
        </div>
      )}
    </header>
  );
}
