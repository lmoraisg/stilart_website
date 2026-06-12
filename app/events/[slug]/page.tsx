import type { Metadata } from "next";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

const eventData: Record<string, { title: string; datum: string; ort: string; uhrzeit: string; beschreibung: string; highlights: string[] }> = {
  "1-jaehriges-jubilaeum": {
    title: "1-jähriges Jubiläum",
    datum: "3. Juli 2026 – 4. Juli 2026",
    ort: "Schulstraße 1, 49835 Wietmarschen",
    uhrzeit: "10:00 – 18:00 Uhr",
    beschreibung:
      "Erlebe zwei Tage voller Überraschungen, Verkostungen und Rabatte. Wir feiern unser erstes Jahr mit besonderen Aktionen im Laden und laden dich herzlich ein, mit uns zu stöbern, zu probieren und zu genießen.",
    highlights: [
      "Live-Verkostungen ausgewählter Feinkost",
      "Exklusive Jubiläumsangebote",
      "Kleine Geschenke und Überraschungen",
      "Verlosung mit tollen Preisen",
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = eventData[slug];
  return {
    title: event ? event.title : "Event",
  };
}

export default async function EventDetail({ params }: Props) {
  const { slug } = await params;
  const event = eventData[slug];

  if (!event) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-sm text-[var(--muted)]">Dieses Event wurde noch nicht gefunden.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <nav className="text-xs tracking-widest text-[var(--muted)] mb-8 flex gap-2">
        <Link href="/events" className="hover:text-black transition-colors">
          EVENTS
        </Link>
        <span>/</span>
        <span className="text-black">{event.title.toUpperCase()}</span>
      </nav>

      <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--beige-light)] shadow-sm">
        <div className="relative aspect-[16/7] bg-[url('/assets/generell/laden4.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute left-6 bottom-6 text-white">
            <p className="text-xs uppercase tracking-[0.35em] mb-2">Event</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">{event.title}</h1>
          </div>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1fr_280px] p-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-5">Mehr zum Jubiläum</h2>
            <p className="text-[var(--muted)] leading-relaxed mb-6">{event.beschreibung}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm border border-[var(--border)]">
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--green)] mb-2">Datum</p>
                <p className="font-semibold">{event.datum}</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm border border-[var(--border)]">
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--green)] mb-2">Uhrzeit</p>
                <p className="font-semibold">{event.uhrzeit}</p>
              </div>
            </div>
          </div>

          <aside className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--green)] mb-4">Details</p>
            <dl className="space-y-4 text-sm text-[var(--muted)]">
              <div>
                <dt className="font-semibold">Ort</dt>
                <dd>{event.ort}</dd>
              </div>
              <div>
                <dt className="font-semibold">Höhepunkte</dt>
                <dd>
                  <ul className="mt-2 space-y-3">
                    {event.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--green-dark)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
            <Link
              href="/kontakt"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[var(--green-dark)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white hover:bg-[var(--green)] transition-colors"
            >
              Jetzt anfragen
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
