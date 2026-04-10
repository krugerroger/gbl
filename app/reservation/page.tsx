import type { Metadata } from "next";
import ReservationClient from "./ReservationClient";
import { createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Réserver un moment — Disponibilités & confirmation",
  description:
    "Demande de réservation en ligne : choisissez la durée, la date et transmettez votre validation. Confirmation sous 24h.",
  path: "/reservation",
  ogImagePath: "/og/reservation.jpg",
});

export default function Reservation() {
  return <ReservationClient />;
}