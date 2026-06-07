import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-auto" style={{ background: "#5c3d2e", color: "#f0e6d8" }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + Slogan */}
          <div>
            <div className="inline-block mb-4 px-3 py-2 rounded" style={{ background: "#f0e6d8" }}>
              <Image
                src="/logo-transparent.png"
                alt="Stil [Art] Logo"
                width={110}
                height={55}
                className="object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#d9c9b8" }}>
              Stil[Art] 
              <br />
              Dekoration | Accessoires | Gourmet
              <br />
              Schulstraße 1, 49835 Wietmarschen
            </p>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest mb-4 uppercase" style={{ color: "#c4a882" }}>
              Öffnungszeiten
            </h4>
            <div className="grid text-sm gap-y-1" style={{ color: "#d9c9b8", gridTemplateColumns: "72px 1fr" }}>
              <span>Montag</span>     <span>Geschlossen</span>
              <span>Di – Fr</span>    <span>9:00 – 12:30<br />14:30 – 18:00</span>
              <span>Samstag</span>    <span>9:00 – 12:30</span>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest mb-4 uppercase" style={{ color: "#c4a882" }}>
              Kontakt
            </h4>
            <address className="not-italic text-sm leading-loose" style={{ color: "#d9c9b8" }}>
              <strong style={{ color: "#f0e6d8" }}>Michaela da Cunha</strong>
              <br />
              <a href="tel:059259988977" className="transition-colors hover:text-white">
                05925 / 9988977
              </a>
              <br />
              <a href="mailto:michaela.cunha@stilart-studio.com" className="transition-colors hover:text-white break-all">
                michaela.cunha@stilart-studio.com
              </a>
            </address>
            {/* Social */}
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                aria-label="Facebook"
                className="transition-colors hover:text-white"
                style={{ color: "#d9c9b8" }}
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="transition-colors hover:text-white"
                style={{ color: "#d9c9b8" }}
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: "1px solid #7a5240", color: "#a87e6a" }}
        >
          <p>© {new Date().getFullYear()} Stil [Art] – Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="transition-colors hover:text-white">Impressum</Link>
            <Link href="/datenschutz" className="transition-colors hover:text-white">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
