import type { Metadata } from "next";
import {
  MapPin,
  Envelope,
  WhatsappLogo,
  Phone,
  SnapchatLogo,
} from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Akofena for software inquiries, IT support, or partnership opportunities.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-ink border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <span className="text-gold text-xs font-mono uppercase tracking-widest block mb-3 sm:mb-4">
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white text-balance max-w-xl">
              Let us talk about what you need
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 lg:py-32 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <Reveal>
                <h2 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8">Send us a message</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <ContactForm />
              </Reveal>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <Reveal delay={0.15}>
                <div className="lg:sticky lg:top-24 space-y-8 sm:space-y-10">

                  {/* Location */}
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-white mb-5 sm:mb-6">Contact details</h2>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-9 h-9 rounded-lg bg-surface-3 border border-white/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin size={16} weight="bold" className="text-gold" />
                      </div>
                      <div>
                        <p className="text-xs text-white/30 mb-0.5">Location</p>
                        <p className="text-sm text-white/70">Accra, Greater Accra Region, Ghana</p>
                      </div>
                    </div>
                  </div>

                  {/* PhiNova Division */}
                  <div className="border-t border-white/5 pt-6 sm:pt-8">
                    <p className="text-xs text-gold font-mono uppercase tracking-widest mb-4 sm:mb-5">
                      PhiNova — Software Division
                    </p>
                    <div className="space-y-3 sm:space-y-4">
                      <a
                        href="mailto:info@phinova.dev"
                        className="flex items-start gap-3 sm:gap-4 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-surface-3 border border-white/8 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-gold/25 transition-colors">
                          <Envelope size={16} weight="bold" className="text-gold" />
                        </div>
                        <div>
                          <p className="text-xs text-white/30 mb-0.5">Email</p>
                          <p className="text-sm text-white/70 group-hover:text-white transition-colors break-all">
                            info@phinova.dev
                          </p>
                        </div>
                      </a>

                      <a
                        href="tel:+233204906780"
                        className="flex items-start gap-3 sm:gap-4 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-surface-3 border border-white/8 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-gold/25 transition-colors">
                          <Phone size={16} weight="bold" className="text-gold" />
                        </div>
                        <div>
                          <p className="text-xs text-white/30 mb-0.5">Phone</p>
                          <p className="text-sm text-white/70 group-hover:text-white transition-colors">
                            +233 20 490 6780
                          </p>
                        </div>
                      </a>

                      <a
                        href="https://phinova.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gold/60 hover:text-gold transition-colors block pl-[48px] sm:pl-[52px]"
                      >
                        phinova.dev
                      </a>
                    </div>
                  </div>

                  {/* AuraTech Division */}
                  <div className="border-t border-white/5 pt-6 sm:pt-8">
                    <p className="text-xs text-gold font-mono uppercase tracking-widest mb-4 sm:mb-5">
                      AuraTech Solutions — Services Division
                    </p>
                    <div className="space-y-3 sm:space-y-4">
                      <a
                        href="mailto:auratech99solutions@gmail.com"
                        className="flex items-start gap-3 sm:gap-4 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-surface-3 border border-white/8 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-gold/25 transition-colors">
                          <Envelope size={16} weight="bold" className="text-gold" />
                        </div>
                        <div>
                          <p className="text-xs text-white/30 mb-0.5">Email</p>
                          <p className="text-sm text-white/70 group-hover:text-white transition-colors break-all">
                            auratech99solutions@gmail.com
                          </p>
                        </div>
                      </a>

                      <a
                        href="https://wa.me/233558080417"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 sm:gap-4 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-surface-3 border border-white/8 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-gold/25 transition-colors">
                          <WhatsappLogo size={16} weight="bold" className="text-gold" />
                        </div>
                        <div>
                          <p className="text-xs text-white/30 mb-0.5">WhatsApp (primary)</p>
                          <p className="text-sm text-white/70 group-hover:text-white transition-colors">
                            +233 55 808 0417
                          </p>
                        </div>
                      </a>

                      <a
                        href="https://wa.me/233204906780"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 sm:gap-4 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-surface-3 border border-white/8 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-gold/25 transition-colors">
                          <WhatsappLogo size={16} weight="bold" className="text-gold" />
                        </div>
                        <div>
                          <p className="text-xs text-white/30 mb-0.5">WhatsApp (alternative)</p>
                          <p className="text-sm text-white/70 group-hover:text-white transition-colors">
                            +233 20 490 6780
                          </p>
                        </div>
                      </a>

                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-9 h-9 rounded-lg bg-surface-3 border border-white/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Phone size={16} weight="bold" className="text-gold" />
                        </div>
                        <div>
                          <p className="text-xs text-white/30 mb-0.5">Phone lines</p>
                          <div className="space-y-1">
                            {["+233 55 808 0417", "+233 20 490 6780", "+233 27 048 6679"].map((n) => (
                              <a
                                key={n}
                                href={`tel:${n.replace(/\s/g, "")}`}
                                className="text-sm text-white/70 hover:text-white transition-colors block"
                              >
                                {n}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>

                      <a
                        href="https://www.snapchat.com/add/auratech007"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 sm:gap-4 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-surface-3 border border-white/8 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-gold/25 transition-colors">
                          <SnapchatLogo size={16} weight="bold" className="text-gold" />
                        </div>
                        <div>
                          <p className="text-xs text-white/30 mb-0.5">Snapchat</p>
                          <p className="text-sm text-white/70 group-hover:text-white transition-colors">
                            auratech007
                          </p>
                        </div>
                      </a>

                      <a
                        href="https://auratechsolutionsgh.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gold/60 hover:text-gold transition-colors block pl-[48px] sm:pl-[52px]"
                      >
                        auratechsolutionsgh.org
                      </a>
                    </div>
                  </div>

                  <div className="bg-surface border border-white/5 rounded-lg p-4 sm:p-5">
                    <p className="text-sm text-white/60 leading-relaxed">
                      For software inquiries, email PhiNova directly. For device repair or IT
                      support, WhatsApp is the fastest route to AuraTech.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
