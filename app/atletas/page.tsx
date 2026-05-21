import type { Metadata } from "next";
import { Camera, Dumbbell, ShieldCheck, Target } from "lucide-react";
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
  title: "Atletas UR | Jornada, Ranking e Mentalidade Hunter Ultimate Rivals",
  description:
    "Conheça a jornada dos atletas no Ultimate Rivals, com UR Play, ranking, níveis, equipes, UR Coins, mídia, CT UR e Mentalidade Hunter para evolução dentro do ecossistema.",
};

const athleteJourney = [
  {
    label: "Entrada",
    title: "Cadastrar interesse",
    description: "Seu cadastro coloca você no radar do UR e abre o primeiro caminho dentro do ecossistema.",
    status: "cadastro aberto",
  },
  {
    label: "Base",
    title: "Começar pelo UR Play",
    description: "A participação cria contexto para observação, presença e leitura inicial de nível.",
  },
  {
    label: "Registro",
    title: "Ser observado",
    description: "Postura, evolução, participação e histórico passam a formar uma base validada.",
  },
  {
    label: "Evolução",
    title: "Subir de patamar",
    description: "Nível, CT UR, temporada e equipes criam caminhos para desenvolvimento com critério.",
  },
  {
    label: "Palco",
    title: "Aparecer na mídia",
    description: "Histórias, bastidores e destaques conectam seu desempenho à comunidade.",
  },
  {
    label: "Valor",
    title: "Gerar oportunidade",
    description: "Ranking, equipes, UR Coins e eventos transformam presença em reputação pública.",
  },
] as const;

const profileFields = [
  { label: "Perfil", value: "liberado após validação" },
  { label: "Ranking", value: "ranking em formação" },
  { label: "Histórico", value: "após participação oficial" },
  { label: "Oportunidades", value: "com critério UR" },
] as const;

const athleteData = [
  {
    label: "Presença",
    value: "registrada",
    detail: "participação e compromisso entram no histórico quando confirmados.",
    icon: ShieldCheck,
  },
  {
    label: "Nível",
    value: "observado",
    detail: "leitura esportiva para competir com mais justiça e contexto.",
    icon: Target,
  },
  {
    label: "Mídia",
    value: "próxima camada",
    detail: "destaques e bastidores podem virar memória esportiva.",
    icon: Camera,
  },
  {
    label: "Evolução",
    value: "contínua",
    detail: "CT UR, equipes e temporada conectam desenvolvimento e jornada.",
    icon: Dumbbell,
  },
] as const;

const rankingRows = [
  {
    position: "01",
    title: "seu nome no ranking",
    status: "sem atleta real publicado",
    meta: "seu nome aparece conforme presença e desempenho confirmados.",
  },
  {
    position: "02",
    title: "histórico em construção",
    status: "ranking individual",
    meta: "presença, evolução e participação serão tratados com critério.",
  },
  {
    position: "03",
    title: "destaque futuro",
    status: "mídia própria",
    meta: "a visibilidade cresce com presença, postura e temporada.",
  },
] as const;

export default function AtletasPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <PlatformHero
        actions={[
          { href: "/cadastro#atleta", label: "Entrar como atleta" },
          { href: "/ur-play", label: "Conhecer UR Play", variant: "secondary" },
        ]}
        badges={["UR Play", "Ranking contínuo", "Mídia própria", "Mentalidade Hunter"]}
        description="O atleta entra pelo UR Play, constrói histórico, evolui por níveis, ganha visibilidade e se conecta a equipes, CT UR, eventos, UR Coins e oportunidades."
        eyebrow="Atletas UR • jornada esportiva"
        image={siteImages.athletePortrait}
        imagePosition="center 18%"
        metrics={[
          { label: "Entrada", value: "UR Play e cadastro" },
          { label: "Base", value: "histórico validado" },
          { label: "Saída", value: "reputação e oportunidade" },
        ]}
        statusDescription="Seu perfil só aparece publicamente após cadastro, presença e confirmação oficial."
        statusLabel="perfil em construção"
        statusTitle="Não é só jogar. É construir trajetória."
        title="O atleta é protagonista do ecossistema."
      />

      <PageSection id="perfil">
        <ProfileMockup
          cta={{ href: "/cadastro#atleta", label: "Cadastrar interesse" }}
          description="O perfil do atleta funciona como um passaporte esportivo: presença, nível, histórico, mídia e oportunidades em um só lugar quando seus dados forem confirmados."
          eyebrow="Perfil do atleta em formação"
          fields={profileFields}
          highlights={["disciplina", "presença", "evolução", "respeito", "competitividade saudável"]}
          image={siteImages.defenseDive}
          title="Histórico público com contexto, não vitrine vazia."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="jornada">
        <ProcessTimeline
          description="Você entende o caminho em poucos passos: entrar, jogar, ser observado, evoluir, aparecer e gerar valor."
          eyebrow="Jornada visual"
          steps={athleteJourney}
          title="Do primeiro cadastro ao histórico dentro do UR."
        />
      </PageSection>

      <PageSection id="registro">
        <DataBoard
          description="O Ultimate Rivals não vende promessa de resultado. A proposta é registrar sua trajetória esportiva com critérios, presença e respeito."
          eyebrow="O que passa a importar"
          items={athleteData}
          title="Ranking, mídia e evolução dependem de rastro real."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="midia">
        <ImageFeaturePanel
          actions={[
            { href: "/midia", label: "Ver mídia UR", variant: "secondary" },
            { href: "/ct-ur", label: "Conhecer CT UR", variant: "ghost" },
          ]}
          description="O esporte amador também merece palco. A mídia UR existe para transformar sua participação em história, bastidor, reputação e memória da temporada."
          eyebrow="Mídia e desenvolvimento"
          image={siteImages.athleteFocus}
          imagePosition="center 36%"
          points={[
            {
              title: "Mentalidade Hunter",
              description: "Cultura de disciplina, presença, respeito, preparo e evolução contínua, sem discurso milagroso.",
            },
            {
              title: "CT UR",
              description: "Base futura para desenvolvimento técnico, físico, mental e humano conectado à jornada.",
            },
          ]}
          title="Competir é o começo. Evoluir é o caminho."
        />
      </PageSection>

      <PageSection id="ranking-preview">
        <LeaderboardPanel
          description="O ranking individual será publicado somente com dados reais confirmados. Nesta fase, o preview mostra a estrutura do produto sem inventar atleta, número ou posição."
          eyebrow="Ranking individual preview"
          image={siteImages.attackBlock}
          rows={rankingRows}
          tabs={["Individual", "Níveis", "Presença", "Mídia"]}
          title="Reputação esportiva com critério."
        />
      </PageSection>

      <SegmentCtaPanel
        actions={
          <>
            <Button href="/cadastro#atleta">Entrar como atleta</Button>
            <Button href="/ur-play" variant="secondary">
              Começar pelo UR Play
            </Button>
          </>
        }
        description="O cadastro coloca você no radar do UR. Participação, ranking, mídia, equipes e oportunidades passam por validação para manter equilíbrio e respeito."
        eyebrow="Próximo passo"
        items={["UR Play", "ranking", "mídia", "CT UR", "equipes"]}
        statusLabel="cadastro aberto"
        title="Sua jornada começa antes do primeiro destaque."
      />
    </main>
  );
}
