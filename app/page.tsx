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
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`mb-6 ${className}`}>
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
  children,
}: {
  title: string;
  description: string;
  meta?: string;
  href?: string;
  cta?: string;
  id?: string;
  children?: ReactNode;
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
      {children}
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

function RuleList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 grid gap-2">
      {items.map((item) => (
        <li
          className="rounded border border-white/10 bg-white/[0.035] px-3 py-2 text-sm leading-5"
          key={item}
          style={{ color: "rgba(244,240,230,0.76)", fontFamily: bodyFont }}
        >
          {item}
        </li>
      ))}
    </ul>
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

const sprintRules = [
  "Até 8 equipes por polo.",
  "Todos passam pelo UR Play antes.",
  "Equipes são organizadas por nível.",
  "Jogos geram ranking.",
  "Atletas também constroem histórico individual.",
  "Os melhores avançam para o Regional.",
] as const;

const levelCards = [
  {
    title: "N1 — Elite",
    description: "Equipes com mais ritmo, experiência, consistência e desempenho competitivo.",
  },
  {
    title: "N2 — Avançado",
    description: "Equipes com boa organização, presença competitiva e potencial real de disputar etapas maiores.",
  },
  {
    title: "N3 — Desenvolvimento",
    description: "Equipes em evolução, formações novas, atletas iniciantes organizados ou grupos ganhando ritmo.",
  },
] as const;

const regionalSlots = [
  "Classificação por polo a partir do UR Sprint.",
  "Critérios oficiais consideram nível, presença, desempenho e participação.",
  "Belo Horizonte classifica representantes.",
  "Betim classifica representantes.",
  "Contagem classifica representantes.",
  "O Regional reúne equipes de níveis diferentes conforme regra oficial.",
] as const;

const regionalCards = [
  {
    title: "Equipes",
    description: "Cada equipe mantém sua pontuação própria e segue disputando sua classificação individual.",
  },
  {
    title: "Atletas",
    description: "Cada atleta continua somando histórico pela própria presença, desempenho, evolução e postura.",
  },
  {
    title: "Polos",
    description: "Cada resultado ajuda a formar o Ranking dos Polos, fortalecendo a região representada.",
  },
] as const;

const rankingCards = [
  {
    id: "ranking-atletas",
    title: "Ranking dos Atletas",
    description: "Mostra a trajetória individual de cada jogador. Mesmo dentro de uma equipe, cada atleta constrói sua própria história.",
    meta: "Presença • desempenho • evolução • postura • fair play",
  },
  {
    id: "ranking-equipes",
    title: "Ranking das Equipes",
    description: "Mostra a campanha própria de cada equipe. A equipe cresce quando seus atletas participam, evoluem e jogam com consistência.",
    meta: "Jogos • vitórias • classificação • evolução coletiva",
  },
  {
    id: "ranking-polos",
    title: "Ranking dos Polos",
    description: "Mostra a força coletiva de cada região. O polo cresce quando a comunidade participa, compete e se envolve.",
    meta: "Equipes • atletas • UR Play • engajamento • Legends",
  },
] as const;

const rewardCards = [
  {
    title: "Para atletas",
    description: "Benefícios individuais, produtos, experiências, descontos, conteúdos, treinos e destaques.",
  },
  {
    title: "Para equipes",
    description: "Orientações, análise de formação, apoio de desenvolvimento, mídia, benefícios e ativações.",
  },
  {
    title: "Para polos",
    description: "Treinos coletivos, clínicas, desafios, ativações, cobertura especial e recompensas comunitárias.",
  },
] as const;

const rewardExamples = [
  "treino especial para equipes do polo",
  "orientação para capitães",
  "clínica técnica",
  "destaque de mídia",
  "sessão de análise de equipe",
  "descontos em eventos",
  "benefícios no UR Market",
  "brindes de patrocinadores",
  "ativações com parceiros",
  "apoio para equipes em desenvolvimento",
] as const;

const marketCards = [
  {
    title: "Atletas",
    description: "Produtos, experiências, treinos, descontos e benefícios individuais.",
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

const extraExamples = [
  "equipe mais organizada",
  "melhor torcida",
  "capitão destaque",
  "atleta revelação",
  "evolução da rodada",
  "fair play",
  "presença completa",
  "conteúdo enviado pela equipe",
  "desafio entre polos",
  "votação da comunidade",
  "história da rodada",
  "melhor jogada",
  "melhor dupla",
  "melhor formação",
  "equipe que mais evoluiu",
] as const;

const legendsCriteria = [
  "Ranking do atleta",
  "Presença",
  "Desempenho",
  "Postura",
  "Evolução",
  "Fair Play",
  "Elegibilidade",
  "Participação na temporada",
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
  {
    title: "Elegibilidade",
    description: "Entenda quem pode participar de cada etapa e como avançar.",
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
    title: "Quero entender tudo",
    description: "Veja como a temporada conecta UR Play, Sprint, Regional, Ranking, Market e Legends.",
    href: "/temporada",
    cta: "Entender temporada",
  },
] as const;

export default function Home() {
  return (
    <main style={{ background: "#0A0A0B", color: "#F4F0E6" }}>
      <section className="relative isolate overflow-hidden" style={{ background: "#0A0A0B" }}>
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
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-sm border border-[rgba(212,164,55,0.35)] bg-[rgba(212,164,55,0.1)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: "#D4A437", fontFamily: bodyFont }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4A437]" />
                    Temporada 1 UR
                  </span>
                </div>
                <h1
                  className="text-[clamp(3.3rem,16vw,8rem)] font-bold uppercase leading-[0.82] tracking-[0.01em]"
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
                  crescerem no ranking dos polos.
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
                  <Button href="#temporada" variant="secondary">
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

      <S id="como-funciona" className="border-t border-[rgba(212,164,55,0.12)]" style={{ background: "#0A0A0B" }}>
        <span aria-hidden className="block scroll-mt-0" id="ur-play" />
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
        <p className="mt-5 max-w-3xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: bodyFont }}>
          O UR Play é a porta de entrada oficial da temporada. É nele que atletas individuais começam,
          equipes são observadas, níveis são ajustados e o caminho dentro do ecossistema fica mais claro.
        </p>
        <ImpactLine>Nenhum atleta ou equipe entra direto nas etapas principais sem passar pelo UR Play.</ImpactLine>
        <div className="mt-5">
          <Button href="/ur-play" variant="secondary">
            Conhecer o UR Play
          </Button>
        </div>
      </S>

      <S id="participar" style={{ background: "#0D0D12" }}>
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
        <ImpactLine>No UR, você joga por você, pode crescer com uma equipe e ainda ajuda seu polo a ganhar força na temporada.</ImpactLine>
      </S>

      <S id="modalidades" style={{ background: "#0A0A0B" }}>
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
        <p className="mt-4 text-sm leading-6" style={{ color: "#8A8A93", fontFamily: bodyFont }}>
          As duas modalidades podem gerar histórico para atletas, equipes e polos conforme as regras oficiais da temporada.
        </p>
      </S>

      <S id="polos" style={{ background: "#0D0D12" }}>
        <span aria-hidden className="block scroll-mt-0" id="territorios" />
        <SectionHeading
          eyebrow="Polos oficiais"
          title={<>Três polos.<br />Uma temporada.</>}
          subtitle="Belo Horizonte, Betim e Contagem entram na disputa com atletas, equipes, histórias e comunidades próprias."
        />
        <p className="-mt-2 mb-5 max-w-3xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: bodyFont }}>
          Cada polo representa uma região. As equipes disputam por seus próprios resultados, mas cada participação também ajuda o polo a crescer no ranking geral.
        </p>
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
        <ImpactLine>Sua equipe joga. Seu atleta evolui. Seu polo pontua.</ImpactLine>
      </S>

      <S id="temporada" style={{ background: "#0A0A0B" }}>
        <span aria-hidden className="block scroll-mt-0" id="ur-sprint" />
        <SectionHeading
          eyebrow="UR Sprint"
          title={<>A primeira disputa<br />do polo.</>}
          subtitle="Depois do UR Play, cada polo inicia sua etapa competitiva com equipes niveladas, jogos organizados e pontuação para a temporada."
        />
        <p className="-mt-2 mb-5 max-w-3xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: bodyFont }}>
          O UR Sprint é a etapa inicial do polo. Ele reúne até 8 equipes por região, valida níveis, cria confrontos internos e define quem avança para a próxima fase.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          {sprintCards.map((card) => (
            <InfoCard description={card.description} key={card.title} title={card.title} />
          ))}
        </div>
        <RuleList items={sprintRules} />
        <p className="mt-4 text-xs font-bold uppercase leading-5 tracking-[0.12em]" style={{ color: "rgba(244,240,230,0.48)", fontFamily: bodyFont }}>
          UR Sprint é o nome oficial da primeira etapa competitiva de cada polo.
        </p>
      </S>

      <S id="niveis" style={{ background: "#0D0D12" }}>
        <SectionHeading
          eyebrow="Níveis de disputa"
          title={<>Níveis para deixar<br />a disputa mais justa.</>}
          subtitle="A temporada precisa ser competitiva sem excluir quem está começando. Por isso, o nivelamento organiza as equipes de acordo com momento, presença e desempenho."
        />
        <div className="grid gap-3 md:grid-cols-3">
          {levelCards.map((card) => (
            <InfoCard description={card.description} key={card.title} title={card.title} />
          ))}
        </div>
        <p className="mt-5 max-w-3xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: bodyFont }}>
          O objetivo não é separar para limitar. É organizar para que cada equipe encontre jogos mais justos,
          evolua com clareza e tenha chance real dentro da temporada.
        </p>
        <ImpactLine>Equipes iniciantes também têm caminho. O N3 existe para valorizar desenvolvimento, participação e evolução.</ImpactLine>
      </S>

      <S id="regional" style={{ background: "#0A0A0B" }}>
        <SectionHeading
          eyebrow="Classificação"
          title={<>Do polo para<br />o Regional.</>}
          subtitle="As melhores equipes de cada polo avançam para enfrentar representantes de outras regiões."
        />
        <div className="grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-[rgba(212,164,55,0.14)] bg-[#14141A] p-4">
            <h3 className="text-xl font-bold uppercase leading-[0.95]" style={{ color: "#F4F0E6", fontFamily: displayFont }}>
              Cada polo classifica 4 equipes
            </h3>
            <RuleList items={regionalSlots} />
          </div>
          <div className="rounded-lg border border-[rgba(212,164,55,0.14)] bg-[#14141A] p-4">
            <h3 className="text-xl font-bold uppercase leading-[0.95]" style={{ color: "#F4F0E6", fontFamily: displayFont }}>
              Espaço real para evolução
            </h3>
            <p className="mt-3 text-sm leading-6" style={{ color: "#8A8A93", fontFamily: bodyFont }}>
              Esse formato mantém a temporada competitiva e também abre espaço real para equipes em desenvolvimento.
              O Regional não é apenas para quem já está no topo: é para quem constrói caminho dentro do nível certo.
            </p>
            <div className="mt-5">
              <Button href="#regional" variant="secondary">Ver caminho da classificação</Button>
            </div>
          </div>
        </div>
      </S>

      <S id="ur-regional" style={{ background: "#0D0D12" }}>
        <SectionHeading
          eyebrow="UR Regional"
          title={<>Os polos<br />se encontram.</>}
          subtitle="No Regional, equipes classificadas de BH, Betim e Contagem se enfrentam em uma disputa que vale para equipes, atletas e polos."
        />
        <p className="-mt-2 mb-5 max-w-3xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: bodyFont }}>
          Aqui a temporada ganha outra dimensão. A equipe joga pela própria campanha, os atletas seguem construindo ranking individual e cada resultado fortalece o polo.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          {regionalCards.map((card) => (
            <InfoCard description={card.description} key={card.title} title={card.title} />
          ))}
        </div>
        <ImpactLine>No Regional, cada ponto conta para alguém: para o atleta, para a equipe e para o polo.</ImpactLine>
      </S>

      <S id="rankings" style={{ background: "#0A0A0B" }}>
        <span aria-hidden className="block scroll-mt-0" id="ranking" />
        <SectionHeading
          eyebrow="Rankings da temporada"
          title={<>Três rankings.<br />Uma temporada mais viva.</>}
          subtitle="O ranking organiza a jornada, mostra evolução e transforma participação em histórico."
        />
        <div className="grid gap-3 md:grid-cols-3">
          {rankingCards.map((card) => (
            <InfoCard description={card.description} id={card.id} key={card.title} meta={card.meta} title={card.title} />
          ))}
        </div>
        <ImpactLine>
          O Ranking dos Atletas e o Ranking das Equipes seguem regras próprias e não recebem multiplicador do Legends.
        </ImpactLine>
      </S>

      <S id="recompensas" style={{ background: "#0D0D12" }}>
        <span aria-hidden className="block scroll-mt-0" id="premiacoes" />
        <SectionHeading
          eyebrow="Recompensas do Polo"
          title={<>Recompensas que<br />beneficiam a comunidade.</>}
          subtitle="As recompensas da temporada não existem só para premiar quem já está no topo. Elas também podem apoiar atletas, equipes em desenvolvimento e polos que participam da jornada."
        />
        <div className="grid gap-3 md:grid-cols-3">
          {rewardCards.map((card) => (
            <InfoCard description={card.description} key={card.title} title={card.title} />
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {rewardExamples.map((example) => (
            <span
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-white/58"
              key={example}
              style={{ fontFamily: bodyFont }}
            >
              {example}
            </span>
          ))}
        </div>
        <p className="mt-5 text-xs font-bold uppercase leading-5 tracking-[0.12em]" style={{ color: "rgba(244,240,230,0.48)", fontFamily: bodyFont }}>
          Recompensas dependem de regras oficiais, disponibilidade, parceiros ativos e validação da temporada.
        </p>
      </S>

      <S id="ur-market" style={{ background: "#0A0A0B" }}>
        <SectionHeading
          eyebrow="UR Market"
          title={<>O UR Market também<br />pode fortalecer o polo.</>}
          subtitle="O Market não precisa beneficiar apenas o atleta individual. Ele também pode oferecer vantagens para equipes e polos inteiros."
        />
        <div className="grid gap-3 md:grid-cols-3">
          {marketCards.map((card) => (
            <InfoCard description={card.description} key={card.title} title={card.title} />
          ))}
        </div>
        <p className="mt-5 max-w-3xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: bodyFont }}>
          O UR Market deve funcionar como uma camada de valorização da temporada. Ele conecta participação,
          mérito, comunidade e parceiros de forma clara e sustentável.
        </p>
        <ImpactLine>Benefícios não são promessa automática. Eles dependem das regras oficiais, parceiros ativos e disponibilidade operacional.</ImpactLine>
      </S>

      <S id="historias" style={{ background: "#0D0D12" }}>
        <SectionHeading
          eyebrow="Atividades extras"
          title={<>A temporada também<br />é feita de histórias.</>}
          subtitle="Além dos jogos, o UR valoriza presença, organização, fair play, evolução, torcida e participação da comunidade."
        />
        <p className="-mt-2 mb-5 max-w-3xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: bodyFont }}>
          As atividades extras deixam a temporada mais divertida, geram conteúdo e fortalecem o senso de pertencimento.
          Elas podem gerar destaque, UR Coins, badges, benefícios simbólicos e pontos leves de engajamento.
        </p>
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 sm:mx-0 sm:flex-wrap sm:px-0">
          {extraExamples.map((example) => (
            <span
              className="shrink-0 rounded-full border border-[rgba(212,164,55,0.16)] bg-[#14141A] px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white/68"
              key={example}
              style={{ fontFamily: bodyFont }}
            >
              {example}
            </span>
          ))}
        </div>
        <ImpactLine>Atividades extras ajudam na diversão e no engajamento, mas não devem valer mais do que o desempenho esportivo.</ImpactLine>
      </S>

      <S id="legends" style={{ background: "#0A0A0B" }}>
        <SectionHeading
          eyebrow="UR Legends"
          title={<>O evento<br />de espetáculo.</>}
          subtitle="No Legends, cada polo envia duas equipes formadas por atletas de destaque do ranking para representar sua região em uma disputa especial."
        />
        <div className="grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-[rgba(212,164,55,0.14)] bg-[#14141A] p-4">
            <h3 className="text-xl font-bold uppercase leading-[0.95]" style={{ color: "#F4F0E6", fontFamily: displayFont }}>
              6 equipes no evento
            </h3>
            <RuleList
              items={[
                "2 equipes de Belo Horizonte.",
                "2 equipes de Betim.",
                "2 equipes de Contagem.",
                "Mais jogos, histórias e rivalidade saudável.",
              ]}
            />
          </div>
          <div className="rounded-lg border border-[rgba(212,164,55,0.14)] bg-[#14141A] p-4">
            <h3 className="text-xl font-bold uppercase leading-[0.95]" style={{ color: "#F4F0E6", fontFamily: displayFont }}>
              Critérios sugeridos
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {legendsCriteria.map((criterion) => (
                <span
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-white/62"
                  key={criterion}
                  style={{ fontFamily: bodyFont }}
                >
                  {criterion}
                </span>
              ))}
            </div>
          </div>
        </div>
        <ImpactLine>No Legends, o atleta representa mais do que uma equipe. Ele representa seu polo.</ImpactLine>
      </S>

      <S id="legends-pontuacao" style={{ background: "#0D0D12" }}>
        <SectionHeading
          eyebrow="Regra do Legends"
          title={<>O Legends movimenta os polos,<br />sem quebrar a justiça da temporada.</>}
          subtitle="A pontuação especial do Legends vale apenas para o Ranking dos Polos. O Ranking dos Atletas e o Ranking das Equipes continuam seguindo suas regras próprias, sem multiplicador."
        />
        <div className="rounded-lg border border-[rgba(212,164,55,0.18)] bg-[#14141A] p-4">
          <h3 className="text-xl font-bold uppercase leading-[0.95]" style={{ color: "#F4F0E6", fontFamily: displayFont }}>
            Regra oficial
          </h3>
          <p className="mt-3 text-sm leading-6" style={{ color: "#8A8A93", fontFamily: bodyFont }}>
            No UR Legends, a pontuação especial movimenta apenas o Ranking dos Polos. O Ranking Individual
            dos Atletas e o Ranking das Equipes continuam seguindo suas regras próprias, sem multiplicador.
          </p>
        </div>
        <ImpactLine>O Legends deixa a disputa mais emocionante, mas a consistência da temporada continua sendo o principal caminho.</ImpactLine>
      </S>

      <S id="diversao-competitiva" style={{ background: "#0A0A0B" }}>
        <SectionHeading
          eyebrow="Diversão competitiva"
          title={<>Competir também<br />precisa ser divertido.</>}
          subtitle="O UR é sério na organização, mas a experiência precisa ser leve, envolvente e boa de viver."
        />
        <p className="-mt-2 mb-5 max-w-3xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: bodyFont }}>
          A temporada existe para criar jogos melhores, histórias reais, rivalidades saudáveis, torcida,
          mídia, evolução e comunidade. O ranking importa, mas a jornada também precisa ser divertida
          para quem joga, assiste e participa.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            "Você não precisa estar pronto para entrar. Precisa começar.",
            "Você pode competir, evoluir e se divertir no mesmo caminho.",
            "O UR valoriza desempenho, mas também presença, evolução e comunidade.",
          ].map((phrase) => (
            <div className="rounded-lg border border-[rgba(212,164,55,0.12)] bg-[#14141A] p-4" key={phrase}>
              <p className="text-sm font-bold uppercase leading-6 tracking-[0.08em]" style={{ color: "#F4F0E6", fontFamily: bodyFont }}>
                {phrase}
              </p>
            </div>
          ))}
        </div>
      </S>

      <S id="regulamento" style={{ background: "#0D0D12" }}>
        <SectionHeading
          eyebrow="Regulamento e critérios"
          title={<>Regras claras para<br />todo mundo jogar melhor.</>}
          subtitle="O regulamento existe para proteger atletas, equipes, polos e a experiência da temporada."
        />
        <p className="-mt-2 mb-5 max-w-3xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: bodyFont }}>
          Critérios claros reduzem confusão, evitam improviso e ajudam todos a entenderem como participar,
          pontuar, evoluir e avançar.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {regulationCards.map((card) => (
            <InfoCard description={card.description} key={card.title} title={card.title} />
          ))}
        </div>
        <div className="mt-5">
          <Button href="/regulamento" variant="secondary">Ver regulamento</Button>
        </div>
      </S>

      <S id="cadastro" style={{ background: "#0A0A0B" }}>
        <SectionHeading
          eyebrow="Como começar agora"
          title={<>Comece pelo<br />UR Play.</>}
          subtitle="Atleta individual ou equipe formada: o primeiro passo é entrar no UR Play, passar pelo nivelamento e começar sua trajetória na Temporada 1."
        />
        <div className="grid gap-3 md:grid-cols-3">
          {startCards.map((card) => (
            <InfoCard description={card.description} href={card.href} key={card.title} title={card.title} cta={card.cta} />
          ))}
        </div>
        <ImpactLine>Todo mundo começa pelo UR Play. É ali que o sistema organiza o nível, registra histórico e direciona cada participante para o caminho certo.</ImpactLine>
      </S>

      <section className="overflow-hidden border-t border-[#ffd84d]/15 bg-black px-5 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl rounded-lg border border-[#ffd84d]/25 bg-[radial-gradient(circle_at_20%_0%,rgba(255,216,77,0.18),transparent_28%),linear-gradient(135deg,#111218,#040405_66%,#241c07)] p-5 md:p-8 lg:p-10">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,0.92fr)_minmax(320px,0.6fr)] lg:items-end">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.18em] text-[#ffe98b]">
                Temporada aberta
              </div>
              <h2 className="mt-4 max-w-4xl text-balance text-[clamp(2.6rem,11vw,5.6rem)] font-black uppercase leading-[0.86] text-white">
                Sua temporada começa no primeiro jogo.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
                Entre pelo UR Play, jogue no seu nível, construa ranking, represente sua equipe e ajude
                seu polo a crescer dentro do Ultimate Rivals.
              </p>
            </div>
            <div className="grid gap-3">
              <Button href="/ur-play">
                Começar pelo UR Play
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
              <Button href="/cadastro" variant="secondary">
                Fazer cadastro
              </Button>
              <p className="text-xs font-bold uppercase leading-5 tracking-[0.12em] text-white/48">
                Atletas individuais, equipes iniciantes e equipes competitivas têm espaço. O UR organiza o caminho para cada nível.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
