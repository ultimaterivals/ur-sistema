import Link from "next/link";
import { ArrowRight, UserPlus } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-32 bg-ur-black relative overflow-hidden">
      {/* Arena gradient overlay */}
      <div
        className="absolute inset-x-0 top-0 h-[60%] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(212,164,55,0.10) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow pulse */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-2 h-2 rounded-full bg-ur-gold animate-pulse" />
          <p className="section-label tracking-[0.3em]">Temporada 1 — Começa Agora</p>
          <span className="w-2 h-2 rounded-full bg-ur-gold animate-pulse" />
        </div>

        <h2 className="font-display font-black uppercase text-[clamp(2rem,7vw,5.5rem)] text-ur-white leading-none mb-6">
          SUA TEMPORADA<br />
          <span className="text-gold-gradient">COMEÇA NO</span><br />
          PRIMEIRO JOGO.
        </h2>

        {/* Gold accent line */}
        <div className="w-20 h-0.5 bg-gradient-to-r from-ur-gold to-ur-gold-light mx-auto mb-8" />

        <p className="text-ur-sand text-lg font-body max-w-xl mx-auto mb-3 leading-relaxed">
          Entre pelo UR Play, jogue no seu nível, construa ranking, represente seu polo e faça parte da Temporada 1.
        </p>
        <p className="text-ur-muted text-sm font-body max-w-lg mx-auto mb-12">
          Você não precisa de equipe para começar. Atletas individuais, duplas e equipes entram pela mesma porta.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Link href="/ur-play" className="btn-primary">
            Começar pelo UR Play
            <ArrowRight size={18} />
          </Link>
          <Link href="/cadastro" className="btn-secondary">
            <UserPlus size={16} />
            Fazer cadastro
          </Link>
        </div>

        {/* Polo chips */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="text-ur-muted text-xs font-body">Polos ativos:</span>
          {["Belo Horizonte", "Betim", "Contagem"].map((polo) => (
            <span key={polo} className="chip-gold text-[10px]">{polo}</span>
          ))}
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-ur-gold/40 to-transparent absolute bottom-0 left-0 right-0" />
    </section>
  );
}
