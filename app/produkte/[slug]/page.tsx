import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type KategorieData = {
  name: string;
  beschreibung: string;
  bilder: string[];
};

const kategorienMap: Record<string, KategorieData> = {
  dutz: {
    name: "Dutz",
    beschreibung:
      "Hochwertige Gläser und Vasen von Dutz – mundgeblasen, farbenfroh und einzigartig. Jedes Stück ist ein Unikat, das Ihr Zuhause mit Farbe und Stil bereichert.",
    bilder: [
      "/assets/dutz/dutz-1.jpg",
      "/assets/dutz/dutz-2.jpg",
      "/assets/dutz/dutz-3.jpg",
      "/assets/dutz/dutz-4.jpg",
      "/assets/dutz/dutz-5.jpg",
      "/assets/dutz/dutz-6.jpg",
    ],
  },
  raeder: {
    name: "Räder",
    beschreibung:
      "Räder Design steht für poetische Alltagsbegleiter – von Kerzenhaltern über Vasen bis hin zu kreativen Geschenkideen mit Herz.",
    bilder: [
      "/assets/raeder/raeder-1.jpg",
      "/assets/raeder/raeder-2.jpg",
      "/assets/raeder/raeder-3.jpg",
      "/assets/raeder/raeder-4.jpg",
      "/assets/raeder/raeder-5.jpg",
      "/assets/raeder/raeder-6.jpg",
    ],
  },
  handtuecher: {
    name: "Handtücher",
    beschreibung:
      "Hochwertige Handtücher für Bad und Küche – weich, saugstark und in schönen Farben erhältlich.",
    bilder: [
      "/assets/handtuecher/handtuch-1.jpg",
      "/assets/handtuecher/handtuch-2.jpg",
      "/assets/handtuecher/handtuch-3.jpg",
      "/assets/handtuecher/handtuch-4.jpg",
      "/assets/handtuecher/handtuch-5.jpg",
      "/assets/handtuecher/handtuch-6.jpg",
    ],
  },
  kinderartikel: {
    name: "Kinderartikel",
    beschreibung:
      "Schöne und sichere Artikel für Kinder – von dekorativen Accessoires bis zu liebevollen Geschenkideen für die Kleinen.",
    bilder: [
      "/assets/kinder/kinder-1.jpg",
      "/assets/kinder/kinder-2.jpg",
      "/assets/kinder/kinder-3.jpg",
      "/assets/kinder/kinder-4.jpg",
      "/assets/kinder/kinder-5.jpg",
      "/assets/kinder/kinder-6.jpg",
    ],
  },
  accessoires: {
    name: "Accessoires",
    beschreibung:
      "Stilvolle Accessoires für jeden Anlass – durchdacht ausgewählt, liebevoll präsentiert.",
    bilder: [
      "/assets/accessoires/accessoire-1.jpg",
      "/assets/accessoires/accessoire-2.jpg",
      "/assets/accessoires/accessoire-3.jpg",
      "/assets/accessoires/accessoire-4.jpg",
      "/assets/accessoires/accessoire-5.jpg",
      "/assets/accessoires/accessoire-6.jpg",
    ],
  },
  gourmet: {
    name: "Gourmet",
    beschreibung:
      "Ausgewählte Feinkost und kulinarische Köstlichkeiten – perfekt als Mitbringsel oder für Genussmomente zuhause.",
    bilder: [
      "/assets/gourmet/gourmet-1.jpg",
      "/assets/gourmet/gourmet-2.jpg",
      "/assets/gourmet/gourmet-3.jpg",
      "/assets/gourmet/gourmet-4.jpg",
      "/assets/gourmet/gourmet-5.jpg",
      "/assets/gourmet/gourmet-6.jpg",
    ],
  },
  geschirr: {
    name: "Geschirr",
    beschreibung:
      "Edles Geschirr für den schön gedeckten Tisch – Teller, Schalen, Tassen und mehr in ausgesuchter Qualität.",
    bilder: [
      "/assets/geschirr/geschirr-1.jpg",
      "/assets/geschirr/geschirr-2.jpg",
      "/assets/geschirr/geschirr-3.jpg",
      "/assets/geschirr/geschirr-4.jpg",
      "/assets/geschirr/geschirr-5.jpg",
      "/assets/geschirr/geschirr-6.jpg",
    ],
  },
  herren: {
    name: "Herren",
    beschreibung:
      "Ausgewählte Artikel und besondere Geschenkideen speziell für den Herrn.",
    bilder: [
      "/assets/herren/herren-1.jpg",
      "/assets/herren/herren-2.jpg",
      "/assets/herren/herren-3.jpg",
      "/assets/herren/herren-4.jpg",
      "/assets/herren/herren-5.jpg",
      "/assets/herren/herren-6.jpg",
    ],
  },
  pralinen: {
    name: "Pralinen",
    beschreibung:
      "Handgefertigte Pralinen und feine Schokoladenspezialitäten – das süße Highlight für jeden Anlass.",
    bilder: [
      "/assets/pralinen/herz.png",
      "/assets/pralinen/kir-royal.png",
      "/assets/pralinen/ali-baba.png",
      "/assets/pralinen/waldfee.png",
      "/assets/pralinen/largueta.png",
      "/assets/pralinen/bienenstich.png",
      "/assets/pralinen/frische-minze.png",
      "/assets/pralinen/herrencreme.png",
      "/assets/pralinen/tiramisu.png",
      "/assets/pralinen/walnuss.png",
    ],
  },
  reisenthel: {
    name: "Reisenthel",
    beschreibung:
      "Praktische und stylische Einkaufs- und Transporttaschen von Reisenthel – funktional, farbenfroh und nachhaltig.",
    bilder: [
      "/assets/reisenthel/reisenthel-1.jpg",
      "/assets/reisenthel/reisenthel-2.jpg",
      "/assets/reisenthel/reisenthel-3.jpg",
      "/assets/reisenthel/reisenthel-4.jpg",
    ],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const k = kategorienMap[slug];
  return {
    title: k?.name ?? slug,
    description: k?.beschreibung,
  };
}

export default async function ProduktKategorie({ params }: Props) {
  const { slug } = await params;
  const k = kategorienMap[slug] ?? {
    name: slug.charAt(0).toUpperCase() + slug.slice(1),
    beschreibung: "",
    bilder: [],
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Breadcrumb */}
      <nav className="text-xs tracking-widest text-[var(--muted)] mb-10 flex gap-2">
        <Link href="/produkte" className="hover:text-[var(--green-dark)] transition-colors">
          PRODUKTE
        </Link>
        <span>/</span>
        <span className="text-[var(--green-dark)]">{k.name.toUpperCase()}</span>
      </nav>

      {/* Header */}
      <div className="mb-12 border-b border-[var(--border)] pb-8">
        <p className="text-xs tracking-widest text-[var(--green)] mb-2 uppercase">Kategorie</p>
        <h1 className="text-4xl font-light">{k.name}</h1>
        <p className="mt-4 text-[var(--muted)] max-w-xl leading-relaxed">{k.beschreibung}</p>
      </div>

      {/* Bilder-Grid */}
      {k.bilder.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {k.bilder.map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden group rounded-3xl shadow-sm">
              <Image
                src={src}
                alt={`${k.name} ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      ) : (
        <div
          className="aspect-[3/1] flex items-center justify-center border border-[var(--border)] rounded-3xl overflow-hidden"
          style={{ background: "var(--beige-light)" }}
        >
          <span className="text-xs tracking-widest text-[var(--muted)]">BILDER FOLGEN</span>
        </div>
      )}

      {/* CTA */}
      <div
        className="mt-16 p-8 text-center border border-[var(--border)] rounded-3xl"
        style={{ background: "var(--beige-light)" }}
      >
        <p className="text-xs tracking-widest text-[var(--green)] mb-2 uppercase">Interesse?</p>
        <h2 className="text-2xl font-light mb-4">Besuchen Sie uns in Wietmarschen</h2>
        <p className="text-sm text-[var(--muted)] mb-6">
          Alle Produkte sind persönlich in unserem Geschäft erhältlich. Schulstraße 1, 49835 Wietmarschen.
        </p>
        <Link
          href="/kontakt"
          className="inline-block bg-[var(--green-dark)] text-white text-xs tracking-widest px-8 py-4 rounded-full hover:bg-[var(--green)] transition-colors"
        >
          KONTAKT AUFNEHMEN
        </Link>
      </div>
    </div>
  );
}
