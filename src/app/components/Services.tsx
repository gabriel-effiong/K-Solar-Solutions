import { Home, Building2, Wrench, Battery } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Solar",
    description:
      "Custom-designed rooftop systems for single-family homes. We handle permits, installation, and utility interconnection — you just start saving.",
    price: "From $12,500",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format",
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    description:
      "Large-scale installations for office buildings, warehouses, and retail spaces. Maximize tax credits and reduce operating costs.",
    price: "Custom Pricing",
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop&auto=format",
  },
  {
    icon: Battery,
    title: "Battery Storage",
    description:
      "Pair your solar system with a Tesla Powerwall or Enphase IQ battery. Stay powered during outages and store excess energy for evening use.",
    price: "From $8,500",
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&h=400&fit=crop&auto=format",
  },
  {
    icon: Wrench,
    title: "Maintenance & Monitoring",
    description:
      "24/7 real-time monitoring, annual panel cleaning, and rapid response repair. Keep your system performing at peak efficiency for decades.",
    price: "From $299/yr",
    img: "https://images.unsplash.com/photo-1548614606-52b4451f994b?w=600&h=400&fit=crop&auto=format",
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <p
              className="text-accent text-sm tracking-widest uppercase mb-3"
              style={{ fontFamily: "Inter, sans-serif", letterSpacing: "0.12em" }}
            >
              What We Offer
            </p>
            <h2
              className="text-primary"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
              }}
            >
              Solar Solutions
              <br />
              <span style={{ fontStyle: "italic" }}>Built Around You</span>
            </h2>
          </div>
          <p
            className="text-muted-foreground max-w-md"
            style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}
          >
            From initial design to final inspection, we manage every detail so you can
            focus on what matters — enjoying clean, affordable energy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden bg-secondary">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-accent/90 flex items-center justify-center">
                  <s.icon size={18} className="text-white" strokeWidth={2} />
                </div>
              </div>
              <div className="p-5">
                <h3
                  className="text-primary mb-2"
                  style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.2rem" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-muted-foreground text-sm mb-4"
                  style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.65 }}
                >
                  {s.description}
                </p>
                <div
                  className="text-accent text-sm font-medium"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {s.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
