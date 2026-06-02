import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";

const items = [
  { cat: "Produtos Oficiais", title: "Kit Temporada", desc: "Camiseta, bag e acessórios da temporada.", status: "disponivel" },
  { cat: "Serviços Esportivos", title: "Avaliação Técnica", desc: "Análise de jogo e plano de evolução.", status: "disponivel" },
  { cat: "Parceiros", title: "Equipamentos", desc: "Produtos e marcas parceiras do ecossistema.", status: "disponivel" },
  { cat: "Experiências", title: "Treino Hunter", desc: "Sessão com metodologia Hunter aplicada.", status: "em-breve" },
  { cat: "Para Equipes", title: "Identidade Visual", desc: "Criação de uniforme e identidade.", status: "em-breve" },
  { cat: "Para Polos", title: "Kit Polo", desc: "Material de comunicação para quadras parceiras.", status: "em-breve" },
];

export default function MarketShowcase() {
  return (
    <section className="py-24 bg-ur-graphite">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div>
            <p className="section-label mb-4">UR Market</p>
            <h2 className="font-display font-black uppercase text-[clamp(2rem,4.5vw,3rem)] text-ur-white leading-none mb-6">
              A VITRINE DA<br />
              <span className="text-gold-gradient">TEMPORADA.</span>
            </h2>
            <div className="divider-gold mb-6" />
            <p className="text-ur-sand text-sm leading-relaxed font-body mb-6">
              Produtos, serviços, experiências e possibilidades para atletas, equipes e polos.
            </p>

            <div className="bg-ur-graphite-2 border border-white/5 rounded-sm p-4 text-xs text-ur-muted font-body leading-relaxed mb-8">
              Benefícios dependem de regras oficiais, parceiros ativos e disponibilidade. O UR Market é uma vitrine de possibilidades, não uma promessa automática.
            </div>

            <Link href="/ur-market" className="btn-primary text-sm">
              Conhecer UR Market
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {items.map((item) => (
              <div
                key={item.title}
                className={`bg-card rounded-sm p-5 border transition-all duration-300 group ${
                  item.status === "em-breve"
                    ? "border-white/3 opacity-70"
                    : "border-white/5 hover:border-ur-gold/25"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <p className="section-label text-[10px] opacity-60">{item.cat}</p>
                  {item.status === "em-breve" ? (
                    <span className="chip chip-sand text-[10px] py-0 px-1.5 opacity-60">Em breve</span>
                  ) : (
                    <Tag size={12} className="text-ur-gold opacity-50" />
                  )}
                </div>
                <h3 className="font-display font-bold text-sm uppercase text-ur-white mb-2 group-hover:text-ur-gold transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-ur-muted text-xs font-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
