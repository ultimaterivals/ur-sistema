import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  RewardArtCard,
  SeasonAccordion,
  SeasonBenefitGrid,
  SeasonInfoCard,
  SeasonJourney,
  SeasonPageHero,
  SeasonSection,
} from "@/components/season";
import { siteImages } from "@/lib/content/site-images";
import {
  athleteMarketBenefits,
  coinMechanicsCards,
  ecosystemRelationCards,
  marketFaq,
  marketIntroCards,
  performanceBenefitFlow,
  rewardCategories,
  sponsorMarketBenefits,
  teamMarketBenefits,
} from "@/lib/content/ur-market";

export const metadata: Metadata = {
  title: "UR Market | UR Coins, Benefícios e Recompensas Ultimate Rivals",
  description:
    "UR Market e a vitrine de benefícios aprovados do Ultimate Rivals, conectando presença, mérito, UR Coins, patrocinadores e experiências com regras oficiais.",
};

const marketCards = [
  {
    title: "UR Coins",
    description: "Pontos internos que conectam presença, desempenho e participação a possibilidades futuras.",
    icon: "/season-1/symbols/ur-coins-line.svg",
  },
  {
    title: "UR Market",
    description: "Catálogo em expansão com benefícios aprovados e sujeitos a disponibilidade.",
    icon: "/season-1/symbols/ur-play-line.svg",
  },
  {
    title: "Produtos oficiais",
    description: "Itens da temporada podem entrar no catálogo quando houver regra e estoque confirmados.",
    icon: "/season-1/cards-preview/product-card-play.svg",
  },
  {
    title: "Performance",
    description: "Serviços de fisio, nutrição, treino e avaliação dependem de parceiros aprovados.",
    icon: "/season-1/symbols/ur-sprint-line.svg",
  },
  {
    title: "Patrocinadores",
    description: "Marcas podem oferecer produtos e serviços conectados à jornada esportiva.",
    icon: "/season-1/symbols/ur-series-line.svg",
  },
  {
    title: "Experiências",
    description: "Acesso, prioridade e ações especiais entram apenas com disponibilidade e regra pública.",
    icon: "/season-1/symbols/ur-legends-line.svg",
  },
] as const;

const marketFlowSteps = performanceBenefitFlow.map(({ label, description }) => ({
  label,
  title: label,
  description,
}));

export default function URMarketPage() {
  return (
    <main className="bg-[#0A0A0B] text-[#F4F0E6]">
      <SeasonPageHero
        actions={[
          { href: "#catalogo", label: "Conhecer benefícios" },
          { href: "/cadastro#atleta", label: "Entrar na temporada", variant: "secondary" },
        ]}
        badges={["UR Coins", "benefícios aprovados", "catálogo em expansão", "regras oficiais"]}
        description="O UR Market conecta participação, mérito e parceiros em um sistema de benefícios controlado, progressivo e sustentável."
        eyebrow="Consequência da temporada"
        image={siteImages.mediaCoverage}
        imagePosition="center 45%"
        stats={[
          { label: "moeda", value: "UR Coins" },
          { label: "status", value: "em expansão" },
          { label: "regra", value: "oficial" },
        ]}
        title="Recompensas que acompanham a jornada."
      />

      <SeasonSection
        description="UR Coins, produtos e serviços não são o motivo principal para entrar. Eles são uma consequência da participação e da evolução dentro do ecossistema."
        eyebrow="Catálogo em expansão"
        id="catalogo"
        title="Benefícios com critério, não promessa."
      >
        <p
          className="mb-5 text-xs font-bold uppercase leading-5 tracking-[0.12em] text-[#D4A437]/75"
          style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
        >
          Todos os benefícios dependem de disponibilidade, parceiros ativos, regras oficiais e validação operacional.
        </p>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {marketCards.map((card) => (
            <SeasonInfoCard
              description={card.description}
              icon={card.icon}
              key={card.title}
              title={card.title}
            />
          ))}
        </div>
      </SeasonSection>

      <SeasonSection
        description="A explicação antiga sobre vitrine, UR Coins e patrocinadores volta para deixar claro que o Market é canal de possibilidades, não promessa de resgate."
        eyebrow="Como o Market funciona"
        id="como-funciona"
        title="Benefício aprovado precisa de regra."
        variant="raised"
      >
        <SeasonBenefitGrid items={marketIntroCards} />
      </SeasonSection>

      <SeasonSection
        description="Presença e desempenho podem virar leitura de benefício apenas quando existirem critérios oficiais, saldo definido e disponibilidade aprovada."
        eyebrow="Fluxo de valor"
        id="fluxo"
        title="Participação, critério, UR Coins e benefícios."
      >
        <SeasonJourney steps={marketFlowSteps} />
      </SeasonSection>

      <SeasonSection
        description="UR Coins ainda não são carteira real. Elas organizam uma lógica futura de reconhecimento por presença, ranking, missões e engajamento validado."
        eyebrow="UR Coins"
        id="coins"
        title="Moeda interna em formação."
        variant="raised"
      >
        <SeasonBenefitGrid items={coinMechanicsCards} />
      </SeasonSection>

      <SeasonSection
        description="Produtos oficiais, serviços de performance, experiências, mídia e recompensas entram somente após aprovação, estoque, regra e parceiro confirmados."
        eyebrow="Categorias"
        id="categorias"
        title="O que pode entrar no catálogo."
      >
        <SeasonBenefitGrid items={rewardCategories} />
      </SeasonSection>

      <SeasonSection
        description="Repasses e premiações não são promessa. Eles dependem de caixa, margem, confirmação e regra oficial."
        eyebrow="Economia responsável"
        id="regras"
        title="Valor só entra quando a operação sustenta."
        variant="raised"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <RewardArtCard
            description="Moedas internas de reconhecimento e acesso a benefícios aprovados."
            icon="/season-1/symbols/ur-coins-line.svg"
            title="UR Coins"
          />
          <RewardArtCard
            description="Produtos, serviços e experiências entram com disponibilidade confirmada."
            icon="/season-1/symbols/ur-play-line.svg"
            title="Benefícios aprovados"
          />
          <RewardArtCard
            description="Marcas podem entrar na jornada com ofertas úteis para atletas."
            icon="/season-1/symbols/ur-series-line.svg"
            title="Patrocinadores"
          />
          <RewardArtCard
            description="Repasses dependem de caixa, margem, confirmação e regra oficial."
            icon="/season-1/symbols/ur-legends-line.svg"
            title="Repasses sustentáveis"
            note="Nada automático ou garantido nesta etapa."
          />
        </div>
      </SeasonSection>

      <SeasonSection
        description="Atletas, equipes e patrocinadores entram no Market por razões diferentes. O ponto comum é utilidade real com regra clara."
        eyebrow="Por público"
        id="publicos"
        title="Benefício precisa fazer sentido para quem participa."
      >
        <div className="grid gap-5">
          <SeasonBenefitGrid columns={2} items={athleteMarketBenefits} />
          <SeasonBenefitGrid columns={2} items={teamMarketBenefits} />
          <SeasonBenefitGrid columns={2} items={sponsorMarketBenefits} />
        </div>
      </SeasonSection>

      <SeasonSection
        description="O Market se conecta a ranking, temporada, UR Play e CT UR para criar recorrência sem prometer prêmio automático."
        eyebrow="Ecossistema"
        id="ecossistema"
        title="O catálogo não vive separado da temporada."
        variant="raised"
      >
        <SeasonBenefitGrid columns={4} items={ecosystemRelationCards} />
      </SeasonSection>

      <SeasonSection
        description="Regras preservadas para não prometer produto, saldo, resgate ou retorno financeiro sem validação."
        eyebrow="Dúvidas rápidas"
        id="faq"
        title="O que existe, o que é futuro e o que depende de regra."
      >
        <SeasonAccordion items={marketFaq} />
      </SeasonSection>

      <SeasonSection id="cta" title="O UR Market cresce junto com a temporada.">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/cadastro#atleta">Entrar na temporada</Button>
          <Button href="/cadastro#patrocinador" variant="secondary">
            Oferecer benefício
          </Button>
        </div>
      </SeasonSection>
    </main>
  );
}
