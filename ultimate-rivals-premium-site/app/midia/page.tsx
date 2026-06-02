import Link from "next/link";
import { ArrowRight, Play, Video, Film, Mic, Camera, Eye, Radio, Globe } from "lucide-react";

const contentCategories = [
  {
    icon: Radio,
    label: "Transmissões",
    desc: "Partidas do UR Series e UR Legends transmitidas ao vivo. Cobertura completa dos jogos mais importantes da temporada.",
    tag: "Ao vivo",
    active: true,
  },
  {
    icon: Play,
    label: "Melhores Jogadas",
    desc: "Os momentos mais marcantes de cada rodada. Compilações semanais das melhores ações em quadra nos três polos.",
    tag: "Semanal",
    active: true,
  },
  {
    icon: Film,
    label: "Documentários",
    desc: "As histórias por trás dos atletas e equipes da Temporada 1. Quem são, de onde vêm e o que os move.",
    tag: "Em produção",
    active: false,
  },
  {
    icon: Video,
    label: "Quadros Esportivos",
    desc: "Análises táticas, leituras de jogo e conteúdo técnico para quem quer entender mais do esporte de praia.",
    tag: "Em breve",
    active: false,
  },
  {
    icon: Camera,
    label: "Bastidores",
    desc: "O que acontece antes, durante e depois dos jogos. A vida nos polos, a rotina dos atletas e a construção da temporada.",
    tag: "Em breve",
    active: false,
  },
  {
    icon: Mic,
    label: "Entrevistas",
    desc: "Conversas com atletas, equipes e pessoas da comunidade. Histórias reais de evolução dentro do ecossistema UR.",
    tag: "Em breve",
    active: false,
  },
];

const socialFormats = [
  { icon: Camera, label: "Instagram / Reels", desc: "Cortes de jogadas, bastidores e histórias de atletas em formato vertical para as redes." },
  { icon: Globe, label: "YouTube", desc: "Conteúdo longo: transmissões completas, documentários e quadros esportivos." },
  { icon: Eye, label: "Cobertura nos Polos", desc: "Fotógrafos e videografistas presentes nos jogos do UR Series e eventos especiais." },
];

export default function MidiaPage() {
  return (
    <div className="bg-ur-black text-ur-white min-h-dvh">
      {/* HERO */}
      <section className="relative min-h-[60vh] sm:min-h-[75vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 court-lines opacity-25" />
        <div className="absolute inset-0 bg-arena-gradient" />
        <div className="absolute top-0 right-0 w-[700px] h-[500px] glow-orb pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-24 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-ur-gold animate-pulse" />
              <span className="section-label tracking-[0.3em]">Ultimate Rivals · Mídia</span>
            </div>

            <h1 className="font-display font-black uppercase leading-none mb-6">
              <span className="block text-[clamp(2rem,5vw,4.5rem)] text-ur-white">A TEMPORADA</span>
              <span className="block text-[clamp(2rem,5vw,4.5rem)] text-ur-sand">TAMBÉM PRECISA</span>
              <span className="block text-[clamp(2.5rem,6vw,5.5rem)] text-gold-gradient">SER ASSISTIDA.</span>
            </h1>

            <p className="text-ur-sand text-base sm:text-lg leading-relaxed mb-4 max-w-2xl font-body">
              O que acontece dentro dos polos não fica só nos polos. O Ultimate Rivals documenta, transmite e celebra cada momento da temporada — do primeiro jogo do UR Play ao evento final do Legends.
            </p>
            <p className="text-ur-muted text-sm leading-relaxed mb-10 max-w-xl font-body">
              Transmissões, documentários, bastidores, entrevistas e muito mais ao longo da Temporada 1.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/cadastro" className="btn-primary">
                Fazer parte da história
                <ArrowRight size={16} />
              </Link>
              <Link href="/blog" className="btn-secondary">
                <Eye size={14} />
                Acessar o blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DESTAQUE */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="section-label block mb-3">Ao Vivo / Em Destaque</span>
            <h2 className="section-heading text-[clamp(2rem,5vw,3rem)] mb-4">ÚLTIMAS TRANSMISSÕES</h2>
            <div className="divider-gold" />
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {/* Featured */}
            <div className="lg:col-span-3 group cursor-pointer">
              <div className="relative aspect-video bg-ur-graphite-2 rounded-sm overflow-hidden border border-white/8 hover:border-ur-gold/30 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-ur-gold/10 via-transparent to-ur-graphite/80 court-lines opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-ur-gold/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-gold-glow">
                    <Play size={24} className="text-ur-black ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white text-xs font-display font-bold uppercase tracking-wide px-2 py-1 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    Ao Vivo
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ur-black/90 to-transparent">
                  <span className="chip-gold text-xs mb-2 inline-flex">UR Series · Semifinal</span>
                  <h3 className="font-display font-black text-xl uppercase text-ur-white">BH vs Contagem — Semifinal T1</h3>
                  <p className="text-ur-muted text-sm mt-1">Polo BH Central · Temporada 1</p>
                </div>
              </div>
            </div>

            {/* Side list */}
            <div className="lg:col-span-2 space-y-4">
              {[
                { label: "Melhores Jogadas", tag: "Rodada 8", title: "Top 5 Jogadas da Semana — Polo Betim", views: "1.2k" },
                { label: "Documentário", tag: "Ep. 2", title: "Hunters de Betim — A história da equipe", views: "840" },
                { label: "Transmissão", tag: "UR Sprint", title: "Quartas de Final — Polo Contagem", views: "2.1k" },
              ].map((item) => (
                <div key={item.title} className="bg-card rounded-sm p-4 hover:shadow-card-hover transition-all group cursor-pointer flex gap-4">
                  <div className="w-20 h-14 bg-ur-graphite-2 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-ur-gold/10 transition-all">
                    <Play size={16} className="text-ur-muted group-hover:text-ur-gold transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-ur-gold text-xs font-display font-semibold">{item.label}</span>
                      <span className="text-ur-muted text-xs">·</span>
                      <span className="text-ur-muted text-xs">{item.tag}</span>
                    </div>
                    <p className="text-ur-white text-sm font-body font-medium leading-snug line-clamp-2">{item.title}</p>
                    <p className="text-ur-muted text-xs mt-1">{item.views} visualizações</p>
                  </div>
                </div>
              ))}
              <p className="text-ur-muted text-xs font-body italic text-center pt-2">Dados ilustrativos</p>
            </div>
          </div>
        </div>
      </section>

      {/* GRADE DE CONTEÚDO */}
      <section className="py-24 bg-ur-graphite/30 relative">
        <div className="absolute inset-0 court-lines opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <span className="section-label block mb-3">O Que Você Encontra Aqui</span>
            <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">CONTEÚDO<br />DA TEMPORADA</h2>
            <div className="divider-gold" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.label}
                  className={`rounded-sm p-6 transition-all duration-300 group relative overflow-hidden ${
                    cat.active
                      ? "bg-card hover:shadow-card-hover cursor-pointer"
                      : "bg-ur-graphite/20 border border-white/5"
                  }`}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ur-gold/15 to-transparent group-hover:via-ur-gold/40 transition-all" />
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 rounded-sm flex items-center justify-center ${cat.active ? "bg-ur-gold/10 group-hover:bg-ur-gold/20" : "bg-white/5"} transition-all`}>
                      <Icon size={18} className={cat.active ? "text-ur-gold" : "text-ur-muted"} />
                    </div>
                    <span className={`text-xs font-display font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full border ${
                      cat.active ? "chip-gold" : "bg-white/5 border-white/10 text-ur-muted"
                    }`}>
                      {cat.tag}
                    </span>
                  </div>
                  <h3 className={`font-display font-bold text-xl uppercase mb-2 ${cat.active ? "text-ur-white" : "text-ur-muted"}`}>
                    {cat.label}
                  </h3>
                  <p className="text-ur-sand text-sm leading-relaxed font-body">{cat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTEÚDO PARA REDES */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <span className="section-label block mb-3">Onde Nos Encontrar</span>
            <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">CONTEÚDO<br />PARA REDES</h2>
            <div className="divider-gold" />
            <p className="text-ur-sand mt-4 max-w-xl font-body text-sm leading-relaxed">
              O Ultimate Rivals está presente nas principais redes. Siga para acompanhar jogadas, histórias e a temporada em tempo real.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {socialFormats.map((sf) => {
              const Icon = sf.icon;
              return (
                <div key={sf.label} className="bg-card-gold rounded-sm p-8 hover:shadow-card-hover transition-all group relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ur-gold/30 to-transparent" />
                  <div className="w-12 h-12 bg-ur-gold/15 rounded-sm flex items-center justify-center mb-5 group-hover:bg-ur-gold/25 transition-all">
                    <Icon size={22} className="text-ur-gold" />
                  </div>
                  <h3 className="font-display font-black text-xl uppercase text-ur-white mb-3">{sf.label}</h3>
                  <p className="text-ur-sand text-sm leading-relaxed font-body">{sf.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 bg-card rounded-sm p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div>
                <h3 className="font-display font-bold text-xl uppercase text-ur-white mb-1">Seu Momento Pode Aparecer Aqui</h3>
                <p className="text-ur-sand text-sm font-body leading-relaxed">
                  Atletas e equipes cadastrados podem ser destacados nos conteúdos da mídia oficial do UR. Jogue bem, construa seu histórico e deixe a história te encontrar.
                </p>
              </div>
              <Link href="/cadastro" className="btn-primary shrink-0">
                Entrar
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
