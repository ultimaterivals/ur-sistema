import Link from "next/link";
import { ArrowRight, UserPlus } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-32 bg-ur-graphite relative overflow-hidden">
      <div className="absolute inset-0 court-lines opacity-30" />
      {/* Glow orb — radial-gradient, sem filter:blur (iOS compat) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(212,164,55,0.09) 0%, transparent 70%)" }}
      />
      <div className="h-px bg-gradient-to-r from-transparent via-ur-gold/40 to-transparent absolute top-0 left-0 right-0" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="section-label mb-6 tracking-[0.3em]">Temporada 1 — Começa Agora</p>

        <h2 className="font-display font-black uppercase text-[clamp(2.5rem,7vw,5.5rem)] text-ur-white leading-none mb-6">
          SUA TEMPORADA<br />
          <span className="text-gold-gradient">COMEÇA NO</span><br />
          PRIMEIRO JOGO.
        </h2>

        <p className="text-ur-sand text-lg font-body max-w-xl mx-auto mb-4 leading-relaxed">
          Entre pelo UR Play, jogue no seu nível, construa ranking, represente seu polo e faça parte da Temporada 1.
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
