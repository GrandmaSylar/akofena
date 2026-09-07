import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import AkofenaIcon from "@/components/AkofenaIcon";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Akofena — Built for Africa. Built to last.",
};

const featuredWork = [
  {
    name: "Invitro LIMS",
    description: "Laboratory information management for clinical and diagnostic centres. Offline-first, audit-trail ready.",
    tags: ["Electron", "Supabase", "React"],
    division: "PhiNova",
  },
  {
    name: "Concord SMS",
    description: "Bulk SMS with merge-tag personalisation, contact lists, and scheduled delivery across Ghana's mobile networks.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    division: "PhiNova",
  },
  {
    name: "orient Fees Tracker",
    description: "Desktop school fees management for Ghanaian institutions, with full offline capability and hardware licensing.",
    tags: ["Electron", "MSSQL", "React"],
    division: "PhiNova",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[100dvh] flex flex-col justify-center pt-16 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,130,246,0.14) 0%, transparent 70%), #06111e",
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,130,246,0.14) 0%, transparent 70%)",
          backgroundColor: "#06111e",
        }}
      >
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.035) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Watermark icon */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <AkofenaIcon size={280} color="rgba(59,130,246,0.04)" className="sm:hidden" />
          <AkofenaIcon size={420} color="rgba(59,130,246,0.04)" className="hidden sm:block" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
          <div className="max-w-3xl">
            <Reveal delay={0.1}>
              <span className="inline-block text-blue text-xs font-mono uppercase tracking-widest mb-5 sm:mb-6">
                Akofena
              </span>
            </Reveal>

            <Reveal delay={0.2}>
              <h1 className="text-[2.25rem] sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] sm:leading-[1.02] text-white mb-5 sm:mb-6 text-balance">
                Built for Africa.{" "}
                <span className="text-blue">Built to last.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-xl mb-8 sm:mb-10">
                We are a technology company based in Accra, operating across software products and IT services. Two divisions. One standard of work.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  href="/divisions"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-blue text-white text-sm font-semibold rounded-md hover:bg-blue-light active:scale-[0.98] transition-all"
                >
                  Explore divisions
                  <ArrowRight size={15} weight="bold" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 border border-white/15 text-white/80 text-sm font-medium rounded-md hover:border-white/30 hover:text-white active:scale-[0.98] transition-all"
                >
                  See our work
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Division Cards ───────────────────────────────────────────── */}
      <section className="py-16 md:py-24 lg:py-32 bg-ink border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="mb-10 md:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
                Two divisions.
              </h2>
              <p className="text-white/50 text-sm sm:text-base max-w-md">
                Complementary strengths, operating under a single commitment to quality.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* PhiNova */}
            <Reveal delay={0.1} className="h-full">
              <div className="group relative bg-surface border border-white/5 rounded-lg p-6 sm:p-8 hover:border-blue/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue/[0.04] transition-all duration-300 flex flex-col h-full">
                <div className="flex items-start justify-between mb-5 sm:mb-6">
                  <div>
                    <span className="text-blue text-xs font-mono uppercase tracking-widest block mb-2">
                      Software Division
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">PhiNova</h3>
                  </div>
                  <span className="text-white/15 text-xs border border-white/10 rounded-sm px-2.5 py-1 flex-shrink-0 ml-3">
                    SaaS
                  </span>
                </div>

                <p className="text-white/55 text-sm leading-relaxed flex-1 mb-6 sm:mb-8">
                  Software products for institutions and businesses. Our tools are built for
                  reliability, offline resilience, and the operational realities of African markets.
                  Fees tracking, lab management, bulk messaging, and more.
                </p>

                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                  {["Invitro LIMS", "Concord SMS", "orient Fees"].map((p) => (
                    <span key={p} className="text-xs text-white/40 border border-white/8 rounded-full px-2.5 py-1">
                      {p}
                    </span>
                  ))}
                </div>

                <a
                  href="https://phinova.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-blue font-medium hover:text-blue-light transition-colors group/link mt-auto"
                >
                  Explore PhiNova
                  <ArrowUpRight size={15} weight="bold" className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </Reveal>

            {/* AuraTech */}
            <Reveal delay={0.2} className="h-full">
              <div className="group relative bg-surface border border-white/5 rounded-lg p-6 sm:p-8 hover:border-blue/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue/[0.04] transition-all duration-300 flex flex-col h-full">
                <div className="flex items-start justify-between mb-5 sm:mb-6">
                  <div>
                    <span className="text-blue text-xs font-mono uppercase tracking-widest block mb-2">
                      Services Division
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">AuraTech Solutions</h3>
                  </div>
                  <span className="text-white/15 text-xs border border-white/10 rounded-sm px-2.5 py-1 flex-shrink-0 ml-3">
                    Services
                  </span>
                </div>

                <p className="text-white/55 text-sm leading-relaxed flex-1 mb-6 sm:mb-8">
                  Hardware repair, network infrastructure, and IT support across Accra. We keep
                  businesses running when equipment fails and help teams build reliable infrastructure
                  from the ground up.
                </p>

                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                  {["Device Repair", "Network Setup", "IT Support"].map((s) => (
                    <span key={s} className="text-xs text-white/40 border border-white/8 rounded-full px-2.5 py-1">
                      {s}
                    </span>
                  ))}
                </div>

                <a
                  href="https://auratechsolutionsgh.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-blue font-medium hover:text-blue-light transition-colors group/link mt-auto"
                >
                  Explore AuraTech
                  <ArrowUpRight size={15} weight="bold" className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Philosophy ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 lg:py-32 bg-surface-2 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <Reveal direction="left">
              <div>
                <span className="accent-line mb-6" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-5 sm:mb-6 text-balance">
                  Technology that works in the environments our clients actually operate in.
                </h2>
                <p className="text-white/55 leading-relaxed text-sm sm:text-base">
                  Not ideal conditions. Real ones. Unreliable connectivity, constrained hardware,
                  teams without dedicated IT departments. We build for that. Every product, every
                  service call, every deployment.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid grid-cols-1 gap-6 sm:gap-8 pt-2">
                {[
                  {
                    title: "Reliability first",
                    body: "Software that degrades gracefully and services that respond when they say they will. No overpromising.",
                  },
                  {
                    title: "Practical by design",
                    body: "Features built for real workflows, not feature lists. We cut anything that adds complexity without solving a problem.",
                  },
                  {
                    title: "Full accountability",
                    body: "We stand behind everything we ship. If it breaks, we fix it. That applies to both divisions.",
                  },
                ].map(({ title, body }, i) => (
                  <div key={title} className="flex gap-4 sm:gap-5">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full border border-blue/30 flex items-center justify-center mt-0.5">
                      <span className="text-blue text-xs font-mono">{i + 1}</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm mb-1.5">{title}</p>
                      <p className="text-white/45 text-sm leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Featured Work ────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 lg:py-32 bg-ink border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="flex items-end justify-between mb-10 md:mb-14">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-2 sm:mb-3">
                  What we have built
                </h2>
                <p className="text-white/50 text-sm">A selection from both divisions.</p>
              </div>
              <Link
                href="/work"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm text-blue font-medium hover:text-blue-light transition-colors flex-shrink-0 ml-4"
              >
                All projects
                <ArrowRight size={14} weight="bold" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {featuredWork.map((project, i) => (
              <Reveal key={project.name} delay={i * 0.1} className="h-full">
                <div className="bg-surface border border-white/5 rounded-lg p-5 sm:p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-blue text-xs font-mono uppercase tracking-widest">
                      {project.division}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold mb-2 sm:mb-3">{project.name}</h3>
                  <p className="text-white/45 text-sm leading-relaxed flex-1 mb-4 sm:mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <span key={t} className="text-xs text-white/35 border border-white/8 rounded-full px-2 py-0.5 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="sm:hidden mt-8">
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm text-blue font-medium hover:text-blue-light transition-colors"
            >
              See all work
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 lg:py-32 bg-surface border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="max-w-2xl">
              <span className="accent-line mb-6" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 sm:mb-5 text-balance">
                Have a project or need support?
              </h2>
              <p className="text-white/50 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Whether you need software built or hardware serviced, we are the right team.
                Tell us what you are working on.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-blue text-white text-sm font-semibold rounded-md hover:bg-blue-light active:scale-[0.98] transition-all"
              >
                Start a conversation
                <ArrowRight size={15} weight="bold" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
