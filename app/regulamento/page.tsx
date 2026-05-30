import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowRight, BadgeCheck, BarChart3, FileWarning, Scale, Shield, Trophy, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "Regulamento UR | Regras Gerais Ultimate Rivals",
  description:
    "Conheça o regulamento geral do Ultimate Rivals, com princípios de conduta, UR Play, ranking em formação, equipes, entrada com critério e penalidades.",
};

const principles = [
  "Respeito entre atletas, equipes, organização, quadras, patrocinadores e comunidade.",
  "Fair play, competitividade saudável e responsabilidade antes, durante e depois das atividades.",
  "Nivelamento para tornar disputas mais justas conforme modalidade, contexto e critérios.",
  "Ranking e pontuação apenas com critérios oficiais, presença registrada e dados validados.",
  "Conduta compatível com a Mentalidade Hunter: disciplina, presença, evolução e respeito.",
] as const;

const ruleBlocks = [
  {
    icon: BadgeCheck,
    title: "Cadastro e validação",
    description:
      "Todo interessado passa por avaliação de perfil. Cadastro não garante vaga, aprovação, equipe, patrocínio, parceria ou participação imediata.",
  },
  {
    icon: Trophy,
    title: "UR Play",
    description:
      "UR Play é a porta de entrada planejada para observação, nivelamento, presença e construção de histórico futuro.",
  },
  {
    icon: BarChart3,
    title: "Ranking em formação",
    description:
      "Ranking público só deve receber dados reais após critérios oficiais e participação confirmada.",
  },
  {
    icon: Users,
    title: "Equipes",
    description:
      "Equipes oficiais dependem de identidade, capitão, elenco, aceite de regras, conduta e validação da equipe UR.",
  },
] as const;

const prohibitedConducts = [
  "Agressão física, ameaça, intimidação ou desrespeito.",
  "Racismo, homofobia, machismo, assédio, discriminação ou discurso de ódio.",
  "Fraude de identidade, dados falsos, manipulação de resultado ou conduta antidesportiva.",
  "Uso indevido da marca Ultimate Rivals, de logos, conteúdos ou materiais oficiais.",
      "Atitudes que prejudiquem atletas, quadras, equipe UR, patrocinadores ou comunidade.",
] as const;

function PageSection({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      className={`scroll-mt-24 overflow-hidden border-t border-white/10 px-5 py-10 md:scroll-mt-28 md:py-14 lg:px-8 lg:py-16 ${className}`}
      id={id}
    >
      <div className="mx-auto max-w-7xl min-w-0">{children}</div>
    </section>
  );
}

export default function RegulamentoPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <section className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,#090a0f_0%,#030405_100%)] px-5 py-12 md:py-16 lg:px-8 lg:py-20">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:items-center">
          <div className="min-w-0 text-center lg:text-left">
            <Badge>Regulamento UR</Badge>
            <h1 className="mx-auto mt-5 max-w-4xl text-balance text-[clamp(2.8rem,10vw,4.65rem)] font-black uppercase leading-[0.94] tracking-normal text-white lg:mx-0">
              Regras claras para jogar melhor.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8 lg:mx-0">
              O regulamento protege atletas, equipes e polos, define critérios de participação, pontuação, conduta,
              elegibilidade e avanço dentro da temporada.
            </p>
            <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
              <Button href="#regras">
                Ver regras
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
              <Button href="/ur-play" variant="secondary">
                Começar pelo UR Play
              </Button>
            </div>
          </div>

          <Card className="p-5 md:p-6" premium>
            <Scale aria-hidden className="h-8 w-8 text-[#ffd84d]" />
            <h2 className="mt-6 text-[clamp(2rem,8vw,2.8rem)] font-black uppercase leading-[0.98] text-white">
              Regras em evolução.
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/72">
              As regras podem ser atualizadas conforme agenda, modalidades, polos, ranking, equipes e eventos forem
              oficialmente validados.
            </p>
          </Card>
        </div>
      </section>

      <PageSection id="regras">
        <SectionHeader
          description="O UR organiza competição, desenvolvimento e comunidade. A base do regulamento é proteger a experiência e a credibilidade do ecossistema."
          eyebrow="Princípios UR"
          title="Respeito, fair play, presença e critério."
        />
        <Card className="p-5 md:p-6" premium>
          <div className="grid gap-3 md:grid-cols-5">
            {principles.map((item, index) => (
              <div className="rounded-lg border border-white/10 bg-black/25 p-4" key={item}>
                <span className="grid h-9 w-9 place-items-center rounded-md bg-[#ffd84d] text-xs font-black text-black">
                  {index + 1}
                </span>
                <p className="mt-4 text-sm font-bold leading-6 text-white/72">{item}</p>
              </div>
            ))}
          </div>
        </Card>
      </PageSection>

      <PageSection className="bg-[#07080c]">
        <SectionHeader
          description="A entrada começa com interesse, avaliação de perfil e regras claras. Nenhuma etapa deve ser tratada como aprovação automática."
          eyebrow="Funcionamento geral"
          title="Entrada, ranking e equipes com critério."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {ruleBlocks.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card className="min-h-[230px]" key={item.title} premium={index === 0}>
                <Icon aria-hidden className="h-7 w-7 text-[#ffd84d]" />
                <h2 className="mt-5 text-2xl font-black uppercase leading-none text-white">{item.title}</h2>
                <p className="mt-4 text-sm leading-6 text-white/68">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          description="O participante é responsável pelas informações enviadas, pela própria conduta e pelo respeito às regras específicas de cada etapa."
          eyebrow="Responsabilidade"
          title="Atletas, equipes e parceiros precisam preservar o ambiente."
        />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
          <Card premium>
            <Shield aria-hidden className="h-8 w-8 text-[#ffd84d]" />
            <h2 className="mt-5 text-[clamp(2rem,8vw,2.75rem)] font-black uppercase leading-[0.98] text-white">
              Conduta conta.
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/72">
              Presença, postura, respeito e responsabilidade fazem parte da experiência UR e podem influenciar validação,
              elegibilidade e próximos passos.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-black uppercase leading-none text-white">Condutas proibidas</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {prohibitedConducts.map((item) => (
                <p
                  className="rounded-lg border border-white/10 bg-black/25 p-4 text-sm font-bold leading-6 text-white/70"
                  key={item}
                >
                  {item}
                </p>
              ))}
            </div>
          </Card>
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]">
        <SectionHeader
          description="Penalidades reais dependem do caso, da etapa, das regras específicas publicadas e da decisão da equipe UR."
          eyebrow="Penalidades gerais"
          title="A proteção do ecossistema vem antes da participação individual."
        />
        <Card className="grid gap-5 p-5 md:p-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]" premium>
          <div>
            <FileWarning aria-hidden className="h-8 w-8 text-[#ffd84d]" />
            <h2 className="mt-5 text-[clamp(2rem,8vw,2.75rem)] font-black uppercase leading-[0.98] text-white">
              Medidas possíveis.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Advertência ou orientação formal.",
              "Revisão de elegibilidade ou prioridade.",
              "Suspensão temporária de participação.",
              "Arquivamento do cadastro ou bloqueio de próximos passos.",
              "Remoção de evento, equipe, ranking ou comunidade quando aplicável.",
              "Encaminhamento para regras específicas da etapa oficial.",
            ].map((item) => (
              <p
                className="rounded-lg border border-white/10 bg-black/25 p-4 text-sm font-bold leading-6 text-white/70"
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
        </Card>
      </PageSection>

      <PageSection>
        <Card className="grid gap-6 p-5 md:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.45fr)] lg:items-center" premium>
          <div>
            <Badge>Atualização contínua</Badge>
            <h2 className="mt-5 max-w-3xl text-[clamp(2.2rem,8vw,3.4rem)] font-black uppercase leading-[0.98] text-white">
              Regras específicas serão publicadas por etapa.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/74">
              Modalidade, categoria, nível, pontuação, check-in, arbitragem, ranking, premiações, repasses e eventos
              terão regras próprias quando o calendário oficial for confirmado.
            </p>
          </div>
          <div className="grid gap-3">
            <Button href="/cadastro">Entrar no UR</Button>
            <Button href="/contato" variant="secondary">
              Tirar dúvida
            </Button>
          </div>
        </Card>
      </PageSection>
    </main>
  );
}
