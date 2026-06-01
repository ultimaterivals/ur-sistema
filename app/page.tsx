import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  CircleDot,
  Coins,
  Crosshair,
  Eye,
  Flag,
  Flame,
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

type Feature = {
  title: string;
  description: string;
  tag?: string;
  icon?: ReactNode;
  href?: string;
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

function ArenaSection({ id, eyebrow, title, subtitle, children, className = "", style }: SectionProps) {
  return (
    <section
      className={`relative isolate overflow-hidden border-t border-white/10 px-5 py-14 sm:px-6 md:py-20 lg:px-8 ${className}`}
      id={id}
      style={style}
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow={eyebrow} subtitle={subtitle} title={title} />
        {children}
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: ReactNode; subtitle?: string }) {
  return (
    <div className="mb-7 max-w-4xl">
      {eyebrow ? (
        <p
          className="text-[11px] font-black uppercase tracking-[0.18em] text-[#D4A437]"
          style={{ fontFamily: bodyFont }}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className="mt-2 text-[clamp(2.25rem,9vw,5.25rem)] font-black uppercase leading-[0.82] text-[#F4F0E6]"
        style={{ fontFamily: displayFont, letterSpacing: "0.01em" }}
      >
        {title}
      </h2>
      {subtitle ? <p className="mt-4 max-w-3xl text-sm leading-6 text-[#B9B5AA] md:text-base md:leading-7">{subtitle}</p> : null}
    </div>
  );
}

function ArenaTexture() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.14]"
        style={{ backgroundImage: "url(/season-1/textures/bg-sand-texture.svg)", backgroundSize: "cover" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 -z-10 h-64 w-64 rounded-full bg-[#D4A437]/10 blur-3xl"
      />
    </>
  );
}

function FeatureCard({ title, description, tag, icon, href }: Feature) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#D4A437]/20 bg-[#D4A437]/10 text-[#D4A437]">
          {icon ?? <CircleDot aria-hidden className="h-5 w-5" />}
        </div>
        {tag ? (
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#D4A437]">
            {tag}
          </span>
        ) : null}
      </div>
      <h3
        className="mt-5 text-2xl font-black uppercase leading-[0.9] text-[#F4F0E6]"
        style={{ fontFamily: displayFont, letterSpacing: "0.02em" }}
      >
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#A9A59B]">{description}</p>
    </>
  );

  const className =
    "group relative min-h-full overflow-hidden rounded-2xl border border-white/10 bg-[#111218] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5 hover:border-[#D4A437]/45";

  if (href) {
    return (
      <Link className={className} href={href}>
        <ArenaTexture />
        {content}
      </Link>
    );
  }

  return (
    <div className={className}>
      <ArenaTexture />
      {content}
    </div>
  );
}

function GoldPanel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-[#D4A437]/25 bg-[#D4A437]/10 px-5 py-4 text-sm font-black uppercase leading-6 tracking-[0.08em] text-[#D4A437] ${className}`}>
      {children}
    </div>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.12em] text-[#F4F0E6]">
      {children}
    </span>
  );
}

const journey = [
  {
    title: "UR Play",
    description: "Entrada, cadastro, observação, jogos semanais e nivelamento.",
    icon: <PlayCircle aria-hidden className="h-5 w-5" />,
  },
  {
    title: "Ranking",
    description: "Atletas, equipes, duplas e polos constroem histórico.",
    icon: <Medal aria-hidden className="h-5 w-5" />,
  },
  {
    title: "UR Sprint",
    description: "Primeira disputa oficial dos polos.",
    icon: <Zap aria-hidden className="h-5 w-5" />,
  },
  {
    title: "UR Series",
    description: "Classificados dos polos se enfrentam.",
    icon: <Swords aria-hidden className="h-5 w-5" />,
  },
  {
    title: "UR Legends",
    description: "Evento principal com atletas de destaque.",
    icon: <Trophy aria-hidden className="h-5 w-5" />,
  },
] as const;

const entryCards = [
  {
    title: "Atleta individual",
    description: "Comece pelo UR Play, jogue, seja observado e encontre seu caminho.",
    icon: <Users aria-hidden className="h-5 w-5" />,
  },
  {
    title: "Dupla",
    description: "Crie química, ritmo, ranking de formação e rivalidade saudável.",
    icon: <Swords aria-hidden className="h-5 w-5" />,
  },
  {
    title: "Equipe/Quarteto",
    description: "Construa campanha, identidade, comunicação e trajetória competitiva.",
    icon: <Shield aria-hidden className="h-5 w-5" />,
  },
] as const;

const rankingPreview = [
  { pos: "01", name: "Atleta Modelo", pole: "Belo Horizonte", meta: "Dupla • N1 — Elite", pts: "1.240" },
  { pos: "02", name: "Equipe Modelo", pole: "Betim", meta: "Quarteto • N2 — Avançado", pts: "1.110" },
  { pos: "03", name: "Dupla Modelo", pole: "Contagem", meta: "Dupla • N3 — Desenvolvimento", pts: "980" },
] as const;

const ecosystem = [
  { title: "UR Play", description: "Entrada oficial para atletas e equipes.", icon: <PlayCircle aria-hidden className="h-5 w-5" /> },
  { title: "Ranking", description: "Histórico, critério e visibilidade.", icon: <Medal aria-hidden className="h-5 w-5" /> },
  { title: "Polos", description: "Comunidades com o mesmo peso.", icon: <Flag aria-hidden className="h-5 w-5" /> },
  { title: "Equipes e Duplas", description: "Campanhas e formações com identidade.", icon: <Shield aria-hidden className="h-5 w-5" /> },
  { title: "Mídia", description: "Transmissão, cortes, bastidores e histórias.", icon: <Camera aria-hidden className="h-5 w-5" /> },
  { title: "UR Market", description: "Vitrine de possibilidades da temporada.", icon: <Coins aria-hidden className="h-5 w-5" /> },
  { title: "Metodologia Hunter", description: "Mentalidade e evolução com critério.", icon: <Target aria-hidden className="h-5 w-5" /> },
  { title: "Quadras", description: "Bases físicas da comunidade.", icon: <Crosshair aria-hidden className="h-5 w-5" /> },
  { title: "UR Legends", description: "O espetáculo aspiracional.", icon: <Trophy aria-hidden className="h-5 w-5" /> },
] as const;

const marketItems = ["Produtos oficiais", "Serviços esportivos", "Parceiros", "Experiências", "Para equipes", "Para polos"] as const;

const mediaItems = [
  "Transmissões ao vivo",
  "Melhores jogadas",
  "Documentários",
  "Quadros esportivos",
  "Bastidores",
  "Conteúdo para redes",
  "Registro de partidas",
] as const;

const hunterItems = [
  "Mentalidade Hunter",
  "Desenvolvimento do atleta",
  "Equipes Hunters",
  "Leitura de jogo",
  "Evolução contínua",
  "Aplicação na temporada",
] as const;

const rules = ["Participação", "Pontuação", "Fair Play", "Elegibilidade", "Critérios de desempate"] as const;

const poleCopy = {
  bh: "Capital em quadra, energia de arena e comunidade pronta para representar.",
  betim: "Comunidade em expansão, ritmo competitivo e desejo de crescer dentro da areia.",
  contagem: "Polo estratégico para equipes, quadras, rivalidade saudável e presença da região.",
} as const;

export default function Home() {
  return (
    <main className="bg-[#050506] text-[#F4F0E6]" style={{ fontFamily: bodyFont }}>
      <section className="relative isolate min-h-[760px] overflow-hidden bg-[#050506]" id="hero">
        <EditorialImage
          className="absolute inset-0 -z-30 rounded-none border-0 opacity-44"
          image={homeImageRoles.hero}
          label="Temporada 1 Ultimate Rivals"
          objectPosition="center 38%"
          priority
          sizes="100vw"
        />
        <ArenaTexture />
        <div
          aria-hidden
          className="absolute inset-0 -z-20"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,5,6,0.98) 0%, rgba(5,5,6,0.88) 48%, rgba(5,5,6,0.55) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 -z-10 h-52"
          style={{ background: "linear-gradient(180deg, transparent, #050506)" }}
        />

        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-6 md:py-16 lg:grid-cols-[minmax(0,1fr)_390px] lg:px-8">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2">
              <Chip>Temporada 1 Ultimate Rivals</Chip>
              <Chip>Dupla</Chip>
              <Chip>Quarteto</Chip>
            </div>
            <p className="mt-7 text-[11px] font-black uppercase tracking-[0.18em] text-[#D4A437]">Polos em disputa.</p>
            <h1
              className="mt-3 max-w-4xl text-[clamp(4.25rem,18vw,9.4rem)] font-black uppercase leading-[0.76] text-[#F4F0E6]"
              style={{ fontFamily: displayFont, letterSpacing: "0.01em" }}
            >
              A temporada começa na areia.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-[#E4DED2] md:text-xl md:leading-8">
              Entre pelo UR Play, jogue no seu nível, construa ranking, represente seu polo e viva uma temporada feita
              para evoluir atletas, equipes e comunidades.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#A9A59B] md:text-base md:leading-7">
              Você não precisa ter equipe para começar. No Ultimate Rivals, atletas individuais, duplas e equipes entram
              pela mesma porta: o UR Play.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/ur-play" className="min-h-12">
                Começar pelo UR Play
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
              <Button href="#caminho" variant="secondary" className="min-h-12">
                Ver como funciona
              </Button>
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-[1.75rem] border border-[#D4A437]/20 bg-[#111218]/90 p-4 shadow-[0_0_70px_rgba(0,0,0,0.45)] backdrop-blur">
            <ArenaTexture />
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#D4A437]">Mini placar de polos</p>
                <p className="mt-1 text-xs text-[#A9A59B]">Modelo visual de temporada</p>
              </div>
              <Flame aria-hidden className="h-7 w-7 text-[#D4A437]" />
            </div>
            <div className="mt-4 grid gap-3">
              {season1.poles.map((pole) => (
                <div className="grid grid-cols-[48px_1fr_auto] items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-3" key={pole.id}>
                  <Image alt="" aria-hidden height={42} src={pole.shieldPath} width={42} />
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.08em] text-[#F4F0E6]">{pole.name}</p>
                    <p className="text-xs text-[#A9A59B]">Mesmo peso competitivo</p>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.12em] text-[#D4A437]">Ativo</span>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-[#D4A437]/20 bg-[#D4A437]/10 p-4">
              <p className="text-[11px] font-black uppercase tracking-[0.14em] text-[#D4A437]">Caminho resumido</p>
              <p className="mt-2 text-sm font-bold uppercase leading-6 text-[#F4F0E6]">
                UR Play → UR Sprint → UR Series → UR Legends
              </p>
            </div>
          </aside>
        </div>
      </section>

      <ArenaSection
        eyebrow="Caminho do atleta"
        id="caminho"
        style={{ background: "#08080A" }}
        subtitle="Você começa jogando. A temporada transforma sua participação em trajetória."
        title="Do primeiro jogo ao espetáculo."
      >
        <div className="relative grid gap-4 lg:grid-cols-5">
          <div aria-hidden className="absolute left-6 right-6 top-10 hidden h-px bg-[#D4A437]/20 lg:block" />
          {journey.map((step, index) => (
            <div className="relative rounded-3xl border border-white/10 bg-[#111218] p-5 shadow-[0_16px_46px_rgba(0,0,0,0.26)]" key={step.title}>
              <ArenaTexture />
              <div className="flex items-center justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#D4A437]/20 bg-[#D4A437]/10 text-[#D4A437]">
                  {step.icon}
                </div>
                <span className="text-[11px] font-black uppercase tracking-[0.16em] text-[#D4A437]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-black uppercase leading-[0.88]" style={{ fontFamily: displayFont }}>
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#A9A59B]">{step.description}</p>
            </div>
          ))}
        </div>
      </ArenaSection>

      <ArenaSection
        eyebrow="Polos"
        id="polos"
        style={{ background: "#0D0D12" }}
        subtitle="Belo Horizonte, Betim e Contagem têm o mesmo peso. O que muda é a força que cada comunidade constrói dentro da quadra."
        title="Defenda seu polo."
      >
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#D4A437]/20 bg-[#111218] p-6">
            <ArenaTexture />
            <Flag aria-hidden className="h-10 w-10 text-[#D4A437]" />
            <h3 className="mt-6 text-4xl font-black uppercase leading-[0.86]" style={{ fontFamily: displayFont }}>
              Mapa de comunidades em construção.
            </h3>
            <p className="mt-4 text-sm leading-6 text-[#A9A59B]">
              O polo não é só onde você joga. É a comunidade que você ajuda a construir.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Chip>Belo Horizonte</Chip>
              <Chip>Betim</Chip>
              <Chip>Contagem</Chip>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {season1.poles.map((pole) => (
              <Link
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111218] shadow-[0_16px_46px_rgba(0,0,0,0.26)] transition hover:border-[#D4A437]/45"
                href="/temporada#polos"
                key={pole.id}
              >
                <div className="relative grid min-h-[172px] place-items-center border-b border-white/10 bg-[linear-gradient(135deg,rgba(212,164,55,0.18),rgba(255,255,255,0.04))]">
                  <ArenaTexture />
                  <Image alt={`Escudo do polo ${pole.name}`} height={96} src={pole.shieldPath} width={96} />
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#D4A437]">Status demonstrativo</p>
                  <h3 className="mt-2 text-3xl font-black uppercase leading-[0.86]" style={{ fontFamily: displayFont }}>
                    {pole.name}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[#A9A59B]">{poleCopy[pole.id]}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#D4A437]">
                    Representar
                    <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ArenaSection>

      <ArenaSection
        eyebrow="Entrada"
        id="entrada"
        style={{ background: "#08080A" }}
        title="Com ou sem equipe, você pode começar."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {entryCards.map((card) => (
            <FeatureCard {...card} key={card.title} />
          ))}
        </div>
        <div className="mt-7">
          <Button href="/ur-play">
            Começar pelo UR Play
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Button>
        </div>
      </ArenaSection>

      <ArenaSection
        eyebrow="Ranking"
        id="ranking-preview"
        style={{ background: "#0D0D12" }}
        subtitle="No Ultimate Rivals, ranking não é só tabela. É critério, narrativa, evolução e reconhecimento."
        title="Ranking que gera histórico e visibilidade."
      >
        <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#D4A437]/25 bg-[#111218] p-4 shadow-[0_0_70px_rgba(212,164,55,0.1)]">
            <ArenaTexture />
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#D4A437]">Painel competitivo</p>
                <h3 className="mt-1 text-3xl font-black uppercase leading-[0.9]" style={{ fontFamily: displayFont }}>
                  Top 3 demonstrativo
                </h3>
              </div>
              <span className="rounded-full border border-[#D4A437]/25 bg-[#D4A437]/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#D4A437]">
                Dados ilustrativos
              </span>
            </div>
            <div className="mt-4 grid gap-3">
              {rankingPreview.map((row) => (
                <div className="grid grid-cols-[44px_1fr_auto] items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-3" key={row.pos}>
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-[#D4A437]/20 bg-[#D4A437]/10 text-lg font-black text-[#D4A437]">
                    {row.pos}
                  </span>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.08em] text-[#F4F0E6]">{row.name}</p>
                    <p className="mt-1 text-xs text-[#A9A59B]">{row.pole} • {row.meta}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-black text-[#D4A437]">{row.pts}</p>
                    <p className="text-[10px] uppercase tracking-[0.12em] text-[#A9A59B]">pts</p>
                  </div>
                </div>
              ))}
            </div>
            <GoldPanel className="mt-4">
              A visibilidade é parte da entrega. O atleta precisa jogar, aparecer, evoluir e ser lembrado.
            </GoldPanel>
          </div>
          <div className="grid gap-3">
            {["Atletas", "Equipes", "Duplas", "Polos", "Funções", "Evolução", "Fair Play"].map((item) => (
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#111218] px-4 py-3" key={item}>
                <span className="text-sm font-black uppercase tracking-[0.1em] text-[#F4F0E6]">{item}</span>
                <Eye aria-hidden className="h-4 w-4 text-[#D4A437]" />
              </div>
            ))}
            <GoldPanel>
              UR Legends pontua especialmente apenas o Ranking dos Polos. Ranking dos Atletas, Ranking das Equipes e
              Ranking de Duplas seguem regras próprias.
            </GoldPanel>
          </div>
        </div>
      </ArenaSection>

      <ArenaSection
        eyebrow="Ecossistema"
        id="ecossistema"
        style={{ background: "#08080A" }}
        subtitle="O Ultimate Rivals conecta entrada, competição, desenvolvimento, mídia, benefícios possíveis e espetáculo em uma jornada contínua."
        title="Não é só torneio. É ecossistema."
      >
        <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div className="relative rounded-[2rem] border border-[#D4A437]/20 bg-[#111218] p-6">
            <ArenaTexture />
            <Sparkles aria-hidden className="h-10 w-10 text-[#D4A437]" />
            <h3 className="mt-6 text-4xl font-black uppercase leading-[0.86]" style={{ fontFamily: displayFont }}>
              Uma temporada com camadas.
            </h3>
            <p className="mt-4 text-sm leading-6 text-[#A9A59B]">
              A mesma jornada organiza atleta, equipe, polo, quadra, mídia, metodologia e espetáculo.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ecosystem.map((item) => (
              <FeatureCard {...item} key={item.title} />
            ))}
          </div>
        </div>
      </ArenaSection>

      <ArenaSection
        eyebrow="UR Market"
        id="ur-market"
        style={{ background: "#0D0D12" }}
        subtitle="Produtos, serviços, experiências e benefícios possíveis para atletas, equipes e polos."
        title="UR Market: a vitrine da temporada."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {marketItems.map((item) => (
            <div className="rounded-2xl border border-white/10 bg-[#111218] px-4 py-5 text-sm font-black uppercase leading-5 tracking-[0.08em]" key={item}>
              <Coins aria-hidden className="mb-4 h-5 w-5 text-[#D4A437]" />
              {item}
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-4xl text-sm leading-6 text-[#A9A59B]">
          Benefícios dependem de regras oficiais, parceiros ativos e disponibilidade. O UR Market é uma vitrine de
          possibilidades, não uma promessa automática.
        </p>
      </ArenaSection>

      <ArenaSection
        eyebrow="Mídia"
        id="midia"
        style={{ background: "#08080A" }}
        subtitle="O atleta não quer apenas jogar. Ele quer viver, aparecer, evoluir e ser lembrado."
        title="A temporada também precisa ser assistida."
      >
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-[#D4A437]/15 bg-[#111218]">
            <EditorialImage
              className="absolute inset-0 rounded-none border-0 opacity-70"
              image={homeImageRoles.midia}
              label="Mídia Ultimate Rivals"
              objectPosition="center 44%"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,6,0.05),rgba(5,5,6,0.94))]" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#D4A437]">Transmissão esportiva</p>
              <h3 className="mt-2 text-4xl font-black uppercase leading-[0.86]" style={{ fontFamily: displayFont }}>
                Jogos viram história.
              </h3>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {mediaItems.map((item) => (
              <div className="rounded-2xl border border-white/10 bg-[#111218] px-4 py-4 text-sm font-black uppercase tracking-[0.08em]" key={item}>
                <Radio aria-hidden className="mb-4 h-5 w-5 text-[#D4A437]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </ArenaSection>

      <ArenaSection
        eyebrow="Metodologia Hunter"
        id="metodologia-hunter"
        style={{ background: "#0D0D12" }}
        subtitle="Mentalidade, desenvolvimento e evolução para atletas que querem competir melhor."
        title="Metodologia Hunter."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {hunterItems.map((item) => (
            <FeatureCard description="Base para evoluir com direção, critério e mentalidade dentro da temporada." icon={<Target aria-hidden className="h-5 w-5" />} key={item} title={item} />
          ))}
        </div>
        <GoldPanel className="mt-6">
          A Metodologia Hunter não promete carreira profissional. Ela cria base para atletas evoluírem com direção,
          critério e mentalidade.
        </GoldPanel>
      </ArenaSection>

      <ArenaSection
        eyebrow="UR Legends"
        id="ur-legends"
        style={{ background: "#08080A" }}
        subtitle="O UR Legends reúne atletas de destaque para representar seus polos no maior espetáculo da temporada."
        title="UR Legends: o evento que todo atleta quer alcançar."
      >
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#D4A437]/20 bg-[#111218] p-6">
            <ArenaTexture />
            <Trophy aria-hidden className="h-12 w-12 text-[#D4A437]" />
            <h3 className="mt-7 text-5xl font-black uppercase leading-[0.82]" style={{ fontFamily: displayFont }}>
              Estar no UR Legends significa que sua trajetória chamou atenção.
            </h3>
          </div>
          <div className="grid gap-3">
            {["Representar o polo", "Ser destaque", "Viver o espetáculo", "Pontuar para o polo"].map((item) => (
              <div className="rounded-2xl border border-white/10 bg-[#111218] px-4 py-4 text-sm font-black uppercase tracking-[0.08em]" key={item}>
                <Trophy aria-hidden className="mb-4 h-5 w-5 text-[#D4A437]" />
                {item}
              </div>
            ))}
            <GoldPanel>A pontuação especial movimenta apenas o Ranking dos Polos.</GoldPanel>
          </div>
        </div>
      </ArenaSection>

      <ArenaSection
        eyebrow="Regulamento"
        id="regulamento"
        style={{ background: "#0D0D12" }}
        subtitle="Critério claro reduz confusão, evita improviso e protege a experiência da temporada."
        title="Regras claras para jogar melhor."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {rules.map((item) => (
            <div className="rounded-2xl border border-white/10 bg-[#111218] px-4 py-4 text-sm font-black uppercase tracking-[0.08em]" key={item}>
              <BadgeCheck aria-hidden className="mb-4 h-5 w-5 text-[#D4A437]" />
              {item}
            </div>
          ))}
        </div>
      </ArenaSection>

      <ArenaSection
        eyebrow="Começar"
        id="comecar"
        style={{ background: "#050506" }}
        subtitle="Entre pelo UR Play, jogue no seu nível, construa ranking, represente seu polo e faça parte da Temporada 1."
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
          <FeatureCard
            description="Entre pelo UR Play, jogue, seja observado e encontre um caminho dentro da temporada."
            icon={<Users aria-hidden className="h-5 w-5" />}
            title="Começo individual"
          />
          <FeatureCard
            description="Forme dupla, monte equipe, construa campanha e represente seu polo."
            icon={<Shield aria-hidden className="h-5 w-5" />}
            title="Construção coletiva"
          />
          <FeatureCard
            description="Ranking, mídia, metodologia, Market e Legends transformam participação em trajetória."
            icon={<Sparkles aria-hidden className="h-5 w-5" />}
            title="Jornada completa"
          />
        </div>
      </ArenaSection>
    </main>
  );
}
