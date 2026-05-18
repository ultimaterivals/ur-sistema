import { externalLinks } from "@/lib/links";

export type LeadProfile = "athlete" | "team" | "sponsor" | "court" | "community";

export type LeadFieldType = "text" | "tel" | "email" | "textarea" | "select" | "checkbox";

export type LeadField = {
  name: string;
  label: string;
  type: LeadFieldType;
  required?: boolean;
  placeholder?: string;
  options?: readonly string[];
};

export type LeadFormConfig = {
  profile: LeadProfile;
  anchor: string;
  cardTitle: string;
  audience: string;
  description: string;
  formTitle: string;
  formDescription: string;
  fallbackHref: string;
  fallbackLabel: string;
  fields: readonly LeadField[];
};

type BaseLead = {
  profile: LeadProfile;
  whatsapp: string;
  cidade?: string;
  autorizacaoContato: string;
};

export type AthleteLead = BaseLead & {
  profile: "athlete";
  nomeCompleto: string;
  instagram?: string;
  poloInteresse?: string;
  modalidadePrincipal?: string;
  nivelPercebido?: string;
  temEquipe?: string;
  objetivoPrincipal?: string;
  interesseUrPlay?: string;
  interesseTorneios?: string;
  interesseCtUr?: string;
  disponibilidade?: string;
  pontoMelhoria?: string;
};

export type TeamLead = BaseLead & {
  profile: "team";
  nomeEquipe: string;
  responsavel: string;
  instagramEquipe?: string;
  cidadePolo?: string;
  modalidade?: string;
  elencoDefinido?: string;
  quantidadeAtletas?: string;
  nivelPercebido?: string;
  participaTorneios?: string;
  objetivoPrincipal?: string;
  interesseUrPlay?: string;
  interesseTorneiosOficiais?: string;
  disponibilidade?: string;
  historiaObjetivo?: string;
};

export type SponsorLead = BaseLead & {
  profile: "sponsor";
  empresaMarca: string;
  responsavel: string;
  cargoFuncao?: string;
  emailComercial?: string;
  instagramSite?: string;
  segmento?: string;
  cidadeRegiao?: string;
  publicoAlvo?: string;
  objetivoComercial?: string;
  tipoAtivacao?: string;
  ofereceBeneficios?: string;
  faixaInvestimento?: string;
  expectativaUr?: string;
};

export type CourtLead = BaseLead & {
  profile: "court";
  nomeQuadra: string;
  responsavel: string;
  instagram?: string;
  enderecoRegiao?: string;
  modalidadesComportadas?: string;
  quantidadeEspacos?: string;
  possuiIluminacao?: string;
  possuiBar?: string;
  estruturaPublico?: string;
  realizaEventos?: string;
  tipoParceria?: string;
  disponibilidade?: string;
  interessePatrocinadores?: string;
  principaisDesafios?: string;
  motivoInteresse?: string;
};

export type CommunityLead = BaseLead & {
  profile: "community";
  nomeCompleto: string;
  instagram?: string;
  interessePrincipal?: string;
  perfilComunidade?: string;
  modalidadesInteresse?: string;
  avisosDesejados?: string;
  sugestaoObservacao?: string;
};

export type LeadFormData = AthleteLead | TeamLead | SponsorLead | CourtLead | CommunityLead;

export type LeadPayload = {
  profile: LeadProfile;
  source: "site";
  sourceLabel: "Site / Cadastro UR";
  page: "/cadastro";
  createdAt: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  statusInicial: "Novo";
  prioridadeInicial: "A definir";
  responsavelInicial: "Operação UR";
  proximoPassoInicial: "Triagem inicial";
  data: LeadFormData;
};

const poloOptions = ["Belo Horizonte", "Contagem", "Betim", "Outro", "Polo em formação"] as const;
const modalidadeOptions = ["Vôlei de praia", "Futevôlei", "Futset", "Futebol", "Beach tennis", "Outra"] as const;
const yesMaybeOptions = ["Sim", "Talvez", "Quero entender melhor"] as const;

const authorizationField = {
  name: "autorizacaoContato",
  label: "Autorizo a equipe Ultimate Rivals a entrar em contato pelo WhatsApp.",
  type: "checkbox",
  required: true,
} satisfies LeadField;

export const leadFormConfigs = {
  athlete: {
    profile: "athlete",
    anchor: "atleta",
    cardTitle: "Sou atleta",
    audience: "UR Play, ranking e evolução",
    description:
      "Entre pelo UR Play, construa histórico, dispute ranking, busque equipe, mídia, CT UR e recompensas futuras.",
    formTitle: "Cadastro de atleta UR",
    formDescription:
      "Registro de interesse para atletas que querem entrar no ecossistema pelo UR Play e evoluir com validação operacional.",
    fallbackHref: externalLinks.formularioAtleta.href,
    fallbackLabel: "Abrir Tally de atleta",
    fields: [
      { name: "nomeCompleto", label: "Nome completo", type: "text", required: true },
      { name: "whatsapp", label: "WhatsApp com DDD", type: "tel", required: true, placeholder: "31999990000" },
      { name: "instagram", label: "Instagram", type: "text", placeholder: "@seuperfil" },
      { name: "cidade", label: "Cidade", type: "text", required: true },
      { name: "poloInteresse", label: "Polo de interesse", type: "select", options: poloOptions },
      { name: "modalidadePrincipal", label: "Modalidade principal", type: "select", options: modalidadeOptions },
      {
        name: "nivelPercebido",
        label: "Nível percebido",
        type: "select",
        options: ["Iniciante", "Intermediário", "Competitivo", "Avançado", "Não sei avaliar"],
      },
      { name: "temEquipe", label: "Tem equipe?", type: "select", options: ["Sim", "Não", "Estou montando"] },
      {
        name: "objetivoPrincipal",
        label: "Objetivo principal",
        type: "select",
        options: ["Entrar no ranking", "Ganhar visibilidade", "Participar de torneios", "Entrar em uma equipe", "Evoluir tecnicamente"],
      },
      { name: "interesseUrPlay", label: "Interesse em UR Play", type: "select", options: yesMaybeOptions },
      { name: "interesseTorneios", label: "Interesse em torneios", type: "select", options: yesMaybeOptions },
      { name: "interesseCtUr", label: "Interesse em CT UR", type: "select", options: yesMaybeOptions },
      { name: "disponibilidade", label: "Disponibilidade", type: "textarea", required: true },
      { name: "pontoMelhoria", label: "Ponto de melhoria como atleta", type: "textarea" },
      authorizationField,
    ],
  },
  team: {
    profile: "team",
    anchor: "equipe",
    cardTitle: "Tenho uma equipe",
    audience: "elenco, identidade e ranking coletivo",
    description:
      "Registre uma equipe para validação de elenco, identidade, ranking coletivo, temporada, mídia e oportunidades.",
    formTitle: "Cadastro de equipe UR",
    formDescription:
      "Registro de interesse para equipes que querem se organizar como ativo competitivo dentro do Ultimate Rivals.",
    fallbackHref: externalLinks.formularioEquipe.href,
    fallbackLabel: "Abrir Tally de equipe",
    fields: [
      { name: "nomeEquipe", label: "Nome da equipe", type: "text", required: true },
      { name: "responsavel", label: "Responsável/capitão", type: "text", required: true },
      { name: "whatsapp", label: "WhatsApp com DDD", type: "tel", required: true },
      { name: "instagramEquipe", label: "Instagram da equipe", type: "text", placeholder: "@equipe" },
      { name: "cidade", label: "Cidade", type: "text", required: true },
      { name: "cidadePolo", label: "Cidade/polo", type: "select", options: poloOptions },
      { name: "modalidade", label: "Modalidade", type: "select", options: modalidadeOptions },
      {
        name: "elencoDefinido",
        label: "Elenco definido?",
        type: "select",
        options: ["Sim, completo", "Sim, em ajuste", "Ainda em formação", "Quero entender Draft"],
      },
      { name: "quantidadeAtletas", label: "Quantidade de atletas", type: "text" },
      {
        name: "nivelPercebido",
        label: "Nível percebido",
        type: "select",
        options: ["Iniciante", "Intermediário", "Competitivo", "Avançado", "Não sei avaliar"],
      },
      { name: "participaTorneios", label: "Já participa de torneios?", type: "select", options: ["Sim", "Não", "Estamos começando"] },
      {
        name: "objetivoPrincipal",
        label: "Objetivo principal",
        type: "select",
        options: ["Ranking coletivo", "Torneios oficiais", "Mídia", "Premiações", "Organizar elenco"],
      },
      { name: "interesseUrPlay", label: "Interesse em UR Play", type: "select", options: yesMaybeOptions },
      { name: "interesseTorneiosOficiais", label: "Interesse em torneios oficiais", type: "select", options: yesMaybeOptions },
      { name: "disponibilidade", label: "Disponibilidade", type: "textarea", required: true },
      { name: "historiaObjetivo", label: "História/objetivo da equipe", type: "textarea" },
      authorizationField,
    ],
  },
  sponsor: {
    profile: "sponsor",
    anchor: "patrocinador",
    cardTitle: "Quero patrocinar",
    audience: "marca, mídia e ativação comercial",
    description:
      "Registre interesse comercial para ativações em eventos, ranking, mídia, UR Market, CT UR e comunidade.",
    formTitle: "Interesse comercial UR",
    formDescription:
      "Registro para marcas que querem entrar na jornada do atleta, não apenas comprar exposição de logo.",
    fallbackHref: externalLinks.formularioPatrocinador.href,
    fallbackLabel: "Abrir Tally comercial",
    fields: [
      { name: "empresaMarca", label: "Empresa/marca", type: "text", required: true },
      { name: "responsavel", label: "Responsável", type: "text", required: true },
      { name: "cargoFuncao", label: "Cargo/função", type: "text" },
      { name: "whatsapp", label: "WhatsApp com DDD", type: "tel", required: true },
      { name: "emailComercial", label: "E-mail comercial", type: "email" },
      { name: "instagramSite", label: "Instagram/site", type: "text" },
      {
        name: "segmento",
        label: "Segmento",
        type: "select",
        options: ["Esporte e performance", "Alimentação e bebidas", "Saúde e bem-estar", "Moda/vestuário", "Serviços locais", "Outro"],
      },
      { name: "cidade", label: "Cidade", type: "text", required: true },
      { name: "cidadeRegiao", label: "Cidade/região de atuação", type: "text" },
      {
        name: "publicoAlvo",
        label: "Público-alvo desejado",
        type: "select",
        options: ["Atletas", "Equipes", "Comunidade esportiva", "Público local/regional", "Gestores de quadras", "Outro"],
      },
      {
        name: "objetivoComercial",
        label: "Objetivo comercial",
        type: "select",
        options: ["Visibilidade", "Relacionamento", "Vendas", "Ativação em eventos", "UR Market", "Mídia/conteúdo"],
      },
      {
        name: "tipoAtivacao",
        label: "Tipo de ativação de interesse",
        type: "select",
        options: ["Eventos", "Mídia", "UR Market", "Benefícios para atletas", "CT UR", "Equipes"],
      },
      { name: "ofereceBeneficios", label: "Interesse em oferecer benefícios reais?", type: "select", options: yesMaybeOptions },
      {
        name: "faixaInvestimento",
        label: "Faixa de investimento",
        type: "select",
        options: [
          "A definir",
          "Quero entender modelos",
          "Tenho verba em validação",
          "Depende da proposta comercial",
          "Prefiro falar com Comercial UR",
        ],
      },
      { name: "expectativaUr", label: "Expectativa com o UR", type: "textarea", required: true },
      authorizationField,
    ],
  },
  court: {
    profile: "court",
    anchor: "quadra",
    cardTitle: "Tenho uma quadra",
    audience: "polo, agenda e comunidade local",
    description:
      "Registre uma quadra ou arena para possível polo, eventos, UR Play, mídia e ativações regionais.",
    formTitle: "Quadra parceira UR",
    formDescription:
      "Registro para quadras que querem se conectar à expansão por polos do ecossistema Ultimate Rivals.",
    fallbackHref: externalLinks.formularioQuadra.href,
    fallbackLabel: "Abrir Tally de quadra",
    fields: [
      { name: "nomeQuadra", label: "Nome da quadra/arena", type: "text", required: true },
      { name: "responsavel", label: "Responsável", type: "text", required: true },
      { name: "whatsapp", label: "WhatsApp com DDD", type: "tel", required: true },
      { name: "instagram", label: "Instagram", type: "text" },
      { name: "enderecoRegiao", label: "Endereço/região", type: "text" },
      { name: "cidade", label: "Cidade", type: "text", required: true },
      { name: "modalidadesComportadas", label: "Modalidades comportadas", type: "select", options: modalidadeOptions },
      { name: "quantidadeEspacos", label: "Quantidade de quadras/espaços", type: "text" },
      { name: "possuiIluminacao", label: "Possui iluminação?", type: "select", options: ["Sim", "Não", "Parcialmente"] },
      { name: "possuiBar", label: "Possui bar/convivência?", type: "select", options: ["Sim", "Não", "Em construção", "Terceirizado"] },
      { name: "estruturaPublico", label: "Estrutura para público", type: "select", options: ["Sim", "Pouca estrutura", "Não atualmente", "Depende do evento"] },
      { name: "realizaEventos", label: "Já realiza eventos?", type: "select", options: ["Sim", "Não", "Ocasionalmente", "Tem interesse"] },
      {
        name: "tipoParceria",
        label: "Tipo de parceria desejada",
        type: "select",
        options: ["Receber UR Play", "Receber torneios", "Virar polo oficial", "Eventos conjuntos", "Ainda quero entender"],
      },
      { name: "disponibilidade", label: "Disponibilidade", type: "textarea", required: true },
      { name: "interessePatrocinadores", label: "Interesse em patrocinadores?", type: "select", options: yesMaybeOptions },
      { name: "principaisDesafios", label: "Principais desafios", type: "textarea" },
      { name: "motivoInteresse", label: "Motivo de interesse no UR", type: "textarea", required: true },
      authorizationField,
    ],
  },
  community: {
    profile: "community",
    anchor: "comunidade",
    cardTitle: "Quero acompanhar a comunidade",
    audience: "conteúdo, temporada e bastidores",
    description:
      "Entre na base de comunidade para acompanhar notícias, eventos, ranking em formação, mídia e próximos passos.",
    formTitle: "Comunidade Ultimate Rivals",
    formDescription:
      "Registro para quem quer acompanhar o crescimento do ecossistema, conteúdos, eventos e oportunidades futuras.",
    fallbackHref: externalLinks.comunidade.href,
    fallbackLabel: "Abrir Tally da comunidade",
    fields: [
      { name: "nomeCompleto", label: "Nome completo", type: "text", required: true },
      { name: "whatsapp", label: "WhatsApp com DDD", type: "tel", required: true },
      { name: "instagram", label: "Instagram", type: "text" },
      { name: "cidade", label: "Cidade", type: "text", required: true },
      {
        name: "interessePrincipal",
        label: "Interesse principal",
        type: "select",
        options: ["Quero jogar", "Acompanhar eventos", "Receber novidades", "Torcer", "Conhecer o projeto", "Consumir mídia"],
      },
      {
        name: "perfilComunidade",
        label: "Perfil",
        type: "select",
        options: ["Atleta", "Torcedor/fã", "Responsável por atleta", "Gestor de equipe", "Gestor de quadra", "Empresa/patrocinador", "Outro"],
      },
      { name: "modalidadesInteresse", label: "Modalidades de interesse", type: "select", options: modalidadeOptions },
      {
        name: "avisosDesejados",
        label: "Avisos desejados",
        type: "select",
        options: ["Eventos", "UR Play", "Ranking", "Conteúdo/mídia", "Comunidade", "Todos"],
      },
      { name: "sugestaoObservacao", label: "Sugestão/observação", type: "textarea" },
      authorizationField,
    ],
  },
} as const satisfies Record<LeadProfile, LeadFormConfig>;

export const leadProfileOrder = ["athlete", "team", "sponsor", "court", "community"] as const;
