"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Trophy, Zap, Star, Target, Users, BarChart3, Landmark, 
  Play, Tv, Smartphone, RadioTower, GraduationCap, Store, Share2, Youtube,
  TrendingUp, CheckCircle, Heart, Camera, Megaphone, Globe, Layers, Eye
} from 'lucide-react';

export default function LoviUltraStrategy() {
  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans selection:bg-orange-500 overflow-x-hidden">
      
      {/* 1. HERO - A ALIANÇA DE PODER */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
         <div className="absolute inset-0 opacity-20 grayscale">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
               <source src="/assets/video3.mp4" type="video/mp4" />
            </video>
         </div>
         <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#020202]" />
         
         <div className="relative z-10 text-center px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-[7.5rem] font-black italic tracking-tighter uppercase leading-[0.8] mb-12"
            >
              LOVI <span className="text-orange-500">+</span> MARI VIDAL <br/> <span className="text-orange-500 text-outline-white">ESTRATÉGIA 2026</span>
            </motion.h1>
            
            <div className="flex justify-center items-center gap-12 md:gap-20 grayscale opacity-40 hover:opacity-100 transition-all duration-700">
               <img src="/assets/logo lovi.png" className="h-8 invert" />
               <img src="/assets/logo acr.png" className="h-16" />
               <img src="/assets/logo guttbulls.png" className="h-16" />
            </div>
         </div>
      </section>

      {/* 2. O ROSTO DA MARCA: MARI VIDAL & HUMANIZAÇÃO */}
      <section className="py-32 px-10 bg-white text-black relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="absolute -inset-4 bg-orange-600/10 blur-3xl rounded-full"></div>
             <img src="/assets/mari vidal.png" className="relative z-10 rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" />
             <div className="absolute bottom-6 right-6 z-20 bg-orange-600 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-xs font-black uppercase italic">Embaixadora Oficial</p>
                <h4 className="text-2xl font-black">MARI VIDAL</h4>
             </div>
          </div>
          <div className="space-y-8">
            <span className="text-orange-600 font-black uppercase tracking-widest text-xs">Pilar: Conexão Emocional</span>
            <h2 className="text-6xl font-black uppercase italic leading-none">A Face da <br/> <span className="text-orange-600 underline">Confiança.</span></h2>
            <p className="text-zinc-600 text-xl italic leading-relaxed font-medium">
              A parceria com a Mari Vidal representa a transição da Lovi de uma "empresa de eventos" para uma "marca de estilo de vida". 
            </p>
            <div className="grid grid-cols-1 gap-6">
               {[
                 { i: <Heart className="text-orange-600"/>, t: "Engajamento Orgânico", d: "Público fiel que converte em presença física e audiência digital." },
                 { i: <Camera className="text-orange-600"/>, t: "Curadoria de Conteúdo", d: "Mari traz o olhar 'Lifestyle', tornando o rodeio atraente para marcas multinacionais." },
                 { i: <Users className="text-orange-600"/>, t: "Ponte com as Famílias", d: "Humaniza a arena, tornando-a um ambiente acolhedor para todos os públicos." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 items-start p-4 bg-zinc-50 rounded-xl">
                    {item.i}
                    <div>
                       <h5 className="font-black uppercase text-sm">{item.t}</h5>
                       <p className="text-xs text-zinc-500 uppercase">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. ESTRATÉGIA DIGITAL: TUM DUM & PODCAST */}
      <section className="py-32 px-10 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
             <div>
                <h2 className="text-7xl font-black uppercase italic leading-none">Domínio <br/> <span className="text-orange-500 italic">Digital 360°</span></h2>
             </div>
             <p className="max-w-md text-zinc-500 text-sm uppercase font-bold italic border-l-2 border-orange-600 pl-6">
                Nossa tecnologia própria "Tum Dum Digital" monitora cada interação, transformando likes em votos e engajamento em lucro.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 bg-zinc-900 rounded-3xl border border-white/5 space-y-6">
               <Youtube className="text-orange-500" size={40} />
               <h3 className="text-2xl font-black uppercase italic">Podcast Lovi</h3>
               <p className="text-xs text-zinc-400 leading-relaxed uppercase">O "Bastidores da Arena" é nossa arma de influência B2G. Entrevistas com prefeitos e empresários do Agro que consolidam nossa autoridade regional.</p>
            </div>
            <div className="p-10 bg-orange-600 rounded-3xl space-y-6 shadow-[0_0_50px_rgba(234,88,12,0.3)]">
               <TrendingUp className="text-white" size={40} />
               <h3 className="text-2xl font-black uppercase italic">Tum Dum Digital</h3>
               <p className="text-xs text-orange-100 leading-relaxed uppercase font-bold">Monitoramento de sentimentos em tempo real. Sabemos o que o público quer antes mesmo da primeira montaria.</p>
            </div>
            <div className="p-10 bg-zinc-900 rounded-3xl border border-white/5 space-y-6">
               <Share2 className="text-orange-500" size={40} />
               <h3 className="text-2xl font-black uppercase italic">Virais Cinematográficos</h3>
               <p className="text-xs text-zinc-400 leading-relaxed uppercase">Equipe dedicada em 4K para Reels e TikTok. Transformamos cada montaria ACR em um momento épico digno de Hollywood.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ESTRATÉGIA FÍSICA: CITY TAKEOVER (SUBDIVIDIDA) */}
      <section className="py-32 px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
             <div className="space-y-6">
                <span className="bg-black text-white px-3 py-1 text-[10px] font-black uppercase italic">Operação de Campo</span>
                <h2 className="text-6xl font-black uppercase italic leading-none">City Takeover: <br/> A Ocupação.</h2>
                <p className="text-zinc-500 text-lg italic">Não apenas montamos uma arena. Nós ocupamos a mente do cidadão 30 dias antes do evento.</p>
             </div>
             <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden"><img src="/assets/foto24.png" className="w-full h-full object-cover grayscale" /></div>
                <div className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden"><img src="/assets/foto25.png" className="w-full h-full object-cover grayscale" /></div>
             </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
             {[
               { icon: <Megaphone />, t: "Blitz Mobile", d: "Unidades móveis Lovi em pontos estratégicos da cidade." },
               { icon: <GraduationCap />, t: "Ação Social", d: "Palestras e ingressos solidários nas escolas municipais." },
               { icon: <Store />, t: "PDVs Parceiros", d: "Ativação direta no comércio local, gerando receita imediata." },
               { icon: <Globe />, t: "Mídia Off-line", d: "Outdoor, Rádio e TV local com o rosto da Mari Vidal." }
             ].map((box, i) => (
               <div key={i} className="p-8 border-2 border-zinc-100 rounded-2xl hover:border-orange-600 transition-colors group">
                  <div className="text-orange-600 mb-6 group-hover:scale-110 transition-transform">{box.icon}</div>
                  <h4 className="font-black uppercase text-sm mb-2">{box.t}</h4>
                  <p className="text-[10px] text-zinc-500 uppercase font-bold">{box.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. BACKOFFICE: SOBERANIA JURÍDICA & B2G */}
      <section className="py-32 px-10 bg-[#050505]">
         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div className="relative p-2 bg-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
               <div className="bg-zinc-100 aspect-video rounded-xl p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                     <img src="/assets/logo lovi.png" className="h-6 invert opacity-50" />
                     <div className="bg-orange-600/10 p-2 rounded-lg"><ShieldCheck className="text-orange-600" /></div>
                  </div>
                  <div>
                     <p className="text-[10px] font-black uppercase text-zinc-400 mb-1">Compliance Corporativo</p>
                     <p className="text-2xl font-black text-black uppercase italic">Kit Prefeito 2026</p>
                  </div>
                  <div className="space-y-2">
                     <div className="h-1 w-full bg-zinc-200 rounded-full"><div className="h-full w-full bg-orange-600 rounded-full"></div></div>
                     <p className="text-[8px] font-bold text-zinc-500 uppercase">100% de Aprovação Técnica em Auditorias TCE</p>
                  </div>
               </div>
            </div>
            
            <div className="space-y-8 text-right">
               <h2 className="text-5xl font-black uppercase italic leading-none">A Prova de <br/> <span className="text-orange-500 italic italic">Qualquer Risco.</span></h2>
               <p className="text-zinc-500 text-lg leading-relaxed italic">
                  Nosso departamento jurídico garante que cada contrato sob a **Lei 14.133** seja impecável. Tiramos o peso da responsabilidade do prefeito e entregamos o projeto pronto.
               </p>
               <ul className="space-y-4 inline-block text-right">
                  {["Dossiê de Impacto Econômico", "Relatório de Transparência", "Suporte Jurídico 24/7"].map((li, i) => (
                    <li key={i} className="flex items-center gap-3 justify-end text-sm font-black uppercase italic text-zinc-300">
                       {li} <CheckCircle size={16} className="text-orange-600" />
                    </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>

      {/* FOOTER CORPORATIVO */}
      <footer className="py-20 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-10">
           <div className="text-left">
              <p className="text-orange-500 font-black uppercase italic text-xl">Felipe Makarios</p>
              <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">Founder & Creator | Lovi Corporate</p>
           </div>
           <div className="flex gap-8 items-center grayscale opacity-40">
              <img src="/assets/logo acr.png" className="h-10 object-contain" />
              <img src="/assets/logo guttbulls.png" className="h-10 object-contain" />
           </div>
        </div>
      </footer>
    </div>
  );
}