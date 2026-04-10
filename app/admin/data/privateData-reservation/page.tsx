import type { Metadata } from "next";
import PrivateDataReservationClient from "./PrivateDataReservationClient";
import { createMetadata } from "@/app/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Registre — Réservations",
  description: "Tableau de bord réservé (données privées).",
  path: "/admin/data/privateData-reservation",
  noindex: true,
});

export default function PrivateDataReservationPage() {
  return <PrivateDataReservationClient />;
}
