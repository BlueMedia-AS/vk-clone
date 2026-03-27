"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const reviews = [
  {
    name: "Simon Erik Nylund",
    rating: 5,
    text: "Kan hjelpe deg med plenklipp, fasadevasking, mosefjerning, vask. Anbefales!",
    source: "Google",
  },
  {
    name: "Anne Signe Strandskogen",
    rating: 5,
    text: "Dedikerte og flinke folk!",
    source: "Google",
  },
  {
    name: "Anders Torvill Bjorvand",
    rating: 5,
    text: "",
    source: "Google",
  },
  {
    name: "Peter Bincik",
    rating: 5,
    text: "👍",
    source: "Google",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < count ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function PremiumTestimonials() {
  return (
    <section className="py-24 lg:py-32 bg-vk-warm relative overflow-hidden">
      {/* Decorative */}
      <svg className="absolute top-10 right-10 w-[200px] h-[200px] opacity-[0.03]" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="80" stroke="#2563eb" strokeWidth="1" />
        <circle cx="100" cy="100" r="50" stroke="#2563eb" strokeWidth="0.8" />
      </svg>

      <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-vk-blue font-medium text-sm uppercase tracking-wider mb-4">
            Kundene våre
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-vk-charcoal mb-6">
            Hva kundene sier
          </h2>
          <p className="text-vk-slate text-xl max-w-2xl mx-auto leading-relaxed">
            Vi er stolte av tilbakemeldingene fra våre kunder
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.name}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <Stars count={review.rating} />
              {review.text ? (
                <p className="text-vk-slate leading-relaxed mt-4 mb-6 flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
              ) : (
                <div className="mt-4 mb-6 flex-1" />
              )}
              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <span className="font-heading font-semibold text-vk-charcoal">
                  {review.name}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-vk-gray">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  {review.source}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Google rating summary */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://www.google.com/search?sa=X&sca_esv=a34d0b4f4b0c4824&rlz=1C1GCEU_noNO1087NO1087&biw=2560&bih=1305&sxsrf=ANbL-n7m5QeA6OjyilG8WmR3A_F5JB10Xw:1774372224818&q=Vaktmester+Consult+AS+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2szA1tDAEEuZG5sZGxuaGZkYbGBlfMcqGJWaX5KYWl6QWKTjn5xWX5pQoOAYrBKWWZaaWFy9ixS8PAPtOa6FaAAAA&rldimm=6851818517273237162&tbm=lcl&hl=en-NO&ved=2ahUKEwjgkaPRg7mTAxVfFBAIHXVLLcwQ9fQKegQIXRAG#lkt=LocalPoiReviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span className="text-vk-charcoal font-medium">Se alle anmeldelser på Google</span>
            <svg className="w-4 h-4 text-vk-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
