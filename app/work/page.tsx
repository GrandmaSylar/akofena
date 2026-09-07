import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A showcase of projects built under Akofena, across PhiNova and AuraTech Solutions.",
};

const projects = [
  {
    name: "orient Fees Tracker",
    division: "PhiNova",
    description:
      "A desktop school fees management system for Ghanaian educational institutions. Built to run fully offline on Windows with hardware-based licensing to prevent unauthorised deployments. Handles student records, payment tracking, receipt printing, and arrears reporting.",
    tags: ["Electron", "MSSQL", "React", "Node.js"],
    status: "Deployed",
    category: "Desktop Application",
    link: null,
  },
  {
    name: "Concord SMS",
    division: "PhiNova",
    description:
      "A bulk SMS platform built for businesses that need reliable outreach across Ghana's mobile networks. Supports merge-tag personalisation, contact list segmentation, scheduled delivery, and delivery reporting. Multi-sender ID support for businesses with separate communication channels.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Twilio"],
    status: "Live",
    category: "Web Application",
    link: null,
  },
  {
    name: "Invitro LIMS",
    division: "PhiNova",
    description:
      "A laboratory information management system for clinical labs and diagnostic centres. Tracks patient samples from registration through testing to result delivery. Designed to operate reliably in low-connectivity environments, with full audit trail and role-based access control.",
    tags: ["Electron", "Supabase", "React", "PostgreSQL"],
    status: "Live",
    category: "Desktop Application",
    link: "https://phinova.dev",
  },
  {
    name: "easyMigrate",
    division: "PhiNova",
    description:
      "An ETL migration tool for transferring legacy database records between systems. Built to handle messy, inconsistent source data with configurable field mapping and transformation pipelines. Used internally for client database migrations where manual migration is not feasible.",
    tags: ["Node.js", "MSSQL", "TypeScript"],
    status: "Internal",
    category: "CLI Tool",
    link: null,
  },
  {
    name: "Church Management System",
    division: "PhiNova",
    description:
      "A full-stack web platform for local church administration. Covers member records, attendance tracking by service and cell group, giving history with receipt generation, event management, and SMS notification integration for announcements.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    status: "Deployed",
    category: "Web Application",
    link: null,
  },
  {
    name: "ManduuApp",
    division: "PhiNova",
    description:
      "A campus commerce mobile application connecting university students with vendors and services within campus grounds. Enables order placement, vendor discovery, and real-time order tracking for food, groceries, and services.",
    tags: ["React Native", "Node.js", "Firebase"],
    status: "In progress",
    category: "Mobile Application",
    link: null,
  },
];

const statusColor: Record<string, string> = {
  Live: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Deployed: "text-sky-400 bg-sky-400/10 border-sky-400/20",
  Internal: "text-white/40 bg-white/5 border-white/10",
  "In progress": "text-blue bg-blue/10 border-blue/20",
};

export default function WorkPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[50dvh] sm:min-h-[55dvh] flex items-end pb-14 sm:pb-20 pt-28 sm:pt-32 bg-ink overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 0% 100%, rgba(59,130,246,0.06) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <Reveal>
            <span className="text-blue text-xs font-mono uppercase tracking-widest block mb-3 sm:mb-4">
              Work
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white text-balance max-w-xl">
              What we have built
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-white/50 mt-3 sm:mt-4 max-w-lg text-sm sm:text-base">
              Projects across both divisions, from desktop software to mobile applications.
              Built for real clients with real constraints.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Projects Grid ────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 lg:py-32 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {projects.map((project, i) => (
              <Reveal key={project.name} delay={i * 0.07} className="h-full">
                <div className="bg-surface border border-white/5 rounded-lg p-5 sm:p-6 flex flex-col h-full hover:border-white/12 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue/[0.03] transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4 sm:mb-5">
                    <div>
                      <span className="text-blue text-xs font-mono uppercase tracking-widest block mb-1.5">
                        {project.division}
                      </span>
                      <h2 className="text-base sm:text-lg font-bold text-white">{project.name}</h2>
                    </div>
                    <span
                      className={`text-xs border rounded-full px-2.5 py-1 font-medium flex-shrink-0 ml-4 ${
                        statusColor[project.status] ?? ""
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Category */}
                  <p className="text-xs text-white/30 font-mono mb-3 sm:mb-4">{project.category}</p>

                  {/* Description */}
                  <p className="text-white/50 text-sm leading-relaxed flex-1 mb-5 sm:mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-5">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-white/35 border border-white/8 rounded-full px-2.5 py-0.5 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-blue font-medium hover:text-blue-light transition-colors mt-auto"
                    >
                      View project
                      <ArrowRight size={13} weight="bold" />
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-surface border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
                  Have a project in mind?
                </h2>
                <p className="text-white/50 text-sm">
                  We work with businesses, institutions, and founders across Ghana.
                </p>
              </div>
              <Link
                href="/contact"
                className="flex-shrink-0 inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-blue text-white text-sm font-semibold rounded-md hover:bg-blue-light active:scale-[0.98] transition-all"
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
