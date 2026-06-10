import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Palo Alto Residence",
    specs: "8.4 kW · 21 panels · $210/mo savings",
    img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=700&h=500&fit=crop&auto=format",
    tag: "Residential",
  },
  {
    id: 2,
    title: "Sunnyvale Commercial",
    specs: "42 kW · 105 panels · $1,840/mo savings",
    img: "https://images.unsplash.com/photo-1548614606-52b4451f994b?w=700&h=500&fit=crop&auto=format",
    tag: "Commercial",
  },
  {
    id: 3,
    title: "San Jose Townhome",
    specs: "6.2 kW · 16 panels + Powerwall",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=700&h=500&fit=crop&auto=format",
    tag: "Battery Storage",
  },
  {
    id: 4,
    title: "Fremont Ranch",
    specs: "12 kW · 30 panels · ground mount",
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=700&h=500&fit=crop&auto=format",
    tag: "Residential",
  },
  {
    id: 5,
    title: "Mountain View Office",
    specs: "65 kW carport canopy · EV charging",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=500&fit=crop&auto=format",
    tag: "Commercial",
  },
  {
    id: 6,
    title: "Los Altos Hills Estate",
    specs: "18.5 kW · 46 panels · 2× Powerwall",
    img: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=700&h=500&fit=crop&auto=format",
    tag: "Battery Storage",
  },
];

const tags = ["All", "Residential", "Commercial", "Battery Storage"];

export function Gallery() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.tag === active);

  return (
    <section id="projects" className="py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p
              className="text-accent text-sm tracking-widest uppercase mb-3"
              style={{ fontFamily: "Inter, sans-serif", letterSpacing: "0.12em" }}
            >
              Our Work
            </p>
            <h2
              className="text-primary"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
              }}
            >
              Recent{" "}
              <span style={{ fontStyle: "italic" }}>Installations</span>
            </h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`px-4 py-1.5 rounded-full text-sm cursor-pointer transition-all border ${
                  active === t
                    ? "bg-primary text-white border-primary"
                    : "border-border text-muted-foreground hover:border-muted-foreground"
                }`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border aspect-[4/3] cursor-pointer"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span
                  className="px-3 py-1 rounded-full text-xs bg-accent text-white"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {p.tag}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p
                  className="text-white"
                  style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.15rem" }}
                >
                  {p.title}
                </p>
                <p
                  className="text-white/70 text-xs mt-1"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {p.specs}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
