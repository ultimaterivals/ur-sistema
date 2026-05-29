import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { homeImageRoles } from "@/lib/content/site-images";
import { season1 } from "@/lib/content/season1";

const displayFont = "'Oswald', sans-serif";
const bodyFont = "'Manrope', system-ui, sans-serif";
const monoFont = "'JetBrains Mono', monospace";

function S({
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
    <section
      className={`scroll-mt-0 overflow-hidden border-t border-white/10 px-5 py-8 md:py-12 lg:px-8 lg:py-14 ${className}`}
      id={id}
      style={style}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="mb-6">
      <p
        className="text-[11px] font-bold uppercase tracking-[0.22em]"
        style={{ color: "#D4A437", fontFamily: bodyFont }}
      >
        {eyebrow}
      </p>
      <h2
        className="mt-2 text-3xl font-bold uppercase leading-[0.9] md:text-4xl"
        style={{ color: "#F4F0E6", fontFamily: displayFont, letterSpacing: "0.03em" }}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-3xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: bodyFont }}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function InfoCard({
  title,
  description,
  meta,
  href,
  cta,
  id,
}: {
  title: string;
  description: string;
  meta?: string;
  href?: string;
  cta?: string;
  id?: string;
}) {
  const content = (
    <>
      {meta ? (
        <p
          className="text-[10px] font-bold uppercase leading-4 tracking-[0.16em]"
          style={{ color: "#D4A437", fontFamily: bodyFont }}
        >
          {meta}
        </p>
      ) : null}
      <h3
        className="mt-2 text-xl font-bold uppercase leading-[0.95]"
        style={{ color: "#F4F0E6", fontFamily: displayFont, letterSpacing: "0.04em" }}
      >
        {title}
      </h3>
      <p className="mt-2 text-sm leading-5" style={{ color: "#8A8A93", fontFamily: bodyFont }}>
        {description}
      </p>
      {cta ? (
        <span
          className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{ color: "#D4A437", fontFamily: bodyFont }}
        >
          {cta}
          <ArrowRight aria-hidden className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      ) : null}
    </>
  );

  const className =
    "group rounded-lg border border-[rgba(212,164,55,0.12)] bg-[#14141A] p-4 transition-all hover:border-[#D4A437] hover:bg-[rgba(212,164,55,0.04)]";

  if (href) {
    return (
      <Link className={className} href={href} id={id}>
        {content}
      </Link>
    );
  }

  return (
    <div className={className} id={id}>
      {content}
    </div>
  );
}

function ImpactLine({ children }: { children: ReactNode }) {
  return (
    <div
      className="mt-5 rounded-lg border border-[rgba(212,164,55,0.2)] bg-[rgba(212,164,55,0.08)] px-4 py-3 text-sm font-bold uppercase leading-5 tracking-[0.08em]"
      style={{ color: "#D4A437", fontFamily: bodyFont }}
    >
      {children}
    </div>
  );
}

const heroStats = [
  { label: "3 Polos", value: "BH • Betim • Contagem" },
  { label: "2 Modalidades", value: "Dupla • Quarteto" },
  { label: "1 Caminho de entrada", value: "UR Play" },
] as const;

const urPlayCards = [
  {
    title: "Jogar",
    description: "Você entra em quadra, participa e começa a viver a experiência UR.",
  },
  {
    title: "Ser observado",
    description: "Seu nível, presença, postura e evolução começam a ser acompanhados.",
  },
  {
    title: "Construir histórico",
    description: "Cada participação ajuda a formar sua trajetória no ranking.",
  },
  {
    title: "Encontrar caminho",
    description: "Você pode seguir como atleta individual, entrar em uma equipe ou disputar eventos futuros.",
  },
] as const;

const ecosystemCards = [
  {
    title: "Caminho",
    description: "O atleta entende onde começa e como evolui.",
  },
  {
    title: "Critério",
    description: "Níveis, ranking e regulamento reduzem improviso.",
  },
  {
    title: "Comunidade",
    description: "Polos conectam atletas, equipes, quadras e parceiros.",
  },
  {
    title: "Valor",
    description: "Participação vira histórico, mídia, oportunidades e benefícios possíveis.",
  },
] as const;

const participationCards = [
  {
    title: "Atleta individual",
    description: "Para quem ainda não tem equipe, mas quer jogar, ser observado, entender seu nível e começar a construir ranking.",
    href: "/ur-play",
    cta: "Começar pelo UR Play",
  },
  {
    title: "Equipe",
    description: "Para grupos que querem representar um escudo, disputar por nível e somar pontos na temporada.",
    href: "/cadastro#equipe",
    cta: "Cadastrar equipe",
  },
  {
    title: "Polo",
    description: "Para atletas e equipes que querem fortalecer sua região dentro da disputa entre BH, Betim e Contagem.",
    href: "#polos",
    cta: "Ver polos",
  },
] as const;

const modalityDetails = {
  dupla: {
    meta: "Ideal para começar",
    description: "Formato dinâmico, acessível e ideal para começar a construir ritmo.",
    text: "Perfeito para atletas individuais, formações rápidas e jogos com leitura mais direta.",
  },
  quarteto: {
    meta: "Jogo coletivo",
    description: "Formato coletivo para quem quer jogar em grupo, criar estratégia e representar uma formação.",
    text: "Mais equipe, mais comunicação e mais possibilidades de criar identidade dentro do polo.",
  },
} as const;

const poleDetails = {
  bh: {
    subtitle: "Polo central para entrada, jogos, evolução e conexão da comunidade UR.",
    href: "/quadras-parceiras#polos",
  },
  betim: {
    subtitle: "Polo em expansão para atletas e equipes que querem começar, ganhar ritmo e representar a região.",
    href: "/quadras-parceiras#polos",
  },
  contagem: {
    subtitle: "Polo estratégico para fortalecer equipes, eventos, rivalidades saudáveis e presença regional.",
    href: "/quadras-parceiras#polos",
  },
} as const;

const sprintCards = [
  {
    title: "UR Sprint BH",
    description: "Até 8 equipes disputando a primeira etapa de Belo Horizonte.",
  },
  {
    title: "UR Sprint Betim",
    description: "Até 8 equipes representando o crescimento competitivo de Betim.",
  },
  {
    title: "UR Sprint Contagem",
    description: "Até 8 equipes fortalecendo a disputa regional de Contagem.",
  },
] as const;

const levelCards = [
  {
    title: "N1 — Elite",
    description: "Atletas e equipes de maior desempenho, ritmo competitivo alto e maior exigência técnica.",
  },
  {
    title: "N2 — Avançado",
    description: "Atletas e equipes que já jogam com regularidade, competem em torneios e buscam evolução dentro de uma disputa organizada.",
  },
  {
    title: "N3 — Desenvolvimento",
    description: "Atletas iniciantes, em formação ou retornando ao esporte, guiados para ganhar confiança, entender o jogo e entrar nas competições oficiais no momento certo.",
  },
] as const;

const regionalCards = [
  {
    title: "Classificação por polo",
    description: "Cada polo classifica representantes a partir do UR Sprint, respeitando presença, desempenho, nível e regras oficiais.",
  },
  {
    title: "Caminho competitivo",
    description: "BH, Betim e Contagem se encontram para ampliar a disputa sem apagar a campanha própria de cada equipe.",
  },
  {
    title: "Espaço para evolução",
    description: "O Regional também abre espaço real para equipes em desenvolvimento que constroem caminho no nível certo.",
  },
] as const;

const rankingCards = [
  {
    id: "ranking-atletas",
    title: "Ranking dos Atletas",
    description: "Mostra a trajetória individual de cada jogador, mesmo dentro de uma equipe.",
    meta: "Presença • desempenho • evolução • postura • fair play",
  },
  {
    id: "ranking-equipes",
    title: "Ranking das Equipes",
    description: "Mostra a campanha própria de cada equipe, com jogos, vitórias, classificação e evolução coletiva.",
    meta: "Jogos • vitórias • classificação • evolução coletiva",
  },
  {
    id: "ranking-polos",
    title: "Ranking dos Polos",
    description: "Mostra a força coletiva da região pela participação de atletas, equipes, eventos e comunidade.",
    meta: "Equipes • atletas • UR Play • engajamento • Legends",
  },
] as const;

const benefitCards = [
  {
    title: "Atletas",
    description: "Produtos, experiências, treinos, descontos, mídia e benefícios individuais possíveis.",
  },
  {
    title: "Equipes",
    description: "Mentoria de capitão, análise de formação, identidade, mídia e inscrições com desconto.",
  },
  {
    title: "Polos",
    description: "Ativações, clínicas, desafios, cobertura especial, benefícios coletivos e ações com parceiros.",
  },
] as const;

const regulationCards = [
  {
    title: "Participação",
    description: "Entenda como atletas e equipes entram na temporada.",
  },
  {
    title: "Pontuação",
    description: "Veja como rankings, eventos e atividades geram histórico.",
  },
  {
    title: "Fair Play",
    description: "Postura, respeito e compromisso também fazem parte da evolução.",
  },
] as const;

const startCards = [
  {
    title: "Não tenho equipe",
    description: "Comece como atleta individual, jogue, seja observado e encontre seu caminho.",
    href: "/cadastro#atleta",
    cta: "Cadastrar atleta",
  },
  {
    title: "Já tenho equipe",
    description: "Cadastre sua equipe, passe pelo UR Play e prepare-se para o UR Sprint do seu polo.",
    href: "/cadastro#equipe",
    cta: "Cadastrar equipe",
  },
  {
    title: "Quero entender a temporada",
    description: "Veja como UR Play, Sprint, Regional, rankings, Market e Legends se conectam.",
    href: "/temporada",
    cta: "Entender temporada",
  },
] as const;

export default function Home() {
  return (
    <main style={{ background: "#0A0A0B", color: "#F4F0E6" }}>
      <section className="relative isolate overflow-hidden" id="hero" style={{ background: "#0A0A0B" }}>
        <div className="relative min-h-[560px] py-12 md:min-h-[680px] md:py-20">
          <EditorialImage
            className="absolute inset-0 -z-20 rounded-none border-0 opacity-32"
            image={homeImageRoles.hero}
            label="UR Temporada 1 — Polos em Disputa"
            objectPosition="center 40%"
            priority
            sizes="100vw"
          />
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
            style={{ backgroundImage: "url(/season-1/textures/bg-sand-texture.svg)", backgroundSize: "cover" }}
          />
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(90deg, rgba(10,10,11,0.97) 0%, rgba(10,10,11,0.84) 52%, rgba(10,10,11,0.54) 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-44"
            style={{ background: "linear-gradient(180deg, transparent, #0A0A0B)" }}
          />

          <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
              <div className="max-w-3xl">
                <span
                  className="inline-flex items-center gap-1.5 rounded-sm border border-[rgba(212,164,55,0.35)] bg-[rgba(212,164,55,0.1)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: "#D4A437", fontFamily: bodyFont }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4A437]" />
                  Temporada 1 UR
                </span>
                <h1
                  className="mt-5 text-[clamp(3.3rem,16vw,8rem)] font-bold uppercase leading-[0.82] tracking-[0.01em]"
                  style={{ color: "#F4F0E6", fontFamily: displayFont }}
                >
                  Polos em<br />
                  <span style={{ color: "#D4A437" }}>disputa.</span>
                </h1>
                <p
                  className="mt-5 max-w-2xl text-base leading-7 md:text-lg"
                  style={{ color: "rgba(244,240,230,0.78)", fontFamily: bodyFont }}
                >
                  A temporada começa no UR Play. Atletas individuais e equipes entram na jornada,
                  jogam no seu nível, somam histórico e ajudam Belo Horizonte, Betim e Contagem a
                  crescerem no Ranking dos Polos.
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: bodyFont }}>
                  Você não precisa ter equipe para começar. No UR Play, todo atleta entra, joga, é
                  observado, entende seu nível e começa a construir sua trajetória dentro do Ultimate Rivals.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href="/ur-play">
                    Começar pelo UR Play
                    <ArrowRight aria-hidden className="h-4 w-4" />
                  </Button>
                  <Button href="#ur-play" variant="secondary">
                    Entender a temporada
                  </Button>
                </div>
                <p
                  className="mt-4 max-w-xl text-xs font-bold uppercase leading-5 tracking-[0.12em]"
                  style={{ color: "rgba(244,240,230,0.56)", fontFamily: bodyFont }}
                >
                  Todo mundo começa pelo UR Play: atletas individuais, equipes formadas e jogadores em busca de equipe.
                </p>
                <div className="mt-6 grid gap-2 rounded-lg border border-[rgba(212,164,55,0.18)] bg-[#14141A]/82 p-2 shadow-[0_8px_32px_rgba(0,0,0,0.42)] backdrop-blur sm:grid-cols-3">
                  {heroStats.map((stat) => (
                    <div className="rounded border border-white/10 bg-white/[0.035] px-3 py-3" key={stat.label}>
                      <span
                        className="block text-sm font-bold uppercase tracking-[0.12em] text-[#D4A437]"
                        style={{ fontFamily: bodyFont }}
                      >
                        {stat.label}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-[#8A8A93]" style={{ fontFamily: bodyFont }}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="hidden overflow-hidden rounded-lg lg:block"
                style={{
                  background: "#14141A",
                  border: "1px solid rgba(212,164,55,0.20)",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
                }}
              >
                <div className="border-b border-white/10 px-4 py-3">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4A437]" style={{ fontFamily: bodyFont }}>
                    Caminho oficial
                  </p>
                </div>
                <div className="divide-y divide-white/[0.06]">
                  {["UR Play", "UR Sprint", "UR Regional", "UR Legends"].map((item, index) => (
                    <div className="flex items-center gap-3 px-4 py-3" key={item}>
                      <span
                        className="grid h-8 w-8 shrink-0 place-items-center rounded border border-[rgba(212,164,55,0.18)] bg-[rgba(212,164,55,0.08)] text-xs font-bold"
                        style={{ color: "#D4A437", fontFamily: monoFont }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-bold uppercase tracking-[0.08em]" style={{ color: "#F4F0E6", fontFamily: displayFont }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 px-4 py-4">
                  <p className="text-xs leading-5 text-[#8A8A93]" style={{ fontFamily: bodyFont }}>
                    Sua equipe joga. Seu atleta evolui. Seu polo pontua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <S id="ur-play" className="border-t border-[rgba(212,164,55,0.12)]" style={{ background: "#0A0A0B" }}>
        <SectionHeading
          eyebrow="UR Play"
          title={<>A temporada começa<br />no UR Play.</>}
          subtitle="Antes de disputar etapas maiores, todo atleta e toda equipe passam pelo UR Play para cadastro, observação, nivelamento e construção de histórico."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {urPlayCards.map((card) => (
            <InfoCard description={card.description} key={card.title} title={card.title} />
          ))}
        </div>
        <ImpactLine>Nenhum atleta ou equipe entra direto nas etapas principais sem passar pelo UR Play.</ImpactLine>
      </S>

      <S id="ecossistema" style={{ background: "#0D0D12" }}>
        <SectionHeading
          eyebrow="Ecossistema UR"
          title={<>O UR é mais<br />que um torneio.</>}
          subtitle="É um ecossistema para organizar entrada, nivelamento, jogos, ranking, polos, mídia, recompensas e evolução."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ecosystemCards.map((card) => (
            <InfoCard description={card.description} key={card.title} title={card.title} />
          ))}
        </div>
        <div className="mt-5">
          <Button href="/ecossistema" variant="secondary">
            Entender o ecossistema
          </Button>
        </div>
      </S>

      <S id="participacao" style={{ background: "#0A0A0B" }}>
        <SectionHeading
          eyebrow="Como participar"
          title={<>Você pode entrar<br />como atleta ou equipe.</>}
          subtitle="O Ultimate Rivals foi criado para quem já tem equipe e também para quem ainda está procurando um caminho dentro do esporte."
        />
        <div className="grid gap-3 md:grid-cols-3">
          {participationCards.map((card) => (
            <InfoCard description={card.description} href={card.href} key={card.title} title={card.title} cta={card.cta} />
          ))}
        </div>
      </S>

      <S id="modalidades" style={{ background: "#0D0D12" }}>
        <SectionHeading
          eyebrow="Modalidades oficiais"
          title={<>Escolha sua<br />modalidade.</>}
          subtitle="A Temporada 1 começa com dois formatos simples de entender e fortes para gerar disputa, evolução e diversão."
        />
        <div className="grid grid-cols-2 gap-3">
          {season1.modalities.map((modality) => {
            const details = modalityDetails[modality.id];

            return (
              <Link
                className="group relative min-h-[210px] overflow-hidden rounded-lg border border-[rgba(212,164,55,0.16)] bg-[#14141A] p-4 transition-all hover:border-[#D4A437] hover:bg-[rgba(212,164,55,0.04)] sm:min-h-[190px]"
                href="/cadastro#atleta"
                key={modality.id}
              >
                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{ backgroundImage: "url(/season-1/textures/bg-sand-texture.svg)", backgroundSize: "cover" }}
                />
                <div className="relative z-10">
                  <div className="grid h-12 w-12 place-items-center rounded-lg border border-[rgba(212,164,55,0.18)] bg-black/25">
                    <img alt={modality.name} className="h-8 w-8 opacity-90" loading="lazy" src={modality.symbolSolid} />
                  </div>
                  <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: "#D4A437", fontFamily: bodyFont }}>
                    {details.meta}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold uppercase leading-[0.92]" style={{ color: "#F4F0E6", fontFamily: displayFont }}>
                    {modality.name}
                  </h3>
                  <p className="mt-2 text-sm leading-5" style={{ color: "#8A8A93", fontFamily: bodyFont }}>
                    {details.description}
                  </p>
                  <p className="mt-3 hidden text-xs leading-5 text-white/50 sm:block" style={{ fontFamily: bodyFont }}>
                    {details.text}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </S>

      <S id="polos" style={{ background: "#0A0A0B" }}>
        <SectionHeading
          eyebrow="Polos UR"
          title={<>Polos: a sua comunidade<br />dentro da temporada.</>}
          subtitle="BH, Betim e Contagem têm o mesmo peso, o mesmo formato e a mesma oportunidade. Cada polo constrói sua força pela participação dos atletas, equipes, jogos, ranking e engajamento da comunidade."
        />
        <ImpactLine>Sua equipe joga. Seu atleta evolui. Seu polo pontua.</ImpactLine>
      </S>

      <S id="territorios" style={{ background: "#0D0D12" }}>
        <SectionHeading
          eyebrow="Três polos"
          title={<>Três polos.<br />Uma temporada.</>}
          subtitle="Belo Horizonte, Betim e Contagem entram na disputa com atletas, equipes, histórias e comunidades próprias."
        />
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-5 px-5 sm:mx-0 sm:px-0 md:grid md:grid-cols-3 md:overflow-visible">
          {season1.poles.map((pole) => {
            const details = poleDetails[pole.id];

            return (
              <Link
                className="group w-[84vw] max-w-[360px] shrink-0 snap-start overflow-hidden rounded-lg border border-[rgba(212,164,55,0.16)] bg-[#14141A] transition-all hover:border-[#D4A437] md:w-auto md:max-w-none"
                href={details.href}
                key={pole.id}
              >
                <div className="relative min-h-[150px] border-b border-white/10 bg-[linear-gradient(135deg,rgba(212,164,55,0.16),rgba(255,255,255,0.04))]">
                  <div
                    className="absolute inset-0 opacity-[0.16]"
                    style={{ backgroundImage: "url(/season-1/textures/bg-sand-texture.svg)", backgroundSize: "cover" }}
                  />
                  <div className="relative z-10 flex min-h-[150px] items-center justify-center">
                    <div className="grid h-24 w-24 place-items-center rounded-full border border-[rgba(212,164,55,0.32)] bg-black/35 text-3xl font-bold text-[#D4A437] shadow-[0_0_36px_rgba(212,164,55,0.16)]">
                      {pole.short}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-2xl font-bold uppercase leading-[0.92]" style={{ color: "#F4F0E6", fontFamily: displayFont }}>
                    {pole.name}
                  </h3>
                  <p className="mt-3 text-sm leading-5" style={{ color: "#8A8A93", fontFamily: bodyFont }}>
                    {details.subtitle}
                  </p>
                  <span
                    className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em]"
                    style={{ color: "#D4A437", fontFamily: bodyFont }}
                  >
                    Ver polo
                    <ArrowRight aria-hidden className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </S>

      <S id="ur-sprint" style={{ background: "#0A0A0B" }}>
        <SectionHeading
          eyebrow="UR Sprint"
          title={<>A primeira disputa<br />do polo.</>}
          subtitle="Depois do UR Play, cada polo inicia sua etapa competitiva com equipes niveladas, jogos organizados e pontuação para a temporada."
        />
        <div className="grid gap-3 md:grid-cols-3">
          {sprintCards.map((card) => (
            <InfoCard description={card.description} key={card.title} title={card.title} />
          ))}
        </div>
      </S>

      <S id="niveis" style={{ background: "#0D0D12" }}>
        <SectionHeading
          eyebrow="Níveis de disputa"
          title={<>Níveis para deixar<br />a disputa mais justa.</>}
          subtitle="O nivelamento organiza atletas e equipes por momento, presença e desempenho sem comunicar o N3 como inferior."
        />
        <div className="grid gap-3 md:grid-cols-3">
          {levelCards.map((card) => (
            <InfoCard description={card.description} key={card.title} title={card.title} />
          ))}
        </div>
      </S>

      <S id="regional" style={{ background: "#0A0A0B" }}>
        <SectionHeading
          eyebrow="Regional"
          title={<>Caminho<br />competitivo.</>}
          subtitle="As melhores equipes de cada polo avançam para enfrentar representantes de outras regiões, mantendo espaço real para desenvolvimento."
        />
        <div className="grid gap-3 md:grid-cols-3">
          {regionalCards.map((card) => (
            <InfoCard description={card.description} key={card.title} title={card.title} />
          ))}
        </div>
      </S>

      <S id="rankings" style={{ background: "#0D0D12" }}>
        <SectionHeading
          eyebrow="Rankings"
          title={<>Três rankings.<br />Uma temporada mais organizada.</>}
          subtitle="O ranking organiza a jornada, mostra evolução e transforma participação em histórico."
        />
        <div className="grid gap-3 md:grid-cols-3">
          {rankingCards.map((card) => (
            <InfoCard description={card.description} id={card.id} key={card.title} meta={card.meta} title={card.title} />
          ))}
        </div>
        <ImpactLine>O Ranking dos Atletas e o Ranking das Equipes seguem regras próprias e não recebem multiplicador.</ImpactLine>
      </S>

      <S id="legends" style={{ background: "#0A0A0B" }}>
        <SectionHeading
          eyebrow="UR Legends"
          title={<>O espetáculo<br />dos polos.</>}
          subtitle="No Legends, atletas de destaque representam sua região em uma disputa especial, com mais jogos, histórias e rivalidade saudável."
        />
        <div className="grid gap-3 lg:grid-cols-[0.8fr_1.2fr]">
          <InfoCard title="6 equipes no evento" description="Belo Horizonte, Betim e Contagem enviam representantes para viver um momento de espetáculo da temporada." />
          <InfoCard
            title="Regra visível"
            description="A pontuação especial vale apenas para o Ranking dos Polos. Ranking dos Atletas e Ranking das Equipes não recebem multiplicador."
          />
        </div>
        <div className="mt-3">
          <InfoCard
            title="Diversão competitiva"
            description="Atividades extras podem gerar história, mídia e engajamento, sem valer mais do que o desempenho esportivo."
          />
        </div>
        <ImpactLine>No Legends, o atleta representa mais do que uma equipe. Ele representa seu polo.</ImpactLine>
      </S>

      <S id="beneficios" style={{ background: "#0D0D12" }}>
        <span aria-hidden className="block scroll-mt-0" id="recompensas" />
        <span aria-hidden className="block scroll-mt-0" id="ur-market" />
        <span aria-hidden className="block scroll-mt-0" id="premiacoes" />
        <SectionHeading
          eyebrow="Recompensas e UR Market"
          title={<>Benefícios como consequência<br />da jornada.</>}
          subtitle="Recompensas e Market podem valorizar atletas, equipes e polos, sempre conforme regras oficiais, parceiros ativos e disponibilidade."
        />
        <div className="grid gap-3 md:grid-cols-3">
          {benefitCards.map((card) => (
            <InfoCard description={card.description} key={card.title} title={card.title} />
          ))}
        </div>
        <p className="mt-4 text-xs font-bold uppercase leading-5 tracking-[0.12em]" style={{ color: "rgba(244,240,230,0.5)", fontFamily: bodyFont }}>
          Recompensas não são garantidas e dependem de regras oficiais, parceiros ativos e validação operacional.
        </p>
      </S>

      <S id="regulamento" style={{ background: "#0A0A0B" }}>
        <SectionHeading
          eyebrow="Regulamento"
          title={<>Regras claras para<br />todo mundo jogar melhor.</>}
          subtitle="O regulamento protege atletas, equipes, polos e a experiência da temporada, reduzindo improviso e dúvida."
        />
        <div className="grid gap-3 sm:grid-cols-3">
          {regulationCards.map((card) => (
            <InfoCard description={card.description} key={card.title} title={card.title} />
          ))}
        </div>
        <div className="mt-5">
          <Button href="/regulamento" variant="secondary">Ver regulamento</Button>
        </div>
      </S>

      <S id="comecar" style={{ background: "#0D0D12" }}>
        <SectionHeading
          eyebrow="Como começar"
          title={<>Comece pelo<br />UR Play.</>}
          subtitle="Atleta individual ou equipe formada: o primeiro passo é entrar no UR Play, passar pelo nivelamento e começar sua trajetória na Temporada 1."
        />
        <div className="grid gap-3 md:grid-cols-3">
          {startCards.map((card) => (
            <InfoCard description={card.description} href={card.href} key={card.title} title={card.title} cta={card.cta} />
          ))}
        </div>
        <ImpactLine>Todo mundo começa pelo UR Play. É ali que o sistema organiza o nível, registra histórico e direciona cada participante para o caminho certo.</ImpactLine>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Button href="/ur-play">
            Começar pelo UR Play
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Button>
          <Button href="/cadastro" variant="secondary">
            Fazer cadastro
          </Button>
        </div>
      </S>
    </main>
  );
}
