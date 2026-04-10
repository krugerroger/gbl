'use client'

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Sparkles, Heart, Zap, ShieldCheck, Gift, ShoppingCart } from "lucide-react";
import { useCart } from "../context/Cartcontext";
import CartDrawer from "../components/Cartdrawer";

// ── Types ──────────────────────────────────────────────────────────────────

interface Produit {
  nom: string
  prix: string
  prixBarre?: string
  tag?: string
  desc?: string
  promo?: boolean
  img: string
}

interface Categorie {
  titre: string
  desc?: string
  produits: Produit[]
}

// ── Data ───────────────────────────────────────────────────────────────────

const catalogue: Categorie[] = [
  {
    titre: "Sélection Personnelle",
    desc: "Des accessoires testés et approuvés par mes soins, pour prolonger l'expérience au-delà de nos rendez-vous.",
    produits: [
      { nom: "L'Huile de Massage Soyeuse", prix: "45€", tag: "Mon Favori", img: "/images/shop/huile-massage.webp", desc: "Une texture non grasse aux notes de jasmin et de vanille, celle que j'utilise lors de nos séances de massage tantrique." },
      { nom: "Coffret Initiation Sensuelle", prix: "120€", tag: "Édition Limitée", img: "/images/shop/coffret-initiation.png", desc: "Une sélection de bougies parfumées, plumes de soie et bandeaux en satin pour éveiller vos sens à la maison." },
      { nom: "Le Masque de Nuit en Soie", prix: "35€", tag: "Accessoire", img: "/images/shop/masque-nuit.png", desc: "Pour une immersion totale dans le noir absolu, favorisant l'abandon et l'éveil du toucher." }
    ]
  },
  {
    titre: "Masturbateurs & Plaisir Masculin",
    desc: "Prêt à explorer de nouveaux plaisirs ? Une collection exclusive pour des expériences intenses et uniques.",
    produits: [
      { nom: "Fleshlight Quickshot Launch", prix: "276,00 €", prixBarre: "329,00 €", promo: true, img: "/images/shop/fleshlight-quickshot.webp" },
      { nom: "Playboy — Poursuite du plaisir", prix: "269,00 €", img: "/images/shop/playboy-plaisir.webp" },
      { nom: "Zero Tolerance — Masturbateur Rechargeable à Mouvement de Poussée", prix: "239,00 €", img: "/images/shop/zero-tolerance.webp" },
      { nom: "Un bon moment de succion — Noir/Fumée", prix: "149,95 €", img: "/images/shop/un-bon-moment.webp" },
      { nom: "Torsadez & Caressez — Masturbateur rechargeable — Glacial", prix: "199,60 €", img: "/images/shop/torsadez-caressez.webp" },
      { nom: "Montée de frissons — Noir/Transparent", prix: "144,95 €", img: "/images/shop/montee-de-frissons.webp" },
      { nom: "Passez à l'action — Masturbateur rechargeable — Blanc", prix: "249,00 €", img: "/images/shop/passez-a-laction.webp" },
      { nom: "Cyclone — Masturbateur rechargeable — Noir/Transparent", prix: "139,00 €", img: "/images/shop/cyclone.webp" },
      { nom: "Arcwave — Ensemble double plaisir", prix: "239,99 €", img: "/images/shop/arcwave.webp" },
    ]
  },
  {
    titre: "Fleshlight Shop Express",
    produits: [
      { nom: "Fleshlight — Pink Lady Originale", prix: "118,95 €", prixBarre: "139,95 €", promo: true, img: "/images/shop/fleshlight-pink-lady.webp" },
      { nom: "Fleshlight Girls Kazumi — Kumzumi Vagin", prix: "131,95 €", prixBarre: "154,00 €", promo: true, img: "/images/shop/fleshlight-girls-kazumi.webp" },
      { nom: "Fleshlight Girls — Riley Reid Euphoria (fesse)", prix: "135,96 €", prixBarre: "154,00 €", promo: true, img: "/images/shop/fleshlight-girls-riley-reid.webp" },
      { nom: "Fleshlight Girls — Tori Black Torrid", prix: "131,95 €", prixBarre: "154,95 €", promo: true, img: "/images/shop/fleshlight-girls-tori-black.webp" },
      { nom: "Fleshlight Boost Blow", prix: "140,00 €", prixBarre: "154,00 €", promo: true, img: "/images/shop/fleshlight-boost-blow.webp" },
      { nom: "Fleshlight Turbo Core", prix: "118,95 €", prixBarre: "139,99 €", promo: true, img: "/images/shop/fleshlight-turbo-core.webp" },
      { nom: "Fleshlight — Unité d'Entraînement de l'Endurance GO — Anus", prix: "96,00 €", prixBarre: "116,00 €", promo: true, img: "/images/shop/fleshlight-unite.webp" },
      { nom: "Fleshlight Girls Kazumi — Bumzumi", prix: "131,95 €", prixBarre: "154,00 €", promo: true, img: "/images/shop/fleshlight-girls-kazumi-bumzumi.webp" },
      { nom: "Fleshjack Boys Cade Maddox — Alpha", prix: "135,00 €", prixBarre: "154,00 €", promo: true, img: "/images/shop/fleshjack-boys-cade-maddox.webp" },
      { nom: "Fleshjack Boys Milan Christopher — King", prix: "144,00 €", img: "/images/shop/fleshjack-boys-milan-christopher.webp" },
      { nom: "Fleshjack Boys Griffin Barrows — Cake", prix: "154,95 €", img: "/images/shop/fleshjack-boys-griffin-barrows.webp" },
    ]
  },
  {
    titre: "Poupées & Expériences Réalistes",
    produits: [
      { nom: "PDX ELITE Moto-Bator", prix: "204,00 €", img: "/images/shop/pdx-elite-moto-bator.webp" },
      { nom: "Mistress — Brooke — Fesse Vibrante DoggieStyle", prix: "170,00 €", img: "/images/shop/mistress-brooke-fesse-vibrante-doggystyle.webp" },
      { nom: "Lady Ursula", prix: "290,00 €", prixBarre: "399,00 €", promo: true, img: "/images/shop/lady-ursula.webp" },
      { nom: "Carmen Luvana's Doggy Style CyberSkin® Pussy & Ass Vibrante", prix: "464,00 €", img: "/images/shop/carmen-luvana-doggy-style-cyberskin-pussy-ass-vibrante.webp" },
      { nom: "Masturbateur Victoria", prix: "349,00 €", img: "/images/shop/masturbateur-victoria.webp" },
      { nom: "Masturbateur Hera Real Hip", prix: "439,00 €", img: "/images/shop/masturbateur-hera-real-hip.webp" },
    ]
  },
  {
    titre: "Lubrifiants Premium",
    desc: "Des formules haut de gamme pour des expériences plus confortables et des sensations intensifiées.",
    produits: [
      { nom: "Pour nous deux", prix: "174,95 €", prixBarre: "199,00 €", promo: true, img: "/images/shop/pour-nous-deux.webp" },
      { nom: "Lubrifiant Premium Silicone 16oz / 473mL", prix: "134,00 €", img: "/images/shop/lubrifiant-premium-silicone-16oz-473ml.webp" },
      { nom: "FuckWater Lubrifiant 4L", prix: "149,95 €", img: "/images/shop/fuckwater-lubrifiant-4l.webp" },
      { nom: "Le Pro de l'anal", prix: "100,00 €", prixBarre: "118,00 €", promo: true, img: "/images/shop/le-pro-de-l'anal.webp" },
    ]
  }
]

// ── Product Card ───────────────────────────────────────────────────────────

function ProductCard({ p }: { p: Produit }) {
  const { add, items } = useCart()
  const qty = items.find(i => i.nom === p.nom)?.quantity ?? 0
  const inCart = qty > 0

  const handleAdd = () => add({ nom: p.nom, prix: p.prix, prixBarre: p.prixBarre, img: p.img, promo: p.promo })

  return (
    <div className="group space-y-4">
      <div className="relative aspect-[4/5] border border-zinc-900 overflow-hidden">
        <Image src={p.img} alt={p.nom} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {p.promo && <span className="text-[9px] font-sans uppercase tracking-[0.2em] bg-amber-600 text-white px-3 py-1 font-bold">Promotion</span>}
          {p.tag && !p.promo && <span className="text-[9px] font-sans uppercase tracking-[0.2em] bg-white text-black px-3 py-1 font-bold">{p.tag}</span>}
        </div>

        {/* Qty badge */}
        {inCart && (
          <div className="absolute top-4 right-4 z-10 w-6 h-6 bg-amber-600 flex items-center justify-center">
            <span className="text-white text-[10px] font-bold font-sans">{qty}</span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center translate-y-4 group-hover:translate-y-0 z-10">
          <button
            onClick={handleAdd}
            className={`px-8 py-3 uppercase tracking-widest text-[9px] font-bold transition-colors
              ${inCart ? 'bg-amber-600 text-white hover:bg-amber-500' : 'bg-white text-black hover:bg-amber-600 hover:text-white'}
            `}
          >
            {inCart ? `Ajouter encore (${qty})` : 'Ajouter au panier'}
          </button>
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between items-baseline gap-4">
          <h3 className="text-white italic text-base group-hover:text-amber-500 transition-colors leading-snug flex-1">{p.nom}</h3>
          <div className="flex flex-col items-end shrink-0">
            {p.prixBarre && <span className="text-zinc-600 font-sans text-xs line-through">{p.prixBarre}</span>}
            <span className={`font-sans text-sm font-bold ${p.promo ? 'text-amber-500' : 'text-amber-700'}`}>{p.prix}</span>
          </div>
        </div>
        {p.desc && <p className="text-xs text-zinc-600 italic leading-relaxed">{p.desc}</p>}

        {/* Bouton mobile (non-hover) */}
        <button
          onClick={handleAdd}
          className={`sm:hidden mt-3 w-full py-3 text-[9px] uppercase tracking-widest font-bold font-sans border transition-colors
            ${inCart ? 'border-amber-600 text-amber-500' : 'border-zinc-800 text-zinc-400 hover:border-amber-900 hover:text-white'}
          `}
        >
          {inCart ? `Dans le panier (${qty}) — + Ajouter` : '+ Ajouter au panier'}
        </button>
      </div>
    </div>
  )
}

// ── Floating cart bar ──────────────────────────────────────────────────────

function FloatingCartBar() {
  const { count, total, openCart } = useCart()
  if (count === 0) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 flex justify-center pb-6 px-4 pointer-events-none">
      <button
        onClick={openCart}
        className="pointer-events-auto flex items-center gap-5 px-8 py-4 bg-white text-black uppercase tracking-[0.3em] text-[10px] font-bold shadow-2xl hover:bg-amber-600 hover:text-white transition-all duration-500"
      >
        <ShoppingCart size={14} />
        <span>{count} article{count > 1 ? 's' : ''}</span>
        <span className="w-[1px] h-4 bg-black/20" />
        <span>{total}</span>
        <span>→ Voir le panier</span>
      </button>
    </div>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function ShopClient() {
  const { openCart, count } = useCart()

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 font-serif selection:bg-amber-500/30">

      {/* HEADER */}
      <section className="pt-24 pb-16 px-6 text-center border-b border-zinc-900/50 relative">
        <button onClick={openCart} className="absolute top-8 right-8 flex items-center gap-2 group" aria-label="Panier">
          <ShoppingBag size={20} strokeWidth={1} className="text-zinc-600 group-hover:text-white transition-colors" />
          {count > 0 && (
            <span className="w-5 h-5 bg-amber-600 text-white text-[9px] font-bold font-sans flex items-center justify-center">{count}</span>
          )}
        </button>
        <span className="text-[10px] uppercase tracking-[0.5em] text-amber-600 font-sans font-bold mb-4 block">Le Boudoir de Gabriella</span>
        <h1 className="text-4xl md:text-6xl text-white italic tracking-tighter mb-8">L'Espace Plaisir</h1>
        <p className="max-w-2xl mx-auto text-zinc-500 italic text-lg leading-relaxed">
          "Prolongez l'expérience au-delà de nos rendez-vous. J'ai sélectionné pour vous des accessoires et des soins qui incarnent ma vision de la volupté."
        </p>
        <div className="mx-auto mt-10 h-[1px] w-12 bg-amber-900" />
      </section>

      <main className="max-w-6xl mx-auto px-6 py-20 space-y-40 pb-32">

        {/* PHILOSOPHIE */}
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square overflow-hidden border border-zinc-900 group">
            <Image src="/images/1.jpeg" alt="Gabriella, escort indépendante de luxe et masseuse professionnelle" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
          </div>
          <div className="space-y-8">
            <h2 className="text-white text-3xl italic">L'Art de l'Accessoire</h2>
            <div className="space-y-4 text-zinc-500 italic leading-relaxed">
              <p>Le plaisir est un rituel qui se prépare. Que ce soit pour pimenter nos futures rencontres ou pour vos moments intimes personnels, chaque objet présenté ici a été testé et approuvé par mes soins.</p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-center gap-3 text-xs font-sans uppercase tracking-widest text-amber-900"><ShieldCheck size={14} /> Qualité Premium & Discrétion</li>
                <li className="flex items-center gap-3 text-xs font-sans uppercase tracking-widest text-amber-900"><Zap size={14} /> Livraison sous pli anonyme</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CATALOGUE */}
        {catalogue.map((cat, ci) => (
          <section key={ci} className="space-y-12">
            <div className="border-b border-zinc-900 pb-6 space-y-3">
              <h2 className="text-2xl text-white italic">{cat.titre}</h2>
              {cat.desc && <p className="text-sm text-zinc-500 italic max-w-2xl">{cat.desc}</p>}
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16">
              {cat.produits.map((p, pi) => <ProductCard key={pi} p={p} />)}
            </div>
          </section>
        ))}

        {/* BONS CADEAUX */}
        <section className="bg-zinc-950 p-12 border border-zinc-900 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12"><Gift size={120} className="text-amber-900" /></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl text-white italic">Offrir l'Inoubliable</h2>
            <p className="max-w-xl mx-auto text-zinc-500 italic">Vous souhaitez surprendre un proche ou vous faire offrir une séance avec moi ? Mes bons cadeaux sont disponibles pour toutes mes prestations (1h, soirée, nuit).</p>
            <Link href="/contact" className="inline-block px-12 py-5 border border-amber-900 text-amber-600 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-amber-600 hover:text-white transition-all duration-500">
              Commander un Bon Cadeau
            </Link>
          </div>
        </section>

        {/* RÉASSURANCE */}
        <div className="flex justify-center gap-16 border-y border-zinc-900 py-12">
          <div className="flex flex-col items-center gap-2"><ShieldCheck className="text-zinc-800" size={24} /><span className="text-[9px] font-sans uppercase tracking-[0.3em] text-zinc-600">Paiement Sécurisé</span></div>
          <div className="flex flex-col items-center gap-2"><Heart className="text-zinc-800" size={24} /><span className="text-[9px] font-sans uppercase tracking-[0.3em] text-zinc-600">Sélection Exclusive</span></div>
          <div className="flex flex-col items-center gap-2"><Sparkles className="text-zinc-800" size={24} /><span className="text-[9px] font-sans uppercase tracking-[0.3em] text-zinc-600">Emballage Discret</span></div>
        </div>

      </main>

      <FloatingCartBar />
      <CartDrawer />

      <footer className="py-20 border-t border-zinc-900 text-center">
        <p className="text-[10px] text-zinc-800 uppercase tracking-[0.5em] font-sans">Gabriella — L'élégance jusque dans le détail</p>
      </footer>
    </div>
  )
}
