import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  Handshake,
  Lock,
  MessageCircle,
  Radio,
  Shield,
  Target,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { conversionRoutes, externalLinks } from "@/lib/links";

export const metadata: Metadata = {
  title: "Cadastro UR | Entre no Ecossistema Ultimate Rivals",
  description:
    "Registre seu interesse para entrar no Ultimate Rivals como atleta, equipe, patrocinador, quadra parceira ou membro da comunidade.",
};

type PathCard = {
  id: string;
  icon: LucideIcon;
  title: string;
  audience: string;
  description: string;
  href: string;
  status: string;
};

const pathCards: PathCard[] = [
  {
    id: "atleta",
    icon: Target,
    title: "Sou atleta",
    audience: "UR Play, ranking e evolução",
    description:
      "Para quem quer entrar pelo UR Play, construir histórico, disputar ranking, buscar equipe, mídia, CT UR e recompensas futuras.",
    href: externalLinks.formularioAtleta.href,
    status: externalLinks.formularioAtleta.status,
  },
  {
    id: "equipe",
    icon: Shield,
    title: "Tenho uma equipe",
    audience: "elenco, identidade e ranking coletivo",
    description:
      "Para capitães e representantes que querem preparar uma equipe oficial, com validação de elenco, identidade e temporada.",
    href: externalLinks.formularioEquipe.href,
    status: externalLinks.formularioEquipe.status,
  },
  {
    id: "patrocinador",
    icon: Handshake,
    title: "Quero patrocinar",
    audience: "marca, mídia e ativação comercial",
    description:
      "Para marcas que querem entrar na jornada do atleta, ativar eventos, ranking, UR Market, mídia, CT UR e comunidade.",
    href: externalLinks.formularioPatrocinador.href,
    status: externalLinks.formularioPatrocinador.status,
  },
  {
    id: "quadra",
    icon: Building2,
    title: "Tenho uma quadra",
    audience: "polo, agenda e comunidade local",
    description:
      "Para quadras interessadas em se tornar polo UR, receber ativações, organizar agenda e participar da expansão regional.",
    href: externalLinks.formularioQuadra.href,
    status: externalLinks.formularioQuadra.status,
  },
  {
    id: "comunidade",
    icon: Radio,
    title: "Quero acompanhar a comunidade",
    audience: "conteúdo, temporada e bastidores",
    description:
      "Para quem quer acompanhar notícias, mídia, ranking em formação, bastidores, eventos e próximos passos do ecossistema.",
    href: externalLinks.comunidade.href,
    status: externalLinks.comunidade.status,
  },
];

const nextSteps = [
  "Você escolhe o caminho mais próximo do seu perfil.",
  "O link real será conectado após validação operacional.",
  "A equipe UR valida agenda, polo, categoria e prioridade.",
  "A orientação oficial é liberada quando a operação estiver pronta.",
] as const;

const quickFaq = [
  {
    question: "Este cadastro já envia dados?",
    answer:
      "Ainda não. Esta central é visual e estratégica. Os links reais serão conectados após validação operacional.",
  },
  {
    question: "Existe backend, login ou banco de dados?",
    answer:
      "Não nesta fase. O MVP mantém a captação organizada sem criar backend, login, pagamento, Supabase ou banco de dados.",
  },
  {
    question: "Posso entrar como atleta sem equipe?",
    answer:
      "Sim. O caminho do atleta começa pelo UR Play, com histórico e ranking apenas após cadastro, validação e participação oficial.",
  },
  {
    question: "Patrocinadores e quadras já podem fechar acordo?",
    answer:
      "Não por esta página. Interesse comercial e quadras parceiras dependem de proposta, aprovação e validação operacional.",
  },
] as const;

function PageSection({
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

function PathCard({ item, featured = false }: { item: PathCard; featured?: boolean }) {
  const Icon = item.icon;

  return (
    <Card className="flex h-full min-h-[300px] flex-col" premium={featured}>
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10">
          <Icon aria-hidden className="h-6 w-6 text-[#ffd84d]" />
        </span>
        <span className="max-w-[58%] rounded-md border border-[#ffd84d]/20 px-2 py-1 text-right text-[10px] font-black uppercase leading-4 tracking-[0.12em] text-[#ffe98b]">
          interesse
        </span>
      </div>
      <h3 className="mt-5 text-2xl font-black uppercase leading-none text-white">{item.title}</h3>
      <p className="mt-2 text-xs font-black uppercase leading-5 tracking-[0.12em] text-[#ffe98b]">{item.audience}</p>
      <p className="mt-4 flex-1 text-sm leading-6 text-white/70">{item.description}</p>
      <Button className="mt-6 w-full" href={item.href} variant={featured ? "primary" : "secondary"}>
        Escolher caminho
        <ArrowRight aria-hidden className="h-4 w-4" />
      </Button>
      <p className="mt-3 text-xs font-bold uppercase leading-5 tracking-[0.1em] text-white/48">{item.status}</p>
    </Card>
  );
}

export default function CadastroPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <section className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,#090a0f_0%,#030405_100%)] px-5 py-10 md:py-12 lg:px-8 lg:py-14">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
          <div className="min-w-0 text-center lg:text-left">
            <Badge>Cadastro UR • central de interesse</Badge>
            <h1 className="mx-auto mt-4 max-w-4xl text-balance text-[clamp(2.75rem,10vw,4rem)] font-black uppercase leading-[0.94] tracking-normal text-white md:text-[clamp(3.45rem,6vw,5rem)] lg:mx-0">
              Entre no ecossistema pelo caminho certo.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8 lg:mx-0">
              Escolha se você entra como atleta, equipe, patrocinador, quadra parceira ou comunidade. Esta central
              organiza a captação sem criar backend, login, pagamento ou banco de dados nesta fase.
            </p>
            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
              <Button href="#caminhos">
                Escolher caminho
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
              <Button href="#whatsapp" variant="secondary">
                WhatsApp UR
              </Button>
              <Button href="#aviso-validacao" variant="ghost">
                Status dos links
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[470px]">
            <Card className="p-4 md:p-5" premium>
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
                  <Users aria-hidden className="h-6 w-6 text-[#ffd84d]" />
                </span>
                <span className="rounded-md border border-[#ffd84d]/20 px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#ffe98b]">
                  captação em validação
                </span>
              </div>
              <div className="mt-6 grid gap-3">
                {pathCards.map((item) => (
                  <a
                    className="grid grid-cols-[40px_1fr] items-center gap-3 rounded-lg border border-white/10 bg-black/30 p-3 transition hover:border-[#ffd84d]/25"
                    href={`#${item.id}`}
                    key={item.id}
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-md bg-[#ffd84d] text-sm font-black text-black">
                      {item.title.slice(0, 1)}
                    </span>
                    <span>
                      <span className="block text-sm font-black uppercase leading-tight text-white">{item.title}</span>
                      <span className="mt-1 block text-xs font-bold uppercase tracking-[0.1em] text-[#ffe98b]">
                        {item.audience}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <PageSection id="caminhos">
        <SectionHeader
          description="Cada card representa uma intenção diferente. Os links reais ficam centralizados em configuração para serem conectados quando a operação validar formulários e canais."
          eyebrow="Escolha seu caminho"
          title="Uma porta de entrada para cada perfil."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {pathCards.map((item, index) => (
            <div id={item.id} key={item.id}>
              <PathCard featured={index === 0} item={item} />
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]" id="como-funciona">
        <SectionHeader
          description="O MVP já organiza a intenção. A conexão real com WhatsApp, Instagram, comunidade e formulários entra depois da validação operacional."
          eyebrow="Depois do interesse"
          title="Captação simples, sem prometer automação que ainda não existe."
        />
        <div className="grid gap-3 md:grid-cols-4">
          {nextSteps.map((item, index) => (
            <Card className="min-h-[176px] p-4 md:p-5" key={item} premium={index === 0}>
              <span className="grid h-10 w-10 place-items-center rounded-md bg-[#ffd84d] text-xs font-black text-black">
                {index + 1}
              </span>
              <p className="mt-5 text-sm font-black uppercase leading-6 tracking-[0.08em] text-white">{item}</p>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection id="aviso-validacao">
        <SectionHeader
          description="Todos os links externos abaixo são placeholders seguros. Eles existem para deixar a arquitetura pronta sem coletar dados antes da operação."
          eyebrow="Aviso de validação"
          title="Links reais entram depois da validação operacional."
        />
        <Card className="grid gap-5 p-5 md:p-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]" premium>
          <div>
            <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
              <Lock aria-hidden className="h-6 w-6 text-[#ffd84d]" />
            </span>
            <h3 className="mt-5 text-[clamp(1.9rem,7vw,2.45rem)] font-black uppercase leading-[0.98] text-white">
              Nada é enviado ainda.
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/72">
              Esta fase não cria backend, banco de dados, Supabase, login, pagamento, formulário funcional complexo ou
              captação automática.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {Object.values(externalLinks).map((link) => (
              <div className="rounded-lg border border-white/10 bg-black/25 p-4" key={link.label}>
                <div className="text-sm font-black uppercase leading-tight text-white">{link.label}</div>
                <p className="mt-2 text-xs font-bold uppercase leading-5 tracking-[0.1em] text-[#ffe98b]">
                  {link.status}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </PageSection>

      <PageSection className="bg-[linear-gradient(180deg,#030405,#08090d)]" id="whatsapp">
        <SectionHeader
          description="Os botões abaixo já têm lugar na experiência, mas apontam para o aviso de validação até os canais oficiais serem conectados."
          eyebrow="CTAs de conversão"
          title="WhatsApp e comunidade preparados para conexão real."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <Card className="p-5 md:p-6" premium>
            <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
              <MessageCircle aria-hidden className="h-6 w-6 text-[#ffd84d]" />
            </span>
            <h3 className="mt-5 text-2xl font-black uppercase leading-none text-white">CTA para WhatsApp</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Canal preparado para atendimento inicial, dúvidas e direcionamento quando o WhatsApp UR oficial for
              validado.
            </p>
            <Button className="mt-6 w-full" href={externalLinks.whatsappUr.href}>
              {externalLinks.whatsappUr.label}
            </Button>
            <p className="mt-3 text-xs font-bold uppercase leading-5 tracking-[0.1em] text-white/48">
              {externalLinks.whatsappUr.status}
            </p>
          </Card>

          <Card className="p-5 md:p-6">
            <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10">
              <Radio aria-hidden className="h-6 w-6 text-[#ffd84d]" />
            </span>
            <h3 className="mt-5 text-2xl font-black uppercase leading-none text-white">CTA para comunidade</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Espaço futuro para quem quer acompanhar temporada, mídia, bastidores, eventos e próximos passos do UR.
            </p>
            <Button className="mt-6 w-full" href={externalLinks.comunidade.href} variant="secondary">
              {externalLinks.comunidade.label}
            </Button>
            <p className="mt-3 text-xs font-bold uppercase leading-5 tracking-[0.1em] text-white/48">
              {externalLinks.comunidade.status}
            </p>
          </Card>
        </div>
      </PageSection>

      <PageSection id="faq">
        <SectionHeader
          description="Perguntas rápidas para deixar a conversão clara sem criar formulário real ou integração antecipada."
          eyebrow="FAQ rápido"
          title="Antes de escolher, entenda a fase atual."
        />
        <div className="grid gap-3 md:grid-cols-2">
          {quickFaq.map((item) => (
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
      </PageSection>

      <section className="overflow-hidden border-t border-[#ffd84d]/15 bg-[linear-gradient(135deg,#090a0f,#030405)] px-5 py-12 md:py-16 lg:px-8 lg:py-[72px]">
        <div className="mx-auto max-w-7xl">
          <Card className="grid gap-8 p-5 md:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.52fr)] lg:items-center" premium>
            <div>
              <Badge>Central UR</Badge>
              <h2 className="mt-5 max-w-3xl text-[clamp(2.3rem,8vw,3.55rem)] font-black uppercase leading-[0.96] text-white">
                Escolha um caminho. A operação valida o próximo passo.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
                O MVP agora tem uma central de conversão preparada para conectar canais reais quando a agenda, os polos,
                os formulários e a comunidade forem oficialmente validados.
              </p>
            </div>
            <div className="grid gap-3">
              <Button href={conversionRoutes.atleta}>Sou atleta</Button>
              <Button href={conversionRoutes.equipe} variant="secondary">
                Tenho equipe
              </Button>
              <Button href={conversionRoutes.patrocinador} variant="ghost">
                Quero patrocinar
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
