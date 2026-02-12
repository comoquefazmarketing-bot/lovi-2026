"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Youtube, Instagram, Tv, Radio, Zap, BarChart3, ShieldCheck, Users, 
  Smartphone, Monitor, Laptop, Trophy, MapPin, FileText, CheckCircle2, TrendingUp
} from 'lucide-react';

export default function LoviMasterplan2026() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500 font-sans overflow-x-hidden">
      
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl border-b border-white/5 py-6 px-10 flex justify-between items-center">
        <img src="/assets/logolovi.png" alt="Lovi Logo" className="h-8 object-contain" />
        <div className="bg-orange-600 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest italic text-white">Apresentação Executiva</div>
      </nav>

      {/* HERO COM VÍDEO 1 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale contrast-125">
          <source src="/assets/video1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/60" />
        
        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center max-w-7xl px-10">
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
            <h1 className="text-6xl md:text-[7rem] font-black tracking-tighter leading-none italic uppercase">
              DOMÍNIO <br/> <span className="text-orange-500">B2G & ARENA</span>
            </h1>
            <p className="mt-6 text-zinc-400 uppercase tracking-widest font-bold">Lovi + ACR + Guttibulls</p>
          </motion.div>
          
          {/* FOTO JUNIOR GUTTIERRES */}
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative group">
             <div className="relative bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="/assets/junior guttierres.png" alt="Junior Guttierres" className="w-full grayscale group-hover:grayscale-0 transition-all duration-700" />
             </div>
          </motion.div>
        </div>
      </section>

      {/* LOGOS DOS PARCEIROS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-10 flex flex-wrap justify-center items-center gap-20 grayscale opacity-70">
           <img src="/assets/logo acr.png" alt="ACR" className="h-14 object-contain" />
           <img src="/assets/logoguttbulls.png" alt="GuttiBulls" className="h-14 object-contain" />
           <img src="/assets/logolovi.png" alt="Lovi" className="h-8 object-contain invert" />
        </div>
      </section>

      {/* GALERIA DINÂMICA (FOTOS 1-12) */}
      <section className="py-32 px-10 bg-black">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
           {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
             <div key={num} className="aspect-square bg-zinc-900 overflow-hidden group">
                <img 
                  src={/assets/foto.png} 
                  alt={Arena Lovi } 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
             </div>
           ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 text-center border-t border-white/5">
        <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.5em]">
          Felipe Makarios | Creator of Lovi App
        </p>
      </footer>
    </div>
  );
}