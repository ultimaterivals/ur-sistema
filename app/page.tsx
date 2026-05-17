import type { ReactNode } from "react";
import { Building2, Camera, CheckCircle2, ChevronDown, Dumbbell, Handshake, Radio } from "lucide-react";
import { AudienceCard } from "@/components/home/audience-card";
import { EventCard } from "@/components/home/event-card";
import { FinalCTA } from "@/components/home/final-cta";
import { Hero } from "@/components/home/hero";
import { JourneyStep } from "@/components/home/journey-step";
import { MarketCard } from "@/components/home/market-card";
import { PillarCard } from "@/components/home/pillar-card";
import { ProblemCard } from "@/components/home/problem-card";
import { RankingPreview } from "@/components/home/ranking-preview";
import { SeasonTimeline } from "@/components/home/season-timeline";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import {
  athleteJourney,
  audienceCards,
  communityHighlights,
  courtBenefits,
  ctPrograms,
  eventCards,
  faqItems,
  marketItems,
  mediaFormats,
  pillarCards,
  problemCards,
  rewardCards,
  sponsorActivations,
  teamBenefits,
} from "@/lib/content/home";

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`scroll-mt-24 overflow-hidden border-t border-white/10 px-5 py-10 md:scroll-mt-28 md:py-14 lg:px-8 lg:py-16 ${className}`}
      id={id}
    >
      <div className="mx-auto max-w-7xl min-w-0">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <Hero />

      <Section id="problema">
        <SectionHeader
          description="Atletas treinam, competem, se dedicam e evoluem. Mas, na maioria das vezes, tudo se perde em eventos isolados, sem histórico, sem ranking, sem mídia, sem continuidade e sem retorno real."
          eyebrow="Diagnóstico"
          title="O esporte amador tem talento. O que falta é estrutura."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {problemCards.map((item) => (
            <ProblemCard item={item} key={item.title} />
          ))}
        </div>
        <p className="mt-7 max-w-3xl text-base font-bold leading-7 text-white/75 md:text-lg md:leading-8">
          O Ultimate Rivals nasce para transformar participação em jornada, competição em evolução e esporte
          amador em plataforma profissional.
        </p>
      </Section>

      <Section className="bg-[linear-gradient(180deg,#030405,#08090d)]" id="ecossistema">
        <SectionHeader
          action={
            <Button href="/#caminhos" variant="secondary">
              Conhecer o ecossistema completo
            </Button>
          }
          description="O UR conecta atletas, equipes, quadras, patrocinadores, mídia e comunidade em uma temporada contínua. Cada participação prepara dados, ranking, recompensas, conteúdo e novas oportunidades."
          eyebrow="Solução UR"
          title="Um ecossistema completo para competir, evoluir e ser reconhecido."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pillarCards.map((item) => (
            <PillarCard item={item} key={item.title} />
          ))}
        </div>
      </Section>

      <Section id="caminhos">
        <SectionHeader
          description="O UR foi criado para atletas, equipes, marcas, quadras e fãs. Cada pessoa tem um caminho dentro do ecossistema."
          eyebrow="Escolha seu caminho"
          title="Onde você entra no Ultimate Rivals?"
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {audienceCards.map((item, index) => (
            <div className={index < 3 ? "lg:col-span-2" : "lg:col-span-3"} key={item.title}>
              <AudienceCard featured={index < 2} item={item} />
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#07080c]" id="jornada-atleta">
        <SectionHeader
          action={
            <Button href="/ranking" variant="secondary">
              Quero entrar no ranking UR
            </Button>
          }
          description="No UR, cada atleta constrói uma trajetória. Você pode entrar sozinho, registrar-se em uma equipe ou aguardar oportunidade pelo Draft. O importante é começar sua caminhada."
          eyebrow="Jornada do atleta"
          title="Sua jornada começa no UR Play. Mas não termina no primeiro jogo."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {athleteJourney.map((item) => (
            <JourneyStep description={item.description} key={item.step} step={item.step} title={item.title} />
          ))}
        </div>
        <p className="mt-8 text-sm font-black uppercase tracking-[0.14em] text-[#ffe98b]">
          No UR, jogar não é apenas participar. É construir valor esportivo.
        </p>
      </Section>

      <Section id="jornada-equipes">
        <SectionHeader
          action={
            <Button href="/equipes" variant="secondary">
              Cadastrar minha equipe no UR
            </Button>
          }
          description="No Ultimate Rivals, equipes têm identidade, elenco, ranking coletivo, histórico, mídia, rivalidades e chance de repasse financeiro."
          eyebrow="Jornada das equipes"
          title="Sua equipe pode virar uma marca dentro da temporada."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {teamBenefits.map((item) => {
            const Icon = item.icon;
            return (
              <Card className="flex h-full min-h-[214px] flex-col" key={item.title}>
                <div className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10">
                  <Icon aria-hidden className="h-6 w-6 text-[#ffd84d]" />
                </div>
                <h3 className="mt-5 text-lg font-black uppercase leading-tight text-white md:text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{item.description}</p>
              </Card>
            );
          })}
        </div>
        <p className="mt-8 text-sm font-black uppercase tracking-[0.14em] text-[#ffe98b]">
          Equipe forte não nasce só no jogo. Nasce com identidade, organização e continuidade.
        </p>
      </Section>

      <Section className="bg-[linear-gradient(180deg,#030405,#090a0f)]" id="ranking">
        <SectionHeader
          action={
            <Button href="/ranking" variant="secondary">
              Ver ranking da temporada
            </Button>
          }
          description="Cada ponto mostra presença, desempenho, evolução e impacto. Nesta primeira versão, a interface mostra a estrutura sem atletas, posições ou números inventados."
          eyebrow="Ranking como narrativa"
          title="O ranking não é só uma tabela. É a história da temporada."
        />
        <RankingPreview />
        <p className="mt-7 max-w-3xl text-base font-bold leading-7 text-white/75 md:text-lg md:leading-8">
          No UR, desempenho vira histórico. Histórico vira reputação. Reputação vira oportunidade.
        </p>
      </Section>

      <Section id="temporada">
        <SectionHeader
          action={
            <Button href="/temporada" variant="secondary">
              Ver calendário da temporada
            </Button>
          }
          description="A temporada UR funciona em ciclos trimestrais. Cada ciclo começa pelo UR Play, passa pelo nivelamento, alimenta o ranking, cria torneios por nível e fecha com a Virada de Ranking."
          eyebrow="Temporada trimestral"
          title="Uma temporada curta, intensa e com objetivos claros."
        />
        <SeasonTimeline />
        <p className="mt-8 text-sm font-black uppercase tracking-[0.14em] text-[#ffe98b]">
          O ciclo trimestral mantém o esporte vivo, competitivo e organizado o ano inteiro.
        </p>
      </Section>

      <Section className="bg-[#07080c]" id="recompensas">
        <SectionHeader
          action={
            <Button href="/ur-market" variant="secondary">
              Entender as recompensas UR
            </Button>
          }
          description="O UR cria um sistema onde desempenho, presença, evolução e engajamento podem gerar pontuação, UR Coins, benefícios, produtos, serviços, visibilidade e repasses."
          eyebrow="Premiações e recompensas"
          title="Competir bem precisa gerar reconhecimento real."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {rewardCards.map((item) => {
            const Icon = item.icon;
            return (
              <Card className="flex h-full min-h-[226px] flex-col" premium key={item.title}>
                <div className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
                  <Icon aria-hidden className="h-6 w-6 text-[#ffd84d]" />
                </div>
                <h3 className="mt-5 text-lg font-black uppercase leading-tight text-white md:text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{item.description}</p>
              </Card>
            );
          })}
        </div>
        <p className="mt-8 text-sm font-black uppercase tracking-[0.14em] text-[#ffe98b]">
          No UR, resultado não acaba no apito final. Ele continua no ranking, no mercado, na mídia e nas oportunidades.
        </p>
      </Section>

      <Section id="ur-market">
        <SectionHeader
          action={
            <div className="grid gap-3 sm:flex sm:flex-wrap">
              <Button href="/ur-market" variant="secondary">
                Ver benefícios do UR Market
              </Button>
              <Button href="/patrocinadores" variant="ghost">
                Quero colocar minha marca no Market
              </Button>
            </div>
          }
          description="O UR Market é a vitrine planejada de recompensas e oportunidades da comunidade Ultimate Rivals."
          eyebrow="UR Market"
          title="UR Market: onde desempenho vira benefício."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {marketItems.map((item) => (
            <MarketCard item={item} key={item.title} />
          ))}
        </div>
        <p className="mt-7 max-w-3xl text-base font-bold leading-7 text-white/75 md:text-lg md:leading-8">
          Sua marca pode estar dentro da jornada do atleta, gerando benefício, relacionamento, dados e recorrência.
        </p>
      </Section>

      <Section className="bg-[linear-gradient(180deg,#030405,#08090d)]" id="ct-ur">
        <SectionHeader
          action={
            <Button href="/#ct-ur" variant="secondary">
              Quero conhecer o CT UR
            </Button>
          }
          description="O CT UR é a frente de desenvolvimento do Ultimate Rivals: técnica, físico, mentalidade, liderança, leitura de jogo e preparação competitiva."
          eyebrow="CT UR"
          title="Competir é o começo. Evoluir é o caminho."
        />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch">
          <Card className="flex min-h-[300px] flex-col" premium>
            <div className="flex items-start justify-between gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
                <Dumbbell aria-hidden className="h-6 w-6 text-[#ffd84d]" />
              </span>
              <span className="rounded-md border border-[#ffd84d]/20 px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#ffe98b]">
                programa em formação
              </span>
            </div>
            <h3 className="mt-6 max-w-md text-[clamp(2rem,8vw,2.75rem)] font-black uppercase leading-[0.96] text-white">
              Desenvolvimento em formação
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/72">
              O ranking mostra onde você está. O CT ajuda você a chegar mais longe.
            </p>
            <div className="mt-auto grid gap-2 pt-6 text-xs font-black uppercase tracking-[0.12em] text-[#ffe98b] sm:grid-cols-2">
              <span className="rounded-md border border-white/10 bg-white/[0.045] px-3 py-2">preparação competitiva</span>
              <span className="rounded-md border border-white/10 bg-white/[0.045] px-3 py-2">evolução acompanhável</span>
            </div>
          </Card>
          <div className="grid gap-3 sm:grid-cols-2">
            {ctPrograms.map((program) => (
              <Card className="flex min-h-[132px] flex-col p-4 md:p-5" key={program}>
                <span className="grid h-10 w-10 place-items-center rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10">
                  <CheckCircle2 aria-hidden className="h-5 w-5 text-[#ffd84d]" />
                </span>
                <div className="mt-4 text-base font-black uppercase leading-tight text-white">{program}</div>
                <p className="mt-auto pt-3 text-sm font-bold uppercase tracking-[0.1em] text-white/55">programa em formação</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section id="midia">
        <SectionHeader
          action={
            <Button href="/#midia" variant="secondary">
              Assistir conteúdos UR
            </Button>
          }
          description="O Ultimate Rivals transforma jogos, atletas e equipes em histórias: desempenho, rivalidades, bastidores, evolução e grandes momentos da temporada."
          eyebrow="Mídia e espetáculo"
          title="O atleta amador também merece palco."
        />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch">
          <Card className="flex min-h-[318px] flex-col overflow-hidden" premium>
            <div className="flex items-start justify-between gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
                <Camera aria-hidden className="h-6 w-6 text-[#ffd84d]" />
              </span>
              <span className="rounded-md border border-[#ffd84d]/20 px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#ffe98b]">
                mídia em formação
              </span>
            </div>
            <h3 className="mt-6 max-w-2xl text-[clamp(2rem,8vw,2.75rem)] font-black uppercase leading-[0.96] text-white">
              Mídia oficial em formação
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/72">
              Sem mídia, o esforço desaparece. Com o UR, a jornada vira memória, conteúdo e oportunidade.
            </p>
            <div className="mt-auto grid gap-2 pt-6 sm:grid-cols-3">
              {["jogos", "bastidores", "rivalidades"].map((item) => (
                <span
                  className="rounded-md border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#ffe98b]"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>
          <div className="grid gap-3 sm:grid-cols-2">
            {mediaFormats.map((format, index) => (
              <Card className={index === 0 ? "min-h-[118px] p-4 md:p-5 sm:col-span-2" : "min-h-[118px] p-4 md:p-5"} key={format}>
                <span className="grid h-10 w-10 place-items-center rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10">
                  <Radio aria-hidden className="h-5 w-5 text-[#ffd84d]" />
                </span>
                <div className="mt-3 text-base font-black uppercase leading-tight text-white">{format}</div>
                <p className="mt-2 text-sm text-white/55">ativo em formação</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[#07080c]" id="patrocinadores">
        <SectionHeader
          action={
            <div className="grid gap-3 sm:flex sm:flex-wrap">
              <Button href="/patrocinadores">Quero patrocinar o UR</Button>
              <Button href="/patrocinadores" variant="secondary">
                Receber apresentação comercial
              </Button>
            </div>
          }
          description="Patrocinar o Ultimate Rivals não é comprar um banner. É entrar em uma plataforma com atletas, equipes, ranking, eventos, mídia, recompensas, comunidade e dados."
          eyebrow="Patrocinadores"
          title="Sua marca dentro de um ecossistema vivo."
        />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-stretch">
          <Card className="flex min-h-[258px] flex-col" premium>
            <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
              <Handshake aria-hidden className="h-6 w-6 text-[#ffd84d]" />
            </span>
            <h3 className="mt-6 text-[clamp(1.9rem,8vw,2.65rem)] font-black uppercase leading-[0.96] text-white">
              Proposta comercial em formação
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/72">
              A marca entra na jornada esportiva, não apenas no espaço de exposição.
            </p>
            <p className="mt-auto pt-6 text-xs font-black uppercase tracking-[0.14em] text-[#ffe98b]">
              ativações planejadas para temporada, mídia e comunidade
            </p>
          </Card>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {sponsorActivations.map((activation) => (
              <Card className="flex min-h-[126px] flex-col p-4 md:p-5" key={activation}>
                <span className="grid h-10 w-10 place-items-center rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10">
                  <Handshake aria-hidden className="h-5 w-5 text-[#ffd84d]" />
                </span>
                <div className="mt-3 text-base font-black uppercase leading-tight text-white">{activation}</div>
                <p className="mt-auto pt-3 text-sm text-white/55">ativação em formação</p>
              </Card>
            ))}
          </div>
        </div>
        <p className="mt-8 text-sm font-black uppercase tracking-[0.14em] text-[#ffe98b]">
          O patrocinador certo não aparece apenas no evento. Ele participa da jornada do atleta.
        </p>
      </Section>

      <Section id="quadras">
        <SectionHeader
          action={
            <Button href="/#quadras" variant="secondary">
              Quero minha quadra como polo UR
            </Button>
          }
          description="O UR conecta quadras a atletas, eventos, mídia, comunidade, treinamento e recorrência."
          eyebrow="Quadras parceiras"
          title="Sua quadra pode virar um polo Ultimate Rivals."
        />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-stretch">
          <Card className="flex min-h-[260px] flex-col" premium>
            <div className="flex items-start justify-between gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
                <Building2 aria-hidden className="h-6 w-6 text-[#ffd84d]" />
              </span>
              <span className="rounded-md border border-[#ffd84d]/20 px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#ffe98b]">
                expansão por polos
              </span>
            </div>
            <h3 className="mt-6 text-[clamp(2rem,8vw,2.75rem)] font-black uppercase leading-[0.96] text-white">polo em formação</h3>
            <p className="mt-4 text-sm leading-6 text-white/72">
              Espaços esportivos poderão virar centros vivos de competição, desenvolvimento e relacionamento.
            </p>
            <p className="mt-auto pt-6 text-xs font-black uppercase tracking-[0.14em] text-[#ffe98b]">
              operação regional validada antes da expansão
            </p>
          </Card>
          <div className="grid gap-3 sm:grid-cols-2">
            {courtBenefits.map((benefit) => (
              <Card className="flex min-h-[118px] flex-col p-4 md:p-5" key={benefit}>
                <span className="grid h-10 w-10 place-items-center rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10">
                  <CheckCircle2 aria-hidden className="h-5 w-5 text-[#ffd84d]" />
                </span>
                <div className="mt-3 text-base font-black uppercase leading-tight text-white">{benefit}</div>
                <p className="mt-auto pt-3 text-sm text-white/55">polo em formação</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[linear-gradient(180deg,#030405,#08090d)]" id="eventos">
        <SectionHeader
          action={
            <Button href="/eventos" variant="secondary">
              Ver calendário completo
            </Button>
          }
          description="Veja os próximos UR Play, torneios, mini torneios e ativações oficiais quando o calendário real for validado."
          eyebrow="Próximos eventos"
          title="Entre no próximo ciclo da temporada."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {eventCards.map((item) => (
            <EventCard item={item} key={item.title} />
          ))}
        </div>
      </Section>

      <Section id="comunidade">
        <SectionHeader
          action={
            <Button href="/#comunidade" variant="secondary">
              Fazer parte da comunidade UR
            </Button>
          }
          description="O Ultimate Rivals é para quem acredita que o esporte amador pode ser mais organizado, mais justo, mais emocionante e mais profissional."
          eyebrow="Comunidade"
          title="Mais do que competir. Pertencer a uma comunidade que eleva o jogo."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {communityHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <Card className="flex h-full min-h-[206px] flex-col" key={item.title}>
                <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10">
                  <Icon aria-hidden className="h-6 w-6 text-[#ffd84d]" />
                </span>
                <h3 className="mt-5 text-lg font-black uppercase leading-tight text-white md:text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{item.description}</p>
              </Card>
            );
          })}
        </div>
        <p className="mt-7 max-w-3xl text-base font-bold leading-7 text-white/75 md:text-lg md:leading-8">
          Aqui, cada atleta tem nome. Cada equipe tem história. Cada jogo tem peso. Cada temporada tem memória.
        </p>
      </Section>

      <Section className="bg-[#07080c]" id="faq">
        <SectionHeader
          description="Perguntas rápidas para reduzir dúvidas antes da conversão final. As respostas evitam prometer funcionalidades que ainda não existem."
          eyebrow="FAQ rápido"
          title="O que você precisa saber antes de entrar."
        />
        <div className="grid gap-3 md:grid-cols-2">
          {faqItems.map((item) => (
            <details
              className="group rounded-lg border border-white/10 bg-white/[0.04] transition duration-200 open:border-[#ffd84d]/25 open:bg-white/[0.055]"
              key={item.question}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 text-base font-black uppercase leading-tight text-white">
                <span>{item.question}</span>
                <ChevronDown
                  aria-hidden
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#ffd84d] transition duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="px-5 pb-5 text-sm leading-6 text-white/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </main>
  );
}
