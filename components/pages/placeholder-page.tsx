import { ArrowLeft, Construction } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  status: string;
  cta: string;
};

export function PlaceholderPage({ eyebrow, title, description, status, cta }: PlaceholderPageProps) {
  return (
    <main className="min-h-screen bg-[#030405]">
      <section className="border-t border-white/10 bg-[linear-gradient(180deg,#090a0f,#030405)] px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Badge>{eyebrow}</Badge>
          <h1 className="mt-6 max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-normal text-white md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/">
              <ArrowLeft aria-hidden className="h-4 w-4" />
              {cta}
            </Button>
            <Button href="/#faq" variant="secondary">
              Ver FAQ
            </Button>
          </div>
          <Card className="mt-10 max-w-xl" premium>
            <Construction aria-hidden className="h-8 w-8 text-[#ffd84d]" />
            <h2 className="mt-5 text-2xl font-black uppercase text-white">Página preparada</h2>
            <p className="mt-3 text-sm leading-6 text-white/60">
              {status}. Esta rota existe para sustentar a arquitetura pública do MVP, sem backend, login,
              pagamento, ranking real ou integração externa nesta fase.
            </p>
          </Card>
        </div>
      </section>
    </main>
  );
}
