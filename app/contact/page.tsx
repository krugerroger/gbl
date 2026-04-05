'use client'

import Link from "next/link";
import { Phone, Mail, MessageSquare, Send, MapPin, Clock, ShieldCheck, PhoneCall, PhoneOutgoing, PhoneIcon, MessageCircle } from "lucide-react";

export default function Contact() {

    const message = encodeURIComponent(
  "Bonjour Gabriella 👋,\n\nJe vous contacte via votre site internet.\n\nJe suis intéressé(e) par vos prestations et j’aimerais avoir plus d’informations concernant vos disponibilités, vos services et vos tarifs.\n\nMerci 🙂"
);
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 font-serif selection:bg-amber-500/30">
      
      {/* HEADER CONTACT */}
      <section className="pt-24 pb-16 px-6 text-center border-b border-zinc-900/50">
        <span className="text-[10px] uppercase tracking-[0.5em] text-amber-600 font-sans font-bold mb-4 block">
          L'Éveil du Dialogue
        </span>
        <h1 className="text-4xl md:text-6xl text-white italic tracking-tighter mb-8">
          Me Contacter
        </h1>
        <p className="max-w-2xl mx-auto text-zinc-500 italic text-lg leading-relaxed">
          "Une question, une hésitation ou simplement l'envie d'en savoir plus avant notre rendez-vous ? Je reste à votre entière disposition pour un échange en toute discrétion."
        </p>
        <div className="mx-auto mt-10 h-[1px] w-12 bg-amber-900" />
      </section>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          {/* SECTION GAUCHE : RÉSEAUX & INFOS DIRECTES */}
          <div className="space-y-16">
            
            {/* CANAUX DIRECTS */}
            <div className="space-y-10">
              <h2 className="text-white text-xs uppercase tracking-[0.4em] font-sans font-bold">Canaux Privilégiés</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                <a href="tel:+33780990692" className="group space-y-3">
                  <div className="w-12 h-12 border border-zinc-900 flex items-center justify-center group-hover:border-amber-900 transition-all duration-500">
                    <Phone size={18} className="text-amber-700" />
                  </div>
                  <span className="block text-[10px] uppercase tracking-widest text-zinc-600 font-sans">Téléphone</span>
                  <p className="text-white group-hover:text-amber-500 transition-colors">+33 7 80 99 06 92</p>
                </a>

                <a href="https://t.me/gabriellaindependante" className="group space-y-3">
                  <div className="w-12 h-12 border border-zinc-900 flex items-center justify-center group-hover:border-amber-900 transition-all duration-500">
                    <MessageSquare size={18} className="text-amber-700" />
                  </div>
                  <span className="block text-[10px] uppercase tracking-widest text-zinc-600 font-sans">Telegram</span>
                  <p className="text-white group-hover:text-amber-500 transition-colors italic">@gabriellaindependante</p>
                </a>
{/* 
                <div className="group space-y-3">
                  <div className="w-12 h-12 border border-zinc-900 flex items-center justify-center">
                    <Mail size={18} className="text-amber-700" />
                  </div>
                  <span className="block text-[10px] uppercase tracking-widest text-zinc-600 font-sans">E-mail Professionnel</span>
                  <a href="mailto:gabriellaindependante@gmail.com" className="text-white italic text-sm">gabriellaindependante@gmail.com</a>
                </div> */}

                <a  href={`https://wa.me/33780990692?text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group space-y-3">
                  <div className="w-12 h-12 border border-zinc-900 flex items-center justify-center group-hover:border-amber-900 transition-all duration-500">
                    <MessageCircle size={18} className="text-amber-700" />
                  </div>
                  <span className="block text-[10px] uppercase tracking-widest text-zinc-600 font-sans">Whatsapp</span>
                  <p className="text-white group-hover:text-amber-500 transition-colors italic">+33 7 80 99 06 92</p>
                </a>
              </div>
            </div>

            {/* BOX DISCRÉTION */}
            <div className="p-10 bg-zinc-950 border border-zinc-900 space-y-6 relative overflow-hidden">
               <ShieldCheck className="text-amber-900/20 absolute -right-4 -bottom-4" size={120} />
               <div className="relative z-10 space-y-4">
                  <h3 className="text-white italic text-xl">Confidentialité Totale</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed italic">
                    Aucune de vos coordonnées ne sera partagée, vendue ou conservée dans une base de données marketing. Notre correspondance reste strictement privée entre vous et moi.
                  </p>
               </div>
            </div>
          </div>

          {/* SECTION DROITE : FORMULAIRE DE CONTACT */}
          <section className="bg-zinc-950/20 p-8 md:p-12 border border-zinc-900/50">
            <h2 className="text-2xl text-white italic mb-10">Envoyer un message discret</h2>
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-sans font-bold">Nom ou Pseudonyme</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-zinc-800 focus:border-amber-900 outline-none py-4 text-white italic transition-all"
                  placeholder="Comment dois-je vous appeler ?"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-sans font-bold">Adresse E-mail</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-zinc-800 focus:border-amber-900 outline-none py-4 text-white italic transition-all"
                  placeholder="Pour ma réponse..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-sans font-bold">Votre message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-transparent border-b border-zinc-800 focus:border-amber-900 outline-none py-4 text-white italic transition-all resize-none"
                  placeholder="Quelle est votre demande ?"
                />
              </div>

              <div className="pt-6">
                <button className="w-full flex items-center justify-center gap-6 px-12 py-5 bg-white text-black uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-amber-600 hover:text-white transition-all duration-500 shadow-xl">
                  Transmettre mon message <Send size={14} />
                </button>
              </div>
            </form>
          </section>

        </div>

        {/* SECTION FOOTER CONTACT */}
        <section className="mt-32 text-center space-y-12 border-t border-zinc-900 pt-20">
          <div className="flex justify-center gap-12">
             <div className="flex flex-col items-center gap-3">
                <MapPin className="text-amber-900" size={24} />
                <span className="text-[9px] uppercase tracking-widest text-zinc-600">Paris, 8ème</span>
             </div>
             <div className="flex flex-col items-center gap-3">
                <Clock className="text-amber-900" size={24} />
                <span className="text-[9px] uppercase tracking-widest text-zinc-600">10h00 — 01h00</span>
             </div>
          </div>
          <p className="text-zinc-600 italic text-sm max-w-md mx-auto">
            "Chaque détail compte. Prenez le temps de m'écrire, je prendrai le temps de vous lire."
          </p>
        </section>
      </main>

      <footer className="py-20 border-t border-zinc-900 text-center">
        <p className="text-[10px] text-zinc-800 uppercase tracking-[0.5em] font-sans">
          Gabriella — Disponibilité & Discrétion — 2026
        </p>
      </footer>
    </div>
  );
}