import type { Metadata } from "next";
import Link from "next/link";
import { getJobById, jobs } from "../jobData";
import { notFound } from "next/navigation";
import JobApplicationModal from "@/components/JobApplicationModal";

type Props = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return jobs.map((job) => ({ id: job.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const job = getJobById(resolvedParams.id);

  if (!job) {
    return {
      title: "Job nicht gefunden",
      description: "Die angeforderte Stelle wurde nicht gefunden.",
    };
  }

  return {
    title: `${job.titel} | Stil[Art]`,
    description: job.intro,
  };
}

export default async function JobDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const job = getJobById(resolvedParams.id);

  if (!job) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-10">
        <Link
          href="/jobs"
          className="text-xs tracking-widest uppercase text-[var(--green)] hover:text-[var(--green-dark)]"
        >
          Zurück zu den Jobs
        </Link>
      </div>

      <div className="rounded-[2rem] border border-[var(--border)] overflow-hidden bg-white shadow-sm">
        <div className="bg-[var(--beige-light)] px-8 py-10">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--green)] mb-3">{job.typ}</p>
          <h1 className="text-4xl font-semibold">{job.titel}</h1>
          <p className="mt-4 text-[var(--muted)] max-w-3xl leading-relaxed">{job.intro}</p>
          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-[var(--green)]">{job.standort}</p>
        </div>

        <div className="grid gap-8 p-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold mb-4">💐 Deine Aufgaben</h2>
            <ul className="space-y-3 text-[var(--muted)]">
              {job.aufgaben.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 text-[var(--green)]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">🌷 Das bringst du mit</h2>
            <div className="space-y-6 text-[var(--muted)]">
              <div>
                <p className="font-semibold mb-3">Fachlich</p>
                <ul className="space-y-2">
                  {job.fachlich.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 text-[var(--green)]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-3">Persönlich</p>
                <ul className="space-y-2">
                  {job.persoenlich.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 text-[var(--green)]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 p-8 bg-[var(--beige-light)] lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold mb-4">🌼 Rahmenbedingungen</h2>
            <ul className="space-y-2 text-[var(--muted)]">
              {job.rahmenbedingungen.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 text-[var(--green)]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">🌿 Wünschenswert</h2>
            <ul className="space-y-2 text-[var(--muted)]">
              {job.wuenschenswert.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 text-[var(--green)]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-8 bg-white border-t border-[var(--border)] flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-[var(--muted)]">
            <p className="font-semibold mb-2">Bereit für den nächsten Schritt?</p>
            <p>Öffne das Bewerbungsformular direkt als separates Fenster.</p>
          </div>
          <JobApplicationModal
            jobTitle={job.titel}
            buttonLabel="Jetzt bewerben"
            buttonClassName="bg-[var(--green-dark)] text-white hover:bg-[var(--green)]"
          />
        </div>
      </div>
    </div>
  );
}
