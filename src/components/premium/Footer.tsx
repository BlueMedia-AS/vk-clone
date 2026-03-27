"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Hjem", href: "/" },
  { name: "Tjenester", href: "/tjenester" },
  { name: "Om oss", href: "/om-oss" },
  { name: "Ansatte", href: "/ansatte" },
  { name: "Ledige stillinger", href: "/ledige-stillinger" },
  { name: "Kontakt oss", href: "/kontakt" },
];

const serviceLinks = [
  { name: "Vaktmestertjenester", href: "/tjenester/vaktmestertjenester" },
  { name: "Gartnertjenester", href: "/tjenester/gartnertjenester" },
  { name: "Vintertjenester", href: "/tjenester/vintertjenester" },
  { name: "Renhold", href: "/tjenester/renhold" },
  { name: "Oppussing", href: "/tjenester/oppussing" },
];

export default function PremiumFooter() {
  return (
    <footer className="text-white relative" style={{ backgroundColor: "#1e293b" }}>
      {/* Top gradient line — blue to red matching logo */}
      <div className="h-1" style={{ background: "linear-gradient(to right, #2563eb, #1a2744, #dc2626)" }} />

      <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo-white.png"
              alt="Vaktmester Consult AS"
              width={200}
              height={56}
              className="h-14 w-auto mb-6"
            />
            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
              Vaktmester Consult AS tilbyr profesjonelle vaktmestertjenester, gartnertjenester,
              vintertjenester, renhold og oppussing i Tomter, Askim, Mysen og omegn.
            </p>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://facebook.com/vaktmesterconsult"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl flex items-center justify-center hover:text-white transition-colors"
                style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>

            {/* Partner logos */}
            <div className="flex items-center gap-6 mt-8">
              <a href="https://www.miljofyrtarn.no" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/miljofyrtarn.png"
                  alt="Miljøfyrtårn"
                  width={80}
                  height={40}
                  className="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity"
                />
              </a>
              <a href="https://www.julientrepleie.no" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/julien-trepleie-logo.png"
                  alt="Julien Trepleie"
                  width={100}
                  height={40}
                  className="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-5">Navigasjon</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-base hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-5">Tjenester</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-base hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-5">Kontakt</h3>
            <div className="space-y-3 text-gray-400 text-base">
              <p>
                <a href="tel:+4769815780" className="hover:text-white transition-colors">
                  (+47) 69 81 57 80
                </a>
              </p>
              <p>
                <a href="mailto:post@vaktmesterconsult.no" className="hover:text-white transition-colors">
                  post@vaktmesterconsult.no
                </a>
              </p>
              <p>Kråkstadveien 1<br />1825 Tomter</p>
              <p className="text-gray-500 text-sm mt-4">Man–fre: 08:00–16:00</p>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-heading font-semibold text-sm mb-3">Nyhetsbrev</h4>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Din e-post"
                  className="flex-1 px-3 py-2 rounded-lg border text-white text-sm placeholder:text-gray-500 focus:outline-none transition-colors"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-vk-blue text-white text-sm font-medium hover:bg-vk-blue-light transition-colors"
                >
                  Ok
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <p className="text-gray-500 text-base">
            &copy; 2025 Vaktmester Consult AS. Alle rettigheter reservert.
          </p>
          <Link href="/personvern" className="text-gray-500 text-base hover:text-white transition-colors">
            Personvern
          </Link>
        </div>
      </div>
    </footer>
  );
}
