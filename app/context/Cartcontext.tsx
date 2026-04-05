// context/CartContext.tsx
'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

export interface CartItem {
  nom: string
  prix: string
  prixBarre?: string
  img: string
  promo?: boolean
  quantity: number
}

export interface OrderSnapshot {
  items: CartItem[]
  total: string
  customerName: string
  customerEmail: string
  message: string
  orderedAt: string // ISO string
}

interface CartContextValue {
  items: CartItem[]
  add: (produit: Omit<CartItem, 'quantity'>) => void
  remove: (nom: string) => void
  increment: (nom: string) => void
  decrement: (nom: string) => void
  clear: () => void
  total: string
  count: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  // ── Commande confirmée ──
  lastOrder: OrderSnapshot | null
  confirmOrder: (customerName: string, customerEmail: string, message: string) => OrderSnapshot
}

const CartContext = createContext<CartContextValue | null>(null)

function parsePrice(prix: string): number {
  return parseFloat(prix.replace(/[^\d,]/g, '').replace(',', '.')) || 0
}

function formatPrice(amount: number): string {
  return amount.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €'
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [lastOrder, setLastOrder] = useState<OrderSnapshot | null>(null)

  const add = useCallback((produit: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      const existing = prev.find(i => i.nom === produit.nom)
      if (existing) return prev.map(i => i.nom === produit.nom ? { ...i, quantity: i.quantity + 1 } : i)
      return [...prev, { ...produit, quantity: 1 }]
    })
    setIsOpen(true)
  }, [])

  const remove   = useCallback((nom: string) => setItems(prev => prev.filter(i => i.nom !== nom)), [])
  const increment = useCallback((nom: string) => setItems(prev => prev.map(i => i.nom === nom ? { ...i, quantity: i.quantity + 1 } : i)), [])
  const decrement = useCallback((nom: string) => setItems(prev => prev.map(i => i.nom === nom ? { ...i, quantity: i.quantity - 1 } : i).filter(i => i.quantity > 0)), [])
  const clear     = useCallback(() => setItems([]), [])

  const total = formatPrice(items.reduce((sum, i) => sum + parsePrice(i.prix) * i.quantity, 0))
  const count = items.reduce((sum, i) => sum + i.quantity, 0)

  // Snapshot la commande AVANT le clear, retourne le snapshot
  const confirmOrder = useCallback((customerName: string, customerEmail: string, message: string): OrderSnapshot => {
    const snapshot: OrderSnapshot = {
      items: [...items],
      total: formatPrice(items.reduce((sum, i) => sum + parsePrice(i.prix) * i.quantity, 0)),
      customerName,
      customerEmail,
      message,
      orderedAt: new Date().toISOString(),
    }
    setLastOrder(snapshot)
    setItems([])
    return snapshot
  }, [items])

  return (
    <CartContext.Provider value={{
      items, add, remove, increment, decrement, clear,
      total, count, isOpen,
      openCart:  () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      lastOrder,
      confirmOrder,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}