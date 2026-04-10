import type { Metadata } from "next";
import CgvClient from "./CgvClient";
import { createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Conditions & FAQ — Cadre, discrétion et règles",
  description:
    "FAQ, conditions et cadre des échanges : respect, ponctualité, confidentialité et modalités.",
  path: "/cgv",
  ogImagePath: "/og/conditions.jpg",
});

export default function CgvPage() {
  return <CgvClient />;
}
