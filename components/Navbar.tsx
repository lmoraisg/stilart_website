"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: "STARTSEITE", href: "/" },
  {
    label: "PRODUKTE",
    href: "/produkte",
    children: [
      { label: "Dutz", href: "/produkte/dutz" },
      { label: "Räder", href: "/produkte/raeder" },
      { label: "Handtücher", href: "/produkte/handtuecher" },
      { label: "Kinderartikel", href: "/produkte/kinderartikel" },
      { label: "Accessoires", href: "/produkte/accessoires" },
      { label: "Gourmet", href: "/produkte/gourmet" },
      { label: "Geschirr", href: "/produkte/geschirr" },
      { label: "Herren", href: "/produkte/herren" },
      { label: "Pralinen", href: "/produkte/pralinen" },
      { label: "Reisenthel", href: "/produkte/reisenthel" },
    ],
  },
  {
    label: "EVENTS",
    href: "/events",
    children: [],
  },
  {
    label: "EINRICHTUNG",
    href: "/einrichtung",
    children: [],
  },
  { label: "TEAM", href: "/team" },
  { label: "JOBS", href: "/jobs" },
  { label: "KONTAKT", href: "/kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-[var(--background)] border-b border-[var(--border)]">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Stil [Art] Logo"
            width={120}
            height={60}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li
              key={item.href}
              className="relative"
              onMouseEnter={() =>
                item.children?.length && setOpenMenu(item.href)
              }
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className={`text-xs tracking-widest transition-colors hover:text-[var(--green-dark)] ${
                  isActive(item.href)
                    ? "font-bold text-[var(--green-dark)]"
                    : "font-medium text-[var(--muted)]"
                }`}
              >
                {item.label}
              </Link>

              {/* Dropdown */}
              {item.children && item.children.length > 0 && openMenu === item.href && (
                <div className="absolute top-full left-0 mt-2 bg-[var(--background)] border border-[var(--border)] rounded-3xl shadow-lg min-w-48 py-2 overflow-hidden">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-5 py-2.5 text-sm text-[var(--muted)] hover:text-[var(--green-dark)] hover:bg-[var(--beige-light)] transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-full bg-[var(--background)] shadow-sm"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü öffnen"
        >
          <span className={`block w-6 h-0.5 bg-[var(--foreground)] transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[var(--foreground)] transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[var(--foreground)] transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--background)] px-6 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <div key={item.href}>
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={() => !item.children?.length && setMobileOpen(false)}
                  className={`py-3 text-xs tracking-widest ${
                    isActive(item.href)
                      ? "font-bold text-[var(--green-dark)]"
                      : "font-medium text-[var(--muted)]"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && item.children.length > 0 && (
                  <button
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === item.href ? null : item.href
                      )
                    }
                    className="p-2 text-[var(--muted)]"
                  >
                    {mobileExpanded === item.href ? "−" : "+"}
                  </button>
                )}
              </div>
              {item.children && item.children.length > 0 && mobileExpanded === item.href && (
                <div className="ml-4 mb-2 flex flex-col border-l border-[var(--border)] pl-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-2 text-sm text-[var(--muted)] hover:text-[var(--green-dark)]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
