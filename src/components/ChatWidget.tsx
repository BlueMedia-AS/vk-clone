"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FormState = "form" | "sending" | "sent";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState<FormState>("form");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const services = [
    "Vaktmestertjenester",
    "Gartnertjenester",
    "Vintertjenester",
    "Renhold",
    "Oppussing",
    "Annet",
  ];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setFormState("sent");
    } catch {
      alert("Noe gikk galt. Prøv igjen eller ring oss.");
      setFormState("form");
    }
  }

  function handleClose() {
    setOpen(false);
    // Reset after close animation
    setTimeout(() => {
      setFormState("form");
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    }, 300);
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => (open ? handleClose() : setOpen(true))}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-vk-blue text-white shadow-lg shadow-vk-blue/30 hover:bg-vk-blue-light transition-colors flex items-center justify-center"
        aria-label={open ? "Lukk kontaktskjema" : "Åpne kontaktskjema"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed z-50 bg-white shadow-2xl border border-gray-100 overflow-hidden bottom-24 right-4 left-4 rounded-2xl sm:left-auto sm:right-6 sm:w-[360px] sm:max-w-[calc(100vw-3rem)] max-h-[calc(100dvh-7rem)]"
          >
            {/* Header */}
            <div className="bg-vk-navy px-5 py-3.5 sm:px-6 sm:py-4 flex items-center justify-between">
              <div>
                <h3 className="font-heading text-lg font-bold text-white">Kontakt oss</h3>
                <p className="text-sm text-white/60">Vi svarer så snart vi kan</p>
              </div>
              <button onClick={handleClose} className="text-white/60 hover:text-white transition-colors sm:hidden" aria-label="Lukk">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(100dvh-11rem)]">
              {formState === "sent" ? (
                /* Confirmation */
                <div className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-heading text-xl font-bold text-vk-charcoal mb-2">Takk for din henvendelse!</h4>
                  <p className="text-vk-slate text-sm mb-6">
                    Vi har mottatt meldingen din og tar kontakt så snart vi kan.
                  </p>
                  <button
                    onClick={handleClose}
                    className="px-6 py-2.5 rounded-xl bg-vk-blue text-white font-semibold text-sm hover:bg-vk-blue-light transition-colors"
                  >
                    Lukk
                  </button>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="p-4 sm:p-5 space-y-3">
                  <div>
                    <label htmlFor="cw-name" className="block text-xs font-medium text-vk-charcoal mb-1">
                      Navn *
                    </label>
                    <input
                      type="text"
                      id="cw-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ditt navn"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-vk-charcoal placeholder:text-vk-gray/50 focus:outline-none focus:ring-2 focus:ring-vk-blue/30 focus:border-vk-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="cw-phone" className="block text-xs font-medium text-vk-charcoal mb-1">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="cw-phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ditt nummer"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-vk-charcoal placeholder:text-vk-gray/50 focus:outline-none focus:ring-2 focus:ring-vk-blue/30 focus:border-vk-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="cw-email" className="block text-xs font-medium text-vk-charcoal mb-1">
                      E-post *
                    </label>
                    <input
                      type="email"
                      id="cw-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="din@epost.no"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-vk-charcoal placeholder:text-vk-gray/50 focus:outline-none focus:ring-2 focus:ring-vk-blue/30 focus:border-vk-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="cw-service" className="block text-xs font-medium text-vk-charcoal mb-1">
                      Tjeneste
                    </label>
                    <select
                      id="cw-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-vk-charcoal focus:outline-none focus:ring-2 focus:ring-vk-blue/30 focus:border-vk-blue transition-colors"
                    >
                      <option value="">Velg tjeneste...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="cw-message" className="block text-xs font-medium text-vk-charcoal mb-1">
                      Melding *
                    </label>
                    <textarea
                      id="cw-message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Fortell oss hva du trenger hjelp med..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-vk-charcoal placeholder:text-vk-gray/50 focus:outline-none focus:ring-2 focus:ring-vk-blue/30 focus:border-vk-blue transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formState === "sending"}
                    className="w-full px-6 py-3 rounded-xl bg-vk-red text-white font-semibold text-sm hover:bg-vk-red-light transition-colors shadow-lg shadow-vk-red/25 disabled:opacity-70"
                  >
                    {formState === "sending" ? "Sender..." : "Send henvendelse"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
