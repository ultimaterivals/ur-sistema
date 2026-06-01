// Ultimate Rivals — Structured Data
// All numeric data is illustrative. Never use R$ or guarantee prizes/careers.

export const polos = [
  {
    id: "belo-horizonte",
    name: "Belo Horizonte",
    short: "BH",
    color: "#D4A437",
    description: "Polo central com múltiplas quadras parceiras e comunidade ativa.",
    modalidades: ["Dupla", "Quarteto"],
    status: "Ativo",
  },
  {
    id: "betim",
    name: "Betim",
    short: "BT",
    color: "#F0C060",
    description: "Polo em expansão com forte presença de atletas em desenvolvimento.",
    modalidades: ["Dupla", "Quarteto"],
    status: "Ativo",
  },
  {
    id: "contagem",
    name: "Contagem",
    short: "CG",
    color: "#C8B99A",
    description: "Polo consolidado com rivalidade saudável e calendário contínuo.",
    modalidades: ["Dupla", "Quarteto"],
    status: "Ativo",
  },
];

export const niveis = [
  {
    id: "n1",
    label: "N1",
    name: "Elite",
    description: "Atletas com alto nível técnico e experiência competitiva consolidada.",
    color: "#D4A437",
  },
  {
    id: "n2",
    label: "N2",
    name: "Avançado",
    description: "Atletas em crescimento com boa leitura de jogo e consistência técnica.",
    color: "#F0C060",
  },
  {
    id: "n3",
    label: "N3",
    name: "Desenvolvimento",
    description: "Entrada na jornada. Preparação, orientação e evolução estruturada.",
    color: "#C8B99A",
  },
];

export const etapas = [
  {
    id: "ur-play",
    label: "UR Play",
    description: "Entrada oficial. Cadastro, jogos semanais, observação, nivelamento e primeiro histórico.",
    icon: "play",
    color: "#5A8A5A",
  },
  {
    id: "ur-sprint",
    label: "UR Sprint",
    description: "Primeira disputa oficial dos polos. Pontos no ranking, visibilidade e construção de trajetória.",
    icon: "zap",
    color: "#D4A437",
  },
  {
    id: "ur-series",
    label: "UR Series",
    description: "Classificados dos polos se encontram em uma disputa entre comunidades.",
    icon: "trophy",
    color: "#F0C060",
  },
  {
    id: "ur-legends",
    label: "UR Legends",
    description: "Evento principal da temporada. Atletas de destaque representam seus polos.",
    icon: "star",
    color: "#FFD700",
  },
];

export const rankingDemo = [
  { pos: 1, nome: "Carlos M.", polo: "BH", nivel: "N1", pontos: 2840, modalidade: "Dupla", trend: "up" },
  { pos: 2, nome: "Rafael S.", polo: "BT", nivel: "N1", pontos: 2710, modalidade: "Dupla", trend: "up" },
  { pos: 3, nome: "Thiago L.", polo: "CG", nivel: "N1", pontos: 2690, modalidade: "Quarteto", trend: "stable" },
  { pos: 4, nome: "Bruno A.", polo: "BH", nivel: "N2", pontos: 2450, modalidade: "Dupla", trend: "up" },
  { pos: 5, nome: "Pedro V.", polo: "BT", nivel: "N1", pontos: 2380, modalidade: "Quarteto", trend: "down" },
  { pos: 6, nome: "Lucas F.", polo: "CG", nivel: "N2", pontos: 2210, modalidade: "Dupla", trend: "up" },
];

export const rankingPolos = [
  { pos: 1, polo: "Belo Horizonte", short: "BH", pontos: 8920, atletas: 47, tendencia: "up" },
  { pos: 2, polo: "Betim", short: "BT", pontos: 8410, atletas: 43, tendencia: "up" },
  { pos: 3, polo: "Contagem", short: "CG", pontos: 7980, atletas: 39, tendencia: "stable" },
];

export const rankingCategorias = [
  "Atletas", "Equipes", "Duplas", "Polos", "Por Função", "Evolução", "Fair Play"
];

export const marketItems = [
  { id: 1, category: "Produtos Oficiais", name: "Kit Temporada", description: "Camiseta, bag e acessórios da temporada.", status: "disponivel" },
  { id: 2, category: "Serviços Esportivos", name: "Avaliação Técnica", description: "Análise de jogo e plano de evolução personalizado.", status: "disponivel" },
  { id: 3, category: "Parceiros", name: "Equipamentos Parceiros", description: "Acesso a produtos e marcas parceiras do ecossistema.", status: "disponivel" },
  { id: 4, category: "Experiências", name: "Treino com Hunter", description: "Sessão com metodologia Hunter aplicada.", status: "em-breve" },
  { id: 5, category: "Para Equipes", name: "Identidade Visual", description: "Criação de uniforme e identidade para equipes cadastradas.", status: "em-breve" },
  { id: 6, category: "Para Polos", name: "Kit Polo", description: "Material de comunicação e sinalização para quadras parceiras.", status: "em-breve" },
];

export const midiaItems = [
  { id: 1, type: "Transmissão", title: "UR Sprint — Belo Horizonte", tag: "Ao Vivo", featured: true },
  { id: 2, type: "Melhores Jogadas", title: "Top 10 Jogadas da Semana", tag: "Novo" },
  { id: 3, type: "Documentário", title: "Bastidores da Temporada 1", tag: "Exclusivo" },
  { id: 4, type: "Quadro Esportivo", title: "Análise Tática — Duplas N1", tag: "Educativo" },
  { id: 5, type: "Bastidores", title: "Dia de Competição em Betim", tag: "Bastidores" },
  { id: 6, type: "Conteúdo", title: "Entrevista — Atletas do Polo Contagem", tag: "Entrevista" },
];

export const hunterPilares = [
  { id: 1, title: "Mentalidade Hunter", desc: "Disciplina, foco e postura competitiva como hábito diário." },
  { id: 2, title: "Leitura de Jogo", desc: "Antecipação, posicionamento e tomada de decisão em quadra." },
  { id: 3, title: "Desenvolvimento do Atleta", desc: "Evolução técnica, física e comportamental com critério." },
  { id: 4, title: "Equipes Hunters", desc: "Como construir times com identidade, química e propósito." },
  { id: 5, title: "Evolução Contínua", desc: "Métricas claras, feedback constante e ciclos de melhoria." },
  { id: 6, title: "Aplicação na Temporada", desc: "Como a metodologia se conecta ao UR Play e à jornada competitiva." },
];

export const cadastroCaminhos = [
  { id: "atleta", label: "Sou atleta", desc: "Quero entrar pelo UR Play e competir.", icon: "user" },
  { id: "dupla", label: "Tenho uma dupla", desc: "Quero cadastrar minha dupla.", icon: "users" },
  { id: "equipe", label: "Tenho uma equipe", desc: "Quero cadastrar minha equipe.", icon: "shield" },
  { id: "quadra", label: "Tenho uma quadra", desc: "Quero ser polo parceiro.", icon: "map-pin" },
  { id: "patrocinar", label: "Quero patrocinar", desc: "Quero entrar como parceiro/patrocinador.", icon: "briefcase" },
  { id: "acompanhar", label: "Quero acompanhar", desc: "Quero seguir a temporada como fã.", icon: "eye" },
];
