import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Jennifer Marcos",
    location: "Palo Alto, CA",
    text: "SolarVerde made the entire process seamless. From the first consultation to flipping the switch, they handled everything. Our bill dropped from $380 to under $30 a month.",
    stars: 5,
    savings: "$4,200/yr saved",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&auto=format",
  },
  {
    name: "David Chen",
    location: "Sunnyvale, CA",
    text: "I was skeptical about the payback timeline, but 8 months in and we're already seeing exactly the savings they projected. The monitoring app is fantastic — I check it every morning.",
    stars: 5,
    savings: "$3,600/yr saved",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format",
  },
  {
    name: "Marcus & Lisa Thompson",
    location: "Fremont, CA",
    text: "The crew was professional, clean, and finished ahead of schedule. The Powerwall addition has been a game changer — we stayed powered through two grid outages this winter.",
    stars: 5,
    savings: "$5,100/yr saved",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format",
  },
  {
    name: "Ana Gutierrez",
    location: "San Jose, CA",
    text: "Got quotes from 4 companies. SolarVerde wasn't the cheapest but their proposal was the most detailed and honest. Two years later, I'm so glad I chose quality over a rock-bottom price.",
    stars: 5,
    savings: "$2,880/yr saved",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 text-center">
          <p
            className="text-accent text-sm tracking-widest uppercase mb-3"
            style={{ fontFamily: "Inter, sans-serif", letterSpacing: "0.12em" }}
          >
            Client Stories
          </p>
          <h2
            className="text-primary"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.15,
            }}
          >
            Real People,{" "}
            <span style={{ fontStyle: "italic" }}>Real Savings</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-card border border-border rounded-2xl p-8 relative"
            >
              <Quote
                size={32}
                className="text-accent/20 absolute top-6 right-6"
                fill="currentColor"
              />
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p
                    className="text-foreground"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                  >
                    {r.name}
                  </p>
                  <p
                    className="text-muted-foreground text-sm"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {r.location}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.stars }).map((_, i) => (
                      <Star key={i} size={12} fill="#E8892B" className="text-accent" />
                    ))}
                  </div>
                  <span
                    className="text-accent text-xs mt-1 block"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {r.savings}
                  </span>
                </div>
              </div>
              <p
                className="text-foreground/80"
                style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.75 }}
              >
                "{r.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-10">
          {[
            "NABCEP Certified",
            "BBB A+ Rating",
            "25-Year Warranty",
            "California Solar Mandate Compliant",
            "Tesla Powerwall Certified",
          ].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-muted-foreground text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <div className="w-2 h-2 rounded-full bg-accent" />
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
