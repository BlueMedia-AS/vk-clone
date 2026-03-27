"use client";

import Header from "@/components/premium/Header";
import Footer from "@/components/premium/Footer";
import { AngleDivider } from "@/components/premium/SectionDivider";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "@/lib/animations";

const bulletItems = [
  "Gressklipping",
  "Beskjæring av hekker",
  "Beskjæring av trær og prydbusker",
  "Gartneravtalen; Stell og vedlikehold av grøntanlegg",
  "Stubbefresing",
  "Trefelling",
];

const features = [
  {
    title: "Anleggsgartner",
    description:
      "Vi gjør dine uteområder blir flotte og grønne samt skaper og vedlikeholder innbydende og velstelte grøntområder, som mennesker trives i.",
    image: "/images/tjenester/beplanting.jpg",
  },
  {
    title: "Gressklipping",
    description:
      "En velstelt gressplen er noe alle foretrekker framfor ren jungel. Vi tilbyr derfor gressklipping for dine både små og store uteområder.",
    image: "/images/tjenester/gressklipping.jpg",
  },
  {
    title: "Hagestyling",
    description:
      "Av oss får du et skreddersydd opplegg for din hage. Hagestyling er også en perfekt måte å forberede boligen din for salg.",
    image: "/images/tjenester/hage.jpg",
  },
  {
    title: "Trefelling, trepleie og beskjæring",
    description:
      "Som dyktige fagfolk på området, med det riktige utstyret, utfører vi trygg trefelling i tillegg til trepleie og beskjæring av trær.",
    image: "/images/tjenester/trefelling.jpg",
  },
];

const bulletVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function GartnertjenesterPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
          style={{ backgroundColor: "#1a2744" }}
        >
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]"
              style={{ backgroundColor: "rgba(37, 99, 235, 0.3)" }}
            />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[128px]"
              style={{ backgroundColor: "rgba(220, 38, 38, 0.15)" }}
            />
          </div>

          <svg
            className="absolute inset-0 w-full h-full opacity-[0.03]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="gartner-hero-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#gartner-hero-grid)"
            />
          </svg>

          <div className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span
                className="inline-block font-medium text-sm uppercase tracking-wider mb-4"
                style={{ color: "#ef4444" }}
              >
                Gartnertjenester
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Har du behov for gartnertjenester?
              </h1>
              <p
                className="text-xl leading-relaxed max-w-3xl"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Vi tilbyr diverse gartnertjenester, eksempelvis gressklipping,
                beskjæring av hekker, trefelling, m.m.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[40px] md:h-[60px]"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
          >
            <polygon points="0,0 1200,60 1200,0 0,0" fill="#1a2744" />
          </svg>
        </div>

        {/* Bullet list */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span
                className="inline-block font-medium text-sm uppercase tracking-wider mb-4"
                style={{ color: "#ef4444" }}
              >
                Hva vi tilbyr
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-vk-charcoal">
                Våre gartnertjenester
              </h2>
            </motion.div>

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-2xl mx-auto space-y-4"
            >
              {bulletItems.map((item) => (
                <motion.li
                  key={item}
                  variants={bulletVariant}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-vk-navy flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-vk-gray text-lg">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* Feature sections */}
        {features.map((feature, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={feature.title}
              className={`py-20 lg:py-28 ${isEven ? "bg-vk-light" : "bg-white"}`}
            >
              <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  <motion.div
                    variants={isEven ? slideInLeft : slideInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`relative ${!isEven ? "lg:order-2" : ""}`}
                  >
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    <div
                      className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl -z-10"
                      style={{ backgroundColor: "rgba(37, 99, 235, 0.1)" }}
                    />
                    <div
                      className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl -z-10"
                      style={{ backgroundColor: "rgba(220, 38, 38, 0.08)" }}
                    />
                  </motion.div>

                  <motion.div
                    variants={isEven ? slideInRight : slideInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={!isEven ? "lg:order-1" : ""}
                  >
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-vk-charcoal mb-6">
                      {feature.title}
                    </h2>
                    <p className="text-vk-gray text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA band */}
        <AngleDivider color="#1a2744" />
        <section
          className="py-16 lg:py-20 relative overflow-hidden"
          style={{ backgroundColor: "#1a2744" }}
        >
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
              <p
                className="text-lg mb-8 max-w-xl mx-auto"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Ta kontakt med oss for et uforpliktende tilbud.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-vk-red text-white font-semibold text-lg transition-all shadow-lg shadow-vk-red/30 hover:bg-vk-red-light hover:shadow-vk-red/40 hover:-translate-y-0.5"
                >
                  Kontakt oss
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <a
                  href="tel:+4769815780"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-white/25 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/40 transition-all"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  (+47) 69 81 57 80
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        <div className="w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[40px] md:h-[60px]"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
          >
            <polygon points="0,0 1200,60 1200,0 0,0" fill="#1a2744" />
          </svg>
        </div>
      </main>
      <Footer />
    </>
  );
}
