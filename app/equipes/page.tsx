import type { Metadata } from "next";
import { PlatformHero } from "@/components/editorial/platform-hero";
import {
  ImageFeaturePanel,
  LeaderboardPanel,
  ProcessTimeline,
} from "@/components/editorial/sports-platform-modules";
import { PageSection } from "@/components/site/page-section";
import { SegmentCtaPanel } from "@/components/site/segment-cta-panel";
import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/content/site-images";
import { TeamFormationArtCard } from "@/components/season";

export const metadata: Metadata = {
  title: "Equipes UR | Ranking Coletivo, Elencos e Temporada Ultimate Rivals",
  description:
    "Conheça as equipes oficiais do Ultimate Rivals, o sistema que transforma times amadores em ativos competitivos com ranking coletivo, elenco, UR Coins, mídia, repasses e oportunidades dentro da temporada.",
};

const teamJourney = [
  {
    label: "Registro",
    title: "Registrar equipe",
    description: "Capitão ou responsável envia interesse com identidade, cidade, modalidade e contexto.",
    status: "cadastro aberto",
  },
  {
    label: "Elenco",
    title: "Confirmar elenco",
    description: "A equipe UR confirma conduta, disponibilidade e alinhamento com a temporada.",
  },
  {
    label: "Ranking",
    title: "Entrar no ranking",
    description: "O ranking coletivo só abre com dados reais e regras oficiais do ciclo.",
  },
  {
    label: "Mídia",
    title: "Criar história",
    description: "Mídia, rivalidade, torcida e histórico transformam equipe em ativo esportivo.",
  },
] as const;

const collectiveRankingRows = [
  {
    position: "01",
    title: "equipe no radar",
    status: "sem nome real publicado",
    meta: "ranking coletivo abre com equipes e eventos confirmados.",
  },
  {
    position: "02",
    title: "elenco em confirmação",
    status: "dados reais após cadastro",
    meta: "capitão, atletas e identidade precisam ser confirmados pela equipe UR.",
  },
  {
    position: "03",
    title: "histórico coletivo",
    status: "temporada estruturada",
    meta: "resultados e mídia serão conectados ao ciclo oficial.",
  },
] as const;

export default function EquipesPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <PlatformHero
        actions={[
          { href: "/cadastro#equipe", label: "Cadastrar equipe" },
          { href: "/ranking", label: "Ver ranking coletivo", variant: "secondary" },
        ]}
        badges={["Elenco", "Capitão", "Ranking coletivo", "Mídia", "Temporada"]}
        description="No Ultimate Rivals, equipes constroem ranking coletivo, identidade, elenco e repasse dentro de uma temporada organizada por nível."
        eyebrow="Para equipes"
        image={siteImages.teamHuddle}
        imagePosition="center 42%"
        metrics={[
          { label: "Base", value: "identidade e elenco" },
          { label: "Base", value: "capitão e organização" },
          { label: "Valor", value: "ranking, mídia e comunidade" },
        ]}
        statusDescription="Equipe boa não é só grupo. É identidade, presença, organização e compromisso."
        statusLabel="equipes no radar"
        statusTitle="Sua equipe pode construir história dentro da temporada."
        title="Equipe boa não é só grupo. É identidade."
      />

      <PageSection className="bg-[#07080c]" id="entrada">
        <ProcessTimeline
          description="Equipe boa não é só grupo. É identidade, presença, organização e compromisso com a temporada."
          eyebrow="Entrada da equipe"
          steps={teamJourney}
          title="Do grupo de atletas à equipe reconhecível."
        />
      </PageSection>

      <PageSection id="formacoes">
        <div className="mb-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#D4A437]" style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}>Exemplos de formação</p>
          <h2 className="mt-2 text-2xl font-bold uppercase leading-[0.9] text-[#F4F0E6]" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Formações em análise.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <TeamFormationArtCard teamName="Formação BH Elite" pole="BH" modality="Quartetos" isOfficial={false} />
          <TeamFormationArtCard teamName="Dupla Betim" pole="Betim" modality="Duplas Mistas" isOfficial={false} />
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]" id="ranking-coletivo">
        <LeaderboardPanel
          description="A equipe começa a construir histórico por participação, resultado e consistência."
          eyebrow="Ranking coletivo"
          image={siteImages.fairPlayLine}
          rows={collectiveRankingRows}
          tabs={["Coletivo", "Elenco", "Temporada", "Mídia"]}
          title="Ranking coletivo com identidade."
        />
      </PageSection>

      <PageSection id="midia-mercado">
        <ImageFeaturePanel
          actions={[
            { href: "/midia", label: "Ver mídia UR", variant: "secondary" },
            { href: "/ur-market", label: "Conhecer UR Market", variant: "ghost" },
          ]}
          description="Jogos, bastidores e confrontos ganham mais valor quando existe história. A equipe pode participar de um sistema mais estratégico conforme a temporada evolui."
          eyebrow="Mídia, rivalidade e mercado"
          image={siteImages.mediaCoverage}
          imagePosition="center 45%"
          points={[
            {
              title: "História de equipe",
              description: "Bastidores, cortes, rankings e temporada ajudam a construir reputação coletiva.",
            },
            {
              title: "Valor comercial",
              description: "Patrocinadores e UR Market podem se conectar a equipes com regras claras.",
            },
          ]}
          reverse
          statusLabel="benefícios com regras claras"
          title="Equipe boa vira história. História vira valor."
        />
      </PageSection>

      <SegmentCtaPanel
        actions={
          <>
            <Button href="/cadastro#equipe">Cadastrar minha equipe</Button>
            <Button href="/regulamento" variant="secondary">
              Ver regulamento
            </Button>
          </>
        }
        description="O cadastro coloca sua equipe no radar do UR. A equipe analisa identidade, elenco, capitão e disponibilidade antes do próximo passo."
        eyebrow="Próximo passo"
        items={["identidade", "elenco", "capitão", "ranking coletivo", "temporada"]}
        statusLabel="registro com critério"
        title="Cadastrar minha equipe."
      />
    </main>
  );
}
