"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Trophy, Zap, Mic2, Youtube, BarChart3, Map, 
  CheckCircle2, Globe, Laptop, PlayCircle, RadioTower, 
  Target, Truck, Leaf, Layout, ArrowRight, Activity, Users, Star,
  Briefcase, Gavel, TrendingUp, Smartphone, Share2, Camera, Megaphone,
  Eye, BarChart, Rocket, Building2, HardHat, HeartHandshake, Scale, Warehouse
} from 'lucide-react';

export default function LoviUltraSystem() {
  return (
    <div className="bg-[#020202] text-white font-sans selection:bg-orange-500 overflow-x-hidden">
      
      {/* 00. HEADER ESTRATÉGICO */}
      <nav className="fixed top-0 w-full z-[100] bg-black/90 backdrop-blur-2xl border-b border-white/5 py-5 px-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img src="/assets/logo lovi.jfif" className="h-10 invert brightness-200" alt="Lovi" />
          <div className="flex gap-8 items-center bg-white/5 px-6 py-3 rounded-2xl border border-white/10">
            <img src="/assets/logo acr.png" className="h-12 object-contain" alt="ACR" />
            <div className="w-[1px] h-8 bg-white/20" />
            <img src="/assets/logo guttbulls.jfif" className="h-12 object-contain" alt="Gutt Bulls" />
          </div>
        </div>
      </nav>

      {/* 01. HERO: MANIFESTO 2026 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover opacity-20 grayscale">
          <source src="/assets/video3.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center space-y-8 px-6">
          <motion.div initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:1}}>
            <h1 className="text-6xl md:text-[10rem] font-black italic tracking-tighter leading-[0.85]">
              LOVI <span className="text-orange-500 font-outline">STRATEGY</span><br/>
              <span className="text-white">ECOSSISTEMA.</span>
            </h1>
            <p className="text-zinc-500 font-black uppercase tracking-[0.8em] text-[10px] md:text-xs mt-10">Inteligência Governamental & Entretenimento de Elite</p>
          </motion.div>
        </div>
      </section>

      {/* 02. SEGURANÇA JURÍDICA (A BASE DE TUDO) */}
      <section className="py-32 px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="flex items-center gap-4 text-orange-600 font-black uppercase text-xs tracking-widest">
              <Scale size={20} /> Seção 01: Compliance
            </div>
            <h2 className="text-7xl font-black uppercase italic leading-none">Blindagem <br/><span className="text-orange-600 underline">Lei 14.133.</span></h2>
            <p className="text-zinc-500 text-xl font-medium leading-relaxed italic">
              Operamos na fronteira da nova lei de licitações. Nossa estrutura garante que a contratação seja inatacável juridicamente, protegendo o ordenador de despesa com processos auditáveis e transparência radical.
            </p>
          </div>
          <div className="p-12 bg-zinc-50 rounded-[4rem] border border-zinc-100">
             <ul className="space-y-6">
               {[
                 {t: "Pareceres Jurídicos Próprios", d: "Documentação técnica pronta para análise do Ministério Público."},
                 {t: "Matriz de Riscos", d: "Mapeamento completo de responsabilidades operacionais."},
                 {t: "Seguros de Eventos", d: "Apólices de alta cobertura para público e staff."}
               ].map((item, i) => (
                 <li key={i} className="flex gap-4 items-start">
                   <ShieldCheck className="text-orange-600 flex-shrink-0" size={24} />
                   <div><h4 className="font-black uppercase text-sm">{item.t}</h4><p className="text-[10px] text-zinc-400 font-bold uppercase">{item.d}</p></div>
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </section>

      {/* 03. ELITE TÉCNICA (ACR SUPERSTARS) */}
      <section className="py-32 px-10 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative rounded-[4rem] overflow-hidden group border border-white/5">
            <video autoPlay muted loop className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000">
              <source src="/assets/video5.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
          <div className="space-y-10">
            <div className="flex items-center gap-4 text-orange-500 font-black uppercase text-xs tracking-widest">
               <Trophy size={20} /> Seção 02: Performance Atleta
            </div>
            <h2 className="text-7xl font-black uppercase italic leading-none text-white">Elite <br/><span className="text-orange-500">ACR.</span></h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Não entregamos apenas montaria. Entregamos os **30 melhores ranqueados do Brasil**. O padrão ACR garante que o público assista a um espetáculo técnico de nível internacional, elevando o prestígio do município.
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-6 bg-zinc-900 rounded-2xl border border-white/5 font-black uppercase text-[10px] text-center italic">Ranking Oficial</div>
               <div className="p-6 bg-zinc-900 rounded-2xl border border-white/5 font-black uppercase text-[10px] text-center italic">Atletas de Elite</div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. GENÉTICA E ESPETÁCULO (GUTT BULLS) */}
      <section className="py-32 px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1 space-y-10">
            <div className="flex items-center gap-4 text-orange-600 font-black uppercase text-xs tracking-widest">
               <Zap size={20} /> Seção 03: DNA Touros
            </div>
            <h2 className="text-7xl font-black uppercase italic leading-none">Genética <br/><span className="text-orange-600">Gutt Bulls.</span></h2>
            <p className="text-zinc-500 text-lg font-medium leading-relaxed italic">
              O show depende da força. Os touros da Gutt Bulls são atletas de alta performance, criados com o que há de mais moderno em genética e bem-estar animal, garantindo adrenalina máxima e segurança operativa.
            </p>
          </div>
          <div className="flex-1">
             <img src="/assets/foto16.jpg" className="rounded-[4rem] shadow-3xl grayscale hover:grayscale-0 transition-all duration-700" alt="Gutt Bulls" />
          </div>
        </div>
      </section>

      {/* 05. ESTRATÉGIA DE MARKETING & PUBLICIDADE (A MACRO) */}
      <section className="py-32 px-10 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-6">
            <h2 className="text-7xl font-black uppercase italic text-orange-500">Marketing Dominante.</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto font-bold uppercase text-xs tracking-[0.4em]">A estratégia que garante o faturamento</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {t: "Social Ads", d: "Tráfego pago focado em venda direta de camarotes.", i: <Target/>},
              {t: "PR & Imprensa", d: "Assessoria que blinda a imagem do evento na mídia.", i: <Mic2/>},
              {t: "Branding", d: "Criação de identidade visual que atrai grandes marcas.", i: <Layout/>},
              {t: "Growth", d: "Funis de venda por WhatsApp para grupos de alto ticket.", i: <Rocket/>}
            ].map((item, i) => (
              <div key={i} className="p-8 bg-zinc-900/50 rounded-3xl border border-white/10 hover:border-orange-500 transition-all text-center space-y-4">
                <div className="text-orange-500 flex justify-center">{item.i}</div>
                <h4 className="font-black uppercase italic text-sm">{item.t}</h4>
                <p className="text-[10px] text-zinc-500 font-bold uppercase leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. O FATOR HUMANO (MARI VIDAL) */}
      <section className="py-32 px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="rounded-[4rem] overflow-hidden shadow-3xl border-[15px] border-zinc-100">
             <video autoPlay muted loop className="w-full h-full object-cover">
                <source src="/assets/mari vidal.mp4" type="video/mp4" />
             </video>
          </div>
          <div className="space-y-10">
            <div className="flex items-center gap-4 text-orange-600 font-black uppercase text-xs tracking-widest">
               <Star size={20} /> Seção 05: Humanização
            </div>
            <h2 className="text-7xl font-black uppercase italic leading-none">Lifestyle <br/><span className="text-orange-600 underline">Mari Vidal.</span></h2>
            <p className="text-zinc-500 text-xl font-medium leading-relaxed italic">
              Mari Vidal não é apenas marketing; ela é a **validação emocional**. Ela conecta o ecossistema Lovi ao público familiar e feminino, transformando o rodeio em um estilo de vida aspiracional.
            </p>
          </div>
        </div>
      </section>

      {/* 07. INTELIGÊNCIA DE DADOS (TUM DUM LUCRO) */}
      <section className="py-32 px-10 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-6xl font-black uppercase italic text-orange-500">Dados = <br/>Lucro Real.</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              O sistema **Tum Dum** mapeia o comportamento do público em tempo real. Isso permite que a Holding venda cotas de patrocínio com **ROI Comprovado**, justificando valores 50% superiores à média do mercado.
            </p>
            <div className="p-8 bg-zinc-900 rounded-[2.5rem] border border-orange-600/20">
               <h4 className="text-orange-500 font-black uppercase italic mb-2">Impacto Financeiro</h4>
               <p className="text-[10px] text-zinc-500 font-bold uppercase">Mapeamento de jornada de compra para maximizar vendas em bares e lojas oficiais.</p>
            </div>
          </div>
          <div className="flex justify-center">
             <BarChart3 size={150} className="text-orange-600 animate-pulse opacity-20" />
          </div>
        </div>
      </section>

      {/* 08. MÍDIA OMNICHANNEL (LIVE, PODCAST, ADS) */}
      <section className="py-32 px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto space-y-20">
          <h2 className="text-7xl font-black uppercase italic text-center">Escala <span className="text-orange-600">Omnichannel.</span></h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {i: <Mic2/>, t: "Lovi Podcast", d: "Autoridade e networking com líderes do setor."},
              {i: <Youtube/>, t: "Live 4K", d: "Transmissão que atrai patrocínios de nível nacional."},
              {i: <Smartphone/>, t: "Presença Social", d: "Onipresença digital que garante o sold-out."}
            ].map((item, i) => (
              <div key={i} className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 space-y-6">
                <div className="text-orange-600">{item.i}</div>
                <h4 className="text-2xl font-black uppercase italic">{item.t}</h4>
                <p className="text-xs text-zinc-400 font-black uppercase leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09. CITY TAKEOVER (IMPACTO ECONÔMICO) */}
      <section className="py-32 px-10 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-7xl font-black uppercase italic text-orange-500">City <br/>Takeover.</h2>
            <p className="text-zinc-500 italic text-xl">
              Inundamos a economia local. O evento transborda para o comércio, hotéis e turismo, gerando um "feriado econômico" que beneficia toda a cidade-sede.
            </p>
          </div>
          <img src="https://images.unsplash.com/photo-1578002171561-fb3112708316?auto=format&fit=crop&w=800" className="rounded-[4rem] grayscale opacity-50" />
        </div>
      </section>

      {/* 10. BACKOFFICE & EQUIPE HOLDING */}
      <section className="py-32 px-10 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto space-y-20 text-center">
          <h2 className="text-6xl font-black uppercase italic">Equipe <span className="text-orange-500 underline">Especializada.</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/5 rounded-3xl">
               <Briefcase className="mx-auto mb-4 text-orange-500" />
               <h4 className="font-black uppercase italic">Vendas VIP</h4>
               <p className="text-[10px] text-zinc-500 uppercase mt-2">Célula focada em camarotes de alto ticket.</p>
            </div>
            <div className="p-8 border border-white/5 rounded-3xl">
               <HeartHandshake className="mx-auto mb-4 text-orange-500" />
               <h4 className="font-black uppercase italic">Relacionamento B2G</h4>
               <p className="text-[10px] text-zinc-500 uppercase mt-2">Gestão de parcerias com prefeituras.</p>
            </div>
            <div className="p-8 border border-white/5 rounded-3xl">
               <Building2 className="mx-auto mb-4 text-orange-500" />
               <h4 className="font-black uppercase italic">Célula de Marketing</h4>
               <p className="text-[10px] text-zinc-500 uppercase mt-2">Produção in-house de conteúdo diário.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. ESG & SUSTENTABILIDADE (LEGALMENTE EXIGIDO) */}
      <section className="py-32 px-10 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-7xl font-black uppercase italic leading-none">ESG <br/><span className="text-orange-600">Sustentável.</span></h2>
            <p className="text-zinc-500 italic text-lg leading-relaxed">
              Gestão de resíduos, inclusão social e ingressos solidários. Transformamos o impacto ambiental em narrativa positiva para a prefeitura.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="p-10 bg-zinc-50 rounded-3xl flex flex-col items-center"><Leaf className="text-green-600 mb-4"/><span className="text-[10px] font-black uppercase">Resíduo Zero</span></div>
             <div className="p-10 bg-zinc-50 rounded-3xl flex flex-col items-center"><Users className="text-blue-600 mb-4"/><span className="text-[10px] font-black uppercase">Inclusão Social</span></div>
          </div>
        </div>
      </section>

      {/* 12. FECHAMENTO: FELIPE MAKARIOS */}
      <footer className="py-40 bg-black text-center border-t border-white/5 px-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <p className="text-orange-500 font-black italic text-6xl uppercase tracking-tighter">Felipe Makarios</p>
          <p className="text-zinc-600 font-black uppercase tracking-[0.6em] text-[10px]">Founder & Visionary - Lovi Strategy 2026</p>
          <div className="pt-20">
            <button className="px-20 py-10 bg-orange-600 rounded-full font-black italic uppercase text-2xl shadow-[0_0_80px_rgba(234,88,12,0.4)] hover:scale-110 transition-transform">
               Aprovar Board Meeting
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}