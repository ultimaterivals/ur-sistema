import type { Metadata } from "next";
import { ChevronDown, ClipboardCheck, Megaphone } from "lucide-react";
import { PlatformHero } from "@/components/editorial/platform-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { EcosystemFlowPanel } from "@/components/site/ecosystem-flow-panel";
import { IconCard } from "@/components/site/icon-card";
import { PageSection } from "@/components/site/page-section";
import { PartnerActivationCard } from "@/components/site/partner-activation-card";
import { SegmentCtaPanel } from "@/components/site/segment-cta-panel";
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
import { siteImages } from "@/lib/content/site-images";

export const metadata: Metadata = {
  title: "Patrocinadores UR | Marcas, Mídia, Ranking e UR Market Ultimate Rivals",
  description:
    "Conheça as oportunidades para patrocinadores no Ultimate Rivals, um ecossistema esportivo com atletas, equipes, eventos, ranking, mídia, UR Market, CT UR e ativações com dados.",
};

function CommercialInterestPanel() {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch">
      <Card className="flex min-h-[300px] flex-col" premium>
        <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
          <ClipboardCheck aria-hidden className="h-6 w-6 text-[#ffd84d]" />
        </span>
        <h3 className="mt-6 text-[clamp(1.85rem,7vw,2.35rem)] font-black uppercase leading-[0.98] text-white">
          Interesse comercial em triagem.
        </h3>
        <p className="mt-4 text-sm leading-6 text-white/72">
          A central de cadastro registra o interesse comercial. A equipe UR avalia aderência, proposta, polo e próximos
          passos antes de qualquer acordo.
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
          <Badge>Cadastro comercial</Badge>
          <span className="text-xs font-black uppercase tracking-[0.14em] text-white/60">triagem operacional</span>
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
          value="Mensagem comercial enviada para triagem operacional. Proposta, valores e entregas dependem de validação oficial."
        />
        <Button className="mt-4 w-full" href="/cadastro#patrocinador">
          Abrir cadastro comercial
        </Button>
      </Card>
    </div>
  );
}

export default function PatrocinadoresPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <PlatformHero
        actions={[
          { href: "/cadastro#patrocinador", label: "Registrar interesse" },
          { href: "#market", label: "Ver UR Market", variant: "secondary" },
          { href: "#cotas", label: "Modelos de cota", variant: "ghost" },
        ]}
        badges={sponsorHeroBadges}
        description="Patrocinar o Ultimate Rivals é entrar em um ecossistema contínuo com atletas, equipes, ranking, mídia, UR Market, CT UR, quadras e comunidade. Não é só comprar espaço de logo."
        eyebrow="Patrocinadores UR • plataforma comercial esportiva"
        image={siteImages.sponsorActivation}
        imagePosition="center 44%"
        metrics={[
          { label: "Ativação", value: "ranking, mídia, UR Market e comunidade" },
          { label: "Entrega", value: "proposta e aprovação comercial" },
          { label: "Status", value: "cotas em validação" },
        ]}
        statusDescription="Cotas, valores e entregas ficam disponíveis após validação e proposta aprovada oficialmente."
        statusLabel="plataforma comercial"
        statusTitle="Marcas entram na jornada, não só no banner."
        title="Marca dentro da jornada do atleta."
      />

      <PageSection id="nao-e-logo">
        <SectionHeader
          description="O patrocinador certo participa da jornada do atleta, da equipe e da comunidade. A exposição nasce do contexto esportivo, não de um banner isolado."
          eyebrow="Não é só logo"
          title="Patrocínio no UR é presença dentro do ecossistema."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {sponsorNarrativeCards.map((item: SponsorCard, index: number) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
        <p className="mt-8 text-sm font-black uppercase tracking-[0.14em] text-[#ffe98b]">
          O patrocinador certo não aparece apenas no evento. Ele participa da jornada do atleta.
        </p>
      </PageSection>

      <PageSection className="bg-[#07080c]" id="ecossistema">
        <SectionHeader
          description="A marca pode ativar eventos, ranking, UR Market, mídia, CT UR, equipes e comunidade quando houver proposta, validação e operação oficial."
          eyebrow="Acesso ao ecossistema"
          title="Vários pontos de contato, uma narrativa contínua."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ecosystemAccessCards.map((item: SponsorCard, index: number) => (
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
          {activationCards.map((item: SponsorCard, index: number) => (
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
        <EcosystemFlowPanel items={marketRelationshipFlow} cols={4} />
      </PageSection>

      <PageSection id="ranking-midia">
        <SectionHeader
          description="Ranking e mídia transformam a temporada em narrativa: evolução, destaques, rivalidade, viradas e oportunidades recorrentes."
          eyebrow="Ranking e mídia"
          title="Ativos comerciais que vivem além do dia do evento."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {rankingMediaCards.map((item: SponsorCard, index: number) => (
            <IconCard item={item} key={item.title} premium={index === 1} />
          ))}
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {["ranking após validação", "mídia em preparação", "métricas entram após operação validada"].map((item) => (
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
          {eventsCommunityCards.map((item: SponsorCard, index: number) => (
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
              Clínicas, treinos, avaliações e entregas comerciais entram somente após validação operacional e proposta
              aprovada.
            </p>
          </Card>
          <div className="grid gap-3 md:grid-cols-3">
            {ctImpactCards.map((item: SponsorCard) => (
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
          {reportingCards.map((item: SponsorCard, index: number) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
      </PageSection>

      <PageSection id="cotas">
        <SectionHeader
          description="Modelos abaixo são placeholders comerciais. Valores, cotas e entregas reais dependem de proposta, aprovação e validação oficial."
          eyebrow="Modelos de cota"
          title="Estrutura comercial em validação, sem valores inventados."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {quotaModels.map((quota, index) => (
            <PartnerActivationCard item={quota} key={quota.label} premium={index === 1} />
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]" id="interesse">
        <SectionHeader
          description="Registro de interesse comercial pela central oficial. Proposta, valores, entregas, contratos e ativações dependem de validação."
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

      <SegmentCtaPanel
        description="A página comercial fica pronta como estrutura pública enquanto cotas, valores, entregas, relatórios e marcas reais passam por proposta e aprovação oficial."
        eyebrow="CTA Patrocinadores UR"
        items={["mídia", "ranking", "UR Market", "eventos"]}
        statusLabel="proposta comercial sob validação"
        title="Entre na jornada do atleta, não apenas no espaço do evento."
        actions={
          <>
            <Button href="/cadastro#patrocinador">Registrar interesse</Button>
            <Button href="/ur-market" variant="secondary">
              Ver UR Market
            </Button>
            <Button href="/ranking" variant="ghost">
              Entender ranking
            </Button>
          </>
        }
      />
    </main>
  );
}
