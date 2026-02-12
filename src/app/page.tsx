"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Trophy, Zap, Mic2, Youtube, BarChart3, Map, 
  CheckCircle2, Globe, Laptop, PlayCircle, RadioTower, 
  Target, Truck, Leaf, Layout, ArrowRight, Activity, Users, Star 
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
            LOVI 2026 <br/><span className="text-orange-500 text-outline-white">ECOSSISTEMA.</span>
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
            <p className="text-zinc-500 text-lg font-bold italic">Blindagem total sob a Lei 14.133. Não vendemos apenas eventos, entregamos conformidade e proteção ao CPF do gestor público.</p>
            <div className="grid grid-cols-1 gap-4">
              {[
                {t: 'Adequação Técnica 14.133', d: 'Contratos estruturados na nova lei de licitações.'},
                {t: 'Matriz de Risco', d: 'Mapeamento preventivo de responsabilidades civis.'},
                {t: 'Compliance B2G', d: 'Transparência total para o Tribunal de Contas.'},
                {t: 'Segurança Patrimonial', d: 'Engenharia de montagem com certificação técnica.'},
                {t: 'Relatório de Prestação', d: 'Documentação final para aprovação imediata.'}
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start border-l-4 border-zinc-200 pl-6 py-2 hover:border-orange-600 transition-all group">
                  <CheckCircle2 className="text-orange-600 group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <h4 className="font-black uppercase text-sm">{item.t}</h4>
                    <p className="text-[10px] text-zinc-400 font-bold uppercase">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src="/assets/foto23.jpg" className="rounded-[3rem] shadow-3xl grayscale hover:grayscale-0 transition-all duration-700" />
            <div className="absolute -bottom-10 -right-10 bg-zinc-900 text-white p-10 rounded-3xl shadow-2xl border border-white/10">
              <ShieldCheck size={40} className="text-orange-500 mb-4" />
              <p className="text-xs font-black uppercase tracking-widest leading-relaxed">Selo de <br/>Governança Lovi</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03. ACR: PERFORMANCE (VIDEO 4 & FOTO 25) */}
      <section className="py-32 px-10 bg-zinc-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1 rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl group">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000">
              <source src="/assets/video4.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="text-6xl font-black uppercase italic leading-none text-orange-500">02. Elite <br/>Técnica.</h2>
            <p className="text-zinc-500 text-lg italic uppercase font-bold tracking-tighter">Associação de Campeões de Rodeio (ACR).</p>
            <div className="space-y-4">
              {[
                'Top 30 competidores do Brasil garantidos em arena.',
                'Critérios de pontuação digitalizados e transparentes.',
                'O espetáculo como esporte de alto nível, não apenas entretenimento.',
                'Segurança total para os atletas e profissionais de arena.',
                'Ranking nacional integrado com as maiores festas do país.'
              ].map((txt, i) => (
                <div key={i} className="flex items-center gap-3 text-xs font-black uppercase text-zinc-400">
                   <Trophy size={14} className="text-orange-500" /> {txt}
                </div>
              ))}
            </div>
            <img src="/assets/foto25.jpg" className="rounded-2xl h-32 w-full object-cover grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </section>

      {/* 04. GUTT BULLS: GENÉTICA (FOTO 26) */}
      <section className="py-32 px-10 bg-[#020202]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-6xl font-black uppercase italic leading-none">03. Genética <br/><span className="text-orange-500 italic">Azul.</span></h2>
            <div className="space-y-6">
               {['Linhagem de Touros Premiados', 'Bem-estar Animal Certificado', 'Monitoramento Veterinário Full-time', 'Transporte e Logística de Luxo', 'Valorização da Genética Brasileira'].map((t, i) => (
                 <div key={i} className="p-4 bg-zinc-900 rounded-2xl border border-white/5 flex items-center gap-4 hover:border-orange-600 transition-colors">
                    <Zap className="text-orange-500" size={20} />
                    <span className="font-black text-xs uppercase">{t}</span>
                 </div>
               ))}
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-[3rem]">
            <img src="/assets/foto26.jpg" className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute inset-0 bg-orange-600/10 group-hover:bg-transparent" />
          </div>
        </div>
      </section>

      {/* 05. MARI VIDAL: LIFESTYLE (FOTO 21) */}
      <section className="py-32 px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/3 relative">
            <img src="/assets/foto21.jpg" className="rounded-[3rem] shadow-3xl grayscale hover:grayscale-0 transition-all duration-700" />
            <div className="absolute top-10 -left-10 bg-orange-600 p-6 rounded-full text-white animate-bounce">
              <Star size={30} />
            </div>
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="text-6xl font-black uppercase italic leading-none">04. Humanização <br/>& <span className="text-orange-600">Influência.</span></h2>
            <p className="text-zinc-500 italic text-xl font-medium leading-relaxed">Mari Vidal: A voz que conecta a tradição com o digital. Criamos uma ponte emocional entre o setor público e o público final.</p>
            <div className="grid grid-cols-1 gap-4">
              {['Posicionamento de marca premium.', 'Criação de conteúdo diário durante o City Takeover.', 'Engajamento massivo com o público feminino e jovem.', 'Entrevistas exclusivas para o Podcast Lovi.', 'Validação social e autoridade política.'].map((t, i) => (
                <p key={i} className="text-[10px] font-black uppercase border-b border-zinc-100 pb-2">{t}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06. TUM DUM: INTELIGÊNCIA (FOTO 16) */}
      <section className="py-32 px-10 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-6xl font-black uppercase italic leading-none text-orange-500">05. Inteligência <br/>de Dados.</h2>
            <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest italic">Tecnologia Tum Dum: Auditoria de Público e Sentimento.</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                {h: 'Heatmaps', d: 'Fluxo de pessoas.'},
                {h: 'Leads', d: 'Captura de contatos.'},
                {h: 'ROI', d: 'Retorno financeiro.'},
                {h: 'Sentiment', d: 'Análise de redes.'},
                {h: 'Conversion', d: 'Venda de ingressos.'}
              ].map((item, i) => (
                <div key={i} className="p-6 bg-zinc-900 rounded-2xl border border-white/5">
                  <h5 className="font-black text-orange-500 uppercase text-xs">{item.h}</h5>
                  <p className="text-[8px] text-zinc-600 font-black uppercase">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative p-4 bg-zinc-900 rounded-[3rem] border border-white/10 group">
            <img src="/assets/foto16.jpg" className="w-full opacity-30 group-hover:opacity-100 transition-opacity grayscale" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
               <Activity size={80} className="text-orange-600 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* 07. MÍDIA: PODCAST & LIVE (FOTO 17) */}
      <section className="py-32 px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1 space-y-10">
            <h2 className="text-6xl font-black uppercase italic leading-none">06. Mídia <br/><span className="text-orange-600 underline">Omnichannel.</span></h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                 <Mic2 className="text-orange-600" size={32} />
                 <div><h4 className="font-black uppercase italic">Podcast Lovi Strategy</h4><p className="text-[10px] font-bold text-zinc-400">Onde a autoridade é construída.</p></div>
              </div>
              <div className="flex gap-4 items-center">
                 <Youtube className="text-red-600" size={32} />
                 <div><h4 className="font-black uppercase italic">YouTube 4K Live</h4><p className="text-[10px] font-bold text-zinc-400">Transmissão cinematográfica global.</p></div>
              </div>
              <div className="flex gap-4 items-center">
                 <RadioTower className="text-orange-600" size={32} />
                 <div><h4 className="font-black uppercase italic">Distribuição Multi-canal</h4><p className="text-[10px] font-bold text-zinc-400">TikTok, Instagram e TV Local.</p></div>
              </div>
            </div>
          </div>
          <div className="flex-1">
             <img src="/assets/foto17.jpg" className="rounded-[4rem] shadow-3xl grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </section>

      {/* 08. CITY TAKEOVER (FOTO 27) */}
      <section className="py-32 px-10 bg-[#020202]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative group">
             <img src="/assets/foto27.jpg" className="rounded-[4rem] grayscale opacity-40 group-hover:opacity-100 transition-opacity" />
             <div className="absolute inset-0 flex items-center justify-center">
                <Map className="text-orange-500 scale-[3] opacity-20 group-hover:opacity-100 transition-opacity" />
             </div>
          </div>
          <div className="space-y-10">
            <h2 className="text-6xl font-black uppercase italic leading-none text-orange-500">07. City <br/>Takeover.</h2>
            <ul className="space-y-4">
              {['Intervenção urbana em 30 dias.', 'Ações em escolas e comércio local.', 'Turismo regional catalisado pelo evento.', 'Blitz de rádio e som volante.', 'Legado econômico direto para o município.'].map((t, i) => (
                <li key={i} className="text-zinc-500 font-black uppercase text-[10px] flex items-center gap-3"><Target size={14} className="text-orange-600" /> {t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 09. OPERAÇÃO & ESG (VIDEO 5) */}
      <section className="py-32 px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1 space-y-10">
            <h2 className="text-6xl font-black uppercase italic leading-none">08. Legado <br/><span className="text-orange-600 underline">ESG.</span></h2>
            <p className="text-zinc-500 font-medium italic">Sustentabilidade não é opção, é dever. Gestão de resíduos e impacto social em cada projeto.</p>
            <div className="grid grid-cols-1 gap-2">
              {['Gestão de Resíduos Zero', 'Inclusão de Entidades Assistenciais', 'Ingresso Solidário', 'Respeito Animal Certificado', 'Educação Ambiental'].map((t, i) => (
                <div key={i} className="flex gap-2 items-center text-[10px] font-black uppercase text-zinc-400"><Leaf className="text-green-600" size={14} /> {t}</div>
              ))}
            </div>
          </div>
          <div className="flex-1 rounded-[3rem] overflow-hidden shadow-2xl">
            <video autoPlay muted loop className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all">
              <source src="/assets/video5.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* 10. FECHAMENTO: FELIPE MAKARIOS */}
      <footer className="py-40 bg-black text-center border-t border-white/5 px-10">
        <img src="/assets/logo lovi.jfif" className="h-12 mx-auto mb-16 invert opacity-40" />
        <h2 className="text-6xl font-black italic uppercase mb-12">O Próximo Passo <br/><span className="text-orange-500">Começa Aqui.</span></h2>
        <div className="max-w-2xl mx-auto p-16 bg-zinc-950 rounded-[4rem] border border-white/5 space-y-8 shadow-[0_0_100px_rgba(234,88,12,0.1)]">
           <div className="space-y-2">
              <p className="text-orange-500 font-black italic text-4xl">FELIPE MAKARIOS</p>
              <p className="text-zinc-600 font-bold uppercase text-xs tracking-[0.5em]">Founder & Strategy Master</p>
           </div>
           <div className="grid md:grid-cols-2 gap-4 text-[10px] font-black uppercase text-zinc-500">
              <div className="p-4 border border-white/5 rounded-2xl">felipemakarios@example.com</div>
              <div className="p-4 border border-white/5 rounded-2xl">+55 (XX) XXXXX-XXXX</div>
           </div>
           <div className="pt-6">
              <button className="px-12 py-6 bg-orange-600 rounded-full font-black italic uppercase text-lg hover:scale-110 transition-transform shadow-2xl">
                Aprovar Board Meeting
              </button>
           </div>
        </div>
      </footer>

    </div>
  );
}