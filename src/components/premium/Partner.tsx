"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PremiumPartner() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative rounded-2xl overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 lg:p-12 border border-gray-100"
          style={{ backgroundColor: "#f8faf8" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Partner logo */}
          <div className="shrink-0 rounded-xl bg-vk-navy p-6 flex items-center justify-center">
            <Image
              src="/images/julien-trepleie-logo.png"
              alt="Julien Trepleie"
              width={80}
              height={85}
              className="h-16 w-auto"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="text-vk-blue text-sm font-medium uppercase tracking-wider mb-2">
              Samarbeidspartner
            </div>
            <h3 className="font-heading text-xl lg:text-2xl font-bold text-vk-charcoal mb-3">
              Vi jobber sammen med Julien Trepleie
            </h3>
            <p className="text-vk-slate leading-relaxed max-w-2xl">
              Julien Trepleie har utdannede arborister med lang erfaring og bred kompetanse, som sikrer at oppdraget utføres på tryggest og best mulig måte. Sammen tilbyr vi profesjonell trepleie, trefelling og stell av grøntområder.
            </p>
          </div>

          {/* CTA */}
          <div className="shrink-0">
            <a
              href="https://julientrepleie.no/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-vk-charcoal/15 text-vk-charcoal font-semibold hover:border-vk-blue hover:text-vk-blue transition-colors"
            >
              Besøk Julien Trepleie
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
