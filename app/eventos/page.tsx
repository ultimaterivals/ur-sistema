import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  ProductArtCard,
  SeasonInfoCard,
  SeasonPageHero,
  SeasonSection,
  URBracketPreview,
} from "@/components/season";
import { season1 } from "@/lib/content/season1";
import { siteImages } from "@/lib/content/site-images";

export const metadata: Metadata = {
  title: "Eventos UR | Calendário Competitivo Ultimate Rivals",
  description:
    "Eventos UR organiza UR Play, UR Sprint, UR Series, UR Legends, bracket, polos, modalidades, níveis e pontuação dentro da temporada.",
};

const eventCards = [
  {
    title: "UR Play",
    description: "Entrada recorrente para presença, leitura de nível, ranking e mídia.",
    meta: "status: agenda em organização",
    icon: "/season-1/symbols/ur-play-line.svg",
  },
  {
    title: "UR Sprint",
    description: "Confrontos curtos, classificação direta e tensão competitiva.",
    meta: "polo: conforme confirmação",
    icon: "/season-1/symbols/ur-sprint-line.svg",
  },
  {
    title: "UR Series",
    description: "Liga oficial para atletas e formações com contexto competitivo.",
    meta: "modalidade: duplas e quartetos",
    icon: "/season-1/symbols/ur-series-line.svg",
  },
  {
    title: "UR Legends",
    description: "O ápice da temporada. Atletas representam nome, escudo e polo.",
    meta: "nível: classificados",
    icon: "/season-1/symbols/ur-legends-line.svg",
  },
] as const;

const details = [
  {
    title: "Inscrições",
    description: "Abertura acontece apenas após confirmação de polo, modalidade, nível e operação.",
  },
  {
    title: "Pontuação",
    description: "Critérios oficiais conectam participação, ranking individual, formação e polo.",
  },
  {
    title: "Bracket",
    description: "Chaveamento entra quando a etapa exige disputa eliminatória ou fase final.",
  },
] as const;

export default function EventosPage() {
  return (
    <main className="bg-[#0A0A0B] text-[#F4F0E6]">
      <SeasonPageHero
        actions={[
          { href: "/temporada", label: "Ver temporada" },
          { href: "/cadastro#atleta", label: "Entrar no UR", variant: "secondary" },
        ]}
        badges={["UR Play", "UR Sprint", "UR Series", "UR Legends", "bracket", "polos"]}
        description="A temporada acontece em ciclos. Cada etapa tem função: entrada, disputa, classificação, narrativa e fechamento competitivo."
        eyebrow="Calendário competitivo"
        image={siteImages.fairPlayLine}
        imagePosition="center 46%"
        stats={[
          { label: "ritmo", value: "ciclos" },
          { label: "entrada", value: "UR Play" },
          { label: "ápice", value: "Legends" },
        ]}
        title="A temporada não para."
      />

      <SeasonSection
        description="A escada oficial ajuda o atleta a entender onde entra, como evolui e para onde pode avançar."
        eyebrow="Escada de eventos"
        id="escada"
        title="Play, Sprint, Series, Legends."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {season1.ladder.map((product) => (
            <ProductArtCard key={product.id} product={product} />
          ))}
        </div>
      </SeasonSection>

      <SeasonSection
        description="Cards editoriais para comunicar status, polo, modalidade, nível, inscrições e pontuação sem inventar evento confirmado."
        eyebrow="Calendário vivo"
        id="eventos"
        title="Cada etapa tem uma função."
        variant="raised"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {eventCards.map((event) => (
            <SeasonInfoCard
              description={event.description}
              icon={event.icon}
              key={event.title}
              meta={event.meta}
              title={event.title}
            />
          ))}
        </div>
      </SeasonSection>

      <SeasonSection
        description="O bracket mostra a sensação esportiva da disputa, sem publicar confrontos reais antes da confirmação."
        eyebrow="Chaveamento"
        id="bracket"
        title="A chave define o nome."
      >
        <URBracketPreview
          final={season1.mockBracket.final}
          quarterfinals={[...season1.mockBracket.quarterfinals]}
          semifinals={[...season1.mockBracket.semifinals]}
          stage={season1.mockBracket.stage}
        />
      </SeasonSection>

      <SeasonSection
        description="Cada evento precisa respeitar operação, regras e comunicação pública."
        eyebrow="Critérios"
        id="criterios"
        title="Evento bom nasce organizado."
        variant="raised"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {details.map((detail) => (
            <SeasonInfoCard
              description={detail.description}
              key={detail.title}
              title={detail.title}
            />
          ))}
        </div>
      </SeasonSection>

      <SeasonSection id="cta" title="Entre na temporada e acompanhe as próximas etapas.">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/cadastro#atleta">Entrar no UR</Button>
          <Button href="/temporada" variant="secondary">
            Ver temporada
          </Button>
        </div>
      </SeasonSection>
    </main>
  );
}
