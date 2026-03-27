"use client";

import Header from "@/components/premium/Header";
import Footer from "@/components/premium/Footer";
import { AngleDivider } from "@/components/premium/SectionDivider";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

const contactInfo = [
  {
    label: "Telefon",
    value: "(+47) 69 81 57 80",
    href: "tel:+4769815780",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "E-post",
    value: "post@vaktmesterconsult.no",
    href: "mailto:post@vaktmesterconsult.no",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Adresse",
    value: "Kråkstadveien 1, 1825 Tomter",
    href: "https://maps.google.com/?q=Kråkstadveien+1,+1825+Tomter",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Åpningstider",
    value: "Man–fre: 08:00–16:00",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" style={{ backgroundColor: "#1a2744" }}>
          {/* Decorative mesh gradient */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]" style={{ backgroundColor: "rgba(37, 99, 235, 0.3)" }} />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[128px]" style={{ backgroundColor: "rgba(220, 38, 38, 0.15)" }} />
          </div>

          {/* Grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contact-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-hero-grid)" />
          </svg>

          <div className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block font-medium text-sm uppercase tracking-wider mb-4" style={{ color: "#ef4444" }}>
                Kontakt
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Vi er her for deg
              </h1>
              <p className="text-xl leading-relaxed max-w-2xl" style={{ color: "rgba(255,255,255,0.7)" }}>
                Har du spørsmål eller ønsker et uforpliktende tilbud? Ta kontakt med oss — vi svarer deg raskt.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Angle divider */}
        <div className="w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <polygon points="0,0 1200,60 1200,0 0,0" fill="#1a2744" />
          </svg>
        </div>

        {/* Contact info cards + form */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
              {/* Left — contact info panel */}
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden" style={{ backgroundColor: "#1a2744" }}>
                  {/* Decorative SVG — concentric circles top-right */}
                  <svg className="absolute -top-10 -right-10 w-80 h-80 opacity-[0.15]" viewBox="0 0 300 300" fill="none">
                    <circle cx="220" cy="80" r="140" stroke="#2563eb" strokeWidth="1" />
                    <circle cx="220" cy="80" r="100" stroke="#2563eb" strokeWidth="0.8" />
                    <circle cx="220" cy="80" r="60" stroke="#2563eb" strokeWidth="0.5" />
                    <circle cx="220" cy="80" r="25" stroke="#2563eb" strokeWidth="0.3" />
                  </svg>
                  {/* Decorative SVG — diagonal lines bottom-left */}
                  <svg className="absolute -bottom-6 -left-6 w-60 h-60 opacity-[0.12]" viewBox="0 0 200 200" fill="none">
                    <line x1="0" y1="200" x2="200" y2="0" stroke="#ef4444" strokeWidth="0.8" />
                    <line x1="0" y1="160" x2="160" y2="0" stroke="#ef4444" strokeWidth="0.6" />
                    <line x1="0" y1="120" x2="120" y2="0" stroke="#ef4444" strokeWidth="0.4" />
                    <line x1="40" y1="200" x2="200" y2="40" stroke="#2563eb" strokeWidth="0.5" />
                    <line x1="80" y1="200" x2="200" y2="80" stroke="#2563eb" strokeWidth="0.3" />
                  </svg>
                  {/* Glow accents */}
                  <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full blur-[100px]" style={{ backgroundColor: "rgba(37, 99, 235, 0.25)" }} />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-[80px]" style={{ backgroundColor: "rgba(220, 38, 38, 0.15)" }} />

                  <div className="relative">
                    <span className="inline-block font-medium text-sm uppercase tracking-wider mb-5" style={{ color: "#ef4444" }}>
                      Kontakt
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-3">
                      Kontaktinformasjon
                    </h2>
                    <p className="text-base leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.6)" }}>
                      Ring oss, send en e-post, eller stikk innom kontoret vårt i Tomter.
                    </p>

                    <div className="space-y-4">
                      {contactInfo.map((item) => {
                        const inner = (
                          <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl group transition-colors" style={{ backgroundColor: "rgba(255,255,255,0.05)" }} key={item.label}>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-white shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                              {item.icon}
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs uppercase tracking-wider font-medium mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>{item.label}</p>
                              <p className="text-sm sm:text-base font-semibold text-white group-hover:text-vk-blue-pale transition-colors break-words">
                                {item.value}
                              </p>
                            </div>
                          </div>
                        );

                        return item.href ? (
                          <a
                            key={item.label}
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {inner}
                          </a>
                        ) : (
                          <div key={item.label}>{inner}</div>
                        );
                      })}
                    </div>

                    {/* Social inline */}
                    <div className="mt-8 flex items-center gap-3">
                      <span className="text-xs uppercase tracking-wider font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>Følg oss</span>
                      <a
                        href="https://facebook.com/vaktmesterconsult"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-colors"
                        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                        aria-label="Facebook"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right — contact form */}
              <motion.div
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl ring-1 ring-gray-100 flex-1 flex flex-col">
                  <h3 className="font-heading text-2xl font-bold text-vk-charcoal mb-2">
                    Send oss en melding
                  </h3>
                  <p className="text-vk-gray mb-8">
                    Fyll ut skjemaet, så tar vi kontakt innen en virkedag.
                  </p>
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-vk-charcoal mb-2">
                          Navn
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Ditt navn"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-vk-charcoal placeholder:text-vk-gray/50 focus:outline-none focus:ring-2 focus:ring-vk-blue/30 focus:border-vk-blue transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-vk-charcoal mb-2">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          placeholder="Ditt telefonnummer"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-vk-charcoal placeholder:text-vk-gray/50 focus:outline-none focus:ring-2 focus:ring-vk-blue/30 focus:border-vk-blue transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-vk-charcoal mb-2">
                        E-post
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="din@epost.no"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-vk-charcoal placeholder:text-vk-gray/50 focus:outline-none focus:ring-2 focus:ring-vk-blue/30 focus:border-vk-blue transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-vk-charcoal mb-2">
                        Emne
                      </label>
                      <select
                        id="subject"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-vk-charcoal focus:outline-none focus:ring-2 focus:ring-vk-blue/30 focus:border-vk-blue transition-colors"
                        defaultValue=""
                      >
                        <option value="" disabled>Velg emne</option>
                        <option value="tilbud">Forespørsel om tilbud</option>
                        <option value="vaktmester">Vaktmestertjenester</option>
                        <option value="gartner">Gartnertjenester</option>
                        <option value="vinter">Vintertjenester</option>
                        <option value="renhold">Renhold</option>
                        <option value="oppussing">Oppussing</option>
                        <option value="annet">Annet</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-vk-charcoal mb-2">
                        Melding
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Fortell oss hva du trenger hjelp med..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-vk-charcoal placeholder:text-vk-gray/50 focus:outline-none focus:ring-2 focus:ring-vk-blue/30 focus:border-vk-blue transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-8 py-4 rounded-xl bg-vk-red text-white font-semibold text-lg hover:bg-vk-red-light transition-colors shadow-lg shadow-vk-red/25"
                    >
                      Send melding
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map section */}
        <section className="bg-vk-light">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="inline-block font-medium text-sm uppercase tracking-wider text-vk-red mb-4">
                Finn oss
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-vk-charcoal">
                Besøk oss i Tomter
              </h2>
            </motion.div>
            <motion.div variants={fadeInUp} className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-gray-200 h-[400px] lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d10.9998941!3d59.6606576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4643e499e5e425e9%3A0x5f168ca39383d6aa!2sVaktmester%20Consult%20AS!5e0!3m2!1sno!2sno"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vaktmester Consult AS — Kråkstadveien 1, 1825 Tomter"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* CTA band before footer */}
        <AngleDivider color="#1a2744" />
        <section className="py-16 lg:py-20 relative overflow-hidden" style={{ backgroundColor: "#1a2744" }}>
          <div className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                Klar for profesjonelt vedlikehold?
              </h2>
              <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
                Ring oss i dag for et uforpliktende tilbud.
              </p>
              <a
                href="tel:+4769815780"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-vk-red text-white font-semibold text-lg transition-all shadow-lg shadow-vk-red/30 hover:bg-vk-red-light hover:shadow-vk-red/40 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (+47) 69 81 57 80
              </a>
            </motion.div>
          </div>
        </section>
        <div className="w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <polygon points="0,0 1200,60 1200,0 0,0" fill="#1a2744" />
          </svg>
        </div>
      </main>
      <Footer />
    </>
  );
}
