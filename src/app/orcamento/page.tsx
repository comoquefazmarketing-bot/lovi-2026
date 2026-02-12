"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, DollarSign, PieChart, TrendingUp, Briefcase, 
  UserPlus, Target, Megaphone, Gavel, Tool
} from 'lucide-react';

export default function OrcamentoEquipe() {
  const equipeNecessaria = [
    { setor: "Comercial (Camarotes/Cotas)", profissionais: ["1 Gestor Comercial Senior", "4 Executivos de Vendas", "1 Concierge VIP"], investimento: "R$ 45k/mês", impacto: "Geração de Receita Direta" },
    { setor: "Marketing (Otimização)", profissionais: ["1 Diretor de Arte", "1 Gestor de Tráfego Pago", "1 Community Manager", "1 Videomaker"], investimento: "R$ 38k/mês", impacto: "Venda de Ingressos e Branding" },
    { setor: "Backoffice & Jurídico", profissionais: ["1 Advogado Especialista (14.133)", "1 Controller Financeiro"], investimento: "R$ 20k/mês", impacto: "Blindagem do CPF e Compliance" },
    { setor: "Operacional (Arena)", profissionais: ["Equipe Técnica ACR", "Manejo Gutt Bulls", "Staff Tum Dum"], investimento: "Sob Demanda", impacto: "Entrega do Espetáculo" }
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans pb-20">
      {/* HEADER SIMPLES */}
      <nav className="p-8 border-b border-white/5 flex justify-between items-center bg-black/50 sticky top-0 z-50 backdrop-blur-md">
        <h2 className="text-2xl font-black italic text-orange-500 uppercase tracking-tighter">Budget & Team <span className="text-white">2026</span></h2>
        <div className="text-[10px] font-black uppercase text-zinc-500 border border-zinc-800 px-4 py-2 rounded-full">Confidencial - Board Only</div>
      </nav>

      <main className="max-w-7xl mx-auto px-10 pt-20">
        <header className="mb-20">
          <h1 className="text-6xl font-black uppercase italic mb-6 leading-none">Previsão <br/><span className="text-orange-500">Orçamentária.</span></h1>
          <p className="text-zinc-500 max-w-2xl font-bold uppercase text-xs tracking-widest">Estruturação de Equipe Holding e Projeção de Investimento para Implantação do Ecossistema.</p>
        </header>

        {/* CARDS DE INVESTIMENTO RÁPIDO */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { label: "Capex Implantação", valor: "R$ 450k", desc: "Software Tum Dum + Branding", icon: <Tool className="text-orange-500"/> },
            { label: "Opex Mensal Equipe", valor: "R$ 103k", desc: "Folha de Pagamento Especializada", icon: <Users className="text-orange-500"/> },
            { label: "Target de Receita", valor: "R$ 3.2M", desc: "Projeção Cotas + Camarotes", icon: <TrendingUp className="text-green-500"/> }
          ].map((card, i) => (
            <div key={i} className="bg-zinc-900/50 p-10 rounded-[2.5rem] border border-white/5 space-y-4 hover:border-orange-600/50 transition-colors">
              <div className="bg-black/50 w-12 h-12 rounded-xl flex items-center justify-center">{card.icon}</div>
              <div>
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{card.label}</p>
                <p className="text-4xl font-black italic">{card.valor}</p>
                <p className="text-[10px] font-bold text-zinc-600 uppercase mt-2">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* TABELA DE EQUIPE E SETORES */}
        <section className="space-y-12">
          <div className="flex items-center gap-4 border-b border-zinc-800 pb-6">
            <UserPlus className="text-orange-500" />
            <h2 className="text-3xl font-black uppercase italic">Estrutura de Holding (Time Lovi)</h2>
          </div>
          
          <div className="grid gap-4">
            {equipeNecessaria.map((item, i) => (
              <div key={i} className="grid md:grid-cols-4 items-center p-8 bg-zinc-900/30 rounded-3xl border border-white/5 hover:bg-zinc-900/60 transition-all group">
                <div className="font-black uppercase text-orange-500 text-sm italic">{item.setor}</div>
                <div className="col-span-1 space-y-1">
                  {item.profissionais.map((p, idx) => (
                    <p key={idx} className="text-xs font-bold text-zinc-300">{p}</p>
                  ))}
                </div>
                <div className="text-center font-black italic text-xl group-hover:text-white transition-colors">{item.investimento}</div>
                <div className="text-right">
                  <span className="text-[10px] font-black uppercase bg-orange-600/10 text-orange-500 px-4 py-2 rounded-full border border-orange-600/20">
                    {item.impacto}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DISCURSO PARA A DIRETORIA */}
        <section className="mt-32 p-16 bg-orange-600 rounded-[4rem] relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-4xl font-black uppercase italic mb-6">Por que investir na <br/>equipe agora?</h3>
              <p className="text-sm font-bold leading-relaxed uppercase opacity-80">
                O marketing defasado hoje é o seu maior custo oculto. Ao profissionalizar o comercial e o tráfego pago, transformamos o evento de uma "festa" em um "ativo financeiro previsível". 
                <br/><br/>
                O custo da equipe se paga com a venda das primeiras 2 cotas Master ou 30% dos camarotes.
              </p>
            </div>
            <div className="bg-black/20 p-8 rounded-3xl backdrop-blur-md border border-white/10">
               <h4 className="font-black uppercase italic text-xl mb-4 text-white">Próximos Passos (30 dias):</h4>
               <ul className="space-y-3 text-[10px] font-black uppercase">
                 <li className="flex gap-2"><ArrowRight size={14}/> Contratação imediata do Gestor de Tráfego.</li>
                 <li className="flex gap-2"><ArrowRight size={14}/> Auditoria comercial na ACR/Gutt Bulls.</li>
                 <li className="flex gap-2"><ArrowRight size={14}/> Setup do Dashboard Tum Dum em tempo real.</li>
               </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}