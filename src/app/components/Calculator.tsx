import { useState, useMemo } from "react";
import { DollarSign, Leaf, Sun } from "lucide-react";

export function Calculator() {
  const [bill, setBill] = useState(250);
  const [roofSize, setRoofSize] = useState("medium");

  const results = useMemo(() => {
    const systemMultiplier = roofSize === "small" ? 0.7 : roofSize === "large" ? 1.4 : 1;
    const annualSavings = Math.round(bill * 12 * 0.87 * systemMultiplier);
    const systemCost = Math.round(18000 * systemMultiplier);
    const federalCredit = Math.round(systemCost * 0.3);
    const netCost = systemCost - federalCredit;
    const payback = (netCost / annualSavings).toFixed(1);
    const co2 = Math.round(annualSavings / 12 * 0.85);
    const twentyYearSavings = annualSavings * 20 - netCost;
    return { annualSavings, systemCost, federalCredit, netCost, payback, co2, twentyYearSavings };
  }, [bill, roofSize]);

  return (
    <section className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 text-center">
          <p
            className="text-accent text-sm tracking-widest uppercase mb-3"
            style={{ fontFamily: "Inter, sans-serif", letterSpacing: "0.12em" }}
          >
            Savings Estimator
          </p>
          <h2
            className="text-primary"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.15,
            }}
          >
            See What Solar{" "}
            <span style={{ fontStyle: "italic" }}>Saves You</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Inputs */}
          <div className="bg-card rounded-3xl border border-border p-8">
            <div className="mb-8">
              <label
                className="block text-foreground mb-3"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
              >
                Monthly Electricity Bill
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={50}
                  max={800}
                  step={10}
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="flex-1 accent-accent"
                />
                <div
                  className="w-20 text-right text-primary"
                  style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.5rem" }}
                >
                  ${bill}
                </div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1" style={{ fontFamily: "Inter, sans-serif" }}>
                <span>$50</span>
                <span>$800</span>
              </div>
            </div>

            <div>
              <label
                className="block text-foreground mb-3"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
              >
                Roof Size
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "small", label: "Small", sub: "< 1,500 sq ft" },
                  { id: "medium", label: "Medium", sub: "1,500–2,500 sq ft" },
                  { id: "large", label: "Large", sub: "> 2,500 sq ft" },
                ].map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setRoofSize(r.id)}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      roofSize === r.id
                        ? "border-accent bg-accent/10"
                        : "border-border hover:border-muted-foreground"
                    }`}
                  >
                    <div
                      className={`text-sm ${roofSize === r.id ? "text-accent" : "text-foreground"}`}
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                    >
                      {r.label}
                    </div>
                    <div
                      className="text-xs text-muted-foreground mt-0.5"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {r.sub}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <p
              className="text-xs text-muted-foreground mt-6"
              style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.5 }}
            >
              * Estimates based on California average solar production, current utility rates,
              and 30% federal ITC. Actual results vary.
            </p>
          </div>

          {/* Results */}
          <div className="flex flex-col gap-5">
            <div className="bg-primary rounded-3xl p-8 text-white">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign size={20} className="text-accent" />
                <span
                  className="text-white/70 text-sm"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Estimated Annual Savings
                </span>
              </div>
              <div
                style={{ fontFamily: "'DM Serif Display', serif", fontSize: "3rem", lineHeight: 1 }}
              >
                ${results.annualSavings.toLocaleString()}
              </div>
              <div
                className="text-white/60 text-sm mt-1"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                ${Math.round(results.annualSavings / 12).toLocaleString()} per month
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="bg-card border border-border rounded-2xl p-5">
                <p className="text-muted-foreground text-xs mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
                  System Cost
                </p>
                <p className="text-primary" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.5rem" }}>
                  ${results.systemCost.toLocaleString()}
                </p>
                <p className="text-accent text-xs mt-1" style={{ fontFamily: "Inter, sans-serif" }}>
                  −${results.federalCredit.toLocaleString()} federal credit
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-5">
                <p className="text-muted-foreground text-xs mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
                  Payback Period
                </p>
                <p className="text-primary" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.5rem" }}>
                  {results.payback} yrs
                </p>
                <p className="text-muted-foreground text-xs mt-1" style={{ fontFamily: "Inter, sans-serif" }}>
                  after incentives
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-1">
                  <Leaf size={14} className="text-green-600" />
                  <p className="text-muted-foreground text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                    CO₂ Offset / Year
                  </p>
                </div>
                <p className="text-primary" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.5rem" }}>
                  {results.co2.toLocaleString()} kg
                </p>
              </div>
              <div className="bg-accent/10 border border-accent/30 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-1">
                  <Sun size={14} className="text-accent" />
                  <p className="text-accent/80 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                    20-Year Net Gain
                  </p>
                </div>
                <p className="text-accent" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.5rem" }}>
                  ${Math.max(0, results.twentyYearSavings).toLocaleString()}
                </p>
              </div>
            </div>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full py-4 rounded-full text-white cursor-pointer hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "var(--accent)", fontFamily: "Inter, sans-serif" }}
            >
              Get My Accurate Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
