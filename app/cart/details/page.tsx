'use client'

import { useState } from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  Calendar, 
  Clock, 
  CreditCard, 
  ShieldCheck, 
  Lock, 
  Info,
  CheckCircle2,
  Trash2,
  ShoppingBag
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/Cartcontext";

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
}

export default function CartDetails() {
  const { items, total, count, remove, clear, confirmOrder } = useCart()
  const router = useRouter()

  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Ce champ est requis'
    if (!formData.email.trim()) newErrors.email = 'Ce champ est requis'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email invalide'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setIsLoading(true)
    try {
      // TODO: connecter à une API de commande
      await new Promise(resolve => setTimeout(resolve, 1000)) // simulation
      confirmOrder(formData.name, formData.email, formData.message)
      router.push('/cart/confirmation')
    } catch (err) {
      console.error(err)
      setIsLoading(false)
    }
  }

  // ── Panier vide ───────────────────────────────────────────────────────────
  if (count === 0) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 font-serif flex flex-col items-center justify-center gap-8 px-6">
        <ShoppingBag size={48} strokeWidth={0.5} className="text-zinc-800" />
        <p className="text-zinc-500 italic">Votre panier est vide.</p>
        <Link
          href="/shop"
          className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-amber-700 hover:text-white transition-colors"
        >
          ← Retour à la boutique
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 font-serif selection:bg-amber-500/30 pb-20">
      
      {/* HEADER */}
      <nav className="p-6 md:p-10 flex items-center justify-between border-b border-zinc-900/50 backdrop-blur-md sticky top-0 z-50 bg-[#0a0a0a]/90">
        <Link href="/shop" className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-zinc-500 hover:text-white transition-colors">
          <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Continuer mes achats
        </Link>
        <span className="text-[10px] uppercase tracking-[0.5em] text-amber-700 font-sans font-bold">
          Finaliser la commande
        </span>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-16 md:pt-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* COLONNE GAUCHE : RÉCAPITULATIF PANIER */}
          <section className="space-y-10">
            <header>
              <h1 className="text-4xl md:text-5xl text-white italic tracking-tighter mb-4">
                Votre <br />sélection
              </h1>
              <p className="text-zinc-500 italic leading-relaxed">
                "Vérifiez vos articles avant de confirmer votre commande."
              </p>
            </header>

            {/* Liste des articles */}
            <div className="bg-zinc-950 border border-zinc-900 divide-y divide-zinc-900 relative overflow-hidden">
              {items.map(item => (
                <div key={item.nom} className="flex items-center gap-5 px-6 py-5">
                  <div className="flex-1 min-w-0 space-y-1">
                    <p className="text-white italic text-sm leading-snug line-clamp-2">{item.nom}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] font-sans uppercase tracking-widest text-zinc-600">Qté : {item.quantity}</span>
                      {item.prixBarre && (
                        <span className="text-zinc-700 text-xs line-through font-sans">{item.prixBarre}</span>
                      )}
                      <span className={`font-sans text-sm font-bold ${item.promo ? 'text-amber-500' : 'text-amber-700'}`}>
                        {item.prix}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => remove(item.nom)}
                    className="text-zinc-700 hover:text-red-700 transition-colors shrink-0"
                    aria-label="Supprimer"
                  >
                    <Trash2 size={14} strokeWidth={1.5} />
                  </button>
                </div>
              ))}

              {/* Total */}
              <div className="px-6 py-5 flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-sans font-bold">Total</span>
                <span className="text-3xl italic text-white">{total}</span>
              </div>

              {/* Filigrane décoratif */}
              <div className="absolute -bottom-10 -right-10 text-zinc-900/10 pointer-events-none">
                <CreditCard size={200} />
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 border border-amber-900/20 bg-amber-950/5 text-zinc-500">
              <Info size={18} className="text-amber-900 shrink-0 mt-0.5" />
              <p className="text-[11px] leading-relaxed italic">
                Livraison sous pli discret. Délais et modalités confirmés par email sous 24h après réception de votre commande.
              </p>
            </div>
          </section>

          {/* COLONNE DROITE : FORMULAIRE */}
          <section className="bg-zinc-950/40 border border-zinc-900 p-8 md:p-12 space-y-10">
            <div className="text-center space-y-2">
              <Lock size={20} className="mx-auto text-amber-900 mb-4" />
              <h2 className="text-xl text-white italic">Informations Sécurisées</h2>
              <div className="h-[1px] w-8 bg-amber-900 mx-auto" />
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="space-y-4">
                <div className="group">
                  <label className="text-[9px] uppercase tracking-widest text-zinc-600 font-sans font-bold ml-1 mb-2 block">
                    Nom ou Pseudonyme
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Monsieur X..."
                    className={`w-full bg-transparent border-b py-3 px-1 text-white placeholder:text-zinc-800 focus:outline-none transition-all italic
                      ${errors.name ? 'border-red-900' : 'border-zinc-900 focus:border-amber-900'}
                    `}
                  />
                  {errors.name && <p className="text-[9px] uppercase tracking-widest text-red-800 font-sans mt-1">{errors.name}</p>}
                </div>

                <div className="group">
                  <label className="text-[9px] uppercase tracking-widest text-zinc-600 font-sans font-bold ml-1 mb-2 block">
                    Email de contact
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className={`w-full bg-transparent border-b py-3 px-1 text-white placeholder:text-zinc-800 focus:outline-none transition-all italic
                      ${errors.email ? 'border-red-900' : 'border-zinc-900 focus:border-amber-900'}
                    `}
                  />
                  {errors.email && <p className="text-[9px] uppercase tracking-widest text-red-800 font-sans mt-1">{errors.email}</p>}
                </div>

                <div className="group">
                  <label className="text-[9px] uppercase tracking-widest text-zinc-600 font-sans font-bold ml-1 mb-2 block">
                    Demandes particulières <span className="text-zinc-700">(optionnel)</span>
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Instructions de livraison, discrétion particulière..."
                    className="w-full bg-transparent border-b border-zinc-900 py-3 px-1 text-white placeholder:text-zinc-800 focus:outline-none focus:border-amber-900 transition-all italic resize-none"
                  />
                </div>
              </div>

              <div className="pt-6 space-y-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-white text-black py-5 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-amber-700 hover:text-white transition-all duration-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Envoi en cours…' : 'Confirmer la commande'}
                </button>
                <div className="flex items-center justify-center gap-4 opacity-40">
                  <ShieldCheck size={14} />
                  <span className="text-[8px] uppercase tracking-widest font-sans">Cryptage SSL 256 bits</span>
                </div>
              </div>
            </form>

            <div className="pt-10 border-t border-zinc-900/50 flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-900" />
                <span className="text-[8px] uppercase tracking-widest">Visa / Mastercard</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-900" />
                <span className="text-[8px] uppercase tracking-widest">Crypto acceptées</span>
              </div>
            </div>
          </section>
        </div>

        {/* RÉASSURANCE */}
        <section className="mt-32 border-y border-zinc-900 py-16 text-center space-y-8">
          <h3 className="text-white italic text-2xl">Politique de Confidentialité</h3>
          <p className="max-w-2xl mx-auto text-sm italic text-zinc-500 leading-relaxed">
            "Toutes les données transmises via ce formulaire sont supprimées immédiatement après traitement. Votre nom de facturation sera discret et ne mentionnera jamais la nature exacte des produits."
          </p>
          <div className="flex justify-center gap-12 pt-4">
            <div className="text-center space-y-2">
              <Lock className="text-amber-900 mx-auto" size={18} />
              <span className="block text-[8px] uppercase tracking-widest text-zinc-600">Discrétion</span>
            </div>
            <div className="text-center space-y-2">
              <ShieldCheck className="text-amber-900 mx-auto" size={18} />
              <span className="block text-[8px] uppercase tracking-widest text-zinc-600">Sécurité</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 text-center">
        <p className="text-[10px] text-zinc-800 uppercase tracking-[0.5em] font-sans">
          Gabriella — France — 2026
        </p>
      </footer>
    </div>
  )
}