import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Camera,
  CircleDot,
  Coins,
  Flag,
  Medal,
  PlayCircle,
  Radio,
  Shield,
  Sparkles,
  Swords,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { Button } from "@/components/ui/button";
import { homeImageRoles } from "@/lib/content/site-images";
import { season1 } from "@/lib/content/season1";

const displayFont = "'Oswald', sans-serif";
const bodyFont = "'Manrope', system-ui, sans-serif";

type CardItem = {
  title: string;
  description: string;
  tag?: string;
  href?: string;
  cta?: string;
  icon?: ReactNode;
};

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

function Section({ id, eyebrow, title, subtitle, children, className = "", style }: SectionProps) {
  return (
    <section
      className={`relative isolate overflow-hidden border-t border-white/10 px-5 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-20 ${className}`}
      id={id}
      style={style}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={eyebrow} subtitle={subtitle} title={title} />
        {children}
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: ReactNode; subtitle?: string }) {
  return (
    <div className="mb-7 max-w-4xl">
      {eyebrow ? (
        <p
          className="text-[11px] font-black uppercase tracking-[0.18em]"
          style={{ color: "#D4A437", fontFamily: bodyFont }}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className="mt-2 text-[clamp(2rem,9vw,4.5rem)] font-black uppercase leading-[0.86]"
        style={{ color: "#F4F0E6", fontFamily: displayFont, letterSpacing: "0.02em" }}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-3xl text-sm leading-6 text-[#B9B5AA] md:text-base md:leading-7">{subtitle}</p>
      ) : null}
    </div>
  );
}

function TextureLayer() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.13]"
        style={{ backgroundImage: "url(/season-1/textures/bg-sand-texture.svg)", backgroundSize: "cover" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "rgba(212,164,55,0.14)" }}
      />
    </>
  );
}

function PremiumCard({ title, description, tag, href, cta, icon }: CardItem) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-11 w-11 place-items-center rounded-xl border border-[#D4A437]/20 bg-[#D4A437]/10 text-[#D4A437] shadow-[0_0_28px_rgba(212,164,55,0.12)]">
          {icon ?? <CircleDot aria-hidden className="h-5 w-5" />}
        </div>
        {tag ? (
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#D4A437]">
            {tag}
          </span>
        ) : null}
      </div>
      <h3
        className="mt-5 text-2xl font-black uppercase leading-[0.92] text-[#F4F0E6]"
        style={{ fontFamily: displayFont, letterSpacing: "0.03em" }}
      >
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#A9A59B]">{description}</p>
      {cta ? (
        <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#D4A437]">
          {cta}
          <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      ) : null}
    </>
  );

  const className =
    "group relative min-h-full overflow-hidden rounded-2xl border border-[#D4A437]/15 bg-[#111218] p-5 shadow-[0_12px_46px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5 hover:border-[#D4A437]/45 hover:shadow-[0_0_48px_rgba(212,164,55,0.12)]";

  if (href) {
    return (
      <Link className={className} href={href}>
        <TextureLayer />
        {content}
      </Link>
    );
  }

  return (
    <div className={className}>
      <TextureLayer />
      {content}
    </div>
  );
}

function HorizontalCards({ children }: { children: ReactNode }) {
  return (
    <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 sm:mx-0 sm:px-0 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
      {children}
    </div>
  );
}

function ImpactPanel({ children }: { children: ReactNode }) {
  return (
    <div className="mt-7 rounded-2xl border border-[#D4A437]/25 bg-[#D4A437]/10 px-5 py-4 text-sm font-black uppercase leading-6 tracking-[0.08em] text-[#D4A437]">
      {children}
    </div>
  );
}

function MiniCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[#F4F0E6]">
      {children}
    </div>
  );
}

const heroStats = [
  { label: "3 Polos", value: "Belo Horizonte, Betim e Contagem" },
  { label: "2 Modalidades", value: "Dupla e Quarteto" },
  { label: "1 Entrada", value: "UR Play" },
  { label: "4 Etapas", value: "UR Play, UR Sprint, UR Series e UR Legends" },
] as const;

const howItWorks = [
  {
    title: "UR Play",
    description: "Entrada, cadastro, observação, nivelamento, jogos semanais e histórico.",
    icon: <PlayCircle aria-hidden className="h-5 w-5" />,
  },
  {
    title: "Ranking",
    description: "Atletas, equipes, duplas e polos constroem trajetória com critérios claros.",
    icon: <Medal aria-hidden className="h-5 w-5" />,
  },
  {
    title: "UR Sprint",
    description: "Primeira disputa oficial dos polos.",
    icon: <Zap aria-hidden className="h-5 w-5" />,
  },
  {
    title: "UR Series",
    description: "Classificados dos polos se enfrentam em uma disputa entre comunidades.",
    icon: <Swords aria-hidden className="h-5 w-5" />,
  },
  {
    title: "UR Legends",
    description: "Evento principal da temporada, com atletas de destaque representando seus polos.",
    icon: <Trophy aria-hidden className="h-5 w-5" />,
  },
] as const;

const ecosystemCards = [
  { title: "Atletas", description: "Entrada, evolução, ranking e visibilidade para quem joga.", icon: <Users aria-hidden className="h-5 w-5" /> },
  { title: "Equipes e Duplas", description: "Formações com campanha, identidade e plano de evolução.", icon: <Shield aria-hidden className="h-5 w-5" /> },
  { title: "Polos", description: "Belo Horizonte, Betim e Contagem competem com mesmo peso.", icon: <Flag aria-hidden className="h-5 w-5" /> },
  { title: "Ranking", description: "Histórico competitivo com critérios claros e leitura pública.", icon: <Medal aria-hidden className="h-5 w-5" /> },
  { title: "Mídia", description: "Transmissões, bastidores, cortes, histórias e registros de partidas.", icon: <Camera aria-hidden className="h-5 w-5" /> },
  { title: "UR Market", description: "Produtos, serviços, parceiros e benefícios possíveis da temporada.", icon: <Coins aria-hidden className="h-5 w-5" /> },
  { title: "Metodologia Hunter", description: "Mentalidade, desenvolvimento e leitura de jogo para evoluir.", icon: <Target aria-hidden className="h-5 w-5" /> },
  { title: "UR Legends", description: "O espetáculo aspiracional que fecha o ciclo dos polos.", icon: <Trophy aria-hidden className="h-5 w-5" /> },
] as const;

const urPlayCards = [
  { title: "Jogar", description: "Entrar em quadra, participar e começar a viver a temporada.", icon: <PlayCircle aria-hidden className="h-5 w-5" /> },
  { title: "Ser observado", description: "Presença, postura, nível e evolução entram no radar.", icon: <BadgeCheck aria-hidden className="h-5 w-5" /> },
  { title: "Construir histórico", description: "Cada participação ajuda a formar sua trajetória.", icon: <BookOpen aria-hidden className="h-5 w-5" /> },
  { title: "Encontrar caminho", description: "Seguir como atleta individual, dupla, equipe ou polo.", icon: <ArrowRight aria-hidden className="h-5 w-5" /> },
] as const;

const modalityCards = [
  {
    title: "Dupla",
    description: "Formato direto, dinâmico e ideal para criar química, ranking de formação e desempenho.",
    tag: "formação",
    iconPath: "/season-1/symbols/duplas-mistas-solid.svg",
  },
  {
    title: "Quarteto",
    description: "Formato coletivo, estratégico e ideal para equipes, comunicação e campanha.",
    tag: "equipe",
    iconPath: "/season-1/symbols/quartetos-solid.svg",
  },
] as const;

const poleCopy = {
  bh: "Polo da capital, com energia de arena, comunidade e calendário em construção.",
  betim: "Polo em expansão, forte para atletas que querem começar e ganhar ritmo.",
  contagem: "Polo estratégico para equipes, quadras, rivalidade saudável e presença regional.",
} as const;

const rankingCards = [
  { title: "Atletas", description: "Trajetória individual, presença, evolução e reconhecimento.", icon: <Users aria-hidden className="h-5 w-5" /> },
  { title: "Equipes", description: "Campanha do escudo, consistência coletiva e resultados.", icon: <Shield aria-hidden className="h-5 w-5" /> },
  { title: "Duplas", description: "Histórico de formação, química e desempenho por modalidade.", icon: <Swords aria-hidden className="h-5 w-5" /> },
  { title: "Polos", description: "Força coletiva da comunidade em Belo Horizonte, Betim e Contagem.", icon: <Flag aria-hidden className="h-5 w-5" /> },
] as const;

const teamCards = [
  { title: "Duplas", description: "Formações diretas com leitura rápida e identidade própria." },
  { title: "Quartetos", description: "Campanha coletiva, comunicação e estratégia de equipe." },
  { title: "Capitães", description: "Organização, presença, conduta e conexão com o elenco." },
  { title: "Identidade", description: "Escudo, polo, história e pertencimento competitivo." },
  { title: "Plano de Evolução", description: "Ajustes de nível, postura e caminho dentro da temporada." },
] as const;

const marketCards = [
  "Produtos oficiais",
  "Serviços esportivos",
  "Parceiros",
  "Experiências",
  "Para equipes",
  "Para polos",
] as const;

const mediaCards = [
  "Transmissões ao vivo",
  "Melhores jogadas",
  "Documentários",
  "Quadros esportivos",
  "Bastidores",
  "Registro de partidas",
] as const;

const hunterCards = [
  { title: "Mentalidade", description: "Postura competitiva, compromisso e evolução contínua." },
  { title: "Desenvolvimento", description: "Base técnica, física, mental e comportamental." },
  { title: "Equipes Hunters", description: "Formações orientadas por leitura, conduta e identidade." },
  { title: "Leitura de Jogo", description: "Tomada de decisão e entendimento do próprio nível." },
] as const;

const legendsCards = [
  "Representar o polo",
  "Ser destaque",
  "Viver o espetáculo",
  "Pontuar para o polo",
] as const;

const ruleCards = [
  "Participação",
  "Pontuação",
  "Fair Play",
  "Elegibilidade",
  "Critérios de desempate",
] as const;

export default function Home() {
  return (
    <main className="bg-[#050506] text-[#F4F0E6]" style={{ fontFamily: bodyFont }}>
      <section className="relative isolate overflow-hidden bg-[#050506]" id="hero">
        <div className="relative min-h-[690px] px-5 py-10 sm:px-6 md:py-16 lg:px-8">
          <EditorialImage
            className="absolute inset-0 -z-30 rounded-none border-0 opacity-40"
            image={homeImageRoles.hero}
            label="Temporada 1 Ultimate Rivals — Polos em Disputa"
            objectPosition="center 38%"
            priority
            sizes="100vw"
          />
          <TextureLayer />
          <div
            aria-hidden
            className="absolute inset-0 -z-20"
            style={{
              background:
                "linear-gradient(90deg, rgba(5,5,6,0.98) 0%, rgba(5,5,6,0.88) 52%, rgba(5,5,6,0.58) 100%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 -z-10 h-44"
            style={{ background: "linear-gradient(180deg, transparent, #050506)" }}
          />

          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-[#D4A437]/35 bg-[#D4A437]/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-[#D4A437]">
                Temporada 1 Ultimate Rivals
              </span>
              <h1
                className="mt-5 text-[clamp(4rem,18vw,8.4rem)] font-black uppercase leading-[0.78]"
                style={{ fontFamily: displayFont, letterSpacing: "0.01em" }}
              >
                Polos em{" "}
                <span className="block text-[#D4A437]">disputa.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#E4DED2] md:text-xl md:leading-8">
                Entre pelo UR Play, jogue no seu nível, construa ranking, represente seu polo e viva uma temporada feita
                para evoluir atletas, equipes e comunidades.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#A9A59B] md:text-base md:leading-7">
                Você não precisa ter equipe para começar. No UR Play, atletas individuais e equipes entram na jornada,
                são observados, entendem seu nível e começam a construir histórico dentro do Ultimate Rivals.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href="/ur-play" className="min-h-12">
                  Começar pelo UR Play
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Button>
                <Button href="/temporada" variant="secondary" className="min-h-12">
                  Entender a temporada
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-[#D4A437]/20 bg-[#111218]/90 p-4 shadow-[0_0_60px_rgba(0,0,0,0.42)] backdrop-blur">
              <p className="px-2 pb-3 text-[11px] font-black uppercase tracking-[0.18em] text-[#D4A437]">
                Temporada em cards
              </p>
              <div className="grid gap-3">
                {heroStats.map((stat) => (
                  <div className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3" key={stat.label}>
                    <p className="text-sm font-black uppercase tracking-[0.1em] text-[#F4F0E6]">{stat.label}</p>
                    <p className="mt-1 text-xs leading-5 text-[#A9A59B]">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Como funciona"
        id="como-funciona"
        style={{ background: "#08080A" }}
        subtitle="Um caminho simples para entrar, jogar, evoluir, ranquear e disputar momentos maiores."
        title="Como a temporada funciona."
      >
        <HorizontalCards>
          {howItWorks.map((card) => (
            <div className="w-[82vw] max-w-[340px] shrink-0 snap-start md:w-auto md:max-w-none" key={card.title}>
              <PremiumCard {...card} />
            </div>
          ))}
        </HorizontalCards>
      </Section>

      <Section
        eyebrow="Ecossistema"
        id="ecossistema"
        style={{ background: "#0D0D12" }}
        subtitle="O Ultimate Rivals conecta competição, desenvolvimento, mídia, mercado, quadras e comunidade em uma jornada contínua."
        title="Mais que um torneio. Um ecossistema."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ecosystemCards.map((card) => (
            <PremiumCard {...card} key={card.title} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="UR Play"
        id="ur-play"
        style={{ background: "#08080A" }}
        subtitle="Antes de disputar etapas maiores, todo atleta e toda equipe passam pelo UR Play."
        title="Tudo começa no UR Play."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {urPlayCards.map((card) => (
            <PremiumCard {...card} key={card.title} />
          ))}
        </div>
        <ImpactPanel>Nenhum atleta ou equipe entra direto nas etapas principais sem passar pelo UR Play.</ImpactPanel>
      </Section>

      <Section
        eyebrow="Modalidades"
        id="modalidades"
        style={{ background: "#0D0D12" }}
        title="Dupla e Quarteto no mesmo ecossistema."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {modalityCards.map((card) => (
            <div
              className="relative overflow-hidden rounded-3xl border border-[#D4A437]/15 bg-[#111218] p-6 shadow-[0_0_46px_rgba(0,0,0,0.26)]"
              key={card.title}
            >
              <TextureLayer />
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[#D4A437]/20 bg-[#D4A437]/10">
                <Image alt="" aria-hidden height={36} src={card.iconPath} width={36} />
              </div>
              <p className="mt-5 text-[11px] font-black uppercase tracking-[0.14em] text-[#D4A437]">{card.tag}</p>
              <h3 className="mt-2 text-4xl font-black uppercase leading-[0.86]" style={{ fontFamily: displayFont }}>
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[#A9A59B]">{card.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Polos"
        id="polos"
        style={{ background: "#08080A" }}
        subtitle="Belo Horizonte, Betim e Contagem têm o mesmo peso, o mesmo formato e a mesma oportunidade."
        title="Defenda seu polo. Construa sua história."
      >
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5 sm:mx-0 sm:px-0 md:grid md:grid-cols-3 md:overflow-visible">
          {season1.poles.map((pole) => (
            <Link
              className="group relative w-[84vw] max-w-[360px] shrink-0 snap-start overflow-hidden rounded-3xl border border-[#D4A437]/15 bg-[#111218] shadow-[0_0_46px_rgba(0,0,0,0.24)] transition hover:border-[#D4A437]/45 md:w-auto md:max-w-none"
              href="/temporada#polos"
              key={pole.id}
            >
              <div className="relative min-h-[160px] border-b border-white/10 bg-[linear-gradient(135deg,rgba(212,164,55,0.18),rgba(255,255,255,0.04))]">
                <TextureLayer />
                <div className="relative z-10 flex min-h-[160px] items-center justify-center">
                  <Image alt={`Escudo do polo ${pole.name}`} height={92} src={pole.shieldPath} width={92} />
                </div>
              </div>
              <div className="p-5">
                <p className="text-[11px] font-black uppercase tracking-[0.14em] text-[#D4A437]">{pole.status}</p>
                <h3 className="mt-2 text-3xl font-black uppercase leading-[0.86]" style={{ fontFamily: displayFont }}>
                  {pole.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#A9A59B]">{poleCopy[pole.id]}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#D4A437]">
                  Ver polo
                  <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <ImpactPanel>O polo não é só onde você joga. É a comunidade que você ajuda a construir.</ImpactPanel>
      </Section>

      <Section
        eyebrow="Ranking"
        id="ranking"
        style={{ background: "#0D0D12" }}
        subtitle="No Ultimate Rivals, ranking não é só tabela. É critério, narrativa, evolução e reconhecimento."
        title="Ranking que gera histórico e visibilidade."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rankingCards.map((card) => (
            <PremiumCard {...card} key={card.title} />
          ))}
        </div>
        <ImpactPanel>
          A visibilidade é uma entrega central. O atleta precisa jogar, aparecer, evoluir e ser lembrado.
        </ImpactPanel>
        <div className="mt-7">
          <Button href="/ranking" variant="secondary">
            Ver ranking
          </Button>
        </div>
      </Section>

      <Section
        eyebrow="Equipes e Duplas"
        id="equipes-duplas"
        style={{ background: "#08080A" }}
        title="Equipes e duplas constroem campanha."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {teamCards.map((card) => (
            <PremiumCard description={card.description} icon={<Shield aria-hidden className="h-5 w-5" />} key={card.title} title={card.title} />
          ))}
        </div>
        <div className="mt-7">
          <Button href="/cadastro#equipe" variant="secondary">
            Cadastrar equipe
          </Button>
        </div>
      </Section>

      <Section
        eyebrow="UR Market"
        id="ur-market"
        style={{ background: "#0D0D12" }}
        subtitle="Uma vitrine para atletas, equipes e polos acessarem produtos próprios, serviços esportivos e benefícios de parceiros."
        title="UR Market: produtos, serviços e benefícios da temporada."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {marketCards.map((item) => (
            <MiniCard key={item}>{item}</MiniCard>
          ))}
        </div>
        <p className="mt-6 max-w-4xl text-sm leading-6 text-[#A9A59B]">
          Benefícios dependem de regras oficiais, parceiros ativos e disponibilidade. O UR Market é uma vitrine de
          possibilidades, não uma promessa automática.
        </p>
        <div className="mt-7">
          <Button href="/ur-market" variant="secondary">
            Conhecer UR Market
          </Button>
        </div>
      </Section>

      <Section
        eyebrow="Mídia"
        id="midia"
        style={{ background: "#08080A" }}
        subtitle="A temporada também precisa ser assistida."
        title="Mídia Ultimate Rivals."
      >
        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-[#D4A437]/15 bg-[#111218]">
            <EditorialImage
              className="absolute inset-0 rounded-none border-0 opacity-70"
              image={homeImageRoles.midia}
              label="Mídia Ultimate Rivals"
              objectPosition="center 45%"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,6,0.12),rgba(5,5,6,0.92))]" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#D4A437]">Mídia mostra. Blog aprofunda.</p>
              <p className="mt-2 text-sm leading-6 text-[#E4DED2]">
                Transmissão, bastidor e registro ficam separados da frente de Blog e SEO.
              </p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {mediaCards.map((item) => (
              <PremiumCard description="Formato editorial para transformar a temporada em narrativa." icon={<Radio aria-hidden className="h-5 w-5" />} key={item} title={item} />
            ))}
          </div>
        </div>
        <div className="mt-7">
          <Button href="/midia" variant="secondary">
            Ver mídia
          </Button>
        </div>
      </Section>

      <Section
        eyebrow="Metodologia Hunter"
        id="metodologia-hunter"
        style={{ background: "#0D0D12" }}
        subtitle="Mentalidade, desenvolvimento e evolução para atletas que querem competir melhor."
        title="Metodologia Hunter."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {hunterCards.map((card) => (
            <PremiumCard description={card.description} icon={<Target aria-hidden className="h-5 w-5" />} key={card.title} title={card.title} />
          ))}
        </div>
        <ImpactPanel>
          A Metodologia Hunter não promete carreira profissional. Ela cria base para atletas evoluírem com direção,
          critério e mentalidade.
        </ImpactPanel>
      </Section>

      <Section
        eyebrow="UR Legends"
        id="ur-legends"
        style={{ background: "#08080A" }}
        subtitle="O UR Legends reúne atletas de destaque para representar seus polos no maior espetáculo da temporada."
        title="UR Legends: o evento que todo atleta quer alcançar."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {legendsCards.map((item) => (
            <MiniCard key={item}>{item}</MiniCard>
          ))}
        </div>
        <ImpactPanel>
          A pontuação especial do UR Legends vale apenas para o Ranking dos Polos. Ranking dos Atletas, Ranking das
          Equipes e Ranking de Duplas seguem regras próprias.
        </ImpactPanel>
      </Section>

      <Section
        eyebrow="Regulamento"
        id="regulamento"
        style={{ background: "#0D0D12" }}
        title="Regras claras para todo mundo jogar melhor."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {ruleCards.map((item) => (
            <MiniCard key={item}>{item}</MiniCard>
          ))}
        </div>
        <div className="mt-7">
          <Button href="/regulamento" variant="secondary">
            Ver regulamento
          </Button>
        </div>
      </Section>

      <Section
        eyebrow="Começar"
        id="comecar"
        style={{ background: "#050506" }}
        subtitle="Entre pelo UR Play, jogue no seu nível, construa ranking, represente sua equipe e ajude seu polo a crescer."
        title="Sua temporada começa no primeiro jogo."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/ur-play">
            Começar pelo UR Play
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Button>
          <Button href="/cadastro" variant="secondary">
            Fazer cadastro
          </Button>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <PremiumCard
            description="Comece como atleta individual, jogue, seja observado e encontre seu caminho."
            icon={<Users aria-hidden className="h-5 w-5" />}
            title="Não tenho equipe"
          />
          <PremiumCard
            description="Cadastre sua equipe, passe pelo UR Play e prepare-se para disputar a temporada."
            icon={<Shield aria-hidden className="h-5 w-5" />}
            title="Já tenho equipe"
          />
          <PremiumCard
            description="Veja como a temporada conecta UR Play, UR Sprint, UR Series, ranking, UR Market e UR Legends."
            icon={<Sparkles aria-hidden className="h-5 w-5" />}
            title="Quero entender tudo"
          />
        </div>
      </Section>
    </main>
  );
}
