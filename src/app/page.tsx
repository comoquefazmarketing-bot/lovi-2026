"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Tv, Radio, Newspaper, Users, Zap, ChevronRight } from 'lucide-react';

export default function MarketingShowcase2026() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500 overflow-x-hidden font-sans">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/10 py-6 px-10 flex justify-between items-center">
        <div className="text-3xl font-black italic tracking-tighter">LOVI<span className="text-orange-500 underline decoration-2">STRATEGY</span></div>
        <div className="bg-orange-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse font-bold">SOBERANIA 2026</div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="relative z-10 text-center px-6">
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-8">
            MARKETING <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">DOMINATION</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
            Não fazemos propaganda. Criamos <strong>Soberania Cultural</strong>. <br/> Estratégia assinada por Felipe Makarios.
          </p>
        </div>
      </section>

      <section className="py-32 bg-zinc-950 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div className="bg-zinc-900 rounded-xl border border-white/10 p-4 shadow-2xl">
                <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                   <video autoPlay muted loop className="w-full h-full object-cover opacity-60"><source src="/assets/video1.mp4" type="video/mp4" /></video>
                   <div className="absolute inset-0 flex items-center justify-center"><Youtube size={80} className="text-red-600" /></div>
                </div>
                <p className="mt-4 text-sm font-bold text-gray-400 uppercase text-center">YouTube & Google Ads Presence</p>
            </div>

            <div className="p-8 border-l-4 border-orange-500 bg-white/5">
                <h3 className="text-4xl font-black mb-6 uppercase italic">Ativação Omnichannel</h3>
                <p className="text-gray-400 mb-8">Nossa estratégia não é linear. Estamos onde o povo está: TV, Rádio, Jornal e no celular de cada influenciador relevante do país.</p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm font-bold"><Tv className="text-orange-500"/> TV PRIME TIME</div>
                    <div className="flex items-center gap-2 text-sm font-bold"><Radio className="text-orange-500"/> RÁDIO BLITZ</div>
                    <div className="flex items-center gap-2 text-sm font-bold"><Newspaper className="text-orange-500"/> PR NACIONAL</div>
                    <div className="flex items-center gap-2 text-sm font-bold"><Instagram className="text-orange-500"/> INFLUENCER SQUAD</div>
                </div>
            </div>
        </div>
      </section>

      <footer className="py-20 border-t border-white/10 px-6 text-center">
        <h2 className="text-5xl font-black italic mb-4 uppercase">Let's Scale</h2>
        <p className="text-gray-400 mb-10 text-xl font-bold">Felipe Makarios | Head de Marketing & Estratégia</p>
        <div className="inline-block bg-white text-black px-12 py-5 rounded-full font-black text-lg">AGENDAR BRIEFING</div>
      </footer>
    </div>
  );
}