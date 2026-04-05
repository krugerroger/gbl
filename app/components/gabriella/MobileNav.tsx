"use client";

import { useEffect, useState } from "react";
import { ShoppingBag, Heart, Menu, X, ChevronRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/revelations", label: "Révélations" },
  { href: "/pratiques", label: "Pratiques" },
  { href: "/prestations", label: "Prestations" },
  { href: "/tarifs", label: "Mes Tarifs" },
  { href: "/blog", label: "Blog / Actualités" },
  { href: "/galerie", label: "Ma Galerie" },
  { href: "/commentaires-temoignages", label: "Commentaires & Témoignages" },
  { href: "/cgv", label: "Conditions & FaQs" },
  { href: "/shop", label: "Boutique" },
  { href: "/reservation", label: "Réservation" },
  { href: "/contact", label: "Contact" },
  { href: "/partenaires", label: "Partenaires" },
  { href: "/histoire", label: "Mon Histoire" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      {/* Header Sticky */}
      <header className="sticky top-0 z-50 border-b border-zinc-900 bg-black/80 backdrop-blur-xl">
        <div className="flex h-16 max-w-lg items-center justify-between px-6 mx-auto">
          <a href="/" className="font-serif text-xl tracking-widest text-white italic">
            Gabriella<span className="text-amber-500">.</span>
          </a>
          
          <div className="flex items-center gap-5">
            
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-white transition-all hover:bg-zinc-900 active:scale-90"
            >
              <span className="sr-only">Menu</span>
              {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 transform bg-black transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex h-full flex-col pt-20">
          <nav className="flex-1 overflow-y-auto px-8 pb-12">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-[1px] w-8 bg-amber-600"></div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber-600 font-sans font-bold">Navigation Privée</span>
            </div>
            
            <ul className="space-y-1">
              {NAV_LINKS.map((item, index) => (
                <li key={item.href} style={{ transitionDelay: `${index * 50}ms` }} className={`${open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'} transition-all duration-500`}>
                  <a
                    href={item.href}
                    className="group flex items-center justify-between border-b border-zinc-900 py-4 text-lg font-serif text-zinc-300 transition-colors hover:text-white active:text-amber-500"
                    onClick={() => setOpen(false)}
                  >
                    <span>{item.label}</span>
                    <ChevronRight size={16} className="text-zinc-800 group-hover:text-amber-600 transition-colors" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Signature au bas du menu */}
            <div className="mt-12 text-center italic text-zinc-700 font-serif text-sm">
              "L'élégance est la seule beauté qui ne se fane jamais."
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}