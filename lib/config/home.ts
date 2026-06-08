/**
 * HOME OFICIAL V7 — Copy Mestre estruturada como dados.
 * Toda alteração de texto/estrutura da home acontece aqui.
 * `icon` é uma chave mapeada para lucide-react no componente.
 */

export const hero = {
  eyebrow: "Temporada 1 • Polos em Disputa",
  headline: ["Jogue.", "Pontue.", "Defenda seu polo."],
  body:
    "Entre pelo UR Play, jogue no seu nível, acumule pontos, conquiste UR Coins, dispute premiações, represente sua região e construa seu caminho até o UR Legends. O Ultimate Rivals transforma cada partida em progresso real.",
  highlights: [
    "Ranking Oficial",
    "Premiações e Repasses",
    "UR Coins",
    "Mídia Oficial",
    "Polos em Disputa",
    "UR Legends",
  ],
};

export type IconKey =
  | "trophy" | "coins" | "gift" | "video" | "mapPin" | "crown"
  | "play" | "trendingUp" | "wallet" | "swords" | "shield" | "users"
  | "flame" | "newspaper" | "target" | "sparkles" | "rocket" | "star";

export type DisputeCard = { icon: IconKey; title: string; description: string };

/** SEÇÃO 02 — O que você disputa (6 cards de conquista) */
export const dispute: DisputeCard[] = [
  { icon: "trophy", title: "Ranking Oficial", description: "Sua posição entre todos os atletas participantes." },
  { icon: "coins", title: "UR Coins", description: "Moeda oficial utilizada para resgatar benefícios." },
  { icon: "gift", title: "Premiações", description: "Dinheiro, produtos, serviços e recompensas oficiais." },
  { icon: "video", title: "Mídia Oficial", description: "Destaques, entrevistas, transmissões e conteúdos." },
  { icon: "mapPin", title: "Representação do Polo", description: "Cada resultado fortalece sua região." },
  { icon: "crown", title: "UR Legends", description: "O grupo dos atletas que marcaram a temporada." },
];

/** SEÇÃO 03 — Como funciona (timeline horizontal) */
export const journey = [
  { step: "01", icon: "play", title: "UR Play", description: "Participe dos jogos, registre presença e comece sua trajetória." },
  { step: "02", icon: "trendingUp", title: "Ganhe pontos", description: "Cada participação gera evolução no ranking." },
  { step: "03", icon: "coins", title: "Conquiste UR Coins", description: "Transforme desempenho e participação em benefícios." },
  { step: "04", icon: "crown", title: "Dispute o UR Legends", description: "Os melhores atletas da temporada entram para a história." },
];

/** SEÇÃO 04 — Níveis oficiais */
export const levels = [
  { tag: "N1", title: "Iniciante", description: "Desenvolvimento e aprendizado.", accent: "#7c8896" },
  { tag: "N2", title: "Intermediário", description: "Competição equilibrada e evolução constante.", accent: "#c9a84c" },
  { tag: "N3", title: "Avançado", description: "Alto rendimento e disputa pelo topo.", accent: "#e0a82e" },
];

/** SEÇÃO 05 — Sistema de pontuação */
export const scoring = {
  columns: ["Ação", "Pontos", "UR Coins"],
  rows: [
    { action: "Participação em evento", points: "XX", coins: "XX" },
    { action: "Vitória", points: "XX", coins: "XX" },
    { action: "Pódio", points: "XX", coins: "XX" },
    { action: "Campeão", points: "XX", coins: "XX" },
    { action: "Fair Play", points: "XX", coins: "XX" },
    { action: "MVP", points: "XX", coins: "XX" },
    { action: "Participação na mídia", points: "XX", coins: "XX" },
    { action: "Presença no UR Play", points: "XX", coins: "XX" },
    { action: "Missões especiais", points: "XX", coins: "XX" },
  ],
  note: "Os valores oficiais são divulgados no regulamento da temporada.",
};

/** SEÇÃO 06 — UR Coins e recompensas */
export const coins = {
  examples: ["Inscrições", "Uniformes", "Produtos esportivos", "Serviços parceiros", "Benefícios exclusivos", "Experiências especiais"],
};

/** SEÇÃO 07 — Premiações (cards dourados estilo torneio) */
export const awards = {
  categories: ["Campeões", "Vice-campeões", "Destaques da temporada", "Atletas da mídia", "Líderes de ranking", "Premiações especiais"],
  tiers: [
    { name: "Torneio Oficial", prize: "R$ XXXX", repasse: "R$ XXXX", benefits: ["UR Coins", "Produtos", "Serviços"], featured: false },
    { name: "Etapa Premium", prize: "R$ XXXX", repasse: "R$ XXXX", benefits: ["UR Coins ampliadas", "Mídia oficial", "Experiências"], featured: true },
    { name: "UR Legends", prize: "R$ XXXX", repasse: "R$ XXXX", benefits: ["Hall da fama", "Legado", "Reconhecimento"], featured: false },
  ],
  note: "Todos os valores e formatos são divulgados oficialmente antes de cada evento.",
};

/** SEÇÃO 09 — UR Market */
export const market = {
  categories: [
    { icon: "trophy", title: "Equipamentos" },
    { icon: "shield", title: "Uniformes" },
    { icon: "flame", title: "Alimentação" },
    { icon: "sparkles", title: "Saúde" },
    { icon: "star", title: "Educação" },
    { icon: "users", title: "Serviços esportivos" },
    { icon: "gift", title: "Parceiros oficiais" },
  ] as { icon: IconKey; title: string }[],
};

/** SEÇÃO 10 — Polos em disputa */
export const poles = {
  forAthletes: { title: "Para atletas", description: "Represente sua região.", cta: { label: "Ver polos", href: "/polos" } },
  forCourts: { title: "Para quadras", description: "Receba eventos oficiais e faça parte da expansão.", cta: { label: "Quero minha quadra no UR", href: "/quadras-parceiras" } },
};

/** SEÇÃO 11 — Equipes, duplas e atletas */
export const formats = [
  { icon: "users", title: "Equipe", description: "Estrutura coletiva com identidade, histórico e ranking próprios." },
  { icon: "swords", title: "Dupla", description: "Unidade competitiva principal, com estatísticas e participações." },
  { icon: "shield", title: "Atleta Individual", description: "Você não precisa ter dupla ou equipe para entrar. Mesmo sozinho, sua trajetória começa." },
];

/** SEÇÃO 12 — Mídia oficial */
export const media = {
  types: ["Entrevistas", "Bastidores", "Coberturas", "Rankings", "Destaques", "Transmissões"],
};

/** SEÇÃO 13 — Mentalidade Hunter */
export const hunter = {
  mindset: {
    title: "Mentalidade Hunter",
    description: "Hunter não é olheiro. É mentalidade. Significa evolução contínua — competir melhor hoje do que ontem.",
    cta: { label: "Conhecer a mentalidade", href: "/hunter" },
  },
  program: {
    title: "Hunter Program",
    description: "Programa oficial de desenvolvimento dos atletas.",
    includes: ["Avaliações", "Orientações", "Evolução técnica", "Evolução comportamental"],
    cta: { label: "Conhecer o programa", href: "/hunter" },
  },
};

/** SEÇÃO 14 — Blog oficial */
export const blog = {
  categories: ["Resultados", "Notícias", "Treinos", "Ranking", "Mercado", "Hunter", "Polos"],
};

/** SEÇÃO 16 — Visão de futuro (roadmap) */
export const vision = {
  roadmap: [
    { year: "2025", title: "Validar o sistema", description: "Temporada 1, ranking visual, primeiros polos." },
    { year: "2026", title: "Área do atleta", description: "Ranking real, eventos, UR Coins e carteira oficial." },
    { year: "2027", title: "Ecossistema", description: "UR Market, polos, quadras e mídia integrados." },
    { year: "2030", title: "Expansão", description: "Hunter, oportunidades e patrocinadores em escala." },
    { year: "2035", title: "Infraestrutura nacional", description: "Aplicativo, automações e inteligência de dados." },
  ],
};

/** Section headings reused across the home. */
export const headings = {
  dispute: { eyebrow: "O que está em jogo", title: "O que você disputa nesta temporada?", lead: "No Ultimate Rivals você não disputa apenas troféus. Você disputa posição no ranking, premiações, benefícios, reconhecimento, espaço na mídia oficial e uma vaga entre os melhores atletas da temporada.", cta: { label: "Ver todos os benefícios", href: "/temporada" } },
  journey: { eyebrow: "Sua jornada", title: "Como funciona a temporada", lead: "O sistema foi criado para qualquer atleta conseguir entrar e evoluir.", cta: { label: "Entender o sistema completo", href: "/temporada" } },
  levels: { eyebrow: "Níveis oficiais", title: "Existe um lugar para você", lead: "Nenhum atleta começa atrasado. Todos começam de onde realmente pertencem.", cta: { label: "Como funciona o nivelamento", href: "/temporada" } },
  scoring: { eyebrow: "Sistema de pontuação", title: "Como você soma pontos", lead: "Cada ação dentro da temporada gera evolução.", cta: { label: "Ver tabela completa", href: "/regulamento" } },
  coins: { eyebrow: "UR Coins", title: "O que você constrói pode voltar para você", lead: "Seu desempenho gera UR Coins, que podem ser utilizadas para conquistar benefícios dentro do ecossistema.", cta: { label: "Explorar o UR Market", href: "/ur-market" } },
  awards: { eyebrow: "Premiações", title: "A temporada premia resultados", lead: "Além do ranking, os atletas disputam premiações e repasses definidos para cada competição.", cta: { label: "Ver premiações", href: "/premiacoes" } },
  ranking: { eyebrow: "Ranking oficial", title: "Seu ranking não é apenas posição. É sua temporada registrada.", lead: "O ranking registra sua evolução ao longo do ano. Cada ponto conta. Cada posição é conquistada.", cta: { label: "Ver ranking completo", href: "/ranking" } },
  market: { eyebrow: "UR Market", title: "Sua participação ganha valor", lead: "O UR Market conecta atletas e parceiros. Você encontra produtos, serviços e benefícios disponíveis através do sistema oficial.", cta: { label: "Entrar no Market", href: "/ur-market" } },
  poles: { eyebrow: "Polos em disputa", title: "Defenda seu polo. Fortaleça sua quadra.", lead: "Cada polo possui atletas, equipes, eventos e identidade própria. O crescimento da comunidade depende da participação dos seus atletas." },
  formats: { eyebrow: "Equipes, duplas e atletas", title: "Existe espaço para todos", lead: "Você pode participar individualmente, em dupla ou em equipe. O sistema foi criado para que ninguém fique de fora.", cta: { label: "Começar agora", href: "/cadastro" } },
  media: { eyebrow: "Mídia oficial", title: "Se ninguém vê, ninguém lembra", lead: "O Ultimate Rivals registra, divulga e valoriza a trajetória dos atletas. Não é apenas uma competição: é uma temporada acompanhada pela comunidade.", cta: { label: "Assistir conteúdos", href: "/midia" } },
  hunter: { eyebrow: "Mentalidade Hunter", title: "Hunter não é olheiro. É mentalidade.", lead: "Mentalidade Hunter significa evolução contínua. Significa competir melhor hoje do que ontem." },
  blog: { eyebrow: "Blog oficial", title: "Acompanhe a história sendo escrita", lead: "Resultados, bastidores, entrevistas, conteúdos educativos e notícias da temporada. Tudo em um só lugar.", cta: { label: "Acessar blog", href: "/blog" } },
  about: { eyebrow: "Quem somos", title: "Mais do que eventos. Uma infraestrutura esportiva.", lead: "O Ultimate Rivals conecta competição, desenvolvimento, mídia, tecnologia, comunidade e oportunidades. Nosso objetivo é profissionalizar a experiência do esporte amador e criar caminhos reais para os atletas.", cta: { label: "Conhecer o projeto", href: "/quem-somos" } },
  vision: { eyebrow: "Visão de futuro", title: "Você está entrando no começo da história", lead: "A Temporada 1 é apenas o primeiro capítulo. Os atletas que participarem agora ajudarão a construir os próximos anos do Ultimate Rivals.", cta: { label: "Ver visão completa", href: "/quem-somos" } },
};
