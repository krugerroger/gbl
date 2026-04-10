import type { Metadata } from "next";
import HistoireClient from "./HistoireClient";
import { createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Mon histoire — Parcours, valeurs & philosophie",
  description:
    "Mon parcours et ma vision : élégance, authenticité et discrétion. Découvrez ce qui rend l’expérience unique.",
  path: "/histoire",
  ogImagePath: "/og/histoire.jpg",
});

export default function HistoirePage() {
  return <HistoireClient />;
}
