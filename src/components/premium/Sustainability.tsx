"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const commitments = [
  {
    label: "Avfallshåndtering",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
  },
  {
    label: "Energi og klima",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-1.5 0-6-1-8-5 0 0 1-3 4-5s5-5 5-5 2 3 5 5 4 5 4 5c-2 4-6.5 5-8 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V10" />
      </svg>
    ),
  },
  {
    label: "Innkjøp",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
  {
    label: "Arbeidsmiljø",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    label: "Transport",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
];

export default function PremiumSustainability() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Certification badge + text */}
          <div className="flex items-center gap-5 shrink-0">
            <a href="https://www.miljofyrtarn.no" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/miljofyrtarn.png"
                alt="Miljøfyrtårn"
                width={100}
                height={100}
                className="h-20 w-auto"
              />
            </a>
            <div>
              <div className="font-heading font-bold text-vk-charcoal text-base">
                Miljøfyrtårn-sertifisert
              </div>
              <div className="text-vk-slate text-sm">
                Vi jobber systematisk med miljø i hele vår virksomhet
              </div>
              <a
                href="https://portal.miljofyrtarn.no/organizations/36550/data/publicStatistics"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-vk-blue text-sm font-medium hover:underline mt-1"
              >
                Klikk her for å se vårt klimaregnskap!
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-10 bg-gray-200" />

          {/* Commitment pills */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {commitments.map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-vk-blue/5 text-vk-slate text-sm border border-vk-blue/10"
              >
                <span className="text-vk-blue">{item.icon}</span>
                {item.label}
              </span>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
