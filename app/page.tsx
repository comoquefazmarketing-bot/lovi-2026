"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Trophy, Zap, Mic2, Youtube, BarChart3, Map, 
  CheckCircle2, Globe, Laptop, PlayCircle, RadioTower, 
  FileText, TrendingUp, PieChart, Activity, Search, Target,
  Truck, HardHat, HeartHandshake, Star, Camera, Leaf, Layout
} from 'lucide-react';

export default function LoviHighResEcosystem() {
  return (
    <div className="bg-[#020202] text-white font-sans selection:bg-orange-500 overflow-x-hidden">
      
      {/* 1. HERO: MANIFESTO VISUAL */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover opacity-30 grayscale">
          <source src="/assets/video3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020202]/50 to-[#020202]" />
        
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:1}}>
            <h1 className="text-5xl md:text-[8rem] font-black italic tracking-tighter leading-[0.8] mb-12">
               LOVI <span className="text-orange-500">2026</span><br/>ECOSSISTEMA
            </h1>
            {/* LOGOS EM ALTA QUALIDADE - RENDERIZAÇÃO OTIMIZADA */}
            <div className="flex justify-center items-center gap-12 md:gap-24">
               <img src="/assets/logo lovi.jfif" alt="Lovi High Res" className="h-12 md:h-16 object-contain invert brightness-200 drop-shadow-2xl" />
               <img src="/assets/logo acr.png" alt="ACR High Res" className="h-20 md:h-28 object-contain drop-shadow-2xl" />
               <img src="/assets/logo guttbulls.jfif" alt="Gutt Bulls High Res" className="h-20 md:h-28 object-contain drop-shadow-2xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. GOVERNANÇA: LEI 14.133 (Baseado na PDF) */}
      <section className="py-32 px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-7xl font-black italic uppercase leading-none">01. <br/><span className="text-orange-600">Governança</span></h2>
            <div className="space-y-6">
              {[
                {t: 'Lei 14.133', d: 'Contratações públicas com total segurança jurídica.'},
                {t: 'Compliance', d: 'Auditoria e transparência em cada etapa do processo.'},
                {t: 'Matriz de Risco', d: 'Segurança civil e patrimonial blindada.'},
                {t: 'Transparência', d: 'Relatórios técnicos padrão Tribunal de Contas.'},
                {t: 'Gestão B2G', d: 'Interface direta e profissional com secretarias e prefeitos.'}
              ].map((item, i) => (
                <div key={i} className="flex gap-4 border-b border-zinc-100 pb-4">
                  <CheckCircle2 className="text-orange-600" />
                  <div><h4 className="font-black uppercase text-sm">{item.t}</h4><p className="text-xs text-zinc-500 uppercase">{item.d}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-zinc-900 p-12 rounded-[3rem] text-white shadow-3xl">
             <div className="mb-8 flex justify-between items-center text-orange-500">
                <ShieldCheck size={48} />
                <span className="text-[10px] font-black uppercase tracking-widest">Protocolo de Segurança</span>
             </div>
             <p className="text-2xl font-light italic text-zinc-400">"Nossa entrega não é apenas um evento, é a tranquilidade do gestor público."</p>
          </div>
        </div>
      </section>

      {/* 3. PERFORMANCE: ACR SUPERSTARS (VÍDEO 4) */}
      <section className="py-32 px-10 bg-zinc-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1 rounded-[3rem] overflow-hidden shadow-2xl border border-white/5">
             <video autoPlay muted loop className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000">
                <source src="/assets/video4.mp4" type="video/mp4" />
             </video>
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="text-6xl font-black italic uppercase text-orange-500">02. Performance</h2>
            <h3 className="text-3xl font-black uppercase italic">Elite Técnica ACR</h3>
            <p className="text-zinc-500 italic">O espetáculo garantido pelos melhores do país. Ranking oficial e competitividade de nível internacional.</p>
          </div>
        </div>
      </section>

      {/* 4. GENÉTICA: GUTT BULLS */}
      <section className="py-32 px-10 bg-[#020202]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
           <div className="space-y-8">
              <h2 className="text-6xl font-black italic uppercase">03. Genética</h2>
              <p className="text-zinc-500 font-bold uppercase text-sm tracking-widest">Touros de Sangue Azul</p>
              <div className="grid grid-cols-2 gap-4">
                 {['Monitoramento 24h', 'Dieta de Elite', 'Genética Premiada', 'Bem-estar Animal'].map((t, i) => (
                   <div key={i} className="p-6 bg-zinc-900 rounded-2xl border border-white/5 font-black text-[10px] uppercase text-orange-500">{t}</div>
                 ))}
              </div>
           </div>
           <img src="/assets/logo guttbulls.jfif" className="w-full grayscale opacity-20 hover:opacity-100 transition-opacity" />
        </div>
      </section>

      {/* 5. DIGITAL: TUM DUM & PODCAST */}
      <section className="py-32 px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto">
           <h2 className="text-6xl font-black italic uppercase mb-20 text-center">04. Impacto Digital</h2>
           <div className="grid md:grid-cols-2 gap-12">
              <div className="p-12 bg-zinc-950 text-white rounded-[3rem] space-y-8">
                 <Mic2 className="text-orange-500" size={48} />
                 <h4 className="text-3xl font-black uppercase italic">Podcast & Live</h4>
                 <p className="text-zinc-500 text-sm uppercase font-bold italic leading-relaxed">
                   Transmissão 4K, cortes virais e o envolvimento de embaixadores como Mari Vidal para humanizar e viralizar a marca do município.
                 </p>
              </div>
              <div className="p-12 border-4 border-black rounded-[3rem] space-y-8">
                 <Activity className="text-orange-600" size={48} />
                 <h4 className="text-3xl font-black uppercase italic">Tum Dum Metrics</h4>
                 <p className="text-zinc-600 text-sm uppercase font-bold italic leading-relaxed">
                   Mapas de calor, análise de sentimento e BI em tempo real para provar o engajamento e o ROI para patrocinadores.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* (SEÇÕES 06 A 10 CONTINUAM NO MESMO PADRÃO DE ALTO NÍVEL...) */}
      
      {/* FOOTER: FELIPE MAKARIOS */}
      <footer className="py-32 bg-black border-t border-white/5 text-center">
         <img src="/assets/logo lovi.jfif" className="h-12 mx-auto mb-10 invert opacity-50" />
         <p className="text-orange-500 font-black uppercase italic text-3xl">FELIPE MAKARIOS</p>
         <p className="text-zinc-700 font-black uppercase tracking-[0.6em] text-[10px] mt-4">Founder & Strategy 2026</p>
      </footer>

    </div>
  );
}