import Link from "next/link";
import { Play, Radio, Film, Camera, ArrowRight } from "lucide-react";

const featured = {
  type: "Transmissão ao Vivo",
  title: "UR Sprint — Belo Horizonte",
  desc: "Cobertura completa das partidas com análise em tempo real, estatísticas e comentários.",
  tag: "Ao Vivo",
};

const items = [
  { icon: Play, title: "Melhores Jogadas", desc: "Top 10 da semana selecionados pela equipe de mídia.", tag: "Novo" },
  { icon: Film, title: "Documentários", desc: "Bastidores, histórias e trajetórias da temporada.", tag: "Exclusivo" },
  { icon: Radio, title: "Quadros Esportivos", desc: "Análise tática, ranking e debates sobre a temporada.", tag: "Educativo" },
  { icon: Camera, title: "Bastidores", desc: "Registro de partidas, aquecimento e atmosfera dos polos.", tag: "Bastidores" },
];

export default function MediaSection() {
  return (
    <section className="py-24 bg-ur-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Mídia</p>
          <h2 className="font-display font-black uppercase text-[clamp(2rem,5vw,3.5rem)] text-ur-white leading-none mb-4">
            A TEMPORADA TAMBÉM<br />
            <span className="text-gold-gradient">PRECISA SER ASSISTIDA.</span>
          </h2>
          <p className="text-ur-sand text-base font-body max-w-xl mx-auto">
            A mídia oficial transforma jogos, rankings, bastidores, histórias e rivalidades em conteúdo.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {/* Featured */}
          <div className="lg:col-span-1 bg-card-gold rounded-xl p-8 border border-ur-gold/20 shadow-gold-glow flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="chip-gold text-[10px]">{featured.tag}</span>
              </div>
              <p className="section-label text-[9px] mb-2 opacity-60">{featured.type}</p>
              <h3 className="font-display font-black uppercase text-xl text-ur-white mb-3">{featured.title}</h3>
              <p className="text-ur-sand text-sm leading-relaxed font-body">{featured.desc}</p>
            </div>
            <Link
              href="/midia"
              className="mt-6 inline-flex items-center gap-2 text-ur-gold font-display font-bold text-xs uppercase tracking-wider hover:gap-3 transition-all duration-200 cursor-pointer"
            >
              Assistir <ArrowRight size={12} />
            </Link>
          </div>

          {/* Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-card rounded-lg p-5 border border-white/5 hover:border-ur-gold/20 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-3">
                    <Icon size={16} className="text-ur-gold opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="chip-sand text-[9px] py-0 px-1.5">{item.tag}</span>
                  </div>
                  <h3 className="font-display font-bold text-sm uppercase text-ur-white mb-2 group-hover:text-ur-gold transition-colors duration-200">{item.title}</h3>
                  <p className="text-ur-muted text-xs font-body leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-center text-ur-muted text-sm font-body italic mb-8">
          O atleta não quer apenas jogar. Ele quer viver, aparecer, evoluir e ser lembrado.
        </p>

        <div className="text-center">
          <Link href="/midia" className="btn-secondary text-sm">
            Ver toda a mídia
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
