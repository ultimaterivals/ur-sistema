import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, ChevronDown, ClipboardList, Lock, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import type { TeamCard, TeamStep } from "@/lib/content/equipes";
import {
  collectiveRankingCards,
  cycleRewardFlow,
  draftConnectionCards,
  mediaRivalryCards,
  rosterValidationCards,
  teamBenefits,
  teamComparisonRows,
  teamEntrySteps,
  teamFaq,
  teamHeroBadges,
  teamIdentityCards,
  teamInterestFields,
  teamInterestFlow,
  teamCoinsCards,
  teamPreviewRows,
} from "@/lib/content/equipes";

export const metadata: Metadata = {
  title: "Equipes UR | Ranking Coletivo, Elencos e Temporada Ultimate Rivals",
  description:
    "Conheça as equipes oficiais do Ultimate Rivals, o sistema que transforma times amadores em ativos competitivos com ranking coletivo, elenco, UR Coins, mídia, repasses e oportunidades dentro da temporada.",
};

function PageSection({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
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

function IconCard({ item, premium = false }: { item: TeamCard; premium?: boolean }) {
  const Icon = item.icon;

  return (
    <Card className="flex h-full min-h-[194px] flex-col" premium={premium}>
      <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10">
        <Icon aria-hidden className="h-6 w-6 text-[#ffd84d]" />
      </span>
      <h3 className="mt-5 text-lg font-black uppercase leading-tight text-white md:text-xl">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/70">{item.description}</p>
    </Card>
  );
}

function TeamTimeline({ steps }: { steps: readonly TeamStep[] }) {
  return (
    <div className="relative">
      <div className="absolute left-[21px] top-0 hidden h-full w-px bg-[#ffd84d]/20 md:block lg:left-0 lg:top-[21px] lg:h-px lg:w-full" />
      <div className="grid gap-3 md:gap-4 lg:grid-cols-5">
        {steps.map((item) => (
          <div className="relative grid grid-cols-[44px_1fr] gap-4 lg:block" key={item.step}>
            <span className="relative z-10 grid h-11 w-11 place-items-center rounded-md border border-[#ffd84d]/35 bg-[#111218] text-sm font-black text-[#ffe98b] shadow-[0_0_0_6px_rgba(3,4,5,1)]">
              {item.step}
            </span>
            <Card className="min-h-[174px] p-4 md:p-5 lg:mt-5">
              <h3 className="text-base font-black uppercase leading-tight text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">{item.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamPreviewPanel() {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
      <Card className="p-4 md:p-6" premium>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Badge>Preview visual</Badge>
          <span className="text-xs font-black uppercase tracking-[0.14em] text-white/60">
            dados reais entram após validação
          </span>
        </div>
        <div className="mt-6 space-y-3">
          {teamPreviewRows.map((row, index) => (
            <div
              className="grid grid-cols-[auto_1fr] gap-4 rounded-lg border border-white/10 bg-black/30 p-4"
              key={row.label}
            >
              <span className="grid h-11 w-11 place-items-center rounded-md bg-[#ffd84d] text-sm font-black text-black">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-base font-black uppercase leading-tight text-white">{row.label}</h3>
                <p className="mt-1 text-sm font-bold text-[#ffe98b]">{row.value}</p>
                <p className="mt-2 text-sm leading-6 text-white/62">{row.note}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-3 sm:grid-cols-2">
        {["identidade em formação", "elenco em validação", "capitão em formação", "mídia em formação"].map((item) => (
          <Card className="min-h-[132px] p-4 md:p-5" key={item}>
            <span className="grid h-10 w-10 place-items-center rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10">
              <Shield aria-hidden className="h-5 w-5 text-[#ffd84d]" />
            </span>
            <h3 className="mt-3 text-sm font-black uppercase leading-tight tracking-[0.08em] text-white">{item}</h3>
            <p className="mt-2 text-sm text-white/65">equipes em formação</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default function EquipesPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <section className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,#090a0f_0%,#030405_100%)] px-5 py-10 md:py-12 lg:px-8 lg:py-14">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
          <div className="min-w-0 text-center lg:text-left">
            <Badge>Equipes UR • ranking coletivo em formação</Badge>
            <h1 className="mx-auto mt-4 max-w-4xl text-balance text-[clamp(2.75rem,10vw,4rem)] font-black uppercase leading-[0.94] tracking-normal text-white md:text-[clamp(3.45rem,6vw,5rem)] lg:mx-0">
              Equipes como ativos esportivos e midiáticos.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8 lg:mx-0">
              Equipes oficiais no Ultimate Rivals organizam identidade, elenco, capitão, ranking coletivo,
              rivalidade, mídia, UR Coins, repasses e oportunidades dentro da temporada.
            </p>
            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
              <Button href="#interesse">
                Registrar interesse
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
              <Button href="#ranking-coletivo" variant="secondary">
                Ranking coletivo
              </Button>
              <Button href="/ur-play" variant="ghost">
                Conexão com UR Play
              </Button>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {teamHeroBadges.map((item) => (
                <span
                  className="rounded-lg border border-white/10 bg-white/[0.045] px-3 py-3 text-xs font-black uppercase leading-5 tracking-[0.1em] text-[#ffe98b]"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[470px]">
            <Card className="overflow-hidden p-4 md:p-5" premium>
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
                  <Shield aria-hidden className="h-6 w-6 text-[#ffd84d]" />
                </span>
                <span className="rounded-md border border-[#ffd84d]/20 px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#ffe98b]">
                  registro será liberado após validação
                </span>
              </div>
              <div className="my-6 grid place-items-center">
                <Image
                  alt="Emblema Ultimate Rivals"
                  className="h-auto w-36 object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.55)] md:w-44"
                  height={240}
                  priority
                  src="/images/hero-ur-emblem.png"
                  width={240}
                />
              </div>
              <div className="rounded-lg border border-white/10 bg-black/45 p-4">
                <div className="text-xs font-black uppercase tracking-[0.16em] text-[#ffe98b]">Equipe oficial</div>
                <div className="mt-2 text-2xl font-black uppercase leading-none text-white">equipes em formação</div>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Sem nomes, escudos, atletas, elencos, posições ou repasses reais nesta etapa.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <PageSection id="identidade">
        <SectionHeader
          description="Time amador pode ser mais que presença em quadra. No UR, equipe oficial é identidade competitiva, mídia, histórico e oportunidade comercial."
          eyebrow="Identidade competitiva"
          title="Equipe não é só um grupo de atletas."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {teamIdentityCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
        <div className="mt-5 overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
          <div className="grid border-b border-white/10 bg-black/35 text-xs font-black uppercase tracking-[0.14em] text-[#ffe98b] md:grid-cols-[0.72fr_1fr_1fr]">
            <div className="hidden px-5 py-4 md:block">Critério</div>
            <div className="border-white/10 px-5 py-4 md:border-l">Grupo informal</div>
            <div className="border-t border-white/10 px-5 py-4 md:border-l md:border-t-0">Equipe UR</div>
          </div>
          {teamComparisonRows.map((row) => (
            <div
              className="grid border-b border-white/10 last:border-b-0 md:grid-cols-[0.72fr_1fr_1fr]"
              key={row.label}
            >
              <div className="bg-white/[0.025] px-5 py-4 text-sm font-black uppercase tracking-[0.1em] text-white">
                {row.label}
              </div>
              <div className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-white/62 md:border-l md:border-t-0">
                {row.group}
              </div>
              <div className="border-t border-[#ffd84d]/15 bg-[#ffd84d]/[0.045] px-5 py-4 text-sm font-semibold leading-6 text-white/78 md:border-l md:border-t-0">
                {row.official}
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]" id="entrada">
        <SectionHeader
          action={
            <Button href="#interesse" variant="secondary">
              Registrar interesse visual
            </Button>
          }
          description="Registro oficial depende de validação. A página mostra o caminho previsto antes de qualquer backend, login ou banco de dados."
          eyebrow="Como entrar no UR"
          title="Da intenção do capitão ao ranking coletivo."
        />
        <TeamTimeline steps={teamEntrySteps} />
      </PageSection>

      <PageSection id="beneficios">
        <SectionHeader
          description="Equipe oficial cria continuidade: ranking, mídia, torcida, valor comercial, recompensas e conexão com a temporada."
          eyebrow="Benefícios"
          title="Mais organização para competir, aparecer e crescer."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {teamBenefits.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 1} />
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[linear-gradient(180deg,#030405,#08090d)]" id="ranking-coletivo">
        <SectionHeader
          action={
            <Button href="/ranking" variant="secondary">
              Ver Ranking UR
            </Button>
          }
          description="Ranking coletivo transforma desempenho de equipe em histórico de temporada, sempre com dados reais apenas após validação oficial."
          eyebrow="Ranking coletivo"
          title="A equipe também disputa posição, memória e valor."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {collectiveRankingCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
      </PageSection>

      <PageSection id="elenco-validacao">
        <SectionHeader
          description="Capitão, elenco e identidade precisam de critérios claros para evitar dados soltos, duplicidade ou times inventados."
          eyebrow="Elenco, capitão e validação"
          title="Equipe oficial exige responsabilidade e registro validado."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {rosterValidationCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 3} />
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]" id="ur-play-draft">
        <SectionHeader
          action={
            <Button href="/ur-play" variant="secondary">
              Conhecer UR Play
            </Button>
          }
          description="UR Play ajuda a observar atletas e pode alimentar Draft, formação de equipes e ranking quando houver validação."
          eyebrow="UR Play e Draft"
          title="Atletas observados podem virar elenco no futuro."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {draftConnectionCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
      </PageSection>

      <PageSection id="coins-recompensas">
        <SectionHeader
          action={
            <Button href="/ur-market" variant="secondary">
              Conhecer UR Market
            </Button>
          }
          description="UR Coins coletivas e recompensas dependem de critérios oficiais, parceiros, temporada e operação ativa."
          eyebrow="UR Coins coletivas"
          title="Conquistas coletivas podem virar reconhecimento."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {teamCoinsCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[linear-gradient(180deg,#030405,#08090d)]" id="midia">
        <SectionHeader
          description="Equipes criam histórias melhores para narrar: confronto, bastidor, torcida, evolução, rivalidade e pertencimento."
          eyebrow="Mídia, rivalidade e torcida"
          title="Equipe forte também é produto de mídia."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {mediaRivalryCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 1} />
          ))}
        </div>
      </PageSection>

      <PageSection id="repasses-premiacoes">
        <SectionHeader
          description="Repasses e premiações são possibilidades por ciclo, sempre condicionadas a ranking validado, regras oficiais e temporada ativa."
          eyebrow="Repasses e premiações"
          title="Reconhecimento financeiro exige critério, ciclo e validação."
        />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-stretch">
          <Card className="flex min-h-[260px] flex-col" premium>
            <span className="rounded-md border border-[#ffd84d]/20 bg-black/30 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#ffe98b]">
              ciclo competitivo
            </span>
            <h3 className="mt-6 text-[clamp(1.85rem,7vw,2.35rem)] font-black uppercase leading-[0.98] text-white">
              Sem repasse real antes da temporada validada.
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/72">
              Nenhuma premiação, valor, posição ou regra final será exibida antes de validação oficial.
            </p>
          </Card>
          <div className="grid gap-3 sm:grid-cols-4">
            {cycleRewardFlow.map((item, index) => (
              <div
                className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm font-black uppercase leading-5 tracking-[0.1em] text-white"
                key={item}
              >
                <span className="mb-3 grid h-9 w-9 place-items-center rounded-md bg-[#ffd84d] text-xs text-black">
                  {index + 1}
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]" id="preview">
        <SectionHeader
          description="Preview visual para mostrar estrutura de equipe. Não há nomes, escudos, elencos, números, posições ou repasses reais nesta fase."
          eyebrow="Preview de equipes"
          title="Interface pronta para equipes reais, quando elas forem validadas."
        />
        <TeamPreviewPanel />
      </PageSection>

      <PageSection id="interesse">
        <SectionHeader
          description="Este formulário é apenas visual no MVP. Ele demonstra o fluxo desejado sem gravar dados, enviar informações ou integrar backend."
          eyebrow="Interesse de equipe"
          title="Registro visual de equipe oficial."
        />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-stretch">
          <Card className="flex min-h-[340px] flex-col" premium>
            <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
              <Lock aria-hidden className="h-6 w-6 text-[#ffd84d]" />
            </span>
            <h3 className="mt-6 text-[clamp(1.9rem,7vw,2.35rem)] font-black uppercase leading-[0.98] text-white">
              Registro será liberado após validação.
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/72">
              Cadastro real de equipe depende de regulamento, política de dados, critérios de elegibilidade e operação ativa.
            </p>
            <div className="mt-6 grid gap-2">
              {teamInterestFlow.map((item, index) => (
                <div
                  className="grid grid-cols-[34px_1fr] items-center gap-3 rounded-md border border-white/10 bg-black/25 px-3 py-3"
                  key={item}
                >
                  <span className="grid h-8 w-8 place-items-center rounded-md bg-[#ffd84d] text-xs font-black text-black">
                    {index + 1}
                  </span>
                  <span className="text-sm font-bold text-white/78">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-auto pt-6 text-xs font-black uppercase leading-5 tracking-[0.14em] text-[#ffe98b]">
              sem envio real, sem login, sem pagamento e sem banco de dados nesta fase
            </p>
          </Card>

          <Card className="p-4 md:p-5">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10">
                <ClipboardList aria-hidden className="h-5 w-5 text-[#ffd84d]" />
              </span>
              <div>
                <h3 className="text-lg font-black uppercase leading-tight text-white">Pré-registro visual</h3>
                <p className="mt-1 text-sm text-white/60">campos bloqueados para evitar coleta real de dados</p>
              </div>
            </div>
            <form aria-label="Formulário visual de interesse de equipe" className="grid gap-3">
              {teamInterestFields.map((field) => (
                <label className="grid gap-2" key={field}>
                  <span className="text-xs font-black uppercase tracking-[0.12em] text-[#ffe98b]">{field}</span>
                  <input
                    className="min-h-12 rounded-lg border border-white/10 bg-black/35 px-4 text-sm text-white/70 outline-none placeholder:text-white/35"
                    placeholder="campo visual em formação"
                    readOnly
                    type="text"
                  />
                </label>
              ))}
              <button
                className="mt-2 min-h-12 cursor-not-allowed rounded-lg border border-[#ffd84d]/25 bg-[#ffd84d]/10 px-5 py-3 text-sm font-extrabold uppercase leading-5 tracking-[0.08em] text-[#ffe98b]/75"
                disabled
                type="button"
              >
                registro será liberado após validação
              </button>
            </form>
          </Card>
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]" id="faq">
        <SectionHeader
          description="Perguntas rápidas para explicar equipes oficiais sem prometer funcionalidades que ainda não existem."
          eyebrow="FAQ Equipes UR"
          title="Antes de registrar, entenda a fase atual."
        />
        <div className="grid gap-3 md:grid-cols-2">
          {teamFaq.map((item) => (
            <details
              className="group rounded-lg border border-white/10 bg-white/[0.04] transition duration-200 open:border-[#ffd84d]/25 open:bg-white/[0.055]"
              key={item.question}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 text-base font-black uppercase leading-tight text-white">
                <span>{item.question}</span>
                <ChevronDown
                  aria-hidden
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#ffd84d] transition duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="px-5 pb-5 text-sm leading-6 text-white/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </PageSection>

      <section className="overflow-hidden border-t border-[#ffd84d]/15 bg-[linear-gradient(135deg,#090a0f,#030405)] px-5 py-12 md:py-16 lg:px-8 lg:py-[72px]">
        <div className="mx-auto max-w-7xl">
          <Card className="grid gap-8 p-5 md:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.52fr)] lg:items-center" premium>
            <div>
              <Badge>CTA Equipes UR</Badge>
              <h2 className="mt-5 max-w-3xl text-[clamp(2.3rem,8vw,3.55rem)] font-black uppercase leading-[0.96] text-white">
                Transforme seu time em uma equipe dentro do ecossistema.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
                A estrutura pública está pronta para orientar capitães e atletas enquanto registro, ranking coletivo,
                elenco, mídia, repasses e temporada passam por validação.
              </p>
            </div>
            <div className="grid gap-3">
              <Button href="#interesse">Registrar interesse visual</Button>
              <Button href="/ranking" variant="secondary">
                Entender ranking
              </Button>
              <Button href="/ur-play" variant="ghost">
                Começar pelo UR Play
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
