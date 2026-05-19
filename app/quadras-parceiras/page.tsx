import type { Metadata } from "next";
import { PageSection } from "@/components/site/page-section";
import { PremiumEmptyState } from "@/components/site/premium-empty-state";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  CheckCircle2,
  Clock,
  Dumbbell,
  Handshake,
  MapPin,
  Megaphone,
  Radio,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "Quadras Parceiras UR | Polos, Eventos e Comunidade Ultimate Rivals",
  description:
    "Conheça a proposta de quadras parceiras do Ultimate Rivals, com polos operacionais, agenda recorrente, mídia local, eventos, comunidade e patrocinadores.",
};

type CourtCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const benefits: CourtCard[] = [
  {
    icon: Users,
    title: "Fluxo de atletas",
    description: "Entrada recorrente de interessados por UR Play, eventos, equipes e comunidade.",
  },
  {
    icon: CalendarDays,
    title: "Agenda recorrente",
    description: "Calendário pode organizar uso de horários e ciclos quando houver validação operacional.",
  },
  {
    icon: Camera,
    title: "Mídia local",
    description: "A quadra vira cenário de histórias, bastidores, conteúdo e presença territorial.",
  },
  {
    icon: Radio,
    title: "Eventos",
    description: "UR Play, mini torneios e eventos especiais podem acontecer após confirmação oficial.",
  },
  {
    icon: Megaphone,
    title: "Comunidade",
    description: "A quadra se torna ponto de encontro, pertencimento, torcida e relacionamento.",
  },
  {
    icon: Zap,
    title: "Visibilidade",
    description: "Polos ativos podem ganhar destaque no ecossistema, sempre com operação validada.",
  },
  {
    icon: Dumbbell,
    title: "CT UR futuro",
    description: "A quadra pode se conectar a desenvolvimento quando houver estrutura e agenda aprovadas.",
  },
  {
    icon: Handshake,
    title: "Patrocinadores",
    description: "Parcerias locais podem se conectar a eventos, mídia, comunidade e ativações.",
  },
] as const;

const requirements = [
  {
    icon: ShieldCheck,
    title: "Estrutura adequada",
    description: "Condições mínimas de segurança, prática esportiva, recepção e operação.",
  },
  {
    icon: Clock,
    title: "Disponibilidade de horários",
    description: "Abertura para organizar agenda recorrente, testes e possíveis ciclos oficiais.",
  },
  {
    icon: MapPin,
    title: "Localização",
    description: "Polo precisa fazer sentido para atletas, comunidade, operação e expansão territorial.",
  },
  {
    icon: CheckCircle2,
    title: "Compromisso operacional",
    description: "Alinhamento com regras, comunicação, calendário e padrão de experiência UR.",
  },
] as const;

const partnershipModels = [
  {
    title: "Polo UR Play",
    status: "modelo em formação",
    description: "Quadra candidata a receber entradas oficiais, observação, nivelamento e comunidade.",
  },
  {
    title: "Polo de eventos",
    status: "agenda após confirmação",
    description: "Quadra candidata a mini torneios, eventos especiais e ativações locais.",
  },
  {
    title: "Polo comercial",
    status: "valores definidos após proposta",
    description: "Quadra candidata a relação com patrocinadores, mídia local e entregas comerciais.",
  },
] as const;


export default function QuadrasParceirasPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <section className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,#090a0f_0%,#030405_100%)] px-5 py-12 md:py-16 lg:px-8 lg:py-20">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:items-center">
          <div className="min-w-0 text-center lg:text-left">
            <Badge>Quadras parceiras • polos • operação local</Badge>
            <h1 className="mx-auto mt-5 max-w-5xl text-balance text-[clamp(2.8rem,10vw,4.65rem)] font-black uppercase leading-[0.94] tracking-normal text-white lg:mx-0">
              Sua quadra pode virar um polo do Ultimate Rivals.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8 lg:mx-0">
              A quadra parceira não recebe só um evento. Ela pode entrar em um ciclo recorrente com atletas, mídia,
              comunidade, patrocinadores, agenda e desenvolvimento.
            </p>
            <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
              <Button href="/cadastro#quadra">
                Cadastrar quadra
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
              <Button href="/eventos" variant="secondary">
                Ver eventos UR
              </Button>
            </div>
          </div>

          <PremiumEmptyState
            ctaLabel="Ser quadra parceira"
            description="Polos, agenda, modelos comerciais, CT UR e eventos entram apenas após validação operacional e proposta aprovada. Nenhum valor ou data real foi inventado."
            footer="agenda oficial será publicada após confirmação"
            href="/cadastro#quadra"
            icon={MapPin}
            statusLabel="polo em validação"
            title="Polo em preparação."
          />
        </div>
      </section>

      <PageSection>
        <SectionHeader
          description="A parceria busca transformar a quadra em base de recorrência, não apenas local alugado para uma data."
          eyebrow="Benefícios"
          title="Mais fluxo, mídia, comunidade e oportunidade comercial."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card className="min-h-[230px]" key={item.title} premium={index === 0 || index === 2}>
                <Icon aria-hidden className="h-7 w-7 text-[#ffd84d]" />
                <h2 className="mt-5 text-2xl font-black uppercase leading-none text-white">{item.title}</h2>
                <p className="mt-4 text-sm leading-6 text-white/68">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]">
        <SectionHeader
          description="Para virar polo, a quadra precisa sustentar experiência, operação e calendário com responsabilidade."
          eyebrow="Requisitos mínimos"
          title="Estrutura e compromisso antes do selo de polo."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {requirements.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card className="min-h-[220px]" key={item.title} premium={index === 0}>
                <Icon aria-hidden className="h-7 w-7 text-[#ffd84d]" />
                <h2 className="mt-5 text-2xl font-black uppercase leading-none text-white">{item.title}</h2>
                <p className="mt-4 text-sm leading-6 text-white/68">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          description="Modelos estão em formação para evitar valores, contrapartidas ou agendas inventadas. Cada proposta depende de validação e contexto local."
          eyebrow="Modelos de parceria"
          title="Formatos em formação, sem valores inventados."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {partnershipModels.map((item, index) => (
            <Card className="flex min-h-[260px] flex-col" key={item.title} premium={index === 1}>
              <span className="rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#ffe98b]">
                {item.status}
              </span>
              <h2 className="mt-5 text-2xl font-black uppercase leading-none text-white">{item.title}</h2>
              <p className="mt-4 text-sm leading-6 text-white/68">{item.description}</p>
              <p className="mt-auto pt-5 text-xs font-black uppercase leading-5 tracking-[0.12em] text-white/48">
                proposta e operação sujeitas à validação oficial
              </p>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]">
        <Card className="grid gap-6 p-5 md:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.45fr)] lg:items-center" premium>
          <div>
            <Badge>CTA Quadras Parceiras</Badge>
            <h2 className="mt-5 max-w-3xl text-[clamp(2.2rem,8vw,3.4rem)] font-black uppercase leading-[0.98] text-white">
              Sua quadra pode ser base de uma temporada mais organizada.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/74">
              Registre interesse para triagem operacional. A equipe UR valida estrutura, disponibilidade, localização,
              calendário, proposta e alinhamento antes de qualquer ativação.
            </p>
          </div>
          <div className="grid gap-3">
            <Button href="/cadastro#quadra">Ser quadra parceira</Button>
            <Button href="/contato" variant="secondary">
              Falar com o UR
            </Button>
          </div>
        </Card>
      </PageSection>
    </main>
  );
}
