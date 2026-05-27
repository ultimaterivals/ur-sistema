import type { Metadata } from "next";
import {
  BarChart3,
  Camera,
  Coins,
  Dumbbell,
  Handshake,
  MapPin,
  Radio,
  ShieldCheck,
  ShoppingBag,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SeasonAccordion,
  SeasonBenefitGrid,
  SeasonInfoCard,
  SeasonJourney,
  SeasonPageHero,
  SeasonSection,
} from "@/components/season";
import { siteImages } from "@/lib/content/site-images";

export const metadata: Metadata = {
  title: "Ecossistema UR | Plataforma Esportiva Ultimate Rivals",
  description:
    "Entenda o Ultimate Rivals como ecossistema esportivo contínuo com UR Play, ranking, temporada, equipes, CT UR, mídia, UR Market, patrocinadores e quadras.",
};

const systemAssets = [
  {
    label: "Jogar",
    title: "Jogar",
    description: "UR Play, eventos, temporada e calendário com critérios claros.",
    icon: Zap,
  },
  {
    label: "Evoluir",
    title: "Evoluir",
    description: "Treino, postura, mentalidade, nivelamento e desenvolvimento esportivo.",
    icon: BarChart3,
  },
  {
    label: "Aparecer",
    title: "Aparecer",
    description: "Mídia UR, destaques, bastidores, histórias e comunidade.",
    icon: Camera,
  },
  {
    label: "Valor",
    title: "Construir valor",
    description: "Ranking, UR Coins, equipes, parceiros e oportunidades com validação.",
    icon: Coins,
  },
] as const;

const ecosystemFlow = [
  {
    label: "entrada",
    title: "Entrar pelo UR Play",
    description: "A jornada começa com cadastro, orientação e participação com critério.",
  },
  {
    label: "histórico",
    title: "Gerar histórico",
    description: "Presença, nível, conduta e participação criam rastro esportivo confirmado.",
  },
  {
    label: "ranking",
    title: "Organizar ranking",
    description: "Dados públicos entram por critérios oficiais, sem inventar posição ou número.",
  },
  {
    label: "mídia",
    title: "Virar história",
    description: "A mídia própria transforma participação em bastidor, destaque e memória.",
  },
  {
    label: "valor",
    title: "Conectar valor",
    description: "UR Coins, Market, CT UR e patrocinadores ampliam oportunidades com critério.",
  },
  {
    label: "polos",
    title: "Expandir polos",
    description: "Quadras e comunidade sustentam recorrência territorial e crescimento local.",
  },
] as const;

const ecosystemModules = [
  {
    label: "Atletas",
    title: "Atletas",
    description: "Entram para jogar, serem observados, evoluírem, pontuarem e construírem trajetória.",
    icon: ShieldCheck,
    href: "/atletas",
  },
  {
    label: "Equipes",
    title: "Equipes",
    description: "Escudos, formações, capitães e elencos ganham identidade, mídia e ranking coletivo.",
    icon: Users,
    href: "/equipes",
  },
  {
    label: "Ranking",
    title: "Ranking",
    description: "Mérito vira histórico por nível, equipe, modalidade, polo e critérios oficiais.",
    icon: BarChart3,
    href: "/ranking",
  },
  {
    label: "Mídia",
    title: "Mídia UR",
    description: "Transmissões, cortes, bastidores, Rivais em Jogo e histórias da temporada.",
    icon: Radio,
    href: "/midia",
  },
  {
    label: "Benefícios",
    title: "UR Coins e Market",
    description: "Moeda interna e catálogo em expansão conectam presença a benefícios aprovados.",
    icon: ShoppingBag,
    href: "/ur-market",
  },
  {
    label: "Desenvolvimento",
    title: "CT UR",
    description: "Técnico, físico, mentalidade, análise e evolução sem promessa automática.",
    icon: Dumbbell,
    href: "/ct-ur",
  },
  {
    label: "Parcerias",
    title: "Patrocinadores",
    description: "Marcas entram em mídia, eventos, UR Market, polos e conteúdo com proposta aprovada.",
    icon: Handshake,
    href: "/patrocinadores",
  },
  {
    label: "Território",
    title: "Quadras e polos",
    description: "Quadras parceiras podem virar polos com calendário, comunidade e mídia local.",
    icon: MapPin,
    href: "/quadras-parceiras",
  },
] as const;

const comparisonRows = [
  {
    title: "Continuidade",
    description: "A ação não acaba no apito. Cada entrada alimenta temporada, ranking, mídia e próximos passos.",
  },
  {
    title: "Atleta",
    description: "A participação deixa de sumir e passa a construir presença, reputação, nível e oportunidade.",
  },
  {
    title: "Valor",
    description: "Marcas, quadras e comunidade participam de uma jornada recorrente, não de uma ação isolada.",
  },
] as const;

const ecosystemFaq = [
  {
    question: "A Home virou a página da Temporada 1?",
    answer:
      "Sim. A página inicial é a porta emocional e competitiva da Temporada 1. O conteúdo institucional completo fica organizado aqui.",
  },
  {
    question: "O Ultimate Rivals é só torneio?",
    answer:
      "Não. O UR conecta UR Play, ranking, equipes, mídia, Market, CT UR, eventos, patrocinadores e quadras em ciclo contínuo.",
  },
  {
    question: "Benefícios e dados já são garantidos?",
    answer:
      "Não. Dados, benefícios, repasses e premiações dependem de participação validada, disponibilidade, regra oficial e confirmação operacional.",
  },
] as const;

export default function EcossistemaPage() {
  return (
    <main className="bg-[#0A0A0B] text-[#F4F0E6]">
      <SeasonPageHero
        actions={[
          { href: "/cadastro", label: "Entrar no ecossistema" },
          { href: "/ur-play", label: "Começar pelo UR Play", variant: "secondary" },
        ]}
        badges={["UR Play", "ranking contínuo", "equipes", "mídia própria", "UR Market", "polos"]}
        description="O Ultimate Rivals conecta jogo, ranking, equipes, quadras, mídia, benefícios e parceiros em uma estrutura criada para organizar, valorizar e desenvolver o esporte amador."
        eyebrow="Ecossistema UR"
        image={siteImages.teamEmbrace}
        imagePosition="center 45%"
        stats={[
          { label: "entrada", value: "UR Play" },
          { label: "organização", value: "temporada" },
          { label: "valor", value: "mídia e market" },
        ]}
        title="Um sistema completo para o esporte amador."
      />

      <SeasonSection
        description="Tudo começa no jogo, mas não termina nele. O atleta entra, joga, é observado, cria histórico, aparece, evolui e pode acessar novas oportunidades com critério."
        eyebrow="Tudo conectado"
        id="mapa"
        title="Jogar, evoluir, aparecer e construir valor."
      >
        <SeasonBenefitGrid columns={4} items={systemAssets} />
      </SeasonSection>

      <SeasonSection
        description="O caminho conecta entrada, histórico, ranking, mídia, benefícios, equipes, quadras e parceiros."
        eyebrow="Caminho do ecossistema"
        id="caminho"
        title="Do primeiro jogo à oportunidade."
        variant="raised"
      >
        <SeasonJourney steps={ecosystemFlow} />
      </SeasonSection>

      <SeasonSection
        description="A Home antiga carregava a explicação institucional inteira. Agora esse conteúdo fica distribuído em módulos claros, cada um com sua página."
        eyebrow="Módulos do sistema"
        id="modulos"
        title="A temporada liga todos os públicos."
      >
        <SeasonBenefitGrid columns={4} items={ecosystemModules} />
      </SeasonSection>

      <SeasonSection
        description="A diferença está no que acontece depois da participação: o UR organiza o que normalmente se perde."
        eyebrow="Por que existe"
        id="comparativo"
        title="Formato isolado vs ecossistema contínuo."
        variant="raised"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {comparisonRows.map((row) => (
            <SeasonInfoCard description={row.description} key={row.title} title={row.title} />
          ))}
        </div>
      </SeasonSection>

      <SeasonSection
        description="Cada público entra por uma porta diferente, mas todos se conectam ao mesmo ciclo: participação, histórico, mídia, oportunidade e recorrência."
        eyebrow="Impacto por público"
        id="impacto"
        title="O ecossistema cria valor para mais de um lado."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <SeasonInfoCard
            description="Deixa de ser presença solta e passa a construir histórico público."
            title="Atleta: trajetória"
          />
          <SeasonInfoCard
            description="Vira ativo competitivo, midiático e comercial dentro da temporada."
            title="Equipe: identidade"
          />
          <SeasonInfoCard
            description="Recebe recorrência, comunidade, agenda e possibilidade de ativação local."
            title="Quadra: polo"
          />
          <SeasonInfoCard
            description="Participa da experiência esportiva, não apenas de um espaço de exposição."
            title="Marca: jornada"
          />
        </div>
      </SeasonSection>

      <SeasonSection
        description="A página institucional preserva o conteúdo de visão, mas sem tirar da Home o papel de abrir a Temporada 1."
        eyebrow="Dúvidas rápidas"
        id="faq"
        title="O que a Home mostra e o que o ecossistema explica."
        variant="raised"
      >
        <SeasonAccordion items={ecosystemFaq} />
      </SeasonSection>

      <SeasonSection id="cta" title="Escolha sua porta de entrada no ecossistema.">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/cadastro">Escolher meu caminho</Button>
          <Button href="/regulamento" variant="secondary">
            Ver regulamento
          </Button>
        </div>
      </SeasonSection>
    </main>
  );
}
