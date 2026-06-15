import { Sun, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

const links = {
  Services: ["Residential Solar", "Commercial Solar", "Battery Storage", "Maintenance Plans"],
  Company: ["About Us", "Our Team", "Careers", "Press"],
  Resources: ["Solar Calculator", "Financing Options", "Rebates & Incentives", "FAQ"],
  Legal: ["Privacy Policy", "Terms of Service", "Warranty Terms"],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111A14] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <Sun size={16} className="text-white" strokeWidth={2.5} />
              </div>
              <span
                className="text-white"
                style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.25rem" }}
              >
                SolarVerde
              </span>
            </div>
            <p
              className="text-white/50 text-sm leading-relaxed mb-5"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Nigeria's trusted solar partner since 2025. NABCEP certified, BBB A+ rated.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent/80 transition-colors cursor-pointer"
                  aria-label="Social link"
                >
                  <Icon size={14} className="text-white" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <p
                className="text-white/90 text-sm mb-4"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
              >
                {heading}
              </p>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item}>
                    <button
                      className="text-white/50 text-sm hover:text-white transition-colors cursor-pointer"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-wrap gap-4 items-center justify-between">
          <p
            className="text-white/40 text-sm"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            © {year} SolarVerde Inc. All rights reserved. CA CSLB Lic. #987654
          </p>
          <p
            className="text-white/30 text-sm"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Serving San Jose · Palo Alto · Sunnyvale · Fremont · Mountain View · Santa Clara
          </p>
        </div>
      </div>
    </footer>
  );
}
