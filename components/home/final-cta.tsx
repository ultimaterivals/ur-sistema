import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { finalActions, statusItems } from "@/lib/content/home";

export function FinalCTA() {
  return (
    <section className="overflow-hidden border-t border-[#ffd84d]/15 bg-[linear-gradient(135deg,#090a0f,#030405)] px-5 py-12 md:py-16 lg:px-8 lg:py-[72px]">
      <div className="mx-auto max-w-7xl min-w-0">
        <div className="grid gap-8 rounded-lg border border-[#ffd84d]/25 bg-[radial-gradient(circle_at_18%_0%,rgba(255,216,77,0.15),transparent_34%),#030405] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.34)] md:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.62fr)] lg:items-center">
          <div className="min-w-0">
            <Badge>CTA final</Badge>
            <h2 className="mt-5 max-w-3xl text-[clamp(2.3rem,8vw,3.55rem)] font-black uppercase leading-[0.96] tracking-normal text-white">
              O próximo nível do esporte amador começa agora.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
              Entre como atleta, registre sua equipe, ative sua marca, conecte sua quadra ou acompanhe a
              temporada. O Ultimate Rivals está construindo uma nova forma de viver, competir e evoluir no esporte.
            </p>
            <p className="mt-5 text-sm font-black uppercase tracking-[0.14em] text-[#ffe98b]">
              Ultimate Rivals eleve o jogo, supere seus limites.
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-3">
              {statusItems.slice(1).map((item) => {
                const Icon = item.icon;
                return (
                  <span
                    className="inline-flex min-w-0 items-center gap-2 rounded-md border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-black uppercase leading-4 tracking-[0.1em] text-white/70"
                    key={item.label}
                  >
                    <Icon aria-hidden className="h-4 w-4 shrink-0 text-[#ffd84d]" />
                    {item.label}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {finalActions.map((action, index) => (
              <Button className="w-full" href={action.href} key={action.href} variant={index === 0 ? "primary" : "secondary"}>
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
