import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Stil [Art].",
};

export default function DatenschutzSeite() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12 border-b border-[var(--border)] pb-8">
        <p className="text-xs tracking-widest text-[var(--green)] mb-2 uppercase">Rechtliches</p>
        <h1 className="text-4xl font-light">Datenschutzerklärung</h1>
      </div>

      <div className="flex flex-col gap-10 text-sm leading-relaxed">

        <section>
          <h2 className="text-xs tracking-widest text-[var(--green)] mb-4 uppercase">
            1. Datenschutz auf einen Blick
          </h2>
          <p className="text-[var(--muted)]">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </section>

        <section>
          <h2 className="text-xs tracking-widest text-[var(--green)] mb-4 uppercase">
            2. Verantwortliche Stelle
          </h2>
          <p>
            Michaela da Cunha
            <br />
            Stil[Art] – Dekoration | Accessoires | Gourmet
            <br />
            Schulstraße 1, 49835 Wietmarschen
            <br />
            E-Mail:{" "}
            <a href="mailto:michaela.cunha@stilart-studio.com" className="hover:text-[var(--green-dark)] transition-colors">
              michaela.cunha@stilart-studio.com
            </a>
            <br />
            Telefon: 05925 / 9988977
          </p>
        </section>

        <section>
          <h2 className="text-xs tracking-widest text-[var(--green)] mb-4 uppercase">
            3. Datenerfassung auf dieser Website
          </h2>
          <p className="text-[var(--muted)]">
            Diese Website erhebt keine personenbezogenen Daten, außer wenn Sie das
            Kontaktformular ausfüllen. Die über das Kontaktformular übermittelten Daten werden
            ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte
            weitergegeben.
          </p>
        </section>

        <section>
          <h2 className="text-xs tracking-widest text-[var(--green)] mb-4 uppercase">
            4. Ihre Rechte
          </h2>
          <p className="text-[var(--muted)]">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
            Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem das
            Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu
            weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
          </p>
        </section>

        <section>
          <h2 className="text-xs tracking-widest text-[var(--green)] mb-4 uppercase">
            5. Hosting
          </h2>
          <p className="text-[var(--muted)]">
            Diese Website wird bei IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Deutschland
            gehostet. Einzelheiten entnehmen Sie der Datenschutzerklärung von IONOS:{" "}
            <a
              href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[var(--green-dark)] transition-colors"
            >
              ionos.de/terms-gtc/datenschutzerklaerung
            </a>
          </p>
        </section>

      </div>
    </div>
  );
}
