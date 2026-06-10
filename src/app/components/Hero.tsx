import { ArrowDown, Star } from "lucide-react";

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1800&h=1200&fit=crop&auto=format"
          alt="Solar panels on rooftop with blue sky"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F14]/85 via-[#0D1F14]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 pt-40 w-full">
        <div className="flex items-center gap-2 mb-6">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={14} fill="#E8892B" className="text-accent" />
            ))}
          </div>
          <span
            className="text-white/80 text-sm"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Trusted by 2,400+ homeowners across California
          </span>
        </div>

        <h1
          className="text-white mb-6 max-w-3xl leading-tight"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            lineHeight: 1.1,
          }}
        >
          Harness the Sun.{" "}
          <span style={{ color: "#E8892B", fontStyle: "italic" }}>
            Cut Your Bill.
          </span>{" "}
          Own Your Energy.
        </h1>

        <p
          className="text-white/75 max-w-xl mb-10"
          style={{ fontFamily: "Inter, sans-serif", fontSize: "1.125rem", lineHeight: 1.7 }}
        >
          California's most trusted solar installer since 2011. We design, install, and
          maintain custom solar systems — from single-family homes to commercial rooftops.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-4 rounded-full text-white cursor-pointer transition-all hover:scale-105"
            style={{
              backgroundColor: "#E8892B",
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              fontWeight: 500,
            }}
          >
            Get My Free Quote
          </button>
          <button
            onClick={() => scrollTo("#how-it-works")}
            className="px-8 py-4 rounded-full text-white cursor-pointer transition-all border border-white/40 hover:bg-white/10"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem" }}
          >
            How It Works
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-16 flex flex-wrap gap-10">
          {[
            { value: "12+ yrs", label: "In Business" },
            { value: "2,400+", label: "Homes Powered" },
            { value: "$1.8M+", label: "Client Savings/yr" },
            { value: "25-yr", label: "Warranty" },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="text-white"
                style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem" }}
              >
                {s.value}
              </div>
              <div
                className="text-white/60 text-sm mt-1"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => scrollTo("#services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
