"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Trophy, Zap, Mic2, Youtube, BarChart3, Map, 
  CheckCircle2, Globe, Laptop, PlayCircle, RadioTower, 
  Target, Truck, Leaf, Layout, ArrowRight, Activity, Users, Star,
  Briefcase, Gavel, TrendingUp, Smartphone, Share2, Camera, Megaphone
} from 'lucide-react';

export default function LoviFinalEcosystem() {
  return (
    <div className="bg-[#020202] text-white font-sans selection:bg-orange-500 overflow-x-hidden">
      
      {/* HEADER ESTRATÉGICO */}
      <nav className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-xl border-b border-white/5 py-4 px-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img src="/assets/logo lovi.jfif" className="h-8 invert brightness-200" alt="Lovi" />
          <div className="flex gap-6 md:gap-12 items-center">
            <img src="/assets/logo acr.png" className="h-10 md:h-14" alt="ACR" />
            <img src="/assets/logo guttbulls.jfif" className="h-10 md:h-14" alt="Gutt Bulls" />
          </div>
        </div>
      </nav>

      {/* 01. HERO - MANIFESTO DA HOLDING */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover opacity-30 grayscale contrast-125">
          <source src="/assets/video3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-black" />
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{y:50, opacity:0}} animate={{y:0, opacity:1}} transition={{duration: 1}}>
            <h1 className="text-5xl md:text-[8rem] font-black italic tracking-tighter leading-[0.8] mb-8">
              LOVI <span className="text-orange-500">2026</span><br/><span className="text-outline-white">ECOSSISTEMA.</span>
            </h1>
            <p className="text-zinc-500 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">A tríade da excelência: Governança, Técnica e Genética</p>
          </motion.div>
        </div>
      </section>

      {/* 02. SEGURANÇA JURÍDICA & B2G (BANCO DE IMAGENS: ESCRITÓRIO) */}
      <section className="py-32 px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="flex items-center gap-3 text-orange-600 font-black uppercase text-xs tracking-widest">
               <Gavel size={18} /> Compliance & Backoffice
            </div>
            <h2 className="text-6xl font-black uppercase italic leading-none">01. Segurança <br/><span className="text-orange-600 underline">Jurídica.</span></h2>
            <p className="text-zinc-500 text-lg font-bold italic">Blindagem total sob a Lei 14.133. Protegemos o CPF do gestor público com processos auditáveis e transparência radical.</p>
            <div className="grid grid-cols-1 gap-4">
              {[
                {t: 'Adequação Técnica 14.133', d: 'Contratações públicas estruturadas com parecer jurídico especializado.'},
                {t: 'Matriz de Risco Operacional', d: 'Mapeamento de responsabilidades e seguros de responsabilidade civil.'},
                {t: 'Transparência em Tempo Real', d: 'Prestação de contas digital padrão Tribunal de Contas.'}
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start border-l-4 border-zinc-200 pl-6 py-2">
                  <ShieldCheck className="text-orange-600 flex-shrink-0" size={24} />
                  <div><h4 className="font-black uppercase text-sm">{item.t}</h4><p className="text-[10px] text-zinc-400 font-bold uppercase">{item.d}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800" className="rounded-[3rem] shadow-3xl grayscale" alt="Escritório Advocacia" />
            <div className="absolute -bottom-6 -right-6 bg-zinc-900 text-white p-8 rounded-2xl">
               <p className="text-orange-500 font-black italic">100% COMPLIANT</p>
               <p className="text-[8px] uppercase font-bold opacity-50 tracking-widest">ISO 9001 Standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03. ELITE TÉCNICA: ACR SUPERSTARS (VÍDEO 5) */}
      <section className="py-32 px-10 bg-zinc-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1 rounded-[3rem] overflow-hidden shadow-2xl group border border-white/5">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000">
              <source src="/assets/video5.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-3 text-orange-500 font-black uppercase text-xs tracking-widest">
               <Trophy size={18} /> Vertical de Performance
            </div>
            <h2 className="text-6xl font-black uppercase italic leading-none text-orange-500">02. Elite <br/>Técnica.</h2>
            <p className="text-zinc-500 italic uppercase font-bold tracking-tighter">Associação de Campeões de Rodeio (ACR).</p>
            <p className="text-zinc-400 text-sm leading-relaxed">Garantimos os 30 melhores competidores do ranking nacional. O espetáculo é técnico, competitivo e atrai patrocinadores de alto ticket que buscam excelência.</p>
            <div className="grid grid-cols-2 gap-4 pt-6">
               <div className="p-4 bg-zinc-900 rounded-xl border border-white/5 font-black text-[10px] uppercase text-center">Ranking Oficial</div>
               <div className="p-4 bg-zinc-900 rounded-xl border border-white/5 font-black text-[10px] uppercase text-center">Julgamento Digital</div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. HUMANIZAÇÃO: MARI VIDAL (VÍDEO MARI) */}
      <section className="py-32 px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="flex items-center gap-3 text-orange-600 font-black uppercase text-xs tracking-widest">
               <Star size={18} /> Marketing & Lifestyle
            </div>
            <h2 className="text-6xl font-black uppercase italic leading-none">03. Impacto <br/><span className="text-orange-600">Emocional.</span></h2>
            <p className="text-zinc-500 italic text-xl">Mari Vidal humaniza a marca. Ela transforma o evento bruto num estilo de vida aspiracional, atraindo o público feminino e familiar para a arena.</p>
            <ul className="space-y-3">
               {['Criação de Conteúdo Viral', 'Engajamento Orgânico B2C', 'Lifestyle Premium'].map((t, i) => (
                 <li key={i} className="flex items-center gap-2 font-black uppercase text-xs tracking-widest"><CheckCircle2 className="text-orange-600" size={16}/> {t}</li>
               ))}
            </ul>
          </div>
          <div className="rounded-[4rem] overflow-hidden shadow-3xl border-[12px] border-zinc-100">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
               <source src="/assets/mari vidal.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* 05. INTELIGÊNCIA DE DADOS: TUM DUM (FOTO 16) */}
      <section className="py-32 px-10 bg-black border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 relative z-10">
            <h2 className="text-6xl font-black uppercase italic text-orange-500 leading-none">04. Inteligência <br/>& Lucro.</h2>
            <p className="text-zinc-400 italic text-lg leading-relaxed">O monitoramento Tum Dum reverte dados em lucro direto. Ao mapear o comportamento do público, otimizamos as cotas de patrocínio com base em ROI real, não em estimativas.</p>
            <div className="grid grid-cols-1 gap-4">
               <div className="p-8 bg-zinc-900/80 backdrop-blur rounded-[2rem] border border-orange-600/30">
                  <h4 className="text-orange-500 font-black uppercase italic mb-2">Impacto Financeiro:</h4>
                  <p className="text-[10px] text-zinc-500 font-black uppercase leading-relaxed">
                    Identificamos zonas de calor para ativação de marcas, permitindo vender espaços de visibilidade com 40% mais eficiência comercial.
                  </p>
               </div>
            </div>
          </div>
          <div className="relative group p-4 bg-zinc-900 rounded-[3rem] border border-white/10">
            <img src="/assets/foto16.jpg" className="w-full opacity-40 grayscale group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
               <Activity size={80} className="text-orange-600 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* 06. MÍDIA OMNICHANNEL: SUBDIVIDIDO (BANCO DE IMAGENS) */}
      <section className="py-32 px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-7xl font-black uppercase italic leading-none">05. Mídia <span className="text-orange-600">360°.</span></h2>
            <p className="text-zinc-400 font-bold uppercase tracking-[0.4em] text-xs italic">Onde a narrativa do município ganha escala global.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* CANAL 1: PODCAST */}
            <div className="group space-y-6">
              <div className="overflow-hidden rounded-[2rem] h-64 shadow-xl">
                 <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="px-4">
                <h4 className="font-black uppercase italic text-orange-600 flex items-center gap-2 text-xl"><Mic2 /> Lovi Podcast</h4>
                <p className="text-[10px] font-bold text-zinc-500 uppercase mt-2">Autoridade e networking B2G. Entrevistas estratégicas com líderes e patrocinadores.</p>
              </div>
            </div>
            {/* CANAL 2: LIVE STREAM */}
            <div className="group space-y-6">
              <div className="overflow-hidden rounded-[2rem] h-64 shadow-xl">
                 <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="px-4">
                <h4 className="font-black uppercase italic text-orange-600 flex items-center gap-2 text-xl"><Youtube /> Live YouTube 4K</h4>
                <p className="text-[10px] font-bold text-zinc-500 uppercase mt-2">Alcance global. Transmissão cinematográfica que coloca o município no mapa do entretenimento nacional.</p>
              </div>
            </div>
            {/* CANAL 3: SOCIAL ADS */}
            <div className="group space-y-6">
              <div className="overflow-hidden rounded-[2rem] h-64 shadow-xl">
                 <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=400" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="px-4">
                <h4 className="font-black uppercase italic text-orange-600 flex items-center gap-2 text-xl"><Smartphone /> Social Ads</h4>
                <p className="text-[10px] font-bold text-zinc-500 uppercase mt-2">Performance digital. Campanhas de tráfego pago focadas em conversão de ingressos e ativação de marcas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07. CITY TAKEOVER: IMPACTO LOCAL (BANCO DE IMAGENS: BRASIL URBANO) */}
      <section className="py-32 px-10 bg-[#020202]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <img src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=800" className="rounded-[4rem] grayscale opacity-50 group-hover:opacity-100 transition-opacity shadow-3xl" alt="Brasil Urban Action" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
               <Map className="text-orange-500 scale-[3] opacity-20 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <div className="space-y-10 text-right md:text-left">
            <h2 className="text-6xl font-black uppercase italic leading-none text-orange-500">06. City <br/>Takeover.</h2>
            <p className="text-zinc-500 italic text-lg leading-relaxed">Não ficamos apenas na arena. Inundamos o comércio local, as escolas e o turismo da cidade sede com a energia da marca Lovi.</p>
            <div className="flex flex-wrap gap-4 justify-end md:justify-start pt-6">
               {['Blitz de Rádio', 'Turismo Municipal', 'Economia Local'].map((t, i) => (
                 <span key={i} className="px-6 py-3 bg-zinc-900 border border-white/5 rounded-full font-black text-[10px] uppercase tracking-widest text-orange-500">{t}</span>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. FECHAMENTO: FELIPE MAKARIOS */}
      <footer className="py-40 bg-black text-center border-t border-white/5 px-10">
        <div className="max-w-4xl mx-auto space-y-12">
           <img src="/assets/logo lovi.jfif" className="h-10 mx-auto mb-20 invert opacity-40" />
           <h2 className="text-6xl font-black italic uppercase leading-none">O Futuro é uma Decisão <br/><span className="text-orange-500 underline decoration-white">Estratégica.</span></h2>
           
           <div className="flex flex-col md:flex-row justify-center items-center gap-12 pt-16">
              <div className="text-center md:text-right space-y-1">
                 <p className="text-zinc-700 font-black uppercase text-[10px] tracking-[0.4em]">Founder & CEO</p>
                 <p className="text-3xl font-black italic uppercase">Felipe Makarios</p>
              </div>
              <div className="h-24 w-[1px] bg-zinc-800 hidden md:block" />
              <div className="text-center md:text-left space-y-4">
                 <button className="px-12 py-6 bg-orange-600 rounded-full font-black italic uppercase text-lg shadow-[0_0_60px_rgba(234,88,12,0.3)] hover:scale-105 transition-transform active:scale-95">
                    Aprovar Board Meeting
                 </button>
                 <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Lovi Strategy 2026</p>
              </div>
           </div>
        </div>
      </footer>

    </div>
  );
}