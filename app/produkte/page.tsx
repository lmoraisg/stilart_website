import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Produkte",
  description: "Unser Sortiment – von Dekoration bis Gourmet, Geschirr, Pralinen und mehr.",
};

const kategorien = [
  {
    slug: "dutz",
    name: "Dutz",
    label: "Glaskunst",
    beschreibung: "Mundgeblasene Vasen & Gläser – jedes Stück ein Unikat.",
    image: "/assets/dutz/dutz-1.jpg",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    slug: "raeder",
    name: "Räder",
    label: "Design",
    beschreibung: "Poetische Alltagsbegleiter mit Herz.",
    image: "/assets/raeder/raeder-1.jpg",
    span: "",
  },
  {
    slug: "gourmet",
    name: "Gourmet",
    label: "Feinkost",
    beschreibung: "Ausgewählte Delikatessen für besondere Momente.",
    image: "/assets/gourmet/gourmet-1.jpg",
    span: "",
  },
  {
    slug: "pralinen",
    name: "Pralinen",
    label: "Handgemacht",
    beschreibung: "Feine Schokoladenspezialitäten, handgefertigt.",
    image: "/assets/pralinen/IMG-20251110-WA0035.jpg",
    span: "lg:col-span-2",
  },
  {
    slug: "geschirr",
    name: "Geschirr",
    label: "Tafelkultur",
    beschreibung: "Edles Geschirr für den schön gedeckten Tisch.",
    image: "/assets/geschirr/geschirr-1.jpg",
    span: "",
  },
  {
    slug: "handtuecher",
    name: "Handtücher",
    label: "Textil",
    beschreibung: "Weiche Qualität für Bad und Küche.",
    image: "/assets/handtuecher/handtuch-1.jpg",
    span: "",
  },
  {
    slug: "accessoires",
    name: "Accessoires",
    label: "Stil",
    beschreibung: "Durchdacht ausgewählt, liebevoll präsentiert.",
    image: "/assets/accessoires/accessoire-1.jpg",
    span: "",
  },
  {
    slug: "reisenthel",
    name: "Reisenthel",
    label: "Taschen",
    beschreibung: "Stylische Einkaufstaschen – funktional & farbenfroh.",
    image: "/assets/reisenthel/reisenthel-1.jpg",
    span: "lg:col-span-2",
  },
  {
    slug: "kinderartikel",
    name: "Kinderartikel",
    label: "Kinder",
    beschreibung: "Liebevolle Geschenkideen für die Kleinen.",
    image: "/assets/kinder/kinder-1.jpg",
    span: "",
  },
  {
    slug: "herren",
    name: "Herren",
    label: "Geschenke",
    beschreibung: "Besondere Artikel & Ideen für den Herrn.",
    image: "/assets/herren/herren-1.jpg",
    span: "",
  },
];

export default function ProdukteSeite() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="text-xs tracking-[0.4em] text-[var(--green)] mb-3 uppercase">Sortiment</p>
          <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-none">
            Produkte
          </h1>
        </div>
        <p className="text-[var(--muted)] max-w-sm leading-relaxed md:text-right">
          Sorgfältig ausgewählt. Persönlich präsentiert. Für jeden Anlass und jeden Geschmack.
        </p>
      </div>

      {/* Mosaic Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[280px] gap-4">
        {kategorien.map((k) => (
          <Link
            key={k.slug}
            href={`/produkte/${k.slug}`}
            className={`group relative overflow-hidden rounded-[2rem] shadow-sm ${k.span}`}
          >
            <Image
              src={k.image}
              alt={k.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-300" />
            {/* Hover tint */}
            <div className="absolute inset-0 bg-[var(--green-dark)]/0 group-hover:bg-[var(--green-dark)]/30 transition-colors duration-500" />

            {/* Label badge */}
            <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] tracking-[0.35em] uppercase text-[var(--green-dark)] font-medium">
              {k.label}
            </div>

            {/* Bottom text */}
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h2 className="text-2xl font-bold text-white leading-tight">{k.name}</h2>
              <p className="text-white/70 text-sm mt-1 leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-xs">
                {k.beschreibung}
              </p>
              <span className="inline-flex items-center gap-1 mt-3 text-[10px] tracking-[0.35em] uppercase text-white/80 group-hover:text-white transition-colors">
                Entdecken
                <svg className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 rounded-[2rem] bg-[var(--beige-light)] border border-[var(--border)] p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-xs tracking-[0.35em] uppercase text-[var(--green)] mb-2">Persönliche Beratung</p>
          <h2 className="text-3xl font-semibold">Alles live erleben</h2>
          <p className="mt-2 text-[var(--muted)] leading-relaxed max-w-md">
            Unser gesamtes Sortiment ist in unserem Laden in Wietmarschen zu sehen – lassen Sie sich inspirieren.
          </p>
        </div>
        <Link
          href="/kontakt"
          className="shrink-0 bg-[var(--green-dark)] text-white text-xs tracking-widest px-8 py-4 rounded-full hover:bg-[var(--green)] transition-colors"
        >
          KONTAKT & ÖFFNUNGSZEITEN
        </Link>
      </div>
    </div>
  );
}
