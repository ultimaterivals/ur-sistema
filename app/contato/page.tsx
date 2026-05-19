import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowRight, Building2, Handshake, Mail, MapPin, Megaphone, Shield, Users, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "Contato UR | Atletas, Equipes, Patrocinadores e Quadras Ultimate Rivals",
  description:
    "Fale com o Ultimate Rivals pelo caminho correto: atleta, equipe, patrocinador, quadra parceira, comunidade, imprensa ou parcerias.",
};

const contactPaths = [
  {
    icon: Zap,
    title: "Atleta",
    description: "Entre pelo UR Play, ranking em formação, níveis, eventos e oportunidades futuras.",
    href: "/cadastro#atleta",
    cta: "Sou atleta",
  },
  {
    icon: Shield,
    title: "Equipe",
    description: "Registre interesse para equipe oficial, elenco, capitão, ranking coletivo e temporada.",
    href: "/cadastro#equipe",
    cta: "Tenho uma equipe",
  },
  {
    icon: Handshake,
    title: "Patrocinador",
    description: "Conecte sua marca a atletas, mídia, ranking, UR Market, eventos e comunidade.",
    href: "/cadastro#patrocinador",
    cta: "Quero patrocinar",
  },
  {
    icon: MapPin,
    title: "Quadra parceira",
    description: "Demonstre interesse em polo, eventos, recorrência, mídia e ativação local.",
    href: "/cadastro#quadra",
    cta: "Tenho uma quadra",
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Acompanhe avisos, bastidores, mídia, agenda futura e próximos passos do UR.",
    href: "/cadastro#comunidade",
    cta: "Quero acompanhar",
  },
  {
    icon: Megaphone,
    title: "Imprensa e parcerias",
    description: "Use o caminho comercial para iniciar conversa institucional, mídia kit ou parceria estratégica.",
    href: "/cadastro#patrocinador",
    cta: "Abrir contato comercial",
  },
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

export default function ContatoPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <section className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,#090a0f_0%,#030405_100%)] px-5 py-12 md:py-16 lg:px-8 lg:py-20">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:items-center">
          <div className="min-w-0 text-center lg:text-left">
            <Badge>Contato UR • caminhos oficiais</Badge>
            <h1 className="mx-auto mt-5 max-w-4xl text-balance text-[clamp(2.8rem,10vw,4.65rem)] font-black uppercase leading-[0.94] tracking-normal text-white lg:mx-0">
              Fale com o UR pelo caminho certo.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8 lg:mx-0">
              Atletas, equipes, patrocinadores, quadras, comunidade, imprensa e parceiros entram por fluxos diferentes
              para que a equipe UR consiga organizar a triagem.
            </p>
            <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
              <Button href="#caminhos">
                Escolher caminho
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
              <Button href="/cadastro" variant="secondary">
                Central de cadastro
              </Button>
            </div>
          </div>

          <Card className="p-5 md:p-6" premium>
            <Mail aria-hidden className="h-8 w-8 text-[#ffd84d]" />
            <h2 className="mt-6 text-[clamp(2rem,8vw,2.8rem)] font-black uppercase leading-[0.98] text-white">
              Triagem antes do próximo passo.
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/72">
              O contato pelo site registra interesse e direciona a equipe UR. Nenhum caminho garante vaga, parceria,
              patrocínio, agenda ou aprovação imediata.
            </p>
          </Card>
        </div>
      </section>

      <PageSection id="caminhos">
        <SectionHeader
          description="Escolha o perfil mais próximo da sua intenção. Cada botão leva para a central de cadastro com o formulário correspondente."
          eyebrow="Caminhos de contato"
          title="Um ecossistema, várias portas de entrada."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {contactPaths.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card className="flex min-h-[270px] flex-col" key={item.title} premium={index === 0 || index === 2}>
                <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
                  <Icon aria-hidden className="h-6 w-6 text-[#ffd84d]" />
                </span>
                <h2 className="mt-5 text-2xl font-black uppercase leading-none text-white">{item.title}</h2>
                <p className="mt-4 text-sm leading-6 text-white/68">{item.description}</p>
                <Button className="mt-auto w-full" href={item.href} variant={index === 0 ? "primary" : "secondary"}>
                  {item.cta}
                </Button>
              </Card>
            );
          })}
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]">
        <SectionHeader
          description="O Ultimate Rivals ainda está estruturando operação, agenda, polos, eventos, ranking, mídia e parcerias. O contato correto ajuda a acelerar a triagem sem criar promessa indevida."
          eyebrow="Aviso operacional"
          title="Contato não substitui validação oficial."
        />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
          <Card premium>
            <Building2 aria-hidden className="h-8 w-8 text-[#ffd84d]" />
            <h2 className="mt-5 text-[clamp(2rem,8vw,2.75rem)] font-black uppercase leading-[0.98] text-white">
              Organização primeiro.
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/72">
              A equipe UR usa os contatos para entender demanda, polo, perfil, prioridade e próximos passos possíveis.
            </p>
          </Card>
          <Card>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Cadastro não garante participação imediata.",
                "Parceria depende de proposta e aprovação.",
                "Eventos e polos dependem de confirmação oficial.",
                "Ranking público depende de dados validados.",
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

      <PageSection>
        <Card className="grid gap-6 p-5 md:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.45fr)] lg:items-center" premium>
          <div>
            <Badge>Central de entrada</Badge>
            <h2 className="mt-5 max-w-3xl text-[clamp(2.2rem,8vw,3.4rem)] font-black uppercase leading-[0.98] text-white">
              O melhor contato começa pelo cadastro certo.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/74">
              A central de cadastro organiza os perfis e envia o interesse para triagem operacional, mantendo aviso de
              validação e sem criar backend, login, pagamento ou promessa automática.
            </p>
          </div>
          <div className="grid gap-3">
            <Button href="/cadastro">Ir para cadastro</Button>
            <Button href="/privacidade" variant="secondary">
              Ver privacidade
            </Button>
          </div>
        </Card>
      </PageSection>
    </main>
  );
}
