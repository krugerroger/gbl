import type { Metadata } from "next";
import GalerieClient from "./GalerieClient";
import { createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Galerie privée — Photographies & univers de Gabriella",
  description:
    "Découvrez la galerie : séries boudoir, lingerie et lifestyle. Un aperçu élégant de mon univers.",
  path: "/galerie",
  ogImagePath: "/og/galerie.jpg",
});

export default function GaleriePage() {
  return <GalerieClient />;
}
