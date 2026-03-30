'use client'

import Link from "next/link";
import Image from "next/image";
import { Sparkles, Star, MapPin, ShieldCheck, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 font-serif selection:bg-amber-500/30">
      
      {/* Skip Link */}
      <a href="#contenu" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-amber-600 focus:text-white">
        Passer au contenu principal
      </a>

      <main id="contenu" className="mx-auto max-w-2xl px-6 pb-24 pt-12">
        
        {/* SECTION ACCUEIL */}
        <section id="accueil" className="mb-20 text-center">
          <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-amber-600 font-sans font-bold">
            Bienvenue chez
          </p>
          <h1 className="text-4xl md:text-5xl leading-tight text-white italic tracking-tighter">
            Gabriella Indépendante <span className="not-italic">🍀</span>
          </h1>
          <div className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-amber-800 to-transparent" />
        </section>

        {/* SECTION PRÉSENTATION */}
        <article id="presentation" className="space-y-8 text-center mb-24">
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-sans">
            Pour tout savoir
          </h2>
          <div className="space-y-6 text-[16px] leading-relaxed italic text-zinc-300">
            <p>
              Je m’appelle <span className="text-white">Gabriella</span>, Française d’origine espagnole italienne. 
              Après une première carrière dans le cinéma adulte, j’ai choisi de me réinventer pour devenir 
              Escort Girl indépendante et masseuse professionnelle, afin d’offrir une expérience unique, raffinée et inoubliable.
            </p>
            <p>
              Aujourd’hui, j’incarne l’élégance et la sensualité d’une Courtisane VIP moderne : 
              attentive, cultivée et passionnée, je propose des moments d’exception où séduction, 
              complicité et plaisir se rencontrent harmonieusement.
            </p>
            <p>
              Je suis disponible aussi bien pour des rendez-vous privés que pour des déplacements, 
              en France comme à l’étranger.
            </p>
            <p className="text-amber-500/80">
              Je ne pratique cette activité que par choix et par plaisir, ce qui fait de chaque rencontre 
              une expérience authentique, sincère et haut de gamme.
            </p>
          </div>
        </article>

        {/* SECTION SERVICES (L'OFFRE) */}
        <article
          id="services"
          className="relative mt-16 overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-900/10 p-8 shadow-2xl"
        >
          <header className="mb-12 text-center space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-700 font-sans">
              Offre Prestige
            </p>
            <h2 className="text-3xl font-normal text-white italic">Mes services</h2>
            <div className="mx-auto h-[1px] w-12 bg-amber-600" />
          </header>

          <div className="space-y-0 font-sans text-[15px] leading-relaxed text-zinc-400">
            <div className="border-b border-zinc-900 pb-6 text-zinc-200 italic font-serif text-lg text-center">
              "Escort Girl, vous allez me découvrir à travers mon site, mes photos, ou mes pratiques, pour n’avoir plus qu’une envie, me rencontrer."
            </div>

            <p className="border-b border-zinc-900 py-6">
              Pour mes fans : je vous propose également de vivre une expérience <span className="text-amber-500">PSE</span> (Porn Star Experience).
            </p>

            <p className="border-b border-zinc-900 py-6 leading-relaxed">
              Je suis une escorte de standing international de grande classe. J’officie en accompagnatrice également sur toutes les villes de France, uniquement sur réservation de rendez-vous.
            </p>

            <p className="border-b border-zinc-900 py-6">
              J’offre mes services aux : hommes, femmes et personnes transgenres et en situation de handicap.
            </p>

            <p className="border-b border-zinc-900 py-6">
              Je reçois chez moi, et me déplace également à votre hôtel minimum requis 3 étoiles ou à votre domicile. 
              Je peux me rendre disponible pour vous en journée et soirée si je suis prévenue suffisamment à l'avance.
            </p>

            {/* Accentuation Fantasmes */}
            <div className="my-8 rounded-xl bg-zinc-950 px-6 py-6 border border-amber-900/20 shadow-inner">
              <p className="text-zinc-200 text-center italic font-serif leading-relaxed">
                Envie d’un massage sensuel ? D’un scénario insolite dans un lieu atypique, d’un fantasme porno-chic ?
              </p>
            </div>

            <p className="border-b border-zinc-900 py-6 text-zinc-300 italic font-serif text-[16px]">
              Véritable déesse du plaisir, amante passionnée, libertine échangiste hédoniste, je suis l’Escort Girl GFE dont vous rêvez…
            </p>

            <p className="border-b border-zinc-900 py-6">
              De l’érotisme, du sex-appeal, du plaisir charnel et mental, notre rendez-vous sera un moment d’exception qui vous fera tout oublier pour ne vivre que l’instant présent, un instant gorgé de désir et de sexe.
            </p>

            <p className="border-b border-zinc-900 py-6">
              Mes connaissances me disent sensuelle, pétillante, sexy, élégante, naturelle, joueuse, coquine et libertine. Une beauté méditerranéenne hispanique de 28 ans (1,65m, 60kg) avec qui vous passerez d’excellents moments.
            </p>

            <p className="border-b border-zinc-900 py-6 italic text-amber-500/90">
              C’est avec joie que je vous ferai découvrir les délices, la sensualité érotique, Porno-chic…
            </p>

            <p className="border-b border-zinc-900 py-6">
              J&apos;ai un premier devoir qui est d’être à la hauteur de vos exigences et de vos attentes, d’adapter ma tenue vestimentaire à la situation, d’être d’une discrétion absolue.
            </p>

            <p className="border-b border-zinc-900 py-6">
              Je ferai tout pour qu’au cours de notre rencontre toutes vos envies et désirs deviennent réalité.
            </p>

            <p className="border-b border-zinc-900 py-6 text-sm tracking-wide uppercase text-zinc-500">
              Lingerie sexy, bas, porte jarretelles, tenues coquines, escarpins, massage sensuel…
            </p>

            <p className="border-b border-zinc-900 py-6">
              Call girl GFE, je saurai incarner le rôle de vos fantasmes les plus fous.
            </p>

            <p className="border-b border-zinc-900 py-6">
              Pour les couples qui souhaitent faire appel à mes services pour pimenter vos ébats, je prendrai grand plaisir à m’occuper de madame sans négliger monsieur et ses attentes.
            </p>

            <p className="border-b border-zinc-900 py-6 leading-relaxed">
              Bi-sexuelle depuis toujours et libertine échangiste confirmée, je fréquente le milieu libertin et le camp naturiste du Cap d’Agde depuis de nombreuses années.
            </p>

            <p className="border-b border-zinc-900 py-6">
              Je saurai m’adapter à toutes vos envies, il vous suffira pour ce faire de m’en faire part sans plus attendre ! 
              Vous pouvez lire mes jeux érotiques et scénarios coquins sur ma page <Link href="/fantasmes" className="text-amber-600 underline">« Fantasmes »</Link>
            </p>

            <p className="pt-6 text-white text-center italic font-serif">
              Je suis de nature douce et sincère, je devine vos désirs, séduis et agis avec finesse.
            </p>
          </div>
        </article>

        {/* SECTION TÉMOIGNAGES */}
        <section id="temoignages" className="mt-24 border-t border-zinc-900 pt-16 text-center">
          <Link href="/temoignages">
            <h2 className="text-xl text-white italic hover:text-amber-500 transition-colors inline-block border-b border-amber-900/50 pb-2">
              Commentaires / Témoignages
            </h2>
          </Link>
          <div className="mt-10 relative group overflow-hidden rounded-xl border border-zinc-900">
            <Image 
              className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 scale-[1.01] group-hover:scale-105" 
              src="/images/1.jpeg" 
              alt="Photo de Gabriella" 
              width={500} 
              height={1000} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          </div>
        </section>

        {/* DISCLAIMER LÉGAL */}
        <p className="mt-12 text-center text-[10px] leading-relaxed text-zinc-600 uppercase tracking-widest px-4 font-sans">
          Ce site détaille l'activité légale et indépendante d'une accompagnatrice intermittente en France. 
          Toute autre interaction éventuelle relèverait de la sphère intime entre deux adultes consentants et serait dissociée de la prestation initiale.
        </p>

        {/* SOCIALS */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
          {["Telegram", "WhatsApp", "Facebook", "Instagram", "X"].map((label) => (
            <SocialPill key={label} label={label} />
          ))}
        </div>

        {/* NOTE / ÉVALUATION */}
        <section className="mt-16 rounded-xl border border-zinc-900 bg-zinc-950 p-8 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4 font-sans">Évaluation</p>
          <div className="flex justify-center gap-2 text-amber-600" aria-hidden>
            {[1,2,3,4,5].map((_, i) => (
              <Star key={i} size={16} fill={i < 4 ? "currentColor" : "none"} strokeWidth={1.5} />
            ))}
          </div>
          <p className="mt-4 text-[11px] text-zinc-700 italic font-sans uppercase tracking-widest">
            Note indicative
          </p>
        </section>

        {/* COPYRIGHT */}
        <p className="mt-16 text-center text-[10px] text-zinc-800 tracking-[0.3em] font-sans uppercase">
          © {new Date().getFullYear()} — GABRIELLA INDÉPENDANTE
        </p>
      </main>
    </div>
  );
}

function SocialPill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-zinc-900 px-5 py-2 text-[10px] uppercase tracking-widest text-zinc-500 font-sans hover:border-amber-900 hover:text-amber-500 transition-all cursor-pointer">
      {label}
    </span>
  );
}