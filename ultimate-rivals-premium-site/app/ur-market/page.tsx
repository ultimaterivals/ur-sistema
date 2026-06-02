"use client";

import Link from "next/link";
import { ArrowRight, ShoppingBag, Wrench, Handshake, Sparkles, Users, MapPin, Star, Lock } from "lucide-react";
import { useState } from "react";

const tabs = [
  { id: "produtos", label: "Produtos", icon: ShoppingBag },
  { id: "servicos", label: "Serviços", icon: Wrench },
  { id: "parceiros", label: "Parceiros", icon: Handshake },
  { id: "experiencias", label: "Experiências", icon: Sparkles },
  { id: "equipes", label: "Equipes", icon: Users },
  { id: "polos", label: "Polos", icon: MapPin },
];

const cards = [
  {
    category: "produtos",
    title: "Kit Equipamentos UR",
    desc: "Equipamentos oficiais com identidade da temporada — para quem representa o ecossistema dentro e fora da quadra.",
    tag: "Exclusivo UR",
    available: true,
    icon: ShoppingBag,
  },
  {
    category: "produtos",
    title: "Uniforme de Equipe",
    desc: "Customização de uniformes para duplas e equipes cadastradas. Identidade visual completa para a temporada.",
    tag: "Para equipes",
    available: true,
    icon: ShoppingBag,
  },
  {
    category: "servicos",
    title: "Treinamento Individual",
    desc: "Sessões de treinamento com parceiros metodológicos do UR. Formato, frequência e disponibilidade variam por polo.",
    tag: "Serviço Parceiro",
    available: true,
    icon: Wrench,
  },
  {
    category: "servicos",
    title: "Análise de Desempenho",
    desc: "Relatórios baseados no histórico da temporada. Identifique pontos fortes e áreas de evolução.",
    tag: "Em breve",
    available: false,
    icon: Wrench,
  },
  {
    category: "experiencias",
    title: "Acesso ao UR Legends",
    desc: "Experiência de acompanhar ou participar do evento final da temporada. Disponível para classificados e convidados.",
    tag: "Evento Final",
    available: true,
    icon: Sparkles,
  },
  {
    category: "parceiros",
    title: "Benefícios Parceiros",
    desc: "Marcas e serviços parceiros do Ultimate Rivals com vantagens exclusivas para atletas e equipes cadastradas.",
    tag: "Em breve",
    available: false,
    icon: Handshake,
  },
];

export default function URMarketPage() {
  const [activeTab, setActiveTab] = useState("produtos");

  const filteredCards = activeTab === "todos"
    ? cards
    : cards.filter((c) => c.category === activeTab);

  const displayCards = filteredCards.length > 0 ? filteredCards : cards;

  return (
    <div className="bg-ur-black text-ur-white min-h-dvh">
      {/* HERO */}
      <section className="relative min-h-[45vh] sm:min-h-[55vh] sm:min-h-[75vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 court-lines opacity-25" />
        <div className="absolute inset-0 bg-arena-gradient" />
        <div className="absolute top-0 right-0 w-[600px] h-[500px] glow-orb pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-24 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-ur-gold animate-pulse" />
              <span className="section-label tracking-[0.3em]">Ultimate Rivals · Ecossistema</span>
            </div>

            <h1 className="font-display font-black uppercase leading-none mb-6">
              <span className="block text-[clamp(1.5rem,3vw,2.5rem)] text-ur-sand mb-2">UR Market:</span>
              <span className="block text-[clamp(2.5rem,6vw,5.5rem)] text-ur-white">PRODUTOS, SERVIÇOS</span>
              <span className="block text-[clamp(2.5rem,6vw,5.5rem)] text-gold-gradient">E POSSIBILIDADES.</span>
            </h1>

            <p className="text-ur-sand text-base sm:text-lg leading-relaxed mb-4 max-w-2xl font-body">
              O UR Market é o espaço do ecossistema onde atletas, equipes e parceiros se conectam. Produtos, serviços, experiências e benefícios — tudo dentro do universo Ultimate Rivals.
            </p>
            <p className="text-ur-muted text-sm leading-relaxed mb-10 max-w-xl font-body">
              Algumas categorias já estão ativas. Outras chegam ao longo da temporada.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/cadastro" className="btn-primary">
                Entrar no ecossistema
                <ArrowRight size={16} />
              </Link>
              <Link href="/patrocinadores" className="btn-secondary">
                Sou parceiro/patrocinador
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TABS */}
      <section className="py-8 bg-ur-graphite sticky top-16 z-30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-2 overflow-x-auto scrollbar-none">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 font-display font-bold text-sm uppercase tracking-wider rounded-sm whitespace-nowrap transition-all duration-200 shrink-0 ${
                    activeTab === tab.id
                      ? "bg-ur-gold text-ur-black"
                      : "text-ur-muted hover:text-ur-sand hover:bg-white/5"
                  }`}
                >
                  <Icon size={14} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="py-10 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <div className="flex items-center justify-between">
              <h2 className="section-heading text-[clamp(1.8rem,4vw,3rem)]">
                {tabs.find((t) => t.id === activeTab)?.label ?? "Todos"}
              </h2>
            </div>
            <div className="divider-gold mt-3" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`rounded-sm p-6 transition-all duration-300 group relative overflow-hidden ${
                    card.available
                      ? "bg-card hover:shadow-card-hover cursor-pointer"
                      : "bg-ur-graphite/20 border border-white/5 opacity-70"
                  }`}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ur-gold/15 to-transparent group-hover:via-ur-gold/40 transition-all" />
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 rounded-sm flex items-center justify-center ${card.available ? "bg-ur-gold/10 group-hover:bg-ur-gold/20" : "bg-white/5"} transition-all`}>
                      {card.available ? (
                        <Icon size={18} className="text-ur-gold" />
                      ) : (
                        <Lock size={16} className="text-ur-muted" />
                      )}
                    </div>
                    <span className={`text-xs font-display font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full border ${
                      card.available
                        ? "chip-gold"
                        : "bg-white/5 border-white/10 text-ur-muted"
                    }`}>
                      {card.tag}
                    </span>
                  </div>
                  <h3 className={`font-display font-bold text-xl uppercase mb-2 ${card.available ? "text-ur-white" : "text-ur-muted"}`}>
                    {card.title}
                  </h3>
                  <p className="text-ur-sand text-sm leading-relaxed font-body">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* UR COINS */}
      <section className="py-12 sm:py-24 bg-ur-graphite/30 relative">
        <div className="absolute inset-0 court-lines opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label block mb-3">Moeda do Ecossistema</span>
              <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">UR COINS</h2>
              <div className="divider-gold mb-6" />
              <p className="text-ur-sand text-base leading-relaxed mb-6 font-body">
                O UR Coins é a moeda interna do ecossistema Ultimate Rivals. Você acumula moedas ao jogar, ao cumprir metas de temporada, ao participar de eventos e ao contribuir com a comunidade.
              </p>
              <p className="text-ur-sand text-base leading-relaxed mb-8 font-body">
                Os UR Coins podem ser trocados por produtos, serviços e experiências dentro do UR Market — conforme as regras e disponibilidade de cada item.
              </p>
              <div className="bg-ur-gold/5 border border-ur-gold/15 rounded-sm p-4">
                <p className="text-ur-muted text-sm font-body leading-relaxed">
                  O sistema de UR Coins está em desenvolvimento e será lançado ao longo da Temporada 1.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-sm p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ur-gold/30 to-transparent" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-ur-gold/15 border border-ur-gold/30 rounded-full flex items-center justify-center">
                  <Star size={24} className="text-ur-gold" />
                </div>
                <div>
                  <span className="font-display font-black text-3xl text-ur-gold">UR Coins</span>
                  <p className="text-ur-muted text-xs mt-1">Moeda do ecossistema</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { action: "Vitória no UR Play", coins: "+10 UR Coins" },
                  { action: "Participação consistente", coins: "+5 UR Coins/semana" },
                  { action: "Fair Play reconhecido", coins: "+15 UR Coins" },
                  { action: "Progressão de nível", coins: "+50 UR Coins" },
                ].map((item) => (
                  <div key={item.action} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <span className="text-ur-sand text-sm font-body">{item.action}</span>
                    <span className="font-display font-bold text-sm text-ur-gold">{item.coins}</span>
                  </div>
                ))}
              </div>
              <p className="text-ur-muted text-xs mt-4 font-body italic text-center">Dados ilustrativos</p>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-ur-graphite/40 border border-white/5 rounded-sm p-6">
            <p className="text-ur-muted text-sm font-body leading-relaxed text-center">
              <span className="text-ur-sand font-semibold">Importante:</span> Benefícios dependem de regras oficiais, parceiros ativos e disponibilidade. O UR Market está em construção contínua ao longo da Temporada 1 e algumas categorias podem não estar disponíveis no momento.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-arena-gradient" />
        <div className="absolute inset-0 court-lines opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="section-label block mb-4">Acesso ao Market</span>
          <h2 className="section-heading text-[clamp(2.5rem,6vw,4.5rem)] mb-6">
            FAÇA PARTE DO<br />
            <span className="text-gold-gradient">ECOSSISTEMA.</span>
          </h2>
          <p className="text-ur-sand text-base leading-relaxed mb-10 max-w-xl mx-auto font-body">
            O UR Market está disponível para atletas, equipes e parceiros do Ultimate Rivals. Entre pelo UR Play e comece a acumular UR Coins.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cadastro" className="btn-primary">
              Entrar no ecossistema
              <ArrowRight size={16} />
            </Link>
            <Link href="/patrocinadores" className="btn-secondary">
              Quero ser parceiro
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
