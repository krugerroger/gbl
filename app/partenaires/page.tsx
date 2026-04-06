'use client'

import Link from "next/link";
import { Handshake, ExternalLink, Globe, Heart, ShieldCheck, Star } from "lucide-react";

export default function Partenaires() {
  const categories = [
    {
      titre: "Annuaires de Référence France",
      sites: [
        { nom: "SexeModel", url: "https://sexemodel.com", desc: "Libertines annonces - Sexemodel, Etre en adultes !" },
        { nom: "Erosmix", url: "https://erosmix.fr", desc: "VIP Directory, photos réelles et services d'escorte haut de gamme en France." },
        { nom: "1Baiser", url: "https://1baiser.com", desc: "Escortes de luxe et indépendantes vérifiées en France." },
        { nom: "Ladys.one", url: "https://ladys.one", desc: "Services locaux d'escorte indépendants partout dans le monde." },
        { nom: "EscortSexe.net", url: "https://escortsexe.net", desc: "Annuaires d'annonces escortes, trans et boys en France." },
        { nom: "6annonce", url: "https://6annonce.net", desc: "Annuaire d'escorte à Paris, Lyon, Marseille et partout en France." },
        { nom: "Tescort", url: "https://tescort.com", desc: "Annonces d'escortes indépendantes avec discrétion garantie." },
        { nom: "Niamodel", url: "https://niamodel.com", desc: "Annuaire des escortes féminines et shemales en France." },
        { nom: "EscortE", url: "https://escorte.com", desc: "Escortes de luxe et massages érotiques indépendants." },
      ]
    },
    {
      titre: "Réseaux Libertins & Rencontres",
      sites: [
        { nom: "JM Date", url: "https://jm-date.com", desc: "Réseau social des rencontres libres : seul, en couple ou à plusieurs." },
        { nom: "LOveSita", url: "https://lovesita.com", desc: "Rencontre libertine discrète, sécurisée et respectueuse." },
        { nom: "VivaSexe", url: "https://vivasexe.com", desc: "Annonces sexe réelles et rencontres coquines sans tabou." },
        { nom: "Renole", url: "https://renole.com", desc: "Site destiné aux adultes avec escortes, gays et trans de France." },
      ]
    },
    {
      titre: "International & Spécialisés",
      sites: [
        { nom: "Devozki", url: "https://devozki.com", desc: "International VIP escort directory and adult listings." },
        { nom: "HUNQZ", url: "https://hunqz.com", desc: "The top site for Gay, Bi and Trans Escorts and companions." },
        { nom: "Escorts69", url: "https://escorts69.fr", desc: "Accès exclusif aux meilleures escorts trans en France." },
        { nom: "Fgirl (Facegirl)", url: "https://fgirl.ch", desc: "L'annuaire érotique N°1 en Suisse (Genève, Lausanne)." },
        { nom: "Escort46", url: "https://escort46.fr", desc: "Trouvez le meilleur massage et escortes dans votre région." },
        { nom: "Escort-Luxembourg", url: "https://escort-luxembourg.lu", desc: "Trouver une escort girl au Luxembourg." },
        { nom: "Encantadoras", url: "https://encantadoras.com", desc: "Escorts reales y verificadas en España." },
        { nom: "Escort Galleries", url: "https://escort-galleries.com", desc: "Largest international escort service search engine." },
        { nom: "Top Escort Babes", url: "https://topescortbabes.com", desc: "Annonces d'escortes avec photos et vidéos VIP." },
        { nom: "Escortlist VIP", url: "https://escortlist.vip", desc: "Worldwide independent & agency escort catalogue." },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 font-serif selection:bg-amber-500/30">
      
      {/* HEADER SECTION */}
      <section className="pt-24 pb-16 px-6 text-center border-b border-zinc-900/50">
        <span className="text-[10px] uppercase tracking-[0.5em] text-amber-600 font-sans font-bold mb-4 block">
          Réseau d'Excellence
        </span>
        <h1 className="text-4xl md:text-6xl text-white italic tracking-tighter mb-8">
          Partenaires & Plateformes
        </h1>
        <p className="max-w-2xl mx-auto text-zinc-500 italic text-lg leading-relaxed">
          "La confiance se bâtit sur la transparence. Je suis fière de collaborer avec les plateformes les plus sérieuses du secteur."
        </p>
        <div className="mx-auto mt-10 h-[1px] w-12 bg-amber-900" />
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20">
        
        {/* LOGOS / GRID SYSTEM */}
        <div className="space-y-32">
          {categories.map((cat, idx) => (
            <section key={idx} className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-8 bg-amber-900" />
                <h2 className="text-xs uppercase tracking-[0.4em] text-white font-sans font-bold">
                  {cat.titre}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.sites.map((site, i) => (
                  <Link 
                    href={site.url} 
                    key={i} 
                    target="_blank"
                    className="group relative p-8 bg-zinc-950/40 border border-zinc-900 hover:border-amber-900/50 transition-all duration-700 block"
                  >
                    {/* Visual Placeholder for Logo */}
                    <div className="mb-6 flex items-center justify-between">
                      <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center text-amber-900 group-hover:text-amber-500 transition-colors">
                        <Globe size={20} strokeWidth={1} />
                      </div>
                      <ExternalLink size={12} className="text-zinc-800 group-hover:text-amber-700 transition-colors" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg text-white italic group-hover:text-amber-500 transition-colors">
                        {site.nom}
                      </h3>
                      <p className="text-[11px] text-zinc-600 italic leading-relaxed line-clamp-2">
                        {site.desc}
                      </p>
                    </div>

                    {/* Decorative Border Effect */}
                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-600 group-hover:w-full transition-all duration-700" />
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA SECTION */}
        <section className="mt-40 bg-zinc-950 p-12 border border-zinc-900 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl text-white italic">Devenir Partenaire</h2>
            <p className="max-w-xl mx-auto text-zinc-500 italic">
              Vous gérez une plateforme de confiance ou un annuaire de prestige ? 
              Contactez-moi pour discuter d'un échange de visibilité.
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-12 py-5 border border-zinc-800 text-zinc-400 uppercase tracking-[0.3em] text-[10px] font-bold hover:border-amber-900 hover:text-amber-500 transition-all duration-500"
            >
              Proposer une collaboration
            </Link>
          </div>
          <Heart size={150} className="absolute -bottom-10 -left-10 text-zinc-900/20 -rotate-12" />
        </section>

        {/* TRUST BADGES */}
        <div className="mt-32 flex flex-wrap justify-center gap-12 border-y border-zinc-900 py-12">
           <div className="flex items-center gap-3">
             <ShieldCheck className="text-amber-900" size={20} />
             <span className="text-[9px] font-sans uppercase tracking-[0.3em] text-zinc-600">Liens Vérifiés</span>
           </div>
           <div className="flex items-center gap-3">
             <Star className="text-amber-900" size={20} />
             <span className="text-[9px] font-sans uppercase tracking-[0.3em] text-zinc-600">Partenaires Premium</span>
           </div>
           <div className="flex items-center gap-3">
             <Handshake className="text-amber-900" size={20} />
             <span className="text-[9px] font-sans uppercase tracking-[0.3em] text-zinc-600">Échange Mutuel</span>
           </div>
        </div>

      </main>

      <footer className="py-20 border-t border-zinc-900 text-center">
        <p className="text-[10px] text-zinc-800 uppercase tracking-[0.5em] font-sans">
          Gabriella — France — 2026
        </p>
      </footer>
    </div>
  );
}