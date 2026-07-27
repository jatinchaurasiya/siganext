"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ConfirmTag from "@/components/ConfirmTag";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, service: serviceParam }));
    }
  }, [serviceParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      setError("Please complete all required fields (Name, Phone, Email).");
      return;
    }

    setError("");
    // TODO: Connect this client-side form handler to real CRM / Email API endpoint (e.g., Resend / Nodemailer / Zapier webhook)
    setSubmitted(true);
  };

  return (
    <div className="bg-bone text-obsidian min-h-screen py-28">
      <div className="container-site space-y-16">
        {/* HEADER */}
        <div className="space-y-4 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-champagne font-semibold">
            Direct Communication
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl text-obsidian">Contact Siganext</h1>
          <p className="text-mist text-base leading-relaxed">
            Get in touch with our Nashik headquarters for technical site surveys, solar estimates, leased line inquiries, or tender participation.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* FORM PANEL */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-white border border-obsidian/10 shadow-sm space-y-6">
            <h2 className="font-editorial text-2xl text-obsidian">Send an Inquiry</h2>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-obsidian text-paper border border-champagne/40 space-y-4">
                <div className="w-10 h-10 rounded-full bg-champagne/20 border border-champagne text-champagne flex items-center justify-center font-mono font-bold text-lg">
                  ✓
                </div>
                <h3 className="font-editorial text-2xl text-paper">Inquiry Received</h3>
                <p className="text-mist text-sm leading-relaxed">
                  Thank you for contacting Siganext. Our technical infrastructure team in Nashik will review your details and reach out shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
                  }}
                  className="btn btn-champagne mt-2"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-700 text-xs font-mono">
                    {error}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs uppercase tracking-[0.08em] text-obsidian font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-bone border border-obsidian/15 focus:border-champagne focus:outline-none text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs uppercase tracking-[0.08em] text-obsidian font-semibold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 00000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-bone border border-obsidian/15 focus:border-champagne focus:outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs uppercase tracking-[0.08em] text-obsidian font-semibold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-bone border border-obsidian/15 focus:border-champagne focus:outline-none text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs uppercase tracking-[0.08em] text-obsidian font-semibold">
                    Service Interested In
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-bone border border-obsidian/15 focus:border-champagne focus:outline-none text-sm"
                  >
                    <option value="">Select Primary Requirement</option>
                    <option value="internet-networking">Internet & Networking (ISP / Leased Line)</option>
                    <option value="solar-green-energy">Solar & Green Energy (Rooftop PV EPC)</option>
                    <option value="it-software-security">IT, Software & CCTV Security</option>
                    <option value="data-center-hosting">Data Center & Managed Hosting</option>
                    <option value="government-enterprise">Government / Enterprise Tender</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs uppercase tracking-[0.08em] text-obsidian font-semibold">
                    Message / Project Specifications
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your connectivity, solar capacity, or IT requirement..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-bone border border-obsidian/15 focus:border-champagne focus:outline-none text-sm resize-none"
                  />
                </div>

                <button type="submit" className="btn btn-champagne w-full justify-center text-center">
                  Submit Technical Inquiry →
                </button>
              </form>
            )}
          </div>

          {/* DETAILS PANEL */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-obsidian text-paper border border-champagne/30 space-y-8">
            <h2 className="font-editorial text-2xl text-paper">Corporate Details</h2>

            <div className="space-y-6 font-mono text-xs uppercase tracking-[0.08em]">
              <div className="space-y-1.5">
                <span className="text-mist block text-[10px]">Registered Legal Office:</span>
                <ConfirmTag label="HQ Address Pending Founder Input" variant="badge" />
              </div>

              <div className="space-y-1.5">
                <span className="text-mist block text-[10px]">Phone & WhatsApp:</span>
                <ConfirmTag label="+91 Phone Pending" variant="badge" />
              </div>

              <div className="space-y-1.5">
                <span className="text-mist block text-[10px]">Corporate Email:</span>
                <ConfirmTag label="email@siganext.com Pending" variant="badge" />
              </div>

              <div className="space-y-1.5">
                <span className="text-mist block text-[10px]">Operating Business Hours:</span>
                <ConfirmTag label="Mon – Sat (09:00 – 18:00 IST)" variant="badge" />
              </div>
            </div>

            {/* MAP SLOT */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-mist">
                Location Map Slot (Nashik)
              </span>
              <div className="h-44 rounded-2xl bg-white/5 border border-dashed border-champagne/40 flex flex-col items-center justify-center p-4 text-center">
                <ConfirmTag label="Google Maps Embed Pending Final Office Address" variant="badge" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="py-32 text-center font-mono text-xs uppercase text-mist">Loading Contact Form...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
