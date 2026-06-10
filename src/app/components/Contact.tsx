import { useState } from "react";
import { CheckCircle, MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    bill: "",
    type: "residential",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Phone number required";
    if (!form.address.trim()) e.address = "Address required";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setSubmitted(true);
  };

  const field = (id: keyof typeof form, label: string, type = "text", placeholder = "") => (
    <div>
      <label
        htmlFor={id}
        className="block mb-1.5 text-sm text-foreground"
        style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={form[id]}
        onChange={(e) => setForm({ ...form, [id]: e.target.value })}
        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors bg-input-background focus:border-accent ${
          errors[id] ? "border-destructive" : "border-border"
        }`}
        style={{ fontFamily: "Inter, sans-serif" }}
      />
      {errors[id] && (
        <p className="text-destructive text-xs mt-1" style={{ fontFamily: "Inter, sans-serif" }}>
          {errors[id]}
        </p>
      )}
    </div>
  );

  return (
    <section id="contact" className="py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side */}
          <div>
            <p
              className="text-accent text-sm tracking-widest uppercase mb-3"
              style={{ fontFamily: "Inter, sans-serif", letterSpacing: "0.12em" }}
            >
              Free Consultation
            </p>
            <h2
              className="text-white mb-6"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
              }}
            >
              Get Your Free,{" "}
              <span style={{ fontStyle: "italic", color: "#E8892B" }}>No-Obligation</span>{" "}
              Solar Quote
            </h2>
            <p
              className="text-white/70 mb-10"
              style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}
            >
              Tell us about your home and we'll design a custom solar system, project your
              savings, and walk you through every financing option — completely free.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { icon: Phone, text: "(800) 472-7653", sub: "Mon–Fri 7am–7pm PT" },
                { icon: Mail, text: "hello@solarverde.com", sub: "We reply within 4 hours" },
                {
                  icon: MapPin,
                  text: "456 Sunlight Ave, San Jose CA 95110",
                  sub: "Serving all of Northern California",
                },
              ].map((c) => (
                <div key={c.text} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <c.icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <p
                      className="text-white"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                    >
                      {c.text}
                    </p>
                    <p
                      className="text-white/50 text-sm"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {c.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#FAF8F4] rounded-3xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-5 py-12 text-center">
                <CheckCircle size={56} className="text-green-600" />
                <h3
                  className="text-primary"
                  style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.75rem" }}
                >
                  Request Received!
                </h3>
                <p
                  className="text-muted-foreground max-w-xs"
                  style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}
                >
                  Thank you, {form.name}! Our team will call you within 4 business hours to
                  schedule your free site assessment.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", address: "", bill: "", type: "residential", message: "" }); }}
                  className="mt-2 text-sm text-accent underline cursor-pointer"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  {field("name", "Full Name", "text", "Jane Smith")}
                  {field("email", "Email Address", "email", "jane@email.com")}
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {field("phone", "Phone Number", "tel", "(555) 000-0000")}
                  {field("bill", "Monthly Electric Bill", "text", "$250")}
                </div>
                {field("address", "Property Address", "text", "123 Main St, San Jose CA")}

                <div>
                  <label
                    className="block mb-1.5 text-sm text-foreground"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                  >
                    Project Type
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["residential", "commercial", "battery"].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm({ ...form, type: t })}
                        className={`py-2 rounded-xl border text-sm capitalize cursor-pointer transition-all ${
                          form.type === t
                            ? "border-accent bg-accent/10 text-accent"
                            : "border-border text-muted-foreground hover:border-muted-foreground"
                        }`}
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {t === "battery" ? "Battery" : t.charAt(0).toUpperCase() + t.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    className="block mb-1.5 text-sm text-foreground"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                  >
                    Additional Notes (optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Any questions or specific requirements..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-input-background text-sm resize-none outline-none focus:border-accent transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full text-white cursor-pointer hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "var(--accent)", fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                >
                  Get My Free Solar Quote →
                </button>
                <p
                  className="text-center text-xs text-muted-foreground"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  No spam, no pressure. Your info stays private.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
