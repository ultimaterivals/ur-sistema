import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASectionPremium() {
  return (
    <section className="overflow-hidden border-t border-[#ffd84d]/15 bg-black px-5 py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl rounded-lg border border-[#ffd84d]/25 bg-[radial-gradient(circle_at_20%_0%,rgba(255,216,77,0.18),transparent_28%),linear-gradient(135deg,#111218,#040405_66%,#241c07)] p-5 md:p-8 lg:p-10">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,0.92fr)_minmax(320px,0.6fr)] lg:items-end">
          <div>
            <div className="text-[11px] font-black uppercase tracking-[0.18em] text-[#ffe98b]">cadastro de interesse aberto</div>
            <h2 className="mt-4 max-w-4xl text-balance text-[clamp(2.6rem,11vw,5.6rem)] font-black uppercase leading-[0.86] text-white">
              Entre no próximo ciclo do Ultimate Rivals.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
              Atletas, equipes, quadras, marcas e comunidade já podem entrar no radar do UR para o próximo ciclo.
            </p>
          </div>
          <div className="grid gap-3">
            <Button href="/cadastro">
              Entrar no UR
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Button>
            <Button href="/cadastro#patrocinador" variant="secondary">
              Quero patrocinar
            </Button>
            <p className="text-xs font-bold uppercase leading-5 tracking-[0.12em] text-white/48">
              A entrada passa por validação para manter equilíbrio, respeito e organização.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
