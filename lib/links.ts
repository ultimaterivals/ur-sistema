export const conversionRoutes = {
  cadastro: "/cadastro",
  atleta: "/cadastro#atleta",
  equipe: "/cadastro#equipe",
  patrocinador: "/cadastro#patrocinador",
  quadra: "/cadastro#quadra",
  comunidade: "/cadastro#comunidade",
  avisoValidacao: "/cadastro#aviso-validacao",
} as const;

const tallyStatus = "formulário Tally conectado";
const channelPendingStatus = "canal será conectado após validação operacional";

export const tallyLinks = {
  atleta: "https://tally.so/r/RGb84l",
  equipe: "https://tally.so/r/2ElxKg",
  patrocinador: "https://tally.so/r/Y5JoVN",
  quadra: "https://tally.so/r/vGJ0zD",
  comunidade: "https://tally.so/r/WOKlpQ",
} as const;

export const externalLinks = {
  whatsappUr: {
    label: "WhatsApp UR",
    href: conversionRoutes.avisoValidacao,
    status: channelPendingStatus,
    isConfigured: false,
  },
  instagram: {
    label: "Instagram",
    href: conversionRoutes.avisoValidacao,
    status: channelPendingStatus,
    isConfigured: false,
  },
  comunidade: {
    label: "Comunidade",
    href: tallyLinks.comunidade,
    status: tallyStatus,
    isConfigured: true,
  },
  formularioAtleta: {
    label: "Formulário de atleta",
    href: tallyLinks.atleta,
    status: tallyStatus,
    isConfigured: true,
  },
  formularioEquipe: {
    label: "Formulário de equipe",
    href: tallyLinks.equipe,
    status: tallyStatus,
    isConfigured: true,
  },
  formularioPatrocinador: {
    label: "Formulário de patrocinador",
    href: tallyLinks.patrocinador,
    status: tallyStatus,
    isConfigured: true,
  },
  formularioQuadra: {
    label: "Formulário de quadra",
    href: tallyLinks.quadra,
    status: tallyStatus,
    isConfigured: true,
  },
} as const;
