const steps = [
  {
    number: "01",
    title: "Free Site Assessment",
    description:
      "A certified energy consultant visits your property, evaluates your roof, sun exposure, and current energy usage to design the optimal system.",
    duration: "1–2 hours",
  },
  {
    number: "02",
    title: "Custom System Design",
    description:
      "We engineer a system tailored to your home. You'll see a 3D rendering, projected savings, and full payback timeline before signing anything.",
    duration: "2–3 business days",
  },
  {
    number: "03",
    title: "Permits & Approvals",
    description:
      "We handle every permit, HOA application, and utility interconnection form. Most permits are approved within 2–4 weeks.",
    duration: "2–4 weeks",
  },
  {
    number: "04",
    title: "Professional Installation",
    description:
      "Our NABCEP-certified crew installs your system in 1–3 days with zero mess. We use only Tier-1 panels and micro-inverters.",
    duration: "1–3 days",
  },
  {
    number: "05",
    title: "Final Inspection & Go Live",
    description:
      "After utility sign-off, your system goes live. We activate monitoring so you can watch your savings grow in real time.",
    duration: "1–2 weeks",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p
            className="text-accent text-sm tracking-widest uppercase mb-3"
            style={{ fontFamily: "Inter, sans-serif", letterSpacing: "0.12em" }}
          >
            The Process
          </p>
          <h2
            className="text-primary"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.15,
            }}
          >
            From Consultation{" "}
            <span style={{ fontStyle: "italic" }}>to Clean Power</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-8 top-10 bottom-10 w-px bg-border hidden md:block" />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <div key={step.number} className="flex gap-8 items-start group">
                <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center bg-background z-10">
                  <span
                    className="text-primary"
                    style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.1rem" }}
                  >
                    {step.number}
                  </span>
                </div>
                <div className="flex-1 pb-10 border-b border-border last:border-0 last:pb-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3
                      className="text-primary"
                      style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.3rem" }}
                    >
                      {step.title}
                    </h3>
                    <span
                      className="px-3 py-0.5 rounded-full bg-accent/15 text-accent text-xs"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {step.duration}
                    </span>
                  </div>
                  <p
                    className="text-muted-foreground"
                    style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline CTA */}
        <div className="mt-16 text-center">
          <p
            className="text-muted-foreground mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Most systems are fully installed and generating power within{" "}
            <strong className="text-primary">6–8 weeks</strong> of your initial call.
          </p>
          <button
            onClick={() => {
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 rounded-full text-white cursor-pointer hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "var(--primary)", fontFamily: "Inter, sans-serif" }}
          >
            Start My Solar Journey
          </button>
        </div>
      </div>
    </section>
  );
}
