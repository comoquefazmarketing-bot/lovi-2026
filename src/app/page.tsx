"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Users, Zap, ChevronRight, Mail } from 'lucide-react';

export default function Lovi360LandingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-orange-500 overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
      </div>

      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 py-4 px-8 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter italic">LOVI<span className="text-orange-500">2026</span></div>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
          <span>Estratégia</span><span>Estrutura</span><span>Calculadora de Churrasco</span>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-6 z-10 text-center">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-4 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-xs font-bold uppercase mb-6 inline-block">Soberania Operacional</motion.span>
        <motion.h1 initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">PLANEJAMENTO <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">360 GRADOS</span></motion.h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Desenvolvido por Felipe Makarios.</p>
      </section>

      <section className="py-10 px-6 z-10 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-video">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover"><source src="/assets/video1.mp4" type="video/mp4" /></video>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-video">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover"><source src="/assets/video2.mp4" type="video/mp4" /></video>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 z-10 relative max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-white/5 border border-white/10 group hover:border-orange-500/50 transition-all">
            <Zap className="text-orange-500 mb-6" size={40} />
            <h4 className="text-xl font-bold mb-4">Comercial & Growth</h4>
            <ul className="text-sm text-gray-400 space-y-2"><li>• Head de Expansão B2G</li><li>• Gestor de Contratos</li><li>• SDR Estratégico</li></ul>
          </motion.div>
          <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-white/5 border border-white/10 group hover:border-orange-500/50 transition-all">
            <Shield className="text-orange-500 mb-6" size={40} />
            <h4 className="text-xl font-bold mb-4">Backoffice</h4>
            <ul className="text-sm text-gray-400 space-y-2"><li>• Controller Financeiro</li><li>• Jurídico Especializado</li><li>• RH & Cultura</li></ul>
          </motion.div>
          <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-white/5 border border-white/10 group hover:border-orange-500/50 transition-all">
            <Users className="text-orange-500 mb-6" size={40} />
            <h4 className="text-xl font-bold mb-4">Tecnologia</h4>
            <ul className="text-sm text-gray-400 space-y-2"><li>• Fullstack Developer</li><li>• Analista BI</li><li>• Especialista Tum Dum</li></ul>
          </motion.div>
        </motion.div>
      </section>

      <footer className="py-20 border-t border-white/5 px-6 text-center">
        <h5 className="text-2xl font-bold italic">FELIPE MAKARIOS</h5>
        <p className="text-orange-500 mt-2">felipe@lovidobrasil.com.br</p>
      </footer>
    </div>
  );
}
