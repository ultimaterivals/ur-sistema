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
  activationCards,
  ecosystemAccessCards,
  eventsCommunityCards,
  marketRelationshipFlow,
  quotaModels,
  rankingMediaCards,
  reportingCards,
  sponsorFaq,
  sponsorNarrativeCards,
} from "@/lib/content/patrocinadores";

export const metadata: Metadata = {
  title: "Patrocinadores UR | Marca, Mídia, Eventos e UR Market",
  description:
    "Patrocinadores Ultimate Rivals podem entrar na jornada esportiva com mídia oficial, eventos, UR Market, ativações nos polos, recompensas e conteúdo.",
};

const commercialCards = [
  {
    title: "Mídia oficial",
    description: "Marca integrada a conteúdo, bastidores, histórias e cobertura da temporada.",
    icon: "/season-1/symbols/ur-series-line.svg",
  },
  {
    title: "Eventos",
    description: "Presença em etapas, ações de quadra e experiências com público esportivo.",
    icon: "/season-1/symbols/ur-sprint-line.svg",
  },
  {
    title: "UR Market",
    description: "Produtos e serviços podem entrar como benefícios aprovados para atletas.",
    icon: "/season-1/symbols/ur-coins-line.svg",
  },
  {
    title: "Ativações nos polos",
    description: "BH, Betim e Contagem criam contexto local para relacionamento.",
    icon: "/season-1/symbols/forca-dos-polos-line.svg",
  },
  {
    title: "Recompensas",
    description: "Benefícios para atletas entram com regra, estoque, critério e disponibilidade.",
    icon: "/season-1/badges/badge-atleta-evolucao.svg",
  },
  {
    title: "Dados e presença",
    description: "Relatórios só devem usar dados confirmados, sem prometer audiência ou ROI sem base.",
    icon: "/season-1/badges/badge-top-ranking.svg",
  },
] as const;

const marketFlowSteps = marketRelationshipFlow.map(({ label, description }) => ({
  label,
  title: label,
  description,
}));

const quotaCards = quotaModels.map(({ label, status, description }) => ({
  label: status,
  title: label,
  description,
}));

export default function PatrocinadoresPage() {
  return (
    <main className="bg-[#0A0A0B] text-[#F4F0E6]">
      <SeasonPageHero
        actions={[
          { href: "/cadastro#patrocinador", label: "Quero patrocinar" },
          { href: "/midia", label: "Ver Mídia UR", variant: "secondary" },
        ]}
        badges={["mídia", "eventos", "UR Market", "polos", "conteúdo", "benefícios"]}
        description="Sua marca entra dentro da jornada esportiva: atleta, ranking, mídia, eventos, polos e benefícios com critério."
        eyebrow="Proposta comercial"
        image={siteImages.sponsorActivation}
        imagePosition="center 45%"
        stats={[
          { label: "ativo", value: "mídia" },
          { label: "presença", value: "eventos" },
          { label: "canal", value: "UR Market" },
        ]}
        title="Sua marca dentro da temporada."
      />

      <SeasonSection
        description="O patrocinador entra melhor quando cria utilidade para atleta, comunidade e operação."
        eyebrow="Ativos comerciais"
        id="ativos"
        title="Marca não é só logo."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {commercialCards.map((card) => (
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
        description="A versão histórica deixava claro: a marca entra na jornada do atleta, não apenas em um espaço de logo."
        eyebrow="Posicionamento"
        id="posicionamento"
        title="Jornada, ativo competitivo e comunidade."
        variant="raised"
      >
        <SeasonBenefitGrid items={sponsorNarrativeCards} />
      </SeasonSection>

      <SeasonSection
        description="A marca pode aparecer conectada a UR Play, ranking, equipes, mídia, Market, CT UR, polos e eventos conforme proposta aprovada."
        eyebrow="Acesso ao ecossistema"
        id="ecossistema"
        title="A temporada dá contexto para a presença comercial."
      >
        <SeasonBenefitGrid columns={4} items={ecosystemAccessCards} />
      </SeasonSection>

      <SeasonSection
        description="Produtos e serviços de patrocinadores podem virar benefícios no UR Market quando aprovados pela UR."
        eyebrow="UR Market"
        id="market"
        title="Benefício bom entra com regra."
        variant="raised"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <RewardArtCard
            description="Marcas podem oferecer produtos, serviços e experiências conectadas à temporada."
            icon="/season-1/symbols/ur-coins-line.svg"
            title="Produtos e serviços"
          />
          <RewardArtCard
            description="Toda oferta precisa respeitar disponibilidade, regra oficial e comunicação clara."
            icon="/season-1/symbols/ur-play-line.svg"
            title="Benefícios aprovados"
          />
          <RewardArtCard
            description="Conteúdo, eventos e ativações ampliam presença sem prometer métricas não validadas."
            icon="/season-1/symbols/ur-series-line.svg"
            title="Conteúdo e presença"
          />
        </div>
      </SeasonSection>

      <SeasonSection
        description="Benefícios entram no Market quando a entrega é real, analisada comercialmente e comunicada com regra oficial."
        eyebrow="Relação com o Market"
        id="fluxo-market"
        title="Benefício aprovado vira relacionamento."
      >
        <SeasonJourney steps={marketFlowSteps} />
      </SeasonSection>

      <SeasonSection
        description="Eventos, mídia, UR Market, polos, equipes e desafios podem virar ativações, sempre sem prometer métricas ou ROI sem dados reais."
        eyebrow="Ativações"
        id="ativacoes"
        title="Marca aparece melhor quando participa da experiência."
        variant="raised"
      >
        <SeasonBenefitGrid items={activationCards} />
      </SeasonSection>

      <SeasonSection
        description="Ranking, mídia, eventos e comunidade criam leitura comercial futura, mas relatórios e métricas dependem de dados confirmados."
        eyebrow="Mídia e dados"
        id="dados"
        title="Sem número inventado. Com contexto real."
      >
        <div className="grid gap-5 xl:grid-cols-2">
          <SeasonBenefitGrid columns={2} items={rankingMediaCards} />
          <SeasonBenefitGrid columns={2} items={eventsCommunityCards} />
        </div>
        <div className="mt-5">
          <SeasonBenefitGrid items={reportingCards} />
        </div>
      </SeasonSection>

      <SeasonSection
        description="Cotas existiam no conteúdo histórico como modelos em formação. Elas voltam com aviso explícito: valores e entregas dependem de proposta aprovada."
        eyebrow="Cotas em formação"
        id="cotas"
        title="Modelos comerciais sem promessa fechada."
        variant="raised"
      >
        <SeasonBenefitGrid items={quotaCards} />
      </SeasonSection>

      <SeasonSection
        description="Dúvidas preservadas para proteger a promessa comercial: nada de ROI, audiência, alcance ou entrega sem validação."
        eyebrow="Dúvidas rápidas"
        id="faq"
        title="Como patrocinar com segurança."
      >
        <SeasonAccordion items={sponsorFaq} />
      </SeasonSection>

      <SeasonSection id="cta" title="Ative sua marca com critério e contexto esportivo.">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/cadastro#patrocinador">Quero patrocinar</Button>
          <Button href="/ur-market" variant="secondary">
            Ver UR Market
          </Button>
        </div>
      </SeasonSection>
    </main>
  );
}
