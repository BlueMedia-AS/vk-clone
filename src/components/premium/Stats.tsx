"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const stats = [
  {
    number: 9,
    suffix: "",
    label: "Ansatte",
    description:
      "Dedikerte fagfolk med bred kompetanse innen vedlikehold, renhold og utearbeid — klare for oppdraget ditt.",
  },
  {
    number: 1987,
    suffix: "",
    label: "Etablert",
    description:
      "Med røtter helt tilbake til 1987 har vi over 35 års erfaring med å holde eiendommer i toppstand.",
  },
  {
    number: 500,
    suffix: "+",
    label: "Kunder",
    description:
      "Vi betjener over 500 fornøyde kunder — fra borettslag og sameier til næringseiendom og privatpersoner.",
  },
];

function CountUp({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function PremiumStats() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-vk-light">
      <div className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-vk-charcoal">
            Om oss
          </h2>
        </motion.div>

        {/* Stats cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-100"
            >
              <div className="font-heading text-5xl lg:text-6xl font-bold text-vk-blue leading-none mb-3">
                <CountUp target={stat.number} duration={stat.number > 1000 ? 2.5 : 1.5} />
                {stat.suffix}
              </div>
              <div className="font-heading text-xl font-bold text-vk-charcoal mb-3">
                {stat.label}
              </div>
              <p className="text-vk-slate text-base leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* About story + Vedlikeholdsavtale */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {/* About story */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-100">
            <span className="inline-block text-vk-blue font-medium text-sm uppercase tracking-wider mb-4">
              La oss gjøre jobben for deg
            </span>
            <h3 className="font-heading text-2xl lg:text-3xl font-bold text-vk-charcoal mb-5">
              Et totalt konsept innen vedlikehold
            </h3>
            <div className="space-y-4 text-vk-slate leading-relaxed">
              <p>
                Vaktmester Consult (VMC) tilbyr et totalt konsept innen vedlikeholdstjenester, inne som ute. Våre vaktmestere er altmuligmenn som utfører lettere bygnings- og anleggsmessige vedlikehold i tillegg til de tradisjonelle vaktmestertjenestene.
              </p>
              <p>
                Vi utfører arbeid vi er stolte av og vi får gode tilbakemeldinger fra kundene våre. Etter mange års erfaring har vi sikret oss god kompetanse og vet hvordan vi skal utføre arbeid på best mulig måte.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-vk-slate text-sm">
              <svg className="w-4 h-4 text-vk-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Tomter &middot; Askim &middot; Mysen &middot; Oslo syd &middot; Akershus &middot; Østfold
            </div>
          </div>

          {/* Vedlikeholdsavtale B2B */}
          <div className="relative rounded-2xl overflow-hidden p-8 lg:p-10 text-white flex flex-col justify-between" style={{ backgroundColor: "#1a2744" }}>
            {/* Decorative */}
            <svg className="absolute top-0 right-0 w-[250px] h-[250px] opacity-[0.05]" viewBox="0 0 250 250" fill="none">
              <circle cx="200" cy="50" r="120" stroke="white" strokeWidth="1" />
              <circle cx="200" cy="50" r="70" stroke="white" strokeWidth="0.8" />
            </svg>

            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <span className="inline-block text-sm font-medium uppercase tracking-wider mb-3" style={{ color: "#ef4444" }}>
                For bedrifter
              </span>
              <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
                Vedlikeholdsavtale
              </h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Vi tilbyr bedrifter, borettslag og sameier i Østfold, Akershus og Oslo syd gunstige vedlikeholdsavtaler. Få faste priser, prioritert service og ett kontaktpunkt for alt vedlikehold — inne og ute.
              </p>
              <ul className="space-y-2 text-white/60 text-sm mb-8">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-vk-blue-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Fast månedspris tilpasset ditt behov
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-vk-blue-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Prioritert responstid ved henvendelser
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-vk-blue-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Alt fra renhold til utearbeid og oppussing
                </li>
              </ul>
            </div>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-vk-red text-white font-semibold hover:bg-vk-red-light transition-colors shadow-lg shadow-vk-red/20 self-start"
            >
              Kontakt oss for tilbud
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* Bottom row: image + Job CTA */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Team image */}
          <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src="/images/plenklipping-maskin.jpg"
              alt="Teamet i Vaktmester Consult"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Job CTA card */}
          <div className="relative rounded-2xl overflow-hidden flex flex-col justify-center p-10 lg:p-12" style={{ backgroundColor: "#facc15" }}>
            <svg className="absolute bottom-0 right-0 w-40 h-40 opacity-30" viewBox="0 0 160 160" fill="none">
              <rect x="80" y="40" width="70" height="70" rx="8" fill="#3b82f6" transform="rotate(15 115 75)" />
              <rect x="100" y="80" width="55" height="55" rx="6" fill="#2563eb" transform="rotate(-10 127 107)" />
              <circle cx="130" cy="130" r="25" fill="#93c5fd" />
            </svg>

            <div className="relative">
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-vk-charcoal mb-4 max-w-sm">
                Ønsker du å jobbe i Vaktmester Consult?
              </h3>
              <p className="text-vk-charcoal/70 text-lg mb-8 max-w-sm">
                Vi ser alltid etter flinke folk som vil være med på laget.
              </p>
              <Link
                href="/ledige-stillinger"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-vk-charcoal font-semibold text-base hover:shadow-lg transition-shadow"
              >
                Jobb i VMC
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
