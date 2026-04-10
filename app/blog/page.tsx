import type { Metadata } from "next";
import BlogClient from "./BlogClient";
import { createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Journal sensuel — Articles, conseils & confidences",
  description:
    "Articles et confidences : humeurs, conseils et actualités. Parcourez le journal sensuel de Gabriella.",
  path: "/blog",
  ogImagePath: "/og/blog.jpg",
});

export default function BlogPage() {
  return <BlogClient />;
}
