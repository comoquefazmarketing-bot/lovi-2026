"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Trophy, Zap, Mic2, Youtube, BarChart3, Map, 
  CheckCircle2, Globe, Laptop, PlayCircle, RadioTower, 
  Target, Truck, Leaf, Layout, ArrowRight, Activity, Users, Star,
  Briefcase, Gavel, TrendingUp, Smartphone, Share2, Camera, Megaphone,
  Eye, BarChart, Rocket, Scale, Building2, AlertTriangle, Landmark
} from 'lucide-react';

export default function LoviEcosystem2026() {
  return (
    <div className="bg-[#020202] text-white font-sans selection:bg-orange-500 overflow-x-hidden">
      
      {/* 00. HEADER ESTRATÉGICO (FIX LOGOS) */}
      <nav className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-2xl border-b border-white/5 py-4 px-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img src="/assets/logo lovi.jfif" className="h-10 invert brightness-200" alt="Lovi" />
          <div className="flex gap-8 items-center bg-white/5 px-6 py-2 rounded-2xl border border-white/10">
            <img src="/assets/logo acr.png" className="h-12 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" alt="ACR" />
            <div className="w-[1px] h-8 bg-white/20" />
            <img src="/assets/logo guttbulls.jfif" className="h-12 object-contain" alt="Gutt Bulls" />
          </div>
        </div>
      </nav>

      {/* 01. HERO – MANIFESTO & POSICIONAMENTO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover opacity-20 grayscale">
          <source src="/assets/video3.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div initial={{opacity:0, y:30}} animate={{opacity:1, y:0}}>
            <h1 className="text-6xl md:text-[10rem] font-black italic tracking-tighter leading-[0.85]">
              LOVI <span className="text-orange-500">ECOSSISTEMA</span>
            </h1>
            <p className="text-zinc-400 text-xl md:text-2xl max-w-3xl mx-auto mt-10 leading-relaxed font-medium italic">
              Não organizamos eventos. Estruturamos ativos econômicos temporários com blindagem jurídica, engenharia de marketing e monetização previsível.
            </p>
            <p className="text-zinc-600 uppercase tracking-[0.5em] text-[10px] md:text-xs mt-8 font-black">
              Governo • Mercado Premium • Entretenimento de Elite
            </p>
            <button className="mt-12 px-10 py-5 bg-orange-600 rounded-full font-black uppercase tracking-widest hover:scale-105 transition shadow-[0_0_40px_rgba(234,88,12,0.3)]">
              Solicitar Apresentação Executiva
            </button>
          </motion.div>
        </div>
      </section>

      {/* 02. O PROBLEMA DO MERCADO (TENSÃO) */}
      <section className="py-32 px-10 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-3 text-red-500 font-black uppercase text-xs">
              <AlertTriangle size={18} /> Diagnóstico de Risco
            </div>
            <h2 className="text-6xl font-black italic leading-none">O Problema Não <br/>é o Evento.</h2>
            <p className="text-zinc-500 text-lg leading-relaxed">
              O problema é a falta de estrutura jurídica, ausência de estratégia de monetização e improviso operacional que transforma oportunidades públicas em riscos políticos.
            </p>
          </div>
          <div className="bg-black/50 p-12 rounded-[4rem] border border-white/5 shadow-inner">
            <ul className="space-y-6 text-sm md:text-base uppercase font-black text-zinc-600">
              <li className="flex items-center gap-4"><span className="h-2 w-2 bg-red-500 rounded-full"/> Contratações vulneráveis</li>
              <li className="flex items-center gap-4"><span className="h-2 w-2 bg-red-500 rounded-full"/> Marketing amador</li>
              <li className="flex items-center gap-4"><span className="h-2 w-2 bg-red-500 rounded-full"/> ROI inexistente</li>
              <li className="flex items-center gap-4"><span className="h-2 w-2 bg-red-500 rounded-full"/> Falta de dados auditáveis</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 03. SOLUÇÃO – ECOSSISTEMA LOVI */}
      <section className="py-32 px-10 bg-white text-black text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-7xl font-black uppercase italic leading-none">A Solução <span className="text-orange-600 italic">Integrada.</span></h2>
          <p className="text-zinc-500 text-xl font-medium">Unimos a Tríade da Excelência para anular o risco e maximizar o impacto econômico municipal.</p>
          <div className="flex flex-wrap justify-center gap-10 pt-10 opacity-60 grayscale">
            <img src="/assets/logo lovi.jfif" className="h-8 invert" />
            <img src="/assets/logo acr.png" className="h-12" />
            <img src="/assets/logo guttbulls.jfif" className="h-12" />
          </div>
        </div>
      </section>

      {/* 04. BLINDAGEM JURÍDICA (LEI 14.133) */}
      <section className="py-32 px-10 bg-zinc-50 text-black border-y border-zinc-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
             <Scale className="text-orange-600" size={48} />
             <h2 className="text-6xl font-black uppercase italic">Segurança <br/>Institucional.</h2>
             <p className="text-zinc-500 text-xl leading-relaxed italic">
                Dominamos a Lei 14.133 como diferencial competitivo. Cada contrato nasce com matriz de risco estruturada, parecer técnico validado e rastreabilidade documental completa.
             </p>
             <p className="text-black font-black text-lg">O gestor público não compra um evento. Ele compra segurança institucional.</p>
          </div>
          <div className="relative">
             <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800" className="rounded-[4rem] grayscale shadow-2xl" />
          </div>
        </div>
      </section>

      {/* 05. ELITE TÉCNICA (ACR SUPERSTARS) */}
      <section className="py-32 px-10 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative rounded-[4rem] overflow-hidden group">
            <video autoPlay muted loop className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000">
               <source src="/assets/video5.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="order-1 md:order-2 space-y-8">
             <h2 className="text-6xl font-black uppercase italic text-orange-500 leading-none text-right md:text-left">Elite <br/>ACR.</h2>
             <p className="text-zinc-400 text-lg leading-relaxed text-right md:text-left">
                Trabalhamos com os atletas mais ranqueados do país. Isso eleva ticket médio, atrai patrocinadores premium e posiciona a cidade como polo de excelência esportiva.
             </p>
             <p className="text-orange-500 font-black uppercase text-xl text-right md:text-left italic">Alta performance gera alto faturamento.</p>
          </div>
        </div>
      </section>

      {/* 06. GENÉTICA PREMIUM (GUTT BULLS) */}
      <section className="py-32 px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1 space-y-8">
             <h2 className="text-6xl font-black uppercase italic leading-none">Genética de <br/><span className="text-orange-600 underline">Resultado.</span></h2>
             <p className="text-zinc-500 text-lg leading-relaxed italic font-medium">
                A base do espetáculo está na genética. Touros selecionados com rigor técnico, protocolos de bem-estar e rastreabilidade veterinária.
             </p>
             <p className="font-black text-xl">Performance não é sorte. É engenharia biológica aplicada.</p>
          </div>
          <div className="flex-1">
             <img src="/assets/foto16.jpg" className="rounded-[4rem] grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </section>

      {/* 07. MARKETING & MONETIZAÇÃO */}
      <section className="py-32 px-10 bg-zinc-950">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-6">
             <h2 className="text-7xl font-black uppercase italic text-orange-500">Engenharia de Marketing.</h2>
             <p className="text-zinc-400 text-xl max-w-3xl mx-auto font-medium italic">
                Nossa engenharia de marketing transforma atenção em receita. Não fazemos divulgação. Construímos sistemas de aquisição e retenção.
             </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {t: "Funil WhatsApp High Ticket", d: "Venda estruturada de camarotes para grupos de elite.", i: <Smartphone/>},
              {t: "Monetização de Ativos", d: "Patrocínio com proposta de valor clara e ROI comprovado.", i: <Target/>},
              {t: "Performance Digital", d: "Gestão de tráfego baseada em conversão real de ingressos.", i: <TrendingUp/>}
            ].map((item, i) => (
              <div key={i} className="p-10 bg-zinc-900/50 rounded-[3rem] border border-white/5 hover:border-orange-500 transition-all text-center space-y-6">
                <div className="text-orange-500 flex justify-center">{item.i}</div>
                <h4 className="font-black uppercase italic text-xl">{item.t}</h4>
                <p className="text-[10px] text-zinc-500 font-bold uppercase leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-orange-500 font-black text-2xl mt-16 italic uppercase">Evento sem estratégia é custo. Evento com Lovi é ativo financeiro.</p>
        </div>
      </section>

      {/* 08. DADOS & ROI (TUM DUM) */}
      <section className="py-32 px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 text-right">
             <h2 className="text-6xl font-black uppercase italic text-orange-600 leading-none">Dados em <br/>Escala.</h2>
             <p className="text-zinc-500 text-lg leading-relaxed font-medium">
                Monitoramos comportamento, fluxo e consumo. Transformamos público em métrica. Métrica em argumento. Argumento em valorização de cota.
             </p>
             <p className="text-orange-500 font-black text-xl italic uppercase">ROI comprovado justifica investimento ampliado.</p>
          </div>
          <div className="flex justify-center">
             <BarChart3 size={180} className="text-zinc-200" />
          </div>
        </div>
      </section>

      {/* 09. OMNICHANNEL & MÍDIA */}
      <section className="py-32 px-10 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-7xl font-black uppercase italic">Domínio de <span className="text-orange-500">Narrativa.</span></h2>
          <p className="text-zinc-500 max-w-3xl mx-auto leading-relaxed text-xl font-medium italic">
             Controlamos a narrativa antes, durante e depois do evento. YouTube, Instagram, mídia local, imprensa regional. A cidade-sede vira pauta nacional.
          </p>
          <div className="flex justify-center gap-12 text-orange-500 pt-10">
             <Youtube size={60} />
             <Mic2 size={60} />
             <Share2 size={60} />
          </div>
        </div>
      </section>

      {/* 10. IMPACTO ECONÔMICO (CITY TAKEOVER) */}
      <section className="py-32 px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-7xl font-black uppercase italic leading-none text-orange-600">Impacto <br/>Local.</h2>
            <p className="text-zinc-500 italic text-xl leading-relaxed font-medium">
              Hotelaria, restaurantes, comércio e turismo. Criamos um ciclo de capital que ultrapassa a arena.
            </p>
            <p className="text-orange-500 font-black text-xl italic uppercase">Não ocupamos espaço. Movimentamos economia.</p>
          </div>
          <div className="rounded-[4rem] overflow-hidden grayscale shadow-2xl">
             <img src="https://images.unsplash.com/photo-1578002171561-fb3112708316?auto=format&fit=crop&w=800" alt="Cidade" />
          </div>
        </div>
      </section>

      {/* 11. ESG & GOVERNANÇA */}
      <section className="py-32 px-10 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative p-10 bg-zinc-900 rounded-[3rem] border border-white/5">
             <Leaf size={100} className="text-orange-500 opacity-20 mx-auto" />
          </div>
          <div className="space-y-8">
            <h2 className="text-6xl font-black uppercase italic leading-none">ESG e <br/>Governança.</h2>
            <p className="text-zinc-500 italic text-lg leading-relaxed">
              Sustentabilidade deixou de ser diferencial. É exigência institucional. Gestão de resíduos, inclusão social e transparência financeira.
            </p>
            <div className="h-[2px] w-full bg-white/5" />
            <p className="font-black text-xs uppercase tracking-widest text-zinc-600">Entrega técnica • Transparência Radical • Legado Municipal</p>
          </div>
        </div>
      </section>

      {/* 12. FECHAMENTO – DECISÃO & CTA */}
      <footer className="py-40 bg-black text-center px-10 border-t border-white/10">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div initial={{scale:0.9, opacity:0}} whileInView={{scale:1, opacity:1}}>
            <h2 className="text-orange-500 font-black italic text-6xl md:text-8xl uppercase tracking-tighter leading-none">
              Decisões Estratégicas <br/>Criam Legado.
            </h2>
            <p className="text-zinc-500 mt-10 leading-relaxed text-xl max-w-2xl mx-auto font-medium">
              A Lovi não vende eventos. Estrutura operações de impacto econômico, blindadas juridicamente e monetizadas com inteligência.
            </p>
            <button className="mt-16 px-16 py-8 bg-orange-600 rounded-full font-black italic uppercase text-2xl hover:scale-110 transition shadow-[0_0_100px_rgba(234,88,12,0.4)]">
              Aprovar Projeto Estratégico 2026
            </button>
          </motion.div>
          <div className="pt-20 text-zinc-800 text-[10px] font-black uppercase tracking-[1em]">
            Felipe Makarios | Founder & Visionary
          </div>
        </div>
      </footer>

      {/* CTA FLUTUANTE FIXO */}
      <div className="fixed bottom-10 right-10 z-[200]">
         <button className="p-4 bg-orange-600 rounded-full shadow-2xl hover:scale-110 transition active:scale-95 border border-white/20">
            <Rocket className="text-white" size={24} />
         </button>
      </div>

    </div>
  );
}