"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Tv, Radio, MessageSquare, Users, Zap, Play, Monitor, Smartphone } from 'lucide-react';

export default function LoviMarketing2026() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500 overflow-x-hidden font-sans">
      
      {/* BARRA DE NAVEGAÇÃO ULTRA-CLEAN */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl border-b border-white/5 py-6 px-10 flex justify-between items-center">
        <div className="text-3xl font-black italic tracking-tighter">LOVI<span className="text-orange-600 underline decoration-4 underline-offset-8">2026</span></div>
        <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
          <span className="hover:text-white transition-colors cursor-pointer">Soberania Digital</span>
          <span className="hover:text-white transition-colors cursor-pointer">Omnichannel</span>
          <span className="hover:text-white transition-colors cursor-pointer">Cálculo de Churrasco</span>
        </div>
      </nav>

      {/* HERO: ONDE A CORAGEM ENCONTRA A ESTRATÉGIA */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale">
          <source src="/assets/video1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <h1 className="text-7xl md:text-[12rem] font-black tracking-tighter leading-none mb-4 italic">
              MARKETING <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">SEM FRONTEIRAS</span>
            </h1>
            <p className="text-xl md:text-3xl font-light tracking-widest text-zinc-400 uppercase">A Revolução de Felipe Makarios</p>
          </motion.div>
        </div>
      </section>

      {/* SESSÃO DISRUPTIVA: MOCKUPS E MÍDIA */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          
          {/* LADO A: O PODER DA IMAGEM (VÍDEO 2) */}
          <motion.div whileHover={{ scale: 1.02 }} className="relative group rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,100,0,0.1)]">
            <video autoPlay muted loop playsInline className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-[2s]">
              <source src="/assets/video2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <Play size={80} className="text-orange-500" />
            </div>
          </motion.div>

          {/* LADO B: ESTRATÉGIA OMNICHANNEL */}
          <div className="space-y-12">
            <h2 className="text-5xl font-black uppercase italic leading-tight">Onipresença <br/> <span className="text-orange-500">360 Graus</span></h2>
            <p className="text-zinc-400 text-lg leading-relaxed">Não é apenas propaganda. É dominar o ecossistema. Da TV ao TikTok, do Rádio ao YouTube. Criamos uma máquina de desejo que posiciona a LOVI como autoridade máxima.</p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-orange-500 font-bold uppercase tracking-widest text-sm"><Youtube/> YouTube Ads</div>
                <div className="h-1 w-full bg-zinc-800 rounded-full"><div className="h-full w-full bg-orange-600"></div></div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-orange-500 font-bold uppercase tracking-widest text-sm"><Tv/> TV & Rádio</div>
                <div className="h-1 w-full bg-zinc-800 rounded-full"><div className="h-full w-[85%] bg-orange-600"></div></div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-orange-500 font-bold uppercase tracking-widest text-sm"><Users/> Influenciadores</div>
                <div className="h-1 w-full bg-zinc-800 rounded-full"><div className="h-full w-[90%] bg-orange-600"></div></div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-orange-500 font-bold uppercase tracking-widest text-sm"><MessageSquare/> PR & Jornal</div>
                <div className="h-1 w-full bg-zinc-800 rounded-full"><div className="h-full w-[70%] bg-orange-600"></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER: CONTATO EXECUTIVO */}
      <footer className="py-20 border-t border-white/5 bg-zinc-950 px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-left">
            <h4 className="text-3xl font-black italic mb-2">FELIPE MAKARIOS</h4>
            <p className="text-orange-600 font-bold uppercase tracking-widest text-xs">Head de Estratégia & Marketing</p>
          </div>
          <div className="bg-white text-black px-10 py-4 rounded-full font-black hover:bg-orange-600 hover:text-white transition-all cursor-pointer">
            SOLICITAR BRIEFING EXECUTIVO
          </div>
        </div>
        <div className="mt-10 text-[10px] text-zinc-600 uppercase tracking-widest text-center">
          © 2026 LOVI DO BRASIL. SOBERANIA OPERACIONAL E DIGITAL.
        </div>
      </footer>
    </div>
  );
}