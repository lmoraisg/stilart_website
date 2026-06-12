import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events",
  description: "Unser 1-jähriges Jubiläum am 3. und 4. Juli mit Überraschungen, Verkostungen und Rabatten.",
};

const event = {
  slug: "1-jaehriges-jubilaeum",
  titel: "1-jähriges Jubiläum",
  datum: "3.–4. Juli 2026",
  ort: "Schulstraße 1, Wietmarschen",
  beschreibung:
    "Erlebe zwei Tage voller Überraschungen, Verkostungen und Rabatte. Wir feiern unser erstes Jahr mit besonderen Aktionen im Laden und laden dich herzlich ein, mit uns zu stöbern, zu probieren und zu genießen.",
};

export default function EventsSeite() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-12 border-b border-[var(--border)] pb-8">
        <p className="text-xs tracking-widest text-[var(--green)] mb-2 uppercase">Events</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Unser nächstes Event</h1>
        <p className="mt-4 max-w-3xl text-[var(--muted)] leading-relaxed">
          Das Highlight ist unser 1-jähriges Jubiläum am 3. und 4. Juli. Aktuell sind keine weiteren Events geplant – so können wir dieses Wochenende besonders schön vorbereiten.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.5fr_0.95fr]">
        <article className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white shadow-sm transition-transform duration-500 hover:-translate-y-1">
          <div className="relative overflow-hidden">
            <div className="aspect-[16/9] bg-[url('/assets/generell/laden4.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute left-6 bottom-6 text-white">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--beige-light)] mb-2">Jubiläum</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">{event.titel}</h2>
            </div>
          </div>
          <div className="p-8">
            <div className="inline-flex items-center gap-3 rounded-full bg-[var(--beige-light)] px-4 py-2 text-xs uppercase tracking-[0.35em] text-[var(--green-dark)]">
              {event.datum}
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--beige-light)] p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--green)] mb-2">Ort</p>
                <p className="font-semibold">{event.ort}</p>
              </div>
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--beige-light)] p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--green)] mb-2">Erlebnis</p>
                <p className="font-semibold">Verkostung & Rabatte</p>
              </div>
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--beige-light)] p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--green)] mb-2">Specials</p>
                <p className="font-semibold">Überraschungen & Verlosung</p>
              </div>
            </div>
            <p className="mt-8 text-[var(--muted)] leading-relaxed">{event.beschreibung} Es gibt außerdem eine attraktive Verlosung für alle Besucher:innen.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={`/events/${event.slug}`}
                className="inline-flex items-center justify-center rounded-full bg-[var(--green-dark)] px-8 py-4 text-xs font-semibold uppercase tracking-[0.35em] text-white hover:bg-[var(--green)] transition-colors"
              >
                Details zum Event
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--foreground)] hover:border-[var(--green-dark)] transition-colors"
              >
                Kontaktieren
              </Link>
            </div>
          </div>
        </article>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--beige-light)] p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--green)] mb-4">Planung</p>
            <h3 className="text-2xl font-semibold mb-4">Weitere Events</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Bis auf unser Jubiläums-Wochenende sind aktuell keine weiteren Veranstaltungen geplant. So können wir uns voll auf dieses Highlight konzentrieren.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
