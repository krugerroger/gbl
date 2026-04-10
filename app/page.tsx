import type { Metadata } from "next";
import { createMetadata } from "./lib/seo";
import HomeClient from "./HomeClient";

export const metadata: Metadata = createMetadata({
  title: "Gabriella Indépendante — Escort VIP & massages d’exception en France",
  description:
    "Escort indépendante et masseuse professionnelle. Expériences raffinées, discrétion absolue, rendez-vous sur réservation en France et à l’étranger.",
  path: "/",
  ogImagePath: "/og-image.png",
});

export default function Home() {
  return <HomeClient />;
}