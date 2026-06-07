"use client";

import { useState } from "react";
import JobApplicationForm from "@/components/JobApplicationForm";

type Props = {
  jobTitle: string;
  buttonLabel?: string;
  buttonClassName?: string;
};

export default function JobApplicationModal({
  jobTitle,
  buttonLabel = "Bewerben",
  buttonClassName = "",
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`text-xs tracking-widest px-5 py-3 rounded-full transition-colors ${buttonClassName}`}
      >
        {buttonLabel}
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-3xl max-h-[calc(100vh-3rem)] overflow-hidden rounded-[2rem] bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-white text-xl font-semibold text-[var(--green)] shadow-sm hover:bg-[var(--green)] hover:text-white transition-colors"
              aria-label="Schließen"
            >
              ×
            </button>
            <div className="flex max-h-[calc(100vh-5rem)] flex-col overflow-y-auto p-6 sm:p-8">
              <JobApplicationForm jobTitle={jobTitle} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
