import type { Metadata } from "next";
import Link from "next/link";
import { use } from "react";
import { ChevronLeft, Share2, Bookmark, Eye, Calendar, Heart } from "lucide-react";
import { notFound } from "next/navigation";
import { articles } from "@/app/data/articles";
import { createArticleMetadata } from "@/app/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ article: string }>;
}): Promise<Metadata> {
  const { article: slug } = await params;
  const post = articles.find((a) => a.id === slug);
  if (!post) {
    return { title: "Article" };
  }
  const ogPath =
    post.image.startsWith("/") ? (post.image as `/${string}`) : "/og/default.jpg";
  return createArticleMetadata({
    title: `${post.titre} — Journal`,
    description: post.extrait,
    path: `/blog/${slug}`,
    ogImagePath: ogPath,
  });
}

// ─── generateStaticParams ────────────────────────────────────────────────────
// Tells Next.js which slugs to pre-render at build time (SSG).
export function generateStaticParams() {
  return articles.map((article) => ({ article: article.id }));
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default function ArticlePage({
  params,
}: {
  params: Promise<{ article: string }>;
}) {
  // In Next.js 15 App Router, params is a Promise — unwrap with `use()`.
  const { article: slug } = use(params);

  const post = articles.find((a) => a.id === slug);

  // Hard 404 when the slug doesn't match any known article.
  if (!post) notFound();

  // Articles adjacents (prev / next)
  const currentIndex = articles.findIndex((a) => a.id === slug);
  const prevArticle = articles[currentIndex - 1] ?? null;
  const nextArticle = articles[currentIndex + 1] ?? null;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 font-serif selection:bg-amber-500/30">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-zinc-900 px-6 py-4 flex justify-between items-center">
        <Link
          href="/blog"
          className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-zinc-500 hover:text-white transition-all"
        >
          <ChevronLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Le Journal
        </Link>
        <div className="flex gap-6 items-center">
          <button className="text-zinc-600 hover:text-amber-700 transition-colors">
            <Share2 size={16} />
          </button>
          <button className="text-zinc-600 hover:text-amber-700 transition-colors">
            <Bookmark size={16} />
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <span className="text-[10px] uppercase tracking-[0.6em] text-amber-700 font-sans font-bold block">
            {post.categorie}
          </span>
          <h1 className="text-5xl md:text-7xl text-white italic tracking-tighter leading-tight">
            {post.titre}
          </h1>
        </div>

        <div className="flex items-center justify-center gap-8 text-[10px] uppercase tracking-widest font-sans text-zinc-600 border-y border-zinc-900 py-6">
          <div className="flex items-center gap-2">
            <Calendar size={12} className="text-amber-900" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye size={12} className="text-amber-900" />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart size={12} className="text-amber-900" />
            <span>{post.likes} Likes</span>
          </div>
        </div>
      </header>

      {/* IMAGE */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="aspect-[21/9] relative overflow-hidden border border-zinc-900 grayscale hover:grayscale-0 transition-all duration-1000 group">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${post.image}')` }}
          />
        </div>
        <p className="text-[9px] uppercase tracking-widest text-zinc-700 mt-4 text-right font-sans italic">
          Photographie d'ambiance — Collection Privée Gabriella
        </p>
      </section>

      {/* CORPS DE L'ARTICLE */}
      <article className="max-w-3xl mx-auto px-6 pb-32">
        <div className="space-y-12 text-lg leading-relaxed italic text-zinc-400">
          {post.contenu.map((block, i) => {
            switch (block.type) {
              case "intro":
                return (
                  <p
                    key={i}
                    className="first-letter:text-7xl first-letter:font-bold first-letter:text-amber-800 first-letter:mr-3 first-letter:float-left"
                  >
                    {block.text}
                  </p>
                );
              case "h2":
                return (
                  <h2
                    key={i}
                    className="text-3xl text-white italic tracking-tight mt-16 mb-6"
                  >
                    {block.text}
                  </h2>
                );
              case "p":
                return <p key={i}>{block.text}</p>;
              case "blockquote":
                return (
                  <blockquote
                    key={i}
                    className="border-l-2 border-amber-900 pl-8 py-4 my-12"
                  >
                    <p className="text-2xl text-white italic tracking-tight leading-relaxed">
                      {block.text}
                    </p>
                  </blockquote>
                );
              default:
                return null;
            }
          })}
        </div>

        {/* SIGNATURE */}
        <div className="mt-20 pt-10 border-t border-zinc-900 flex flex-col items-center gap-6">
          <div className="w-16 h-[1px] bg-amber-900" />
          <p className="text-white italic text-xl font-light">Gabriella</p>
          <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-sans font-bold text-amber-700 hover:text-white transition-colors">
            <Heart size={14} /> Liker cet article
          </button>
        </div>
      </article>

      {/* NAVIGATION PREV / NEXT */}
      {(prevArticle || nextArticle) && (
        <section className="max-w-4xl mx-auto px-6 pb-24">
          <div className="border-t border-zinc-900 pt-16 grid grid-cols-2 gap-8">
            {/* Article précédent */}
            <div>
              {prevArticle && (
                <Link
                  href={`/blog/${prevArticle.id}`}
                  className="group flex flex-col gap-2"
                >
                  <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-700 font-sans flex items-center gap-2">
                    <ChevronLeft size={10} /> Article précédent
                  </span>
                  <span className="text-zinc-400 italic group-hover:text-white transition-colors text-sm leading-relaxed">
                    {prevArticle.titre}
                  </span>
                </Link>
              )}
            </div>

            {/* Article suivant */}
            <div className="text-right">
              {nextArticle && (
                <Link
                  href={`/blog/${nextArticle.id}`}
                  className="group flex flex-col gap-2 items-end"
                >
                  <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-700 font-sans flex items-center gap-2">
                    Article suivant <ChevronLeft size={10} className="rotate-180" />
                  </span>
                  <span className="text-zinc-400 italic group-hover:text-white transition-colors text-sm leading-relaxed">
                    {nextArticle.titre}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ARTICLES LIÉS */}
      <section className="bg-zinc-950 border-t border-zinc-900 py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex justify-between items-end">
            <h3 className="text-2xl text-white italic">Poursuivre la lecture</h3>
            <Link
              href="/blog"
              className="text-[10px] uppercase tracking-widest text-zinc-500 hover:text-amber-600 transition-colors font-sans font-bold border-b border-zinc-800 pb-1"
            >
              Voir tout
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {articles
              .filter((a) => a.id !== slug)
              .slice(0, 2)
              .map((item) => (
                <Link key={item.id} href={`/blog/${item.id}`} className="group space-y-4">
                  <div className="aspect-video bg-zinc-900 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border border-zinc-900">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-1000"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-amber-900 font-sans font-bold">
                      {item.categorie}
                    </span>
                    <h4 className="text-xl text-zinc-300 group-hover:text-white transition-colors italic">
                      {item.titre}
                    </h4>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-zinc-900">
        <p className="text-[10px] text-zinc-800 uppercase tracking-[0.5em] font-sans">
          Gabriella — Le Journal — 2026
        </p>
      </footer>
    </div>
  );
}