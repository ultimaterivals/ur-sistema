import { Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

type SponsoredBlockProps = {
  items: readonly string[];
};

export function SponsoredBlock({ items }: SponsoredBlockProps) {
  return (
    <section className="overflow-hidden rounded-lg border border-[#ffd84d]/20 bg-[radial-gradient(circle_at_18%_0%,rgba(255,216,77,0.16),transparent_30%),linear-gradient(135deg,#111218,#050506)] p-5 md:p-7">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-end">
        <div>
          <div className="grid h-12 w-12 place-items-center rounded-lg border border-[#ffd84d]/25 bg-black/35 text-[#ffd84d]">
            <Handshake aria-hidden className="h-6 w-6" />
          </div>
          <div className="mt-5 text-[11px] font-black uppercase tracking-[0.18em] text-[#ffe98b]">negócios e ativação</div>
          <h3 className="mt-3 max-w-xl text-[clamp(2.2rem,8vw,3.8rem)] font-black uppercase leading-[0.9] text-white">
            Sua marca dentro da jornada do atleta.
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/72 md:text-base">
            O UR prepara espaços comerciais para marcas que querem fazer parte da temporada, da mídia, do mercado interno e da comunidade.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4" key={item}>
              <div className="text-sm font-black uppercase leading-tight text-white">{item}</div>
              <div className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-[#ffe98b]/78">em validação comercial</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <Button href="/cadastro#patrocinador">Quero patrocinar o UR</Button>
      </div>
    </section>
  );
}

