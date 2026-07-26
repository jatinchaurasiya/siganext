"use client";

import { useState, useEffect, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";

const SERVICE_OPTIONS = [
  { value: "internet-networking", label: "Internet & Networking" },
  { value: "solar-green-energy", label: "Solar & Green Energy" },
  { value: "it-software-security", label: "IT, Software & Security" },
  { value: "data-center-hosting", label: "Data Center & Hosting" },
  { value: "government-tender", label: "Government Tender / Public Sector" },
  { value: "other", label: "Other Inquiry" },
];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "internet-networking",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Read ?service= query param on mount and preselect matching dropdown option
  useEffect(() => {
    const rawService = searchParams.get("service");
    if (rawService) {
      const match = SERVICE_OPTIONS.find(
        (opt) =>
          opt.value === rawService ||
          opt.value.includes(rawService) ||
          rawService.includes(opt.value)
      );
      if (match) {
        setFormData((prev) => ({ ...prev, service: match.value }));
      }
    }
  }, [searchParams]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message details are required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    /*
      [INTEGRATION POINT F2: Insert API call to POST form payload to CRM / email API endpoint here]
      Example:
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    */

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-signal-teal/10 border border-signal-teal/30 rounded-2xl p-8 sm:p-10 text-center animate-in fade-in duration-300">
        <div className="w-14 h-14 rounded-full bg-signal-teal text-grid-navy flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
          ✓
        </div>
        <h3 className="font-display font-semibold text-ink text-2xl tracking-[-0.01em]">
          Inquiry Received
        </h3>
        <p className="mt-2 text-ink/80 font-body text-base max-w-md mx-auto">
          Thanks — we&rsquo;ll be in touch within one business day.
        </p>

        <div className="mt-6 pt-6 border-t border-ink/10">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                phone: "",
                email: "",
                service: "internet-networking",
                message: "",
              });
            }}
            className="font-mono uppercase text-xs tracking-[0.08em] text-signal-teal font-semibold hover:underline"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate aria-label="Contact Form">
      {/* Name Field */}
      <div>
        <label htmlFor="contact-name" className="block font-mono uppercase text-[11px] tracking-[0.08em] text-ink/80 mb-1.5 font-medium">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g. Rahul Sharma"
          aria-describedby={errors.name ? "name-error" : undefined}
          aria-invalid={!!errors.name}
          required
          className={`w-full h-12 px-4 rounded-xl bg-panel-mist/70 border ${
            errors.name ? "border-red-500" : "border-ink/15"
          } text-ink placeholder:text-ink/35 text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-signal-teal/50 focus:border-signal-teal transition-all`}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-600 font-mono">
            {errors.name}
          </p>
        )}
      </div>

      {/* Grid: Phone & Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-phone" className="block font-mono uppercase text-[11px] tracking-[0.08em] text-ink/80 mb-1.5 font-medium">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
            aria-describedby={errors.phone ? "phone-error" : undefined}
            aria-invalid={!!errors.phone}
            required
            className={`w-full h-12 px-4 rounded-xl bg-panel-mist/70 border ${
              errors.phone ? "border-red-500" : "border-ink/15"
            } text-ink placeholder:text-ink/35 text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-signal-teal/50 focus:border-signal-teal transition-all`}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-xs text-red-600 font-mono">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="block font-mono uppercase text-[11px] tracking-[0.08em] text-ink/80 mb-1.5 font-medium">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@company.com"
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
            required
            className={`w-full h-12 px-4 rounded-xl bg-panel-mist/70 border ${
              errors.email ? "border-red-500" : "border-ink/15"
            } text-ink placeholder:text-ink/35 text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-signal-teal/50 focus:border-signal-teal transition-all`}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-600 font-mono">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Service Selection Dropdown */}
      <div>
        <label htmlFor="contact-service" className="block font-mono uppercase text-[11px] tracking-[0.08em] text-ink/80 mb-1.5 font-medium">
          Service Interested In
        </label>
        <select
          id="contact-service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full h-12 px-4 rounded-xl bg-panel-mist/70 border border-ink/15 text-ink text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-signal-teal/50 focus:border-signal-teal transition-all appearance-none cursor-pointer"
        >
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message Textarea */}
      <div>
        <label htmlFor="contact-message" className="block font-mono uppercase text-[11px] tracking-[0.08em] text-ink/80 mb-1.5 font-medium">
          Project / Inquiry Details <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your bandwidth, solar capacity, CCTV, or tender requirement..."
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={!!errors.message}
          required
          className={`w-full p-4 rounded-xl bg-panel-mist/70 border ${
            errors.message ? "border-red-500" : "border-ink/15"
          } text-ink placeholder:text-ink/35 text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-signal-teal/50 focus:border-signal-teal transition-all resize-none`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-600 font-mono">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-12 rounded-xl bg-signal-teal text-grid-navy font-mono uppercase text-xs font-semibold tracking-[0.08em] hover:bg-[#27a3b0] transition-colors duration-200 flex items-center justify-center gap-2 shadow-md disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 rounded-full border-2 border-grid-navy/30 border-t-grid-navy animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Submit Project Inquiry
            <span>→</span>
          </>
        )}
      </button>
    </form>
  );
}
