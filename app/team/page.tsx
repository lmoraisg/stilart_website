import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Team",
  description: "Das Team hinter Stil [Art] in Wietmarschen.",
};

const team = [
  {
    name: "Michaela da Cunha",
    titel: "Inhaberin",
    rolle: "Gründerin & kreative Leitung – verantwortlich für Sortiment, Konzept und persönliche Beratung.",
    img: "/assets/team/micha.png",
  },
  {
    name: "Nicole",
    titel: "Dekoration & Ladenstyling",
    rolle: "Mitarbeiterin im Laden für Deko, Shop-Inszenierung und stilvolle Produktpräsentation.",
    img: "/assets/team/nicole.jpg",
  },
  {
    name: "Lara",
    titel: "Social Media & IT",
    rolle: "Verantwortlich für Social Media, Online-Auftritt und digitale Kommunikation.",
    img: "/assets/team/lara.jpg",
  },
];

export default function TeamSeite() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-16 border-b border-[var(--border)] pb-8">
        <p className="text-xs tracking-widest text-[var(--green)] mb-3 uppercase">Unser Team</p>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight">Menschen hinter Stil [Art]</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
          Wir sind ein kleines, leidenschaftliches Team aus Beratung, Dekoration und digitalem Storytelling. Gemeinsam schaffen wir Räume, die ins Herz treffen.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {team.map((person) => (
          <div key={person.name} className="rounded-[2rem] border border-[var(--border)] bg-white shadow-sm overflow-hidden transition-transform hover:-translate-y-1">
            <div className="relative h-72 overflow-hidden bg-[var(--beige-light)]">
              <Image
                src={person.img}
                alt={person.name}
                fill
                className="object-cover transition duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--beige-light)]">{person.titel}</p>
                <h2 className="text-2xl font-semibold text-white">{person.name}</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm leading-relaxed text-[var(--muted)]">{person.rolle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--beige-light)] p-10 shadow-sm">
          <h2 className="text-3xl font-semibold mb-4">Unsere Philosophie</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            Bei Stil [Art] ist jedes Detail wichtig. Von der Beratung bis zur finalen Präsentation arbeiten wir mit einem klaren Gespür für Atmosphäre, Funktion und Stimmung.
          </p>
        </div>
        <div className="rounded-[2rem] border border-[var(--border)] bg-white p-10 shadow-sm">
          <h2 className="text-3xl font-semibold mb-4">Klein, persönlich, echt</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            Unser Team ist bewusst überschaubar: kurze Wege, schnelle Entscheidungen und viel Raum für Kreativität. So entstehen Räume mit Charakter und Seele.
          </p>
        </div>
      </div>
    </div>
  );
}
