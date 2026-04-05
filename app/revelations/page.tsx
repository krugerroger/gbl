'use client'

import Link from "next/link";
import Image from "next/image";
import { Sparkles, Camera, Heart, UserCheck, Star } from "lucide-react";

export default function Revelations() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 font-serif selection:bg-amber-500/30">
      
      {/* Header Minimaliste */}
      {/* Header / Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/1.jpeg" // Remplacez par votre image de fond
            alt="Gabriella Indépendante, escort indépendante de luxe et masseuse professionnelle"
            fill
            className="object-cover opacity-40 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/80" />
        </div>

        <div className="relative z-10 text-center px-6">
          <span className="text-amber-500 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Confidences & Exclusivités</span>
          <h1 className="text-5xl md:text-7xl text-white mb-6 italic">Révélations</h1>
          <div className="w-24 h-[1px] bg-amber-600 mx-auto" />
        </div>
      </section>

      {/* Corps du texte - Style Éditorial Libre */}
      <main className="max-w-3xl mx-auto px-6 py-20">
        <div className="space-y-16 text-lg leading-relaxed text-zinc-300">
          
          {/* Paragraphe 1 : Philosophie */}
          <section className="relative">
             <span className="absolute -left-8 top-0 text-amber-900/20 text-6xl font-sans select-none italic">"</span>
             <p className="italic">
              Je suis une <span className="text-white">escorte girl</span>. Si j’ai choisi de rencontrer peu, c’est pour que cela reste un plaisir, et avoir du temps à vous consacrer. Je privilégie la <span className="text-amber-500">qualité à la quantité</span>.
             </p>
          </section>

          {/* Paragraphe 2 : Préparation */}
          <section className="space-y-6">
            <p>
              Je suis une vraie courtisane, très sélective sur le choix des mes partenaires car j’aime avoir plaisir à les recevoir et à combler leur désirs. J’attache beaucoup d’importance à ma préparation personnelle car je me dois d’être irréprochable pour vous. 
              <Link href="/galerie" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-500 transition-colors ml-2 font-sans text-xs uppercase tracking-widest font-bold">
                ( Je vous laisse découvrir mes photos <Camera size={14}/> )
              </Link>
            </p>
          </section>

          {/* Paragraphe 3 : Le corps (Temple) */}
          <section className="py-12 border-y border-zinc-900/50">
            <p className="mb-6">
              Je pratique de l’exercice régulièrement et traite mon corps comme un temple. J’ai une excellente hygiène de vie : <span className="text-white">je bois de l'alcool occasionnellement, je ne fume pas et ne me drogue pas</span>.
            </p>
            <p className="text-sm font-sans uppercase tracking-[0.2em] text-zinc-500 leading-loose">
              Épilation, coiffeur, séance UV, massage, pédicure et manucure, et je prends soin de mon alimentation pour avoir une silhouette de sylphide. Il faut que je sois resplendissante pour être à la hauteur de vos attentes.
            </p>
          </section>

          {/* Paragraphe 4 : Épicurisme */}
          <section className="text-center py-8">
            <p className="text-2xl text-white italic mb-6">
              "Je suis très épicurienne, et j’aime tous les plaisirs de la vie dont le désir et l’érotisme font partie."
            </p>
            <p>
              Je suis une femme de confiance, auprès de qui vous pourrez vous confier en toute intimité, sans peur d’être jugé, et qui saura vous écouter et répondre à vos envies pour les combler.
            </p>
          </section>

          {/* Paragraphe 5 : Valeurs */}
          <section className="flex flex-col md:flex-row items-center gap-8 italic text-amber-500/80 border-l-2 border-amber-900 pl-8">
            <p>
              L’aspect tarifaire n’est pas le plus important pour moi, seuls l’échange et le partage des plaisirs priment lors de notre rencontre.
            </p>
          </section>

          {/* Paragraphe 6 : Expérience Pro / X */}
          <section className="space-y-6">
            <p>
              Actrice X professionnelle reconvertie Escort Girl, j’offre une expérience de haut niveau et de grande qualité en tant que courtisane VIP : 
              <Link href="/pratiques" className="text-white underline decoration-amber-900 underline-offset-8 hover:decoration-amber-500 transition-all ml-1">jetez un œil à mes pratiques</Link>.
            </p>
            <div className="bg-zinc-950 p-8 rounded-sm border-l border-amber-600 italic text-center">
              Pour mes fans : je vous propose également de vivre une expérience <span className="text-amber-500 font-bold font-sans not-italic">PSE</span> (Porn Star Experience).
            </div>
          </section>

          {/* Paragraphe 7 : La Courtisane Moderne */}
          <section className="grid md:grid-cols-2 gap-12 pt-10">
            <div className="space-y-4">
              <p>
                Escorte expérimentée ou GFE (Girlfriend experience), une courtisane est vraiment réservée à l’homme le plus sélectif. 
              </p>
              <p className="text-white font-sans text-xs uppercase tracking-widest leading-relaxed">
                Élégante naturellement, classe sans ostentation, intelligente et vive, cultivée et disserte.
              </p>
            </div>
            <div className="space-y-4 border-t md:border-t-0 md:border-l border-zinc-900 pt-8 md:pt-0 md:pl-8">
              <p>
                Souriante à l’humour aiguisé, qui sait se valoriser avec finesse et une authenticité apparente, une vrai courtisane.
              </p>
              <p>
                J’ai une large garde-robe très bien taillée qui met très bien en valeur mais avec justesse les avantages de ma plastique parfaite.
              </p>
            </div>
          </section>

          {/* Conclusion & CTA */}
          <section className="pt-20 text-center space-y-10">
            <div className="flex justify-center gap-2 text-amber-600 mb-4">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>
            <p className="text-zinc-500 font-sans text-sm tracking-widest uppercase">
              Prête à vous recevoir
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-12 py-5 bg-white text-black uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-amber-600 hover:text-white transition-all duration-500"
            >
              Prendre contact
            </Link>
          </section>

        </div>
      </main>

      {/* Footer Minimaliste */}
      <footer className="py-20 border-t border-zinc-900 text-center">
        <p className="text-[10px] text-zinc-800 uppercase tracking-[0.5em] font-sans">
          Gabriella Indépendante — Éclat & Discrétion
        </p>
      </footer>
    </div>
  )
}