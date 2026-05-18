import type { Metadata } from "next";
import {
  ArrowRight,
  ChevronDown,
  Lock,
  MessageCircle,
  Radio,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import { LeadCaptureSection } from "@/components/cadastro/LeadCaptureSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { leadFormConfigs, leadProfileOrder } from "@/lib/lead-fields";
import { externalLinks } from "@/lib/links";

export const metadata: Metadata = {
  title: "Cadastro UR | Entre no Ecossistema Ultimate Rivals",
  description:
    "Registre seu interesse para entrar no Ultimate Rivals como atleta, equipe, patrocinador, quadra parceira ou membro da comunidade.",
};

const nextSteps = [
  "Você escolhe o caminho mais próximo do seu perfil.",
  "Você preenche o formulário próprio dentro do site.",
  "O envio vai para Google Sheets quando o endpoint estiver configurado.",
  "A equipe UR valida agenda, polo, perfil e prioridade.",
  "O cadastro não garante vaga, parceria, patrocínio ou participação imediata.",
] as const;

const quickFaq = [
  {
    question: "Este cadastro já envia dados?",
    answer:
      "Sim, quando a variável NEXT_PUBLIC_GOOGLE_SCRIPT_URL estiver configurada. Enquanto isso, cada formulário mantém o Tally como fallback temporário.",
  },
  {
    question: "Existe backend, login ou banco de dados?",
    answer:
      "Não nesta fase. O MVP envia o formulário próprio para Google Apps Script e Google Sheets, sem criar backend, login, pagamento, Supabase ou banco de dados.",
  },
  {
    question: "Posso entrar como atleta sem equipe?",
    answer:
      "Sim. O caminho do atleta começa pelo UR Play, com histórico e ranking apenas após cadastro, validação e participação oficial.",
  },
  {
    question: "Patrocinadores e quadras já podem fechar acordo?",
    answer:
      "Podem registrar interesse pelo formulário correto. Acordos, propostas, ativações e polos dependem de aprovação e validação operacional.",
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
                Aviso de validação
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
                {leadProfileOrder.map((profile) => {
                  const item = leadFormConfigs[profile];

                  return (
                  <a
                    className="grid grid-cols-[40px_1fr] items-center gap-3 rounded-lg border border-white/10 bg-black/30 p-3 transition hover:border-[#ffd84d]/25"
                    href={`#${item.anchor}`}
                    key={profile}
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-md bg-[#ffd84d] text-sm font-black text-black">
                      {item.cardTitle.slice(0, 1)}
                    </span>
                    <span>
                      <span className="block text-sm font-black uppercase leading-tight text-white">
                        {item.cardTitle}
                      </span>
                      <span className="mt-1 block text-xs font-bold uppercase tracking-[0.1em] text-[#ffe98b]">
                        {item.audience}
                      </span>
                    </span>
                  </a>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <LeadCaptureSection />

      <PageSection className="bg-[#07080c]" id="como-funciona">
        <SectionHeader
          description="O MVP agora organiza a intenção com formulários próprios no site, envio preparado para Google Sheets e Tally preservado como fallback temporário."
          eyebrow="Depois do interesse"
          title="Captação real, validação operacional antes do próximo passo."
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
          description="Os formulários próprios dependem da URL pública do Google Apps Script. O cadastro registra interesse, mas não garante vaga, parceria, patrocínio ou participação imediata."
          eyebrow="Aviso de validação"
          title="Cadastro próprio preparado. Aprovação continua em validação."
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
              Esta fase não cria backend, banco de dados, Supabase, login ou pagamento. O endpoint público guarda apenas
              a URL do Apps Script, sem credenciais. A equipe UR ainda valida agenda, polo, perfil, proposta e prioridade
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
          description="O WhatsApp segue reservado para conexão oficial quando o canal operacional for validado. A comunidade já pode entrar pelo formulário próprio, com Tally como fallback."
          eyebrow="CTAs de conversão"
          title="WhatsApp preparado e comunidade dentro da central."
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
              formulário próprio no site com Tally como fallback
            </p>
          </Card>
        </div>
      </PageSection>

      <PageSection id="faq">
        <SectionHeader
          description="Perguntas rápidas para deixar a conversão clara sem criar backend, login, pagamento ou integração complexa nesta fase."
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
                O MVP agora tem uma central de conversão com formulários próprios, Google Sheets via Apps Script e Tally
                como fallback temporário. A equipe UR valida cada interesse antes de liberar agenda, polo, proposta, vaga
                ou participação.
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
