"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/lib/animations";

export default function PremiumContact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      alert("Noe gikk galt. Prøv igjen eller ring oss.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="kontakt" className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: "#1a2744" }}>
      {/* Decorative mesh gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]" style={{ backgroundColor: "rgba(37, 99, 235, 0.3)" }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[128px]" style={{ backgroundColor: "rgba(220, 38, 38, 0.15)" }} />
      </div>

      {/* Decorative grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="contact-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contact-grid)" />
      </svg>

      <div className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block font-medium text-sm uppercase tracking-wider mb-4" style={{ color: "#ef4444" }}>
              Kontakt
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ta kontakt med oss
            </h2>
            <p className="text-xl leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>
              Vi hjelper deg gjerne med å finne den beste løsningen for ditt vedlikeholdsbehov. Send oss en melding, så tar vi kontakt.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+4769815780"
                className="flex items-center gap-4 text-white group transition-colors"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-lg font-medium">(+47) 69 81 57 80</span>
              </a>
              <a
                href="mailto:post@vaktmesterconsult.no"
                className="flex items-center gap-4 text-white group transition-colors"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-lg font-medium">post@vaktmesterconsult.no</span>
              </a>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-lg font-medium">Kråkstadveien 1, 1825 Tomter</span>
              </div>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
              {sent ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-vk-charcoal mb-2">Takk for din henvendelse!</h3>
                  <p className="text-vk-slate">Vi tar kontakt så snart vi kan.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-heading text-2xl font-bold text-vk-charcoal mb-6">
                    Send oss en melding
                  </h3>
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-vk-charcoal mb-2">
                        Navn
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Ditt navn"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-vk-charcoal placeholder:text-vk-gray/50 focus:outline-none focus:ring-2 focus:ring-vk-blue/30 focus:border-vk-blue transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-vk-charcoal mb-2">
                        E-post
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="din@epost.no"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-vk-charcoal placeholder:text-vk-gray/50 focus:outline-none focus:ring-2 focus:ring-vk-blue/30 focus:border-vk-blue transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-vk-charcoal mb-2">
                        Melding
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder="Fortell oss hva du trenger hjelp med..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-vk-charcoal placeholder:text-vk-gray/50 focus:outline-none focus:ring-2 focus:ring-vk-blue/30 focus:border-vk-blue transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full px-8 py-4 rounded-xl bg-vk-red text-white font-semibold text-lg hover:bg-vk-red-light transition-colors shadow-lg shadow-vk-red/25 disabled:opacity-70"
                    >
                      {sending ? "Sender..." : "Send melding"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
