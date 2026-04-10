import type { Metadata } from "next";
import CartDetailsClient from "./CartDetailsClient";
import { createMetadata } from "@/app/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Panier — Finaliser la commande",
  description: "Récapitulatif et finalisation de commande (page privée).",
  path: "/cart/details",
  noindex: true,
});

export default function CartDetailsPage() {
  return <CartDetailsClient />;
}
