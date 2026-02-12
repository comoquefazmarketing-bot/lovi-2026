"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Trophy, Zap, Landmark, BarChart3, 
  CheckCircle, TrendingUp, Globe, Smartphone, Users
} from 'lucide-react';

export default function LoviStrategic2026() {
  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans selection:bg-orange-500 overflow-x-hidden">
      
      {/* HERO COM VÍDEO DE FUNDO */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-40 grayscale contrast-125">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover"
            >
               <source src="/assets/video3.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#020202]" />
         </div>

         <div className="relative z-10 text-center px-6">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="text-6xl md:text-[8rem] font-black italic tracking-tighter uppercase leading-[0.8] mb-12"
            >
               PLANEJAMENTO <br/> <span className="text-orange-500 text-outline-white">ESTRATÉGICO 2026</span>
            </motion.h1>
            
            {/* LOGOS COM EXTENSÕES CORRIGIDAS */}
            <div className="flex justify-center items-center gap-12 md:gap-20 grayscale opacity-60 hover:opacity-100 transition-all duration-700">
               <img src="/assets/logo lovi.jfif" className="h-10 md:h-12 object-contain invert" />
               <img src="/assets/logo acr.png" className="h-14 md:h-20 object-contain" />
               <img src="/assets/logo guttbulls.jfif" className="h-14 md:h-20 object-contain" />
            </div>
         </div>
      </section>

      {/* SEÇÃO B2G - COMPLIANCE E RESULTADO */}
      <section className="py-32 px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="bg-orange-600 text-white px-3 py-1 text-[10px] font-black uppercase italic tracking-widest">Institucional B2G</span>
            <h2 className="text-6xl font-black uppercase italic leading-none">O Futuro da <br/> <span className="text-orange-600">Gestão Pública.</span></h2>
            <p className="text-zinc-500 text-lg italic leading-relaxed">
               Entregamos o "Kit Prefeito 2026": conformidade total com a Lei 14.133 e relatórios de impacto social que protegem o gestor e encantam a população.
            </p>
            <div className="flex gap-4">
               <div className="flex items-center gap-2 font-black uppercase text-[10px] border-b-2 border-orange-600 pb-1">
                  <CheckCircle size={14} className="text-orange-600" /> Segurança Jurídica
               </div>
               <div className="flex items-center gap-2 font-black uppercase text-[10px] border-b-2 border-orange-600 pb-1">
                  <CheckCircle size={14} className="text-orange-600" /> ROI Transparente
               </div>
            </div>
          </div>
          <div className="bg-zinc-950 p-12 rounded-[2rem] text-white shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <BarChart3 size={120} />
             </div>
             <h4 className="text-orange-500 font-black uppercase tracking-widest text-xs mb-8 italic">Data-Driven Strategy</h4>
             <div className="space-y-8 relative z-10">
                <div className="space-y-2">
                   <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      <span>Eficiência Operacional</span>
                      <span>94%</span>
                   </div>
                   <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div initial={{width: 0}} whileInView={{width: '94%'}} className="h-full bg-orange-600"/>
                   </div>
                </div>
                <div className="space-y-2">
                   <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      <span>Engajamento Digital</span>
                      <span>88%</span>
                   </div>
                   <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div initial={{width: 0}} whileInView={{width: '88%'}} className="h-full bg-orange-600"/>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FOOTER CORPORATIVO */}
      <footer className="py-20 bg-black border-t border-white/5 text-center px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
           <div className="text-left">
              <p className="text-orange-500 font-black uppercase italic text-xl">Felipe Makarios</p>
              <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">Founder & CSO | Lovi Corporate</p>
           </div>
           <div className="flex gap-10 grayscale opacity-40">
              <img src="/assets/logo acr.png" className="h-8 object-contain" />
              <img src="/assets/logo guttbulls.jfif" className="h-8 object-contain" />
           </div>
           <div className="text-right text-zinc-700 text-[8px] font-black uppercase tracking-[0.4em]">
              © 2026 LOVI BRASIL - CONFIDENCIAL
           </div>
        </div>
      </footer>
    </div>
  );
}