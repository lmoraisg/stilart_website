"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      role="dialog"
      aria-label="Cookie-Einstellungen"
    >
      <div className="max-w-4xl mx-auto bg-[#2c2c2c] text-white rounded-[1.5rem] shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4 px-6 py-5">
        <div className="flex-1 min-w-0">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--beige)] mb-1">Datenschutz</p>
          <p className="text-sm leading-relaxed text-white/80">
            Wir verwenden Cookies, um Ihnen die beste Nutzererfahrung zu bieten und Karten-Inhalte zu laden.{" "}
            <a href="/datenschutz" className="underline hover:text-white transition-colors">
              Datenschutzerklärung
            </a>
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-xs tracking-widest border border-white/30 text-white/70 hover:text-white hover:border-white/60 px-5 py-2.5 rounded-full transition-colors"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="text-xs tracking-widest bg-[var(--green-dark)] hover:bg-[var(--green)] text-white px-5 py-2.5 rounded-full transition-colors"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
