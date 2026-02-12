"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Tv, Radio, Zap, Play, BarChart3, Globe, ShieldCheck, Cpu } from 'lucide-react';

export default function PosicionamentoEstrategico2026() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500 font-sans overflow-x-hidden">
      
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl border-b border-white/5 py-6 px-10 flex justify-between items-center">
        <div className="text-2xl font-black italic tracking-tighter text-orange-600">LOVI <span className="text-white">STRATEGY</span></div>
        <div className="bg-orange-600 px-4 py-1 rounded-full text-[10px] font-bold uppercase italic">Felipe Makarios | Creator</div>
      </nav>

      {/* HERO: NOVO TÍTULO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale contrast-125">
          <source src="/assets/video1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-none italic uppercase">
              POSICIONAMENTO <br/> <span className="text-orange-500 underline decoration-[10px] underline-offset-[15px]">ESTRATÉGICO 2026</span>
            </h1>
            <p className="text-xl md:text-2xl mt-12 text-zinc-400 uppercase tracking-[0.5em] font-light italic">Soberania Operacional, Digital e Comercial</p>
          </motion.div>
        </div>
      </section>

      {/* TÓPICOS DE ALTO IMPACTO */}
      <section className="py-32 px-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {/* BI & DADOS */}
           <motion.div whileHover={{ y: -10 }} className="p-8 border border-white/10 rounded-3xl bg-zinc-950 group hover:border-orange-600 transition-all">
              <BarChart3 className="text-orange-500 mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4 uppercase italic">BI & Inteligência</h3>
              <p className="text-zinc-500 text-sm">Decisões baseadas em dados em tempo real. Transformamos métricas em lucro e previsibilidade.</p>
           </motion.div>

           {/* ECOSSISTEMA TUM DUM */}
           <motion.div whileHover={{ y: -10 }} className="p-8 border border-white/10 rounded-3xl bg-zinc-950 group hover:border-orange-600 transition-all">
              <Cpu className="text-orange-500 mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4 uppercase italic">Tum Dum Digital</h3>
              <p className="text-zinc-500 text-sm">Onde a marca ganha vida. Nossa tecnologia própria para engajamento e conversão em massa.</p>
           </motion.div>

           {/* EXPANSÃO B2G */}
           <motion.div whileHover={{ y: -10 }} className="p-8 border border-white/10 rounded-3xl bg-zinc-950 group hover:border-orange-600 transition-all">
              <Globe className="text-orange-500 mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4 uppercase italic">Expansão B2G</h3>
              <p className="text-zinc-500 text-sm">Abertura de novos mercados governamentais com compliance e escala nacional.</p>
           </motion.div>

           {/* COMPLIANCE 14.133 */}
           <motion.div whileHover={{ y: -10 }} className="p-8 border border-white/10 rounded-3xl bg-zinc-950 group hover:border-orange-600 transition-all">
              <ShieldCheck className="text-orange-500 mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4 uppercase italic">Soberania Jurídica</h3>
              <p className="text-zinc-500 text-sm">Segurança total em contratos complexos sob a nova lei de licitações.</p>
           </motion.div>
        </div>
      </section>

      {/* SEÇÃO VÍDEO 2 - IMPACTO OPERACIONAL */}
      <section className="py-20 bg-zinc-950 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center px-10">
           <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-orange-600">
              <video autoPlay muted loop playsInline className="w-full aspect-[4/3] object-cover">
                <source src="/assets/video2.mp4" type="video/mp4" />
              </video>
           </div>
           <div className="space-y-8 italic">
              <h2 className="text-6xl font-black uppercase leading-none">O Futuro <br/> <span className="text-orange-500">é agora.</span></h2>
              <p className="text-zinc-400 text-xl leading-relaxed">"Estamos construindo mais que uma empresa, estamos formatando um novo padrão de entrega para o Brasil."</p>
              <div className="flex gap-4">
                 <Youtube className="text-zinc-600 hover:text-white cursor-pointer"/> <Instagram className="text-zinc-600 hover:text-white cursor-pointer"/> <Tv className="text-zinc-600 hover:text-white cursor-pointer"/>
              </div>
           </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <footer className="py-32 text-center">
        <h2 className="text-5xl font-black italic mb-10">VAMOS EXECUTAR?</h2>
        <div className="inline-block bg-orange-600 text-white px-20 py-6 rounded-full font-black text-2xl hover:scale-110 transition-transform cursor-pointer shadow-[0_0_50px_rgba(234,88,12,0.4)]">
           INICIAR TRANSFORMAÇÃO
        </div>
        <p className="mt-10 text-zinc-500 font-bold uppercase tracking-widest text-xs italic">Felipe Makarios | Posicionamento Estratégico 2026</p>
      </footer>
    </div>
  );
}