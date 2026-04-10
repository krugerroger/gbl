// components/CartDrawer.tsx
'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '../context/Cartcontext'

export default function CartDrawer() {
  const { items, isOpen, closeCart, remove, increment, decrement, clear, total, count } = useCart()
  const router = useRouter()

  const handleOrder = () => {
    closeCart()
    router.push('/cart/details')
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-500
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[480px] bg-[#0d0d0d] border-l border-zinc-900 z-50
          flex flex-col transition-transform duration-500 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-7 border-b border-zinc-900">
          <div className="flex items-center gap-4">
            <ShoppingBag size={18} className="text-amber-700" strokeWidth={1.5} />
            <span className="text-white text-xs uppercase tracking-[0.4em] font-sans font-bold">
              Votre Panier
            </span>
            {count > 0 && (
              <span className="w-5 h-5 bg-amber-600 text-white text-[10px] font-bold font-sans flex items-center justify-center">
                {count}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="text-zinc-600 hover:text-white transition-colors"
          >
            <X size={20} strokeWidth={1} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            // ── Panier vide ──
            <div className="h-full flex flex-col items-center justify-center gap-6 px-8 text-center">
              <ShoppingBag size={48} strokeWidth={0.5} className="text-zinc-800" />
              <p className="text-zinc-600 italic">Votre panier est vide.</p>
              <button
                onClick={closeCart}
                className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-amber-700 hover:text-white transition-colors"
              >
                Continuer mes achats →
              </button>
            </div>
          ) : (
            // ── Liste articles ──
            <ul className="divide-y divide-zinc-900">
              {items.map(item => (
                <li key={item.nom} className="flex gap-5 px-8 py-6">
                  {/* Image */}
                  <div className="relative w-20 h-24 shrink-0 border border-zinc-900 overflow-hidden">
                    <Image src={item.img} unoptimized alt={item.nom} fill className="object-cover" />
                  </div>

                  {/* Infos */}
                  <div className="flex-1 space-y-3 min-w-0">
                    <div className="flex justify-between gap-3 items-start">
                      <h4 className="text-white italic text-sm leading-snug line-clamp-2">{item.nom}</h4>
                      <button
                        onClick={() => remove(item.nom)}
                        className="text-zinc-700 hover:text-red-700 transition-colors shrink-0 mt-0.5"
                        aria-label="Supprimer"
                      >
                        <Trash2 size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantité */}
                      <div className="flex items-center gap-3 border border-zinc-900">
                        <button
                          onClick={() => decrement(item.nom)}
                          className="w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-900 transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-white text-sm font-sans w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => increment(item.nom)}
                          className="w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-900 transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      {/* Prix */}
                      <div className="text-right">
                        {item.prixBarre && (
                          <p className="text-zinc-600 text-xs line-through font-sans">{item.prixBarre}</p>
                        )}
                        <p className={`font-sans font-bold text-sm ${item.promo ? 'text-amber-500' : 'text-amber-700'}`}>
                          {item.prix}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer — total + actions */}
        {items.length > 0 && (
          <div className="border-t border-zinc-900 px-8 py-8 space-y-6">
            <div className="flex justify-between items-baseline">
              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-sans font-bold">Total</span>
              <span className="text-2xl text-white font-sans font-bold">{total}</span>
            </div>

            <p className="text-[10px] text-zinc-600 italic">
              Livraison sous pli discret. Délais et modalités confirmés après réservation.
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleOrder}
                className="w-full flex items-center justify-center gap-4 py-5 bg-white text-black uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-amber-600 hover:text-white transition-all duration-500"
              >
                Finaliser la commande <ArrowRight size={13} />
              </button>
              <button
                onClick={clear}
                className="w-full py-3 border border-zinc-900 text-zinc-600 uppercase tracking-[0.3em] text-[9px] font-sans font-bold hover:border-red-900 hover:text-red-700 transition-all"
              >
                Vider le panier
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  )
}