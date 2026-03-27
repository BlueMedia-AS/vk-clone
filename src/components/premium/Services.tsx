"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const services = [
  {
    title: "Vaktmestertjenester",
    description:
      "Småreparasjoner, løpende drift og vedlikehold for borettslag, sameier og næringseiendom.",
    href: "/tjenester/vaktmestertjenester",
    image: "/images/vaktmester-trapp.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.049.58.025 1.193-.14 1.743" />
      </svg>
    ),
  },
  {
    title: "Gartnertjenester",
    description:
      "Plenklipping, hekklipping, beplantning og totalvedlikehold av uteområder gjennom hele sesongen.",
    href: "/tjenester/gartnertjenester",
    image: "/images/plen-gress.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-1.5 0-6-1-8-5 0 0 1-3 4-5s5-5 5-5 2 3 5 5 4 5 4 5c-2 4-6.5 5-8 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V10" />
      </svg>
    ),
  },
  {
    title: "Vintertjenester",
    description:
      "Snøbrøyting, strøing og måking av tak. Trygge og fremkommelige uteområder hele vinteren.",
    href: "/tjenester/vintertjenester",
    image: "/images/snorydding.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3" />
      </svg>
    ),
  },
  {
    title: "Renhold",
    description:
      "Profesjonell rengjøring av fellesarealer, trappevask, vinduspuss og kontorrenhold.",
    href: "/tjenester/renhold",
    image: "/images/gulvvask.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    title: "Oppussing",
    description:
      "Maling, tapetsering, gulvlegging, snekkerarbeid og totalrenovering — små og store prosjekter.",
    href: "/tjenester/oppussing",
    image: "/images/husmaling.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
];

export default function PremiumServices() {
  return (
    <section id="tjenester" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <svg className="absolute top-20 -right-20 w-[500px] h-[500px] opacity-[0.02]" viewBox="0 0 500 500" fill="none">
        <rect x="50" y="50" width="400" height="400" rx="80" stroke="#2563eb" strokeWidth="2" transform="rotate(12 250 250)" />
        <rect x="100" y="100" width="300" height="300" rx="60" stroke="#dc2626" strokeWidth="1.5" transform="rotate(-8 250 250)" />
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
            Hva vi tilbyr
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-vk-charcoal mb-6">
            Våre tjenester
          </h2>
          <p className="text-vk-slate text-xl max-w-2xl mx-auto leading-relaxed">
            Vi tilbyr et bredt spekter av tjenester for vedlikehold og drift — skreddersydd for ditt behov
          </p>
        </motion.div>

        {/* Top row: 3 cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>

        {/* Bottom row: 2 cards centered */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.slice(3).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/tjenester"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-vk-navy text-white font-semibold text-lg hover:bg-vk-charcoal transition-colors shadow-lg"
          >
            Se alle tjenester
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof services[number] }) {
  return (
    <motion.div variants={fadeInUp}>
      <Link href={service.href} className="group block h-full">
        <div className="h-full bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-vk-blue/20 transition-all duration-300">
          {/* Image */}
          <div className="relative h-52 overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            {/* Icon badge floating on image */}
            <div className="absolute bottom-0 left-6 translate-y-1/2 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center text-vk-blue border border-gray-100 group-hover:bg-vk-blue group-hover:text-white transition-colors duration-300">
              {service.icon}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 pt-10">
            <h3 className="font-heading text-xl font-bold text-vk-charcoal mb-3 group-hover:text-vk-blue transition-colors">
              {service.title}
            </h3>
            <p className="text-vk-slate text-base leading-relaxed mb-4">
              {service.description}
            </p>
            <span className="inline-flex items-center gap-1.5 text-vk-blue font-semibold text-sm group-hover:gap-2.5 transition-all">
              Les mer
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
