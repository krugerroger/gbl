'use client'

import Link from "next/link";
import { Quote, Star, MessageSquare, PenLine, Heart, CheckCircle2 } from "lucide-react";

export default function Temoignages() {
  const avis = [
    {
      nom: "Marc-Antoine",
      date: "Mars 2026",
      commentaire: "Une rencontre qui dépasse toutes les attentes. Gabriella possède cette rare élégance qui transforme un moment simple en un souvenir impérissable. Sa douceur n'a d'égal que sa sensualité.",
      note: 5
    },
    {
      nom: "Julien R.",
      date: "Février 2026",
      commentaire: "Le massage tantrique est une véritable révélation. On sent l'expérience et la passion dans chaque geste. Une parenthèse enchantée que je recommande vivement à ceux qui cherchent l'exception.",
      note: 5
    },
    {
      nom: "Thomas V.",
      date: "Janvier 2026",
      commentaire: "Discrétion, ponctualité et un charme fou. Gabriella sait mettre à l'aise immédiatement. La soirée 'Délice' porte parfaitement son nom.",
      note: 5
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 font-serif selection:bg-amber-500/30">
      
      {/* HEADER ÉDITORIAL */}
      <section className="pt-24 pb-16 px-6 text-center border-b border-zinc-900/50">
        <span className="text-[10px] uppercase tracking-[0.5em] text-amber-600 font-sans font-bold mb-4 block">
          L'Écho de vos Sensations
        </span>
        <h1 className="text-4xl md:text-6xl text-white italic tracking-tighter mb-8">
          Commentaires & Témoignages
        </h1>
        <div className="max-w-3xl mx-auto space-y-6 text-zinc-500 italic text-lg leading-relaxed">
          <p>
            Votre satisfaction est ma plus belle récompense. Découvrez les récits de ceux qui ont croisé mon chemin 
            et partagé un instant de ma vie.
          </p>
        </div>
        <div className="mx-auto mt-10 h-[1px] w-12 bg-amber-900" />
      </section>

      <main className="max-w-4xl mx-auto px-6 py-20">
        
        {/* STATISTIQUES DISCRÈTES */}
        <section className="flex justify-around mb-24 py-8 border-y border-zinc-900/30">
          <div className="text-center space-y-1">
            <p className="text-white text-2xl font-sans font-light">100%</p>
            <p className="text-[9px] uppercase tracking-widest text-amber-900 font-sans font-bold">Satisfaction</p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-white text-2xl font-sans font-light">4.9/5</p>
            <div className="flex gap-1 justify-center text-amber-600">
              {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
            </div>
          </div>
          <div className="text-center space-y-1">
            <p className="text-white text-2xl font-sans font-light">Discrétion</p>
            <p className="text-[9px] uppercase tracking-widest text-amber-900 font-sans font-bold">Garantie</p>
          </div>
        </section>

        {/* LISTE DES TÉMOIGNAGES */}
        <section className="space-y-24">
          {avis.map((item, i) => (
            <div key={i} className="relative group">
              <Quote 
                className="absolute -left-8 -top-4 text-zinc-900 group-hover:text-amber-900/20 transition-colors duration-700" 
                size={80} 
                strokeWidth={1} 
              />
              
              <div className="relative space-y-6 pl-6 border-l border-zinc-900 group-hover:border-amber-900/50 transition-all duration-700">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-xl text-white italic">{item.nom}</h3>
                    <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-zinc-600">{item.date}</p>
                  </div>
                  <div className="flex gap-1 text-amber-700/50">
                    {[...Array(item.note)].map((_, s) => <Star key={s} size={12} fill="currentColor" />)}
                  </div>
                </div>

                <p className="text-lg text-zinc-400 leading-relaxed italic">
                  "{item.commentaire}"
                </p>

                <div className="flex items-center gap-2 text-[9px] font-sans uppercase tracking-widest text-zinc-700">
                  <CheckCircle2 size={12} className="text-amber-900" />
                  Profil Vérifié
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* FORMULAIRE D'AVIS DISCRET */}
        <section className="mt-40 pt-20 border-t border-zinc-900">
          <div className="bg-zinc-950/30 p-12 border border-zinc-900/50 space-y-10">
            <div className="text-center space-y-4">
              <PenLine className="mx-auto text-amber-900" size={32} strokeWidth={1} />
              <h2 className="text-2xl text-white italic">Partager votre expérience</h2>
              <p className="text-sm text-zinc-500 italic max-w-md mx-auto">
                Votre avis est précieux. Il aide les futurs gentlemen à faire leur choix en toute confiance. 
                Seul votre prénom (ou pseudonyme) sera affiché.
              </p>
            </div>

            <form className="grid gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Nom ou Pseudonyme" 
                  className="bg-transparent border-b border-zinc-800 focus:border-amber-900 outline-none px-2 py-4 text-sm font-sans italic transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Email (ne sera pas publié)" 
                  className="bg-transparent border-b border-zinc-800 focus:border-amber-900 outline-none px-2 py-4 text-sm font-sans italic transition-colors"
                />
              </div>
              <textarea 
                rows={4} 
                placeholder="Votre message..." 
                className="bg-transparent border-b border-zinc-800 focus:border-amber-900 outline-none px-2 py-4 text-sm font-sans italic transition-colors resize-none"
              />
              <div className="text-center pt-6">
                <button className="px-12 py-5 bg-white text-black uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-amber-600 hover:text-white transition-all duration-500">
                  Envoyer mon témoignage
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="pt-32 text-center space-y-12">
          <div className="space-y-4">
            <Heart size={24} className="mx-auto text-amber-900" />
            <p className="text-zinc-500 italic max-w-md mx-auto">
              "La plus belle des histoires est celle que nous n'avons pas encore écrite ensemble."
            </p>
          </div>
          <Link 
            href="/reservation" 
            className="inline-block px-12 py-5 border border-zinc-800 text-zinc-400 uppercase tracking-[0.3em] text-[10px] font-bold hover:border-amber-900 hover:text-amber-500 transition-all"
          >
            Écrire notre chapitre
          </Link>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="py-20 border-t border-zinc-900 text-center">
        <p className="text-[10px] text-zinc-800 uppercase tracking-[0.5em] font-sans">
          Gabriella — Authenticité & Volupté
        </p>
      </footer>
    </div>
  );
}