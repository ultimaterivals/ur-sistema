import type { Metadata } from "next";
import { BarChart3, Crown, ShieldCheck, Users } from "lucide-react";
import { PlatformHero } from "@/components/editorial/platform-hero";
import {
  DataBoard,
  ImageFeaturePanel,
  LeaderboardPanel,
  ProcessTimeline,
  ProfileMockup,
} from "@/components/editorial/sports-platform-modules";
import { PageSection } from "@/components/site/page-section";
import { SegmentCtaPanel } from "@/components/site/segment-cta-panel";
import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/content/site-images";

export const metadata: Metadata = {
  title: "Equipes UR | Ranking Coletivo, Elencos e Temporada Ultimate Rivals",
  description:
    "Conheça as equipes oficiais do Ultimate Rivals, o sistema que transforma times amadores em ativos competitivos com ranking coletivo, elenco, UR Coins, mídia, repasses e oportunidades dentro da temporada.",
};

const teamFields = [
  { label: "Momento", value: "equipe no radar" },
  { label: "Elenco", value: "após cadastro oficial" },
  { label: "Capitão", value: "responsável validado" },
  { label: "Ranking", value: "coletivo em formação" },
] as const;

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

const rosterData = [
  {
    label: "Identidade",
    value: "marca esportiva",
    detail: "nome, postura, visual e presença precisam formar uma história reconhecível.",
    icon: ShieldCheck,
  },
  {
    label: "Capitão",
    value: "liderança",
    detail: "responsável por comunicação, conduta e conexão com a equipe UR.",
    icon: Crown,
  },
  {
    label: "Elenco",
    value: "validado",
    detail: "atletas entram após confirmação, sem inventar nomes ou posições.",
    icon: Users,
  },
  {
    label: "Temporada",
    value: "histórico",
    detail: "participação coletiva alimenta ranking, mídia, eventos e oportunidades.",
    icon: BarChart3,
  },
] as const;

const collectiveRankingRows = [
  {
    position: "01",
    title: "equipe em formação",
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
        description="No Ultimate Rivals, equipe deixa de ser um grupo solto e passa a funcionar como identidade competitiva, midiática e comercial dentro da temporada."
        eyebrow="Equipes UR • identidade competitiva"
        image={siteImages.teamHuddle}
        imagePosition="center 42%"
        metrics={[
          { label: "Base", value: "identidade e elenco" },
          { label: "Base", value: "capitão e organização" },
          { label: "Valor", value: "ranking, mídia e comunidade" },
        ]}
        statusDescription="Equipes, atletas, resultados e ranking aparecem publicamente depois que identidade, elenco e regras estiverem confirmados."
        statusLabel="equipes no radar"
        statusTitle="Equipe não é só grupo. É ativo esportivo."
        title="Sua equipe pode virar uma marca dentro da temporada."
      />

      <PageSection id="card-equipe">
        <ProfileMockup
          cta={{ href: "/cadastro#equipe", label: "Registrar equipe" }}
          description="O card de equipe concentra o que importa para o ecossistema: identidade, capitão, elenco, histórico, ranking coletivo e presença de mídia."
          eyebrow="Mockup de equipe"
          fields={teamFields}
          highlights={["identidade", "elenco", "capitão", "ranking coletivo", "mídia"]}
          image={siteImages.teamEmbrace}
          title="A equipe precisa ser reconhecida antes de ser ranqueada."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="entrada">
        <ProcessTimeline
          description="O caminho foi reduzido ao essencial: registrar, confirmar elenco, ranquear e construir história coletiva."
          eyebrow="Entrada da equipe"
          steps={teamJourney}
          title="Do grupo de atletas à identidade competitiva."
        />
      </PageSection>

      <PageSection id="elenco-capitao">
        <DataBoard
          description="Uma equipe oficial precisa de liderança, conduta, elenco e compromisso com a temporada. Isso protege o ranking e melhora a experiência competitiva."
          eyebrow="Elenco e capitão"
          items={rosterData}
          title="Organização antes do resultado."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="ranking-coletivo">
        <LeaderboardPanel
          description="O preview mostra como o ranking coletivo será apresentado, sem publicar equipes reais, posições, pontuação ou resultados nesta fase."
          eyebrow="Ranking coletivo preview"
          image={siteImages.fairPlayLine}
          rows={collectiveRankingRows}
          tabs={["Coletivo", "Elenco", "Temporada", "Mídia"]}
          title="Classificação coletiva com histórico."
        />
      </PageSection>

      <PageSection id="midia-mercado">
        <ImageFeaturePanel
          actions={[
            { href: "/midia", label: "Ver mídia UR", variant: "secondary" },
            { href: "/ur-market", label: "Conhecer UR Market", variant: "ghost" },
          ]}
          description="Equipes fortes geram rivalidade, torcida, histórias, ativos comerciais e oportunidades. UR Coins coletivas e recompensas entram com regras oficiais do ciclo."
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
            <Button href="/cadastro#equipe">Cadastrar equipe</Button>
            <Button href="/regulamento" variant="secondary">
              Ver regulamento
            </Button>
          </>
        }
        description="O registro coloca sua equipe no radar do UR. Identidade, elenco, capitão, ranking e mídia passam por análise da equipe UR para manter equilíbrio e respeito."
        eyebrow="Próximo passo"
        items={["identidade", "elenco", "capitão", "ranking coletivo", "temporada"]}
        statusLabel="registro com critério"
        title="Transforme o grupo em uma equipe reconhecível."
      />
    </main>
  );
}
