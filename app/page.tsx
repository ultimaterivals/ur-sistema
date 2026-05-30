import Image from "next/image";
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
      className={`scroll-mt-0 overflow-hidden border-t border-white/10 px-5 py-8 md:py-11 lg:px-8 lg:py-12 ${className}`}
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
    <div className="mb-5">
      <p
        className="text-[11px] font-bold uppercase tracking-[0.2em]"
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
          className="text-[10px] font-bold uppercase leading-4 tracking-[0.15em]"
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
  { title: "Jogar", description: "Entrar em quadra e viver a experiência UR." },
  { title: "Ser observado", description: "Nível, presença e postura entram no radar." },
  { title: "Construir histórico", description: "Cada participação ajuda a formar trajetória." },
  { title: "Encontrar caminho", description: "Seguir individualmente, com equipe ou em eventos." },
] as const;

const ecosystemCards = [
  { title: "Caminho", description: "O atleta entende onde começa e como evolui." },
  { title: "Critério", description: "Níveis, ranking e regulamento reduzem improviso." },
  { title: "Comunidade", description: "Polos conectam atletas, equipes, quadras e parceiros." },
  { title: "Valor", description: "Participação vira histórico, mídia e benefícios possíveis." },
] as const;

const participationCards = [
  {
    title: "Atleta individual",
    description: "Sem equipe? Comece pelo UR Play e entre no radar.",
    href: "/ur-play",
    cta: "Começar",
  },
  {
    title: "Equipe",
    description: "Cadastre seu escudo e passe pelo nivelamento.",
    href: "/cadastro#equipe",
    cta: "Cadastrar equipe",
  },
  {
    title: "Polo",
    description: "Participe e fortaleça sua região na temporada.",
    href: "#polos",
    cta: "Ver polos",
  },
] as const;

const modalityDetails = {
  dupla: {
    meta: "Entrada dinâmica",
    description: "Formato simples para começar, ganhar ritmo e construir leitura de jogo.",
  },
  quarteto: {
    meta: "Jogo coletivo",
    description: "Formato de grupo para criar estratégia, identidade e presença de equipe.",
  },
} as const;

const poleDetails = {
  bh: {
    subtitle: "Polo central para entrada, jogos e evolução da comunidade UR.",
    href: "/quadras-parceiras#polos",
  },
  betim: {
    subtitle: "Polo em expansão para começar, ganhar ritmo e representar a região.",
    href: "/quadras-parceiras#polos",
  },
  contagem: {
    subtitle: "Polo estratégico para equipes, eventos e presença regional.",
    href: "/quadras-parceiras#polos",
  },
} as const;

const journeySteps = [
  { title: "UR Play", description: "Entrada, cadastro, observação e nivelamento." },
  { title: "UR Sprint", description: "Primeira disputa organizada dentro do polo." },
  { title: "Regional", description: "Polos se encontram em uma etapa competitiva." },
  { title: "Legends", description: "Espetáculo final com representantes dos polos." },
] as const;

const levelCards = [
  { title: "N1 — Elite", description: "Maior exigência técnica e ritmo competitivo." },
  { title: "N2 — Avançado", description: "Atletas e equipes que já competem em torneios." },
  { title: "N3 — Desenvolvimento", description: "Iniciantes, formação ou retorno ao esporte, guiados para evoluir." },
] as const;

const rankingCards = [
  { id: "ranking-atletas", title: "Atleta", description: "Trajetória individual, presença e evolução." },
  { id: "ranking-equipes", title: "Equipe", description: "Campanha do escudo, consistência e resultados." },
  { id: "ranking-polos", title: "Polo", description: "Força coletiva da região e participação da comunidade." },
] as const;

const benefitRuleCards = [
  { title: "Recompensas do Polo", description: "Valorizam comunidade, atletas e equipes conforme regra." },
  { title: "UR Market", description: "Produtos, serviços e parceiros entram como camada possível." },
  { title: "Regulamento", description: "Critérios claros protegem a jornada e o fair play." },
] as const;

const startCards = [
  {
    title: "Não tenho equipe",
    description: "Comece como atleta individual.",
    href: "/cadastro#atleta",
    cta: "Cadastrar atleta",
  },
  {
    title: "Já tenho equipe",
    description: "Cadastre seu escudo para nivelamento.",
    href: "/cadastro#equipe",
    cta: "Cadastrar equipe",
  },
  {
    title: "Quero entender a temporada",
    description: "Veja a jornada completa em detalhes.",
    href: "/temporada",
    cta: "Entender temporada",
  },
] as const;

export default function Home() {
  return (
    <main style={{ background: "#0A0A0B", color: "#F4F0E6" }}>
      <section className="relative isolate overflow-hidden" id="hero" style={{ background: "#0A0A0B" }}>
        <div className="relative min-h-[520px] py-10 md:min-h-[640px] md:py-16">
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
            className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-36"
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
                  className="mt-5 text-[clamp(3.2rem,15vw,7.4rem)] font-bold uppercase leading-[0.82] tracking-[0.01em]"
                  style={{ color: "#F4F0E6", fontFamily: displayFont }}
                >
                  Polos em<br />
                  <span style={{ color: "#D4A437" }}>disputa.</span>
                </h1>
                <p
                  className="mt-5 max-w-2xl text-base leading-7 md:text-lg"
                  style={{ color: "rgba(244,240,230,0.78)", fontFamily: bodyFont }}
                >
                  A Temporada 1 começa no UR Play. Atletas individuais e equipes entram na jornada,
                  jogam no seu nível e ajudam BH, Betim e Contagem a crescerem no Ranking dos Polos.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href="/ur-play">
                    Começar pelo UR Play
                    <ArrowRight aria-hidden className="h-4 w-4" />
                  </Button>
                  <Button href="#jornada" variant="secondary">
                    Entender a temporada
                  </Button>
                </div>
                <div className="mt-6 grid gap-2 rounded-lg border border-[rgba(212,164,55,0.18)] bg-[#14141A]/82 p-2 shadow-[0_8px_32px_rgba(0,0,0,0.42)] backdrop-blur sm:grid-cols-3">
                  {heroStats.map((stat) => (
                    <div className="rounded border border-white/10 bg-white/[0.035] px-3 py-3" key={stat.label}>
                      <span className="block text-sm font-bold uppercase tracking-[0.12em] text-[#D4A437]">
                        {stat.label}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-[#8A8A93]">{stat.value}</span>
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
                  {journeySteps.map((item, index) => (
                    <div className="flex items-center gap-3 px-4 py-3" key={item.title}>
                      <span
                        className="grid h-8 w-8 shrink-0 place-items-center rounded border border-[rgba(212,164,55,0.18)] bg-[rgba(212,164,55,0.08)] text-xs font-bold"
                        style={{ color: "#D4A437", fontFamily: monoFont }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-bold uppercase tracking-[0.08em]" style={{ color: "#F4F0E6", fontFamily: displayFont }}>
                        {item.title}
                      </span>
                    </div>
                  ))}
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
          subtitle="Todo atleta e toda equipe passam pelo UR Play para cadastro, observação, nivelamento e construção de histórico."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {urPlayCards.map((card) => (
            <InfoCard description={card.description} key={card.title} title={card.title} />
          ))}
        </div>
        <ImpactLine>Sem UR Play, ninguém entra direto nas etapas principais.</ImpactLine>
      </S>

      <S id="ecossistema" style={{ background: "#0D0D12" }}>
        <SectionHeading
          eyebrow="Ecossistema UR"
          title={<>O UR é mais<br />que um torneio.</>}
          subtitle="É um ecossistema que conecta entrada, nivelamento, jogos, ranking, polos, mídia, recompensas e evolução."
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
          title={<>Entre como atleta,<br />equipe ou polo.</>}
        />
        <div className="grid gap-3 md:grid-cols-3">
          {participationCards.map((card) => (
            <InfoCard description={card.description} href={card.href} key={card.title} title={card.title} cta={card.cta} />
          ))}
        </div>
      </S>

      <S id="modalidades" style={{ background: "#0D0D12" }}>
        <SectionHeading eyebrow="Modalidades" title={<>Duas formas<br />de começar.</>} />
        <div className="grid grid-cols-2 gap-3">
          {season1.modalities.map((modality) => {
            const details = modalityDetails[modality.id];

            return (
              <Link
                className="group relative min-h-[188px] overflow-hidden rounded-lg border border-[rgba(212,164,55,0.16)] bg-[#14141A] p-4 transition-all hover:border-[#D4A437] hover:bg-[rgba(212,164,55,0.04)]"
                href="/cadastro#atleta"
                key={modality.id}
              >
                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{ backgroundImage: "url(/season-1/textures/bg-sand-texture.svg)", backgroundSize: "cover" }}
                />
                <div className="relative z-10">
                  <div className="grid h-12 w-12 place-items-center rounded-lg border border-[rgba(212,164,55,0.18)] bg-black/25">
                    <Image alt={modality.name} className="h-8 w-8 opacity-90" height={32} src={modality.symbolSolid} width={32} />
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
                </div>
              </Link>
            );
          })}
        </div>
      </S>

      <S id="polos" style={{ background: "#0A0A0B" }}>
        <span aria-hidden className="block scroll-mt-0" id="territorios" />
        <SectionHeading
          eyebrow="Polos UR"
          title={<>Polos: sua comunidade<br />na temporada.</>}
          subtitle="BH, Betim e Contagem têm o mesmo peso, o mesmo formato e a mesma oportunidade. Cada polo constrói sua força pela participação dos atletas, equipes e comunidade."
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
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: "#D4A437", fontFamily: bodyFont }}>
                    {pole.status}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold uppercase leading-[0.92]" style={{ color: "#F4F0E6", fontFamily: displayFont }}>
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

      <S id="jornada" style={{ background: "#0D0D12" }}>
        <span aria-hidden className="block scroll-mt-0" id="ur-sprint" />
        <span aria-hidden className="block scroll-mt-0" id="regional" />
        <SectionHeading
          eyebrow="Jornada da Temporada"
          title={<>Da entrada<br />ao espetáculo.</>}
          subtitle="A Home resume a trilha. Os detalhes de eventos, regras e formatos ficam nas páginas internas."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {journeySteps.map((step, index) => (
            <div className="rounded-lg border border-[rgba(212,164,55,0.12)] bg-[#14141A] p-4" key={step.title}>
              <span
                className="grid h-8 w-8 place-items-center rounded border border-[rgba(212,164,55,0.18)] bg-[rgba(212,164,55,0.08)] text-xs font-bold"
                style={{ color: "#D4A437", fontFamily: monoFont }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-bold uppercase leading-[0.95]" style={{ color: "#F4F0E6", fontFamily: displayFont }}>
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-5" style={{ color: "#8A8A93", fontFamily: bodyFont }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </S>

      <S id="niveis" style={{ background: "#0A0A0B" }}>
        <SectionHeading
          eyebrow="Níveis"
          title={<>Níveis para<br />jogos mais justos.</>}
        />
        <div className="grid gap-3 md:grid-cols-3">
          {levelCards.map((card) => (
            <InfoCard description={card.description} key={card.title} title={card.title} />
          ))}
        </div>
      </S>

      <S id="rankings" style={{ background: "#0D0D12" }}>
        <SectionHeading
          eyebrow="Ranking"
          title={<>Três rankings.<br />Uma temporada organizada.</>}
        />
        <div className="grid gap-3 md:grid-cols-3">
          {rankingCards.map((card) => (
            <InfoCard description={card.description} id={card.id} key={card.title} title={card.title} />
          ))}
        </div>
        <ImpactLine>Legends movimenta apenas o Ranking dos Polos. Atletas e equipes seguem regras próprias, sem multiplicador.</ImpactLine>
      </S>

      <S id="legends" style={{ background: "#0A0A0B" }}>
        <SectionHeading
          eyebrow="UR Legends"
          title={<>UR Legends:<br />o espetáculo dos polos.</>}
          subtitle="Cada polo envia duas equipes formadas por atletas de destaque para representar sua região."
        />
        <div className="grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">
          <InfoCard title="Representar o polo" description="O atleta vive um momento de destaque conectado à comunidade que ajudou a construir a temporada." />
          <InfoCard title="Regra curta" description="Pontuação especial apenas para Ranking dos Polos." />
        </div>
      </S>

      <S id="beneficios" style={{ background: "#0D0D12" }}>
        <span aria-hidden className="block scroll-mt-0" id="recompensas" />
        <span aria-hidden className="block scroll-mt-0" id="ur-market" />
        <span aria-hidden className="block scroll-mt-0" id="premiacoes" />
        <span aria-hidden className="block scroll-mt-0" id="regulamento" />
        <SectionHeading
          eyebrow="Benefícios e Regulamento"
          title={<>Benefícios com regra<br />e critério.</>}
        />
        <div className="grid gap-3 md:grid-cols-3">
          {benefitRuleCards.map((card) => (
            <InfoCard description={card.description} key={card.title} title={card.title} />
          ))}
        </div>
        <ImpactLine>Benefícios dependem de regras oficiais, parceiros ativos e disponibilidade.</ImpactLine>
      </S>

      <S id="comecar" style={{ background: "#0A0A0B" }}>
        <SectionHeading
          eyebrow="CTA final"
          title={<>Comece pelo<br />UR Play.</>}
        />
        <div className="grid gap-3 md:grid-cols-3">
          {startCards.map((card) => (
            <InfoCard description={card.description} href={card.href} key={card.title} title={card.title} cta={card.cta} />
          ))}
        </div>
      </S>
    </main>
  );
}
