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
  { label: "Status", value: "equipes em validação" },
  { label: "Elenco", value: "após cadastro oficial" },
  { label: "Capitão", value: "responsável validado" },
  { label: "Ranking", value: "coletivo em formação" },
] as const;

const teamJourney = [
  {
    label: "01",
    title: "Registrar equipe",
    description: "Capitão ou responsável envia interesse com identidade, cidade, modalidade e contexto.",
    status: "cadastro aberto",
  },
  {
    label: "02",
    title: "Validar elenco",
    description: "A equipe UR confere dados, conduta, disponibilidade e relação com a temporada.",
  },
  {
    label: "03",
    title: "Entrar no ranking",
    description: "O ranking coletivo só abre com dados reais e regras oficiais do ciclo.",
  },
  {
    label: "04",
    title: "Criar narrativa",
    description: "Mídia, rivalidade, torcida e histórico transformam equipe em ativo esportivo.",
  },
] as const;

const rosterData = [
  {
    label: "Identidade",
    value: "marca esportiva",
    detail: "nome, postura, visual e presença precisam formar uma narrativa reconhecível.",
    icon: ShieldCheck,
  },
  {
    label: "Capitão",
    value: "liderança",
    detail: "responsável por comunicação, conduta e ponte com a operação UR.",
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
    meta: "ranking coletivo abre após validação oficial de equipes e eventos.",
  },
  {
    position: "02",
    title: "elenco em validação",
    status: "dados reais após cadastro",
    meta: "capitão, atletas e identidade precisam passar pela triagem UR.",
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
        description="No Ultimate Rivals, equipe deixa de ser um grupo solto e passa a operar como identidade competitiva, midiática e comercial dentro da temporada."
        eyebrow="Equipes UR • identidade competitiva"
        image={siteImages.teamHuddle}
        imagePosition="center 42%"
        metrics={[
          { label: "Base", value: "identidade e elenco" },
          { label: "Operação", value: "capitão e validação" },
          { label: "Valor", value: "ranking, mídia e comunidade" },
        ]}
        statusDescription="Dados reais de equipes, atletas, resultados e ranking entram apenas após validação oficial."
        statusLabel="equipes em validação"
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
          description="O processo foi reduzido ao essencial: registrar, validar, ranquear e construir narrativa coletiva."
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
              title: "Narrativa de equipe",
              description: "Bastidores, cortes, rankings e temporada ajudam a construir reputação coletiva.",
            },
            {
              title: "Valor comercial",
              description: "Patrocinadores e UR Market podem se conectar a equipes após aprovação operacional.",
            },
          ]}
          reverse
          statusLabel="benefícios após validação"
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
        description="O registro da equipe inicia a triagem operacional. Identidade, elenco, capitão, ranking e mídia dependem de validação oficial."
        eyebrow="Próximo passo"
        items={["identidade", "elenco", "capitão", "ranking coletivo", "temporada"]}
        statusLabel="registro sujeito à validação"
        title="Transforme o grupo em uma equipe reconhecível."
      />
    </main>
  );
}
