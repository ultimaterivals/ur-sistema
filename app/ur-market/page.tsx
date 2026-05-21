import type { Metadata } from "next";
import { ChevronDown, Lock, ShoppingBag } from "lucide-react";
import { PlatformHero } from "@/components/editorial/platform-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { EcosystemFlowPanel } from "@/components/site/ecosystem-flow-panel";
import { IconCard } from "@/components/site/icon-card";
import { PageSection } from "@/components/site/page-section";
import { RewardPreviewCard } from "@/components/site/reward-preview-card";
import { SegmentCtaPanel } from "@/components/site/segment-cta-panel";
import type { MarketCard } from "@/lib/content/ur-market";
import {
  athleteMarketBenefits,
  coinMechanicsCards,
  ecosystemRelationCards,
  marketFaq,
  marketHeroBadges,
  marketIntroCards,
  marketShowcaseItems,
  performanceBenefitFlow,
  redeemFlow,
  rewardCategories,
  sponsorMarketBenefits,
  teamMarketBenefits,
} from "@/lib/content/ur-market";
import { siteImages } from "@/lib/content/site-images";

export const metadata: Metadata = {
  title: "UR Market | Recompensas, UR Coins e Benefícios Ultimate Rivals",
  description:
    "Conheça o UR Market, a vitrine de recompensas do Ultimate Rivals onde UR Coins, desempenho, ranking, patrocinadores e benefícios se conectam ao ecossistema esportivo.",
};

function ShowcasePanel() {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
      <Card className="p-4 md:p-6" premium>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Badge>Vitrine do Market</Badge>
          <span className="text-xs font-black uppercase tracking-[0.14em] text-white/60">vitrine inicial em preparação</span>
        </div>
        <div className="mt-6 space-y-3">
          {marketShowcaseItems.map((item, index) => (
            <RewardPreviewCard index={index} item={item} key={item.title} />
          ))}
        </div>
      </Card>

      <div className="grid gap-3 sm:grid-cols-2">
        {marketHeroBadges.slice(0, 4).map((item) => (
          <Card className="min-h-[132px] p-4 md:p-5" key={item}>
            <span className="grid h-10 w-10 place-items-center rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10">
              <ShoppingBag aria-hidden className="h-5 w-5 text-[#ffd84d]" />
            </span>
            <h3 className="mt-3 text-sm font-black uppercase leading-tight tracking-[0.08em] text-white">{item}</h3>
            <p className="mt-2 text-sm text-white/65">disponível após validação oficial</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default function URMarketPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <PlatformHero
        actions={[
          { href: "#vitrine", label: "Ver vitrine" },
          { href: "/cadastro#patrocinador", label: "Entrar como patrocinador", variant: "secondary" },
          { href: "/ranking", label: "Relação com ranking", variant: "ghost" },
        ]}
        badges={marketHeroBadges}
        description="UR Market é a vitrine de recompensas do ecossistema: UR Coins, ranking, desempenho, patrocinadores, produtos, serviços, CT UR e experiências conectados à comunidade esportiva."
        eyebrow="UR Market • recompensas e UR Coins"
        image={siteImages.mediaCoverage}
        imagePosition="center 42%"
        metrics={[
          { label: "Moeda", value: "UR Coins com regras oficiais futuras" },
          { label: "Vitrine", value: "benefícios em preparação" },
          { label: "Status", value: "sem checkout nesta fase" },
        ]}
        statusDescription="Produtos, benefícios, valores e checkout ficam disponíveis após validação e operação oficial."
        statusLabel="mercado de oportunidades"
        statusTitle="Onde desempenho pode virar benefício."
        title="Recompensas conectadas à jornada esportiva."
      />

      <PageSection id="o-que-e">
        <SectionHeader
          description="UR Market é o mercado interno planejado para transformar participação e desempenho em oportunidades de recompensa."
          eyebrow="O que é"
          title="A vitrine de benefícios do ecossistema Ultimate Rivals."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {marketIntroCards.map((item: MarketCard, index: number) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]" id="desempenho-beneficio">
        <SectionHeader
          description="A lógica é simples: participação gera dados, dados validados podem gerar UR Coins, e UR Coins podem se conectar a benefícios."
          eyebrow="Desempenho vira benefício"
          title="Valor para quem participa, evolui e volta ao ciclo."
        />
        <EcosystemFlowPanel items={performanceBenefitFlow} cols={4} />
        <p className="mt-8 text-sm font-black uppercase tracking-[0.14em] text-[#ffe98b]">
          No UR, resultado não acaba no apito final. Ele continua no ranking, no mercado e nas oportunidades.
        </p>
      </PageSection>

      <PageSection id="ur-coins">
        <SectionHeader
          description="UR Coins aparecem como conceito interno. Não existe saldo, carteira, pagamento, checkout ou valor real nesta fase."
          eyebrow="UR Coins no Market"
          title="Moeda interna planejada, valores oficiais depois."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {coinMechanicsCards.map((item: MarketCard, index: number) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[linear-gradient(180deg,#030405,#08090d)]" id="categorias">
        <SectionHeader
          description="Categorias possíveis incluem produtos, serviços, descontos, experiências, CT UR e ativações de patrocinadores."
          eyebrow="Categorias de recompensas"
          title="Benefícios diversos, todos sujeitos a validação oficial."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rewardCategories.map((item: MarketCard, index: number) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
      </PageSection>

      <PageSection id="atletas">
        <SectionHeader
          description="Para atletas, o Market reforça retenção e recorrência: competir, evoluir, acompanhar ranking e buscar recompensas futuras."
          eyebrow="Benefícios para atletas"
          title="Mais motivos para voltar ao ciclo."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {athleteMarketBenefits.map((item: MarketCard, index: number) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]" id="equipes">
        <SectionHeader
          description="Equipes podem transformar presença coletiva, ranking e engajamento em benefícios planejados para o grupo."
          eyebrow="Benefícios para equipes"
          title="Recompensas coletivas fortalecem elenco e identidade."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {teamMarketBenefits.map((item: MarketCard, index: number) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
      </PageSection>

      <PageSection id="patrocinadores">
        <SectionHeader
          action={
            <Button href="/cadastro#patrocinador" variant="secondary">
              Ver patrocinadores
            </Button>
          }
          description="Patrocinadores podem oferecer benefícios reais para atletas, equipes e comunidade quando forem aprovados oficialmente."
          eyebrow="Benefícios para patrocinadores"
          title="Marca deixa de ser banner e passa a entregar valor."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {sponsorMarketBenefits.map((item: MarketCard, index: number) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]" id="vitrine">
        <SectionHeader
          description="A vitrine mostra a estrutura planejada. Nenhum produto, marca, preço, saldo, benefício ou patrocinador real foi inventado."
          eyebrow="Vitrine do Market"
          title="Market pronto para itens reais, quando eles forem aprovados."
        />
        <ShowcasePanel />
      </PageSection>

      <PageSection id="resgate">
        <SectionHeader
          description="O fluxo de resgate será liberado após validação operacional, regras de UR Coins, itens aprovados e estrutura oficial de atendimento."
          eyebrow="Fluxo de resgate"
          title="Resgate real só depois de validação e operação ativa."
        />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-stretch">
          <Card className="flex min-h-[250px] flex-col" premium>
            <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
              <Lock aria-hidden className="h-6 w-6 text-[#ffd84d]" />
            </span>
            <h3 className="mt-6 text-[clamp(1.9rem,7vw,2.35rem)] font-black uppercase leading-[0.98] text-white">
              Resgate disponível após operação validada.
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/72">
              A página demonstra o conceito sem coletar dados, sem vender produtos e sem gerar transações.
            </p>
          </Card>
          <div className="grid gap-3 sm:grid-cols-4">
            {redeemFlow.map((item, index) => (
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

      <PageSection className="bg-[linear-gradient(180deg,#030405,#08090d)]" id="ecossistema">
        <SectionHeader
          description="Market fortalece retenção, engajamento e recorrência porque conecta benefícios a Ranking, Temporada, UR Play e CT UR."
          eyebrow="Relação com o ecossistema"
          title="Benefício bom faz o atleta voltar."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {ecosystemRelationCards.map((item: MarketCard, index: number) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
      </PageSection>

      <PageSection id="faq">
        <SectionHeader
          description="Perguntas rápidas para explicar o Market sem prometer produto, preço, marca ou checkout real."
          eyebrow="FAQ UR Market"
          title="Antes de resgatar, entenda a fase atual."
        />
        <div className="grid gap-3 md:grid-cols-2">
          {marketFaq.map((item) => (
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
        description="Market fica pronto como estrutura pública enquanto produtos, patrocinadores, UR Coins, resgates e benefícios passam por validação oficial."
        eyebrow="CTA UR Market"
        items={["UR Coins", "benefícios aprovados", "vitrine em preparação"]}
        statusLabel="benefícios após aprovação operacional"
        title="Conecte desempenho, ranking e benefícios em uma mesma jornada."
        actions={
          <>
            <Button href="/ranking">Entender ranking</Button>
            <Button href="/cadastro#patrocinador" variant="secondary">
              Quero patrocinar
            </Button>
            <Button href="/cadastro#atleta" variant="ghost">
              Começar pelo UR Play
            </Button>
          </>
        }
      />
    </main>
  );
}
