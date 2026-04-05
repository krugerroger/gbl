// app/api/submit-reservation/route.ts

import { supabaseClient } from "@/utils/supabaseClient"
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

const ALLOWED_EXTENSIONS = ['jpg', 'jpeg', 'png', 'pdf']

export async function POST(request: Request) {
  const supabase = supabaseClient

  try {
    const formData = await request.formData()

    // ── Extraction ────────────────────────────────────────────────────────
    const name             = formData.get('name')?.toString().trim() || ''
    const email            = formData.get('email')?.toString().trim() || ''
    const duration         = formData.get('duration')?.toString().trim() || ''
    const datetime         = formData.get('datetime')?.toString().trim() || ''
    const additionalMessage = formData.get('additionalMessage')?.toString().trim() || ''
    const paymentFile      = formData.get('paymentFile') as File | null

    // ── Validation ────────────────────────────────────────────────────────
    const missingFields: string[] = []
    if (!name)        missingFields.push('name')
    if (!email)       missingFields.push('email')
    if (!duration)    missingFields.push('duration')
    if (!datetime)    missingFields.push('datetime')
    if (!paymentFile) missingFields.push('paymentFile')

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: 'Champs obligatoires manquants', fields: missingFields },
        { status: 400 }
      )
    }

    // Email format (basic)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      )
    }

    // Date must be in the future
    const appointmentDate = new Date(datetime!)
    if (isNaN(appointmentDate.getTime()) || appointmentDate <= new Date()) {
      return NextResponse.json(
        { error: 'La date du rendez-vous doit être dans le futur' },
        { status: 400 }
      )
    }

    // File size (max 5MB)
    if (paymentFile!.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'Le fichier est trop volumineux (max 5MB)' },
        { status: 400 }
      )
    }

    // File extension
    const fileExt = paymentFile!.name.split('.').pop()?.toLowerCase()
    if (!fileExt || !ALLOWED_EXTENSIONS.includes(fileExt)) {
      return NextResponse.json(
        { error: 'Type de fichier non autorisé (JPG, PNG ou PDF uniquement)' },
        { status: 400 }
      )
    }

    // ── Upload fichier ────────────────────────────────────────────────────
    const fileName = `reservations/${Date.now()}_${paymentFile!.name.replace(/\s+/g, '_')}`

    const { error: uploadError } = await supabase.storage
      .from('bookings')
      .upload(fileName, paymentFile!)

    if (uploadError) {
      console.error('Upload error:', uploadError)
      return NextResponse.json(
        { error: 'Échec de l\'upload du justificatif : ' + uploadError.message },
        { status: 500 }
      )
    }

    // ── URL publique ──────────────────────────────────────────────────────
    const { data: { publicUrl } } = supabase.storage
      .from('bookings')
      .getPublicUrl(fileName)

    // ── Insertion BDD ─────────────────────────────────────────────────────
    const { data, error: dbError } = await supabase
      .from('customers_gbl')
      .insert({
        name,
        email,
        meetdate: appointmentDate.toISOString(),
        ticketproof: publicUrl,
        message: additionalMessage || null,
        optionduration: duration,
        status: 'pending',
      })
      .select()
      .single()

    if (dbError) {
      console.error('Database error:', dbError)
      // Rollback : suppression du fichier déjà uploadé
      await supabase.storage.from('bookings').remove([fileName])
      return NextResponse.json(
        { error: 'Erreur base de données : ' + dbError.message },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, booking: data },
      { status: 200 }
    )

  } catch (err) {
    console.error('Server error:', err)
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}