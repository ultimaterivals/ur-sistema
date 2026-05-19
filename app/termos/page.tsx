import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowRight, BadgeCheck, Copyright, FileCheck2, Scale, Shield, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "Termos de Uso UR | Site e Cadastro Ultimate Rivals",
  description:
    "Leia os termos de uso do site Ultimate Rivals, incluindo cadastro de interesse, validação operacional, conduta e limitações da fase MVP.",
};

const terms = [
  {
    icon: FileCheck2,
    title: "Uso do site",
    description:
      "O site apresenta informações institucionais, caminhos de interesse e páginas públicas do ecossistema Ultimate Rivals.",
  },
  {
    icon: BadgeCheck,
    title: "Cadastro de interesse",
    description:
      "Enviar cadastro não garante vaga, aprovação, equipe, patrocínio, parceria, inscrição ou participação imediata.",
  },
  {
    icon: Shield,
    title: "Validação obrigatória",
    description:
      "A equipe UR pode avaliar perfil, agenda, polo, modalidade, conduta, disponibilidade e aderência antes de qualquer próximo passo.",
  },
  {
    icon: Users,
    title: "Conduta",
    description:
      "Participantes devem respeitar atletas, equipes, quadras, comunidade, equipe operacional, regras e canais oficiais.",
  },
] as const;

const limitations = [
  "O MVP não cria login, pagamento, ranking real público, calendário definitivo ou aprovação automática.",
  "Informações sobre ranking, temporada, UR Coins, eventos, CT UR e UR Market podem evoluir conforme validação oficial.",
  "Datas, vagas, valores, premiações, repasses, marcas, equipes e atletas reais só devem aparecer após confirmação.",
  "Conteúdos do site não substituem regulamentos específicos de eventos, contratos ou propostas comerciais futuras.",
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

export default function TermosPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <section className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,#090a0f_0%,#030405_100%)] px-5 py-12 md:py-16 lg:px-8 lg:py-20">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:items-center">
          <div className="min-w-0 text-center lg:text-left">
            <Badge>Termos de Uso • Site público</Badge>
            <h1 className="mx-auto mt-5 max-w-4xl text-balance text-[clamp(2.8rem,10vw,4.65rem)] font-black uppercase leading-[0.94] tracking-normal text-white lg:mx-0">
              Participar começa com clareza.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8 lg:mx-0">
              Estes termos explicam o uso do site, a natureza do cadastro de interesse e as limitações da fase MVP do
              Ultimate Rivals.
            </p>
            <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
              <Button href="/cadastro">
                Entrar no UR
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
              <Button href="/privacidade" variant="secondary">
                Ver privacidade
              </Button>
            </div>
          </div>

          <Card className="p-5 md:p-6" premium>
            <Scale aria-hidden className="h-8 w-8 text-[#ffd84d]" />
            <h2 className="mt-6 text-[clamp(2rem,8vw,2.8rem)] font-black uppercase leading-[0.98] text-white">
              Cadastro não é aprovação.
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/72">
              Todo interesse enviado pelo site passa por triagem operacional. A equipe UR decide os próximos passos
              conforme validação, agenda, polo, perfil e regras aplicáveis.
            </p>
          </Card>
        </div>
      </section>

      <PageSection>
        <SectionHeader
          description="O site público informa, orienta e capta interesse. Ele não substitui contratos, regulamentos específicos ou comunicação oficial de eventos."
          eyebrow="Termos principais"
          title="O que o visitante aceita ao usar o site."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {terms.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card className="min-h-[230px]" key={item.title} premium={index === 1}>
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
          description="O Ultimate Rivals está em fase de MVP público. Algumas experiências, integrações e produtos ainda dependem de validação técnica, operacional, comercial e jurídica."
          eyebrow="Limitações da fase MVP"
          title="O que ainda não deve ser interpretado como promessa final."
        />
        <Card className="p-5 md:p-6" premium>
          <div className="grid gap-3 md:grid-cols-2">
            {limitations.map((item, index) => (
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
          description="A marca Ultimate Rivals, seus textos, identidade visual, estrutura, páginas, componentes, nomes de produtos e materiais institucionais pertencem ao ecossistema UR."
          eyebrow="Marca e conteúdo"
          title="Uso responsável das informações públicas."
        />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
          <Card premium>
            <Copyright aria-hidden className="h-8 w-8 text-[#ffd84d]" />
            <h2 className="mt-5 text-[clamp(2rem,8vw,2.75rem)] font-black uppercase leading-[0.98] text-white">
              Propriedade da marca.
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/72">
              O uso da marca, logo, identidade, conteúdo ou materiais do Ultimate Rivals depende de autorização.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-black uppercase leading-none text-white">Condutas esperadas</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Não falsificar dados ou identidade.",
                "Não usar informações do site para confundir terceiros.",
                "Não prometer vaga, ranking ou parceria em nome do UR.",
                "Não reproduzir marca ou materiais sem autorização.",
              ].map((item) => (
                <p
                  className="rounded-lg border border-white/10 bg-black/25 p-4 text-sm font-bold leading-6 text-white/70"
                  key={item}
                >
                  {item}
                </p>
              ))}
            </div>
          </Card>
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]">
        <Card className="grid gap-6 p-5 md:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.45fr)] lg:items-center" premium>
          <div>
            <Badge>Próximo passo</Badge>
            <h2 className="mt-5 max-w-3xl text-[clamp(2.2rem,8vw,3.4rem)] font-black uppercase leading-[0.98] text-white">
              Entre com responsabilidade. A operação valida o caminho.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/74">
              O cadastro de interesse ajuda a equipe UR a organizar demanda, perfil e prioridade. Participação,
              parcerias e aprovações continuam sujeitas à validação oficial.
            </p>
          </div>
          <div className="grid gap-3">
            <Button href="/cadastro">Ir para cadastro</Button>
            <Button href="/regulamento" variant="secondary">
              Ver regulamento
            </Button>
          </div>
        </Card>
      </PageSection>
    </main>
  );
}
