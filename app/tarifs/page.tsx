'use client'

import Link from "next/link";
import Image from "next/image";
import { Clock, Star, Moon, Coffee, Utensils, Sparkles, ShieldCheck } from "lucide-react";

export default function TarifsEtPrestations() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 font-serif selection:bg-amber-500/30">
      
      {/* HEADER MINIMALISTE */}
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
          L'Excellence du Moment
        </span>
        <h1 className="text-4xl md:text-6xl text-white italic tracking-tighter mb-8">
          Mes Prestations & Tarifs
        </h1>
        <div className="mx-auto h-[1px] w-12 bg-amber-900" />
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-20">
        
        {/* SECTION 1 : LES RENDEZ-VOUS GALANTS */}
        <section className="space-y-16 mb-32">
          <div className="text-center space-y-4">
            <h2 className="text-xs uppercase tracking-[0.4em] text-amber-600 font-sans font-bold">Rendez-vous Galants</h2>
            <p className="text-zinc-500 italic">L'art de la rencontre et du plaisir partagé</p>
          </div>

          <div className="grid gap-12">
            {[
              { 
                titre: "Rendez-vous galant – 1h", 
                detail: "2 moments intimes accompagnés d’un massage",
                prixJ: "150€", prixS: "170€",
                desc: "Nous débutons par un moment d’échange autour d’un verre, suivi d’une douche et d’une parenthèse sensuelle."
              },
              { 
                titre: "Rendez-vous galant – 1h30", 
                detail: "3 moments intimes accompagnés d’un massage",
                prixJ: "240€", prixS: "250€",
                desc: "Une rencontre progressive, entre complicité, détente et plaisir partagé."
              },
              { 
                titre: "Rendez-vous galant – 2h", 
                detail: "3 à 4 moments intimes accompagnés d’un massage",
                prixJ: "300€", prixS: "320€",
                desc: "Le temps idéal pour se découvrir pleinement et savourer chaque instant."
              },
              { 
                titre: "Rendez-vous galant – 3h", 
                detail: "4 moments intimes accompagnés d’un massage",
                prixJ: "400€", prixS: "420€",
                desc: "Une immersion totale dans un univers de sensualité et de raffinement."
              }
            ].map((item, i) => (
              <div key={i} className="group border-b border-zinc-900 pb-12 transition-all">
                <div className="md:flex justify-between items-start mb-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl text-white italic group-hover:text-amber-500 transition-colors flex items-center gap-3">
                      <Sparkles size={16} className="text-amber-700 opacity-50" /> {item.titre}
                    </h3>
                    <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-amber-900 font-bold">{item.detail}</p>
                  </div>
                  <div className="flex gap-8 mt-4 md:mt-0">
                    <div className="text-right">
                      <span className="block text-[9px] text-zinc-600 uppercase tracking-widest mb-1">En journée</span>
                      <span className="text-xl text-white font-sans font-light">{item.prixJ}</span>
                    </div>
                    <div className="text-right border-l border-zinc-900 pl-8">
                      <span className="block text-[9px] text-amber-900 uppercase tracking-widest mb-1">Après 19h</span>
                      <span className="text-xl text-amber-600 font-sans font-light">{item.prixS}</span>
                    </div>
                  </div>
                </div>
                <p className="text-zinc-500 italic leading-relaxed max-w-2xl">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2 : MOMENTS BIEN-ÊTRE & EXPÉRIENCES */}
        <section className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-xs uppercase tracking-[0.4em] text-amber-600 font-sans font-bold">Moments Bien-être & Expériences</h2>
            <p className="text-zinc-500 italic">Des parenthèses d'exception pour les plus exigeants</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Après-midi détente */}
            <div className="bg-zinc-950/40 p-10 border border-zinc-900 space-y-6 group hover:border-amber-900/30 transition-all">
              <div className="flex justify-between items-start">
                <Clock className="text-amber-700" size={24} strokeWidth={1.5} />
                <span className="text-2xl text-white font-sans">550€</span>
              </div>
              <h3 className="text-xl text-white italic">Après-midi détente (4h)</h3>
              <p className="text-sm text-zinc-500 leading-relaxed italic">
                Un moment de relaxation : spa, hammam ou massage, suivi d’un déjeuner ou d’un verre, avant de prolonger la rencontre en toute intimité. 
                <span className="block mt-2 text-[10px] font-sans text-amber-900 uppercase tracking-widest font-bold">Valable avant 19h</span>
              </p>
            </div>

            {/* Soirée Délice */}
            <div className="bg-zinc-950/40 p-10 border border-zinc-900 space-y-6 group hover:border-amber-900/30 transition-all">
              <div className="flex justify-between items-start">
                <Utensils className="text-amber-700" size={24} strokeWidth={1.5} />
                <span className="text-2xl text-white font-sans">670€</span>
              </div>
              <h3 className="text-xl text-white italic">Soirée Délice (4h)</h3>
              <p className="text-sm text-zinc-500 leading-relaxed italic">
                De 20h à minuit. 2h de dîner suivies de 2h de moments sensuels. Une soirée élégante pour éveiller les sens en douceur.
              </p>
            </div>

            {/* Soirée Torride */}
            <div className="bg-zinc-950 p-10 border border-amber-900/20 space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2">
                <Star size={12} fill="#78350f" className="text-amber-900" />
              </div>
              <div className="flex justify-between items-start">
                <Moon className="text-amber-600" size={24} strokeWidth={1.5} />
                <span className="text-2xl text-amber-500 font-sans">720€</span>
              </div>
              <h3 className="text-xl text-white italic">Soirée Torride (5h)</h3>
              <p className="text-sm text-zinc-400 leading-relaxed italic">
                Ma formule favorite : de 20h à 01h. Un délicieux dîner suivi de 3h de moments intenses et passionnés. Inoubliable.
              </p>
            </div>

            {/* Nuit Complète */}
            <div className="bg-zinc-950/40 p-10 border border-zinc-900 space-y-6 group hover:border-amber-900/30 transition-all">
              <div className="flex justify-between items-start">
                <Coffee className="text-amber-700" size={24} strokeWidth={1.5} />
                <span className="text-2xl text-white font-sans">800€</span>
              </div>
              <h3 className="text-xl text-white italic">Nuit Complète (12h)</h3>
              <p className="text-sm text-zinc-500 leading-relaxed italic">
                De 20h à 08h. Dîner, nuit sensuelle et petit-déjeuner. Un temps de repos de minimum 5h est prévu.
              </p>
            </div>
          </div>
        </section>

        {/* ENGAGEMENT & RÉSERVATION */}
        <section className="mt-32 pt-16 border-t border-zinc-900 text-center space-y-12">
          <div className="flex justify-center gap-4 text-zinc-700 mb-8">
            <ShieldCheck size={20} />
            <span className="text-[10px] font-sans uppercase tracking-[0.3em] font-bold mt-1">Honneur & Discrétion Absolue</span>
          </div>
          
          <div className="space-y-8">
            <p className="text-zinc-500 italic max-w-xl mx-auto">
              "Chaque instant est précieux. Je m'assure que notre rencontre soit à la hauteur de vos attentes les plus raffinées."
            </p>
            <Link 
              href="/reservation" 
              className="inline-block px-12 py-5 bg-white text-black uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-amber-600 hover:text-white transition-all duration-500 shadow-xl shadow-white/5"
            >
              Réserver une expérience
            </Link>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="py-20 border-t border-zinc-900 text-center">
        <p className="text-[10px] text-zinc-800 uppercase tracking-[0.5em] font-sans">
          Gabriella — L'élégance de l'intimité
        </p>
      </footer>
    </div>
  );
}