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
    title: "Entrar",
    description: "Você escolhe seu perfil, envia seu cadastro e entra no radar da equipe UR.",
    status: "cadastro aberto",
  },
  {
    label: "Jogo",
    title: "Jogar",
    description: "Você participa do UR Play e começa a criar presença dentro do ecossistema.",
  },
  {
    label: "Olhar",
    title: "Ser observado",
    description: "Postura, presença e desempenho ajudam a dar contexto ao seu momento esportivo.",
  },
  {
    label: "Evolução",
    title: "Evoluir",
    description: "Você não precisa ser o melhor hoje. Precisa entrar, competir e evoluir.",
  },
  {
    label: "Palco",
    title: "Aparecer",
    description: "Bons momentos, histórias e evolução podem ganhar espaço nos canais UR.",
  },
  {
    label: "Valor",
    title: "Gerar valor",
    description: "Ranking, equipes, UR Coins e eventos conectam presença a novas oportunidades.",
  },
] as const;

const profileFields = [
  { label: "Perfil", value: "perfil inicial" },
  { label: "Ranking", value: "ranking em formação" },
  { label: "Histórico", value: "após participação" },
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
    title: "histórico em primeira fase",
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
        description="No Ultimate Rivals, sua presença, postura e desempenho começam a construir histórico. Você não entra apenas para jogar; entra para evoluir, aparecer e fazer parte de uma temporada organizada."
        eyebrow="Para atletas"
        image={siteImages.athletePortrait}
        imagePosition="center 18%"
        metrics={[
          { label: "Entrada", value: "UR Play e cadastro" },
          { label: "Base", value: "histórico validado" },
          { label: "Saída", value: "reputação e oportunidade" },
        ]}
        statusDescription="Aqui, sua postura, presença e desempenho começam a contar."
        statusLabel="perfil inicial"
        statusTitle="Não é só participar. É criar trajetória."
        title="Seu jogo precisa contar."
      />

      <PageSection id="perfil">
        <ProfileMockup
          cta={{ href: "/cadastro#atleta", label: "Cadastrar interesse" }}
          description="Aqui, o atleta deixa de ser apenas mais um participante. Cada presença pode ajudar a construir trajetória, ranking, mídia, oportunidades e reconhecimento."
          eyebrow="O atleta é protagonista do UR"
          fields={profileFields}
          highlights={["disciplina", "presença", "evolução", "respeito", "competitividade saudável"]}
          image={siteImages.defenseDive}
          title="Perfil do atleta com presença, postura e evolução."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="jornada">
        <ProcessTimeline
          description="Entre, jogue, evolua e construa seu histórico. Sua presença vira registro e seu desempenho ganha contexto."
          eyebrow="Jornada do atleta"
          steps={athleteJourney}
          title="Sua trajetória começa pelo primeiro passo."
        />
      </PageSection>

      <PageSection id="registro">
        <DataBoard
          description="Cada participação pode ajudar a construir presença, reputação, mídia e reconhecimento dentro do UR."
          eyebrow="O que passa a contar"
          items={athleteData}
          title="Presença, desempenho e postura contam."
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
          description="Seu nome começa a aparecer quando sua presença é registrada. A posição nasce de participação, postura e desempenho confirmados."
          eyebrow="Prévia do ranking individual"
          image={siteImages.attackBlock}
          rows={rankingRows}
          tabs={["Individual", "Níveis", "Presença", "Mídia"]}
          title="Reputação esportiva com critério."
        />
      </PageSection>

      <SegmentCtaPanel
        actions={
          <>
            <Button href="/cadastro#atleta">Quero construir minha trajetória</Button>
            <Button href="/ur-play" variant="secondary">
              Começar pelo UR Play
            </Button>
          </>
        }
        description="O cadastro coloca você no radar do UR. A equipe analisa seu perfil e orienta o caminho certo para você começar."
        eyebrow="Próximo passo"
        items={["UR Play", "ranking", "mídia", "CT UR", "equipes"]}
        statusLabel="cadastro aberto"
        title="Quero construir minha trajetória."
      />
    </main>
  );
}
