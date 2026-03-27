"use client";

import Header from "@/components/premium/Header";
import Footer from "@/components/premium/Footer";
import { AngleDivider } from "@/components/premium/SectionDivider";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const team = [
  {
    name: "Jon Steinar Sørby",
    role: "Daglig leder",
    image: "/images/ansatte/jon-steinar-sorby.jpg",
  },
  {
    name: "Bjørnar Ulvær",
    role: "Vaktmester",
    image: "/images/ansatte/bjornar-ulvaer.jpg",
  },
  {
    name: "Torild Kristin Pettersen",
    role: "Renholdsleder",
    image: "/images/ansatte/torild-kristin-pettersen.jpg",
  },
  {
    name: "Marianne Mikarlsen",
    role: "Renholdsoperatør",
    image: "/images/ansatte/marianne-mikarlsen.jpg",
  },
  {
    name: "Mary Elisabeth Jansen",
    role: "Renholdsoperatør",
    image: "/images/ansatte/mary-elisabeth-jansen.jpg",
  },
  {
    name: "Mathias Strande",
    role: "Vaktmesterassistent",
    image: "/images/ansatte/mathias-strande.jpg",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function AnsattePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero with crew photo */}
        <section className="relative pt-32 pb-0 lg:pt-40 overflow-hidden" style={{ backgroundColor: "#1a2744" }}>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]" style={{ backgroundColor: "rgba(37, 99, 235, 0.3)" }} />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[128px]" style={{ backgroundColor: "rgba(220, 38, 38, 0.15)" }} />
          </div>

          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="team-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#team-hero-grid)" />
          </svg>

          <div className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 lg:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block font-medium text-sm uppercase tracking-wider mb-4" style={{ color: "#ef4444" }}>
                Teamet
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Møt våre ansatte
              </h1>
              <p className="text-xl leading-relaxed max-w-2xl" style={{ color: "rgba(255,255,255,0.7)" }}>
                Dedikerte fagfolk med stolthet for godt håndverk. Sammen sørger vi for at eiendommen din er i trygge hender.
              </p>
            </motion.div>
          </div>

          {/* Crew group photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <div className="relative aspect-[21/9] rounded-t-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/ansatte/crew-scaled-min.jpg"
                alt="Teamet i Vaktmester Consult AS"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </motion.div>
        </section>

        {/* Team grid */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block font-medium text-sm uppercase tracking-wider mb-4" style={{ color: "#ef4444" }}>
                Alle ansatte
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-vk-charcoal mb-4">
                Dyktige medarbeidere
              </h2>
              <p className="text-vk-gray text-lg max-w-2xl mx-auto">
                Vårt team består av erfarne fagfolk innen vaktmestertjenester, renhold og eiendomsdrift.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {team.map((member) => (
                <motion.div key={member.name} variants={cardVariant} className="group">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg ring-1 ring-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-xl font-bold text-vk-charcoal mb-1">
                        {member.name}
                      </h3>
                      <p className="text-vk-blue font-medium">{member.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
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
                Vil du bli en del av teamet?
              </h2>
              <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
                Vi er alltid på utkikk etter dyktige medarbeidere. Se våre ledige stillinger.
              </p>
              <a
                href="/ledige-stillinger"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-vk-red text-white font-semibold text-lg transition-all shadow-lg shadow-vk-red/30 hover:bg-vk-red-light hover:shadow-vk-red/40 hover:-translate-y-0.5"
              >
                Ledige stillinger
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
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
