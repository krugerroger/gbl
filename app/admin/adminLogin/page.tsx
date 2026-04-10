import type { Metadata } from "next";
import AdminLoginClient from "./AdminLoginClient";
import { createMetadata } from "@/app/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Connexion — Administration",
  description: "Accès réservé à l’administration.",
  path: "/admin/adminLogin",
  noindex: true,
});

export default function AdminLoginPage() {
  return <AdminLoginClient />;
}
