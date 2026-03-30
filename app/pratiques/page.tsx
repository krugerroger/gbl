'use client'

import Link from "next/link";
import Image from "next/image";
import { Sparkles, XCircle, Heart, Star, Check, ShieldAlert } from "lucide-react";

export default function Pratiques() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 font-serif selection:bg-amber-500/30">
      
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/1.jpeg" // Remplacez par votre image de fond
            alt="Ambiance luxueuse"
            fill
            className="object-cover opacity-40 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/80" />
        </div>
        <div className="relative z-10 text-center px-6">
            <span className="text-[10px] uppercase tracking-[0.5em] text-amber-600 font-sans font-bold mb-4 block">
            Art de Vivre & Érotisme
            </span>
            <h1 className="text-5xl md:text-7xl text-white italic tracking-tighter mb-8">
            Mes Pratiques
            </h1>
            <div className="mx-auto h-[1px] w-12 bg-amber-900" />
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-32">
          
          {/* SECTION : CE QUE JE FAIS */}
          <section className="space-y-16">
            <header className="text-center">
              <h2 className="text-xs uppercase tracking-[0.4em] text-amber-600 font-sans font-bold mb-4">
                L'Éventail de mes Plaisirs
              </h2>
              <p className="text-zinc-300 italic">
                Découvrez comment vous faire plaisir en me faisant plaisir...
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-4 border-t border-zinc-900 pt-12">
              {[
                "GFE : Girl Friend Experience", "PSE : Porn Star Experience", 
                "Extraball : plusieurs rapports en 1h", "Accompagnement Club Échangiste / Sauna",
                "Massage Érotique naturiste", "Massage BodyBody Thaï", 
                "Massage en Duo à 4 mains", "Massage du Lingam", "Massage Couple",
                "Show Web Cam visio", "Strip Tease / Effeuillage burlesque",
                "Longs Préliminaires", "Jeux de rôles / Scénario HOT", 
                "Paroles coquines", "Kamasutra et 69 (péché mignon : levrette)",
                "Être dominée (avec respect)", "Fétish pieds", 
                "BDSM : Maîtresse Domina / Initiation SM", "Facesitting", "Handjob",
                "Douce ou sauvage / Ange ou Démon", "Branlette / Branlette espagnole",
                "Fellation nature ou protégée", "Finition corporelle (sauf visage)",
                "Sex toys (pour moi et pour vous)", "Travail anal / Massage prostatique",
                "French Kiss : Embrasser avec la langue", "Trio HOT : Couple ou HFF",
                "Conversation excitante : mots crus et fessées", "Anal (sur moi ou sur vous)",
                "Cunnilingus et Anulingus (sur moi)", "Fist (vaginal uniquement)", "Douche dorée (donneuse)"
              ].map((pratique, index) => (
                <div key={index} className="flex items-center gap-4 py-3 border-b border-zinc-900/30 group">
                  <Check size={12} className="text-amber-700 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span className="text-[15px] group-hover:text-white transition-colors">{pratique}</span>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION : CE QUE JE NE FAIS PAS */}
          <section className="space-y-12">
            <header className="flex items-center gap-4 border-l-2 border-zinc-800 pl-6">
              <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-500 font-sans font-bold">
                Mes Limites & Engagements
              </h2>
            </header>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 italic text-zinc-500 text-[15px]">
              {[
                "Anulingus (sur vous)", "Être attachée (trop risqué)", "Je ne fais pas crédit !",
                "Je ne suis pas assistante sociale !", "Pas de téléphone rose",
                "Pas de tchat SMS érotique interminable", "Pas d'appels masqués ou fixes",
                "Je ne négocie pas mes tarifs !", "Je ne vide pas les « fonds de poches »",
                "Pas de chantage ou d'arnaque CB"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 py-2 opacity-80">
                  <XCircle size={14} className="text-zinc-800" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION : CE QUE JE N'AIME PAS (RÈGLES DE BIENSÉANCE) */}
          <section className="bg-zinc-950/30 p-10 rounded-sm border border-zinc-900 shadow-2xl space-y-8">
            <div className="flex items-center gap-4">
               <ShieldAlert className="text-amber-800" size={20} />
               <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-200 font-sans">
                 Ce que je n'aime pas...
               </h2>
            </div>
            
            <ul className="space-y-6 text-[15px] leading-relaxed">
              {[
                "Le tutoiement direct au téléphone et les langages trop familiers",
                "La brutalité, les grossièretés et le manque de respect",
                "Que l’on me bave ou crache dessus",
                "Que l’on me pince ou mordille les tétons",
                "Ceux qui retiennent leur jouissance pour faire durer sans pouvoir finir",
                "Ceux qui prennent 30 min et ont besoin de 2h pour jouir",
                "Gorge profonde forcée avec les mains sur la tête"
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start text-zinc-400 italic">
                  <span className="text-amber-900">—</span> {text}
                </li>
              ))}
            </ul>
          </section>

          {/* QUOTE & SIGNATURE */}
          <section className="pt-10 text-center space-y-12">
            <div className="space-y-4">
              <p className="text-3xl text-white italic tracking-tight">
                "Le meilleur moyen de résister à la tentation est d'y céder."
              </p>
              <div className="mx-auto h-[1px] w-20 bg-amber-800/30" />
              <p className="text-amber-600 font-sans text-[10px] uppercase tracking-[0.5em] font-bold">
                Érotiquement vôtre, Gabriella
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-6 pt-10">
              <Link 
                href="/reservation" 
                className="px-12 py-5 bg-white text-black uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-amber-600 hover:text-white transition-all duration-500"
              >
                Céder à la tentation
              </Link>
              <Link 
                href="/contact" 
                className="px-12 py-5 border border-zinc-800 text-zinc-400 uppercase tracking-[0.3em] text-[10px] font-bold hover:border-amber-900 hover:text-amber-500 transition-all"
              >
                Me contacter
              </Link>
            </div>
          </section>

        </div>
      </main>

      {/* FOOTER MINIMALISTE */}
      <footer className="py-20 border-t border-zinc-900 text-center">
        <p className="text-[10px] text-zinc-800 uppercase tracking-[0.5em] font-sans">
          Gabriella Indépendante — Respect & Volupté
        </p>
      </footer>
    </div>
  );
}