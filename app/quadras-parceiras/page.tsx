import type { Metadata } from "next";
import { CalendarDays, Camera, Handshake, MapPin, Megaphone, Store, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SeasonAccordion,
  SeasonBenefitGrid,
  SeasonInfoCard,
  SeasonJourney,
  SeasonPageHero,
  SeasonSection,
  TerritoryArtCard,
} from "@/components/season";
import { season1 } from "@/lib/content/season1";
import { siteImages } from "@/lib/content/site-images";

export const metadata: Metadata = {
  title: "Quadras Parceiras UR | Polos Oficiais Ultimate Rivals",
  description:
    "Quadras parceiras podem virar polos UR com calendário, eventos, mídia, comunidade, patrocinadores e ocupação organizada dentro da temporada.",
};

const poleCards = [
  {
    title: "Polo oficial",
    description: "A quadra ganha função dentro da temporada e da disputa territorial.",
    icon: "/season-1/badges/badge-polo-ativo.svg",
  },
  {
    title: "Ocupação",
    description: "UR Play e eventos ajudam a criar rotina com critérios e agenda confirmada.",
    icon: "/season-1/symbols/ur-play-line.svg",
  },
  {
    title: "Eventos",
    description: "A quadra pode receber etapas conforme operação, estrutura e calendário.",
    icon: "/season-1/symbols/ur-sprint-line.svg",
  },
  {
    title: "Mídia",
    description: "O polo aparece quando existe movimento real, história e comunidade.",
    icon: "/season-1/symbols/ur-series-line.svg",
  },
  {
    title: "Comunidade",
    description: "Atletas, equipes e público criam pertencimento quando a rotina volta.",
    icon: "/season-1/badges/badge-equipe-registrada.svg",
  },
  {
    title: "Patrocinadores",
    description: "Marcas locais entram melhor quando a quadra tem calendário e narrativa.",
    icon: "/season-1/symbols/ur-coins-line.svg",
  },
] as const;

const poleBenefits = [
  {
    label: "Movimento",
    title: "Movimento qualificado",
    description: "Atletas e equipes com interesse real em jogar, evoluir e participar.",
    icon: Users,
  },
  {
    label: "Agenda",
    title: "Calendário recorrente",
    description: "UR Play, eventos, treinos, experiências e ativações podem ocupar a quadra com critério.",
    icon: CalendarDays,
  },
  {
    label: "Mídia",
    title: "Visibilidade local",
    description: "Conteúdo, bastidores, comunidade e presença digital fortalecem o território.",
    icon: Camera,
  },
  {
    label: "Parcerias",
    title: "Potencial comercial",
    description: "Mais rotina pode criar relacionamento com parceiros locais sem promessa de receita automática.",
    icon: Handshake,
  },
] as const;

const activationFlow = [
  {
    label: "interesse",
    title: "Registrar interesse",
    description: "A quadra informa estrutura, localização, modalidades e disponibilidade.",
  },
  {
    label: "estrutura",
    title: "Confirmar estrutura",
    description: "A equipe UR avalia agenda, público, segurança, convivência e calendário.",
  },
  {
    label: "polo",
    title: "Planejar polo",
    description: "UR Play, eventos, mídia e patrocinadores entram conforme capacidade local.",
  },
  {
    label: "recorrência",
    title: "Ativar recorrência",
    description: "O objetivo é criar agenda contínua e comunidade competitiva no território.",
  },
] as const;

const poleAssets = [
  {
    label: "Agenda",
    title: "UR Play local",
    description: "Entrada oficial de atletas com orientação, presença e observação.",
    icon: MapPin,
  },
  {
    label: "Calendário",
    title: "Eventos recorrentes",
    description: "Mini torneios e etapas podem movimentar a quadra ao longo do ciclo.",
    icon: CalendarDays,
  },
  {
    label: "Mídia",
    title: "Cenário de conteúdo",
    description: "Fotos, bastidores e histórias fortalecem o polo e a comunidade local.",
    icon: Megaphone,
  },
  {
    label: "Comercial",
    title: "Ativações no polo",
    description: "Marcas podem aparecer em experiências reais após aprovação comercial.",
    icon: Store,
  },
] as const;

const courtFaq = [
  {
    question: "Cadastrar a quadra garante virar polo?",
    answer: "Não. O cadastro coloca a quadra no radar, mas polo oficial depende de estrutura, agenda, segurança e validação UR.",
  },
  {
    question: "A quadra precisa estar em BH, Betim ou Contagem?",
    answer: "Esses são os polos iniciais da Temporada 1. A expansão territorial pode acontecer conforme operação e demanda.",
  },
  {
    question: "Patrocinadores locais podem participar?",
    answer: "Podem, desde que a ativação tenha proposta aprovada, entrega real e comunicação clara para atletas e comunidade.",
  },
] as const;

export default function QuadrasParceirasPage() {
  return (
    <main className="bg-[#0A0A0B] text-[#F4F0E6]">
      <SeasonPageHero
        actions={[
          { href: "/cadastro#quadra", label: "Cadastrar quadra" },
          { href: "/contato", label: "Falar sobre parceria", variant: "secondary" },
        ]}
        badges={["polo oficial", "ocupação", "eventos", "mídia", "comunidade", "patrocinadores"]}
        description="O Ultimate Rivals ajuda quadras a gerar movimento, organizar eventos, fortalecer comunidade local e ganhar presença como território esportivo."
        eyebrow="Polos oficiais"
        image={siteImages.wideServe}
        imagePosition="center 47%"
        stats={[
          { label: "polo", value: "quadra" },
          { label: "força", value: "comunidade" },
          { label: "ritmo", value: "calendário" },
        ]}
        title="Sua quadra como polo de uma temporada."
      />

      <SeasonSection
        description="BH, Betim e Contagem são a base visual inicial da Temporada 1."
        eyebrow="Territórios iniciais"
        id="polos"
        title="Três polos. Uma disputa."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {season1.poles.map((pole, index) => (
            <TerritoryArtCard key={pole.id} pole={pole} rank={index + 1} />
          ))}
        </div>
      </SeasonSection>

      <SeasonSection
        description="A quadra deixa de ser apenas um espaço alugado e passa a ser ponto ativo de uma jornada esportiva organizada."
        eyebrow="Benefícios para a quadra"
        id="beneficios"
        title="Movimento, calendário, visibilidade e parceiros."
        variant="raised"
      >
        <SeasonBenefitGrid columns={4} items={poleBenefits} />
      </SeasonSection>

      <SeasonSection
        description="A quadra parceira precisa entregar experiência, operação e presença recorrente."
        eyebrow="O que um polo ativa"
        id="ativacoes"
        title="Calendário, mídia e comunidade."
        variant="raised"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {poleCards.map((card) => (
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
        description="A ativação precisa ser gradual: interesse, análise de estrutura, planejamento de polo e recorrência."
        eyebrow="Caminho de ativação"
        id="ativacao"
        title="Da quadra interessada ao polo ativo."
      >
        <SeasonJourney steps={activationFlow} />
      </SeasonSection>

      <SeasonSection
        description="A quadra vira ponto de encontro quando junta agenda, mídia, comunidade, convivência e ativações com critério."
        eyebrow="Ativos do polo"
        id="ativos"
        title="O que uma quadra pode receber dentro do UR."
        variant="raised"
      >
        <SeasonBenefitGrid columns={4} items={poleAssets} />
      </SeasonSection>

      <SeasonSection
        description="A força de um polo está na comunidade que volta, acompanha, joga, torce e cria pertencimento."
        eyebrow="Comunidade local"
        id="comunidade"
        title="Quadra forte vira ponto de encontro."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <SeasonInfoCard
            description="Iluminação, segurança, bar ou área de convivência e fluxo precisam sustentar a experiência."
            title="Estrutura e convivência"
          />
          <SeasonInfoCard
            description="Fotos, bastidores e histórias dão visibilidade para a quadra e para os atletas."
            title="Mídia do território"
          />
          <SeasonInfoCard
            description="Marcas locais entram melhor quando existe rotina, calendário e comunidade real."
            title="Patrocinadores com contexto"
          />
        </div>
      </SeasonSection>

      <SeasonSection
        description="Dúvidas preservadas para explicar cadastro, polos iniciais e participação de patrocinadores sem prometer ocupação ou receita garantida."
        eyebrow="Dúvidas rápidas"
        id="faq"
        title="Como virar polo sem pular validação."
        variant="raised"
      >
        <SeasonAccordion items={courtFaq} />
      </SeasonSection>

      <SeasonSection id="cta" title="Transforme sua quadra em ponto ativo da temporada.">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/cadastro#quadra">Cadastrar quadra</Button>
          <Button href="/contato" variant="secondary">
            Falar sobre parceria
          </Button>
        </div>
      </SeasonSection>
    </main>
  );
}
