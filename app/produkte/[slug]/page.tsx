import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GourmetRecipeTabs from "@/components/GourmetRecipeTabs";

type KategorieData = {
  name: string;
  label: string;
  beschreibung: string;
  intro: string;
  bilder: string[];
  packageSizes?: { title: string; image: string; detail: string }[];
  rezepte?: { title: string; image: string; excerpt: string; ingredients: string[]; steps: string[] }[];
};

const kategorienMap: Record<string, KategorieData> = {
  dutz: {
    name: "Dutz",
    label: "Glaskunst",
    beschreibung: "Hochwertige Gläser und Vasen von Dutz – mundgeblasen, farbenfroh und einzigartig. Jedes Stück ist ein Unikat, das Ihr Zuhause mit Farbe und Stil bereichert.",
    intro: "Farbintensive Glasobjekte mit Charakter – handgeblasen, lebendig, unverwechselbar.",
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
    label: "Design",
    beschreibung: "Räder Design steht für poetische Alltagsbegleiter – von Kerzenhaltern über Vasen bis hin zu kreativen Geschenkideen mit Herz.",
    intro: "Design, das berührt – für den Alltag mit Seele.",
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
    label: "Textil",
    beschreibung: "Hochwertige Handtücher für Bad und Küche – weich, saugstark und in schönen Farben erhältlich.",
    intro: "Weiche Qualität, schöne Farben – für Ihren Alltag.",
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
    label: "Kinder",
    beschreibung: "Schöne und sichere Artikel für Kinder – von dekorativen Accessoires bis zu liebevollen Geschenkideen für die Kleinen.",
    intro: "Liebevoll ausgewählt – für die kleinen Menschen im Leben.",
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
    label: "Stil",
    beschreibung: "Stilvolle Accessoires für jeden Anlass – durchdacht ausgewählt, liebevoll präsentiert.",
    intro: "Der richtige Akzent für jeden Moment.",
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
    label: "Feinkost",
    beschreibung: "Ausgewählte Feinkost und kulinarische Köstlichkeiten – perfekt als Mitbringsel oder für Genussmomente zuhause.",
    intro: "Kulinarische Entdeckungen für echte Genießer.",
    bilder: [
      "/assets/gourmet/gourmet-1.jpg",
      "/assets/gourmet/gourmet-2.jpg",
      "/assets/gourmet/gourmet-3.jpg",
      "/assets/gourmet/gourmet-4.jpg",
      "/assets/gourmet/gourmet-5.jpg",
      "/assets/gourmet/gourmet-6.jpg",
    ],
    rezepte: [
      {
        title: "Blätterteig-Spinat-Tarte",
        image: "/assets/gourmet/blätterteig.jpg",
        excerpt: "Knusprig, herzhaft und blitzschnell gemacht – perfekt als Snack oder leichtes Mittagessen.",
        ingredients: [
          "1 Packung Blätterteig",
          "250 g frischer Spinat",
          "1 rote Zwiebel",
          "2 Knoblauchzehen",
          "150 g Feta",
          "2 Eier",
          "150 ml Sahne",
          "Muskatnuss, Salz, Pfeffer",
        ],
        steps: [
          "Backofen auf 200 °C vorheizen und eine Tarteform mit Blätterteig auslegen.",
          "Zwiebel und Knoblauch fein hacken und kurz in etwas Öl andünsten.",
          "Spinat hinzufügen, zusammenfallen lassen und mit Salz, Pfeffer und Muskat würzen.",
          "Feta zerbröseln und mit Eiern sowie Sahne verrühren.",
          "Spinatmischung unterheben, in die Form geben und die Tarte 25–30 Minuten backen.",
          "Kurz abkühlen lassen und dann in Stücke schneiden.",
        ],
      },
      {
        title: "Cremiger Cheesecake",
        image: "/assets/gourmet/cheesecake.jpg",
        excerpt: "Saftig, zart und unkompliziert – dieser Cheesecake gelingt garantiert.",
        ingredients: [
          "200 g Butterkekse",
          "100 g Butter",
          "600 g Frischkäse",
          "150 g Zucker",
          "3 Eier",
          "200 g Schmand",
          "1 TL Vanilleextrakt",
          "Abrieb einer Zitrone",
        ],
        steps: [
          "Kekse zerbröseln und mit geschmolzener Butter vermischen.",
          "Die Masse in eine Springform drücken und kaltstellen.",
          "Frischkäse mit Zucker, Eiern, Schmand, Vanille und Zitronenabrieb glatt rühren.",
          "Die Füllung auf den Boden geben und bei 160 °C etwa 45 Minuten backen.",
          "Ofen ausschalten, Kuchen leicht abkühlen lassen und vor dem Servieren vollständig kühlen.",
        ],
      },
      {
        title: "Frischer Sommersalat",
        image: "/assets/gourmet/salat.jpg",
        excerpt: "Bunt, knackig und voller Aromen – ein Salat, den Gäste lieben.",
        ingredients: [
          "200 g gemischte Blattsalate",
          "150 g Cherrytomaten",
          "1/2 Gurke",
          "1 Avocado",
          "100 g Feta",
          "1 Handvoll Kräuter",
          "3 EL Olivenöl",
          "1 EL Zitronensaft",
          "1 TL Honig",
        ],
        steps: [
          "Salate waschen und trocken schleudern.",
          "Tomaten halbieren, Gurke würfeln und Avocado in Scheiben schneiden.",
          "Feta zerbröseln und Kräuter fein hacken.",
          "Öl, Zitronensaft und Honig zu einem Dressing verrühren.",
          "Alles in einer Schüssel mischen und mit dem Dressing anrichten.",
        ],
      },
      {
        title: "Wärmende Herbstsuppe",
        image: "/assets/gourmet/suppe.jpg",
        excerpt: "Ein einfaches Rezept für gemütliche Abende mit viel Geschmack.",
        ingredients: [
          "500 g Kürbis oder Hokkaido",
          "1 Zwiebel",
          "2 Knoblauchzehen",
          "700 ml Gemüsebrühe",
          "150 ml Sahne",
          "1 TL Currypulver",
          "Salz, Pfeffer",
          "Kürbiskerne zum Garnieren",
        ],
        steps: [
          "Zwiebel und Knoblauch fein hacken und in etwas Öl andünsten.",
          "Kürbiswürfel hinzufügen und kurz mitbraten.",
          "Brühe zugießen und alles etwa 20 Minuten weich kochen.",
          "Die Suppe pürieren, Sahne einrühren und mit Currypulver, Salz und Pfeffer abschmecken.",
          "Mit gerösteten Kürbiskernen servieren.",
        ],
      },
    ],
  },
  geschirr: {
    name: "Geschirr",
    label: "Tafelkultur",
    beschreibung: "Edles Geschirr für den schön gedeckten Tisch – Teller, Schalen, Tassen und mehr in ausgesuchter Qualität.",
    intro: "Tischkultur, die Eindruck hinterlässt.",
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
    label: "Geschenke",
    beschreibung: "Ausgewählte Artikel und besondere Geschenkideen speziell für den Herrn.",
    intro: "Besondere Ideen für besondere Männer.",
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
    label: "Handgemacht",
    beschreibung: "Handgefertigte Pralinen und feine Schokoladenspezialitäten – das süße Highlight für jeden Anlass.",
    intro: "Schokolade als Kunstform – für den perfekten Moment.",
    bilder: [
      "/assets/pralinen/herz.png",
      "/assets/pralinen/kir-royal.png",
      "/assets/pralinen/waldfee.png",
      "/assets/pralinen/largueta.png",
      "/assets/pralinen/bienenstich.png",
      "/assets/pralinen/frische-minze.png",
      "/assets/pralinen/herrencreme.png",
      "/assets/pralinen/tiramisu.png",
      "/assets/pralinen/walnuss.png",
    ],
    packageSizes: [
      {
        title: "Klein",
        image: "/assets/pralinen/klein.jpg",
        detail: "Kleine Auswahl – ideal als süßes Geschenk oder für den Genuss zwischendurch.",
      },
      {
        title: "Mittel",
        image: "/assets/pralinen/mittel.jpg",
        detail: "Mittlere Packung – perfekt für Familien und Gäste.",
      },
      {
        title: "Groß",
        image: "/assets/pralinen/groß.jpg",
        detail: "Großes Paket – für besondere Anlässe und größere Freude.",
      },
    ],
  },
  reisenthel: {
    name: "Reisenthel",
    label: "Taschen",
    beschreibung: "Praktische und stylische Einkaufs- und Transporttaschen von Reisenthel – funktional, farbenfroh und nachhaltig.",
    intro: "Farbe im Alltag – Taschen die man liebt.",
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
    label: "Kategorie",
    beschreibung: "",
    intro: "",
    bilder: [],
  };

  const heroImage = k.bilder[0];
  const galleryImages = k.bilder.slice(1);

  return (
    <div>
      {/* Full-bleed hero */}
      {heroImage && (
        <div className="relative h-[55vh] min-h-[380px] overflow-hidden">
          <Image
            src={heroImage}
            alt={k.name}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end pb-12 px-8 md:px-16 max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/60 text-xs tracking-widest uppercase mb-4">
              <Link href="/produkte" className="hover:text-white transition-colors">Produkte</Link>
              <span>/</span>
              <span className="text-white">{k.name}</span>
            </nav>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-[10px] tracking-[0.4em] uppercase text-white/80 mb-4 w-fit">
              {k.label}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none">
              {k.name}
            </h1>
            {k.intro && (
              <p className="mt-4 text-white/70 text-lg max-w-xl leading-relaxed">{k.intro}</p>
            )}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Description strip */}
        <div className="mb-14 flex flex-col md:flex-row gap-8 md:items-start md:justify-between border-b border-[var(--border)] pb-10">
          <p className="text-[var(--muted)] max-w-2xl leading-relaxed text-base">{k.beschreibung}</p>
          <Link
            href="/kontakt"
            className="shrink-0 self-start text-xs tracking-widest border border-[var(--green)] text-[var(--green)] px-6 py-3 rounded-full hover:bg-[var(--green)] hover:text-white transition-colors"
          >
            IM LADEN ANSEHEN
          </Link>
        </div>

        {/* Photo grid — staggered sizes */}
        {galleryImages.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px]">
            {galleryImages.map((src, i) => {
              const isFeatured = i === 0 || i === 4;
              return (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-[1.5rem] group shadow-sm ${
                    isFeatured ? "col-span-2 row-span-2" : ""
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${k.name} ${i + 2}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes={isFeatured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 640px) 50vw, 25vw"}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-[1.5rem]" />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="aspect-[3/1] flex items-center justify-center border border-[var(--border)] rounded-[2rem] bg-[var(--beige-light)]">
            <span className="text-xs tracking-widest text-[var(--muted)] uppercase">Bilder folgen</span>
          </div>
        )}

        {/* Pralinen package sizes */}
        {slug === "pralinen" && k.packageSizes && (
          <section className="mt-20">
            <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
              <div>
                <p className="text-xs tracking-[0.4em] uppercase text-[var(--green)] mb-2">Packungsgrößen</p>
                <h2 className="text-4xl font-black tracking-tight">Klein, Mittel, Groß</h2>
              </div>
              <p className="text-[var(--muted)] max-w-sm text-sm leading-relaxed">
                Das perfekte Päckchen für jeden Anlass – vom kleinen Dankeschön bis zur großen Freude.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {k.packageSizes.map((item) => (
                <div key={item.title} className="group relative rounded-[2rem] overflow-hidden shadow-sm aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={`Pralinenpaket ${item.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-white/70 text-sm mt-1 leading-snug">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {slug === "gourmet" && k.rezepte && <GourmetRecipeTabs rezepte={k.rezepte} />}

        {/* CTA */}
        <div className="mt-20 relative overflow-hidden rounded-[2rem] bg-[var(--green-dark)] p-10 md:p-14 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/5" />
          <div className="absolute -left-8 -bottom-12 w-48 h-48 rounded-full bg-white/5" />
          <div className="relative">
            <p className="text-xs tracking-[0.4em] uppercase text-white/60 mb-3">Interesse geweckt?</p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight">
              Besuchen Sie uns<br />in Wietmarschen.
            </h2>
            <p className="mt-3 text-white/70 leading-relaxed max-w-md">
              Alle Produkte sind persönlich in unserem Geschäft erhältlich. Schulstraße 1, 49835 Wietmarschen.
            </p>
          </div>
          <div className="relative flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/kontakt"
              className="bg-white text-[var(--green-dark)] text-xs tracking-widest px-8 py-4 rounded-full hover:bg-[var(--beige-light)] transition-colors font-semibold text-center"
            >
              KONTAKT
            </Link>
            <Link
              href="/produkte"
              className="border border-white/40 text-white text-xs tracking-widest px-8 py-4 rounded-full hover:border-white/80 transition-colors text-center"
            >
              ALLE PRODUKTE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
