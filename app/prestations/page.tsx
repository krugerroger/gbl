'use client'

import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, Clock, MapPin, Heart, Star, 
  Flame, User, Users, GraduationCap, 
  Stethoscope, Briefcase, Footprints, ShieldCheck 
} from "lucide-react";

export default function Prestations() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 font-serif selection:bg-amber-500/30">
      
      {/* HEADER & INTRODUCTION */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden border-b border-zinc-900">
      <div className="absolute inset-0 z-0">
          <Image 
            src="/images/1.jpeg" // Remplacez par votre image de fond
            alt="Ambiance luxueuse"
            fill
            className="object-cover opacity-40 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/80" />
        </div>
        <div className="relative z-10 text-center px-6">
            <span className="text-[10px] uppercase tracking-[0.5em] text-amber-600 font-sans font-bold mb-4 block">
            L'Excellence & Le Plaisir
            </span>
            <h1 className="text-4xl md:text-6xl text-white italic tracking-tighter mb-8">
            Mes Prestations
            </h1>
            <div className="max-w-3xl mx-auto space-y-6 text-zinc-400 italic text-lg leading-relaxed">
            <p>Découvrez ci-dessous les prestations et services que je vous propose.</p>
            <p className="text-white">Entrez dans l’Univers du charme, du Bien-être et de la détente absolue à domicile ou à l’hôtel.</p>
            </div>
            <div className="mx-auto mt-10 h-[1px] w-12 bg-amber-900" />
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-20">
        
        {/* SECTION : CADRE & DISPONIBILITÉS */}
        <section className="grid md:grid-cols-2 gap-12 mb-32 items-center bg-zinc-950/30 p-8 rounded-sm border border-zinc-900">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-amber-600">
              <Clock size={20} strokeWidth={1.5} />
              <h2 className="font-sans text-xs uppercase tracking-widest font-bold">Organisation & Horaires</h2>
            </div>
            <p className="text-sm leading-relaxed italic">
              Je vous reçois 6j/7 de <span className="text-white">10h00 à 00h00</span> sur réservation de RDV pris la veille pour le lendemain ou le matin pour l’après-midi. 
            </p>
            <p className="text-xs text-zinc-500 font-sans uppercase tracking-widest leading-loose">
              Pour un RDV en cours de journée, merci de me contacter avec au moins 2 heures d’avance. 
              <span className="block mt-2 text-amber-800">Je ne fais pas de prise de rendez-vous de dernière minute.</span>
            </p>
          </div>
          <div className="space-y-4 border-l border-zinc-900 pl-8">
            <p className="text-sm italic text-zinc-300">
              "Massage traditionnel, naturiste, tantrique, body body, sensuel, érotique, initiation SM, fétichisme... chez moi dans ma maison ou à votre hôtel."
            </p>
          </div>
        </section>

        <div className="space-y-32">
          
          {/* CATEGORIE 1 : SERVICES PROPOSÉS */}
          <section className="space-y-16">
            <div className="flex items-center gap-4">
              <span className="h-px flex-1 bg-zinc-900"></span>
              <h2 className="text-xs uppercase tracking-[0.4em] text-amber-600 font-sans font-bold">Services Proposés</h2>
              <span className="h-px flex-1 bg-zinc-900"></span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { label: "PSE: Porn Star Expérience", icon: <Flame size={24}/> },
                { label: "Situation de handicap", icon: <Heart size={24}/> },
                { label: "INCALL dans ma villa", icon: <MapPin size={24}/> },
                { label: "OUTCALL Domicile & Hôtel", icon: <User size={24}/> },
                { label: "Club Échangiste / Sauna", icon: <Users size={24}/> },
                { label: "Couple & Échangisme", icon: <Sparkles size={24}/> },
                { label: "Trio Coquin / Duo Lesbien", icon: <Star size={24}/> },
                { label: "GFE: Girl Friend Expérience", icon: <Heart size={24} fill="currentColor"/> },
              ].map((item, i) => (
                <div key={i} className="text-center space-y-4 group">
                  <div className="mx-auto w-12 h-12 flex items-center justify-center text-zinc-700 group-hover:text-amber-500 transition-colors duration-500">
                    {item.icon}
                  </div>
                  <p className="text-xs uppercase tracking-widest text-zinc-300 group-hover:text-white">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CATEGORIE 2 : L'ART DU MASSAGE */}
          <section className="space-y-16">
            <h2 className="text-center italic text-3xl text-white">L'Art du Massage</h2>
            <div className="grid md:grid-cols-2 gap-px bg-zinc-900/50 border border-zinc-900">
              {[
                "Massage Naturiste Californien Relaxant",
                "Massage Naturel Tantrique du Lingam",
                "Massage naturiste sensuel Body Body en corps à corps",
                "Massage naturiste sensuel érotique Body Body Réciproque"
              ].map((msg, i) => (
                <div key={i} className="bg-[#0a0a0a] p-10 hover:bg-zinc-950 transition-colors">
                  <p className="text-amber-700 font-sans text-[10px] mb-2 font-bold">TECHNIQUE {i+1}</p>
                  <p className="italic text-zinc-300 text-lg">{msg}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CATEGORIE 3 : SCÉNARIOS & FANTASMES */}
          <section className="space-y-16">
             <div className="text-center space-y-4">
                <h2 className="text-xs uppercase tracking-[0.4em] text-amber-600 font-sans font-bold">Scénarios & Fantasmes</h2>
                <p className="text-zinc-500 italic">Osez incarner vos désirs les plus secrets...</p>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 text-center">
                {[
                  { t: "Secrétaire sexy", i: <Briefcase size={20}/> },
                  { t: "Infirmière coquine", i: <Stethoscope size={20}/> },
                  { t: "Hôtesse de l'air", i: <PlaneIcon/> },
                  { t: "Soubrette soumise", i: <Sparkles size={20}/> },
                  { t: "Élève Indisciplinée", i: <GraduationCap size={20}/> },
                  { t: "Poupée sexuelle", i: <Heart size={20}/> },
                  { t: "Gynécologue", i: <User size={20}/> },
                  { t: "Escort pour EVG", i: <Users size={20}/> },
                  { t: "Vendeuse sans pudeur", i: <TagIcon/> },
                  { t: "Une si belle journée", i: <SunIcon/> },
                  { t: "Vendeuse de Sextoys", i: <Sparkles size={20}/> },
                  { t: "Dégustation Coquine", i: <Flame size={20}/> },
                  { t: "Souvenirs d'enfance", i: <Star size={20}/> },
                  { t: "Perte de Virginité", i: <Heart size={20}/> },
                  { t: "Une belle fessée", i: <HandIcon/> },
                  { t: "Anulingus Gourmand", i: <Star size={20}/> },
                ].map((s, idx) => (
                  <div key={idx} className="space-y-2 group cursor-default">
                    <div className="text-zinc-800 group-hover:text-amber-900 transition-colors flex justify-center">{s.i}</div>
                    <p className="text-[13px] italic text-zinc-400 group-hover:text-zinc-200 transition-colors">{s.t}</p>
                  </div>
                ))}
             </div>
          </section>

          {/* CATEGORIE 4 : INITIATION & FÉTICHISME */}
          <section className="border-t border-zinc-900 pt-20">
            <div className="max-w-2xl mx-auto space-y-12">
               <h2 className="text-center text-xs uppercase tracking-[0.4em] text-amber-600 font-sans font-bold">Initiation & Fétichisme</h2>
               <div className="space-y-6">
                  {[
                    { t: "Initiation SM Soft ou Hard", i: <ShieldCheck size={18}/> },
                    { t: "Baise-moi comme un chien", i: <Flame size={18}/> },
                    { t: "Fétichisme Collant / Chaussettes", i: <Sparkles size={18}/> },
                    { t: "Fétichisme Pied", i: <Footprints size={18}/> }
                  ].map((f, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-zinc-900 pb-4 group">
                      <span className="italic text-zinc-300 group-hover:text-white transition-colors">{f.t}</span>
                      <span className="text-amber-900 group-hover:text-amber-500 transition-all">{f.i}</span>
                    </div>
                  ))}
               </div>
            </div>
          </section>

          {/* CITATION FINALE */}
          <section className="pt-20 text-center space-y-12">
            <div className="space-y-4">
              <p className="text-3xl text-white italic tracking-tight">
                "Le meilleur moyen de résister à la tentation est d'y céder."
              </p>
              <div className="mx-auto h-[1px] w-20 bg-amber-800/30" />
              <p className="text-amber-600 font-sans text-[10px] uppercase tracking-[0.5em] font-bold">
                Érotiquement vôtre, Gabriella
              </p>
            </div>

            <Link 
              href="/reservation" 
              className="inline-block px-12 py-5 bg-white text-black uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-amber-600 hover:text-white transition-all duration-500"
            >
              Prendre rendez-vous
            </Link>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-20 border-t border-zinc-900 text-center">
        <p className="text-[10px] text-zinc-800 uppercase tracking-[0.5em] font-sans">
          Gabriella Indépendante — Discrétion & Volupté
        </p>
      </footer>
    </div>
  );
}

// Composants Icones personnalisés simples (placeholders)
function PlaneIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3-3 .5c-.5 0-.8.3-.9.7l-.1.5c0 .5.3.8.8.9l3.5 1 1 3.5c.1.5.4.8.9.8l.5-.1c.4-.1.7-.4.7-.9l.5-3 3-2 3.5 5.2c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/></svg> }
function TagIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01"/></svg> }
function SunIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg> }
function HandIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg> }