"use client";

import { useEffect, useState } from "react";

type FormState = {
  vorname: string;
  nachname: string;
  email: string;
  telefon: string;
  verfugbarkeit: string;
  nachricht: string;
  datenschutz: boolean;
  lebenslauf: File | null;
};

type Props = {
  jobTitle: string;
};

export default function JobApplicationForm({ jobTitle }: Props) {
  const [formState, setFormState] = useState<FormState>({
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    verfugbarkeit: "",
    nachricht: "",
    datenschutz: false,
    lebenslauf: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!formState.lebenslauf) {
      setResumeUrl(null);
      return;
    }

    const url = URL.createObjectURL(formState.lebenslauf);
    setResumeUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [formState.lebenslauf]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked, files } = event.target as HTMLInputElement;

    if (name === "lebenslauf" && files) {
      setFormState((current) => ({
        ...current,
        lebenslauf: files[0] ?? null,
      }));
      return;
    }

    setFormState((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const openResume = () => {
    if (resumeUrl) {
      window.open(resumeUrl, "_blank");
    }
  };

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--beige-light)] p-10 shadow-sm">
        <h2 className="text-3xl font-semibold mb-4">Danke für deine Bewerbung</h2>
        <p className="text-[var(--muted)] leading-relaxed">
          Wir haben deine Nachricht erhalten und melden uns schnellstmöglich bei dir. Wenn du möchtest, kannst du uns weitere Unterlagen per E-Mail an <strong>michaela.cunha@stilart-studio.com</strong> senden.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-[var(--border)] bg-white shadow-sm p-8">
      <div className="mb-8">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--green)] mb-3">Bewerbung</p>
        <h2 className="text-3xl font-semibold">Für: {jobTitle}</h2>
        <p className="mt-3 text-[var(--muted)] leading-relaxed">
          Fülle das Formular aus und sende uns deine Bewerbung direkt über die Seite.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-6">
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-[var(--muted)] uppercase tracking-[0.3em] text-xs">Vorname</span>
          <input
            type="text"
            name="vorname"
            required
            value={formState.vorname}
            onChange={handleChange}
            className="border border-[var(--border)] bg-[var(--beige-light)] px-4 py-3 rounded-2xl focus:outline-none focus:border-[var(--green)] transition-colors"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-[var(--muted)] uppercase tracking-[0.3em] text-xs">Nachname</span>
          <input
            type="text"
            name="nachname"
            required
            value={formState.nachname}
            onChange={handleChange}
            className="border border-[var(--border)] bg-[var(--beige-light)] px-4 py-3 rounded-2xl focus:outline-none focus:border-[var(--green)] transition-colors"
          />
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-6">
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-[var(--muted)] uppercase tracking-[0.3em] text-xs">E-Mail</span>
          <input
            type="email"
            name="email"
            required
            value={formState.email}
            onChange={handleChange}
            className="border border-[var(--border)] bg-[var(--beige-light)] px-4 py-3 rounded-2xl focus:outline-none focus:border-[var(--green)] transition-colors"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-[var(--muted)] uppercase tracking-[0.3em] text-xs">Telefon</span>
          <input
            type="tel"
            name="telefon"
            value={formState.telefon}
            onChange={handleChange}
            className="border border-[var(--border)] bg-[var(--beige-light)] px-4 py-3 rounded-2xl focus:outline-none focus:border-[var(--green)] transition-colors"
          />
        </label>
      </div>

      <div className="mb-6">
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-[var(--muted)] uppercase tracking-[0.3em] text-xs">Verfügbarkeit</span>
          <select
            name="verfugbarkeit"
            required
            value={formState.verfugbarkeit}
            onChange={handleChange}
            className="border border-[var(--border)] bg-[var(--beige-light)] px-4 py-3 rounded-2xl focus:outline-none focus:border-[var(--green)] transition-colors"
          >
            <option value="" disabled>
              Verfügbarkeit wählen
            </option>
            <option value="ab sofort">Ab sofort</option>
            <option value="in 1-2 wochen">In 1-2 Wochen</option>
            <option value="nach absprache">Nach Absprache</option>
          </select>
        </label>
      </div>

      <div className="mb-6">
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-[var(--muted)] uppercase tracking-[0.3em] text-xs">Lebenslauf</span>
          <input
            type="file"
            name="lebenslauf"
            accept=".pdf,.doc,.docx"
            required
            onChange={handleChange}
            className="border border-[var(--border)] bg-[var(--beige-light)] px-4 py-3 rounded-2xl focus:outline-none focus:border-[var(--green)] transition-colors"
          />
        </label>
        {formState.lebenslauf && resumeUrl ? (
          <button
            type="button"
            onClick={openResume}
            className="mt-3 inline-flex items-center justify-center rounded-full border border-[var(--green)] bg-white px-6 py-3 text-xs tracking-widest text-[var(--green)] hover:bg-[var(--green)] hover:text-white transition-colors"
          >
            Lebenslauf im neuen Fenster öffnen
          </button>
        ) : null}
      </div>

      <div className="mb-6">
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-[var(--muted)] uppercase tracking-[0.3em] text-xs">Was möchtest du uns sagen?</span>
          <textarea
            name="nachricht"
            required
            value={formState.nachricht}
            onChange={handleChange}
            rows={6}
            className="border border-[var(--border)] bg-[var(--beige-light)] px-4 py-3 rounded-2xl focus:outline-none focus:border-[var(--green)] transition-colors resize-none"
            placeholder="Erzähle uns kurz, warum du gut zu Stil[Art] passt."
          />
        </label>
      </div>

      <label className="mb-8 flex items-start gap-3 text-sm text-[var(--muted)]">
        <input
          type="checkbox"
          name="datenschutz"
          checked={formState.datenschutz}
          onChange={handleChange}
          required
          className="mt-1 h-4 w-4 rounded border-[var(--border)] text-[var(--green)] focus:ring-[var(--green)]"
        />
        <span>
          Ich habe die <a href="/datenschutz" className="underline hover:text-[var(--green-dark)]">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu.
        </span>
      </label>

      <button
        type="submit"
        className="inline-block bg-[var(--green-dark)] text-white text-xs tracking-widest px-10 py-4 rounded-full hover:bg-[var(--green)] transition-colors"
      >
        Bewerbung senden
      </button>
    </form>
  );
}
