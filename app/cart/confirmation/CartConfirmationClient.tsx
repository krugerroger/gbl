'use client'

import Link from "next/link";
import { Check, Mail, ShieldCheck, Calendar, ArrowRight, Star, Package } from "lucide-react";
import { useCart } from "@/app/context/Cartcontext";

export default function CartConfirmationClient() {
  const { lastOrder } = useCart()

  // Format date lisible
  const formattedDate = lastOrder
    ? new Date(lastOrder.orderedAt).toLocaleDateString('fr-FR', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
      })
    : null

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 font-serif flex flex-col items-center justify-center px-6 py-20">

      {/* FOND DÉCORATIF */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-900/5 blur-[120px] rounded-full" />
      </div>

      <main className="max-w-2xl w-full relative z-10 text-center space-y-12">

        {/* ICÔNE SUCCÈS */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 border border-amber-900/30 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-20 h-20 border border-amber-700/50 rounded-full flex items-center justify-center bg-zinc-950">
                <Check className="text-amber-600" size={32} strokeWidth={1} />
              </div>
            </div>
            <Star className="absolute -top-2 -right-2 text-amber-900/40" size={20} />
          </div>
        </div>

        {/* TITRE */}
        <header className="space-y-4">
          <span className="text-[10px] uppercase tracking-[0.6em] text-amber-700 font-sans font-bold block">
            Commande Confirmée
          </span>
          <h1 className="text-4xl md:text-6xl text-white italic tracking-tighter">
            Merci pour votre confiance
          </h1>
          <div className="mx-auto h-[1px] w-12 bg-amber-900 mt-8" />
        </header>

        {/* RÉCAPITULATIF COMMANDE */}
        {lastOrder && (
          <section className="bg-zinc-950/50 border border-zinc-900 p-8 space-y-6 text-left backdrop-blur-sm">
            <div className="flex items-center gap-3 border-b border-zinc-900 pb-5">
              <Package size={16} className="text-amber-900" strokeWidth={1.5} />
              <span className="text-[10px] uppercase tracking-[0.4em] text-amber-700 font-sans font-bold">
                Récapitulatif
              </span>
            </div>

            {/* Infos client */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-1">
                <p className="text-[9px] uppercase tracking-widest text-zinc-600 font-sans">Nom</p>
                <p className="text-white italic">{lastOrder.customerName}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] uppercase tracking-widest text-zinc-600 font-sans">Email</p>
                <p className="text-white italic">{lastOrder.customerEmail}</p>
              </div>
              {lastOrder.message && (
                <div className="col-span-2 space-y-1">
                  <p className="text-[9px] uppercase tracking-widest text-zinc-600 font-sans">Message</p>
                  <p className="text-zinc-400 italic text-xs leading-relaxed">{lastOrder.message}</p>
                </div>
              )}
            </div>

            {/* Articles */}
            <div className="divide-y divide-zinc-900/60 border-t border-zinc-900">
              {lastOrder.items.map((item, i) => (
                <div key={i} className="flex justify-between items-baseline py-3 gap-4">
                  <div className="flex items-baseline gap-3 min-w-0">
                    <span className="text-zinc-700 font-sans text-xs shrink-0">×{item.quantity}</span>
                    <span className="text-zinc-300 italic text-sm leading-snug line-clamp-1">{item.nom}</span>
                  </div>
                  <span className={`font-sans text-sm font-bold shrink-0 ${item.promo ? 'text-amber-500' : 'text-amber-700'}`}>
                    {item.prix}
                  </span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="flex justify-between items-baseline border-t border-zinc-900 pt-5">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-sans font-bold">Total</span>
              <span className="text-2xl italic text-white">{lastOrder.total}</span>
            </div>

            {/* Date */}
            {formattedDate && (
              <p className="text-[10px] text-zinc-700 font-sans text-right capitalize">{formattedDate}</p>
            )}
          </section>
        )}

        {/* PROCHAINES ÉTAPES */}
        <section className="bg-zinc-950/50 border border-zinc-900 p-10 space-y-8 backdrop-blur-sm">
          <p className="text-lg text-zinc-300 italic leading-relaxed">
            Votre commande a été transmise avec succès. <br />
            Merci pour votre commande ! Vous recevrez bientôt une mise à jour indiquant l'état de votre commande.
          </p>
          <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-zinc-900">
            <div className="flex flex-col items-center gap-3">
              <Mail size={20} className="text-amber-900" strokeWidth={1.5} />
              <h3 className="text-[10px] uppercase tracking-widest font-sans text-zinc-500">Vérifiez vos messages</h3>
              <p className="text-xs italic">Pensez à regarder vos courriers indésirables.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <ShieldCheck size={20} className="text-amber-900" strokeWidth={1.5} />
              <h3 className="text-[10px] uppercase tracking-widest font-sans text-zinc-500">Confidentialité</h3>
              <p className="text-xs italic">La transaction apparaîtra sous un nom discret.</p>
            </div>
          </div>
        </section>

        {/* CITATION */}
        <p className="text-sm text-zinc-500 italic max-w-lg mx-auto">
          "Je reviendrai vers vous personnellement sous peu pour finaliser les derniers détails logistiques."
        </p>

        {/* ACTIONS */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-10">
          <Link
            href="/"
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-white hover:text-amber-600 transition-colors"
          >
            Retourner à l'accueil
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <div className="h-[1px] w-8 bg-zinc-900 md:h-8 md:w-[1px]" />
          <Link
            href="/shop"
            className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            Retour à la boutique
          </Link>
        </div>

      </main>

      <footer className="absolute bottom-10 w-full text-center">
        <div className="flex justify-center items-center gap-2 text-zinc-800 text-[9px] uppercase tracking-[0.4em] font-sans">
          <Calendar size={10} />
          <span>Session Sécurisée — 2026</span>
        </div>
      </footer>
    </div>
  )
}
