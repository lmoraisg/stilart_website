"use client";

import { useState } from "react";

export default function MapConsent() {
  const [zugestimmt, setZugestimmt] = useState(false);

  if (zugestimmt) {
    return (
      <div className="mt-4 aspect-video w-full overflow-hidden border border-[var(--border)] rounded-3xl">
        <iframe
          src="https://maps.google.com/maps?q=Schulstra%C3%9Fe+1%2C+49835+Wietmarschen&output=embed&hl=de"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Stil [Art] auf Google Maps"
        />
      </div>
    );
  }

  return (
    <div
      className="mt-4 aspect-video w-full flex flex-col items-center justify-center gap-4 border border-[var(--border)] rounded-3xl px-6 text-center"
      style={{ background: "#f0ebe4" }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[var(--muted)]"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>

      <p className="text-sm text-[var(--muted)] max-w-sm leading-relaxed">
        Diese Karte wird von <strong className="text-[var(--foreground)]">Google Maps</strong>  bereitgestellt.
        Beim Laden werden Daten (z.&nbsp;B. Ihre IP-Adresse) an Google übertragen.
        Weitere Infos in unserer{" "}
        <a href="/datenschutz" className="underline hover:text-[var(--green-dark)]">
          Datenschutzerklärung
        </a>.
      </p>

      <button
        onClick={() => setZugestimmt(true)}
        className="bg-[var(--green-dark)] text-white text-xs tracking-widest px-6 py-3 rounded-full hover:bg-[var(--green)] transition-colors"
      >
        KARTE LADEN
      </button>
    </div>
  );
}
