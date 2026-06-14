"use client";

import { useState } from "react";
import Image from "next/image";

type Rezept = {
  title: string;
  image: string;
  excerpt: string;
  ingredients: string[];
  steps: string[];
};

type Props = {
  rezepte: Rezept[];
};

export default function GourmetRecipeTabs({ rezepte }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeRecipe = rezepte[activeIndex];

  return (
    <section className="mt-20">
      <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-[var(--green)] mb-2">Rezepte</p>
          <h2 className="text-4xl font-black tracking-tight">Rezepte zum Nachmachen</h2>
        </div>
        <p className="text-[var(--muted)] max-w-sm text-sm leading-relaxed">
          Wähle ein Rezept aus und entdecke die Zutaten, Schritte und das passende Bild dazu.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-3 rounded-full border border-[var(--border)] bg-[var(--beige-light)] p-2">
          {rezepte.map((rezept, index) => (
            <button
              key={rezept.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                index === activeIndex
                  ? "bg-[var(--green-dark)] text-white shadow-sm"
                  : "text-[var(--foreground)] hover:bg-white"
              }`}
            >
              {rezept.title}
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-[var(--border)] bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[var(--green)] mb-2">{activeRecipe.title}</p>
                <p className="text-lg font-semibold text-[var(--foreground)]">{activeRecipe.excerpt}</p>
              </div>

              <div>
                <h3 className="text-base font-semibold mb-3">Zutaten</h3>
                <ul className="grid gap-2 sm:grid-cols-2 text-sm text-[var(--muted)] list-disc pl-5">
                  {activeRecipe.ingredients.map((ingredient) => (
                    <li key={ingredient}>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold mb-3">Zubereitung</h3>
                <ol className="list-decimal list-inside space-y-3 text-sm text-[var(--muted)]">
                  {activeRecipe.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--beige-light)] shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src={activeRecipe.image}
                alt={activeRecipe.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
