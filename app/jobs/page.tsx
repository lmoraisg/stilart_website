import type { Metadata } from "next";
import Link from "next/link";
import { jobs } from "./jobData";
import JobApplicationModal from "@/components/JobApplicationModal";

export const metadata: Metadata = {
  title: "Jobs",
  description: "Offene Stellen und Karriere bei Stilart.",
};

export default function JobsSeite() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12 border-b border-[var(--border)] pb-8">
        <p className="text-xs tracking-widest text-[var(--green)] mb-2 uppercase">Karriere</p>
        <h1 className="text-4xl font-black tracking-tight">Offene Stellen</h1>
        <p className="mt-4 text-[var(--muted)] max-w-2xl leading-relaxed">
          Hier findest du unsere aktuellen Jobangebote. Klicke auf „Details ansehen“, um jeweils zur eigenen Seite mit allen Infos zu gelangen.
        </p>
      </div>

      <div className="space-y-6 mb-16">
        {jobs.map((job) => (
          <div key={job.id} className="rounded-[2rem] border border-[var(--border)] bg-white shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="text-xs tracking-[0.3em] uppercase bg-[var(--beige-light)] px-3 py-1 rounded-full">{job.typ}</span>
                <span className="text-xs tracking-[0.3em] uppercase bg-[var(--beige-light)] px-3 py-1 rounded-full">{job.bereich}</span>
              </div>
              <h2 className="text-2xl font-semibold">{job.titel}</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">{job.standort}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`/jobs/${job.id}`}
                  className="text-xs tracking-widest border border-[var(--green)] text-[var(--green)] px-5 py-3 rounded-full hover:bg-[var(--green)] hover:text-white transition-colors"
                >
                  Details ansehen
                </Link>
                <JobApplicationModal
                  jobTitle={job.titel}
                  buttonLabel="Bewerben"
                  buttonClassName="bg-[var(--green-dark)] text-white hover:bg-[var(--green)]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--beige-light)] p-8 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Initiativbewerbung</h2>
        <p className="text-[var(--muted)] leading-relaxed mb-6">
          Du findest keinen passenden Job? Kein Problem. Wir sind immer offen für Bewerbungen von Menschen, die unser Team mit Leidenschaft und Kreativität bereichern möchten.
        </p>
        <JobApplicationModal
          jobTitle="Initiativbewerbung"
          buttonLabel="Initiativ bewerben"
          buttonClassName="bg-[var(--green-dark)] text-white hover:bg-[var(--green)]"
        />
      </div>
    </div>
  );
}
