"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import AkofenaIcon from "./AkofenaIcon";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/divisions", label: "Divisions" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Akofena home">
          <AkofenaIcon size={26} />
          <span className="text-white font-bold tracking-[0.12em] text-sm uppercase">
            Akofena
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7 lg:gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-medium transition-colors duration-150 ${
                  pathname === href
                    ? "text-blue"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center px-5 py-2 bg-blue text-white text-sm font-semibold rounded-md hover:bg-blue-light transition-colors duration-150 active:scale-[0.98]"
        >
          Work with us
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/70 hover:text-white transition-colors p-1.5 -mr-1"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ink/98 backdrop-blur-md border-b border-white/5">
          <ul className="flex flex-col px-4 sm:px-6 py-6 gap-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-base font-medium block py-3 transition-colors border-b border-white/[0.04] last:border-0 ${
                    pathname === href ? "text-blue" : "text-white/70 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 bg-blue text-white text-sm font-semibold rounded-md hover:bg-blue-light transition-colors"
              >
                Work with us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
