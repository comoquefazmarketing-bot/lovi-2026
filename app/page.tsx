"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Trophy, Zap, Mic2, Youtube, BarChart3, Map, 
  CheckCircle2, Globe, Laptop, PlayCircle, RadioTower, 
  Target, Truck, Leaf, Layout, ArrowRight
} from 'lucide-react';

export default function LoviCompleteMasterplan() {
  return (
    <div className="bg-[#020202] text-white font-sans selection:bg-orange-500 overflow-x-hidden">
      
      {/* 01. HERO - MANIFESTO VISUAL */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover opacity-40 grayscale contrast-125">
          <source src="/assets/video3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-black/70" />
        <div className="relative z-10 text-center px-6">
          <motion.h1 initial={{y:50, opacity:0}} animate={{y:0, opacity:1}} className="text-6xl md:text-[9rem] font-black italic tracking-tighter leading-[0.8] mb-12">
            LOVI 2026 <br/><span className="text-orange-500">ECOSSISTEMA.</span>
          </motion.h1>
          <div className="flex justify-center gap-12 grayscale opacity-60">
             <img src="/assets/logo lovi.jfif" className="h-10 invert" />
             <img src="/assets/logo acr.png" className="h-20" />
             <img src="/assets/logo guttbulls.jfif" className="h-20" />
          </div>
        </div>
      </section>

      {/* 02. B2G: GOVERNANÇA (FOTO 23) */}
      <section className="py-32 px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-6xl font-black uppercase italic leading-none">01. Segurança <br/><span className="text-orange-600 underline">Jurídica.</span></h2>
            <div className="space-y-6">
              {['Adequação Lei 14.133', 'Blindagem de CPF do Gestor', 'Matriz de Riscos Operacionais', 'Transparência de Gastos', 'Compliance Anti-Corrupção'].map((t, i) => (
                <div key={i} className="flex gap-4 items-center border-l-4 border-zinc-200 pl-6 py-2 hover:border-orange-600 transition-all">
                  <CheckCircle2 className="text-orange-600" size={24} />
                  <h4 className="font-black uppercase text-sm">{t}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src="/assets/foto23.jpg" className="rounded-[3rem] shadow-3xl grayscale hover:grayscale-0 transition-all duration-700" />
            <div className="absolute -bottom-10 -right-10 bg-zinc-900 text-white p-10 rounded-3xl shadow-2xl">
              <ShieldCheck size={40} className="text-orange-500 mb-4" />
              <p className="text-xs font-black uppercase tracking-widest leading-relaxed">Protocolo de <br/>Segurança B2G</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03. ACR: ELITE TÉCNICA (VIDEO 4) */}
      <section className="py-32 px-10 bg-zinc-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1 rounded-[3rem] overflow-hidden border border-white/5 aspect-video shadow-2xl">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000">
              <source src="/assets/video4.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="text-6xl font-black uppercase italic leading-none text-orange-500">02. Elite <br/>Técnica.</h2>
            <p className="text-zinc-500 text-lg italic">A ACR traz os 30 maiores competidores do país. Performance garantida sob normas internacionais de desporto.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-zinc-900 rounded-2xl border border-white/5 font-black text-[10px] uppercase">Ranking Oficial</div>
              <div className="p-6 bg-zinc-900 rounded-2xl border border-white/5 font-black text-[10px] uppercase">Notas Digitais</div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. GUTT BULLS: GENÉTICA (FOTO 26) */}
      <section className="py-32 px-10 bg-[#020202]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-6xl font-black uppercase italic leading-none">03. Genética <br/><span className="text-orange-500 italic">Premium.</span></h2>
            <ul className="space-y-4">
              {['Plantel de Sangue Azul', 'Bem-estar Animal Certificado', 'Manejo Veterinário 24h', 'Dieta de Performance', 'Genética Premiada'].map((t, i) => (
                <li key={i} className="text-zinc-400 font-bold uppercase text-xs flex items-center gap-2"><Zap size={14} className="text-orange-500"/> {t}</li>
              ))}
            </ul>
          </div>
          <div className="relative group overflow-hidden rounded-[3rem]">
            <img src="/assets/foto26.jpg" className="w-full grayscale group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-orange-600/20 group-hover:bg-transparent transition-colors" />
          </div>
        </div>
      </section>

      {/* 05. MARI VIDAL: LIFESTYLE (VIDEO MARI) */}
      <section className="py-32 px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/3 rounded-[3rem] overflow-hidden shadow-3xl">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src="/assets/mari vidal.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="text-6xl font-black uppercase italic leading-none">04. Humanização <br/>& <span className="text-orange-600">Influência.</span></h2>
            <p className="text-zinc-500 italic">Mari Vidal e embaixadores: a ponte emocional entre a arena e as marcas multinacionais. Criamos desejo e lifestyle.</p>
            <div className="flex gap-8 border-t border-zinc-100 pt-8">
              <div><p className="text-3xl font-black italic">10M+</p><p className="text-[8px] uppercase font-black text-zinc-400">Alcance Digital</p></div>
              <div><p className="text-3xl font-black italic">98%</p><p className="text-[8px] uppercase font-black text-zinc-400">Sentimento Positivo</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* 06. TUM DUM: DADOS (FOTO 16) */}
      <section className="py-32 px-10 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-6xl font-black uppercase italic leading-none text-orange-500">05. Inteligência <br/>de Dados.</h2>
            <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest">Tecnologia Tum Dum: Sabemos quem está na arena.</p>
            <div className="space-y-4">
              {['Heatmaps de Circulação', 'Análise de Sentimento Real-Time', 'Captura de Leads Qualificados', 'ROI de Patrocínio Mensurável'].map((t, i) => (
                <div key={i} className="flex items-center gap-3 text-xs font-black uppercase"><ArrowRight size={14} className="text-orange-600"/> {t}</div>
              ))}
            </div>
          </div>
          <div className="p-4 bg-zinc-900 rounded-[3rem] border border-white/10 relative overflow-hidden group">
            <img src="/assets/foto16.jpg" className="w-full opacity-40 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><Activity className="text-orange-600 animate-pulse" size={80} /></div>
          </div>
        </div>
      </section>

      {/* 07. MÍDIA: PODCAST & LIVE (FOTO 17) */}
      <section className="py-32 px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1 space-y-8">
            <h2 className="text-6xl font-black uppercase italic leading-none">06. Mídia <br/><span className="text-orange-600 underline">Omnichannel.</span></h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-8 bg-zinc-50 rounded-3xl"><Mic2 className="text-orange-600 mb-4" /><h4 className="font-black uppercase italic">Podcast Lovi Strategy</h4><p className="text-[10px] text-zinc-500 font-bold uppercase">Networking B2G e cortes virais para prefeituras.</p></div>
              <div className="p-8 bg-zinc-900 text-white rounded-3xl"><Youtube className="text-orange-500 mb-4" /><h4 className="font-black uppercase italic">Live YouTube 4K</h4><p className="text-[10px] text-zinc-400 font-bold uppercase">Transmissão cinematográfica para o mundo.</p></div>
            </div>
          </div>
          <div className="flex-1"><img src="/assets/foto17.jpg" className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all" /></div>
        </div>
      </section>

      {/* 08. CITY TAKEOVER (FOTO 27) */}
      <section className="py-32 px-10 bg-[#020202]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative p-10 bg-zinc-900 rounded-[4rem] border border-white/5 overflow-hidden">
             <img src="/assets/foto27.jpg" className="absolute inset-0 w-full h-full object-cover opacity-20" />
             <div className="relative z-10 space-y-4">
                <Map className="text-orange-500" size={40} />
                <h3 className="text-3xl font-black italic uppercase">Ocupação 360°</h3>
                <p className="text-xs font-bold text-zinc-400 leading-relaxed uppercase italic">Ativação de comércio, escolas e turismo. A cidade respira o evento por 30 dias.</p>
             </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-6xl font-black uppercase italic leading-none text-orange-500 text-outline-white">07. City <br/>Takeover.</h2>
            <p className="text-zinc-500 italic">Não fazemos apenas um rodeio. Fazemos uma intervenção urbana que gera economia circular e orgulho municipal.</p>
          </div>
        </div>
      </section>

      {/* 09. OPERAÇÃO & ESG (VIDEO 5) */}
      <section className="py-32 px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-6xl font-black uppercase italic leading-none">08. Legado <br/><span className="text-orange-600 underline">ESG.</span></h2>
            <div className="space-y-6">
              {['Gestão de Resíduos Zero', 'Inclusão de Entidades Assistenciais', 'Valorização da Tradição Local', 'Segurança Patrimonial Integrada'].map((t, i) => (
                <div key={i} className="flex items-center gap-3 font-black uppercase text-xs italic"><Leaf className="text-green-600" size={16}/> {t}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-3xl aspect-video border-8 border-zinc-100">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src="/assets/video5.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* 10. FECHAMENTO: FELIPE MAKARIOS */}
      <footer className="py-40 bg-black text-center border-t border-white/5 px-10">
        <img src="/assets/logo lovi.jfif" className="h-12 mx-auto mb-16 invert opacity-40" />
        <h2 className="text-5xl font-black italic uppercase mb-12">Vamos transformar o seu <br/><span className="text-orange-500">Município em 2026?</span></h2>
        <div className="max-w-xl mx-auto p-12 bg-zinc-950 rounded-[3rem] border border-white/5 space-y-6 shadow-2xl">
           <p className="text-orange-500 font-black italic text-3xl">FELIPE MAKARIOS</p>
           <p className="text-zinc-600 font-bold uppercase text-[10px] tracking-[0.4em]">Founder & Strategy Master</p>
           <div className="pt-6"><button className="px-10 py-5 bg-orange-600 rounded-full font-black italic uppercase text-sm hover:scale-110 transition-transform">Agendar Board Meeting</button></div>
        </div>
      </footer>

    </div>
  );
}