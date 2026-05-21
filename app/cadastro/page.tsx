import type { Metadata } from "next";
import {
  ChevronDown,
  Lock,
  MessageCircle,
  Radio,
} from "lucide-react";
import type { ReactNode } from "react";
import { LeadCaptureSection } from "@/components/cadastro/LeadCaptureSection";
import { PlatformHero } from "@/components/editorial/platform-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { leadFormConfigs, leadProfileOrder } from "@/lib/lead-fields";
import { externalLinks } from "@/lib/links";
import { siteImages } from "@/lib/content/site-images";

export const metadata: Metadata = {
  title: "Cadastro UR | Entre no Ecossistema Ultimate Rivals",
  description:
    "Registre seu interesse para entrar no Ultimate Rivals como atleta, equipe, patrocinador, quadra parceira ou membro da comunidade.",
};

const nextSteps = [
  "Você escolhe o caminho mais próximo do seu perfil.",
  "Você preenche o cadastro dentro do site.",
  "Seu perfil entra no radar da equipe UR.",
  "A equipe UR analisa agenda, polo, perfil e próximo passo.",
  "A entrada passa por validação para manter equilíbrio, respeito e organização.",
] as const;

const quickFaq = [
  {
    question: "Este cadastro já envia dados?",
    answer:
      "Sim. O cadastro coloca seu perfil no radar da equipe UR e ajuda a organizar o próximo contato.",
  },
  {
    question: "Preciso criar conta ou pagar agora?",
    answer:
      "Não. Nesta fase o objetivo é registrar interesse e entender o melhor caminho antes de qualquer próximo passo.",
  },
  {
    question: "Posso entrar como atleta sem equipe?",
    answer:
      "Sim. O caminho do atleta começa pelo UR Play, com histórico e ranking apenas após cadastro, presença e participação confirmada.",
  },
  {
    question: "Patrocinadores e quadras já podem fechar acordo?",
    answer:
      "Podem registrar interesse pelo cadastro correto. Acordos, propostas, ativações e polos dependem de alinhamento com a equipe UR.",
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

export default function CadastroPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <PlatformHero
        actions={[
          { href: "#caminhos", label: "Escolher caminho" },
          { href: "#whatsapp", label: "WhatsApp UR", variant: "secondary" },
          { href: "#aviso-validacao", label: "Aviso de validação", variant: "ghost" },
        ]}
        badges={leadProfileOrder.map((profile) => leadFormConfigs[profile].cardTitle)}
        description="Escolha se você entra como atleta, equipe, patrocinador, quadra parceira ou comunidade. Seu cadastro coloca você no radar do UR e ajuda a equipe a indicar o próximo caminho."
        eyebrow="Cadastro UR • central de interesse"
        image={siteImages.communityMoment}
        imagePosition="center 45%"
        metrics={[
          { label: "Perfis", value: "atleta, equipe, patrocinador, quadra e comunidade" },
          { label: "Fluxo", value: "cadastro analisado pela equipe UR" },
          { label: "Status", value: "entrada com critério e respeito" },
        ]}
        statusDescription="Cadastro não garante vaga, parceria, patrocínio ou participação imediata. A equipe UR analisa perfil, agenda, polo e prioridade."
        statusLabel="captação real"
        statusTitle="Entre no ecossistema pelo caminho certo."
        title="Central oficial de cadastro de interesse."
      />

      <LeadCaptureSection />

      <PageSection className="bg-[#07080c]" id="como-funciona">
        <SectionHeader
          description="A central organiza seu interesse e direciona cada perfil para um próximo passo claro dentro do UR."
          eyebrow="Depois do interesse"
          title="Cadastro aberto, próximo passo com critério."
        />
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
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
          description="Os cadastros registram interesse e ajudam a equipe UR a orientar o melhor caminho. Cadastro não garante vaga, parceria, patrocínio ou participação imediata."
          eyebrow="Aviso importante"
          title="Cadastro aberto. Entrada com equilíbrio e respeito."
        />
        <Card className="grid gap-5 p-5 md:p-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]" premium>
          <div>
            <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
              <Lock aria-hidden className="h-6 w-6 text-[#ffd84d]" />
            </span>
            <h3 className="mt-5 text-[clamp(1.9rem,7vw,2.45rem)] font-black uppercase leading-[0.98] text-white">
              Enviar não garante aprovação.
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/72">
              Esta fase registra interesse e ajuda a equipe UR a analisar agenda, polo, perfil, proposta e prioridade
              antes de liberar qualquer próximo passo.
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
          description="O WhatsApp segue como canal de apoio para direcionamento. A comunidade já pode entrar pela central de cadastro."
          eyebrow="CTAs de conversão"
          title="Canais claros para quem quer entrar no UR."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <Card className="p-5 md:p-6" premium>
            <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
              <MessageCircle aria-hidden className="h-6 w-6 text-[#ffd84d]" />
            </span>
            <h3 className="mt-5 text-2xl font-black uppercase leading-none text-white">CTA para WhatsApp</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Canal de apoio para atendimento inicial, dúvidas e direcionamento quando a equipe UR abrir o próximo
              contato.
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
              Espaço para quem quer acompanhar temporada, mídia, bastidores, eventos e próximos passos do UR.
            </p>
            <Button
              className="mt-6 w-full"
              href="#comunidade"
              variant="secondary"
            >
              Quero acompanhar
            </Button>
            <p className="mt-3 text-xs font-bold uppercase leading-5 tracking-[0.1em] text-white/48">
              cadastro no site com alternativa externa de apoio
            </p>
          </Card>
        </div>
      </PageSection>

      <PageSection id="faq">
        <SectionHeader
          description="Perguntas rápidas para deixar o cadastro claro e reforçar que todo próximo passo precisa de critério."
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
                Você entra, é avaliado e recebe um caminho claro dentro do UR.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
                A central reúne atletas, equipes, marcas, quadras e comunidade em um só caminho. A equipe UR analisa
                cada interesse antes de liberar agenda, polo, proposta, vaga ou participação.
              </p>
            </div>
            <div className="grid gap-3">
              <Button href="#atleta">
                Sou atleta
              </Button>
              <Button href="#equipe" variant="secondary">
                Tenho equipe
              </Button>
              <Button href="#patrocinador" variant="ghost">
                Quero patrocinar
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
