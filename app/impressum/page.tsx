import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum – Stil [Art], Michaela da Cunha, Schulstraße 1, 49835 Wietmarschen.",
};

export default function ImpressumSeite() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12 border-b border-[var(--border)] pb-8">
        <p className="text-xs tracking-widest text-[var(--green)] mb-2 uppercase">Rechtliches</p>
        <h1 className="text-4xl font-light">Impressum</h1>
      </div>

      <div className="flex flex-col gap-10 text-sm leading-relaxed text-[var(--foreground)]">

        <section>
          <h2 className="text-xs tracking-widest text-[var(--green)] mb-4 uppercase">
            Angaben gemäß § 5 TMG
          </h2>
          <p>
            <strong>Michaela da Cunha</strong>
            <br />
            Stil[Art] – Dekoration | Accessoires | Gourmet
            <br />
            Schulstraße 1
            <br />
            49835 Wietmarschen
            <br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-xs tracking-widest text-[var(--green)] mb-4 uppercase">Kontakt</h2>
          <p>
            Telefon:{" "}
            <a href="tel:059259988977" className="hover:text-[var(--green-dark)] transition-colors">
              05925 / 9988977
            </a>
            <br />
            E-Mail:{" "}
            <a
              href="mailto:michaela.cunha@stilart-studio.com"
              className="hover:text-[var(--green-dark)] transition-colors"
            >
              michaela.cunha@stilart-studio.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xs tracking-widest text-[var(--green)] mb-4 uppercase">
            Umsatzsteuer-ID
          </h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
            <br />
            <strong>DE123456789</strong>
          </p>
        </section>

        <section>
          <h2 className="text-xs tracking-widest text-[var(--green)] mb-4 uppercase">
            Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV
          </h2>
          <p>
            Michaela da Cunha
            <br />
            Schulstraße 1
            <br />
            49835 Wietmarschen
          </p>
        </section>

        <section>
          <h2 className="text-xs tracking-widest text-[var(--green)] mb-4 uppercase">
            Haftungsausschluss
          </h2>
          <p className="text-[var(--muted)]">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen.
          </p>
        </section>

        <section>
          <h2 className="text-xs tracking-widest text-[var(--green)] mb-4 uppercase">Urheberrecht</h2>
          <p className="text-[var(--muted)]">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>

      </div>
    </div>
  );
}
