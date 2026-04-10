import type { Metadata } from "next";
import CommentairesTemoignagesClient from "./CommentairesTemoignagesClient";
import { createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Témoignages — Avis et retours d’expérience",
  description:
    "Découvrez des avis et témoignages. Partagez votre expérience de façon discrète.",
  path: "/commentaires-temoignages",
  ogImagePath: "/og/temoignages.jpg",
});

export default function CommentairesTemoignagesPage() {
  return <CommentairesTemoignagesClient />;
}
