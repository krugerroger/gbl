import type { Metadata } from "next";
import RevelationsClient from "./RevelationsClient";
import { createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Révélations — Confidences, hygiène de vie & art de la rencontre",
  description:
    "Confidences et vision : qualité, préparation, élégance et épicurisme. Une lecture pour mieux me découvrir.",
  path: "/revelations",
  ogImagePath: "/og/revelations.jpg",
});

export default function RevelationsPage() {
  return <RevelationsClient />;
}
