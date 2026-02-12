"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Tv, Radio, Zap, Play, Smartphone } from 'lucide-react';

export default function MarketingDomination() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500 font-sans">
      {/* HEADER ESTRATÉGICO */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/5 py-6 px-10 flex justify-between items-center">
        <div className="text-3xl font-black italic tracking-tighter text-orange-600">LOVI 2026</div>
        <div className="bg-orange-600 px-4 py-1 rounded-full text-[10px] font-bold uppercase animate-pulse">Soberania Digital</div>
      </nav>

      {/* HERO COM O VÍDEO DE MONTARIA (HEROÍSMO E CORAGEM) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale">
          <source src="/assets/video1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        
        <div className="relative z-10 text-center px-6">
          <motion.h1 initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-6xl md:text-[10rem] font-black tracking-tighter leading-none italic">
            MARKETING <br/> <span className="text-orange-500">DOMINATION</span>
          </motion.h1>
          <p className="text-xl mt-6 text-zinc-400 uppercase tracking-[0.5em] font-light">Estratégia de Impacto por Felipe Makarios</p>
        </div>
      </section>

      {/* SEÇÃO OMNICHANNEL */}
      <section className="py-32 px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h2 className="text-5xl font-black uppercase italic italic">Onipresença <span className="text-orange-500 underline">360</span></h2>
          <p className="text-zinc-400 text-lg leading-relaxed">Não entregamos apenas posts. Entregamos domínio cultural. TV, Rádio, Influencers e Mídia de Performance integrados em um único ecossistema operacional.</p>
          <div className="grid grid-cols-2 gap-6 text-orange-500 font-bold text-sm uppercase italic">
             <div className="flex items-center gap-2 border-l-2 border-orange-600 pl-4">#1 YouTube Ads</div>
             <div className="flex items-center gap-2 border-l-2 border-orange-600 pl-4">#1 TV Prime Time</div>
             <div className="flex items-center gap-2 border-l-2 border-orange-600 pl-4">#1 Social Squad</div>
             <div className="flex items-center gap-2 border-l-2 border-orange-600 pl-4">#1 Blitz Rádio</div>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 overflow-hidden shadow-2xl bg-zinc-900 aspect-video relative group">
           <video autoPlay muted loop playsInline className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000">
              <source src="/assets/video2.mp4" type="video/mp4" />
           </video>
        </div>
      </section>

      <footer className="py-20 text-center bg-zinc-950 border-t border-white/5">
        <p className="text-zinc-600 text-xs uppercase tracking-widest mb-4">© 2026 Lovi do Brasil | Felipe Makarios</p>
        <div className="inline-block bg-white text-black px-12 py-4 rounded-full font-black hover:bg-orange-600 hover:text-white transition-all cursor-pointer">
           SOLICITAR ROADMAP EXECUTIVO
        </div>
      </footer>
    </div>
  );
}