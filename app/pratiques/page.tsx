import type { Metadata } from "next";
import PratiquesClient from "./PratiquesClient";
import { createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Pratiques & limites — Expériences et cadre de respect",
  description:
    "Liste des pratiques proposées et du cadre de respect. Transparence, consentement et limites clairement définies.",
  path: "/pratiques",
  ogImagePath: "/og/pratiques.jpg",
});

export default function PratiquesPage() {
  return <PratiquesClient />;
}
