import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  RewardArtCard,
  SeasonInfoCard,
  SeasonPageHero,
  SeasonSection,
} from "@/components/season";
import { siteImages } from "@/lib/content/site-images";

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

export default function URMarketPage() {
  return (
    <main className="bg-[#0A0A0B] text-[#F4F0E6]">
      <SeasonPageHero
        actions={[
          { href: "#catalogo", label: "Ver UR Market" },
          { href: "/patrocinadores", label: "Ativar marca", variant: "secondary" },
        ]}
        badges={["UR Coins", "benefícios aprovados", "catálogo em expansão", "regras oficiais"]}
        description="Presença, mérito e participação podem abrir acesso a benefícios aprovados. Sem promessa automática, sem resgate sem regra."
        eyebrow="Benefícios e vitrine"
        image={siteImages.mediaCoverage}
        imagePosition="center 45%"
        stats={[
          { label: "moeda", value: "UR Coins" },
          { label: "status", value: "em expansão" },
          { label: "regra", value: "oficial" },
        ]}
        title="Jogue, pontue e desbloqueie possibilidades."
      />

      <SeasonSection
        description="A vitrine organiza possibilidades. Todo benefício depende de regra oficial, disponibilidade, parceiro e validação."
        eyebrow="Catálogo em expansão"
        id="catalogo"
        title="Benefícios com critério."
      >
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
