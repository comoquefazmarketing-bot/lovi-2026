"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Tv, Radio, Zap, BarChart3, ShieldCheck, Users, Smartphone, Monitor, Laptop } from 'lucide-react';

export default function PosicionamentoEstrategico2026() {
  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-orange-500 font-sans overflow-x-hidden">
      
      {/* NAV ESTRATÉGICA */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl border-b border-white/5 py-6 px-10 flex justify-between items-center">
        <div className="text-2xl font-black italic tracking-tighter text-orange-600 uppercase">LOVI STRATEGY</div>
        <div className="bg-orange-600 px-4 py-1 rounded-full text-[10px] font-bold uppercase italic tracking-widest">Felipe Makarios | 2026</div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale contrast-125">
          <source src="/assets/video1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#020202]" />
        <div className="relative z-10 text-center px-6">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-5xl md:text-[7rem] font-black tracking-tighter leading-none italic uppercase mb-6">
            POSICIONAMENTO <br/> <span className="text-orange-500 underline decoration-[8px] underline-offset-[12px]">ESTRATÉGICO 2026</span>
          </motion.h1>
          <p className="text-lg md:text-2xl text-zinc-500 uppercase tracking-[0.4em] font-light italic">Soberania Digital e Operacional</p>
        </div>
      </section>

      {/* SEÇÃO 01: MOCKUP SMARTPHONE (MARKETING DIGITAL) */}
      <section className="py-32 px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-orange-600 font-black uppercase tracking-widest text-sm">#01 Digital Dominance</span>
            <h2 className="text-6xl font-black uppercase italic leading-none">A Experiência do <br/> Consumidor.</h2>
            <p className="text-zinc-600 text-xl leading-relaxed italic border-l-4 border-orange-500 pl-6">"Não é sobre estar na internet, é sobre dominar a atenção onde ela mais importa: na palma da mão."</p>
          </div>
          
          {/* MOCKUP IPHONE REALISTA */}
          <div className="relative mx-auto w-[300px] h-[600px] bg-black rounded-[3rem] border-[12px] border-zinc-900 shadow-[0_50px_100px_rgba(0,0,0,0.4)] overflow-hidden">
             <div className="absolute top-0 w-full h-8 bg-zinc-900 z-10 flex justify-center"><div className="w-24 h-5 bg-black rounded-b-2xl"></div></div>
             <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source src="/assets/video2.mp4" type="video/mp4" />
             </video>
          </div>
        </div>
      </section>

      {/* SEÇÃO 02: MOCKUP MONITOR (OMNICHANNEL) */}
      <section className="py-32 px-10 bg-[#020202]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase italic mb-6">Ecossistema <span className="text-orange-500">360º</span></h2>
        </div>
        
        {/* MOCKUP MONITOR */}
        <div className="max-w-5xl mx-auto mb-20">
           <div className="relative p-2 bg-zinc-800 rounded-t-2xl shadow-2xl border border-white/10">
              <div className="bg-black aspect-video rounded-lg overflow-hidden relative">
                 <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-60">
                   <source src="/assets/video1.mp4" type="video/mp4" />
                 </video>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-orange-600/20 p-6 rounded-full border border-orange-600 animate-pulse">
                       <Tv size={60} className="text-orange-500" />
                    </div>
                 </div>
              </div>
           </div>
           <div className="w-full h-4 bg-zinc-900 rounded-b-2xl"></div>
           <div className="w-40 h-20 bg-zinc-900 mx-auto mt-1 rounded-b-3xl shadow-2xl flex items-center justify-center">
              <div className="w-16 h-1 bg-zinc-800"></div>
           </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center font-bold uppercase italic text-xs tracking-widest">
           <div className="p-4 border border-white/5 rounded-xl bg-zinc-900/30">#1 TV & Rádio</div>
           <div className="p-4 border border-white/5 rounded-xl bg-zinc-900/30 text-orange-500">#1 YouTube Ads</div>
           <div className="p-4 border border-white/5 rounded-xl bg-zinc-900/30">#1 Social Data</div>
        </div>
      </section>

      {/* SEÇÃO 03: CORPORATIVO & DASHBOARD */}
      <section className="py-32 px-10 bg-zinc-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-orange-600 font-black uppercase tracking-widest text-sm">#02 Robusteza Corporativa</span>
            <h2 className="text-6xl font-black uppercase italic leading-none">Backoffice <br/> & Comercial.</h2>
            <p className="text-zinc-400 text-xl leading-relaxed italic">Nosso time comercial e jurídico garante a viabilidade de grandes operações sob a Lei 14.133, unindo escala e segurança.</p>
          </div>
          
          {/* MOCKUP LAPTOP / DASHBOARD */}
          <div className="relative group p-1 bg-zinc-800 rounded-xl shadow-2xl border border-white/10">
             <div className="bg-[#050505] aspect-video rounded-lg flex flex-col p-6 overflow-hidden">
                <div className="flex justify-between items-center mb-8">
                   <div className="h-6 w-32 bg-zinc-800 rounded"></div>
                   <div className="flex gap-2"><div className="w-3 h-3 bg-red-500 rounded-full"></div><div className="w-3 h-3 bg-yellow-500 rounded-full"></div><div className="w-3 h-3 bg-green-500 rounded-full"></div></div>
                </div>
                <div className="flex gap-4 items-end h-full">
                   <div className="w-full bg-zinc-800 h-[40%] rounded-t-md animate-pulse"></div>
                   <div className="w-full bg-orange-600 h-[85%] rounded-t-md"></div>
                   <div className="w-full bg-zinc-800 h-[60%] rounded-t-md animate-pulse"></div>
                   <div className="w-full bg-orange-600 h-[95%] rounded-t-md"></div>
                   <div className="w-full bg-zinc-800 h-[50%] rounded-t-md animate-pulse"></div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                   <Laptop size={24} className="text-zinc-700" />
                   <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest italic">Performance Analytics v2026</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 text-center bg-black">
        <div className="inline-block bg-white text-black px-16 py-6 rounded-full font-black text-xl hover:bg-orange-600 hover:text-white transition-all cursor-pointer shadow-2xl">
           INICIAR TRANSFORMAÇÃO
        </div>
        <p className="mt-10 text-zinc-600 font-bold uppercase tracking-widest text-[10px] italic">© 2026 FELIPE MAKARIOS | LOVI DO BRASIL</p>
      </footer>
    </div>
  );
}