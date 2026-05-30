import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  SeasonAccordion,
  SeasonBenefitGrid,
  SeasonInfoCard,
  SeasonJourney,
  SeasonPageHero,
  SeasonSection,
  TeamFormationArtCard,
  TerritoryArtCard,
} from "@/components/season";
import { season1 } from "@/lib/content/season1";
import { siteImages } from "@/lib/content/site-images";
import {
  draftConnectionCards,
  mediaRivalryCards,
  rosterValidationCards,
  teamBenefits,
  teamCoinsCards,
  teamEntrySteps,
  teamFaq,
  teamIdentityCards,
} from "@/lib/content/equipes";

export const metadata: Metadata = {
  title: "Equipes UR | Escudos, Formações e Ranking Coletivo Ultimate Rivals",
  description:
    "Equipes UR organiza escudos, formações registradas, Dupla, Quarteto, ranking coletivo, mídia e disputa por polos na Temporada 1.",
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

const officialTeamJourney = teamEntrySteps.map(({ step, title, description }) => ({
  label: step,
  title,
  description,
}));

export default function EquipesPage() {
  return (
    <main className="bg-[#0A0A0B] text-[#F4F0E6]">
      <SeasonPageHero
        actions={[
          { href: "/cadastro#equipe", label: "Cadastrar equipe" },
          { href: "#estrutura", label: "Entender níveis", variant: "secondary" },
        ]}
        badges={["escudo", "formações", "Quarteto", "Dupla", "polos", "Legends"]}
        description="Equipes passam pelo UR Play, são niveladas, disputam eventos, constroem ranking próprio e podem representar um polo na temporada."
        eyebrow="Equipes UR"
        image={siteImages.teamHuddle}
        imagePosition="center 42%"
        stats={[
          { label: "base", value: "escudo" },
          { label: "disputa", value: "formações" },
          { label: "força", value: "polo" },
        ]}
        title="Sua equipe pode construir uma campanha."
      />

      <SeasonSection
        description="Exemplos editoriais para mostrar como escudos e formações podem aparecer. Dados reais entram apenas após confirmação."
        eyebrow="Cards oficiais"
        id="formacoes"
        title="Formações com identidade."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <TeamFormationArtCard athleteCount={4} isOfficial teamName="BH Formação 1" pole="BH" modality="Quarteto" />
          <TeamFormationArtCard athleteCount={4} teamName="Betim Arena 1" pole="Betim" modality="Quarteto" />
          <TeamFormationArtCard athleteCount={2} teamName="Contagem Dupla" pole="Contagem" modality="Dupla" />
          <TeamFormationArtCard athleteCount={2} teamName="BH Dupla" pole="BH" modality="Dupla" />
        </div>
      </SeasonSection>

      <SeasonSection
        description="Uma equipe não é apenas um grupo de jogadores. É escudo, presença, formação, compromisso e trajetória coletiva."
        eyebrow="Identidade oficial"
        id="identidade"
        title="Escudo também constrói pertencimento."
        variant="raised"
      >
        <SeasonBenefitGrid items={teamIdentityCards} />
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
        description="O registro oficial começa com interesse, identidade, capitão, elenco e validação. Dados reais só entram depois de critério e aceite."
        eyebrow="Entrada da equipe"
        id="entrada"
        title="Do interesse ao ranking coletivo."
      >
        <SeasonJourney steps={officialTeamJourney} />
      </SeasonSection>

      <SeasonSection
        description="Capitão, elenco, identidade e validação reduzem bagunça e criam base para ranking, mídia, UR Coins e oportunidades comerciais."
        eyebrow="Critérios de registro"
        id="registro"
        title="O escudo precisa ter responsável e regra."
        variant="raised"
      >
        <SeasonBenefitGrid columns={4} items={rosterValidationCards} />
      </SeasonSection>

      <SeasonSection
        description="Dupla e Quarteto organizam a identidade competitiva de cada equipe sem criar excesso de caminhos para quem está começando."
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
        description="A equipe cria continuidade competitiva, rivalidade, mídia e possibilidades futuras de benefícios coletivos sem prometer repasse automático."
        eyebrow="Valor coletivo"
        id="valor"
        title="Escudo bom constrói temporada."
        variant="raised"
      >
        <div className="grid gap-5 xl:grid-cols-2">
          <SeasonBenefitGrid columns={2} items={teamBenefits} />
          <SeasonBenefitGrid columns={2} items={teamCoinsCards} />
        </div>
      </SeasonSection>

      <SeasonSection
        description="UR Play, Draft em formação e ranking validado ajudam equipes a observar atletas, construir elenco e gerar rivalidade saudável."
        eyebrow="Radar de atletas"
        id="radar"
        title="Mercado interno começa com observação."
      >
        <div className="grid gap-5 xl:grid-cols-2">
          <SeasonBenefitGrid columns={2} items={draftConnectionCards} />
          <SeasonBenefitGrid columns={2} items={mediaRivalryCards} />
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

      <SeasonSection
        description="Regras preservadas para explicar registro, capitão, ranking coletivo, UR Play, repasses e publicação de dados."
        eyebrow="Dúvidas rápidas"
        id="faq"
        title="Como uma equipe entra sem inventar histórico."
      >
        <SeasonAccordion items={teamFaq} />
      </SeasonSection>

      <SeasonSection id="cta" title="Forme sua equipe e entre na temporada com identidade.">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/cadastro#equipe">Cadastrar equipe</Button>
          <Button href="#formacoes" variant="secondary">
            Entender formações
          </Button>
        </div>
      </SeasonSection>
    </main>
  );
}
