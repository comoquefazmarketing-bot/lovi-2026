"use client";
import { Shield, TrendingUp, Users, Zap, Globe, Smartphone, Laptop, Tablet, CheckCircle2, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function OnePage360() {
  const pilares = [
    { t: "Comercial B2G", d: "Expansão e Licitações", i: <TrendingUp /> },
    { t: "Backoffice", d: "Compliance e Jurídico", i: <Shield /> },
    { t: "Operações", d: "Engenharia e Logística", i: <Zap /> },
    { t: "Marketing & PR", d: "Inteligência e Dados", i: <Globe /> },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-orange-500 font-sans pb-20">
      
      {/* 1. CABEÇALHO & HERO */}
      <header className="p-8 flex flex-col md:flex-row justify-between items-center border-b border-zinc-900 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex gap-4 items-center opacity-80">
          <span className="font-black text-xl tracking-tighter italic">LOVI | ACR | GUTT</span>
        </div>
        <div className="text-center py-4 md:py-0">
          <h1 className="text-orange-500 font-black tracking-widest text-sm uppercase">Plano de Soberania 2026</h1>
        </div>
        <div className="flex items-center gap-3 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20">
          <Award size={18} className="text-orange-500" />
          <span className="text-xs font-bold uppercase tracking-tighter">Gestão 360º</span>
        </div>
      </header>

      {/* 2. ESTRUTURA ROBUSTA (ORGANOGRAMA) */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-black italic uppercase italic tracking-tighter">Estrutura Operacional</h2>
            <p className="text-zinc-500 mt-2 italic">A fundação para o crescimento escalável.</p>
          </div>
          <div className="bg-white text-black px-6 py-2 rounded-full font-black text-sm mt-6">
            TOTAL: 21 PROFISSIONAIS
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {pilares.map((p, i) => (
            <div key={i} className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 flex items-start gap-4">
              <div className="text-orange-500">{p.i}</div>
              <div>
                <h4 className="font-bold text-sm">{p.t}</h4>
                <p className="text-xs text-zinc-500 mt-1">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ECOSSISTEMA DIGITAL (MOCKUPS) */}
      <section className="py-20 bg-zinc-950 border-y border-zinc-900 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black mb-4 uppercase italic">Presença Onipresente</h2>
          <p className="text-zinc-500">Do rádio local ao algoritmo global.</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="flex flex-col items-center gap-4 group">
            <div className="w-40 h-80 bg-zinc-900 rounded-[2.5rem] border-[6px] border-zinc-800 relative overflow-hidden shadow-2xl group-hover:border-orange-500 transition-colors">
              <div className="absolute inset-0 bg-orange-500/10 flex items-center justify-center text-[10px] text-zinc-500 text-center p-4 italic">Bastidores TikTok/Reels</div>
            </div>
            <Smartphone size={24} className="text-zinc-700" />
          </div>

          <div className="flex flex-col items-center gap-4 group">
            <div className="w-80 h-52 bg-zinc-900 rounded-xl border-[6px] border-zinc-800 relative overflow-hidden shadow-2xl group-hover:border-orange-500 transition-colors">
               <div className="absolute inset-0 bg-orange-500/10 flex items-center justify-center text-[10px] text-zinc-500 text-center p-4 italic underline">Lovi App + Supabase Dashboard</div>
            </div>
            <Laptop size={24} className="text-zinc-700" />
          </div>

          <div className="flex flex-col items-center gap-4 group">
            <div className="w-64 h-48 bg-zinc-900 rounded-2xl border-[6px] border-zinc-800 relative overflow-hidden shadow-2xl group-hover:border-orange-500 transition-colors">
              <div className="absolute inset-0 bg-orange-500/10 flex items-center justify-center text-[10px] text-zinc-500 text-center p-4 italic">YouTube: A Ciência do Rodeio</div>
            </div>
            <Tablet size={24} className="text-zinc-700" />
          </div>
        </div>
      </section>

      {/* 4. MARKETING SENSORIAL & 5. ROI */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
        <div>
          <h3 className="text-xl font-black uppercase mb-8 italic text-orange-500">Branding Físico</h3>
          <div className="space-y-4">
            {["Bonés Premium ACR/Gutt", "Cordões de Cetim VIP", "Copos Colecionáveis"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-zinc-300">
                <CheckCircle2 size={18} className="text-orange-500" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-zinc-500 italic leading-relaxed">
            "O evento que não acaba: Transformando o público em embaixadores da marca."
          </p>
        </div>

        <div className="bg-orange-600 rounded-[2.5rem] p-10 text-black">
          <h3 className="text-xl font-black uppercase mb-8">Prova Real & ROI</h3>
          <div className="space-y-6">
            <div>
              <p className="text-[10px] uppercase font-bold opacity-60">Público Estimado 2026</p>
              <p className="text-4xl font-black tracking-tighter">500.000+</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold opacity-60">Impacto Econômico</p>
              <p className="text-4xl font-black tracking-tighter">R$ 10.000.000</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold opacity-60">Ativos de Dados (Leads)</p>
              <p className="text-4xl font-black tracking-tighter">250.000</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RODAPÉ */}
      <footer className="mt-20 py-20 border-t border-zinc-900 text-center bg-black">
        <p className="text-orange-500 font-bold tracking-widest text-xs uppercase mb-4">Estrutura pronta para execução imediata (Jan/2026)</p>
        <p className="text-2xl font-black italic mb-2">FELIPE MAKARIOS</p>
        <p className="text-zinc-500 text-xs uppercase tracking-widest">Head de Marketing & Estratégia</p>
      </footer>
    </main>
  );
}
