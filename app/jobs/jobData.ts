export type Job = {
  id: string;
  titel: string;
  bereich: string;
  typ: string;
  standort: string;
  intro: string;
  aufgaben: string[];
  fachlich: string[];
  persoenlich: string[];
  rahmenbedingungen: string[];
  wuenschenswert: string[];
};

export const jobs: Job[] = [
  {
    id: "1",
    titel: "Minijob als Floristin (m/w/d)",
    bereich: "Floristik & Verkauf",
    typ: "Minijob / 603 €-Basis",
    standort: "Stil[Art] in Wietmarschen",
    intro:
      "Werde Teil unseres Teams bei Stil[Art] und unterstütze uns im Laden bei Beratung, Dekoration und Blumenpflege.",
    aufgaben: [
      "Anfertigung von Sträußen und einfachen Gestecken",
      "Beratung und Betreuung unserer Kundinnen und Kunden",
      "Pflege von Schnittblumen, Topfpflanzen und floralen Materialien",
      "Unterstützung im Verkauf und an der Kasse",
    ],
    fachlich: [
      "Grundkenntnisse in der Floristik (z. B. Ausbildung, Erfahrung oder Quereinsteiger)",
      "Sicherer Umgang mit Schnittblumen und Pflanzen",
      "Kreativität und Gespür für Farben, Formen und Gestaltung",
      "Erfahrung im Binden von Sträußen von Vorteil",
    ],
    persoenlich: [
      "Freundliches, serviceorientiertes Auftreten",
      "Freude am Umgang mit Kundinnen und Kunden",
      "Zuverlässigkeit, Pünktlichkeit und Verantwortungsbewusstsein",
      "Selbstständige und sorgfältige Arbeitsweise",
      "Teamfähigkeit und Flexibilität",
    ],
    rahmenbedingungen: [
      "Einsatz auf Minijob-Basis (z. B. 603-€-Basis)",
      "Bereitschaft zur Arbeit an Wochenenden, Feiertagen oder zu Stoßzeiten",
      "Körperliche Belastbarkeit (langes Stehen, Tragen von Blumen und Materialien)",
      "Gute Deutschkenntnisse für Beratung und Kundenkontakt",
    ],
    wuenschenswert: [
      "Erfahrung im Verkauf oder Einzelhandel",
      "Kenntnisse im Umgang mit Kassensystemen",
      "Liebe zur Natur und zu Pflanzen",
    ],
  },
];

export function getJobById(id: string) {
  return jobs.find((job) => job.id === id);
}
