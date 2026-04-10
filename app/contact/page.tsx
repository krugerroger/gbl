import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contacter Gabriella — Disponibilités & échange discret",
  description:
    "Contact direct (téléphone, Telegram, WhatsApp). Posez vos questions et demandez une disponibilité en toute confidentialité.",
  path: "/contact",
  ogImagePath: "/og/contact.jpg",
});

export default function Contact() {
  return <ContactClient />;
}