export const conversionRoutes = {
  cadastro: "/cadastro",
  atleta: "/cadastro#atleta",
  equipe: "/cadastro#equipe",
  patrocinador: "/cadastro#patrocinador",
  quadra: "/cadastro#quadra",
  comunidade: "/cadastro#comunidade",
  avisoValidacao: "/cadastro#aviso-validacao",
} as const;

const pendingStatus = "link será conectado após validação operacional";

export const externalLinks = {
  whatsappUr: {
    label: "WhatsApp UR",
    href: conversionRoutes.avisoValidacao,
    status: pendingStatus,
    isConfigured: false,
  },
  instagram: {
    label: "Instagram",
    href: conversionRoutes.avisoValidacao,
    status: pendingStatus,
    isConfigured: false,
  },
  comunidade: {
    label: "Comunidade",
    href: conversionRoutes.avisoValidacao,
    status: pendingStatus,
    isConfigured: false,
  },
  formularioAtleta: {
    label: "Formulário de atleta",
    href: conversionRoutes.avisoValidacao,
    status: pendingStatus,
    isConfigured: false,
  },
  formularioEquipe: {
    label: "Formulário de equipe",
    href: conversionRoutes.avisoValidacao,
    status: pendingStatus,
    isConfigured: false,
  },
  formularioPatrocinador: {
    label: "Formulário de patrocinador",
    href: conversionRoutes.avisoValidacao,
    status: pendingStatus,
    isConfigured: false,
  },
  formularioQuadra: {
    label: "Formulário de quadra",
    href: conversionRoutes.avisoValidacao,
    status: pendingStatus,
    isConfigured: false,
  },
} as const;
