import type { Metadata } from "next";
import PrestationsClient from "./PrestationsClient";
import { createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Prestations — Massage, accompagnement & expériences VIP",
  description:
    "Découvrez mes prestations : massages (tantrique, body body…), accompagnement, expériences sur mesure, en toute discrétion.",
  path: "/prestations",
  ogImagePath: "/og/prestations.jpg",
});

export default function PrestationsPage() {
  return <PrestationsClient />;
}
