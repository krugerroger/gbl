import type { Metadata } from "next";
import TarifsClient from "./TarifsClient";
import { createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Tarifs & formules — Rendez-vous, soirée, nuit complète",
  description:
    "Tarifs clairs et formules : 1h à nuit complète. Une expérience premium, élégante, sur réservation.",
  path: "/tarifs",
  ogImagePath: "/og/tarifs.jpg",
});

export default function TarifsPage() {
  return <TarifsClient />;
}
