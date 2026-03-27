"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const services = [
  { name: "Vaktmestertjenester", href: "/tjenester/vaktmestertjenester" },
  { name: "Gartnertjenester", href: "/tjenester/gartnertjenester" },
  { name: "Vintertjenester", href: "/tjenester/vintertjenester" },
  { name: "Renhold", href: "/tjenester/renhold" },
  { name: "Oppussing", href: "/tjenester/oppussing" },
];

const omOssItems = [
  { name: "Ansatte", href: "/ansatte" },
  { name: "Ledige stillinger", href: "/ledige-stillinger" },
];

const navItems = [
  { name: "Hjem", href: "/", dropdown: null },
  { name: "Tjenester", href: "/tjenester", dropdown: "services" },
  { name: "Om oss", href: "/om-oss", dropdown: "omoss" },
  { name: "Kontakt oss", href: "/kontakt", dropdown: null },
];

export default function PremiumHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const getDropdownItems = (dropdown: string | null) => {
    if (dropdown === "services") return services;
    if (dropdown === "omoss") return omOssItems;
    return [];
  };

  return (
    <>
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-white/90 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 lg:h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={scrolled || mobileOpen ? "/images/logo-transparent.png" : "/images/logo-white.png"}
              alt="Vaktmester Consult AS"
              width={240}
              height={64}
              className="h-10 sm:h-14 lg:h-16 w-auto transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.dropdown)}
                onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`px-5 py-3 text-base font-medium transition-colors ${
                    scrolled
                      ? "text-vk-charcoal hover:text-vk-blue"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <svg
                      className="ml-1 inline-block h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                <AnimatePresence>
                  {item.dropdown && openDropdown === item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-72 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-100/50 py-2 mt-2"
                    >
                      {getDropdownItems(item.dropdown).map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-5 py-3 text-base text-vk-charcoal hover:bg-vk-blue/10 hover:text-vk-blue transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* CTA button */}
            <Link
              href="#kontakt"
              className="ml-4 px-6 py-2.5 rounded-lg bg-vk-red text-white text-sm font-semibold hover:bg-vk-red-light transition-colors shadow-sm"
            >
              Få tilbud
            </Link>

            {/* Contact icons */}
            <div className={`flex items-center gap-2 ml-3 pl-3 border-l ${scrolled ? "border-gray-200" : "border-white/20"}`}>
              <a
                href="tel:+4769815780"
                className={`p-2 rounded-full transition-colors ${scrolled ? "text-vk-slate hover:bg-vk-blue/10 hover:text-vk-blue" : "text-white/80 hover:text-white"}`}
                aria-label="Ring oss"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a
                href="mailto:post@vaktmesterconsult.no"
                className={`p-2 rounded-full transition-colors ${scrolled ? "text-vk-slate hover:bg-vk-blue/10 hover:text-vk-blue" : "text-white/80 hover:text-white"}`}
                aria-label="Send e-post"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-md ${scrolled || mobileOpen ? "text-vk-charcoal" : "text-white"}`}
            aria-label="Åpne meny"
          >
            {mobileOpen ? (
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

    </motion.header>

      {/* Mobile Navigation — outside header to avoid backdrop-blur containing block issue */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 z-[70] bg-white shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <span className="font-heading font-bold text-vk-charcoal text-lg">Meny</span>
                <button onClick={() => setMobileOpen(false)} className="p-2 rounded-md text-vk-charcoal">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col h-[calc(100%-65px)]">
                <div className="px-4 py-4 space-y-0.5 flex-1 overflow-y-auto">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <>
                          <div className="flex items-center">
                            <Link
                              href={item.href}
                              className="flex-1 px-4 py-3 text-base font-medium text-vk-charcoal hover:text-vk-blue rounded-lg"
                              onClick={() => setMobileOpen(false)}
                            >
                              {item.name}
                            </Link>
                            <button
                              onClick={() => setMobileDropdown(mobileDropdown === item.dropdown ? null : item.dropdown)}
                              className="p-2 rounded-lg text-vk-slate hover:bg-vk-blue/10"
                            >
                              <svg
                                className={`w-4 h-4 transition-transform duration-200 ${mobileDropdown === item.dropdown ? "rotate-180" : ""}`}
                                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                          </div>
                          {mobileDropdown === item.dropdown && (
                            <div className="pl-4 pb-1 space-y-0.5">
                              {getDropdownItems(item.dropdown).map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm text-vk-slate hover:text-vk-blue rounded-lg"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="block px-4 py-3 text-base font-medium text-vk-charcoal hover:bg-vk-blue/10 hover:text-vk-blue rounded-lg"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}

                  {/* Mobile CTA */}
                  <div className="pt-3">
                    <Link
                      href="/kontakt"
                      className="block w-full text-center px-6 py-3 rounded-lg bg-vk-red text-white font-semibold hover:bg-vk-red-light transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      Få tilbud
                    </Link>
                  </div>
                </div>
                <div className="shrink-0 px-6 py-4 border-t border-gray-100 bg-gray-50">
                  <a href="tel:+4769815780" className="flex items-center gap-3 text-sm text-vk-charcoal mb-2">
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (+47) 69 81 57 80
                  </a>
                  <a href="mailto:post@vaktmesterconsult.no" className="flex items-center gap-3 text-sm text-vk-charcoal">
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    post@vaktmesterconsult.no
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
