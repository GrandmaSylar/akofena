import Link from "next/link";
import AkofenaIcon from "./AkofenaIcon";
import { LinkedinLogo, GithubLogo, XLogo, WhatsappLogo, Envelope } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-8 md:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <AkofenaIcon size={28} />
              <span className="text-white font-bold tracking-[0.12em] text-sm uppercase">
                Akofena
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Built for Africa. Built to last.
            </p>
            <p className="text-white/30 text-xs mt-4">Built in Accra, Ghana</p>

            {/* Contact quick-links */}
            <div className="flex flex-col gap-2 mt-5">
              <a
                href="mailto:info@phinova.dev"
                className="flex items-center gap-2 text-white/35 hover:text-white/70 transition-colors text-xs"
              >
                <Envelope size={13} weight="bold" />
                info@phinova.dev
              </a>
              <a
                href="mailto:auratech99solutions@gmail.com"
                className="flex items-center gap-2 text-white/35 hover:text-white/70 transition-colors text-xs"
              >
                <Envelope size={13} weight="bold" />
                auratech99solutions@gmail.com
              </a>
              <a
                href="https://wa.me/233558080417"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/35 hover:text-white/70 transition-colors text-xs"
              >
                <WhatsappLogo size={13} weight="bold" />
                +233 55 808 0417
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 mt-5">
              {[
                { icon: LinkedinLogo, label: "LinkedIn", href: "#" },
                { icon: GithubLogo, label: "GitHub", href: "#" },
                { icon: XLogo, label: "X (Twitter)", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white/30 hover:text-blue transition-colors"
                >
                  <Icon size={18} weight="bold" />
                </a>
              ))}
            </div>
          </div>

          {/* Divisions */}
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-4">
              Divisions
            </p>
            <ul className="space-y-3">
              {[
                { label: "PhiNova", href: "https://phinova.dev", external: true },
                { label: "AuraTech Solutions", href: "https://auratechsolutionsgh.org", external: true },
                { label: "Our Work", href: "/work" },
                { label: "Divisions", href: "/divisions" },
              ].map(({ label, href, external }) => (
                <li key={label}>
                  {external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-4">
              Company
            </p>
            <ul className="space-y-3">
              {[
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Akofena. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://phinova.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/25 text-xs hover:text-white/50 transition-colors"
            >
              phinova.dev
            </a>
            <a
              href="https://auratechsolutionsgh.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/25 text-xs hover:text-white/50 transition-colors"
            >
              auratechsolutionsgh.org
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
