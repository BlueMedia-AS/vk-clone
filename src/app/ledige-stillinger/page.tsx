"use client";

import Header from "@/components/premium/Header";
import Footer from "@/components/premium/Footer";
import { AngleDivider } from "@/components/premium/SectionDivider";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

const requirements = [
  "Har erfaring med renhold, gjerne også fra andre bransjer (full opplæring gis)",
  "Er serviceinnstilt, utadvendt og positiv",
  "Er pålitelig, arbeidsom og opptatt av å gjøre en god jobb",
  "Behersker norsk, både muntlig og skriftlig",
  "Har førerkort klasse B",
  "Kan vise til gode referanser",
  "Trives med å jobbe selvstendig og målrettet",
];

const benefits = [
  {
    title: "Snarlig tiltredelse",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Varierte og selvstendige arbeidsoppgaver",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    title: "Et godt arbeidsmiljø med trivelige kollegaer",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Konkurransedyktige betingelser",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Mulighet for personlig og faglig utvikling",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function LedigeStillingerPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" style={{ backgroundColor: "#1a2744" }}>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]" style={{ backgroundColor: "rgba(37, 99, 235, 0.3)" }} />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[128px]" style={{ backgroundColor: "rgba(220, 38, 38, 0.15)" }} />
          </div>

          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="jobs-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#jobs-hero-grid)" />
          </svg>

          <div className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block font-medium text-sm uppercase tracking-wider mb-4" style={{ color: "#ef4444" }}>
                Karriere
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Ledige stillinger
              </h1>
              <p className="text-xl leading-relaxed max-w-2xl" style={{ color: "rgba(255,255,255,0.7)" }}>
                Bli en del av Vaktmester Consult AS — vi søker alltid etter dyktige og engasjerte medarbeidere.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <polygon points="0,0 1200,60 1200,0 0,0" fill="#1a2744" />
          </svg>
        </div>

        {/* Job listing */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Job card header */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-gray-100"
            >
              {/* Top bar */}
              <div className="p-8 lg:p-10" style={{ backgroundColor: "#1a2744" }}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <div>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-4">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      Ledig stilling
                    </span>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                      Renholder søkes – Vaktmester Consult AS
                    </h2>
                    <p className="mt-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                      Indre Østfold · Heltid · Snarlig oppstart
                    </p>
                  </div>
                  <a
                    href="mailto:post@vaktmesterconsult.no?subject=Søknad – Renholder"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-vk-red text-white font-semibold text-lg transition-all shadow-lg shadow-vk-red/30 hover:bg-vk-red-light hover:shadow-vk-red/40 hover:-translate-y-0.5 self-start shrink-0"
                  >
                    Søk nå
                  </a>
                </div>
              </div>

              {/* Job body */}
              <div className="p-8 lg:p-10 bg-white">
                {/* Intro */}
                <div className="max-w-3xl mb-12">
                  <p className="text-vk-charcoal text-xl font-medium leading-relaxed mb-6">
                    Har du sans for kvalitet, liker å jobbe selvstendig og yte god service? Da vil vi gjerne høre fra deg!
                  </p>
                  <p className="text-vk-gray text-lg leading-relaxed">
                    Vaktmester Consult AS søker en dyktig og pålitelig renholder til snarlig oppstart. Vi ser etter deg som er selvgående, strukturert og som trives med varierte arbeidsdager hos ulike kunder i indre Østfold.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                  {/* Requirements */}
                  <motion.div
                    variants={slideInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <h3 className="font-heading text-2xl font-bold text-vk-charcoal mb-6">
                      Vi ser etter deg som:
                    </h3>
                    <ul className="space-y-4">
                      {requirements.map((req) => (
                        <li key={req} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-vk-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-3.5 h-3.5 text-vk-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-vk-slate text-base leading-relaxed">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Benefits */}
                  <motion.div
                    variants={slideInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <h3 className="font-heading text-2xl font-bold text-vk-charcoal mb-6">
                      Vi tilbyr:
                    </h3>
                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      {benefits.map((benefit) => (
                        <motion.div
                          key={benefit.title}
                          variants={cardVariant}
                          className="flex items-center gap-4 p-4 rounded-2xl bg-vk-light hover:bg-vk-blue-pale/30 transition-colors"
                        >
                          <div className="w-12 h-12 rounded-xl bg-vk-navy flex items-center justify-center text-white shrink-0">
                            {benefit.icon}
                          </div>
                          <p className="font-semibold text-vk-charcoal">{benefit.title}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Note about travel */}
                <div className="mt-12 p-6 rounded-2xl bg-vk-light border border-gray-100">
                  <p className="text-vk-slate text-base leading-relaxed">
                    Som renholder hos oss vil du ambuleres mellom ulike kunder, så det er viktig at du er fleksibel og glad i å være på farten.
                  </p>
                </div>

                {/* Apply CTA */}
                <div className="mt-12 pt-10 border-t border-gray-100">
                  <h3 className="font-heading text-2xl font-bold text-vk-charcoal mb-3">
                    Interessert?
                  </h3>
                  <p className="text-vk-gray text-lg leading-relaxed mb-8">
                    Ta kontakt med oss for mer informasjon — enten på telefon eller e-post. Vi ser frem til å høre fra deg!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="mailto:post@vaktmesterconsult.no?subject=Søknad – Renholder"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-vk-red text-white font-semibold text-lg transition-all shadow-lg shadow-vk-red/30 hover:bg-vk-red-light hover:shadow-vk-red/40 hover:-translate-y-0.5"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Send søknad
                    </a>
                    <a
                      href="tel:+4769815780"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-vk-navy/20 text-vk-charcoal font-semibold text-lg hover:bg-vk-light transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      (+47) 69 81 57 80
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About company */}
        <section className="py-20 lg:py-28 bg-vk-light">
          <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="inline-block font-medium text-sm uppercase tracking-wider mb-4" style={{ color: "#ef4444" }}>
                Om oss
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-vk-charcoal mb-6">
                Om Vaktmester Consult AS
              </h2>
              <p className="text-vk-gray text-lg max-w-3xl mx-auto leading-relaxed mb-8">
                Vaktmester Consult tilbyr helhetlige vedlikeholdstjenester inne og ute, med allsidige medarbeidere som håndterer lett bygg- og anleggsvedlikehold i tillegg til tradisjonelle vaktmestertjenester.
              </p>
              <Link
                href="/om-oss"
                className="inline-flex items-center gap-2 text-vk-blue font-semibold text-lg hover:text-vk-blue-light transition-colors"
              >
                Les mer om oss
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA band */}
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
                Møt teamet vårt
              </h2>
              <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
                Bli kjent med menneskene bak Vaktmester Consult AS.
              </p>
              <Link
                href="/ansatte"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-vk-red text-white font-semibold text-lg transition-all shadow-lg shadow-vk-red/30 hover:bg-vk-red-light hover:shadow-vk-red/40 hover:-translate-y-0.5"
              >
                Se våre ansatte
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
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
