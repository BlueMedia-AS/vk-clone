"use client";

import Header from "@/components/premium/Header";
import Footer from "@/components/premium/Footer";
import { AngleDivider } from "@/components/premium/SectionDivider";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

const bulletItems = [
  "FDV-plan, etablere og iverksette",
  "Tilsyn av fyr og el-anlegg",
  "Tilsyn og administrasjon av lås og låssystemer",
  "Tilsyn av ventilasjonsanlegg",
  "Skifte av lyskilder",
  "Beskjæring og felling av trær",
  "Renhold av uteområder",
  "Oppmerking av P-plasser",
  "Snørydding og feiing",
];

const featureCards = [
  {
    title: "Teknisk drift og tilsyn av næringsbygg",
    description:
      "Regelmessig inspeksjon og forebyggende tiltak, sørger for at ditt næringsbygg fungerer optimalt.",
    image: "/images/tjenester/naeringsbygg.jpg",
  },
  {
    title: "Reparasjoner og teknisk oppfølging",
    description:
      "Enten du trenger hjelp med elektriske anlegg, vedlikehold og reparasjoner av dører, låser eller andre typer installasjoner, tar vi jobben.",
    image: "/images/tjenester/hender.jpg",
  },
  {
    title: "Rydding, bortkjøring og avfallshåndtering",
    description:
      "Vi hjelper deg med rydding av eiendom og bortkjøring av hageavfall, byggeavfall, matavfall eller annet husholdningsavfall og skrot.",
    image: "/images/tjenester/rydding.jpg",
  },
  {
    title: "Droneinspeksjon",
    description:
      "Har du behov for å utføre droneinspeksjon av tak, takrenner, nedløp, ventilasjonspipe eller lignende, tar vi jobben.",
    image: "/images/tjenester/droneinspeksjon.jpg",
  },
  {
    title: "Graffiti og taggefjerning",
    description:
      "Graffiti og tagging er skjemmende for husvegger, gjerder og murer eller andre steder du gjerne vil ha rene og presentable.",
    image: "/images/tjenester/vasking.jpg",
  },
  {
    title: "Borettslag og sameier",
    description:
      "Vi tilbyr prisgunstige vedlikeholdsavtaler for borettslag og sameier i Oslo syd, Akershus og Østfold.",
    image: "/images/tjenester/borettslag.jpg",
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

export default function VaktmestertjenesterPage() {
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
              <pattern id="vaktmester-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#vaktmester-hero-grid)" />
          </svg>

          <div className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block font-medium text-sm uppercase tracking-wider mb-4" style={{ color: "#ef4444" }}>
                Vaktmestertjenester
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Har du bruk for vaktmestertjenester?
              </h1>
              <p className="text-xl leading-relaxed max-w-2xl" style={{ color: "rgba(255,255,255,0.7)" }}>
                Våre vaktmestertjenester omfatter alt fra A–Å Primært et tilbud til våre faste kunder som allerede kjøper tjenester hos oss. VMC leverer tjenester fortrinnsvis til bedrifter, borettslag, sameier, men også til private.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <polygon points="0,0 1200,60 1200,0 0,0" fill="#1a2744" />
          </svg>
        </div>

        {/* Bullet list section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-vk-charcoal mb-8">
                Vi kan hjelpe deg med:
              </h2>
              <ul className="space-y-4">
                {bulletItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-vk-navy flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-vk-slate text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Feature cards grid */}
        <section className="py-20 lg:py-28 bg-vk-light">
          <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {featureCards.map((card, index) => {
                const isEven = index % 2 === 0;
                const variant = isEven ? slideInLeft : slideInRight;

                return (
                  <motion.div
                    key={card.title}
                    variants={cardVariant}
                    className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-gray-100 bg-white flex flex-col"
                  >
                    <div className="relative h-56 w-full">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="font-heading text-xl font-bold text-vk-charcoal mb-3">
                        {card.title}
                      </h3>
                      <p className="text-vk-gray text-base leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
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
                Har du behov for våre tjenester?
              </h2>
              <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
                Ta kontakt med oss for en uforpliktende prat om hvordan vi kan hjelpe deg.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-vk-red text-white font-semibold text-lg transition-all shadow-lg shadow-vk-red/30 hover:bg-vk-red-light hover:shadow-vk-red/40 hover:-translate-y-0.5"
              >
                Kontakt oss
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
