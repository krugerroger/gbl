import type { Metadata } from "next";
import CartConfirmationClient from "./CartConfirmationClient";
import { createMetadata } from "@/app/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Commande confirmée",
  description: "Merci pour votre commande (page de confirmation).",
  path: "/cart/confirmation",
  noindex: true,
});

export default function CartConfirmationPage() {
  return <CartConfirmationClient />;
}
