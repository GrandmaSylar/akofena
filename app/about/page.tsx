import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import AkofenaIcon from "@/components/AkofenaIcon";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Akofena is a technology company founded in Accra, Ghana. Named after the Adinkra symbol of courage and decisive action.",
};

const founders = [
  {
    name: "Bernardo Benganim",
    role: "Co-founder",
    initials: "BB",
  },
  {
    name: "Co-founder",
    role: "Co-founder",
    initials: "CF",
  },
];

const values = [
  {
    title: "Rooted in context",
    body: "We work in the same markets we build for. That is not a marketing line. It shapes every product decision we make.",
  },
  {
    title: "Depth over breadth",
    body: "We would rather do fewer things properly than many things at surface level. Our products are built to last, not to impress on a demo.",
  },
  {
    title: "Support that shows up",
    body: "When something goes wrong, we are reachable. Not through a ticket queue with a 72-hour SLA. Actually reachable.",
  },
  {
    title: "No unnecessary complexity",
    body: "If a feature does not solve a real problem, it does not ship. Simplicity is a discipline, not a limitation.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[50dvh] sm:min-h-[60dvh] flex items-end pb-14 sm:pb-20 pt-28 sm:pt-32 bg-ink overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 100% 0%, rgba(59,130,246,0.07) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <Reveal>
            <span className="text-blue text-xs font-mono uppercase tracking-widest block mb-3 sm:mb-4">
              About
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white text-balance">
              A company named after a symbol of courage
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── The Name ─────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 lg:py-32 bg-surface border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal direction="left">
              <div className="flex flex-col items-start">
                <div className="mb-6 sm:mb-8 p-6 sm:p-8 bg-surface-3 border border-blue/15 rounded-lg self-start">
                  <AkofenaIcon size={64} className="sm:hidden" />
                  <AkofenaIcon size={80} className="hidden sm:block" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Akofena</h2>
                <p className="text-blue text-xs sm:text-sm font-mono uppercase tracking-widest mb-3 sm:mb-4">
                  Adinkra symbol of the sword
                </p>
                <p className="text-white/55 leading-relaxed text-sm sm:text-base">
                  The Akofena is an Adinkra symbol from the Akan people of Ghana. Two crossed swords
                  representing courage, authority, and the legitimacy of decisive action. It is a
                  symbol of those who do not hesitate when something needs to be done.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="space-y-5 sm:space-y-6">
                <p className="text-white/70 leading-relaxed text-base sm:text-lg">
                  We chose this name because it reflects how we approach our work: directly, with
                  confidence, and with full accountability for the result.
                </p>
                <p className="text-white/55 leading-relaxed text-sm sm:text-base">
                  In practice, that means shipping software that works when the electricity is
                  unstable, servicing hardware that keeps a business running, and standing behind
                  every deployment without caveats.
                </p>
                <p className="text-white/55 leading-relaxed text-sm sm:text-base">
                  The symbol is Ghanaian. The standard it represents is universal.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 lg:py-32 bg-ink border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <Reveal>
              <span className="accent-line mb-5 sm:mb-6" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 sm:mb-8">
                Our story
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4 sm:space-y-5 text-white/60 leading-relaxed text-sm sm:text-base">
                <p>
                  Akofena was founded in Accra with a straightforward premise: the best technology
                  for Ghanaian businesses would be built by people who understand those businesses
                  from the inside. Not by importing solutions designed for markets with different
                  infrastructure, different budgets, and different operational realities.
                </p>
                <p>
                  We started by solving real problems for clients around us, tracking school fees
                  on a desktop system that ran without internet, managing lab samples for a
                  diagnostic centre, keeping member and giving records for a local church. Each
                  project taught us something that a more comfortable starting point would not have.
                </p>
                <p>
                  Over time, those projects became products. And the accumulated experience of
                  building and deploying software in Ghana led us to formalise the hardware and
                  services side of what we had already been doing. AuraTech Solutions became its
                  own division, handling the infrastructure that software depends on.
                </p>
                <p>
                  Today Akofena operates both. The two divisions are different in what they do, but
                  identical in how they do it: careful work, direct communication, and no gaps
                  between what we promise and what we deliver.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 lg:py-32 bg-surface border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-10 sm:mb-12">
              How we work
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {values.map(({ title, body }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="border-t border-white/10 pt-5 sm:pt-6">
                  <h3 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founders ─────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 lg:py-32 bg-ink border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-10 sm:mb-12">
              The team
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {founders.map(({ name, role, initials }, i) => (
              <Reveal key={name} delay={i * 0.1}>
                <div className="bg-surface border border-white/5 rounded-lg p-5 sm:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-surface-3 border border-white/8 flex items-center justify-center mb-4 sm:mb-5">
                    <span className="text-blue font-bold text-base sm:text-lg font-mono">{initials}</span>
                  </div>
                  <p className="text-white font-semibold mb-1 text-sm sm:text-base">{name}</p>
                  <p className="text-white/40 text-xs sm:text-sm">{role}</p>
                </div>
              </Reveal>
            ))}

            {/* Open position */}
            <Reveal delay={0.2}>
              <div className="bg-surface border border-dashed border-white/10 rounded-lg p-5 sm:p-6 flex flex-col justify-center items-center text-center min-h-[120px]">
                <p className="text-white/30 text-sm mb-1">We are growing.</p>
                <Link
                  href="/contact"
                  className="text-blue text-sm font-medium hover:text-blue-light transition-colors inline-flex items-center gap-1.5 mt-2"
                >
                  Get in touch
                  <ArrowRight size={13} weight="bold" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
