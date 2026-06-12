"use client";

import { useState } from "react";
import MapConsent from "@/components/MapConsent";

type FAQItem = {
  frage: string;
  antwort: React.ReactNode;
};

const fragen: FAQItem[] = [
  {
    frage: "Wo befinden wir uns?",
    antwort: (
      <div className="flex flex-col gap-2">
        <p>
          Sie finden uns in der <strong>Schulstraße 1, 49835 Wietmarschen</strong>.
          Parkplätze sind direkt vor dem Geschäft vorhanden.
        </p>
        <MapConsent />
      </div>
    ),
  },
  {
    frage: "Wie sind unsere Öffnungszeiten?",
    antwort: (
      <div className="grid text-sm gap-y-1" style={{ gridTemplateColumns: "80px 1fr" }}>
        <span className="text-[var(--muted)]">Montag</span>   <span>Geschlossen</span>
        <span className="text-[var(--muted)]">Di – Fr</span>  <span>9:00 – 12:30 &amp; 14:30 – 18:00 Uhr</span>
        <span className="text-[var(--muted)]">Samstag</span>  <span>9:00 – 12:30 Uhr</span>
      </div>
    ),
  },
  {
    frage: "Gibt es saisonale Kollektionen?",
    antwort: (
      <p>
        Ja. Ob Frühling, Weihnachten oder besondere Anlässe – wir führen regelmäßig neue,
        thematisch abgestimmte Kollektionen und Dekorationen.
      </p>
    ),
  },
  {
    frage: "Verkaufen Sie auch Gutscheine?",
    antwort: (
      <p>
        Ja. Bei uns erhalten Sie entweder den <strong>Grafschaft-Gutschein</strong> oder
        unseren eigenen <strong>Geschenkgutschein</strong> in beliebiger Höhe – perfekt
        für Unentschlossene oder Last-Minute-Geschenke.
      </p>
    ),
  },
  {
    frage: "Bieten Sie auch Beratung zur Wohnraumgestaltung an?",
    antwort: (
      <p>
        Ja. Unser Team berät Sie gerne bei der Auswahl passender Dekoration oder bei der
        Gestaltung von Raumkonzepten – im Laden oder nach Terminvereinbarung auch vor Ort.
      </p>
    ),
  },
  {
    frage: "Kann ich Produkte vorbestellen oder reservieren lassen?",
    antwort: (
      <p>
        Gerne können Sie uns telefonisch unter <strong>05925 / 9988977</strong> oder per
        E-Mail an <strong>michaela.cunha@stilart-studio.com</strong> kontaktieren – wir
        helfen Ihnen weiter.
      </p>
    ),
  },
];

export default function FAQ() {
  const [offen, setOffen] = useState<number | null>(null);

  return (
    <section style={{ background: "var(--beige-light)" }}>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest text-[var(--green)] mb-2 uppercase">Häufige Fragen</p>
          <h2 className="text-3xl font-light">FAQ</h2>
        </div>

        <div className="flex flex-col">
          {fragen.map((item, i) => (
            <div key={i} className="border-b border-[var(--border)]">
              <button
                onClick={() => setOffen(offen === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4 hover:text-[var(--green-dark)] transition-colors"
              >
                <span className="font-medium text-base">{item.frage}</span>
                <span className="shrink-0 text-[var(--green)] text-xl leading-none">
                  {offen === i ? "−" : "+"}
                </span>
              </button>

              {offen === i && (
                <div className="pb-6 text-sm text-[var(--muted)] leading-relaxed">
                  {item.antwort}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
