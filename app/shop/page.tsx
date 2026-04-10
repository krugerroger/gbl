import type { Metadata } from "next";
import ShopClient from "./ShopClient";
import { createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Boutique — Sélection plaisir & accessoires",
  description:
    "Accessoires et soins sélectionnés pour prolonger l’expérience. Catalogue discret, livraison sous pli anonyme.",
  path: "/shop",
  ogImagePath: "/og/shop.jpg",
});

export default function ShopPage() {
  return <ShopClient />;
}
