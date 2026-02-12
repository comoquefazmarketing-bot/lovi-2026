"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Tv, Radio, Zap, BarChart3, ShieldCheck, Users, Smartphone, Monitor, laptop } from 'lucide-react';

export default function PosicionamentoEstrategico2026() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500 font-sans overflow-x-hidden">
      
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl border-b border-white/5 py-6 px-10 flex justify-between items-center">
        <div className="text-2xl font-black italic tracking-tighter text-orange-600 uppercase">LOVI STRATEGY</div>
        <div className="bg-orange-600 px-4 py-1 rounded-full text-[10px] font-bold uppercase italic">Felipe Makarios | Creator</div>
      </nav>

      {/* HERO: POSICIONAMENTO 2026 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale contrast-125">
          <source src="/assets/video1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
        <div className="relative z-10 text-center px-6">
          <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-5xl md:text-[7rem] font-black tracking-tighter leading-none italic uppercase mb-6">
            POSICIONAMENTO <br/> <span className="text-orange-500">ESTRATÉGICO 2026</span>
          </motion.h1>
          <p className="text-lg md:text-2xl text-zinc-400 uppercase tracking-[0.4em] font-light italic">Soberania Digital e Operacional</p>
        </div>
      </section>

      {/* SEÇÃO 01: MOCKUP SMARTPHONE (MARKETING DIGITAL) */}
      <section className="py-32 px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-orange-600 font-black uppercase tracking-widest text-sm">#01 Digital Experience</span>
            <h2 className="text-6xl font-black uppercase italic leading-none">Domínio Social.</h2>
            <p className="text-zinc-600 text-xl leading-relaxed">Nossa estratégia de tráfego pago e conteúdo viral é desenhada para a palma da mão do seu cliente. Não é apenas anúncio, é <strong>onipresença digital</strong> rastreada por BI.</p>
          </div>
          
          {/* MOCKUP IPHONE */}
          <div className="relative mx-auto w-[280px] h-[580px] bg-zinc-900 rounded-[3rem] border-[8px] border-zinc-800 shadow-2xl overflow-hidden">
             <div className="absolute top-0 w-full h-6 bg-zinc-800 z-10 flex justify-center"><div className="w-20 h-4 bg-black rounded-b-xl"></div></div>
             <video autoPlay muted loop playsInline className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all">
                <source src="/assets/video2.mp4" type="video/mp4" />
             </video>
          </div>
        </div>
      </section>

      {/* SEÇÃO 02: MOCKUP MONITOR/TV (MÍDIA 360) */}
      <section className="py-32 px-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase italic mb-6">Mídia <span className="text-orange-500">Omnichannel</span></h2>
        </div>
        
        {/* MOCKUP MONITOR */}
        <div className="max-w-5xl mx-auto mb-20 relative p-4 bg-zinc-800 rounded-t-xl shadow-2xl">
           <div className="bg-black aspect-video rounded-lg overflow-hidden border border-white/10">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-80">
                <source src="/assets/video1.mp4" type="video/mp4" />
              </video>
           </div>
           <div className="w-full h-4 bg-zinc-700 mt-2 rounded-b-xl"></div>
           <div className="w-32 h-16 bg-zinc-700 mx-auto mt-1 rounded-b-3xl shadow-xl"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto text-center">
          <div className="p-8 border border-white/5 bg-zinc-900/50 rounded-3xl">
            <Tv className="text-orange-600 mx-auto mb-4" size={40} />
            <h3 className="font-bold uppercase italic">TV & Rádio</h3>
          </div>
          <div className="p-8 border border-white/5 bg-zinc-900/50 rounded-3xl border-orange-600">
            <Youtube className="text-orange-600 mx-auto mb-4" size={40} />
            <h3 className="font-bold uppercase italic">YouTube Ads</h3>
          </div>
          <div className="p-8 border border-white/5 bg-zinc-900/50 rounded-3xl">
            <Zap className="text-orange-600 mx-auto mb-4" size={40} />
            <h3 className="font-bold uppercase italic">PR Nacional</h3>
          </div>
        </div>
      </section>

      {/* SEÇÃO 03: CORPORATIVO & COMERCIAL */}
      <section className="py-32 px-10 bg-zinc-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 italic">
            <span className="text-orange-600 font-black uppercase tracking-widest text-sm">#02 Robusteza Comercial</span>
            <h2 className="text-6xl font-black uppercase leading-none">Backoffice <br/> & Comercial.</h2>
            <p className="text-zinc-400 text-xl leading-relaxed">Estrutura completa de suporte, comercial agressivo e conformidade com a <strong>Lei 14.133</strong>. O suporte que sua escala precisa, com a segurança que o governo exige.</p>
          </div>
          
          {/* MOCKUP LAPTOP / DASHBOARD */}
          <div className="relative p-2 bg-zinc-700 rounded-xl shadow-2xl overflow-hidden border border-white/20">
             <div className="bg-black aspect-video rounded-lg flex items-center justify-center p-8">
                <BarChart3 size={100} className="text-orange-600 animate-pulse" />
                <div className="ml-6 space-y-2">
                   <div className="h-4 w-32 bg-zinc-800 rounded"></div>
                   <div className="h-4 w-48 bg-zinc-800 rounded"></div>
                   <div className="h-4 w-24 bg-orange-600 rounded"></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 text-center bg-black">
        <div className="bg-orange-600 text-white px-20 py-6 rounded-full font-black text-2xl inline-block cursor-pointer shadow-[0_0_60px_rgba(234,88,12,0.3)] hover:scale-105 transition-all">
           EXECUTAR PLANEJAMENTO
        </div>
        <p className="mt-10 text-zinc-500 font-bold uppercase tracking-widest text-xs italic">Felipe Makarios | LOVI STRATEGY 2026</p>
      </footer>
    </div>
  );
}