import { ArrowRight, BadgeCheck, Megaphone, Radio, Store, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { homeImageRoles } from "@/lib/content/site-images";
import { AdSlotHorizontal } from "./ad-slot-horizontal";
import { EditorialImage } from "./editorial-image";

const activations = [
  { label: "Parceiro oficial", icon: BadgeCheck, description: "cotas e entregas após proposta comercial" },
  { label: "Mídia UR", icon: Radio, description: "conteúdo, bastidores e cobertura de temporada" },
  { label: "UR Market", icon: Store, description: "benefícios reais após aprovação comercial" },
  { label: "Ranking", icon: Trophy, description: "visibilidade conectada à jornada esportiva" },
] as const;

export function CommercialShowcase() {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch">
      <article className="relative min-h-[520px] overflow-hidden rounded-lg border border-[#ffd84d]/24 bg-black">
        <EditorialImage
          className="absolute inset-0 rounded-none border-0"
          image={homeImageRoles.patrocinadores}
          label="ativação comercial"
          objectPosition="center 42%"
          sizes="(min-width: 1024px) 54vw, 100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.84)_72%,#050506)]" />
        <div className="relative flex min-h-[520px] flex-col justify-end p-5 md:p-8">
          <Badge>Negócios e mídia</Badge>
          <h2 className="mt-4 max-w-3xl text-balance text-[clamp(2.6rem,10vw,4.8rem)] font-black uppercase leading-[0.85] text-white">
            Patrocinar o UR é entrar na jornada.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/74 md:text-lg">
            Espaços comerciais preparados para marcas que querem presença em eventos, ranking, mídia, comunidade, CT UR e UR Market.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="/cadastro#patrocinador">
              Quero patrocinar
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Button>
            <Button href="/patrocinadores" variant="secondary">
              Ver proposta
            </Button>
          </div>
        </div>
      </article>

      <div className="grid gap-4">
        <AdSlotHorizontal label="Espaço de parceiro oficial da temporada" />
        <div className="grid gap-3 sm:grid-cols-2">
          {activations.map((activation) => {
            const Icon = activation.icon;

            return (
              <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4" key={activation.label}>
                <Icon aria-hidden className="h-6 w-6 text-[#ffd84d]" />
                <h3 className="mt-4 text-xl font-black uppercase leading-none text-white">{activation.label}</h3>
                <p className="mt-3 text-sm leading-6 text-white/64">{activation.description}</p>
              </div>
            );
          })}
        </div>
        <div className="rounded-lg border border-dashed border-[#ffd84d]/30 bg-[linear-gradient(145deg,rgba(255,216,77,0.12),rgba(255,255,255,0.035))] p-5">
          <Megaphone aria-hidden className="h-7 w-7 text-[#ffd84d]" />
          <h3 className="mt-4 text-2xl font-black uppercase leading-none text-white">Publicidade nativa futura</h3>
          <p className="mt-3 text-sm leading-6 text-white/64">
            Estrutura visual pronta para mídia patrocinada e ativações sem script de ads nesta etapa.
          </p>
        </div>
      </div>
    </div>
  );
}
