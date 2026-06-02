"use client";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const poloChips = ["Belo Horizonte", "Betim", "Contagem"];
const modalidadeChips = ["Dupla", "Quarteto"];
const journeySteps = ["UR Play", "UR Sprint", "UR Series", "UR Legends"];

export default function HeroCinematic() {
  return (
    <section className="relative min-h-dvh flex items-center overflow-hidden bg-ur-black pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 court-lines opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left — copy */}
        <div>
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-ur-gold animate-pulse" />
            <span className="section-label tracking-[0.3em]">Temporada 1 · Ultimate Rivals</span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-black uppercase leading-none mb-6">
            <span className="block text-[clamp(3.5rem,9vw,7.5rem)] text-ur-white">
              POLOS EM
            </span>
            <span className="block text-[clamp(3.5rem,9vw,7.5rem)] text-gold-gradient">
              DISPUTA.
            </span>
            <span className="block text-[clamp(1.75rem,4vw,3rem)] text-ur-sand mt-2">
              A TEMPORADA COMEÇA NA AREIA.
            </span>
          </h1>

          {/* Sub */}
          <p className="text-ur-sand text-base sm:text-lg leading-relaxed mb-4 max-w-xl font-body">
            Entre pelo UR Play, jogue no seu nível, construa ranking, represente seu polo e viva uma temporada feita para evoluir atletas, equipes e comunidades.
          </p>
          <p className="text-ur-muted text-sm leading-relaxed mb-8 max-w-lg font-body">
            Você não precisa ter equipe para começar. No Ultimate Rivals, atletas individuais, duplas e equipes entram pela mesma porta: o UR Play.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Link href="/ur-play" className="btn-primary text-sm">
              Começar pelo UR Play
              <ArrowRight size={16} />
            </Link>
            <Link href="/temporada" className="btn-secondary text-sm">
              <Play size={14} />
              Ver como funciona
            </Link>
          </div>

          {/* Journey mini */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-ur-muted text-xs font-body mr-1">Jornada:</span>
            {journeySteps.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span className="font-display font-bold text-xs uppercase tracking-wider text-ur-sand">{step}</span>
                {i < journeySteps.length - 1 && (
                  <ArrowRight size={10} className="text-ur-gold opacity-50" />
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Right — illustrative panel */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Main card */}
            <div className="bg-card rounded-sm p-6 border border-white/5 shadow-card-premium">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="section-label text-[10px] mb-1">Ranking dos Polos</p>
                </div>
                <span className="chip-gold text-[10px]">Temporada 1</span>
              </div>

              {/* Polo rankings */}
              {[
                { pos: 1, name: "Belo Horizonte", pts: 8920, bar: 100 },
                { pos: 2, name: "Betim", pts: 8410, bar: 94 },
                { pos: 3, name: "Contagem", pts: 7980, bar: 89 },
              ].map((polo) => (
                <div key={polo.name} className="flex items-center gap-3 mb-3 last:mb-0">
                  <div className="w-6 h-6 rounded-sm bg-ur-gold/10 border border-ur-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-black text-ur-gold text-[10px]">{polo.pos}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-display font-bold text-xs uppercase text-ur-white">{polo.name}</span>
                      <span className="font-display font-bold text-xs text-ur-gold">{polo.pts.toLocaleString()}</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-ur-gold to-ur-gold-light rounded-full"
                        style={{ width: `${polo.bar}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating chips */}
            <div className="absolute -bottom-4 -left-4 bg-ur-graphite-2 border border-white/5 rounded-sm p-3 shadow-card-premium">
              <p className="section-label text-[10px] mb-2">Polos Ativos</p>
              <div className="flex gap-1.5">
                {poloChips.map((p) => (
                  <span key={p} className="chip-gold text-[10px] py-0.5">{p}</span>
                ))}
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-ur-graphite-2 border border-white/5 rounded-sm p-3 shadow-card-premium">
              <p className="section-label text-[10px] mb-2">Modalidades</p>
              <div className="flex gap-1.5">
                {modalidadeChips.map((m) => (
                  <span key={m} className="chip-sand text-[10px] py-0.5">{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ur-black to-transparent pointer-events-none" />
    </section>
  );
}
