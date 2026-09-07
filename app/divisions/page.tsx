import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Divisions",
  description:
    "Akofena operates two divisions: PhiNova (software and SaaS products) and AuraTech Solutions (tech repair and IT services).",
};

const phinovaProducts = [
  {
    name: "Invitro LIMS",
    description:
      "Laboratory information management for clinical labs and diagnostic centres. Tracks samples, results, and workflows from intake to report. Runs offline.",
  },
  {
    name: "Concord SMS",
    description:
      "Bulk SMS platform with merge-tag personalisation, contact list management, and scheduled delivery across Ghana's mobile networks.",
  },
  {
    name: "orient Fees Tracker",
    description:
      "Desktop school fees management system for Ghanaian educational institutions. Full offline capability with hardware-based licensing.",
  },
  {
    name: "Church Management System",
    description:
      "Full-stack platform for member records, attendance, giving history, and group management for local churches.",
  },
];

const auratechServices = [
  {
    name: "Device repair",
    description:
      "Laptop, desktop, phone, and peripheral repair. Screen replacements, battery changes, motherboard diagnostics, and data recovery.",
  },
  {
    name: "Network setup",
    description:
      "Wired and wireless network infrastructure for offices, shops, and institutions. Structured cabling, access point configuration, and router setup.",
  },
  {
    name: "Server maintenance",
    description:
      "On-site and remote server health checks, updates, storage management, and backup configuration for small and medium businesses.",
  },
  {
    name: "IT support",
    description:
      "Ongoing technical support for businesses without a dedicated IT team. Software installs, system configuration, and user troubleshooting.",
  },
];

export default function DivisionsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[50dvh] sm:min-h-[55dvh] flex items-end pb-14 sm:pb-20 pt-28 sm:pt-32 bg-ink overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,147,58,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,147,58,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <Reveal>
            <span className="text-gold text-xs font-mono uppercase tracking-widest block mb-3 sm:mb-4">
              Divisions
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white text-balance max-w-2xl">
              Two divisions. One standard.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── PhiNova ──────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 lg:py-32 bg-surface border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Info */}
            <div className="lg:col-span-2">
              <Reveal direction="left">
                <div className="lg:sticky lg:top-24">
                  <span className="text-gold text-xs font-mono uppercase tracking-widest block mb-2 sm:mb-3">
                    Software Division
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">PhiNova</h2>
                  <p className="text-white/55 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                    SaaS and software products built for institutions and businesses across Ghana and
                    beyond. Our products are designed for environments where reliability is
                    non-negotiable and internet connectivity is not guaranteed.
                  </p>

                  <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                    {[
                      "Offline-first architecture",
                      "Designed for Ghanaian workflows",
                      "Audit trails and access control",
                      "Desktop and web deployments",
                    ].map((f) => (
                      <div key={f} className="flex items-center gap-2.5 sm:gap-3">
                        <CheckCircle size={15} weight="fill" className="text-gold flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-white/60">{f}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://phinova.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-gold text-ink text-sm font-semibold rounded-md hover:bg-gold-light active:scale-[0.98] transition-all"
                  >
                    Visit phinova.dev
                    <ArrowUpRight size={15} weight="bold" />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Products */}
            <div className="lg:col-span-3">
              <Reveal delay={0.1}>
                <p className="text-xs text-white/30 uppercase tracking-widest mb-5 sm:mb-6 font-mono">
                  Products
                </p>
              </Reveal>
              <div className="space-y-3 sm:space-y-4">
                {phinovaProducts.map((p, i) => (
                  <Reveal key={p.name} delay={i * 0.08}>
                    <div className="bg-surface-2 border border-white/5 rounded-lg p-5 sm:p-6 hover:border-white/10 transition-colors">
                      <h3 className="text-white font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">{p.name}</h3>
                      <p className="text-white/45 text-sm leading-relaxed">{p.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AuraTech ─────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 lg:py-32 bg-ink border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Services */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <Reveal>
                <p className="text-xs text-white/30 uppercase tracking-widest mb-5 sm:mb-6 font-mono">
                  Services
                </p>
              </Reveal>
              <div className="space-y-3 sm:space-y-4">
                {auratechServices.map((s, i) => (
                  <Reveal key={s.name} delay={i * 0.08}>
                    <div className="bg-surface border border-white/5 rounded-lg p-5 sm:p-6 hover:border-white/10 transition-colors">
                      <h3 className="text-white font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">{s.name}</h3>
                      <p className="text-white/45 text-sm leading-relaxed">{s.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <Reveal direction="left" delay={0.1}>
                <div className="lg:sticky lg:top-24">
                  <span className="text-gold text-xs font-mono uppercase tracking-widest block mb-2 sm:mb-3">
                    Services Division
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">AuraTech Solutions</h2>
                  <p className="text-white/55 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                    Hardware repair, network infrastructure, and IT support for businesses across
                    Accra. We handle the physical layer that software depends on, with response times
                    and accountability that match what the problem actually demands.
                  </p>

                  <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                    {[
                      "On-site and remote support",
                      "Business and personal devices",
                      "Network and server infrastructure",
                      "Based in Accra, Ghana",
                    ].map((f) => (
                      <div key={f} className="flex items-center gap-2.5 sm:gap-3">
                        <CheckCircle size={15} weight="fill" className="text-gold flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-white/60">{f}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://auratechsolutionsgh.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-gold text-ink text-sm font-semibold rounded-md hover:bg-gold-light active:scale-[0.98] transition-all"
                  >
                    Visit AuraTech
                    <ArrowUpRight size={15} weight="bold" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 lg:py-24 bg-surface border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-1.5 sm:mb-2">
                  Not sure which division you need?
                </h2>
                <p className="text-white/50 text-sm">
                  Describe your situation and we will point you in the right direction.
                </p>
              </div>
              <Link
                href="/contact"
                className="flex-shrink-0 inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-gold text-ink text-sm font-semibold rounded-md hover:bg-gold-light active:scale-[0.98] transition-all"
              >
                Talk to us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
