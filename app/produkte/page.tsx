import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Produkte",
  description: "Unser Sortiment – von Dekoration bis Gourmet, Geschirr, Pralinen und mehr.",
};

const kategorien = [
  {
    slug: "dutz",
    name: "Dutz",
    beschreibung: "Hochwertige Gläser und Vasen von Dutz – mundgeblasen, farbenfroh und einzigartig.",
  },
  {
    slug: "raeder",
    name: "Räder",
    beschreibung: "Kreative Geschenk- und Dekorationsartikel der Marke Räder Design.",
  },
  {
    slug: "handtuecher",
    name: "Handtücher",
    beschreibung: "Weiche und hochwertige Handtücher für Bad und Küche.",
  },
  {
    slug: "kinderartikel",
    name: "Kinderartikel",
    beschreibung: "Schöne und sichere Artikel für die Kleinen – Spielzeug, Deko und mehr.",
  },
  {
    slug: "accessoires",
    name: "Accessoires",
    beschreibung: "Stilvolle Accessoires für jeden Anlass und jeden Geschmack.",
  },
  {
    slug: "gourmet",
    name: "Gourmet",
    beschreibung: "Ausgewählte Delikatessen, Feinkost und kulinarische Besonderheiten.",
  },
  {
    slug: "geschirr",
    name: "Geschirr",
    beschreibung: "Edles Geschirr und Tafelzubehör für den schön gedeckten Tisch.",
  },
  {
    slug: "herren",
    name: "Herren",
    beschreibung: "Ausgewählte Artikel und Geschenkideen für den Herrn.",
  },
  {
    slug: "pralinen",
    name: "Pralinen",
    beschreibung: "Handgemachte Pralinen und Schokoladenspezialitäten für besondere Momente.",
  },
  {
    slug: "reisenthel",
    name: "Reisenthel",
    beschreibung: "Praktische und stylische Taschen, Körbe und Zubehör von Reisenthel.",
  },
];

export default function ProdukteSeite() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-14 border-b border-[var(--border)] pb-8">
        <p className="text-xs tracking-widest text-[var(--green)] mb-2 uppercase">Sortiment</p>
        <h1 className="text-4xl font-light tracking-tight">Produkte</h1>
        <p className="mt-4 text-[var(--muted)] max-w-xl leading-relaxed">
          Entdecken Sie unsere sorgfältig ausgewählten Produkte – von Dekoartikeln
          über Gourmet bis hin zu Geschenken für jeden Anlass.
        </p>
      </div>

      {/* Kategorien Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kategorien.map((k) => (
          <Link
            key={k.slug}
            href={`/produkte/${k.slug}`}
            className="group border border-[var(--border)] hover:border-[var(--green)] transition-colors overflow-hidden rounded-3xl shadow-sm"
          >
            {/* Bild-Platzhalter */}
            <div
              className="aspect-[4/3] flex items-center justify-center rounded-t-3xl overflow-hidden"
              style={{ background: "var(--beige-light)" }}
            >
              <span className="text-xs tracking-widest text-[var(--muted)]">BILD</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-medium group-hover:text-[var(--green-dark)] transition-colors mb-2">
                {k.name}
              </h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {k.beschreibung}
              </p>
              <span className="inline-block mt-5 text-xs tracking-widest text-[var(--green)] group-hover:text-[var(--green-dark)]">
                ENTDECKEN →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
