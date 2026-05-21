import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowRight, Database, Lock, Mail, ShieldCheck, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "Privacidade UR | Dados e Cadastro Ultimate Rivals",
  description:
    "Entenda como o Ultimate Rivals trata dados de interesse, contato, avaliação de perfil e organização da fase atual do ecossistema.",
};

const dataCategories = [
  {
    title: "Dados de identificação",
    description: "Nome, perfil de interesse, cidade, polo desejado, modalidade e informações necessárias para orientar o próximo passo.",
  },
  {
    title: "Dados de contato",
    description: "WhatsApp, e-mail, Instagram ou canal informado pelo próprio interessado para retorno da equipe UR.",
  },
  {
    title: "Dados de acompanhamento",
    description: "Origem do cadastro, status, prioridade, responsável, observações e próximo passo de atendimento.",
  },
] as const;

const purposes = [
  "Responder interesses enviados pelo site.",
  "Organizar avaliação por perfil: atleta, equipe, patrocinador, quadra ou comunidade.",
  "Planejar agenda, polos, modalidades, eventos e próximos passos da fase atual.",
  "Preparar ranking, histórico e relacionamento futuro apenas com dados validados oficialmente.",
  "Melhorar comunicação, atendimento e leitura de demanda do ecossistema Ultimate Rivals.",
] as const;

function PageSection({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
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

export default function PrivacidadePage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <section className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,#090a0f_0%,#030405_100%)] px-5 py-12 md:py-16 lg:px-8 lg:py-20">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:items-center">
          <div className="min-w-0 text-center lg:text-left">
            <Badge>Política de Privacidade • MVP</Badge>
            <h1 className="mx-auto mt-5 max-w-4xl text-balance text-[clamp(2.8rem,10vw,4.65rem)] font-black uppercase leading-[0.94] tracking-normal text-white lg:mx-0">
              Dados tratados com finalidade clara.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8 lg:mx-0">
              O Ultimate Rivals usa dados de interesse para contato, avaliação de perfil, organização de agenda e evolução do
              ecossistema. Cadastro não significa aprovação automática, vaga ou participação imediata.
            </p>
            <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
              <Button href="/cadastro">
                Registrar interesse
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
              <Button href="/contato" variant="secondary">
                Falar com o UR
              </Button>
            </div>
          </div>

          <Card className="p-5 md:p-6" premium>
            <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
              <ShieldCheck aria-hidden className="h-6 w-6 text-[#ffd84d]" />
            </span>
            <h2 className="mt-6 text-[clamp(2rem,8vw,2.8rem)] font-black uppercase leading-[0.98] text-white">
              Base de dados em revisão.
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/72">
              Nesta fase, o cadastro pode usar formulários próprios, Google Apps Script e Google Sheets como primeira
              base de acompanhamento. Não há venda de dados pessoais.
            </p>
          </Card>
        </div>
      </section>

      <PageSection>
        <SectionHeader
          description="A coleta deve ser proporcional ao caminho escolhido e ao atendimento necessário. Nenhum dado sensível deve ser solicitado sem necessidade real."
          eyebrow="Dados coletados"
          title="O que pode ser informado pelo visitante."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {dataCategories.map((item, index) => (
            <Card className="min-h-[190px]" key={item.title} premium={index === 0}>
              <div className="text-xs font-black uppercase tracking-[0.16em] text-[#ffe98b]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h2 className="mt-4 text-2xl font-black uppercase leading-none text-white">{item.title}</h2>
              <p className="mt-4 text-sm leading-6 text-white/68">{item.description}</p>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]">
        <SectionHeader
          description="Os dados são usados para organizar o primeiro contato e preparar os próximos passos do ecossistema, sempre com análise da equipe UR."
          eyebrow="Finalidade"
          title="Por que o Ultimate Rivals coleta esses dados."
        />
        <Card className="p-5 md:p-6" premium>
          <div className="grid gap-3 md:grid-cols-5">
            {purposes.map((item, index) => (
              <div className="rounded-lg border border-white/10 bg-black/25 p-4" key={item}>
                <span className="grid h-9 w-9 place-items-center rounded-md bg-[#ffd84d] text-xs font-black text-black">
                  {index + 1}
                </span>
                <p className="mt-4 text-sm font-bold leading-6 text-white/72">{item}</p>
              </div>
            ))}
          </div>
        </Card>
      </PageSection>

      <PageSection>
        <SectionHeader
          description="A fase inicial prioriza simplicidade, rastreabilidade e acompanhamento humano. A infraestrutura poderá evoluir conforme o sistema crescer."
          eyebrow="Base inicial"
          title="Google Sheets e Apps Script como primeira camada."
        />
        <div className="grid gap-5 md:grid-cols-3">
          <Card premium>
            <Database aria-hidden className="h-7 w-7 text-[#ffd84d]" />
            <h2 className="mt-5 text-2xl font-black uppercase leading-none text-white">Registro de interesse</h2>
            <p className="mt-4 text-sm leading-6 text-white/68">
              Leads podem ser registrados em Google Sheets para triagem manual, acompanhamento e organização da equipe.
            </p>
          </Card>
          <Card>
            <Users aria-hidden className="h-7 w-7 text-[#ffd84d]" />
            <h2 className="mt-5 text-2xl font-black uppercase leading-none text-white">Relacionamento</h2>
            <p className="mt-4 text-sm leading-6 text-white/68">
              A equipe UR pode usar os dados para contato, orientação, validação de perfil e próximos passos.
            </p>
          </Card>
          <Card>
            <Lock aria-hidden className="h-7 w-7 text-[#ffd84d]" />
            <h2 className="mt-5 text-2xl font-black uppercase leading-none text-white">Sem venda de dados</h2>
            <p className="mt-4 text-sm leading-6 text-white/68">
              O Ultimate Rivals não vende dados pessoais. O uso deve permanecer conectado ao relacionamento UR.
            </p>
          </Card>
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]">
        <SectionHeader
          description="Solicitações de correção, atualização, remoção ou dúvidas sobre dados devem ser encaminhadas pelo canal institucional."
          eyebrow="Solicitações"
          title="O visitante pode pedir revisão dos próprios dados."
        />
        <Card className="grid gap-6 p-5 md:p-6 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-center" premium>
          <div>
            <Mail aria-hidden className="h-8 w-8 text-[#ffd84d]" />
            <h2 className="mt-5 text-[clamp(2rem,8vw,2.75rem)] font-black uppercase leading-[0.98] text-white">
              Canal institucional.
            </h2>
          </div>
          <div>
            <p className="text-base leading-7 text-white/74">
              Use a página de contato para solicitar orientação, correção de informações, exclusão de dados de interesse
              ou esclarecimentos sobre o uso dos dados. A política poderá evoluir conforme o UR avance para novas camadas de
              tecnologia, ranking, eventos e comunidade.
            </p>
            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
              <Button href="/contato">Abrir contato</Button>
              <Button href="/termos" variant="secondary">
                Ver termos de uso
              </Button>
            </div>
          </div>
        </Card>
      </PageSection>

      <PageSection>
        <Card className="grid gap-6 p-5 md:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.45fr)] lg:items-center" premium>
          <div>
            <Badge>Atualizações</Badge>
            <h2 className="mt-5 max-w-3xl text-[clamp(2.2rem,8vw,3.4rem)] font-black uppercase leading-[0.98] text-white">
              A política acompanha o crescimento do ecossistema.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/74">
              Esta versão cobre a fase MVP. Novas funcionalidades, integrações, rankings, eventos, pagamentos ou áreas
              logadas exigirão atualização da política antes de uso público.
            </p>
          </div>
          <div className="grid gap-3">
            <Button href="/regulamento">Ver regulamento</Button>
            <Button href="/cadastro" variant="secondary">
              Entrar no UR
            </Button>
          </div>
        </Card>
      </PageSection>
    </main>
  );
}
