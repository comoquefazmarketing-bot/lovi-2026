"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Youtube, Instagram, Tv, Radio, Zap, BarChart3, ShieldCheck, Users, 
  Smartphone, Monitor, Laptop, PlayCircle, RadioTower, Trophy, MapPin,
  Target, Briefcase, TrendingUp, Landmark, Megaphone, FileText
} from 'lucide-react';

export default function LoviMasterplan2026() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500 font-sans overflow-x-hidden">
      
      {/* 0. NAV FIXA */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl border-b border-white/5 py-6 px-10 flex justify-between items-center">
        <div className="text-2xl font-black italic tracking-tighter text-orange-600 uppercase">LOVI <span className="text-white font-light">STRATEGY 2026</span></div>
        <div className="bg-orange-600 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest animate-pulse">Apresentação Executiva</div>
      </nav>

      {/* 1. HERO: NORTE ESTRATÉGICO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale contrast-150">
          <source src="/assets/video1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#050505]" />
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <span className="text-orange-500 font-black uppercase tracking-[0.5em] text-sm mb-4 block">Capítulo 01: Norte Estratégico</span>
            <h1 className="text-5xl md:text-[6rem] font-black tracking-tighter leading-none italic uppercase mb-8">
              O MAIOR OPERADOR <br/> <span className="text-orange-500">B2G DO BRASIL</span>
            </h1>
            <div className="grid md:grid-cols-3 gap-8 text-left mt-16">
              <div className="border-l-2 border-orange-600 pl-4">
                <h4 className="font-bold text-orange-500 uppercase text-xs">Pilar 01</h4>
                <p className="text-sm text-zinc-400 uppercase">Domínio B2G Estruturado</p>
              </div>
              <div className="border-l-2 border-orange-600 pl-4">
                <h4 className="font-bold text-orange-500 uppercase text-xs">Pilar 02</h4>
                <p className="text-sm text-zinc-400 uppercase">Mídia e Audiência Própria</p>
              </div>
              <div className="border-l-2 border-orange-600 pl-4">
                <h4 className="font-bold text-orange-500 uppercase text-xs">Pilar 03</h4>
                <p className="text-sm text-zinc-400 uppercase">Domínio Técnico da Arena</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. METAS NUMÉRICAS (DASHBOARD) */}
      <section className="py-32 px-10 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black italic uppercase mb-16 border-b border-orange-600 inline-block">Clareza Executiva (KPIs)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Contratos Ativos', val: '25', sub: 'Setor Público' },
              { label: 'Estados', val: '03', sub: 'Estratégicos' },
              { label: 'Pessoas Impactadas', val: '300k', sub: 'Presencial' },
              { label: 'Visualizações', val: '10M', sub: 'Digital Acumulado' }
            ].map((kpi, i) => (
              <div key={i} className="p-8 bg-zinc-900 rounded-3xl border border-white/5 hover:border-orange-500 transition-all">
                <div className="text-5xl font-black text-orange-500 mb-2">{kpi.val}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-white">{kpi.label}</div>
                <div className="text-[10px] text-zinc-500 uppercase">{kpi.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ESTRATÉGIA A: DOMÍNIO B2G */}
      <section className="py-32 px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-orange-600 text-white px-4 py-1 text-xs font-black uppercase italic">Estratégia A</div>
            <h2 className="text-6xl font-black uppercase italic leading-none text-zinc-900">Máquina <br/> Institucional.</h2>
            <p className="text-zinc-600 text-xl italic leading-relaxed">"O Prefeito não quer risco, ele quer segurança. Nós entregamos o <strong>Kit Prefeito 2026</strong>: Dossiê de impacto econômico, conformidade com a Lei 14.133 e relatório técnico padrão TCE."</p>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-zinc-100 rounded-xl border border-zinc-200">
                  <FileText className="text-orange-600 mb-2" />
                  <h4 className="font-bold uppercase text-xs">Dossiê de Impacto</h4>
                  <p className="text-[10px] text-zinc-500">Geração de empregos e economia local.</p>
               </div>
               <div className="p-4 bg-zinc-100 rounded-xl border border-zinc-200">
                  <ShieldCheck className="text-orange-600 mb-2" />
                  <h4 className="font-bold uppercase text-xs">Compliance</h4>
                  <p className="text-[10px] text-zinc-500">Lei 14.133 & Segurança Jurídica.</p>
               </div>
            </div>
          </div>
          <div className="relative group">
             {/* MOCKUP LAPTOP COM PROPOSTA */}
             <div className="p-2 bg-zinc-800 rounded-xl shadow-2xl border border-zinc-300">
                <div className="bg-white aspect-video rounded-lg flex flex-col p-6 overflow-hidden text-zinc-400">
                   <div className="h-4 w-32 bg-zinc-200 rounded mb-4"></div>
                   <div className="space-y-2">
                      <div className="h-2 w-full bg-zinc-100 rounded"></div>
                      <div className="h-2 w-full bg-zinc-100 rounded"></div>
                      <div className="h-2 w-2/3 bg-orange-100 rounded"></div>
                   </div>
                   <div className="mt-auto flex justify-between">
                      <div className="h-8 w-8 bg-orange-600 rounded-full"></div>
                      <div className="h-8 w-24 bg-zinc-900 rounded-lg"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. ESTRATÉGIA B: MÁQUINA DE MÍDIA (MOCKUP IPHONE) */}
      <section className="py-32 px-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic mb-6">Mídia <span className="text-orange-500">Proprietária</span></h2>
            <p className="text-zinc-500 text-xl max-w-3xl mx-auto uppercase tracking-widest italic">Viramos o canal de conteúdo do Agro.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 items-center">
            <div className="space-y-12">
               <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                     <Youtube className="text-orange-500" />
                     <h3 className="text-xl font-bold uppercase italic italic">Podcast Lovi</h3>
                  </div>
                  <p className="text-sm text-zinc-500 italic">"Nos Bastidores da Arena": YouTube + Spotify gerando autoridade política e conexão emocional.</p>
               </div>
               <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                     <Instagram className="text-orange-500" />
                     <h3 className="text-xl font-bold uppercase italic italic">Social Militarizado</h3>
                  </div>
                  <p className="text-sm text-zinc-500 italic">Conteúdo 30 dias antes. Modelo NFL: Antes, Durante e Depois.</p>
               </div>
            </div>

            <div className="relative mx-auto w-[280px] h-[560px] bg-black rounded-[3rem] border-[10px] border-zinc-900 shadow-[0_0_100px_rgba(234,88,12,0.2)] overflow-hidden">
               <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                  <source src="/assets/video2.mp4" type="video/mp4" />
               </video>
            </div>

            <div className="space-y-12">
               <div className="p-6 border border-white/5 bg-zinc-900/30 rounded-2xl">
                  <h4 className="text-orange-500 font-black mb-2 uppercase italic text-xs">Impacto</h4>
                  <p className="text-xs text-zinc-400 uppercase tracking-tighter">Deixamos de ser apenas um evento para nos tornarmos uma NARRATIVA NACIONAL.</p>
               </div>
               <div className="p-6 border border-white/5 bg-zinc-900/30 rounded-2xl">
                  <h4 className="text-orange-500 font-black mb-2 uppercase italic text-xs">Cotas de Patrocínio</h4>
                  <p className="text-xs text-zinc-400 uppercase tracking-tighter">Estrutura Master, Agro e Cidade. Monetização 360º.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ESTRATÉGIA C: ATIVAÇÃO LOCAL (CITY TAKEOVER) */}
      <section className="py-32 px-10 bg-zinc-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
             <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source src="/assets/video1.mp4" type="video/mp4" />
             </video>
             <div className="absolute inset-0 bg-orange-600/20 mix-blend-overlay"></div>
          </div>
          <div className="space-y-10 flex flex-col justify-center">
            <h2 className="text-5xl font-black uppercase italic italic text-orange-500 leading-none">City Takeover <br/> <span className="text-white">Ações de Cidade</span></h2>
            <div className="space-y-6">
               <div className="flex gap-4">
                  <RadioTower className="text-orange-500 shrink-0" />
                  <p className="text-sm text-zinc-400"><strong>Blitz 30 Dias Antes:</strong> Carro de som premium, rádio local e influenciadores regionais.</p>
               </div>
               <div className="flex gap-4">
                  <Landmark className="text-orange-500 shrink-0" />
                  <p className="text-sm text-zinc-400"><strong>Semana Lovi nas Escolas:</strong> Palestras sobre tradição agro e ingressos solidários (Legitimidade Social).</p>
               </div>
               <div className="flex gap-4">
                  <TrendingUp className="text-orange-500 shrink-0" />
                  <p className="text-sm text-zinc-400"><strong>Dia do Comércio:</strong> Ativação econômica local com kits de adesivos e vitrine temática.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CIRCUITO PRÓPRIO (RANKING LOVI) */}
      <section className="py-32 px-10 bg-black text-center">
        <Trophy className="mx-auto text-orange-600 mb-8" size={80} />
        <h2 className="text-6xl md:text-8xl font-black italic uppercase italic tracking-tighter mb-6">🏆 RANKING LOVI 2026</h2>
        <p className="text-zinc-500 text-xl max-w-3xl mx-auto italic uppercase tracking-[0.3em]">O Padrão Ouro de Pontuação e Fidelidade do Rodeio Brasileiro.</p>
        <div className="mt-16 inline-block bg-orange-600 text-white px-12 py-4 rounded-full font-black italic hover:scale-110 transition-transform">FINAL NACIONAL TRANSMITIDA EM 4K</div>
      </section>

      {/* 7. CRONOGRAMA EXECUTIVO (TABELA) */}
      <section className="py-32 px-10 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black italic uppercase mb-16 italic underline decoration-orange-600">Roadmap Executivo 2026</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {['Q1: Estruturação B2G & Podcast', 'Q2: Blitz 360 & Ranking', 'Q3: Expansão Nacional', 'Q4: Consolidação Flagship'].map((phase, i) => (
              <div key={phase} className="p-8 border border-white/5 bg-zinc-900/50 rounded-2xl relative">
                <span className="absolute top-4 right-4 text-orange-600 font-black">0{i+1}</span>
                <p className="text-sm font-bold uppercase italic">{phase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. POSICIONAMENTO FINAL & VERCEDITO */}
      <footer className="py-32 px-10 bg-black text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto">
           <h3 className="text-zinc-500 uppercase tracking-widest mb-10 text-xs font-bold">Veredito Head de Marketing</h3>
           <p className="text-3xl md:text-5xl font-light italic leading-relaxed text-zinc-300">"A Lovi deixa de ser organizadora para ser um <span className="text-orange-500 font-black">ECOSSISTEMA DE ENTRETENIMENTO AGRO ESTRUTURADO</span>. Temos a técnica, a genética e a estrutura jurídica. Agora, assumimos a narrativa."</p>
           
           <div className="mt-20 flex flex-col md:flex-row justify-center items-center gap-10">
              <div className="text-left">
                <p className="text-orange-600 font-black text-xl italic uppercase">Felipe Makarios</p>
                <p className="text-zinc-600 text-xs font-bold uppercase tracking-widest">Head de Marketing & Criador</p>
              </div>
              <div className="bg-white text-black px-10 py-5 rounded-full font-black text-xl hover:bg-orange-600 hover:text-white transition-all cursor-pointer">
                ABRIR BRIEFING OPERACIONAL
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}