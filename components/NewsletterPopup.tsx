"use client";

import { useEffect, useState } from "react";

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const dismissed = localStorage.getItem("newsletter-dismissed");
    if (dismissed) return;

    // Pop-up nach 8 Sekunden anzeigen
    const timer = setTimeout(() => setVisible(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    localStorage.setItem("newsletter-dismissed", "true");
    setVisible(false);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error ?? "Unbekannter Fehler");
        return;
      }

      setStatus("success");
      localStorage.setItem("newsletter-dismissed", "true");
    } catch {
      setStatus("error");
      setErrorMsg("Netzwerkfehler. Bitte versuche es erneut.");
    }
  }

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-label="Newsletter anmelden"
      >
        <div className="relative w-full max-w-md bg-[var(--background)] rounded-[2rem] shadow-2xl overflow-hidden">
          {/* Decorative top bar */}
          <div className="h-1.5 bg-gradient-to-r from-[var(--green-dark)] via-[var(--green)] to-[var(--beige)]" />

          {/* Close button */}
          <button
            onClick={dismiss}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--border)] transition-colors"
            aria-label="Schließen"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>

          <div className="p-8 pt-7">
            {status === "success" ? (
              <div className="text-center py-4">
                <div className="w-14 h-14 rounded-full bg-[var(--green-dark)]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-[var(--green-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-2">Angemeldet!</h2>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  Schön, dass du dabei bist. Du erhältst bald Neuigkeiten von uns.
                </p>
                <button
                  onClick={dismiss}
                  className="mt-6 bg-[var(--green-dark)] text-white text-xs tracking-widest px-8 py-3 rounded-full hover:bg-[var(--green)] transition-colors"
                >
                  SCHLIESSEN
                </button>
              </div>
            ) : (
              <>
                <p className="text-xs tracking-[0.35em] uppercase text-[var(--green)] mb-2">Newsletter</p>
                <h2 className="text-2xl font-bold mb-2 leading-tight">
                  Immer informiert bleiben.
                </h2>
                <p className="text-[var(--muted)] text-sm leading-relaxed mb-6">
                  Erhalte Neuigkeiten zu neuen Kollektionen, Events und besonderen Angeboten direkt in dein Postfach.
                </p>

                <form onSubmit={submit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="deine@email.de"
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-[var(--border)] bg-white text-sm focus:outline-none focus:border-[var(--green)] transition-colors"
                  />

                  {status === "error" && (
                    <p className="text-red-500 text-xs">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-[var(--green-dark)] text-white text-xs tracking-widest px-6 py-3.5 rounded-full hover:bg-[var(--green)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "WIRD ANGEMELDET …" : "JETZT ANMELDEN"}
                  </button>
                </form>

                <p className="mt-4 text-[10px] text-[var(--muted)] leading-relaxed text-center">
                  Kein Spam. Abmeldung jederzeit möglich.{" "}
                  <a href="/datenschutz" className="underline hover:text-[var(--foreground)]">
                    Datenschutz
                  </a>
                </p>

                <button
                  onClick={dismiss}
                  className="mt-3 w-full text-[10px] tracking-widest text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-center"
                >
                  Nein danke
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
