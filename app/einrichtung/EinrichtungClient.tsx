"use client";

import { useState } from "react";
import Image from "next/image";

const fotos = Array.from({ length: 8 }, (_, i) => ({
  src: `/assets/einrichtung/einrichtung-${i + 1}.jpg`,
  alt: `Stil [Art] Einrichtung ${i + 1}`,
}));

const arbeitsschritte = [
  {
    titel: "Beratung & Moodboard",
    text: "Wir beginnen mit einem persönlichen Gespräch und entwickeln ein stimmiges Einrichtungskonzept für Ihren Raum.",
  },
  {
    titel: "Materialien & Auswahl",
    text: "Mit Liebe zum Detail wählen wir Farben, Stoffe, Möbel und Dekorationen passend zu Ihrer Stimmung aus.",
  },
  {
    titel: "Aufbau & Styling",
    text: "Wir setzen alles vor Ort um, platzieren die Highlights und sorgen für ein fertiges, wohnliches Ergebnis.",
  },
];

export default function EinrichtungClient() {
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => setActiveSlide((current) => (current - 1 + fotos.length) % fotos.length);
  const nextSlide = () => setActiveSlide((current) => (current + 1) % fotos.length);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-16">
        <p className="text-xs tracking-widest text-[var(--green)] mb-3 uppercase">Einrichtung</p>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight">Einrichtung, die inspiriert</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
          Wir gestalten Räume mit Atmosphäre und Funktion. Bei Stil [Art] entsteht individuelle Einrichtung, die Emotionen weckt und zum Verweilen einlädt.
        </p>
      </div>

      <div className="grid gap-10 xl:grid-cols-[1.2fr_0.9fr]">
        <div className="space-y-8">
          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--beige-light)] p-10 shadow-sm">
            <h2 className="text-3xl font-semibold mb-5">Was wir für Sie tun</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              Wir übernehmen die Raumplanung, Auswahl der Materialien und das Styling. So entsteht ein harmonisches Gesamtbild, das Ihre Persönlichkeit widerspiegelt.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              <li className="rounded-3xl bg-white border border-[var(--border)] p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-[var(--green)] mb-2">Konzept</p>
                <p className="text-[var(--muted)] text-sm">Wir entwickeln ein individuelles Raumkonzept mit Stil und Funktion.</p>
              </li>
              <li className="rounded-3xl bg-white border border-[var(--border)] p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-[var(--green)] mb-2">Materialmix</p>
                <p className="text-[var(--muted)] text-sm">Wir kombinieren Texturen, Farben und Formen zu einem stimmigen Ergebnis.</p>
              </li>
              <li className="rounded-3xl bg-white border border-[var(--border)] p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-[var(--green)] mb-2">Style-Update</p>
                <p className="text-[var(--muted)] text-sm">Auch kleine Veränderungen sorgen für einen großen Wow-Effekt.</p>
              </li>
              <li className="rounded-3xl bg-white border border-[var(--border)] p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-[var(--green)] mb-2">Perfekter Abschluss</p>
                <p className="text-[var(--muted)] text-sm">Wir stylen den Raum fertig und sorgen für ein rundes Gesamtbild.</p>
              </li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-[var(--border)] bg-white p-10 shadow-sm">
            <h2 className="text-3xl font-semibold mb-5">So arbeiten wir</h2>
            <div className="space-y-6">
              {arbeitsschritte.map((schritt) => (
                <div key={schritt.titel} className="rounded-3xl border border-[var(--border)] bg-[var(--beige-light)] p-6">
                  <h3 className="font-semibold mb-2">{schritt.titel}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{schritt.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src={fotos[activeSlide].src}
                alt={fotos[activeSlide].alt}
                fill
                className="object-cover transition duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 pb-4">
              <button
                type="button"
                onClick={prevSlide}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[var(--foreground)] shadow-sm transition hover:bg-white"
                aria-label="Vorheriges Bild"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[var(--foreground)] shadow-sm transition hover:bg-white"
                aria-label="Nächstes Bild"
              >
                ›
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {fotos.map((foto, index) => (
              <button
                key={foto.src}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`overflow-hidden rounded-3xl border p-0 transition ${
                  index === activeSlide ? "border-[var(--green-dark)] ring-2 ring-[var(--green-light)]" : "border-[var(--border)]"
                }`}
              >
                <Image src={foto.src} alt={foto.alt} width={260} height={220} className="h-20 w-full object-cover" />
              </button>
            ))}
          </div>

          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--beige-light)] p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Video: So entsteht eine Einrichtung</h2>
            <div className="overflow-hidden rounded-3xl bg-black">
              <video controls poster="/assets/einrichtung/einrichtung-1.jpg" className="h-full w-full object-cover">
                <source src="/assets/einrichtung/einrichtung-video.mp4" type="video/mp4" />
                Ihr Browser unterstützt dieses Videoformat nicht.
              </video>
            </div>
            <p className="mt-5 text-[var(--muted)] text-sm leading-relaxed">
              Im Video zeigen wir, wie wir eine Einrichtung von der ersten Idee bis zur finalen Präsentation umsetzen. Erlebe unseren Blick für Farben, Materialien und Raumwirkung.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
