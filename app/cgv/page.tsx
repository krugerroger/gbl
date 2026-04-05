'use client'

import { useState } from 'react';
import Link from "next/link";
import { 
  ShieldCheck, 
  HelpCircle, 
  ChevronDown, 
  Clock, 
  MapPin, 
  Scale, 
  AlertCircle 
} from "lucide-react";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Comment se déroule la réservation ?",
      a: "La réservation s'effectue principalement par téléphone ou via messagerie sécurisée (Telegram/WhatsApp). Un premier contact permet de définir vos attentes et de valider nos disponibilités mutuelles."
    },
    {
      q: "Quels sont les lieux de rencontre ?",
      a: "Je vous reçois dans un cadre privé, discret et luxueux préparé avec soin. Les déplacements à votre hôtel ou domicile sont possibles sous certaines conditions définies lors de notre échange."
    },
    {
      q: "Quelle est votre politique d'annulation ?",
      a: "Le respect mutuel est la base de notre rencontre. Toute annulation doit être signalée au moins 4 heures à l'avance. Dans le cas contraire, un dédommagement pourra être demandé pour la préparation engagée."
    },
    {
      q: "Proposez-vous des services spécifiques ?",
      a: "Chaque rencontre est unique. Mes services incluent l'accompagnement événementiel, les dîners, et les massages bien-être. Je ne réponds à aucune demande dégradante ou illégale."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 font-serif selection:bg-amber-500/30">
      
      {/* HEADER DE LA PAGE */}
      <section className="pt-24 pb-16 px-6 text-center">
        <span className="text-[10px] uppercase tracking-[0.5em] text-amber-600 font-sans font-bold mb-4 block">
          Transparence & Sérénité
        </span>
        <h1 className="text-4xl md:text-6xl text-white italic tracking-tighter mb-8">
          Conditions & FAQ
        </h1>
        <div className="mx-auto mt-10 h-[1px] w-12 bg-amber-900" />
      </section>

      <main className="max-w-4xl mx-auto px-6 pb-32 space-y-32">

        {/* SECTION FAQ (ACCORDÉONS UX) */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <HelpCircle size={24} className="text-amber-900" />
            <h2 className="text-2xl text-white italic uppercase tracking-widest text-sm">Foire Aux Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div 
                key={i} 
                className="border border-zinc-900 bg-zinc-950/20 overflow-hidden transition-all duration-500"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-zinc-900/30 transition-colors"
                >
                  <span className="text-white italic text-lg">{item.q}</span>
                  <ChevronDown 
                    size={18} 
                    className={`text-amber-700 transition-transform duration-500 ${openFaq === i ? 'rotate-180' : ''}`} 
                  />
                </button>
                <div 
                  className={`px-6 transition-all duration-500 ease-in-out ${
                    openFaq === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-zinc-500 leading-relaxed italic border-t border-zinc-900 pt-4">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION CONDITIONS GÉNÉRALES */}
        <section className="space-y-16">
          <div className="flex items-center gap-4">
            <Scale size={24} className="text-amber-900" />
            <h2 className="text-2xl text-white italic uppercase tracking-widest text-sm">Conditions Générales</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Colonne 1: Éthique */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="text-amber-700 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-white mb-2 font-sans text-xs uppercase tracking-widest">Éthique & Respect</h3>
                  <p className="text-sm leading-relaxed italic">
                    La courtoisie, l'hygiène et le respect mutuel sont les piliers de mes rencontres. 
                    Tout comportement déplacé entraînera l'arrêt immédiat de la prestation sans remboursement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-amber-700 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-white mb-2 font-sans text-xs uppercase tracking-widest">Ponctualité</h3>
                  <p className="text-sm leading-relaxed italic">
                    Le temps est notre bien le plus précieux. En cas de retard, merci de prévenir dès que possible. 
                    Tout retard de votre part sera décompté du temps de rencontre prévu.
                  </p>
                </div>
              </div>
            </div>

            {/* Colonne 2: Sécurité */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-amber-700 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-white mb-2 font-sans text-xs uppercase tracking-widest">Cadre des Rencontres</h3>
                  <p className="text-sm leading-relaxed italic">
                    Les rencontres se déroulent dans des lieux sélectionnés pour leur standing et leur sécurité. 
                    L'adresse précise vous est communiquée 1 heure avant notre rendez-vous.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <AlertCircle className="text-amber-700 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-white mb-2 font-sans text-xs uppercase tracking-widest">Discrétion Absolue</h3>
                  <p className="text-sm leading-relaxed italic">
                    Je m'engage à une confidentialité totale concernant votre identité et nos échanges. 
                    En retour, je demande la même discrétion absolue de votre part.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BANDEAU DE RÉASSURANCE */}
        <section className="bg-zinc-950 border border-zinc-900 p-10 text-center space-y-6">
          <p className="text-white italic text-xl">
            "Une relation de confiance est la clé d'une expérience réussie."
          </p>
          <div className="flex justify-center gap-6 pt-4">
            <Link 
              href="/reservation" 
              className="px-10 py-4 bg-white text-black uppercase tracking-[0.2em] text-[9px] font-bold hover:bg-amber-600 hover:text-white transition-all duration-500"
            >
              Accepter & Réserver
            </Link>
            <Link 
              href="/contact" 
              className="px-10 py-4 border border-zinc-800 text-zinc-500 uppercase tracking-[0.2em] text-[9px] font-bold hover:border-amber-900 hover:text-amber-500 transition-all duration-500"
            >
              Poser une question
            </Link>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="py-20 border-t border-zinc-900 text-center">
        <p className="text-[10px] text-zinc-800 uppercase tracking-[0.5em] font-sans">
          Gabriella — Mentions Légales — 2026
        </p>
      </footer>
    </div>
  );
}