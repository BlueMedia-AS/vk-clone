"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const posts = [
  {
    title: "Slik forbereder du eiendommen din til våren",
    excerpt:
      "Etter en lang vinter er det viktig å ta tak i uteområdene tidlig. Her er våre beste tips for vårklargjøring av hage, fasade og fellesarealer.",
    image: "/images/plen-gress-2.jpg",
    date: "12. mars 2026",
    category: "Tips & råd",
    readTime: "4 min",
    slug: "#",
  },
  {
    title: "Miljøfyrtårn: Hva betyr det for deg som kunde?",
    excerpt:
      "Vi er stolte av vår Miljøfyrtårn-sertifisering. Men hva innebærer det i praksis — og hvordan påvirker det tjenestene vi leverer?",
    image: "/images/plen-gress.jpg",
    date: "28. februar 2026",
    category: "Bærekraft",
    readTime: "3 min",
    slug: "#",
  },
  {
    title: "5 tegn på at borettslaget trenger profesjonell vaktmester",
    excerpt:
      "Mange borettslag venter for lenge med å hente inn profesjonell hjelp. Vi ser på de vanligste tegnene på at det er på tide.",
    image: "/images/bygg.png",
    date: "15. februar 2026",
    category: "Vedlikehold",
    readTime: "5 min",
    slug: "#",
  },
  {
    title: "Vintertjenester: Når bør du bestille snøbrøyting?",
    excerpt:
      "Planlegging er nøkkelen til en trygg vinter. Vi forklarer når du bør sikre deg en avtale — og hva som skjer om du venter for lenge.",
    image: "/images/snorydding.jpg",
    date: "2. februar 2026",
    category: "Sesong",
    readTime: "3 min",
    slug: "#",
  },
];

export default function PremiumBlog() {
  return (
    <section id="aktuelt" className="py-24 lg:py-32 bg-vk-light relative overflow-hidden">
      {/* Decorative elements */}
      <svg className="absolute bottom-10 left-10 w-[250px] h-[250px] opacity-[0.03]" viewBox="0 0 250 250" fill="none">
        <circle cx="125" cy="125" r="100" stroke="#2563eb" strokeWidth="1" />
        <circle cx="125" cy="125" r="60" stroke="#2563eb" strokeWidth="0.8" />
      </svg>

      <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="inline-block text-vk-blue font-medium text-sm uppercase tracking-wider mb-4">
              Aktuelt
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-vk-charcoal">
              Aktuelt
            </h2>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-vk-blue font-semibold hover:gap-3 transition-all shrink-0"
          >
            Se alle innlegg
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Aktuelt grid — featured + 2 smaller */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Featured post — large */}
          <motion.div variants={fadeInUp}>
            <Link href={posts[0].slug} className="group block h-full">
              <div className="h-full bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-vk-blue/20 transition-all duration-300">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={posts[0].image}
                    alt={posts[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-vk-blue text-white text-xs font-semibold uppercase tracking-wide">
                      {posts[0].category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 text-vk-gray text-sm mb-4">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                      {posts[0].date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-vk-gray" />
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {posts[0].readTime}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-vk-charcoal mb-3 group-hover:text-vk-blue transition-colors">
                    {posts[0].title}
                  </h3>
                  <p className="text-vk-slate leading-relaxed">
                    {posts[0].excerpt}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Two stacked posts */}
          <div className="flex flex-col gap-6">
            {posts.slice(1).map((post) => (
              <motion.div key={post.title} variants={fadeInUp}>
                <Link href={post.slug} className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-vk-blue/20 transition-all duration-300 flex flex-col sm:flex-row">
                    <div className="relative w-full sm:w-48 h-48 sm:h-auto shrink-0 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                      <div className="flex items-center gap-3 text-vk-gray text-xs mb-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-vk-blue/10 text-vk-blue font-semibold uppercase tracking-wide">
                          {post.category}
                        </span>
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-vk-gray" />
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="font-heading text-lg font-bold text-vk-charcoal mb-2 group-hover:text-vk-blue transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-vk-slate text-sm leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
