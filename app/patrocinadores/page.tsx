import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, Building2, ChevronDown, ClipboardCheck, Handshake, Megaphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import type { SponsorCard } from "@/lib/content/patrocinadores";
import {
  activationCards,
  commercialFormFields,
  commercialInterestFlow,
  ctImpactCards,
  ecosystemAccessCards,
  eventsCommunityCards,
  marketRelationshipFlow,
  quotaModels,
  rankingMediaCards,
  reportingCards,
  sponsorFaq,
  sponsorHeroBadges,
  sponsorNarrativeCards,
} from "@/lib/content/patrocinadores";

export const metadata: Metadata = {
  title: "Patrocinadores UR | Marcas, Mídia, Ranking e UR Market Ultimate Rivals",
  description:
    "Conheça as oportunidades para patrocinadores no Ultimate Rivals, um ecossistema esportivo com atletas, equipes, eventos, ranking, mídia, UR Market, CT UR e ativações com dados.",
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

function IconCard({ item, premium = false }: { item: SponsorCard; premium?: boolean }) {
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

function MarketRelationshipPanel() {
  return (
    <Card className="p-4 md:p-6" premium>
      <div className="grid gap-3 md:grid-cols-4">
        {marketRelationshipFlow.map((item, index) => (
          <div className="relative rounded-lg border border-white/10 bg-black/25 p-4" key={item.label}>
            {index < marketRelationshipFlow.length - 1 ? (
              <ArrowRight
                aria-hidden
                className="absolute -right-4 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-[#ffd84d] md:block"
              />
            ) : null}
            <span className="grid h-9 w-9 place-items-center rounded-md bg-[#ffd84d] text-xs font-black text-black">
              {index + 1}
            </span>
            <h3 className="mt-4 text-base font-black uppercase leading-tight text-white">{item.label}</h3>
            <p className="mt-3 text-sm leading-6 text-white/68">{item.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

function QuotaModelsPanel() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {quotaModels.map((quota, index) => (
        <Card className="flex min-h-[310px] flex-col p-4 md:p-5" key={quota.label} premium={index === 1}>
          <div className="flex items-start justify-between gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10">
              <Building2 aria-hidden className="h-5 w-5 text-[#ffd84d]" />
            </span>
            <span className="rounded-md border border-[#ffd84d]/20 px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#ffe98b]">
              {quota.status}
            </span>
          </div>
          <h3 className="mt-5 text-xl font-black uppercase leading-tight text-white">{quota.label}</h3>
          <p className="mt-3 text-sm leading-6 text-white/70">{quota.description}</p>
          <div className="mt-5 space-y-2">
            {quota.items.map((item) => (
              <span
                className="block rounded-md border border-white/10 bg-black/25 px-3 py-2 text-xs font-black uppercase leading-5 tracking-[0.1em] text-white/75"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}

function CommercialInterestPanel() {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch">
      <Card className="flex min-h-[300px] flex-col" premium>
        <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
          <ClipboardCheck aria-hidden className="h-6 w-6 text-[#ffd84d]" />
        </span>
        <h3 className="mt-6 text-[clamp(1.85rem,7vw,2.35rem)] font-black uppercase leading-[0.98] text-white">
          Interesse comercial sem envio real.
        </h3>
        <p className="mt-4 text-sm leading-6 text-white/72">
          Este bloco demonstra a etapa de conversa comercial. Não há backend, CRM, pagamento, contrato ou formulário
          funcional nesta fase.
        </p>
        <div className="mt-5 grid gap-2">
          {commercialInterestFlow.map((item, index) => (
            <div
              className="grid grid-cols-[36px_1fr] items-center gap-3 rounded-lg border border-white/10 bg-black/25 p-3"
              key={item}
            >
              <span className="grid h-8 w-8 place-items-center rounded-md bg-[#ffd84d] text-xs font-black text-black">
                {index + 1}
              </span>
              <span className="text-xs font-black uppercase leading-5 tracking-[0.1em] text-white/78">{item}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4 md:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Badge>Formulário visual</Badge>
          <span className="text-xs font-black uppercase tracking-[0.14em] text-white/60">sem backend real</span>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {commercialFormFields.map((field) => (
            <label className="block" key={field.label}>
              <span className="text-xs font-black uppercase tracking-[0.14em] text-[#ffe98b]">{field.label}</span>
              <input
                className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-black/35 px-4 text-sm font-bold text-white/74 outline-none"
                readOnly
                value={field.value}
              />
            </label>
          ))}
        </div>
        <textarea
          className="mt-4 min-h-28 w-full resize-none rounded-lg border border-white/10 bg-black/35 p-4 text-sm font-bold leading-6 text-white/74 outline-none"
          readOnly
          value="Mensagem comercial será estruturada após contato oficial. Este MVP não envia dados."
        />
        <button
          className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-[#ffd84d]/25 bg-[#ffd84d]/10 px-5 py-3 text-center text-sm font-extrabold uppercase leading-5 tracking-[0.08em] text-[#ffe98b]"
          disabled
          type="button"
        >
          Envio será liberado após validação
        </button>
      </Card>
    </div>
  );
}

export default function PatrocinadoresPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <section className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,#090a0f_0%,#030405_100%)] px-5 py-10 md:py-12 lg:px-8 lg:py-14">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
          <div className="min-w-0 text-center lg:text-left">
            <Badge>Patrocinadores UR • plataforma comercial esportiva</Badge>
            <h1 className="mx-auto mt-4 max-w-4xl text-balance text-[clamp(2.75rem,10vw,4rem)] font-black uppercase leading-[0.94] tracking-normal text-white md:text-[clamp(3.45rem,6vw,5rem)] lg:mx-0">
              Marca dentro da jornada do atleta.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8 lg:mx-0">
              Patrocinar o Ultimate Rivals é entrar em um ecossistema contínuo com atletas, equipes, eventos, ranking,
              mídia, UR Market, CT UR e comunidade. Não é só comprar espaço de logo.
            </p>
            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
              <Button href="/cadastro#patrocinador">
                Registrar interesse
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
              <Button href="#market" variant="secondary">
                Ver UR Market
              </Button>
              <Button href="#cotas" variant="ghost">
                Modelos de cota
              </Button>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {sponsorHeroBadges.map((item) => (
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
                  <Handshake aria-hidden className="h-6 w-6 text-[#ffd84d]" />
                </span>
                <span className="rounded-md border border-[#ffd84d]/20 px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#ffe98b]">
                  marcas entram após aprovação
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
                <div className="text-xs font-black uppercase tracking-[0.16em] text-[#ffe98b]">
                  Plataforma comercial
                </div>
                <div className="mt-2 text-2xl font-black uppercase leading-none text-white">cotas em formação</div>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Sem marcas, contratos, valores, alcance, entregas comerciais ou métricas reais nesta etapa.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <PageSection id="nao-e-logo">
        <SectionHeader
          description="O patrocinador certo participa da jornada do atleta, da equipe e da comunidade. A exposição nasce do contexto esportivo, não de um banner isolado."
          eyebrow="Não é só logo"
          title="Patrocínio no UR é presença dentro do ecossistema."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {sponsorNarrativeCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]" id="ecossistema">
        <SectionHeader
          description="A marca pode ativar eventos, ranking, UR Market, mídia, CT UR, equipes e comunidade quando houver proposta, validação e operação oficial."
          eyebrow="Acesso ao ecossistema"
          title="Vários pontos de contato, uma narrativa contínua."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ecosystemAccessCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 4} />
          ))}
        </div>
      </PageSection>

      <PageSection id="ativacoes">
        <SectionHeader
          description="As ativações comerciais são possibilidades de desenho. Nenhuma marca, contrato, entrega, data, valor ou alcance real foi inventado."
          eyebrow="Ativações possíveis"
          title="Marca com função real na experiência, no conteúdo e no benefício."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {activationCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 1} />
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[linear-gradient(180deg,#030405,#08090d)]" id="market">
        <SectionHeader
          action={
            <Button href="/ur-market" variant="secondary">
              Conhecer UR Market
            </Button>
          }
          description="UR Market permite que a marca entregue benefícios reais para atletas e comunidade, conectando UR Coins, desempenho, ranking e relacionamento."
          eyebrow="UR Market comercial"
          title="Benefício é uma forma mais forte de patrocínio."
        />
        <MarketRelationshipPanel />
      </PageSection>

      <PageSection id="ranking-midia">
        <SectionHeader
          description="Ranking e mídia transformam a temporada em narrativa: evolução, destaques, rivalidade, viradas e oportunidades recorrentes."
          eyebrow="Ranking e mídia"
          title="Ativos comerciais que vivem além do dia do evento."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {rankingMediaCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 1} />
          ))}
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {["ranking em formação", "mídia em construção", "métricas entram após operação validada"].map((item) => (
            <span
              className="rounded-lg border border-[#ffd84d]/20 bg-[#ffd84d]/10 px-4 py-3 text-xs font-black uppercase leading-5 tracking-[0.12em] text-[#ffe98b]"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]" id="eventos-comunidade">
        <SectionHeader
          description="Eventos e polos criam presença territorial e comunidade recorrente, sempre com agenda, entregas e operação validadas antes de qualquer promessa comercial."
          eyebrow="Eventos, polos e comunidade"
          title="A marca participa de momentos que organizam o esporte local."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {eventsCommunityCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 1} />
          ))}
        </div>
      </PageSection>

      <PageSection id="ct-ur">
        <SectionHeader
          description="CT UR amplia a conversa comercial para desenvolvimento de atletas, avaliação, performance e oportunidade, sem criar serviço real nesta etapa."
          eyebrow="CT UR"
          title="Patrocínio também pode apoiar evolução esportiva."
        />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-stretch">
          <Card className="flex min-h-[258px] flex-col" premium>
            <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
              <Megaphone aria-hidden className="h-6 w-6 text-[#ffd84d]" />
            </span>
            <h3 className="mt-6 text-[clamp(1.9rem,7vw,2.45rem)] font-black uppercase leading-[0.98] text-white">
              Impacto esportivo com validação.
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/72">
              Nenhuma clínica, treino, avaliação, agenda ou entrega comercial real é prometida antes de validação
              operacional.
            </p>
          </Card>
          <div className="grid gap-3 md:grid-cols-3">
            {ctImpactCards.map((item) => (
              <IconCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className="bg-[linear-gradient(180deg,#030405,#08090d)]" id="metricas">
        <SectionHeader
          description="Relatórios e dados só fazem sentido quando a operação existe. O MVP comunica a intenção sem inventar alcance, público, conversão ou performance."
          eyebrow="Relatórios e métricas"
          title="Dados comerciais entram depois da operação validada."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {reportingCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
      </PageSection>

      <PageSection id="cotas">
        <SectionHeader
          description="Modelos abaixo são placeholders comerciais. Valores, cotas e entregas reais dependem de proposta, aprovação e validação oficial."
          eyebrow="Modelos de cota"
          title="Estrutura comercial em formação, sem valores inventados."
        />
        <QuotaModelsPanel />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="interesse">
        <SectionHeader
          description="Registro de interesse comercial visual para explicar o fluxo. Não há envio real, CRM, backend, contrato, pagamento ou integração."
          eyebrow="Interesse comercial"
          title="Primeiro a marca conversa. Depois a proposta valida."
        />
        <CommercialInterestPanel />
      </PageSection>

      <PageSection id="faq">
        <SectionHeader
          description="Perguntas rápidas para deixar claro o potencial comercial sem prometer cotas, valores, marcas ou métricas reais."
          eyebrow="FAQ comercial"
          title="Antes da proposta, entenda a fase atual."
        />
        <div className="grid gap-3 md:grid-cols-2">
          {sponsorFaq.map((item) => (
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
              <Badge>CTA Patrocinadores UR</Badge>
              <h2 className="mt-5 max-w-3xl text-[clamp(2.3rem,8vw,3.55rem)] font-black uppercase leading-[0.96] text-white">
                Entre na jornada do atleta, não apenas no espaço do evento.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
                A página comercial fica pronta como estrutura pública enquanto cotas, valores, entregas, relatórios e
                marcas reais passam por proposta e aprovação oficial.
              </p>
            </div>
            <div className="grid gap-3">
              <Button href="/cadastro#patrocinador">Registrar interesse</Button>
              <Button href="/ur-market" variant="secondary">
                Ver UR Market
              </Button>
              <Button href="/ranking" variant="ghost">
                Entender ranking
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
