import type { Metadata } from "next";
import EinrichtungClient from "@/app/einrichtung/EinrichtungClient";

export const metadata: Metadata = {
  title: "Einrichtung",
  description: "So gestalten wir Räume – Einrichtungsplanung, Dekoration und Rauminszenierung bei Stil [Art].",
};

export default function EinrichtungSeite() {
  return <EinrichtungClient />;
}
