"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Tag, Clock, ChevronRight, Mail } from "lucide-react";
import { useState } from "react";

const categories = [
  "Guias para atletas",
  "Mentalidade Hunter",
  "Treinamento",
  "Ranking e competição",
  "Equipes e duplas",
  "Polos e comunidade",
  "Patrocinadores",
];

const featuredPost = {
  category: "Guias para atletas",
  title: "Do Primeiro Jogo ao UR Legends: Entendendo Sua Jornada na Temporada 1",
  excerpt:
    "Você acabou de se cadastrar no UR Play. O que acontece agora? Neste guia completo, explicamos cada etapa da temporada — do nivelamento inicial até as chances de classificação para o evento final.",
  readTime: "8 min",
  date: "Temporada 1",
  slug: "#",
};

const posts = [
  {
    category: "Mentalidade Hunter",
    title: "Hunter Não é Sobre Talento. É Sobre Consistência.",
    excerpt: "A Metodologia Hunter não promete atalhos. Ela exige uma forma de encarar o jogo que transforma qualquer atleta — independente do nível.",
    readTime: "5 min",
    date: "Temporada 1",
    slug: "#",
  },
  {
    category: "Treinamento",
    title: "3 Hábitos Que Separam Atletas de N2 dos de N1",
    excerpt: "O salto de nível não acontece num dia. Mas existem padrões claros de comportamento que atletas de alto rendimento praticam fora da quadra.",
    readTime: "6 min",
    date: "Temporada 1",
    slug: "#",
  },
  {
    category: "Equipes e duplas",
    title: "Como Escolher Seu Parceiro de Dupla: Além do Nível Técnico",
    excerpt: "Compatibilidade técnica é importante, mas não é o único fator. Entenda o que realmente une uma boa dupla no longo prazo.",
    readTime: "4 min",
    date: "Temporada 1",
    slug: "#",
  },
  {
    category: "Ranking e competição",
    title: "Como o Ranking do UR Funciona e Por Que Ele Importa Além dos Pontos",
    excerpt: "O ranking não é só uma tabela de posições. É um histórico público que conta quem você foi durante a temporada.",
    readTime: "5 min",
    date: "Temporada 1",
    slug: "#",
  },
  {
    category: "Polos e comunidade",
    title: "O Que Significa Representar Seu Polo no Ultimate Rivals",
    excerpt: "Quando você escolhe BH, Betim ou Contagem, está escolhendo uma comunidade. Entenda o peso e o orgulho de representar seu polo.",
    readTime: "4 min",
    date: "Temporada 1",
    slug: "#",
  },
  {
    category: "Guias para atletas",
    title: "Atleta Iniciante no UR Play: Tudo Que Você Precisa Saber",
    excerpt: "Primeiro acesso, primeiros jogos, primeiro nivelamento. Um guia direto para quem está chegando agora ao ecossistema.",
    readTime: "7 min",
    date: "Temporada 1",
    slug: "#",
  },
];

const categoryColors: Record<string, string> = {
  "Guias para atletas": "text-ur-gold border-ur-gold/30 bg-ur-gold/10",
  "Mentalidade Hunter": "text-ur-sand border-ur-sand/30 bg-ur-sand/8",
  "Treinamento": "text-ur-white border-white/20 bg-white/5",
  "Ranking e competição": "text-ur-gold border-ur-gold/20 bg-ur-gold/8",
  "Equipes e duplas": "text-ur-sand border-ur-sand/20 bg-ur-sand/5",
  "Polos e comunidade": "text-ur-white border-white/15 bg-white/3",
  "Patrocinadores": "text-ur-muted border-white/10 bg-white/3",
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = activeCategory
    ? posts.filter((p) => p.category === activeCategory)
    : posts;

  return (
    <div className="bg-ur-black text-ur-white min-h-dvh">
      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-center pt-20 bg-ur-black overflow-hidden">




        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-ur-gold animate-pulse" />
              <span className="section-label tracking-[0.3em]">Ultimate Rivals · Blog</span>
            </div>

            <h1 className="font-display font-black uppercase leading-none mb-6">
              <span className="block text-[clamp(2rem,5vw,4.5rem)] text-ur-white">CONTEÚDO PARA</span>
              <span className="block text-[clamp(2rem,5vw,4.5rem)] text-ur-sand">EDUCAR, ATRAIR</span>
              <span className="block text-[clamp(2.5rem,6vw,5rem)] text-gold-gradient">E FORMAR COMUNIDADE.</span>
            </h1>

            <p className="text-ur-sand text-base sm:text-lg leading-relaxed mb-10 max-w-2xl font-body">
              Guias para atletas, mentalidade competitiva, treinamento, ranking e histórias dos polos. O blog do UR é o espaço onde conhecimento e comunidade se encontram.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="py-8 bg-ur-graphite/60 border-b border-white/5 sticky top-16 z-30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`chip transition-all ${
                activeCategory === null
                  ? "chip-gold"
                  : "chip-sand hover:border-ur-gold/30 hover:text-ur-gold"
              }`}
            >
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
                className={`chip transition-all ${
                  activeCategory === cat
                    ? "chip-gold"
                    : "chip-sand hover:border-ur-gold/30 hover:text-ur-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* POST DESTAQUE */}
      {!activeCategory && (
        <section className="py-20 relative bg-ur-black overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-10">
              <span className="section-label block mb-3">Em Destaque</span>
              <div className="divider-gold" />
            </div>

            <Link href={featuredPost.slug} className="block group">
              <div className="bg-card-gold rounded-sm p-8 sm:p-12 hover:shadow-card-hover transition-all duration-300 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ur-gold/40 to-transparent" />
                <div className="absolute bottom-0 right-0 font-display font-black text-[8rem] leading-none text-white/2 select-none pointer-events-none">
                  UR
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className={`chip text-xs ${categoryColors[featuredPost.category] ?? "chip-gold"}`}>
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-ur-muted text-xs">
                    <Clock size={11} />
                    <span>{featuredPost.readTime} de leitura</span>
                  </div>
                  <span className="text-ur-muted text-xs">{featuredPost.date}</span>
                </div>

                <h2 className="font-display font-black text-[clamp(1.5rem,3vw,2.5rem)] uppercase text-ur-white mb-4 group-hover:text-ur-gold-light transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-ur-sand text-base leading-relaxed font-body mb-6 max-w-3xl">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center gap-2 text-ur-gold font-display font-bold text-sm uppercase tracking-wide group-hover:gap-3 transition-all">
                  Ler artigo
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* GRID DE POSTS */}
      <section className="py-12 pb-24 relative bg-ur-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {!activeCategory && (
            <div className="mb-10">
              <span className="section-label block mb-3">Artigos Recentes</span>
              <div className="divider-gold" />
            </div>
          )}

          {activeCategory && (
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-3">
                <Tag size={14} className="text-ur-gold" />
                <span className="section-label">{activeCategory}</span>
              </div>
              <div className="divider-gold" />
            </div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link key={post.title} href={post.slug} className="group block">
                <div className="bg-card rounded-sm p-6 hover:shadow-card-hover transition-all duration-300 h-full flex flex-col relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ur-gold/15 to-transparent group-hover:via-ur-gold/40 transition-all" />
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className={`chip text-xs ${categoryColors[post.category] ?? "chip-sand"}`}>
                      {post.category}
                    </span>
                  </div>

                  <div className="w-full aspect-video bg-ur-graphite-2/60 rounded-sm mb-4 flex items-center justify-center border border-white/5 group-hover:border-ur-gold/15 transition-colors">
                    <BookOpen size={24} className="text-ur-muted group-hover:text-ur-gold/50 transition-colors" />
                  </div>

                  <h3 className="font-display font-bold text-lg uppercase text-ur-white mb-2 group-hover:text-ur-gold-light transition-colors leading-tight flex-1">
                    {post.title}
                  </h3>
                  <p className="text-ur-sand text-sm leading-relaxed font-body mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-auto">
                    <div className="flex items-center gap-1.5 text-ur-muted text-xs">
                      <Clock size={11} />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1 text-ur-gold text-xs font-display font-semibold group-hover:gap-2 transition-all">
                      Ler
                      <ChevronRight size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-ur-muted font-body">Nenhum artigo nesta categoria ainda.</p>
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 bg-ur-graphite/30 relative overflow-hidden">

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="section-label block mb-4">Fique por dentro</span>
          <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">
            CONTEÚDO DIRETO<br />
            <span className="text-gold-gradient">NA SUA CAIXA.</span>
          </h2>
          <p className="text-ur-sand text-base leading-relaxed mb-10 max-w-lg mx-auto font-body">
            Receba novos artigos, guias de treinamento e atualizações da temporada diretamente no seu e-mail.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-1">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ur-muted" />
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full bg-ur-graphite-2 border border-white/10 rounded-sm px-4 py-3 pl-10 text-ur-white text-sm font-body placeholder:text-ur-muted focus:outline-none focus:border-ur-gold/40 transition-colors"
              />
            </div>
            <button type="submit" className="btn-primary whitespace-nowrap">
              Assinar
              <ArrowRight size={14} />
            </button>
          </form>
          <p className="text-ur-muted text-xs mt-4 font-body">Sem spam. Você pode cancelar quando quiser.</p>
        </div>
      </section>
    </div>
  );
}
