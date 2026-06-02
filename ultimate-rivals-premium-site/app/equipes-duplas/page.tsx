import Link from "next/link";
import { ArrowRight, Users, Shield, Star, CheckCircle, Trophy, Camera, TrendingUp, User } from "lucide-react";

const duplaFeatures = [
  { icon: TrendingUp, label: "Ranking de Dupla", desc: "Cada partida das duas conta. Vocês evoluem ou caem juntos no ranking — a temporada é compartilhada." },
  { icon: Star, label: "Identidade Própria", desc: "A dupla tem nome, histórico e perfil. A comunidade reconhece a dupla como uma unidade, não só os indivíduos." },
  { icon: Trophy, label: "Caminho Competitivo", desc: "Duplas sobem pela estrutura da temporada: UR Play → UR Sprint → UR Series. O caminho é de dois." },
];

const equipeFeatures = [
  { icon: User, label: "Capitão e Liderança", desc: "Cada equipe tem um capitão responsável pelo registro, comunicação e representação na plataforma." },
  { icon: Camera, label: "Identidade Visual e Mídia", desc: "Nome, uniforme, história. A equipe pode ser coberta pela mídia do UR, aparece no ranking e constrói presença real." },
  { icon: Shield, label: "Caminho Competitivo Completo", desc: "Equipes (quartetos) têm caminho próprio pela temporada, com classificação para o UR Series e, eventualmente, o Legends." },
];

const steps = [
  { number: "01", title: "Cadastro Individual", desc: "Todos os atletas da dupla ou equipe devem ter perfil individual no UR Play antes de se associar." },
  { number: "02", title: "Criar a Dupla ou Equipe", desc: "Um dos atletas (ou o capitão) cria o grupo na plataforma, define o nome e convida os demais." },
  { number: "03", title: "Confirmação dos Membros", desc: "Cada atleta confirma sua participação. A dupla ou equipe só fica ativa após todas as confirmações." },
  { number: "04", title: "Escolher Polo e Nível", desc: "A dupla ou equipe escolhe seu polo de referência. O nível é determinado por observação nas primeiras partidas." },
];

const identityItems = [
  { label: "Nome da Dupla / Equipe", desc: "Um nome único que identifica o grupo na plataforma e no ranking." },
  { label: "Histórico de Partidas", desc: "Todos os resultados ficam registrados — vitórias, derrotas, evolução." },
  { label: "Polo de Representação", desc: "A dupla ou equipe representa um polo: BH, Betim ou Contagem." },
  { label: "Ranking Coletivo", desc: "Pontuação própria que reflete o desempenho conjunto ao longo da temporada." },
  { label: "Perfil na Plataforma", desc: "Página com dados, histórico e presença na comunidade UR." },
  { label: "Cobertura de Mídia", desc: "Equipes e duplas podem ser destacadas na mídia oficial do Ultimate Rivals." },
];

export default function EquipesDuplasPage() {
  return (
    <div className="bg-ur-black text-ur-white min-h-dvh">
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">



        <div className="absolute bottom-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-ur-gold/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-ur-gold animate-pulse" />
              <span className="section-label tracking-[0.3em]">Ultimate Rivals · Duplas e Equipes</span>
            </div>

            <h1 className="font-display font-black uppercase leading-none mb-6">
              <span className="block text-[clamp(2.5rem,7vw,6.5rem)] text-ur-white">CONSTRUA</span>
              <span className="block text-[clamp(2.5rem,7vw,6.5rem)] text-gold-gradient">SUA CAMPANHA.</span>
            </h1>

            <p className="text-ur-sand text-base sm:text-lg leading-relaxed mb-4 max-w-2xl font-body">
              No Ultimate Rivals, você compete solo — mas sua campanha é ainda mais poderosa quando tem identidade coletiva. Duplas e equipes têm ranking próprio, identidade visual e um caminho competitivo completo.
            </p>
            <p className="text-ur-muted text-sm leading-relaxed mb-10 max-w-xl font-body">
              Uma dupla não é só dois atletas juntos. É uma história que cresce a cada partida.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/cadastro" className="btn-primary">
                Cadastrar minha dupla/equipe
                <ArrowRight size={16} />
              </Link>
              <Link href="/ur-play" className="btn-secondary">
                <Users size={14} />
                Ver o UR Play
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DUPLAS */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="mb-8">
                <span className="section-label block mb-3">Modalidade Dupla</span>
                <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">DUPLAS</h2>
                <div className="divider-gold" />
                <p className="text-ur-sand mt-4 font-body text-sm leading-relaxed">
                  Dois atletas, uma trajetória. A dupla compete como unidade — com nome próprio, ranking compartilhado e história que se constrói ao longo de toda a temporada.
                </p>
              </div>

              <div className="space-y-4">
                {duplaFeatures.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.label} className="bg-card rounded-sm p-6 hover:shadow-card-hover transition-all group">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-ur-gold/10 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-ur-gold/20 transition-all">
                          <Icon size={18} className="text-ur-gold" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-base uppercase text-ur-white mb-1">{f.label}</h3>
                          <p className="text-ur-sand text-sm leading-relaxed font-body">{f.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-card-gold rounded-sm p-8 relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ur-gold/40 to-transparent" />
              <div className="flex items-center gap-4 mb-8">
                <div className="flex -space-x-2">
                  {[0, 1].map((i) => (
                    <div key={i} className="w-12 h-12 bg-ur-graphite-2 border-2 border-ur-gold/30 rounded-full flex items-center justify-center">
                      <User size={16} className="text-ur-muted" />
                    </div>
                  ))}
                </div>
                <div>
                  <span className="font-display font-black text-xl uppercase text-ur-white">Dupla Exemplo</span>
                  <p className="text-ur-muted text-xs">Polo Belo Horizonte · N1</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Partidas", val: "24" },
                  { label: "Vitórias", val: "18" },
                  { label: "Pontos", val: "1.840" },
                  { label: "Posição", val: "#3" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-ur-graphite-2/50 rounded-sm p-4 text-center">
                    <div className="font-display font-black text-2xl text-ur-gold">{stat.val}</div>
                    <div className="text-ur-muted text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-ur-muted text-xs font-body italic text-center">Dados ilustrativos</p>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPES / QUARTETO */}
      <section className="py-24 bg-ur-graphite/30 relative overflow-hidden">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1 bg-card rounded-sm p-8 relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="flex items-center gap-4 mb-8">
                <div className="flex -space-x-3">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 bg-ur-graphite-2 border-2 border-white/10 rounded-full flex items-center justify-center">
                      <User size={12} className="text-ur-muted" />
                    </div>
                  ))}
                </div>
                <div>
                  <span className="font-display font-black text-xl uppercase text-ur-white">Equipe Exemplo</span>
                  <p className="text-ur-muted text-xs">Polo Contagem · N2 · Quarteto</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  { role: "Capitão", name: "Bruno Salles" },
                  { role: "Atleta", name: "Rafael Cunha" },
                  { role: "Atleta", name: "Marcos Lima" },
                  { role: "Atleta", name: "Diego Faria" },
                ].map((member) => (
                  <div key={member.name} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <span className="font-body text-sm text-ur-white">{member.name}</span>
                    <span className={`text-xs font-display font-bold uppercase tracking-wide ${member.role === "Capitão" ? "text-ur-gold" : "text-ur-muted"}`}>
                      {member.role}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-ur-muted text-xs font-body italic text-center">Dados ilustrativos</p>
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <span className="section-label block mb-3">Modalidade Quarteto</span>
                <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">QUARTETOS<br />E EQUIPES</h2>
                <div className="divider-gold" />
                <p className="text-ur-sand mt-4 font-body text-sm leading-relaxed">
                  Equipes de quatro ou mais atletas com identidade coletiva completa. Com capitão, nome, cobertura de mídia e caminho competitivo dentro da temporada.
                </p>
              </div>

              <div className="space-y-4">
                {equipeFeatures.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.label} className="bg-card rounded-sm p-6 hover:shadow-card-hover transition-all group">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-ur-gold/10 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-ur-gold/20 transition-all">
                          <Icon size={18} className="text-ur-gold" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-base uppercase text-ur-white mb-1">{f.label}</h3>
                          <p className="text-ur-sand text-sm leading-relaxed font-body">{f.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO CADASTRAR */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <span className="section-label block mb-3">Passo a Passo</span>
            <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">COMO CADASTRAR<br />SUA DUPLA OU EQUIPE</h2>
            <div className="divider-gold" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="bg-card rounded-sm p-6 hover:shadow-card-hover transition-all group relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ur-gold/20 to-transparent group-hover:via-ur-gold/50 transition-all" />
                <span className="font-display font-black text-[3.5rem] leading-none text-ur-gold/12 group-hover:text-ur-gold/22 transition-all block mb-4">
                  {step.number}
                </span>
                <h3 className="font-display font-bold text-base uppercase text-ur-white mb-2">{step.title}</h3>
                <p className="text-ur-sand text-sm leading-relaxed font-body">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IDENTIDADE DA EQUIPE */}
      <section className="py-24 bg-ur-graphite/30 relative overflow-hidden">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <span className="section-label block mb-3">O que Você Constrói</span>
            <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">IDENTIDADE<br />DA EQUIPE</h2>
            <div className="divider-gold" />
            <p className="text-ur-sand mt-4 max-w-xl font-body text-sm leading-relaxed">
              Sua dupla ou equipe não é só um grupo. É uma marca dentro do ecossistema Ultimate Rivals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {identityItems.map((item) => (
              <div key={item.label} className="bg-card rounded-sm p-6 hover:shadow-card-hover transition-all group">
                <div className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-ur-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-bold text-base uppercase text-ur-white mb-1">{item.label}</h3>
                    <p className="text-ur-sand text-sm leading-relaxed font-body">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">


        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="section-label block mb-4">Pronto para formar seu grupo?</span>
          <h2 className="section-heading text-[clamp(2.5rem,6vw,4.5rem)] mb-6">
            SUA DUPLA OU EQUIPE<br />
            <span className="text-gold-gradient">MERECE UMA HISTÓRIA.</span>
          </h2>
          <p className="text-ur-sand text-base leading-relaxed mb-10 max-w-xl mx-auto font-body">
            Cadastre-se, monte sua dupla ou equipe, escolha seu polo e comece a escrever sua campanha na Temporada 1.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cadastro" className="btn-primary">
              Cadastrar minha dupla/equipe
              <ArrowRight size={16} />
            </Link>
            <Link href="/atletas" className="btn-secondary">
              Sou um atleta individual
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
