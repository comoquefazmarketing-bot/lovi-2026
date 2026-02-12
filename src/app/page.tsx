"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Tv, Radio, Zap, Play, Smartphone } from 'lucide-react';

export default function MarketingDomination2026() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500 font-sans overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl border-b border-white/5 py-6 px-10 flex justify-between items-center">
        <div className="text-3xl font-black italic tracking-tighter text-orange-600 underline decoration-white decoration-2">LOVI 2026</div>
        <div className="bg-orange-600 px-4 py-1 rounded-full text-[10px] font-bold uppercase animate-bounce">Felipe Makarios | Strategy</div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-[3s]">
          <source src="/assets/video1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="relative z-10 text-center px-6">
          <motion.h1 initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-7xl md:text-[11rem] font-black tracking-tighter leading-none italic uppercase">
            MARKETING <br/> <span className="text-orange-500 underline decoration-8">DOMINATION</span>
          </motion.h1>
          <p className="text-xl mt-6 text-zinc-400 uppercase tracking-[0.5em] font-light">Soberania Operacional e Digital</p>
        </div>
      </section>

      <section className="py-24 px-10 max-w-7xl mx-auto text-center">
        <h2 className="text-6xl font-black uppercase italic mb-16">Onde a Coragem <span className="text-orange-500">Vira Escala</span></h2>
        <div className="grid md:grid-cols-2 gap-10">
           <div className="rounded-[2rem] overflow-hidden border border-white/10 aspect-video shadow-2xl">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source src="/assets/video2.mp4" type="video/mp4" />
              </video>
           </div>
           <div className="text-left space-y-6 flex flex-col justify-center italic">
              <p className="text-2xl font-bold leading-tight">"Não entregamos apenas publicidade. Entregamos o domínio de todos os pontos de contato: TV, Rádio, YouTube e Influenciadores."</p>
              <div className="h-1 w-20 bg-orange-600"></div>
              <p className="text-zinc-500 uppercase tracking-widest text-sm font-black">Felipe Makarios - Head de Marketing</p>
           </div>
        </div>
      </section>

      <footer className="py-10 text-center bg-zinc-950 border-t border-white/5">
        <div className="inline-block bg-white text-black px-12 py-4 rounded-full font-black hover:bg-orange-600 hover:text-white transition-all cursor-pointer">
           REUNIÃO EXECUTIVA LOVI 2026
        </div>
      </footer>
    </div>
  );
}