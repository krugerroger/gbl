import type { Metadata } from "next";

type CreateMetadataInput = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  ogImagePath?: `/${string}`;
  noindex?: boolean;
  openGraphType?: "website" | "article";
};

function getSiteUrl(): URL {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "http://localhost:3000";
  return new URL(raw);
}

function absUrl(path: string): string {
  return new URL(path, getSiteUrl()).toString();
}

export function createMetadata(input: CreateMetadataInput): Metadata {
  const url = absUrl(input.path);
  const ogImage = absUrl(input.ogImagePath ?? "/og-image.png");

  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    robots: input.noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: input.openGraphType ?? "website",
      url,
      title: input.title,
      description: input.description,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
  };
}

export function createArticleMetadata(input: {
  title: string;
  description: string;
  path: `/${string}`;
  ogImagePath?: `/${string}`;
}): Metadata {
  return createMetadata({
    ...input,
    openGraphType: "article",
  });
}

