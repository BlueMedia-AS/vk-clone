"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const seasons = [
  {
    season: "Vår",
    title: "Våren er her – tid for klargjøring!",
    description:
      "Etter en lang vinter trenger uteområdene ekstra kjærlighet. Vi hjelper med vårrengjøring, fjerning av grus og sand, plenluking og klargjøring av grøntanlegg.",
    image: "/images/plen-gress.jpg",
    months: "Mars – Mai",
    accent: "#2563eb",
  },
  {
    season: "Sommer",
    title: "Hold uteområdene i toppform",
    description:
      "Plenklipping, hekklipping, beplantning, vanning og generelt vedlikehold av uteområder. Vi holder eiendommen din fin hele sommeren.",
    image: "/images/plenklipping-maskin.jpg",
    months: "Juni – August",
    accent: "#16a34a",
  },
  {
    season: "Høst",
    title: "Forbered eiendommen for vinteren",
    description:
      "Løvraking, beskjæring, nedklipping av stauder, klargjøring av vinterbeplantning og generelt høstvedlikehold for uteområder.",
    image: "/images/blader.png",
    months: "September – November",
    accent: "#dc2626",
  },
  {
    season: "Vinter",
    title: "Trygg og fremkommelig hele vinteren",
    description:
      "Snøbrøyting, strøing, måking av tak og is-fjerning. Vi sørger for at eiendommen er trygg og tilgjengelig gjennom hele vintersesongen.",
    image: "/images/snorydding.jpg",
    months: "Desember – Februar",
    accent: "#1a2744",
  },
];

function getCurrentSeasonIndex(): number {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return 0;
  if (month >= 5 && month <= 7) return 1;
  if (month >= 8 && month <= 10) return 2;
  return 3;
}

export default function PremiumNews() {
  const currentSeason = getCurrentSeasonIndex();

  return (
    <section id="sesonger" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative dot pattern */}
      <svg className="absolute top-20 right-10 w-[160px] h-[160px] opacity-[0.04]" viewBox="0 0 160 160" fill="none">
        {Array.from({ length: 64 }).map((_, i) => {
          const x = (i % 8) * 20 + 10;
          const y = Math.floor(i / 8) * 20 + 10;
          return <circle key={i} cx={x} cy={y} r="2" fill="#2563eb" />;
        })}
      </svg>

      <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-vk-blue font-medium text-sm uppercase tracking-wider mb-4">
            Hele året
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-vk-charcoal mb-6">
            Tjenester hele året
          </h2>
          <p className="text-vk-slate text-xl max-w-2xl mx-auto leading-relaxed">
            Vi tilpasser tjenestene våre etter sesong for å gi deg best mulig vedlikehold
          </p>
        </motion.div>

        <motion.div
          className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x snap-mandatory"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {seasons.map((item, index) => {
            const isCurrent = index === currentSeason;
            return (
              <motion.div
                key={item.season}
                variants={fadeInUp}
                className={`group relative flex-shrink-0 w-[280px] lg:w-auto snap-center rounded-3xl overflow-hidden ${
                  isCurrent ? "ring-2 ring-vk-blue ring-offset-4" : ""
                }`}
              >
                <div className="relative h-[420px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: item.accent }}
                      >
                        {item.season}
                      </span>
                      <span className="text-white/60 text-xs">{item.months}</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {isCurrent && (
                    <div className="absolute top-4 right-4 px-3 py-1 text-white text-xs font-bold rounded-full" style={{ backgroundColor: "#dc2626" }}>
                      Nå
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile season dots */}
        <div className="flex justify-center gap-2 mt-6 lg:hidden">
          {seasons.map((item, index) => (
            <div
              key={item.season}
              className={`h-2 rounded-full transition-all ${
                index === currentSeason ? "bg-vk-blue w-6" : "bg-gray-300 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
