'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Loader2, ChevronRight, ShieldCheck } from "lucide-react";
import { supabaseClient } from "@/utils/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const router = useRouter();
  const supabase = supabaseClient;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Identifiants invalides. Veuillez réessayer.");
      setLoading(false);
    } else {
      router.push("/admin/data/privateData-reservation"); 
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4 font-serif">
      
      {/* Background Decor discret */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-900/20 blur-[120px] rounded-full" />
      </div>

      <div className="w-full max-w-md relative z-10">
        
        {/* Card */}
        <div className="bg-zinc-950/50 backdrop-blur-xl border border-zinc-900 p-10 shadow-2xl">
          
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 border border-amber-900/50 flex items-center justify-center rounded-full">
                <ShieldCheck className="text-amber-700" size={24} strokeWidth={1} />
              </div>
            </div>
            <h1 className="text-3xl text-white italic tracking-tighter">
              Espace <span className="text-amber-600 not-italic">Privé</span>
            </h1>
            <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-sans">
              Administration & Gestion
            </p>
            <div className="mx-auto h-[1px] w-8 bg-amber-900/50 pt-2" />
          </div>

          {/* Formulaire */}
          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-6">
              
              {/* Email */}
              <div className="relative group">
                <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-700 group-focus-within:text-amber-600 transition-colors" />
                <input
                  type="email"
                  placeholder="Email Professionnel"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-zinc-900 py-4 pl-8 pr-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-amber-900 transition-all italic text-sm"
                />
              </div>

              {/* Password */}
              <div className="relative group">
                <Lock className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-700 group-focus-within:text-amber-600 transition-colors" />
                <input
                  type="password"
                  placeholder="Mot de passe"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-b border-zinc-900 py-4 pl-8 pr-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-amber-900 transition-all italic text-sm"
                />
              </div>
            </div>

            {error && (
              <p className="text-amber-700 text-[11px] text-center italic animate-pulse">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-4 bg-white text-black font-sans font-bold text-[10px] uppercase tracking-[0.2em] py-5 hover:bg-amber-700 hover:text-white transition-all duration-500 disabled:opacity-50 group"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  Accéder au Dashboard
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Footer Card */}
          <div className="mt-12 text-center">
            <button 
              onClick={() => router.push("/")}
              className="text-zinc-600 text-[9px] uppercase tracking-widest hover:text-amber-500 transition-colors duration-300"
            >
              ← Retour au site public
            </button>
          </div>
        </div>

        {/* Footer Page */}
        <p className="text-center mt-8 text-zinc-800 text-[9px] uppercase tracking-[0.4em] font-sans">
          Système Sécurisé — Gabriella © 2026
        </p>
      </div>
    </div>
  );
}