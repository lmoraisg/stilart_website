import type { Metadata } from "next";
import MapConsent from "@/components/MapConsent";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktieren Sie Stil [Art] in Wietmarschen – Telefon, E-Mail und Öffnungszeiten.",
};

export default function KontaktSeite() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-12 border-b border-[var(--border)] pb-8">
        <p className="text-xs tracking-widest text-[var(--green)] mb-2 uppercase">Schreiben Sie uns</p>
        <h1 className="text-4xl font-light tracking-tight">Kontakt</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">
        {/* Formular */}
        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest text-[var(--muted)] uppercase">Vorname</label>
              <input
                type="text"
                name="vorname"
                required
                className="border border-[var(--border)] bg-white px-4 py-3 text-sm rounded-2xl focus:outline-none focus:border-[var(--green)] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest text-[var(--muted)] uppercase">Nachname</label>
              <input
                type="text"
                name="nachname"
                required
                className="border border-[var(--border)] bg-white px-4 py-3 text-sm rounded-2xl focus:outline-none focus:border-[var(--green)] transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest text-[var(--muted)] uppercase">E-Mail</label>
            <input
              type="email"
              name="email"
              required
              className="border border-[var(--border)] bg-white px-4 py-3 text-sm rounded-2xl focus:outline-none focus:border-[var(--green)] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest text-[var(--muted)] uppercase">Anliegen</label>
            <select
              name="anliegen"
              className="border border-[var(--border)] bg-white px-4 py-3 text-sm rounded-2xl focus:outline-none focus:border-[var(--green)] transition-colors"
              defaultValue=""
            >
              <option value="" disabled>
                Anliegen auswählen
              </option>
              <option value="kundenservice">Kundenservice</option>
              <option value="frage">Frage</option>
              <option value="reservierung">Reservierung</option>
              <option value="bestellung">Bestellung</option>
              <option value="reklamation">Reklamation</option>
              <option value="beratung">Beratung</option>
              <option value="sonstiges">Sonstiges</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest text-[var(--muted)] uppercase">Betreff</label>
            <input
              type="text"
              name="betreff"
              className="border border-[var(--border)] bg-white px-4 py-3 text-sm rounded-2xl focus:outline-none focus:border-[var(--green)] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest text-[var(--muted)] uppercase">Nachricht</label>
            <textarea
              name="nachricht"
              rows={6}
              required
              className="border border-[var(--border)] bg-white px-4 py-3 text-sm rounded-2xl focus:outline-none focus:border-[var(--green)] transition-colors resize-none"
            />
          </div>

          <div className="flex items-start gap-3">
            <input type="checkbox" name="datenschutz" id="datenschutz" required className="mt-1" />
            <label htmlFor="datenschutz" className="text-xs text-[var(--muted)] leading-relaxed">
              Ich habe die{" "}
              <a href="/datenschutz" className="underline hover:text-[var(--green-dark)]">
                Datenschutzerklärung
              </a>{" "}
              gelesen und stimme der Verarbeitung meiner Daten zu.
            </label>
          </div>

          <button
            type="submit"
            className="self-start bg-[var(--green-dark)] text-white text-xs tracking-widest px-10 py-4 rounded-full hover:bg-[var(--green)] transition-colors"
          >
            NACHRICHT SENDEN
          </button>
        </form>

        {/* Kontakt-Info */}
        <aside className="flex flex-col gap-6">
          <div className="border border-[var(--border)] p-6 rounded-3xl" style={{ background: "var(--beige-light)" }}>
            <h2 className="text-xs tracking-widest text-[var(--green)] mb-4 uppercase">Adresse</h2>
            <address className="not-italic text-sm leading-loose">
              <strong>Michaela da Cunha</strong>
              <br />
              Stil[Art] – Dekoration | Accessoires | Gourmet
              <br />
              Schulstraße 1
              <br />
              49835 Wietmarschen
            </address>
          </div>

          <div className="border border-[var(--border)] p-6 rounded-3xl shadow-sm">
            <h2 className="text-xs tracking-widest text-[var(--green)] mb-4 uppercase">Erreichbarkeit</h2>
            <dl className="text-sm flex flex-col gap-3">
              <div>
                <dt className="font-semibold">Telefon</dt>
                <dd className="text-[var(--muted)]">
                  <a href="tel:059259988977" className="hover:text-[var(--green-dark)] transition-colors">
                    05925 / 9988977
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">E-Mail</dt>
                <dd className="text-[var(--muted)]">
                  <a href="mailto:michaela.cunha@stilart-studio.com" className="hover:text-[var(--green-dark)] transition-colors break-all">
                    michaela.cunha@stilart-studio.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="border border-[var(--border)] p-6 rounded-3xl shadow-sm">
            <h2 className="text-xs tracking-widest text-[var(--green)] mb-4 uppercase">Öffnungszeiten</h2>
            <div className="grid text-sm gap-y-1" style={{ gridTemplateColumns: "72px 1fr" }}>
              <span className="text-[var(--muted)]">Montag</span>   <span>Geschlossen</span>
              <span className="text-[var(--muted)]">Di – Fr</span>  <span>9:00 – 12:30<br />14:30 – 18:00</span>
              <span className="text-[var(--muted)]">Samstag</span>  <span>9:00 – 12:30</span>
            </div>
          </div>

          {/* Karte mit Google-Maps-Lade-Button */}
          <MapConsent />
        </aside>
      </div>
    </div>
  );
}
