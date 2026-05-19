import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, ChevronDown, Coins, Lock, ShoppingBag } from "lucide-react";
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
      <section className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,#090a0f_0%,#030405_100%)] px-5 py-10 md:py-12 lg:px-8 lg:py-14">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
          <div className="min-w-0 text-center lg:text-left">
            <Badge>UR Market • recompensas e UR Coins</Badge>
            <h1 className="mx-auto mt-4 max-w-4xl text-balance text-[clamp(2.75rem,10vw,4rem)] font-black uppercase leading-[0.94] tracking-normal text-white md:text-[clamp(3.45rem,6vw,5rem)] lg:mx-0">
              Onde desempenho pode virar benefício.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8 lg:mx-0">
              UR Market é a vitrine de recompensas do ecossistema: UR Coins, ranking, desempenho,
              patrocinadores, produtos, serviços, CT UR e experiências conectados à comunidade esportiva.
            </p>
            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
              <Button href="#vitrine">
                Ver vitrine
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
              <Button href="/cadastro#patrocinador" variant="secondary">
                Entrar como patrocinador
              </Button>
              <Button href="/ranking" variant="ghost">
                Relação com ranking
              </Button>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {marketHeroBadges.map((item) => (
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
                  <Coins aria-hidden className="h-6 w-6 text-[#ffd84d]" />
                </span>
                <span className="rounded-md border border-[#ffd84d]/20 px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#ffe98b]">
                  valores em UR Coins serão definidos oficialmente
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
                <div className="text-xs font-black uppercase tracking-[0.16em] text-[#ffe98b]">UR Market</div>
                <div className="mt-2 text-2xl font-black uppercase leading-none text-white">vitrine em preparação</div>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Produtos, benefícios e checkout disponíveis após validação e operação oficial.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

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
