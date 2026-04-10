'use client'

import Link from "next/link";
import { BookOpen, Calendar, ArrowRight, Star } from "lucide-react";
import { articles } from "../data/articles";


export default function BlogClient() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 font-serif selection:bg-amber-500/30">
      {/* HEADER */}
      <section className="pt-24 pb-16 px-6 text-center border-b border-zinc-900/50">
        <span className="text-[10px] uppercase tracking-[0.5em] text-amber-600 font-sans font-bold mb-4 block">
          Pensées & Confidences
        </span>
        <h1 className="text-4xl md:text-6xl text-white italic tracking-tighter mb-8">
          Le Journal Sensuel
        </h1>
        <p className="max-w-2xl mx-auto text-zinc-500 italic text-lg leading-relaxed">
          "Bienvenue dans mon univers intime. Ici, je partage avec vous mes
          humeurs, mes conseils et les actualités de ma vie de courtisane."
        </p>
        <div className="mx-auto mt-10 h-[1px] w-12 bg-amber-900" />
      </section>

      <main className="max-w-4xl mx-auto px-6 py-20">
        {/* LISTE DES ARTICLES */}
        <div className="space-y-32">
          {articles.map((post) => (
            <article key={post.id} className="group relative">
              <div className="flex flex-col md:flex-row gap-8 items-baseline">
                {/* DATE & CATEGORIE */}
                <div className="w-full md:w-32 flex-shrink-0 space-y-2">
                  <div className="flex items-center gap-2 text-[10px] font-sans uppercase tracking-widest text-amber-800 font-bold">
                    <Calendar size={12} />
                    <span>{post.date}</span>
                  </div>
                  <span className="block text-[9px] font-sans uppercase tracking-[0.3em] text-zinc-700">
                    {post.categorie}
                  </span>
                </div>

                {/* CONTENU */}
                <div className="flex-1 space-y-6">
                  <h2 className="text-3xl text-white italic group-hover:text-amber-500 transition-colors duration-500 leading-tight">
                    {post.titre}
                  </h2>
                  <p className="text-zinc-500 leading-relaxed italic text-lg border-l border-zinc-900 pl-8">
                    {post.extrait}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-4 text-xs font-sans uppercase tracking-[0.4em] text-white hover:text-amber-600 transition-all font-bold pt-4 group-hover:translate-x-2 duration-300"
                  >
                    Lire la suite <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* NEWSLETTER */}
        <section className="mt-40 pt-20 border-t border-zinc-900 text-center space-y-12">
          <div className="flex justify-center gap-3 text-amber-900 mb-4">
            <Star size={16} fill="currentColor" />
            <BookOpen size={20} />
            <Star size={16} fill="currentColor" />
          </div>
          <div className="space-y-6">
            <h3 className="text-white italic text-2xl">
              Restez informé de mes actualités
            </h3>
            <p className="text-zinc-500 italic max-w-md mx-auto">
              Inscrivez-vous pour recevoir mes dernières publications et être
              informé de mes déplacements en avant-première.
            </p>
            <div className="max-w-md mx-auto flex gap-4 pt-6">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 bg-transparent border-b border-zinc-800 focus:border-amber-900 outline-none px-2 py-4 text-sm font-sans italic"
              />
              <button className="text-[10px] uppercase tracking-widest text-amber-600 font-bold font-sans hover:text-white transition-colors">
                S'abonner
              </button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pt-32 text-center">
          <div className="inline-block p-10 border border-zinc-900 space-y-8">
            <p className="text-zinc-400 italic">
              "Certaines histoires méritent d'être vécues plutôt que lues..."
            </p>
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-white text-black uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-amber-600 hover:text-white transition-all duration-500"
            >
              Me rencontrer
            </Link>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-zinc-900 text-center">
        <p className="text-[10px] text-zinc-800 uppercase tracking-[0.5em] font-sans">
          Gabriella — Journal d'une courtisane
        </p>
      </footer>
    </div>
  );
}
