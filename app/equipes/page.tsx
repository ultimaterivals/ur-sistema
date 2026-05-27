import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  SeasonInfoCard,
  SeasonPageHero,
  SeasonSection,
  TeamFormationArtCard,
  TerritoryArtCard,
} from "@/components/season";
import { season1 } from "@/lib/content/season1";
import { siteImages } from "@/lib/content/site-images";

export const metadata: Metadata = {
  title: "Equipes UR | Escudos, Formações e Ranking Coletivo Ultimate Rivals",
  description:
    "Equipes UR organiza escudos, formações registradas, quartetos, duplas, ranking coletivo, mídia e disputa por polos na Temporada 1.",
};

const formationRules = [
  {
    title: "Equipe e organização",
    description: "O escudo organiza identidade, comunidade, capitão, mídia e histórico coletivo.",
    icon: "/season-1/badges/badge-equipe-registrada.svg",
  },
  {
    title: "Formação registrada",
    description: "Cada quarteto ou dupla pode ser registrado para disputar, pontuar e aparecer.",
    icon: "/season-1/badges/badge-formacao-oficial.svg",
  },
  {
    title: "Equipe 1, Equipe 2",
    description: "Uma mesma organização pode ter formações diferentes conforme nível e modalidade.",
    icon: "/season-1/symbols/quartetos-line.svg",
  },
  {
    title: "Legends pelo escudo",
    description: "Atleta qualificado no Legends representa o escudo vinculado e fortalece o território.",
    icon: "/season-1/symbols/ur-legends-line.svg",
  },
] as const;

export default function EquipesPage() {
  return (
    <main className="bg-[#0A0A0B] text-[#F4F0E6]">
      <SeasonPageHero
        actions={[
          { href: "/cadastro#equipe", label: "Cadastrar equipe" },
          { href: "/ranking", label: "Ver ranking coletivo", variant: "secondary" },
        ]}
        badges={["escudo", "formações", "quartetos", "duplas", "polos", "Legends"]}
        description="Times deixam de ser só grupo. O escudo entra na temporada, forma atletas, disputa ranking coletivo e cria presença pública."
        eyebrow="Equipes e formações"
        image={siteImages.teamHuddle}
        imagePosition="center 42%"
        stats={[
          { label: "base", value: "escudo" },
          { label: "disputa", value: "formações" },
          { label: "força", value: "polo" },
        ]}
        title="Seu escudo também entra na disputa."
      />

      <SeasonSection
        description="Exemplos editoriais para mostrar como escudos e formações podem aparecer. Dados reais entram apenas após confirmação."
        eyebrow="Cards oficiais"
        id="formacoes"
        title="Formações com identidade."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <TeamFormationArtCard athleteCount={4} isOfficial teamName="BH Elite 1" pole="BH" modality="Quartetos" />
          <TeamFormationArtCard athleteCount={4} teamName="Betim Arena 1" pole="Betim" modality="Quartetos" />
          <TeamFormationArtCard athleteCount={2} teamName="Contagem Dupla" pole="Contagem" modality="Duplas Mistas" />
          <TeamFormationArtCard athleteCount={2} teamName="BH Feminino" pole="BH" modality="Duplas Femininas" />
        </div>
      </SeasonSection>

      <SeasonSection
        description="A equipe é a camada que conecta atleta, formação, mídia, ranking, UR Coins e território."
        eyebrow="Como funciona"
        id="estrutura"
        title="Escudo, formação e polo."
        variant="raised"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {formationRules.map((rule) => (
            <SeasonInfoCard
              description={rule.description}
              icon={rule.icon}
              key={rule.title}
              title={rule.title}
            />
          ))}
        </div>
      </SeasonSection>

      <SeasonSection
        description="Quartetos, duplas masculinas, duplas femininas e duplas mistas podem compor a identidade competitiva de cada organização."
        eyebrow="Modalidades"
        id="modalidades"
        title="Cada formação disputa do seu jeito."
      >
        <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
          {season1.modalities.map((modality) => (
            <SeasonInfoCard
              description="Modalidade vinculada a critérios oficiais, nível e calendário confirmado."
              icon={modality.symbolLine}
              key={modality.id}
              title={modality.name}
            />
          ))}
        </div>
      </SeasonSection>

      <SeasonSection
        description="O escudo também soma na disputa territorial. Cada polo cresce com atletas, formações e presença confirmada."
        eyebrow="Força dos polos"
        id="polos"
        title="O território também joga."
        variant="raised"
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {season1.poles.map((pole, index) => (
            <TerritoryArtCard key={pole.id} pole={pole} rank={index + 1} />
          ))}
        </div>
      </SeasonSection>

      <SeasonSection id="cta" title="Registre seu escudo para entrar na temporada.">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/cadastro#equipe">Cadastrar equipe</Button>
          <Button href="/eventos" variant="secondary">
            Ver eventos
          </Button>
        </div>
      </SeasonSection>
    </main>
  );
}
