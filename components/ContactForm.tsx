"use client";

import { useState } from "react";
import { PaperPlaneTilt } from "@phosphor-icons/react";

type Status = "idle" | "loading" | "success" | "error";

const subjects = [
  { value: "software", label: "Software Inquiry" },
  { value: "it-support", label: "IT Support" },
  { value: "partnership", label: "Partnership" },
  { value: "other", label: "Other" },
];

const inputClass =
  "w-full bg-surface-3 border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-colors";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-surface-2 border border-white/5 rounded-sm">
        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
          <PaperPlaneTilt size={22} weight="bold" className="text-gold" />
        </div>
        <p className="text-white font-semibold mb-2">Message received.</p>
        <p className="text-white/50 text-sm">
          We will get back to you within two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs text-white/50 font-medium">
            Full name
          </label>
          <input
            id="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Kwame Mensah"
            value={form.name}
            onChange={set("name")}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs text-white/50 font-medium">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            placeholder="kwame@company.com"
            value={form.email}
            onChange={set("email")}
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-xs text-white/50 font-medium">
          Subject
        </label>
        <select
          id="subject"
          required
          value={form.subject}
          onChange={set("subject")}
          className={`${inputClass} appearance-none cursor-pointer`}
        >
          <option value="" disabled>Select a subject</option>
          {subjects.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs text-white/50 font-medium">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          placeholder="Tell us about your project or inquiry..."
          value={form.message}
          onChange={set("message")}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex items-center gap-2.5 px-6 py-3 bg-gold text-ink text-sm font-semibold rounded-sm hover:bg-gold-light active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          "Sending..."
        ) : (
          <>
            Send message
            <PaperPlaneTilt size={16} weight="bold" />
          </>
        )}
      </button>
    </form>
  );
}
