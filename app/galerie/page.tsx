'use client'

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Camera, Maximize2, Filter, Heart, ChevronDown, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Galerie() {
  const [filter, setFilter] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const photos = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    src: `/images/gabriella/photo-${i + 1}.jpeg`,
    category: i % 3 === 0 ? 'boudoir' : i % 3 === 1 ? 'lifestyle' : 'lingerie',
    alt: `Gabriella - Shooting Session ${i + 1}`
  }));

  const filteredPhotos = filter === 'all' 
    ? photos 
    : photos.filter(p => p.category === filter);

  // --- LOGIQUE DE NAVIGATION ---
  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % photos.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + photos.length) % photos.length);
    }
  };

  // --- LOGIQUE DE SWIPE MOBILE ---
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextImage();
    if (isRightSwipe) prevImage();
  };

  useEffect(() => {
    if (selectedImageIndex !== null) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [selectedImageIndex]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 font-serif selection:bg-amber-500/30">
      
      {/* HEADER GALERIE */}
      <section className="pt-24 pb-12 px-6 text-center">
        <span className="text-[10px] uppercase tracking-[0.5em] text-amber-600 font-sans font-bold mb-4 block">Capturer l'Éphémère</span>
        <h1 className="text-5xl md:text-7xl text-white italic tracking-tighter mb-8 text-shadow-lg">Galerie Privée</h1>
        <p className="max-w-xl mx-auto text-zinc-500 italic text-lg leading-relaxed">"Le regard est le premier pas vers l'intimité. Découvrez les mille facettes de mon univers."</p>
        <div className="mx-auto mt-10 h-[1px] w-12 bg-amber-900" />
      </section>

      {/* FILTRES */}
      <nav className="sticky top-0 z-10 bg-[#0a0a0a]/90 backdrop-blur-md border-y border-zinc-900/50 py-6 mb-12">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16 text-[10px] uppercase tracking-[0.3em] font-sans font-bold">
          {[{ id: 'all', label: 'Toutes les vues' }, { id: 'boudoir', label: 'Boudoir' }, { id: 'lingerie', label: 'Lingerie' }, { id: 'lifestyle', label: 'Lifestyle' }].map((cat) => (
            <button key={cat.id} onClick={() => setFilter(cat.id)} className={`transition-all duration-500 hover:text-white ${filter === cat.id ? 'text-amber-600' : 'text-zinc-600'}`}>
              {cat.label}
              {filter === cat.id && <span className="block h-[1px] w-full bg-amber-600 mt-1 animate-pulse" />}
            </button>
          ))}
        </div>
      </nav>

      {/* GRILLE PHOTOS */}
      <main className="max-w-[1400px] mx-auto px-6 pb-32">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredPhotos.map((photo) => (
            <div key={photo.id} onClick={() => setSelectedImageIndex(photo.id)} className="relative break-inside-avoid group cursor-pointer overflow-hidden border border-zinc-900/50 bg-zinc-950">
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-700 z-10 flex flex-col justify-between p-6">
                <div className="flex justify-end"><Maximize2 size={18} className="text-white/70 hover:text-amber-500 transition-colors" /></div>
                <div className="space-y-1">
                   <span className="text-[9px] uppercase tracking-widest text-amber-500 font-sans">Série {photo.category}</span>
                   <p className="text-white italic text-sm">Gabriella No. {photo.id + 1}</p>
                </div>
              </div>
              <Image src={photo.src} alt={photo.alt} width={500} height={700} loading="lazy" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out" />
            </div>
          ))}
        </div>

        {/* LIGHTBOX AVEC SWIPE MOBILE */}
        {selectedImageIndex !== null && (
          <div 
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 transition-all duration-500"
            onClick={() => setSelectedImageIndex(null)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"><X size={32} /></button>
            <button onClick={prevImage} className="absolute left-4 text-white/20 hover:text-amber-500 transition-colors hidden md:block z-[110]"><ChevronLeft size={48} /></button>

            <div className="relative w-full h-full max-w-4xl max-h-[80vh] pointer-events-none select-none">
              <Image src={photos[selectedImageIndex].src} alt="Agrandissement" fill className="object-contain animate-in zoom-in-95 duration-300" priority />
              <div className="absolute -bottom-12 left-0 right-0 text-center">
                <p className="text-white italic text-lg">Gabriella — No. {selectedImageIndex + 1}</p>
                <p className="text-[10px] uppercase tracking-[0.4em] text-amber-900 font-sans">Série {photos[selectedImageIndex].category}</p>
              </div>
            </div>

            <button onClick={nextImage} className="absolute right-4 text-white/20 hover:text-amber-500 transition-colors hidden md:block z-[110]"><ChevronRight size={48} /></button>
          </div>
        )}

        {/* INDICATEUR DE FIN */}
        <div className="mt-20 text-center space-y-4">
            <div className="inline-block animate-bounce text-zinc-800"><ChevronDown size={24} /></div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-700 font-sans">Découvrez la suite sur mes réseaux privés</p>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-20 border-t border-zinc-900 text-center">
        <p className="text-[10px] text-zinc-800 uppercase tracking-[0.5em] font-sans">Gabriella — Galerie Officielle — Droits Réservés</p>
      </footer>
    </div>
  );
}