import type { Metadata } from "next";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
  };
}

export default async function EinrichtungDetail({ params }: Props) {
  const { slug } = await params;
  const name = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Breadcrumb */}
      <nav className="text-xs tracking-widest text-[var(--muted)] mb-8 flex gap-2">
        <Link href="/einrichtung" className="hover:text-black transition-colors">
          EINRICHTUNG
        </Link>
        <span>/</span>
        <span className="text-black">{name.toUpperCase()}</span>
      </nav>

      {/* Bild */}
      <div className="aspect-[3/1] bg-[#f5f5f5] flex items-center justify-center mb-12 rounded-3xl overflow-hidden">
        <span className="text-xs tracking-widest text-[var(--muted)]">BILD</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-6">{name}</h1>
          <p className="text-[var(--muted)] leading-relaxed">
            Ausführliche Beschreibung des Bereichs. Alle Details, Ausstattung
            und besondere Merkmale kommen hier rein.
          </p>
        </div>

        {/* Ausstattung-Sidebar */}
        <aside className="border border-[var(--border)] rounded-3xl p-6 h-fit shadow-sm">
          <h2 className="text-xs tracking-widest text-[var(--muted)] mb-4 uppercase">Ausstattung</h2>
          <ul className="text-sm text-[var(--muted)] flex flex-col gap-2">
            <li>— Merkmal 1</li>
            <li>— Merkmal 2</li>
            <li>— Merkmal 3</li>
          </ul>
          <Link
            href="/kontakt"
            className="inline-block mt-6 w-full text-center bg-[#1a1a1a] text-white text-xs tracking-widest px-6 py-3 rounded-full hover:bg-[#333] transition-colors"
          >
            ANFRAGE STELLEN
          </Link>
        </aside>
      </div>
    </div>
  );
}
