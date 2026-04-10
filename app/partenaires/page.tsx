import type { Metadata } from "next";
import PartenairesClient from "./PartenairesClient";
import { createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Partenaires & plateformes — Réseau et liens de confiance",
  description:
    "Sélection de plateformes et annuaires. Transparence et collaborations orientées qualité.",
  path: "/partenaires",
  ogImagePath: "/og/partenaires.jpg",
});

export default function Partenaires() {
  return <PartenairesClient />;
}