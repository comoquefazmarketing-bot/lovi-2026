"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, DollarSign, TrendingUp, Briefcase, Megaphone, 
  Target, Rocket, ChevronRight, BarChart3, PieChart
} from 'lucide-react';

export default function OrcamentoEquipePage() {
  const cargos = [
    { 
      setor: "Comercial & Growth", 
      status: "Crítico",
      obs: "Foco total em venda de camarotes e cotas master",
      vagas: ["1 Diretor Comercial (Key Accounts)", "3 Executivos de Vendas (Hunter)", "1 Gestor de SDR/CRM"]
    },
    { 
      setor: "Marketing & Publicidade", 
      status: "Defasado / Urgente",
      obs: "Necessário para sustentar a narrativa 360 e venda de ingressos",
      vagas: ["1 Gestor de Tráfego Pago", "1 Diretor de Arte / Branding", "1 Social Media & Community", "1 Videomaker In-house"]
    },
    { 
      setor: "Backoffice & Jurídico", 
      status: "Operacional",
      obs: "Manutenção da conformidade Lei 14.133",
      vagas: ["1 Controller Financeiro", "1 Analista de Contratos Públicos"]
    }
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans pb-20 selection:bg-orange-500">
      <nav className="p-8 border-b border-white/5 flex justify-between items-center bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <img src="/assets/logo lovi.jfif" className="h-6 invert opacity-50" />
          <h2 className="text-xl font-black italic uppercase tracking-tighter">Budget & <span className="text-orange-500">Team 2026</span></h2>
        </div>
        <div className="text-[10px] font-black uppercase text-zinc-500 border border-zinc-800 px-4 py-2 rounded-full">Documento de Estratégia Interna</div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-20">
        <header className="mb-20 space-y-4">
          <h1 className="text-6xl md:text-8xl font-black uppercase italic leading-none">Previsão <br/><span className="text-orange-500 underline">Orçamentária.</span></h1>
          <p className="text-zinc-500 max-w-2xl font-bold uppercase text-xs tracking-[0.3em]">Análise de Viabilidade, Reestruturação de Marketing e Célula de Vendas.</p>
        </header>

        {/* DASHBOARD DE INVESTIMENTO */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="p-10 bg-zinc-900/40 rounded-[3rem] border border-white/5 hover:border-orange-500/30 transition-all">
            <PieChart className="text-orange-500 mb-6" size={40} />
            <h4 className="text-zinc-500 font-black uppercase text-[10px] tracking-widest">Opex Mensal (Equipe)</h4>
            <p className="text-4xl font-black italic mt-2">R$ 115.000</p>
            <p className="text-[10px] text-zinc-600 font-bold uppercase mt-4">Custo fixo para operação de alto nível.</p>
          </div>
          <div className="p-10 bg-zinc-900/40 rounded-[3rem] border border-white/5 hover:border-orange-500/30 transition-all">
            <Rocket className="text-orange-500 mb-6" size={40} />
            <h4 className="text-zinc-500 font-black uppercase text-[10px] tracking-widest">Budget Marketing / Mês</h4>
            <p className="text-4xl font-black italic mt-2">R$ 45.000</p>
            <p className="text-[10px] text-zinc-600 font-bold uppercase mt-4">Ads, Produção de Conteúdo e PR.</p>
          </div>
          <div className="p-10 bg-orange-600 rounded-[3rem] shadow-[0_0_50px_rgba(234,88,12,0.2)]">
            <TrendingUp className="text-white mb-6" size={40} />
            <h4 className="text-white/70 font-black uppercase text-[10px] tracking-widest">Breakeven Estimado</h4>
            <p className="text-4xl font-black italic mt-2">45 Dias</p>
            <p className="text-[10px] text-white/50 font-bold uppercase mt-4">Com a venda de 1 Cota Master.</p>
          </div>
        </div>

        {/* REESTRUTURAÇÃO DE EQUIPE */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <Users className="text-orange-500" />
            <h2 className="text-3xl font-black uppercase italic">Necessidade de Contratação</h2>
          </div>

          <div className="grid gap-6">
            {cargos.map((c, i) => (
              <div key={i} className="bg-zinc-900/20 border border-white/5 p-10 rounded-[3rem] hover:bg-zinc-900/40 transition-all">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="space-y-2">
                    <span className="bg-orange-600/10 text-orange-500 text-[10px] font-black px-4 py-1 rounded-full border border-orange-500/20">{c.status}</span>
                    <h3 className="text-3xl font-black uppercase italic">{c.setor}</h3>
                    <p className="text-zinc-500 text-xs font-bold uppercase">{c.obs}</p>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {c.vagas.map((v, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs font-black uppercase text-zinc-400">
                        <ChevronRight size={14} className="text-orange-500" /> {v}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* JUSTIFICATIVA ESTRATÉGICA */}
        <section className="mt-32 p-12 md:p-20 bg-white text-black rounded-[4rem] grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-6xl font-black uppercase italic leading-none">O Custo do <br/><span className="text-orange-600">Amadorismo.</span></h2>
            <p className="text-zinc-600 text-lg font-medium leading-relaxed italic">
              Um marketing defasado não é apenas uma falha visual; é dinheiro deixado na mesa. Cada dia sem um gestor de tráfego qualificado e uma equipe comercial agressiva aumenta o custo de aquisição do cliente e diminui a percepção de valor dos nossos camarotes.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4 p-6 border border-zinc-200 rounded-3xl items-center">
              <BarChart3 className="text-orange-600" />
              <div><h5 className="font-black uppercase text-sm">Escalabilidade Comercial</h5><p className="text-[10px] font-bold text-zinc-400 uppercase">Foco em vender o evento inteiro 3 meses antes.</p></div>
            </div>
            <div className="flex gap-4 p-6 border border-zinc-200 rounded-3xl items-center">
              <Megaphone className="text-orange-600" />
              <div><h5 className="font-black uppercase text-sm">Domínio da Narrativa</h5><p className="text-[10px] font-bold text-zinc-400 uppercase">Marketing 360 que justifica o preço premium.</p></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-40 text-center py-20 border-t border-white/5">
         <p className="text-orange-500 font-black italic text-2xl uppercase">Felipe Makarios</p>
         <p className="text-zinc-700 font-black uppercase text-[10px] tracking-[0.5em] mt-2">Plano de Expansão Lovi 2026</p>
      </footer>
    </div>
  );
}