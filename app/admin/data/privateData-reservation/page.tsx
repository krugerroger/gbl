'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabaseClient } from '@/utils/supabaseClient';
import { 
  RefreshCw, 
  LogOut, 
  User, 
  Clock, 
  CreditCard, 
  Calendar,
  Package,
  DollarSign,
  Mail,
  Shield,
  AlertCircle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface Reservation {
  id: string;
  name: string;
  email: string;
  meetdate: string;
  ticketproof: string;
  message: string;
  optionname: string;
  optionduration: string;
  optionprice: string;
  status: string;
  created_at: string;
}

export default function AdminPage() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string>('');
  const [authError, setAuthError] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    checkAuthAndFetchData();
  }, []);

  const checkAuthAndFetchData = async () => {
    try {
      const { data: { session }, error: sessionError } = await supabaseClient.auth.getSession();
      
      if (sessionError || !session) {
        router.push('/admin/adminLogin'); // Ajusté selon ton fichier précédent
        return;
      }

      setUserEmail(session.user.email || '');
      await fetchReservations();
    } catch (error) {
      setAuthError('Erreur de vérification');
      router.push('/admin/adminLogin'); // Ajusté selon ton fichier précédent
    } finally {
      setLoading(false);
    }
  };

  const fetchReservations = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabaseClient
        .from('customers_gbl')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReservations(data || []);
    } catch (error: any) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    router.push('/admin/adminLogin'); // Ajusté selon ton fichier précédent
  };

  const getStatusStyle = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'confirmed':
        return 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5';
      case 'pending':
        return 'text-amber-500 border-amber-500/20 bg-amber-500/5';
      case 'cancelled':
        return 'text-red-500 border-red-500/20 bg-red-500/5';
      default:
        return 'text-zinc-500 border-zinc-500/20 bg-zinc-500/5';
    }
  };

  if (loading && reservations.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="text-center space-y-4">
          <RefreshCw className="w-10 h-10 text-amber-800 animate-spin mx-auto" strokeWidth={1} />
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-sans">Chargement du registre...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 font-serif selection:bg-amber-500/30 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 border-b border-zinc-900 pb-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-amber-700 font-sans font-bold block mb-2">
              Privé / Administration
            </span>
            <h1 className="text-4xl text-white italic tracking-tighter">Le Registre</h1>
            <div className="flex items-center gap-2 mt-4 text-xs font-sans tracking-wider text-zinc-600">
              <Shield size={14} className="text-amber-900" />
              <span>Session active : <span className="text-zinc-300 italic">{userEmail}</span></span>
            </div>
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <button 
              onClick={fetchReservations}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 border border-zinc-800 hover:border-amber-900 text-[10px] uppercase tracking-widest font-sans transition-all group"
            >
              <RefreshCw size={14} className="group-hover:rotate-180 transition-transform duration-500" />
              Actualiser
            </button>
            <button 
              onClick={handleLogout}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 text-white hover:bg-red-950 text-[10px] uppercase tracking-widest font-sans transition-all"
            >
              <LogOut size={14} />
              Quitter
            </button>
          </div>
        </header>

        {/* STATS RAPIDES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Total', val: reservations.length, icon: Calendar },
            { label: 'À venir', val: reservations.filter(r => new Date(r.meetdate) > new Date()).length, icon: Clock },
            { label: 'En attente', val: reservations.filter(r => r.status === 'pending').length, icon: AlertCircle },
            { label: 'Confirmées', val: reservations.filter(r => r.status === 'confirmed').length, icon: CreditCard },
          ].map((stat, i) => (
            <div key={i} className="bg-zinc-950 border border-zinc-900 p-6 flex flex-col gap-2">
              <stat.icon size={16} className="text-amber-900 mb-2" />
              <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-sans">{stat.label}</span>
              <span className="text-2xl text-white font-light">{stat.val}</span>
            </div>
          ))}
        </div>

        {/* TABLE DES RÉSERVATIONS - DESKTOP */}
        <div className="hidden lg:block bg-zinc-950 border border-zinc-900 overflow-hidden shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead className="bg-black/50 border-b border-zinc-900">
              <tr>
                <th className="px-6 py-5 text-[10px] uppercase tracking-[0.2em] font-sans text-zinc-500 font-bold">Client</th>
                <th className="px-6 py-5 text-[10px] uppercase tracking-[0.2em] font-sans text-zinc-500 font-bold">Expérience</th>
                <th className="px-6 py-5 text-[10px] uppercase tracking-[0.2em] font-sans text-zinc-500 font-bold">Rendez-vous</th>
                <th className="px-6 py-5 text-[10px] uppercase tracking-[0.2em] font-sans text-zinc-500 font-bold">Statut</th>
                <th className="px-6 py-5 text-right text-[10px] uppercase tracking-[0.2em] font-sans text-zinc-500 font-bold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-900">
              {reservations.map((res) => (
                <tr key={res.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 border border-zinc-800 flex items-center justify-center rounded-full text-amber-700 group-hover:border-amber-900 transition-colors">
                        <User size={18} strokeWidth={1} />
                      </div>
                      <div>
                        <div className="text-white text-sm italic">{res.name}</div>
                        <div className="text-[10px] text-zinc-600 font-sans uppercase tracking-tight">{res.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-sm italic">
                    <div className="text-zinc-300">{res.optionname}</div>
                    <div className="text-xs text-zinc-600 font-sans not-italic uppercase tracking-tighter mt-1">
                      {res.optionduration} — {res.optionprice}
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="text-sm text-zinc-300">
                      {new Date(res.meetdate).toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' })}
                    </div>
                    <div className="text-xs text-amber-900/60 font-sans uppercase">{new Date(res.meetdate).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</div>
                  </td>
                  <td className="px-6 py-6">
                    <span className={`px-3 py-1 text-[9px] uppercase tracking-widest border rounded-full font-sans font-bold ${getStatusStyle(res.status)}`}>
                      {res.status || 'Inconnu'}
                    </span>
                  </td>
                  <td className="px-6 py-6 text-right">
                    {res.ticketproof ? (
                      <a href={res.ticketproof} target="_blank" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-sans underline decoration-amber-900 underline-offset-4">
                        Preuve <ExternalLink size={12} />
                      </a>
                    ) : (
                      <span className="text-zinc-800 text-[10px] font-sans uppercase">Aucun justificatif</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* VERSION MOBILE - CARDS */}
        <div className="lg:hidden space-y-6">
          {reservations.map((res) => (
            <div key={res.id} className="bg-zinc-950 border border-zinc-900 p-6 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                 <span className={`px-3 py-1 text-[8px] uppercase tracking-tighter border rounded-full font-sans ${getStatusStyle(res.status)}`}>
                    {res.status}
                 </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center">
                  <User size={18} className="text-amber-700" strokeWidth={1}/>
                </div>
                <div>
                  <h3 className="text-white italic">{res.name}</h3>
                  <p className="text-[10px] font-sans text-zinc-600 uppercase tracking-widest">{res.email}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 border-y border-zinc-900 py-4">
                <div>
                  <span className="block text-[8px] uppercase text-zinc-600 font-sans mb-1 tracking-[0.2em]">Expérience</span>
                  <p className="text-sm text-zinc-300 italic">{res.optionname}</p>
                </div>
                <div>
                  <span className="block text-[8px] uppercase text-zinc-600 font-sans mb-1 tracking-[0.2em]">Quand</span>
                  <p className="text-sm text-zinc-300 italic">
                    {new Date(res.meetdate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })} — {new Date(res.meetdate).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[10px] text-zinc-600 font-sans uppercase tracking-widest">{res.optionprice}</p>
                {res.ticketproof && (
                  <a href={res.ticketproof} target="_blank" className="text-amber-800 text-[10px] uppercase font-bold tracking-widest flex items-center gap-2">
                    Voir preuve <ChevronRight size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* VIDE */}
        {reservations.length === 0 && (
          <div className="text-center py-32 border border-dashed border-zinc-900">
            <Calendar className="w-12 h-12 text-zinc-800 mx-auto mb-4" strokeWidth={1} />
            <h3 className="text-white italic text-xl">Le registre est vide</h3>
            <p className="text-zinc-600 text-xs mt-2 uppercase tracking-[0.3em] font-sans">En attente de nouveaux gentlemen</p>
          </div>
        )}

      </div>
    </div>
  );
}