"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Tv, Radio, Zap, Play } from 'lucide-react';

export default function LoviMarketing2026() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500 font-sans overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/5 py-6 px-10 flex justify-between items-center">
        <div className="text-3xl font-black italic tracking-tighter text-orange-600">LOVI 2026</div>
        <div className="bg-orange-600 px-4 py-1 rounded-full text-[10px] font-bold uppercase animate-pulse italic">Felipe Makarios | Strategy</div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-[3s]">
          <source src="/assets/video1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="relative z-10 text-center px-6">
          <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-7xl md:text-[11rem] font-black tracking-tighter leading-none italic">
            MARKETING <br/> <span className="text-orange-500 underline decoration-8">DOMINATION</span>
          </motion.h1>
          <p className="text-xl mt-6 text-zinc-400 uppercase tracking-[0.5em] font-light">Soberania Operacional e Digital</p>
        </div>
      </section>

      <section className="py-32 px-10 max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-black uppercase italic mb-12">Ativação <span className="text-orange-500">Omnichannel</span></h2>
        <div className="grid md:grid-cols-4 gap-8">
           <div className="p-6 border border-white/10 rounded-2xl hover:bg-orange-600 transition-all group">
              <Youtube className="mx-auto mb-4" size={40}/> <h3 className="font-bold">YOUTUBE ADS</h3>
           </div>
           <div className="p-6 border border-white/10 rounded-2xl hover:bg-orange-600 transition-all group">
              <Tv className="mx-auto mb-4" size={40}/> <h3 className="font-bold">TV PRIME</h3>
           </div>
           <div className="p-6 border border-white/10 rounded-2xl hover:bg-orange-600 transition-all group">
              <Instagram className="mx-auto mb-4" size={40}/> <h3 className="font-bold">SOCIAL SQUAD</h3>
           </div>
           <div className="p-6 border border-white/10 rounded-2xl hover:bg-orange-600 transition-all group">
              <Radio className="mx-auto mb-4" size={40}/> <h3 className="font-bold">BLITZ RÁDIO</h3>
           </div>
        </div>
      </section>

      <footer className="py-20 text-center bg-zinc-950 border-t border-white/5">
        <div className="inline-block bg-white text-black px-12 py-4 rounded-full font-black hover:bg-orange-600 hover:text-white transition-all cursor-pointer">
           REUNIÃO EXECUTIVA LOVI 2026
        </div>
      </footer>
    </div>
  );
}