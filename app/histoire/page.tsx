'use client'

import Link from "next/link";
import Image from "next/image";
import { Feather, Quote, Heart, Sparkles, Camera, MapPin, ShieldCheck } from "lucide-react";

export default function MonHistoire() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 font-serif selection:bg-amber-500/30">
      
      {/* HERO SECTION - L'INVITATION */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#0a0a0a]" />
           {/* Emplacement pour une photo d'ambiance type boudoir ou portrait artistique */}
           <div className="w-full h-full bg-[url('/images/background-story.jpg')] bg-cover bg-center grayscale" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <span className="text-[10px] uppercase tracking-[0.6em] text-amber-600 font-sans font-bold mb-6 block">
            L'Essence de Gabriella
          </span>
          <h1 className="text-5xl md:text-7xl text-white italic tracking-tighter mb-4">
            Mon Histoire
          </h1>
          <div className="mx-auto h-[1px] w-20 bg-amber-900 mt-8" />
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-6 py-24">
        
        {/* INTRODUCTION - LE MANIFESTE */}
        <section className="mb-32 space-y-12">
          <Quote className="text-amber-900/30 mx-auto" size={48} strokeWidth={1} />
          <div className="text-center space-y-8">
            <h2 className="text-3xl text-white italic leading-tight">
              "Je ne suis pas simplement une escorte, <br />
              je suis la curatrice de vos moments d'exception."
            </h2>
            <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl mx-auto italic">
              Bienvenue dans mon univers. Je m'appelle Gabriella, et mon parcours est celui d'une femme qui a choisi de faire de la rencontre un art majeur. Loin des clichés, je cultive une approche où l'esprit et le corps s'harmonisent.
            </p>
          </div>
        </section>

        {/* CONTENU PRINCIPAL - TEXTE COMPLET */}
        <section className="grid gap-24">
          
          {/* Bloc 1 : Origines & Philosophie */}
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2 space-y-4">
               <span className="text-[9px] uppercase tracking-widest text-amber-800 font-sans font-bold">Chapitre I</span>
               <h3 className="text-2xl text-white italic">L'éveil des sens</h3>
            </div>
            <div className="md:col-span-3 space-y-6 text-zinc-400 leading-relaxed italic">
              <p>
                Originaire de la ville lumière, j'ai toujours été fascinée par l'élégance à la française et la psychologie humaine. Mon histoire ne commence pas par une nécessité, mais par une curiosité profonde pour l'autre.
              </p>
              <p>
                Après des études en communication et une carrière éphémère dans le luxe, j'ai réalisé que ce qui me manquait était le contact humain véritable, sans masque et sans artifice. J'ai alors décidé de devenir indépendante pour offrir ce que le monde moderne oublie trop souvent : l'attention exclusive.
              </p>
            </div>
          </div>

          {/* Bloc Intermédiaire : Image ou Citation large */}
          <div className="py-12 border-y border-zinc-900/50 flex flex-col items-center gap-6">
             <Feather className="text-amber-900" size={32} strokeWidth={1} />
             <p className="text-center text-zinc-500 italic max-w-xl">
               "Chaque gentleman que je rencontre est un livre que j'aime parcourir. Vos récits, vos ambitions et vos désirs sont le moteur de ma passion."
             </p>
          </div>

          {/* Bloc 2 : Ma Vision du Métier */}
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 order-2 md:order-1 space-y-6 text-zinc-400 leading-relaxed italic">
              <p>
                Pour moi, une rencontre réussie est une alchimie subtile. C'est l'intelligence d'une conversation lors d'un dîner étoilé, suivie de la douceur d'un effleurement dans l'intimité d'une suite parisienne. 
              </p>
              <p>
                Mon indépendance est ma force. Elle me permet de choisir mes partenaires de rencontre sur des critères de respect mutuel et de courtoisie. Je ne vends pas du temps, je propose une parenthèse hors du monde, où vous êtes le seul centre de l'univers.
              </p>
            </div>
            <div className="md:col-span-2 order-1 md:order-2 space-y-4 md:text-right">
               <span className="text-[9px] uppercase tracking-widest text-amber-800 font-sans font-bold">Chapitre II</span>
               <h3 className="text-2xl text-white italic">Une vision singulière</h3>
            </div>
          </div>

          {/* Bloc 3 : Engagements & Valeurs */}
          <div className="bg-zinc-950 p-12 border border-zinc-900 space-y-10">
            <div className="text-center space-y-2">
              <h3 className="text-white text-xl italic uppercase tracking-widest text-sm">Mes piliers de vie</h3>
              <div className="h-[1px] w-10 bg-amber-900 mx-auto" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <ShieldCheck className="mx-auto text-amber-700" size={24} />
                <h4 className="text-white text-[10px] uppercase tracking-widest font-sans">Discrétion</h4>
                <p className="text-xs text-zinc-600 italic">Un secret partagé qui ne franchira jamais le seuil de notre porte.</p>
              </div>
              <div className="text-center space-y-4">
                <Sparkles className="mx-auto text-amber-700" size={24} />
                <h4 className="text-white text-[10px] uppercase tracking-widest font-sans">Authenticité</h4>
                <p className="text-xs text-zinc-600 italic">Pas de faux-semblants, juste une femme entière et passionnée.</p>
              </div>
              <div className="text-center space-y-4">
                <Heart className="mx-auto text-amber-700" size={24} />
                <h4 className="text-white text-[10px] uppercase tracking-widest font-sans">Élégance</h4>
                <p className="text-xs text-zinc-600 italic">Le raffinement du geste, de la parole et de l'esprit.</p>
              </div>
            </div>
          </div>

        </section>

        {/* SECTION FOOTER STORY - CTA */}
        <section className="mt-32 pt-20 border-t border-zinc-900 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl text-white italic">Prêt à écrire la suite ?</h2>
            <p className="text-zinc-500 italic">
              Mon histoire continue chaque jour grâce à vous. 
              Si mon univers fait écho au vôtre, je serais ravie de vous rencontrer.
            </p>
          </div>
          <div className="flex justify-center gap-6">
            <Link 
              href="/reservation" 
              className="px-10 py-4 bg-white text-black uppercase tracking-[0.2em] text-[9px] font-bold hover:bg-amber-600 hover:text-white transition-all duration-500"
            >
              Réserver une rencontre
            </Link>
            <Link 
              href="/contact" 
              className="px-10 py-4 border border-zinc-800 text-zinc-500 uppercase tracking-[0.2em] text-[9px] font-bold hover:border-amber-900 hover:text-amber-500 transition-all duration-500"
            >
              Me poser une question
            </Link>
          </div>
        </section>

      </main>

      {/* FOOTER BASIQUE */}
      <footer className="py-20 border-t border-zinc-900 text-center">
        <div className="flex justify-center gap-8 mb-8 text-zinc-800">
           <Camera size={18} />
           <MapPin size={18} />
           <Heart size={18} />
        </div>
        <p className="text-[10px] text-zinc-800 uppercase tracking-[0.5em] font-sans">
          Gabriella — France — 2026
        </p>
      </footer>
    </div>
  );
}