import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  ChevronDown,
  CircleDot,
  Coins,
  Flag,
  Flame,
  Handshake,
  Medal,
  PlayCircle,
  Radio,
  Shield,
  Shirt,
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
import type { SiteImage } from "@/lib/content/site-images";

const displayFont = "'Oswald', sans-serif";
const bodyFont = "'Manrope', system-ui, sans-serif";

type HomeCard = {
  title: string;
  description: string;
  tag?: string;
  href?: string;
  cta?: string;
  icon?: ReactNode;
  id?: string;
};

type FeatureImageCard = {
  title: string;
  description: string;
  image: SiteImage;
  tag: string;
};

const sectionBase =
  "relative isolate overflow-hidden border-t border-white/10 px-5 py-14 md:py-20 lg:px-8 lg:py-24";

function Section({
  id,
  children,
  className = "",
  style,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <section className={`${sectionBase} ${className}`} id={id} style={style}>
      <div className="relative z-10 mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function TextureLayer({ variant = "subtle" }: { variant?: "subtle" | "strong" }) {
  return (
    <>
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 -z-20 ${
          variant === "strong" ? "opacity-[0.13]" : "opacity-[0.07]"
        }`}
        style={{ backgroundImage: "url(/season-1/textures/bg-sand-texture.svg)", backgroundSize: "cover" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.055]"
        style={{ backgroundImage: "url(/season-1/textures/bg-arena-grid.svg)", backgroundSize: "cover" }}
      />
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto mb-9 max-w-4xl text-center md:mb-12" : "mb-9 max-w-4xl md:mb-12"}>
      {eyebrow ? (
        <p
          className="inline-flex items-center gap-2 rounded-full border border-[#D4A437]/25 bg-[#D4A437]/10 px-4 py-2 text-[10px] font-black uppercase leading-4 tracking-[0.2em] text-[#D4A437]"
          style={{ fontFamily: bodyFont }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#D4A437]" />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className="mt-4 text-balance text-[clamp(2.35rem,11vw,5rem)] font-bold uppercase leading-[0.9] text-[#F4F0E6]"
        style={{ fontFamily: displayFont, letterSpacing: "0.02em" }}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-5 text-base leading-7 text-[#B9B5AA] md:text-lg md:leading-8 ${
            align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl"
          }`}
          style={{ fontFamily: bodyFont }}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function PremiumCard({ title, description, tag, href, cta, icon, id }: HomeCard) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        {icon ? (
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[#D4A437]/25 bg-[#D4A437]/10 text-[#D4A437] shadow-[0_0_26px_rgba(212,164,55,0.12)]">
            {icon}
          </span>
        ) : null}
        {tag ? (
          <span
            className="rounded-full border border-[#D4A437]/20 bg-[#D4A437]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#D4A437]"
            style={{ fontFamily: bodyFont }}
          >
            {tag}
          </span>
        ) : null}
      </div>
      <h3
        className="mt-6 text-2xl font-bold uppercase leading-[0.95] text-[#F4F0E6]"
        style={{ fontFamily: displayFont, letterSpacing: "0.03em" }}
      >
        {title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-[#A9A59B]" style={{ fontFamily: bodyFont }}>
        {description}
      </p>
      {cta ? (
        <span
          className="mt-6 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.14em] text-[#D4A437]"
          style={{ fontFamily: bodyFont }}
        >
          {cta}
          <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      ) : null}
    </>
  );

  const className =
    "group relative min-h-[220px] overflow-hidden rounded-[1.65rem] border border-white/10 bg-[#111218] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-[#D4A437]/45 hover:shadow-[0_20px_70px_rgba(212,164,55,0.14)]";

  if (href) {
    return (
      <Link className={className} href={href} id={id}>
        <TextureLayer />
        {content}
      </Link>
    );
  }

  return (
    <div className={className} id={id}>
      <TextureLayer />
      {content}
    </div>
  );
}

function ImpactPanel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[1.75rem] border border-[#D4A437]/20 bg-[#D4A437]/10 px-5 py-4 text-sm font-black uppercase leading-6 tracking-[0.1em] text-[#D4A437] shadow-[0_0_42px_rgba(212,164,55,0.10)] ${className}`}
      style={{ fontFamily: bodyFont }}
    >
      {children}
    </div>
  );
}

function HorizontalCards({ children }: { children: ReactNode }) {
  return (
    <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 xl:grid-cols-4">
      {children}
    </div>
  );
}

function DetailsCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111218] open:border-[#D4A437]/35">
      <summary
        className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left text-sm font-black uppercase tracking-[0.12em] text-[#F4F0E6]"
        style={{ fontFamily: bodyFont }}
      >
        {title}
        <ChevronDown aria-hidden className="h-5 w-5 shrink-0 text-[#D4A437] transition-transform group-open:rotate-180" />
      </summary>
      <div className="border-t border-white/10 px-5 pb-5 pt-4 text-sm leading-6 text-[#A9A59B]">{children}</div>
    </details>
  );
}

function ImageFeatureCard({ title, description, image, tag }: FeatureImageCard) {
  return (
    <div className="group min-w-[82vw] max-w-[380px] snap-start overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111218] shadow-[0_18px_60px_rgba(0,0,0,0.28)] transition hover:border-[#D4A437]/45 md:min-w-0 md:max-w-none">
      <div className="relative min-h-[170px] overflow-hidden border-b border-white/10">
        <EditorialImage
          className="absolute inset-0 min-h-0 rounded-none border-0 opacity-75 transition duration-500 group-hover:scale-105"
          image={image}
          objectPosition="center"
          sizes="(max-width: 768px) 82vw, 33vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,11,0.15),rgba(10,10,11,0.88))]" />
        <span
          className="absolute left-4 top-4 rounded-full border border-[#D4A437]/25 bg-black/55 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#D4A437] backdrop-blur"
          style={{ fontFamily: bodyFont }}
        >
          {tag}
        </span>
      </div>
      <div className="p-6">
        <h3
          className="text-3xl font-bold uppercase leading-[0.9] text-[#F4F0E6]"
          style={{ fontFamily: displayFont, letterSpacing: "0.03em" }}
        >
          {title}
        </h3>
        <p className="mt-4 text-sm leading-6 text-[#A9A59B]" style={{ fontFamily: bodyFont }}>
          {description}
        </p>
      </div>
    </div>
  );
}

const heroStats = [
  { label: "3 Polos", value: "BH, Betim e Contagem" },
  { label: "2 Modalidades", value: "Dupla e Quarteto" },
  { label: "1 Caminho de entrada", value: "UR Play" },
  { label: "4 Etapas", value: "UR Play, UR Sprint, UR Series e UR Legends" },
] as const;

const urPlayCards: HomeCard[] = [
  {
    title: "Jogar",
    description: "Você entra em quadra, participa e começa a viver a experiência Ultimate Rivals.",
    icon: <PlayCircle className="h-6 w-6" />,
  },
  {
    title: "Ser observado",
    description: "Seu nível, presença, postura e evolução começam a ser acompanhados.",
    icon: <Target className="h-6 w-6" />,
  },
  {
    title: "Construir histórico",
    description: "Cada participação ajuda a formar sua trajetória no ranking.",
    icon: <Trophy className="h-6 w-6" />,
  },
  {
    title: "Encontrar caminho",
    description: "Você pode seguir como atleta individual, entrar em uma equipe ou disputar eventos futuros.",
    icon: <ArrowRight className="h-6 w-6" />,
  },
];

const participationCards: HomeCard[] = [
  {
    title: "Atleta individual",
    description: "Para quem ainda não tem equipe, mas quer jogar, ser observado, entender seu nível e começar a construir ranking.",
    href: "/ur-play",
    cta: "Começar pelo UR Play",
    tag: "Sem equipe? Pode começar",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Equipe",
    description: "Para grupos que querem representar um escudo, disputar por nível e somar pontos na temporada.",
    href: "/cadastro#equipe",
    cta: "Cadastrar equipe",
    tag: "Escudo e campanha",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "Polo",
    description: "Para atletas e equipes que querem fortalecer sua região dentro da disputa entre Belo Horizonte, Betim e Contagem.",
    href: "#polos",
    cta: "Ver polos",
    tag: "Comunidade",
    icon: <Flag className="h-6 w-6" />,
  },
];

const modalityCards: HomeCard[] = [
  {
    title: "Dupla",
    description: "Formato dinâmico, acessível e ideal para começar a construir ritmo.",
    href: "/cadastro#atleta",
    cta: "Começar",
    tag: "Ideal para começar",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Quarteto",
    description: "Formato coletivo para quem quer jogar em grupo, criar estratégia e representar uma formação.",
    href: "/cadastro#equipe",
    cta: "Cadastrar formação",
    tag: "Jogo coletivo",
    icon: <Shield className="h-6 w-6" />,
  },
];

const poleMeaningCards: HomeCard[] = [
  {
    title: "Pertencimento",
    description: "O atleta deixa de jogar eventos soltos e passa a fazer parte de uma comunidade.",
    icon: <Handshake className="h-6 w-6" />,
  },
  {
    title: "Caminho",
    description: "O polo ajuda a organizar entrada, nivelamento, equipes, eventos e evolução.",
    icon: <ArrowRight className="h-6 w-6" />,
  },
  {
    title: "Equilíbrio entre polos",
    description: "Todos os polos seguem o mesmo formato de disputa, pontuação e classificação.",
    icon: <BadgeCheck className="h-6 w-6" />,
  },
  {
    title: "Rivalidade saudável",
    description: "Belo Horizonte, Betim e Contagem competem com regra, respeito e diversão.",
    icon: <Swords className="h-6 w-6" />,
  },
  {
    title: "Valorização coletiva",
    description: "Atletas individuais, equipes iniciantes, equipes competitivas e comunidades inteiras podem ser reconhecidas.",
    icon: <Medal className="h-6 w-6" />,
  },
];

const poleCards = [
  {
    title: "Belo Horizonte",
    tag: "Polo BH",
    description:
      "Polo da Temporada 1 com o mesmo formato oficial de entrada, nivelamento, jogos, ranking e classificação dos demais polos.",
    image: homeImageRoles.urPlay,
  },
  {
    title: "Betim",
    tag: "Polo Betim",
    description: "Polo da Temporada 1 com a mesma estrutura de disputa, pontuação e oportunidade de crescimento.",
    image: homeImageRoles.comunidade,
  },
  {
    title: "Contagem",
    tag: "Polo Contagem",
    description: "Polo da Temporada 1 com o mesmo peso competitivo, a mesma regra e o mesmo caminho de evolução.",
    image: homeImageRoles.equipes,
  },
] as const;

const identityCards: HomeCard[] = [
  {
    title: "Significado",
    description: "Cada temporada representa uma mensagem central para os atletas.",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    title: "Aprendizado",
    description: "A temporada ensina compromisso, evolução, respeito, presença, trabalho em equipe e pertencimento.",
    icon: <Sparkles className="h-6 w-6" />,
  },
  {
    title: "Identidade visual",
    description: "Cores, símbolos, cards, badges, uniformes e mídia transformam competição em experiência.",
    icon: <Flame className="h-6 w-6" />,
  },
  {
    title: "Pertencimento",
    description: "O uniforme do polo não é apenas uma camisa. Ele representa comunidade, trajetória e responsabilidade.",
    icon: <Shirt className="h-6 w-6" />,
  },
];

const uniformCards: HomeCard[] = [
  {
    title: "Uniforme Belo Horizonte",
    description: "Representa a energia, a presença e a construção competitiva do polo BH.",
    icon: <Shirt className="h-6 w-6" />,
  },
  {
    title: "Uniforme Betim",
    description: "Representa a força da comunidade, a evolução coletiva e o crescimento do polo Betim.",
    icon: <Shirt className="h-6 w-6" />,
  },
  {
    title: "Uniforme Contagem",
    description: "Representa pertencimento, organização e a identidade competitiva do polo Contagem.",
    icon: <Shirt className="h-6 w-6" />,
  },
];

const journeyCards: HomeCard[] = [
  {
    title: "UR Play",
    description: "Entrada, observação e nivelamento.",
    icon: <PlayCircle className="h-6 w-6" />,
  },
  {
    title: "UR Sprint",
    description: "Primeira disputa oficial de cada polo.",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "UR Series",
    description: "Classificados dos polos se encontram em uma disputa entre comunidades.",
    icon: <Target className="h-6 w-6" />,
  },
  {
    title: "UR Legends",
    description: "Evento especial com atletas de destaque representando seus polos.",
    icon: <Trophy className="h-6 w-6" />,
  },
];

const levelCards: HomeCard[] = [
  {
    title: "N1 — Elite",
    description:
      "Atletas e equipes com maior desempenho, consistência, ritmo competitivo e experiência em jogos de maior exigência.",
    tag: "Maior exigência",
    icon: <Medal className="h-6 w-6" />,
  },
  {
    title: "N2 — Avançado",
    description:
      "Atletas e equipes que já jogam com regularidade, têm experiência em torneios e buscam evolução em uma disputa organizada.",
    tag: "Competição regular",
    icon: <Trophy className="h-6 w-6" />,
  },
  {
    title: "N3 — Desenvolvimento",
    description:
      "Atletas iniciantes, em formação, retornando ao esporte ou que precisam de orientação antes de entrar nas competições oficiais com mais segurança.",
    tag: "Evolução guiada",
    icon: <Shield className="h-6 w-6" />,
  },
];

const rankingCards: HomeCard[] = [
  {
    title: "Ranking do Atleta",
    description: "Mostra a trajetória individual de cada jogador.",
    id: "ranking-atletas",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Ranking da Equipe",
    description: "Mostra a campanha própria de cada equipe.",
    id: "ranking-equipes",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "Ranking dos Polos",
    description: "Mostra a força coletiva de cada região.",
    id: "ranking-polos",
    icon: <Flag className="h-6 w-6" />,
  },
];

const rewardCards: HomeCard[] = [
  {
    title: "Para atletas",
    description: "Benefícios individuais, produtos, experiências, descontos, conteúdos, treinos e destaques.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Para equipes",
    description: "Orientações, análise de formação, apoio de desenvolvimento, mídia, benefícios e ativações.",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "Para polos",
    description: "Treinos coletivos, clínicas, desafios, ativações, cobertura especial e recompensas comunitárias.",
    icon: <Flag className="h-6 w-6" />,
  },
];

const marketCards: HomeCard[] = [
  {
    title: "Atletas",
    description: "Produtos, experiências, treinos, descontos e benefícios individuais.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Equipes",
    description: "Mentoria de capitão, análise de formação, identidade, mídia e inscrições com desconto.",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "Polos",
    description: "Ativações, clínicas, desafios, cobertura especial, benefícios coletivos e ações com parceiros.",
    icon: <Coins className="h-6 w-6" />,
  },
];

const legendsCriteria = [
  "ranking do atleta",
  "presença",
  "desempenho",
  "postura",
  "evolução",
  "fair play",
  "elegibilidade",
  "participação na temporada",
] as const;

const extraActivities = [
  "equipe mais organizada",
  "melhor torcida",
  "capitão destaque",
  "atleta revelação",
  "evolução da rodada",
  "fair play",
  "presença completa",
  "desafio entre polos",
  "história da rodada",
  "melhor formação",
] as const;

const finalCards: HomeCard[] = [
  {
    title: "Não tenho equipe",
    description: "Comece como atleta individual, jogue, seja observado e encontre seu caminho.",
    href: "/cadastro#atleta",
    cta: "Cadastrar atleta",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Já tenho equipe",
    description: "Cadastre sua equipe, passe pelo UR Play e prepare-se para o UR Sprint do seu polo.",
    href: "/cadastro#equipe",
    cta: "Cadastrar equipe",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "Quero entender tudo",
    description: "Veja como a temporada conecta UR Play, UR Sprint, UR Series, Ranking, UR Market e UR Legends.",
    href: "/temporada",
    cta: "Entender temporada",
    icon: <BookOpen className="h-6 w-6" />,
  },
];

const officialModalities = season1.modalities.filter((modality) => modality.id === "dupla" || modality.id === "quarteto");

export default function Home() {
  return (
    <main className="bg-[#08080A] text-[#F4F0E6]">
      <section className="relative isolate overflow-hidden border-b border-white/10" id="hero">
        <div className="relative flex min-h-[calc(100dvh-72px)] items-center py-12 md:min-h-[760px] md:py-20">
          <EditorialImage
            className="absolute inset-0 -z-30 min-h-0 rounded-none border-0 opacity-42"
            image={homeImageRoles.hero}
            label="Ultimate Rivals Temporada 1 — Polos em Disputa"
            objectPosition="center 42%"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(8,8,10,0.58)_0%,rgba(8,8,10,0.90)_62%,#08080A_100%)]" />
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_28%,rgba(212,164,55,0.28),transparent_44%)]" />
          <TextureLayer variant="strong" />

          <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.48fr)] lg:px-8">
            <div className="max-w-4xl">
              <p
                className="inline-flex items-center gap-2 rounded-full border border-[#D4A437]/30 bg-[#D4A437]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#D4A437] shadow-[0_0_30px_rgba(212,164,55,0.10)]"
                style={{ fontFamily: bodyFont }}
              >
                <span className="h-2 w-2 rounded-full bg-[#D4A437]" />
                Temporada 1 Ultimate Rivals
              </p>

              <h1
                className="mt-6 max-w-5xl text-[clamp(3.65rem,18vw,9.5rem)] font-bold uppercase leading-[0.78] text-[#F4F0E6]"
                style={{ fontFamily: displayFont, letterSpacing: "0.01em" }}
              >
                Polos em <span className="text-[#D4A437]">disputa.</span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg font-bold leading-8 text-[#F4F0E6] md:text-2xl md:leading-9">
                A temporada começa no UR Play. Atletas individuais e equipes entram na jornada, jogam no seu nível,
                somam histórico e ajudam Belo Horizonte, Betim e Contagem a crescerem no Ranking dos Polos.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#C9C4B8] md:text-lg md:leading-8">
                Você não precisa ter equipe para começar. No UR Play, todo atleta entra, joga, é observado, entende seu
                nível e começa a construir sua trajetória dentro do Ultimate Rivals.
              </p>
              <p
                className="mt-6 max-w-3xl text-[11px] font-black uppercase leading-5 tracking-[0.15em] text-[#D4A437]"
                style={{ fontFamily: bodyFont }}
              >
                Todo mundo começa pelo UR Play: atletas individuais, equipes formadas e jogadores em busca de equipe.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button className="rounded-full px-6" href="/ur-play">
                  Começar pelo UR Play
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Button>
                <Button className="rounded-full px-6" href="#jornada" variant="secondary">
                  Entender a temporada
                </Button>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-[#D4A437]/20 bg-[#111218]/88 p-4 shadow-[0_22px_80px_rgba(0,0,0,0.48)] backdrop-blur">
              <div className="border-b border-white/10 pb-4">
                <p
                  className="text-[10px] font-black uppercase tracking-[0.18em] text-[#D4A437]"
                  style={{ fontFamily: bodyFont }}
                >
                  Mapa da temporada
                </p>
              </div>
              <div className="mt-4 grid gap-3">
                {heroStats.map((stat) => (
                  <div className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-4" key={stat.label}>
                    <p
                      className="text-lg font-bold uppercase leading-none text-[#F4F0E6]"
                      style={{ fontFamily: displayFont, letterSpacing: "0.04em" }}
                    >
                      {stat.label}
                    </p>
                    <p className="mt-2 text-xs font-bold uppercase leading-5 tracking-[0.08em] text-[#D4A437]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Section id="ur-play" style={{ background: "#08080A" }}>
        <TextureLayer />
        <SectionHeading
          eyebrow="Porta de entrada"
          title="A temporada começa no UR Play."
          subtitle="Antes de disputar etapas maiores, todo atleta e toda equipe passam pelo UR Play para cadastro, observação, nivelamento e construção de histórico."
        />
        <div className="mx-auto mb-10 max-w-4xl text-center text-base leading-7 text-[#B9B5AA] md:text-lg md:leading-8">
          O UR Play é a porta de entrada oficial da temporada. É nele que atletas individuais começam, equipes são
          observadas, níveis são ajustados e o caminho dentro do ecossistema fica mais claro.
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {urPlayCards.map((card) => (
            <PremiumCard {...card} key={card.title} />
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center gap-5 text-center">
          <ImpactPanel>Nenhum atleta ou equipe entra direto nas etapas principais sem passar pelo UR Play.</ImpactPanel>
          <Button className="rounded-full px-6" href="/ur-play" variant="secondary">
            Conhecer o UR Play
          </Button>
        </div>
      </Section>

      <Section id="participacao" style={{ background: "#0D0D12" }}>
        <SectionHeading
          eyebrow="Como participar"
          title="Você pode entrar como atleta ou equipe."
          subtitle="O Ultimate Rivals foi criado para quem já tem equipe e também para quem ainda está procurando um caminho dentro do esporte."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {participationCards.map((card) => (
            <PremiumCard {...card} key={card.title} />
          ))}
        </div>
        <p className="mx-auto mt-9 max-w-3xl text-center text-xl font-black leading-8 text-[#F4F0E6]">
          No Ultimate Rivals, você joga por você, pode crescer com uma equipe e ainda ajuda seu polo a ganhar força na
          temporada.
        </p>
      </Section>

      <Section id="modalidades" style={{ background: "#08080A" }}>
        <TextureLayer />
        <SectionHeading
          eyebrow="Modalidades oficiais"
          title="Escolha sua modalidade."
          subtitle="A Temporada 1 começa com dois formatos simples de entender e fortes para gerar disputa, evolução e diversão."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {officialModalities.map((modality) => {
            const fallback = modalityCards.find((card) => card.title.toLowerCase() === modality.name.toLowerCase());
            return (
              <Link
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111218] p-6 transition hover:border-[#D4A437]/45"
                href={modality.id === "quarteto" ? "/cadastro#equipe" : "/cadastro#atleta"}
                key={modality.id}
              >
                <TextureLayer />
                <div className="grid gap-5 sm:grid-cols-[80px_1fr] sm:items-center">
                  <div className="grid h-20 w-20 place-items-center rounded-[1.35rem] border border-[#D4A437]/25 bg-[#D4A437]/10">
                    <Image alt={modality.name} className="h-12 w-12" height={48} src={modality.symbolSolid} width={48} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#D4A437]">
                      {fallback?.tag}
                    </p>
                    <h3
                      className="mt-2 text-4xl font-bold uppercase leading-[0.9] text-[#F4F0E6]"
                      style={{ fontFamily: displayFont, letterSpacing: "0.03em" }}
                    >
                      {modality.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#A9A59B]">{fallback?.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm font-black uppercase leading-6 tracking-[0.12em] text-[#D4A437]">
          As duas modalidades podem gerar histórico para atletas, equipes e polos conforme as regras oficiais da
          temporada.
        </p>
      </Section>

      <Section id="polos" style={{ background: "#0D0D12" }}>
        <SectionHeading
          eyebrow="Comunidade competitiva"
          title="Polos: a sua comunidade dentro da temporada."
          subtitle="Belo Horizonte, Betim e Contagem não são apenas locais de jogo. São comunidades competitivas onde atletas entram pelo UR Play, constroem histórico, formam equipes, vivem rivalidades saudáveis e ajudam sua região a crescer."
        />
        <div className="mx-auto grid max-w-5xl gap-5 text-base leading-7 text-[#B9B5AA] md:text-lg md:leading-8">
          <p>
            No Ultimate Rivals, todos os polos têm o mesmo peso dentro da temporada. Belo Horizonte, Betim e Contagem
            seguem o mesmo formato de entrada, nivelamento, jogos, ranking, pontuação e classificação.
          </p>
          <p>
            Nenhum polo começa acima do outro. Cada região constrói sua força pela participação dos atletas, organização
            das equipes, presença nos eventos e desempenho ao longo da temporada.
          </p>
        </div>
        <ImpactPanel className="mx-auto mt-8 max-w-4xl text-center">
          O polo não é só onde você joga. É a comunidade que você ajuda a construir.
        </ImpactPanel>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {poleMeaningCards.map((card) => (
            <PremiumCard {...card} key={card.title} />
          ))}
        </div>
      </Section>

      <Section style={{ background: "#08080A" }}>
        <TextureLayer />
        <SectionHeading
          eyebrow="Polos da Temporada 1"
          title="Três polos. Uma temporada."
          subtitle="Belo Horizonte, Betim e Contagem entram na disputa com o mesmo peso, o mesmo formato e a mesma oportunidade de construir sua força."
        />
        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {poleCards.map((card) => (
            <ImageFeatureCard {...card} key={card.title} />
          ))}
        </div>
        <p className="mt-9 text-center text-xl font-black uppercase leading-7 text-[#F4F0E6]">
          Três polos. Mesmo formato. Uma disputa construída dentro da quadra.
        </p>
      </Section>

      <Section id="identidade-temporada" style={{ background: "#0D0D12" }}>
        <SectionHeading
          eyebrow="Identidade"
          title="Cada temporada tem uma identidade."
          subtitle="No Ultimate Rivals, a temporada não entrega apenas jogos. Cada edição carrega um significado, um aprendizado e uma mensagem para os atletas."
        />
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="relative overflow-hidden rounded-[1.85rem] border border-[#D4A437]/20 bg-[#111218] p-6 md:p-8">
            <TextureLayer />
            <p className="text-base leading-7 text-[#B9B5AA] md:text-lg md:leading-8">
              A Temporada 1 representa o início da jornada: entrada, pertencimento, evolução e construção de
              comunidade. Cada atleta que entra pelo UR Play começa a entender que jogar é apenas uma parte do processo.
            </p>
            <p className="mt-5 text-base leading-7 text-[#B9B5AA] md:text-lg md:leading-8">
              O verdadeiro valor está em evoluir, respeitar critérios, fortalecer sua equipe e representar algo maior.
              A identidade da temporada aparece na comunicação, nos cards, nos polos, na mídia, nos rankings, nas
              premiações simbólicas e também nos uniformes.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {identityCards.map((card) => (
              <PremiumCard {...card} key={card.title} />
            ))}
          </div>
        </div>
      </Section>

      <Section id="uniformes" style={{ background: "#08080A" }}>
        <TextureLayer />
        <SectionHeading
          eyebrow="Identidade dos polos"
          title="Uniformes que representam a comunidade."
          subtitle="Cada polo pode ter uma identidade visual própria dentro da temporada, mantendo o mesmo peso competitivo e a mesma estrutura oficial."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {uniformCards.map((card) => (
            <PremiumCard {...card} key={card.title} />
          ))}
        </div>
        <div className="mx-auto mt-8 grid max-w-4xl gap-4 text-center">
          <p className="text-sm font-bold uppercase leading-6 tracking-[0.12em] text-[#B9B5AA]">
            Os uniformes reforçam a identidade dos polos sem criar diferença de importância entre eles. Todos os polos
            têm o mesmo peso dentro da temporada.
          </p>
          <p className="text-2xl font-black uppercase leading-8 text-[#D4A437]">
            Vestir o polo é representar a comunidade que você ajuda a construir.
          </p>
        </div>
      </Section>

      <Section id="jornada" style={{ background: "#0D0D12" }}>
        <span aria-hidden className="block scroll-mt-24" id="ur-sprint" />
        <SectionHeading eyebrow="Jornada oficial" title="Da entrada ao espetáculo." />
        <HorizontalCards>
          {journeyCards.map((card, index) => (
            <div className="min-w-[76vw] snap-start md:min-w-0" key={card.title}>
              <PremiumCard
                {...card}
                tag={String(index + 1).padStart(2, "0")}
              />
            </div>
          ))}
        </HorizontalCards>
      </Section>

      <Section id="niveis" style={{ background: "#08080A" }}>
        <TextureLayer />
        <SectionHeading
          eyebrow="Nivelamento"
          title="Níveis para deixar a disputa mais justa."
          subtitle="A temporada precisa ser competitiva sem excluir quem está começando."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {levelCards.map((card) => (
            <PremiumCard {...card} key={card.title} />
          ))}
        </div>
        <ImpactPanel className="mx-auto mt-8 max-w-4xl text-center">
          Nível certo não diminui o atleta. Nível certo cria jogo justo, evolução real e uma experiência melhor para todos.
        </ImpactPanel>
      </Section>

      <Section id="ur-series" style={{ background: "#0D0D12" }}>
        <SectionHeading
          eyebrow="UR Series"
          title="Do polo para o UR Series."
          subtitle="As melhores equipes de cada polo avançam para enfrentar representantes de outras regiões dentro da etapa UR Series."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[1.85rem] border border-white/10 bg-[#111218] p-6 md:p-8">
            <TextureLayer />
            <h3
              className="text-3xl font-bold uppercase leading-[0.9] text-[#F4F0E6]"
              style={{ fontFamily: displayFont, letterSpacing: "0.03em" }}
            >
              Formato inicial
            </h3>
            <p className="mt-4 text-sm leading-6 text-[#A9A59B]">
              Cada polo classifica equipes seguindo os mesmos critérios oficiais. No formato inicial da Temporada 1, a
              proposta é classificar 4 equipes por polo: 2 equipes N1 — Elite e 2 equipes N2 — Avançado.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["4 equipes de Belo Horizonte", "4 equipes de Betim", "4 equipes de Contagem", "12 equipes classificadas"].map(
                (item) => (
                  <div className="rounded-2xl border border-[#D4A437]/15 bg-[#D4A437]/10 px-4 py-3" key={item}>
                    <p className="text-xs font-black uppercase tracking-[0.1em] text-[#D4A437]">{item}</p>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[1.85rem] border border-[#D4A437]/25 bg-[#111218] p-6 md:p-8 shadow-[0_0_55px_rgba(212,164,55,0.11)]">
            <TextureLayer />
            <h3
              className="text-3xl font-bold uppercase leading-[0.9] text-[#F4F0E6]"
              style={{ fontFamily: displayFont, letterSpacing: "0.03em" }}
            >
              UR Series: os polos se encontram.
            </h3>
            <p className="mt-4 text-sm leading-6 text-[#A9A59B]">
              No UR Series, equipes classificadas de Belo Horizonte, Betim e Contagem se enfrentam em uma disputa que
              vale para equipes, atletas e polos.
            </p>
            <p className="mt-6 text-lg font-black uppercase leading-7 text-[#D4A437]">
              Cada resultado fortalece a própria campanha e a comunidade representada.
            </p>
          </div>
        </div>
      </Section>

      <Section id="rankings" style={{ background: "#08080A" }}>
        <TextureLayer />
        <SectionHeading
          eyebrow="Rankings"
          title="Três rankings. Uma temporada mais organizada."
          subtitle="O ranking existe para registrar a jornada, dar clareza aos critérios e mostrar como atletas, equipes e polos evoluem."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {rankingCards.map((card) => (
            <PremiumCard {...card} key={card.title} />
          ))}
        </div>
        <ImpactPanel className="mt-8">
          A pontuação especial do UR Legends vale apenas para o Ranking dos Polos. O Ranking Individual dos Atletas e o
          Ranking das Equipes seguem regras próprias, sem multiplicador.
        </ImpactPanel>
      </Section>

      <Section id="recompensas" style={{ background: "#0D0D12" }}>
        <SectionHeading
          eyebrow="Recompensas"
          title="Recompensas que beneficiam a comunidade."
          subtitle="As recompensas da temporada não existem só para premiar quem já está no topo. Elas também podem apoiar atletas, equipes em desenvolvimento e polos que participam da jornada."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {rewardCards.map((card) => (
            <PremiumCard {...card} key={card.title} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm font-black uppercase leading-6 tracking-[0.12em] text-[#D4A437]">
          Recompensas dependem de regras oficiais, disponibilidade, parceiros ativos e validação da temporada.
        </p>
      </Section>

      <Section id="ur-market" style={{ background: "#08080A" }}>
        <TextureLayer />
        <SectionHeading
          eyebrow="UR Market"
          title="O UR Market também pode fortalecer o polo."
          subtitle="O Market não precisa beneficiar apenas o atleta individual. Ele também pode oferecer vantagens para equipes e polos inteiros."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {marketCards.map((card) => (
            <PremiumCard {...card} key={card.title} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm font-black uppercase leading-6 tracking-[0.12em] text-[#B9B5AA]">
          Benefícios não são promessa automática. Eles dependem das regras oficiais, parceiros ativos e disponibilidade
          operacional.
        </p>
      </Section>

      <Section id="ur-legends" style={{ background: "#0D0D12" }}>
        <SectionHeading
          eyebrow="UR Legends"
          title="UR Legends: o evento de espetáculo."
          subtitle="No UR Legends, cada polo envia duas equipes formadas por atletas de destaque do ranking para representar sua região em uma disputa especial."
        />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="relative overflow-hidden rounded-[1.85rem] border border-[#D4A437]/25 bg-[#111218] p-6 shadow-[0_0_55px_rgba(212,164,55,0.11)] md:p-8">
            <TextureLayer />
            <Radio className="h-10 w-10 text-[#D4A437]" />
            <h3
              className="mt-5 text-3xl font-bold uppercase leading-[0.9] text-[#F4F0E6]"
              style={{ fontFamily: displayFont, letterSpacing: "0.03em" }}
            >
              6 equipes no evento
            </h3>
            <div className="mt-6 grid gap-3">
              {["2 equipes de Belo Horizonte", "2 equipes de Betim", "2 equipes de Contagem"].map((item) => (
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3" key={item}>
                  <p className="text-xs font-black uppercase tracking-[0.1em] text-[#D4A437]">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-lg font-black uppercase leading-7 text-[#D4A437]">
              No UR Legends, o atleta representa mais do que uma equipe. Ele representa seu polo.
            </p>
          </div>
          <div className="grid gap-4">
            <PremiumCard
              description="O UR Legends cria mais jogos, mais histórias, rivalidade saudável e chances para atletas diferentes viverem um momento de destaque."
              icon={<Trophy className="h-6 w-6" />}
              title="Espetáculo esportivo"
            />
            <DetailsCard title="Critérios sugeridos para convocação">
              <div className="grid gap-2 sm:grid-cols-2">
                {legendsCriteria.map((item) => (
                  <span className="flex items-center gap-2" key={item}>
                    <CircleDot className="h-3 w-3 text-[#D4A437]" />
                    {item}
                  </span>
                ))}
              </div>
            </DetailsCard>
            <ImpactPanel>
              A pontuação especial do UR Legends vale apenas para o Ranking dos Polos. O Ranking dos Atletas e o Ranking
              das Equipes seguem regras próprias, sem multiplicador.
            </ImpactPanel>
          </div>
        </div>
      </Section>

      <Section id="regulamento" style={{ background: "#08080A" }}>
        <TextureLayer />
        <SectionHeading eyebrow="Diversão e critério" title="Competir também precisa ser divertido." />
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[1.85rem] border border-white/10 bg-[#111218] p-6 md:p-8">
            <TextureLayer />
            <p className="text-base leading-7 text-[#B9B5AA] md:text-lg md:leading-8">
              A temporada existe para criar jogos melhores, histórias reais, rivalidades saudáveis, torcida, mídia,
              evolução e comunidade. O ranking importa, mas a jornada também precisa ser divertida para quem joga,
              assiste e participa.
            </p>
            <DetailsCard title="Atividades extras e engajamento">
              <div className="grid gap-2 sm:grid-cols-2">
                {extraActivities.map((item) => (
                  <span className="flex items-center gap-2" key={item}>
                    <CircleDot className="h-3 w-3 text-[#D4A437]" />
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-4 font-bold text-[#D4A437]">
                Atividades extras ajudam na diversão e no engajamento, mas não devem valer mais do que o desempenho
                esportivo.
              </p>
            </DetailsCard>
          </div>
          <div className="relative overflow-hidden rounded-[1.85rem] border border-[#D4A437]/25 bg-[#111218] p-6 md:p-8">
            <TextureLayer />
            <h3
              className="text-4xl font-bold uppercase leading-[0.9] text-[#F4F0E6]"
              style={{ fontFamily: displayFont, letterSpacing: "0.03em" }}
            >
              Regras claras para todo mundo jogar melhor.
            </h3>
            <p className="mt-5 text-base leading-7 text-[#B9B5AA]">
              O regulamento existe para proteger atletas, equipes, polos e a experiência da temporada. Critérios claros
              reduzem confusão, evitam improviso e ajudam todos a entenderem como participar, pontuar, evoluir e avançar.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {["Participação", "Pontuação", "Fair Play", "Elegibilidade"].map((item) => (
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3" key={item}>
                  <p className="text-xs font-black uppercase tracking-[0.1em] text-[#D4A437]">{item}</p>
                </div>
              ))}
            </div>
            <Button className="mt-7 rounded-full px-6" href="/regulamento" variant="secondary">
              Ver regulamento
            </Button>
          </div>
        </div>
      </Section>

      <Section id="comecar" style={{ background: "#0D0D12" }}>
        <SectionHeading
          eyebrow="CTA final"
          title="Sua temporada começa no primeiro jogo."
          subtitle="Entre pelo UR Play, jogue no seu nível, construa ranking, represente sua equipe e ajude seu polo a crescer dentro do Ultimate Rivals."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {finalCards.map((card) => (
            <PremiumCard {...card} key={card.title} />
          ))}
        </div>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button className="rounded-full px-6" href="/ur-play">
            Começar pelo UR Play
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Button>
          <Button className="rounded-full px-6" href="/cadastro" variant="secondary">
            Fazer cadastro
          </Button>
        </div>
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm font-black uppercase leading-6 tracking-[0.12em] text-[#B9B5AA]">
          Atletas individuais, equipes iniciantes e equipes competitivas têm espaço. O Ultimate Rivals organiza o caminho
          para cada nível.
        </p>
      </Section>
    </main>
  );
}
