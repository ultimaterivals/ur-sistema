import Link from "next/link";
import { ArrowRight, User, TrendingUp, Camera, Star, Eye, Zap, Shield, Users } from "lucide-react";

const roles = [
  {
    icon: Zap,
    label: "Atacante",
    desc: "Potência, timing e leitura de jogo. O atacante define pontos e cria situações decisivas para a equipe.",
    trait: "Explosividade e precisão",
  },
  {
    icon: Shield,
    label: "Bloqueador",
    desc: "Leitura defensiva e posicionamento. O bloqueador transforma ataques adversários em oportunidades para o time.",
    trait: "Leitura e posicionamento",
  },
  {
    icon: Users,
    label: "Levantador",
    desc: "Visão geral, distribuição e inteligência. O levantador organiza o time e cria as condições para o ponto.",
    trait: "Inteligência e distribuição",
  },
  {
    icon: Star,
    label: "Libero / Defensor",
    desc: "Resiliência, cobertura e recuperação. O defensor sustenta o time nos momentos mais difíceis.",
    trait: "Resiliência e cobertura",
  },
];

const trajectory = [
  { stage: "UR Play", desc: "Você começa aqui. Jogos semanais no polo, primeiro histórico, observação de nível." },
  { stage: "Nivelamento", desc: "Seu desempenho inicial define se você entra como N1, N2 ou N3. Qualquer nível é um começo legítimo." },
  { stage: "Ranking Individual", desc: "Cada partida conta. Seu ranking cresce com consistência, vitórias e fair play." },
  { stage: "UR Sprint", desc: "Os melhores do Play sobem para o Sprint — mais estrutura, mais visibilidade." },
  { stage: "UR Series", desc: "Do Sprint para o campeonato inter-polos. A competição que define os representantes da temporada." },
  { stage: "UR Legends", desc: "O evento final. Apenas os classificados chegam aqui — e a história é contada para toda a comunidade." },
];

const mediaItems = [
  { icon: Camera, label: "Cobertura em Jogo", desc: "Atletas em destaque podem ser filmados e fotografados durante as partidas no polo." },
  { icon: Eye, label: "Perfil Público", desc: "Seu perfil na plataforma é público. Histórico, ranking e trajetória são visíveis para a comunidade." },
  { icon: TrendingUp, label: "Destaque no Ranking", desc: "As maiores evoluções e melhores desempenhos são destacados nos canais do Ultimate Rivals." },
  { icon: Star, label: "Entrevistas e Conteúdo", desc: "Atletas com histórias relevantes podem ser convidados para aparecer no conteúdo editorial do UR." },
];

export default function AtletasPage() {
  return (
    <div className="bg-ur-black text-ur-white min-h-dvh">
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">



        <div className="absolute bottom-0 left-1/3 w-px h-1/2 bg-gradient-to-b from-transparent via-ur-gold/15 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-ur-gold animate-pulse" />
              <span className="section-label tracking-[0.3em]">Ultimate Rivals · Para Atletas</span>
            </div>

            <h1 className="font-display font-black uppercase leading-none mb-6">
              <span className="block text-[clamp(1.8rem,4vw,3rem)] text-ur-sand mb-2">Você não precisa</span>
              <span className="block text-[clamp(2.5rem,6vw,5.5rem)] text-ur-white">ESTAR PRONTO.</span>
              <span className="block text-[clamp(2.5rem,6vw,5.5rem)] text-gold-gradient">PRECISA COMEÇAR.</span>
            </h1>

            <p className="text-ur-sand text-base sm:text-lg leading-relaxed mb-4 max-w-2xl font-body">
              O Ultimate Rivals foi construído para atletas de todos os níveis. Não importa se você está chegando agora ou se já tem anos de praia. O que importa é que você entre, jogue e construa sua história.
            </p>
            <p className="text-ur-muted text-sm leading-relaxed mb-10 max-w-xl font-body">
              Sem equipe? Sem dupla? Tudo bem. Comece solo e encontre seu caminho.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/cadastro" className="btn-primary">
                Começar como atleta
                <ArrowRight size={16} />
              </Link>
              <Link href="/ur-play" className="btn-secondary">
                <User size={14} />
                Entender o UR Play
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ATLETA SEM EQUIPE */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label block mb-3">Solo mas não invisível</span>
              <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">ATLETA<br />SEM EQUIPE</h2>
              <div className="divider-gold mb-6" />
              <p className="text-ur-sand text-base leading-relaxed mb-6 font-body">
                Você não precisa de dupla ou equipe para entrar no UR Play. Como atleta individual, você participa dos jogos semanais, acumula ranking próprio e constrói visibilidade dentro da comunidade.
              </p>
              <p className="text-ur-sand text-base leading-relaxed mb-8 font-body">
                Seu perfil é público. Outros atletas e equipes podem te ver, te encontrar e, eventualmente, convidar você para fazer parte de algo maior.
              </p>
              <div className="space-y-3">
                {[
                  "Ranking individual atualizado a cada partida",
                  "Histórico completo e permanente na plataforma",
                  "Visibilidade para equipes e duplas que procuram atletas",
                  "Participação em todos os níveis: N1, N2 e N3",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-ur-gold shrink-0" />
                    <span className="text-ur-sand text-sm font-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-sm p-8 relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ur-gold/20 to-transparent" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-ur-graphite-2 border border-ur-gold/20 rounded-full flex items-center justify-center">
                  <User size={28} className="text-ur-muted" />
                </div>
                <div>
                  <span className="font-display font-black text-xl uppercase text-ur-white block">Atleta Solo</span>
                  <span className="text-ur-muted text-xs">Polo Betim · N2 · Individual</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Partidas", val: "31" },
                  { label: "Ranking", val: "#12" },
                  { label: "Pontos", val: "980" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-ur-graphite-2/60 rounded-sm p-3 text-center">
                    <div className="font-display font-black text-xl text-ur-gold">{stat.val}</div>
                    <div className="text-ur-muted text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-ur-gold/5 border border-ur-gold/15 rounded-sm p-4">
                <p className="text-ur-sand text-xs leading-relaxed font-body">
                  <span className="text-ur-gold font-semibold">Visível para a comunidade:</span> Atletas solo podem ser encontrados por equipes que buscam completar seus quartetos.
                </p>
              </div>
              <p className="text-ur-muted text-xs mt-3 font-body italic text-center">Dados ilustrativos</p>
            </div>
          </div>
        </div>
      </section>

      {/* FUNÇÕES EM QUADRA */}
      <section className="py-24 bg-ur-graphite/30 relative overflow-hidden">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <span className="section-label block mb-3">Onde Você Joga Melhor</span>
            <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">FUNÇÕES EM QUADRA</h2>
            <div className="divider-gold" />
            <p className="text-ur-sand mt-4 max-w-xl font-body text-sm leading-relaxed">
              No vôlei de praia e no futevôlei, cada jogador tem um papel. Seu perfil no UR reflete sua função e ajuda outros atletas e equipes a te encontrarem.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <div key={role.label} className="bg-card rounded-sm p-6 hover:shadow-card-hover transition-all duration-300 group relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ur-gold/20 to-transparent group-hover:via-ur-gold/50 transition-all" />
                  <div className="w-12 h-12 bg-ur-gold/10 rounded-sm flex items-center justify-center mb-5 group-hover:bg-ur-gold/20 transition-all">
                    <Icon size={22} className="text-ur-gold" />
                  </div>
                  <h3 className="font-display font-black text-2xl uppercase text-ur-white mb-3">{role.label}</h3>
                  <p className="text-ur-sand text-sm leading-relaxed font-body mb-4">{role.desc}</p>
                  <div className="pt-3 border-t border-white/5">
                    <span className="text-ur-gold/70 text-xs font-display font-semibold uppercase tracking-wide">{role.trait}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRAJETÓRIA */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <span className="section-label block mb-3">Onde Começa e Onde Pode Chegar</span>
            <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">SUA TRAJETÓRIA</h2>
            <div className="divider-gold" />
          </div>

          <div className="relative">
            {/* Vertical line on desktop */}
            <div className="hidden lg:block absolute left-[calc(50%-0.5px)] top-0 bottom-0 w-px bg-gradient-to-b from-ur-gold/30 via-ur-gold/10 to-transparent" />

            <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-12">
              {trajectory.map((step, index) => (
                <div
                  key={step.stage}
                  className={`lg:mb-8 ${index % 2 === 0 ? "lg:text-right" : "lg:mt-16"}`}
                >
                  <div
                    className={`bg-card rounded-sm p-6 hover:shadow-card-hover transition-all group relative ${
                      index === 0 ? "border-ur-gold/30 bg-card-gold" : ""
                    }`}
                  >
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ur-gold/20 to-transparent group-hover:via-ur-gold/40 transition-all" />
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                      <span className="w-6 h-6 rounded-full bg-ur-gold/10 border border-ur-gold/30 flex items-center justify-center text-xs font-display font-bold text-ur-gold shrink-0">
                        {String(index + 1)}
                      </span>
                      <span className={`font-display font-black text-xl uppercase ${index === 0 ? "text-ur-gold" : "text-ur-white"}`}>
                        {step.stage}
                      </span>
                    </div>
                    <p className={`text-ur-sand text-sm leading-relaxed font-body ${index % 2 === 0 ? "lg:text-right" : ""}`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MÍDIA E VISIBILIDADE */}
      <section className="py-24 bg-ur-graphite/30 relative overflow-hidden">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <span className="section-label block mb-3">Além da Quadra</span>
            <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">MÍDIA E<br />VISIBILIDADE</h2>
            <div className="divider-gold" />
            <p className="text-ur-sand mt-4 max-w-xl font-body text-sm leading-relaxed">
              No Ultimate Rivals, sua história não termina quando o jogo acaba. O ecossistema garante que bons atletas sejam vistos, reconhecidos e celebrados.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-card rounded-sm p-6 hover:shadow-card-hover transition-all group">
                  <div className="w-10 h-10 bg-ur-gold/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-ur-gold/20 transition-all">
                    <Icon size={18} className="text-ur-gold" />
                  </div>
                  <h3 className="font-display font-bold text-base uppercase text-ur-white mb-2">{item.label}</h3>
                  <p className="text-ur-sand text-sm leading-relaxed font-body">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">


        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="section-label block mb-4">Para todo atleta</span>
          <h2 className="section-heading text-[clamp(2.5rem,6vw,4.5rem)] mb-6">
            O PRIMEIRO PASSO<br />
            <span className="text-gold-gradient">É O MAIS IMPORTANTE.</span>
          </h2>
          <p className="text-ur-sand text-base leading-relaxed mb-10 max-w-xl mx-auto font-body">
            Crie seu perfil, escolha seu polo e comece a jogar. Todo o resto — ranking, evolução, reconhecimento — vem com o tempo e com as partidas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cadastro" className="btn-primary">
              Criar meu perfil de atleta
              <ArrowRight size={16} />
            </Link>
            <Link href="/equipes-duplas" className="btn-secondary">
              Tenho uma dupla/equipe
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
