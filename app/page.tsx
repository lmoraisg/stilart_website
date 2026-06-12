"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FAQ from "@/components/FAQ";

const kategorien = [
  { label: "Dutz", href: "/produkte/dutz", img: "/assets/dutz/dutz-1.jpg" },
  { label: "Räder", href: "/produkte/raeder", img: "/assets/generell/raeder-teaser.jpg" },
  { label: "Handtücher", href: "/produkte/handtuecher", img: "/assets/handtuecher/handtuch-1.jpg" },
  { label: "Kinderartikel", href: "/produkte/kinderartikel", img: "/assets/kinder/kinder-1.jpg" },
  { label: "Accessoires", href: "/produkte/accessoires", img: "/assets/accessoires/accessoire-1.jpg" },
  { label: "Gourmet", href: "/produkte/gourmet", img: "/assets/gourmet/gourmet-1.jpg" },
  { label: "Geschirr", href: "/produkte/geschirr", img: "/assets/generell/geschirr-teaser.jpg" },
  { label: "Herren", href: "/produkte/herren", img: "/assets/herren/herren-1.jpg" },
  { label: "Pralinen", href: "/produkte/pralinen", img: "/assets/pralinen/IMG-20251110-WA0035.jpg" },
  { label: "Reisenthel", href: "/produkte/reisenthel", img: "/assets/reisenthel/reisenthel-1.jpg" },
];

function CategoryGrid() {
  const [showAll, setShowAll] = useState(false);
  const visibleCategories = showAll ? kategorien : kategorien.slice(0, 8);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {visibleCategories.map((k) => (
          <Link
            key={k.href}
            href={k.href}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--beige-light)] shadow-sm transition-smooth transform-gpu hover:-translate-y-1 hover:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.3)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={k.img}
                alt={k.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 saturate-50 group-hover:saturate-100"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
            </div>
            <div className="flex-1 p-5 bg-white">
              <span className="text-base font-semibold text-[var(--foreground)]">{k.label}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={() => setShowAll((current) => !current)}
          className="bg-[var(--green-dark)] text-white text-xs tracking-widest px-8 py-4 rounded-full hover:bg-[var(--green)] transition-colors"
        >
          {showAll ? "Weniger anzeigen" : "Mehr Kategorien anzeigen"}
        </button>
      </div>
    </>
  );
}

export default function Startseite() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-end min-h-[85vh] overflow-hidden">
        <Image
          src="/assets/generell/header.jpg"
          alt="Stil [Art] Laden"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="text-xs tracking-widest text-[var(--beige-light)] mb-3 uppercase">
            Herzlich willkommen
          </p>
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight mb-4 animate-fade-in-up">
            Stil <span className="font-bold">[Art]</span>
          </h1>
          <p className="text-base text-gray-200 leading-relaxed max-w-md mb-8 animate-fade-in">
            Ihr Geschäft für schöne Dinge – Dekoration, Gourmet, Geschirr,
            Pralinen und vieles mehr. Schulstraße 1, Wietmarschen.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/produkte"
              className="bg-white text-[var(--green-dark)] text-xs tracking-widest px-8 py-4 rounded-full shadow-lg hover:bg-[var(--beige-light)] hover:-translate-y-0.5 active:scale-[0.98] transition-smooth font-medium"
            >
              PRODUKTE ENTDECKEN
            </Link>
            <Link
              href="/kontakt"
              className="border border-white bg-white/10 text-white text-xs tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-[var(--green-dark)] hover:-translate-y-0.5 active:scale-[0.98] transition-smooth"
            >
              KONTAKT
            </Link>
          </div>
        </div>
      </section>

      {/* Kategorien */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12 animate-fade-in-up">
          <p className="text-xs tracking-widest text-[var(--green)] mb-2 uppercase">Sortiment</p>
          <h2 className="text-3xl font-light text-[var(--foreground)]">Was wir für Sie haben</h2>
        </div>
        <CategoryGrid />
      </section>

      {/* Über uns Teaser */}
      <section style={{ background: "var(--beige-light)" }}>
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-widest text-[var(--green)] mb-3 uppercase">Wer wir sind</p>
            <h2 className="text-3xl font-light mb-6">Stil und Kunst – für jeden Anlass</h2>
            <p className="text-[var(--muted)] leading-relaxed mb-6">
              Bei Stil [Art] in Wietmarschen finden Sie eine sorgfältige Auswahl
              an Dekorationsartikeln, kulinarischen Köstlichkeiten, edlem
              Geschirr und besonderen Geschenkideen für jeden Anlass.
            </p>
            <Link
              href="/team"
              className="text-xs tracking-widest text-[var(--green-dark)] underline underline-offset-4 hover:text-[var(--green)] transition-colors"
            >
              UNSER TEAM KENNENLERNEN →
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl transition-smooth hover:shadow-[0_30px_90px_-40px_rgba(0,0,0,0.35)]">
            <Image
              src="/assets/generell/laden2.jpg"
              alt="Stil [Art] Laden Innen"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Events Teaser */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs tracking-widest text-[var(--green)] mb-2 uppercase">Aktuell</p>
            <h2 className="text-3xl font-light">Events & Neuigkeiten</h2>
          </div>
          <Link
            href="/events"
            className="text-xs tracking-widest text-[var(--muted)] border border-[var(--border)] rounded-full px-4 py-2 hover:text-[var(--green-dark)] hover:border-[var(--green)] transition-smooth hidden md:inline-flex"
          >
            ALLE EVENTS →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              img: "/assets/generell/laden4.jpg",
              label: "Jubiläum",
              title: "1-jähriges Jubiläum",
              subtitle: "3.–4. Juli 2026 · Wietmarschen",
              href: "/events/1-jaehriges-jubilaeum",
            },
          ].map((e, i) => (
            <Link key={i} href={e.href} className="group border border-[var(--border)] overflow-hidden rounded-3xl bg-white shadow-sm transition-smooth transform-gpu hover:-translate-y-1 hover:shadow-xl md:max-w-md">
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image src={e.img} alt={e.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-1" sizes="(max-width: 640px) 100vw, 33vw" />
              </div>
              <div className="p-5 transition-colors duration-300 group-hover:bg-[var(--beige-light)]">
                <p className="text-xs tracking-widest text-[var(--green)] mb-1">{e.label}</p>
                <h3 className="font-medium transition-colors duration-300 group-hover:text-[var(--green-dark)]">{e.title}</h3>
                <p className="text-sm text-[var(--muted)] mt-1">{e.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <FAQ />
    </>
  );
}
