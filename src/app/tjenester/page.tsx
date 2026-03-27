"use client";

import Header from "@/components/premium/Header";
import Footer from "@/components/premium/Footer";
import { AngleDivider } from "@/components/premium/SectionDivider";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const services = [
  {
    title: "Vaktmestertjenester",
    href: "/tjenester/vaktmestertjenester",
    description:
      "Våre vaktmestertjenester omfatter alt fra A til Å og er primært et tilbud til våre faste kunder som allerede kjøper tjenester hos oss.",
    image: "/images/tjenester/vaktmester-hero.jpg",
  },
  {
    title: "Gartnertjenester",
    href: "/tjenester/gartnertjenester",
    description:
      "Vi tilbyr diverse gartnertjenester som for eksempel gressklipping, beskjæring av hekker, trefelling, hagestyling og stubbefresing m.m.",
    image: "/images/tjenester/gartner-hero.jpg",
  },
  {
    title: "Vintertjenester",
    href: "/tjenester/vintertjenester",
    description:
      "Vinterstid kan det være vanskelig og komme seg fra A til B, derfor tilbyr vi tjenester for brøyting, snøfeiing og strøing, dersom dette er ønskelig.",
    image: "/images/tjenester/vinter-hero.jpg",
  },
  {
    title: "Renhold",
    href: "/tjenester/renhold",
    description:
      "VMC tilbyr nær sagt alle former for renhold, men primært til bedrifter og næringsdrivende. Våre kunder dekker alle spekter av samfunnet.",
    image: "/images/tjenester/renhold-hero.jpg",
  },
  {
    title: "Oppussing",
    href: "/tjenester/oppussing",
    description:
      "Når du skal oppgradere din gamle bolig kan vi bistå med alt fra snekker- og murerarbeider til malingsarbeider.",
    image: "/images/tjenester/oppussing-hero.jpg",
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

export default function TjenesterPage() {
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
                id="services-hero-grid"
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
              fill="url(#services-hero-grid)"
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
                Tjenester
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Våre tjenester
              </h1>
              <p
                className="text-xl leading-relaxed max-w-3xl"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Vi tilbyr et bredt spekter av tjenester for vedlikehold og drift
                av eiendommer, inne som ute.
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

        {/* Services grid */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service) => (
                <motion.div key={service.title} variants={cardVariant}>
                  <Link
                    href={service.href}
                    className="group block rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="font-heading text-xl font-bold text-vk-charcoal mb-2 group-hover:text-vk-blue transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-vk-gray text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Partnership section */}
        <section className="py-20 lg:py-28 bg-vk-light">
          <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <span
                className="inline-block font-medium text-sm uppercase tracking-wider mb-4"
                style={{ color: "#ef4444" }}
              >
                Samarbeidspartner
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-vk-charcoal mb-6">
                Julien Trepleie
              </h2>
              <p className="text-vk-gray text-lg leading-relaxed">
                Vi jobber sammen med Julien Trepleie. Julien Trepleie har
                utdannede arborister med lang erfaring og bred kompetanse, som
                sikrer at oppdraget utføres på tryggest og best mulig måte.
              </p>
            </motion.div>
          </div>
        </section>

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
