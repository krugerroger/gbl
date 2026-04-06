'use client'

import { useState } from 'react';
import Link from "next/link";
import { 
  Phone, Send, ShieldCheck, Clock, MapPin, 
  MessageSquare, Upload, ExternalLink, AlertTriangle, 
  CheckCircle2, CreditCard, Mail, ChevronLeft, Sparkles, User, Check
} from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────

interface FormData {
  name: string
  email: string
  duration: string
  datetime: string
  paymentFile: File | null
  additionalMessage: string
}

// ── Steps ──────────────────────────────────────────────────────────────────

const STEPS = [
  { id: 1, label: 'Détails' },
  { id: 2, label: 'Vérification' },
  { id: 3, label: 'Confirmé' },
]

const DURATIONS: { value: string; label: string; price: string }[] = [
  { value: '30min_day',     label: '30min — Jour',                    price: '50€' },
  { value: '30min_night',   label: '30min — Nuit',                    price: '70€' },
  { value: '1h_day',        label: '1h — Jour',                       price: '150€' },
  { value: '1h_evening',    label: '1h — Soir',                       price: '170€' },
  { value: '1h30_day',      label: '1h30 — Jour',                     price: '240€' },
  { value: '1h30_evening',  label: '1h30 — Soir',                     price: '260€' },
  { value: '2h_day',        label: '2h — Jour',                       price: '300€' },
  { value: '2h_evening',    label: '2h — Soir',                       price: '320€' },
  { value: '3h_day',        label: '3h — Jour',                       price: '400€' },
  { value: '3h_evening',    label: '3h — Soir',                       price: '420€' },
  { value: '4h_afternoon',  label: 'Après-midi détente (4h, avant 19h)', price: '550€' },
  { value: '4h_evening',    label: 'Soirée Délice (20h–00h, 4h)',     price: '670€' },
  { value: '5h_evening',    label: 'Soirée Torride (20h–01h, 5h)',    price: '720€' },
  { value: '12h_night',     label: 'Nuit Complète (20h–08h, 12h)',    price: '800€' },
]

// ── Helpers ────────────────────────────────────────────────────────────────

const formatDateTime = (raw: string) => {
  if (!raw) return '—'
  const d = new Date(raw)
  return d.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })
}

const getDurationLabel = (value: string) => DURATIONS.find(d => d.value === value)?.label ?? '—'
const getDurationPrice = (value: string) => DURATIONS.find(d => d.value === value)?.price ?? '—'

// ── Component ──────────────────────────────────────────────────────────────

export default function Reservation() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    duration: '1h_day',
    datetime: '',
    paymentFile: null,
    additionalMessage: '',
  })

  // ── Validation ────────────────────────────────────────────────────────────

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim())
      newErrors.name = 'Votre prénom est requis'

    if (!formData.email.trim())
      newErrors.email = 'Votre adresse email est requise'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Adresse email invalide'

    if (!formData.duration)
      newErrors.duration = 'Choisissez une durée'

    if (!formData.datetime)
      newErrors.datetime = 'Choisissez une date et heure'
    else if (new Date(formData.datetime) <= new Date())
      newErrors.datetime = 'Veuillez choisir une date future'

    if (!formData.paymentFile)
      newErrors.paymentFile = 'La photo de la recharge est obligatoire'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // ── Handlers ──────────────────────────────────────────────────────────────

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    setFileName(file?.name ?? null)
    setFormData(prev => ({ ...prev, paymentFile: file }))
    if (errors.paymentFile) setErrors(prev => ({ ...prev, paymentFile: '' }))
  }

  const handleNext = () => {
    if (validate()) setCurrentStep(2)
  }

  const handleBack = () => {
    setServerError(null)
    setCurrentStep(1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const fd = new FormData()
      fd.append('name', formData.name)
      fd.append('email', formData.email)
      fd.append('duration', formData.duration)
      fd.append('datetime', formData.datetime)
      fd.append('additionalMessage', formData.additionalMessage)
      if (formData.paymentFile) fd.append('paymentFile', formData.paymentFile)

      const response = await fetch('/api/upload', { method: 'POST', body: fd })
      const result = await response.json()
      if (response.ok) {
        setCurrentStep(3)
      } else {
        setServerError(result.error || 'Une erreur est survenue, veuillez réessayer.')
        console.error('Erreur:', result.error)
      }
    } catch (err) {
      console.error('Erreur:', err)
    } finally {
      setIsLoading(false)
    }
  }

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 font-serif selection:bg-amber-500/30">
      
      {/* HEADER */}
      <section className="pt-24 pb-16 px-6 text-center border-b border-zinc-900/50">
        <span className="text-[10px] uppercase tracking-[0.5em] text-amber-600 font-sans font-bold mb-4 block">
          L'Instant Privé
        </span>
        <h1 className="text-4xl md:text-6xl text-white italic tracking-tighter mb-8">
          Réserver un Moment
        </h1>
        <p className="max-w-2xl mx-auto text-zinc-500 italic text-lg leading-relaxed">
          "Le meilleur moyen de résister à la tentation est d'y céder."
        </p>
        <div className="mx-auto mt-10 h-[1px] w-12 bg-amber-900" />
      </section>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-20">

          {/* COLONNE GAUCHE */}
          <div className="space-y-12">
            <section className="space-y-8">
              <h2 className="text-white text-xs uppercase tracking-[0.4em] font-sans font-bold">Contact Direct</h2>
              <div className="space-y-6">
                <a href="tel:+33780990692" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 border border-zinc-900 flex items-center justify-center group-hover:border-amber-900 transition-colors">
                    <Phone size={16} className="text-amber-700" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-zinc-600 font-sans">Appel & SMS</span>
                    <span className="text-white group-hover:text-amber-500 transition-colors tracking-widest">07 80 99 06 92</span>
                  </div>
                </a>
                <a href="https://t.me/gabriellaindependante" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 border border-zinc-900 flex items-center justify-center group-hover:border-amber-900 transition-colors">
                    <MessageSquare size={16} className="text-amber-700" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-zinc-600 font-sans">Telegram / WhatsApp</span>
                    <span className="text-white group-hover:text-amber-500 transition-colors italic">@Gabriellaindependante</span>
                  </div>
                </a>
              </div>
            </section>

            {/* STEPPER — sidebar */}
            <div className="p-8 bg-zinc-950 border border-zinc-900 space-y-6">
              <h3 className="text-white text-xs uppercase tracking-widest font-sans font-bold border-b border-zinc-900 pb-4">Étapes</h3>
              <ol className="space-y-5">
                {STEPS.map((step) => {
                  const isDone = currentStep > step.id
                  const isActive = currentStep === step.id
                  return (
                    <li key={step.id} className="flex items-center gap-4">
                      <span
                        className={`w-6 h-6 flex items-center justify-center text-[10px] font-bold font-sans border transition-colors
                          ${isDone ? 'border-amber-700 bg-amber-700/10 text-amber-500' : ''}
                          ${isActive ? 'border-amber-900 text-amber-700' : ''}
                          ${!isActive && !isDone ? 'border-zinc-800 text-zinc-700' : ''}
                        `}
                      >
                        {isDone ? <Check size={10} /> : step.id}
                      </span>
                      <span className={`text-xs font-sans uppercase tracking-widest transition-colors
                        ${isActive ? 'text-white' : isDone ? 'text-amber-700' : 'text-zinc-700'}
                      `}>
                        {step.label}
                      </span>
                    </li>
                  )
                })}
              </ol>
            </div>

            {/* SUIVI */}
            <div className="p-8 bg-zinc-950 border border-zinc-900 space-y-6">
              <h3 className="text-white text-xs uppercase tracking-widest font-sans font-bold border-b border-zinc-900 pb-4">Suivi de Réservation</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm italic items-start">
                  <CheckCircle2 size={16} className="text-amber-700 shrink-0 mt-1" />
                  <span>Confirmation immédiate via Instagram, Telegram ou SMS.</span>
                </li>
                <li className="flex gap-3 text-sm italic items-start">
                  <Clock size={16} className="text-amber-700 shrink-0 mt-1" />
                  <span>Rappels automatiques par e-mail ou SMS avant le rendez-vous.</span>
                </li>
                <li className="flex gap-3 text-sm italic items-start">
                  <ExternalLink size={16} className="text-amber-700 shrink-0 mt-1" />
                  <span>Facturation détaillée envoyée après la réservation.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* COLONNE DROITE */}
          <div className="lg:col-span-2 space-y-20">

            {/* ── STEP 1 : FORMULAIRE ── */}
            {currentStep === 1 && (
              <section className="space-y-10">
                <h2 className="text-2xl text-white italic">1. Détails de la rencontre</h2>
                <form onSubmit={(e) => { e.preventDefault(); handleNext() }} noValidate className="space-y-10">
                  
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-1">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre Prénom"
                        className={`w-full bg-transparent border-b outline-none py-4 text-white italic transition-colors
                          ${errors.name ? 'border-red-900 placeholder:text-red-900/50' : 'border-zinc-900 focus:border-amber-900'}
                        `}
                      />
                      {errors.name && <p className="text-[10px] text-red-700 font-sans uppercase tracking-widest">{errors.name}</p>}
                    </div>
                    <div className="space-y-1">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        className={`w-full bg-transparent border-b outline-none py-4 text-white italic transition-colors
                          ${errors.email ? 'border-red-900 placeholder:text-red-900/50' : 'border-zinc-900 focus:border-amber-900'}
                        `}
                      />
                      {errors.email && <p className="text-[10px] text-red-700 font-sans uppercase tracking-widest">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-1">
                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-b outline-none py-4 text-white italic appearance-none cursor-pointer transition-colors
                          ${errors.duration ? 'border-red-900' : 'border-zinc-900 focus:border-amber-900'}
                        `}
                      >
                        {DURATIONS.map(d => (
                          <option key={d.value} value={d.value} className="bg-[#0a0a0a]">
                            {d.label} — {d.price}
                          </option>
                        ))}
                      </select>
                      {errors.duration && <p className="text-[10px] text-red-700 font-sans uppercase tracking-widest">{errors.duration}</p>}
                    </div>
                    <div className="space-y-1">
                      <input
                        type="datetime-local"
                        name="datetime"
                        value={formData.datetime}
                        onChange={handleChange}
                        min={new Date().toISOString().slice(0, 16)}
                        className={`w-full bg-transparent border-b outline-none py-4 text-white italic transition-colors [color-scheme:dark]
                          ${errors.datetime ? 'border-red-900' : 'border-zinc-900 focus:border-amber-900'}
                        `}
                      />
                      {errors.datetime
                        ? <p className="text-[10px] text-red-700 font-sans uppercase tracking-widest">{errors.datetime}</p>
                        : <p className="text-[10px] text-zinc-700 font-sans uppercase tracking-widest">Disponible de 9h à 20h (sauf soirées/nuits)</p>
                      }
                    </div>
                  </div>

                  {/* UPLOAD */}
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-amber-600 font-sans font-bold">
                      Validation par Recharge Transcash
                    </label>
                    <div className={`relative border-2 border-dashed transition-colors p-8 text-center group cursor-pointer
                      ${errors.paymentFile ? 'border-red-900/60' : 'border-zinc-900 hover:border-amber-900/50'}
                    `}>
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <div className="space-y-2">
                        {fileName ? (
                          <>
                            <CheckCircle2 className="mx-auto text-amber-700" size={32} strokeWidth={1} />
                            <p className="text-sm italic text-white">{fileName}</p>
                          </>
                        ) : (
                          <>
                            <Upload className={`mx-auto transition-colors ${errors.paymentFile ? 'text-red-900' : 'text-zinc-700 group-hover:text-amber-700'}`} size={32} strokeWidth={1} />
                            <p className="text-sm italic">Cliquez pour insérer la photo de votre recharge</p>
                          </>
                        )}
                        <p className="text-[9px] uppercase tracking-widest text-zinc-600">Format JPG, PNG ou PDF</p>
                      </div>
                    </div>
                    {errors.paymentFile && <p className="text-[10px] text-red-700 font-sans uppercase tracking-widest">{errors.paymentFile}</p>}
                  </div>

                  {/* Message optionnel */}
                  <div className="space-y-1">
                    <textarea
                      name="additionalMessage"
                      value={formData.additionalMessage}
                      onChange={handleChange}
                      placeholder="Demandes particulières (optionnel)"
                      rows={3}
                      className="w-full bg-transparent border-b border-zinc-900 focus:border-amber-900 outline-none py-4 text-white italic transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-6 px-12 py-5 bg-white text-black uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-amber-600 hover:text-white transition-all duration-500"
                  >
                    Vérifier ma réservation <Send size={14} />
                  </button>
                </form>
              </section>
            )}

            {/* ── STEP 2 : RÉCAPITULATIF ── */}
            {currentStep === 2 && (
              <section className="space-y-10">
                <h2 className="text-2xl text-white italic">2. Vérification & Confirmation</h2>
                <p className="text-sm italic text-zinc-500">Relisez vos informations avant de valider définitivement.</p>

                {/* Summary table */}
                <div className="border border-zinc-900 divide-y divide-zinc-900">
                  <SummaryRow label="Prénom" value={formData.name} />
                  <SummaryRow label="Email" value={formData.email} />
                  <SummaryRow label="Durée" value={getDurationLabel(formData.duration)} />
                  <SummaryRow label="Tarif" value={<span className="text-amber-600 font-bold">{getDurationPrice(formData.duration)}</span>} />
                  <SummaryRow label="Date & Heure" value={<span className="capitalize">{formatDateTime(formData.datetime)}</span>} />
                  <SummaryRow
                    label="Recharge"
                    value={
                      <span className="flex items-center gap-2 text-amber-700 italic">
                        <CheckCircle2 size={14} /> {fileName}
                      </span>
                    }
                  />
                  {formData.additionalMessage && (
                    <SummaryRow label="Message" value={formData.additionalMessage} />
                  )}
                </div>

                <div className="p-6 bg-amber-900/5 border border-amber-900/20 italic text-sm">
                  Votre réservation sera confirmée sous <strong className="text-white not-italic">24h</strong> par SMS, Telegram ou email. Un rappel vous sera envoyé la veille.
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {serverError && (
                    <div className="flex items-center gap-3 text-red-900 bg-red-900/5 border border-red-900/20 p-4">
                      <AlertTriangle size={16} className="shrink-0" />
                      <span className="text-[10px] uppercase tracking-widest font-sans font-bold">{serverError}</span>
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center justify-center gap-3 px-8 py-4 border border-zinc-800 text-zinc-400 uppercase tracking-[0.3em] text-[10px] font-bold font-sans hover:border-zinc-600 hover:text-white transition-all duration-300"
                  >
                    <ChevronLeft size={14} /> Modifier
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 flex items-center justify-center gap-6 px-12 py-5 bg-white text-black uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-amber-600 hover:text-white transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Envoi en cours…' : <>Confirmer définitivement <Send size={14} /></>}
                  </button>
                  </div>
                </form>
              </section>
            )}

            {/* ── STEP 3 : SUCCÈS ── */}
            {currentStep === 3 && (
              <section className="space-y-12">
                <div className="text-center space-y-6 py-10 border border-zinc-900">
                  <div className="mx-auto w-16 h-16 border border-amber-900/50 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-amber-700" strokeWidth={1} />
                  </div>
                  <h2 className="text-3xl text-white italic">Demande envoyée</h2>
                  <p className="text-zinc-500 italic max-w-sm mx-auto">
                    Je vous confirmerai votre rendez-vous sous <strong className="text-white not-italic">24h</strong> par SMS, Telegram ou email.
                  </p>
                </div>

                {/* Récapitulatif final */}
                <div className="border border-zinc-900 divide-y divide-zinc-900">
                  <div className="px-6 py-4">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-amber-600 font-sans font-bold">Récapitulatif</span>
                  </div>
                  <SummaryRow label="Prénom" value={formData.name} />
                  <SummaryRow label="Email" value={formData.email} />
                  <SummaryRow label="Durée" value={getDurationLabel(formData.duration)} />
                  <SummaryRow label="Tarif" value={<span className="text-amber-600 font-bold">{getDurationPrice(formData.duration)}</span>} />
                  <SummaryRow label="Date & Heure" value={<span className="capitalize">{formatDateTime(formData.datetime)}</span>} />
                </div>

                {/* Boutons de contact */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <a
                    href="https://wa.me/33600000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-5 border border-zinc-900 hover:border-amber-900 text-white uppercase tracking-[0.3em] text-[10px] font-bold font-sans transition-all duration-300"
                  >
                    <MessageSquare size={14} className="text-amber-700" /> WhatsApp
                  </a>
                  <a
                    href="https://t.me/Gabriella"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-5 border border-zinc-900 hover:border-amber-900 text-white uppercase tracking-[0.3em] text-[10px] font-bold font-sans transition-all duration-300"
                  >
                    <MessageSquare size={14} className="text-amber-700" /> Telegram
                  </a>
                </div>
              </section>
            )}

            {/* ÉTAPE 2 : MOYENS DE PAIEMENT — toujours visible */}
            {currentStep !== 3 && (
              <section className="space-y-12 pt-10 border-t border-zinc-900">
                <h2 className="text-2xl text-white italic">
                  {currentStep === 1 ? '2.' : '3.'} Modalités de règlement
                </h2>

                {/* TRANSCASH */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <CreditCard className="text-amber-700" size={20} />
                    <h3 className="text-white font-sans text-xs uppercase tracking-widest font-bold">Paiement via Transcash</h3>
                  </div>
                  <p className="text-sm leading-relaxed italic text-zinc-500">
                    Vous avez la possibilité de régler votre recharge Transcash en ligne via deux sites de paiement. 
                    Choisissez d'abord le tarif souhaité, puis achetez la recharge correspondante. 
                    L'insertion de la photo dans le formulaire ci-dessus est obligatoire pour valider la réservation.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <a href="#" className="p-6 border border-zinc-900 hover:border-amber-900 transition-all bg-zinc-950/50 group">
                      <span className="block text-white mb-2 italic">Transcash Officiel</span>
                      <p className="text-[10px] text-zinc-600 leading-relaxed mb-4">Le Juste Prix : Coupons 20€ à 150€. Envoi immédiat par Email ou SMS.</p>
                      <span className="text-[9px] text-amber-700 uppercase tracking-widest font-bold group-hover:text-white">Visiter le site →</span>
                    </a>
                    <a href="https://cartedirecte.fr" className="p-6 border border-zinc-900 hover:border-amber-900 transition-all bg-zinc-950/50 group">
                      <span className="block text-white mb-2 italic">CarteDirecte.fr</span>
                      <p className="text-[10px] text-zinc-600 leading-relaxed mb-4">Livraison instantanée. Fournisseur direct Mastercard.</p>
                      <span className="text-[9px] text-amber-700 uppercase tracking-widest font-bold group-hover:text-white">Visiter le site →</span>
                    </a>
                  </div>
                  <div className="p-6 bg-amber-900/5 border border-amber-900/20 italic text-sm">
                    <p><strong>Option Discrétion :</strong> Achetez votre recharge en bureau de tabac ou en ligne, puis transmettez-la par whatsapp ou telegram avec vos disponibilités :</p>
                    <p className="text-amber-700 mt-2 font-sans text-xs select-all"><a href={`https://wa.me/33780990692`} target="_blank" rel="noopener noreferrer" className="hover:text-amber-500">+33 7 80 99 06 92</a> | <a href="https://t.me/gabriellaindependante" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500">@Gabriellaindependante</a></p>
                  </div>
                </div>

                {/* PAYPAL */}
                <div className="space-y-6 pt-6 opacity-80">
                  <div className="flex items-center gap-3">
                    <Mail className="text-zinc-600" size={20} />
                    <h3 className="text-zinc-500 font-sans text-xs uppercase tracking-widest font-bold">Réservation Via PayPal</h3>
                  </div>
                  <div className="flex items-center gap-3 text-red-900 font-bold bg-red-900/5 p-4 border border-red-900/20">
                    <AlertTriangle size={18} />
                    <span className="text-[10px] uppercase tracking-widest">Momentanément Indisponible 🚫</span>
                  </div>
                  <div className="text-[11px] leading-relaxed italic space-y-4 border-l-2 border-zinc-900 pl-6">
                    <p className="text-amber-900 font-bold uppercase not-italic">⛔ Important : Option "Entre Proches" Uniquement</p>
                    <p>
                      Il est impératif de sélectionner l'option <strong>"Envoyer Entre proche"</strong> (onglet "Envoyer de l'argent"). 
                      Cela permet un transfert direct sans frais. 
                    </p>
                    <p className="text-zinc-600">
                      Ne choisissez pas "Biens et services" : cette option impose des preuves commerciales que je ne peux fournir pour une transaction personnelle.
                    </p>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>

        {/* LOCALISATION */}
        <section className="mt-40 pt-20 border-t border-zinc-900 text-center space-y-8">
          <MapPin className="mx-auto text-amber-900" size={32} strokeWidth={1} />
          <h2 className="text-2xl text-white italic">Confidentialité du Lieu</h2>
          <p className="max-w-2xl mx-auto text-zinc-500 italic">
            Je vous reçois dans un boudoir privé. 
            L'adresse exacte vous sera transmise par SMS après vérification et validation de votre recharge.
          </p>
        </section>
      </main>

      <footer className="py-20 border-t border-zinc-900 text-center">
        <p className="text-[10px] text-zinc-800 uppercase tracking-[0.5em] font-sans">
          Gabriella — France — 2026
        </p>
      </footer>
    </div>
  )
}

// ── SummaryRow ─────────────────────────────────────────────────────────────

function SummaryRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-6 px-6 py-4">
      <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-sans font-bold w-24 shrink-0">{label}</span>
      <span className="text-sm italic text-zinc-300">{value}</span>
    </div>
  )
}