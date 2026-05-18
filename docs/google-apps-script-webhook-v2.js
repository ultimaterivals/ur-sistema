/* eslint-disable */
/**
 * Ultimate Rivals — Google Apps Script Webhook v2
 *
 * Fluxo:
 * Site UR -> /cadastro -> Apps Script -> Google Sheets CRM operacional
 *
 * Como usar:
 * 1. Crie uma planilha Google Sheets nativa.
 * 2. Cole este arquivo no Apps Script.
 * 3. Substitua SPREADSHEET_ID.
 * 4. Execute setupSheets().
 * 5. Publique como Web App e configure NEXT_PUBLIC_GOOGLE_SCRIPT_URL.
 *
 * Perfis aceitos:
 * atleta | equipe | patrocinador | quadra | comunidade
 */

var SPREADSHEET_ID = "COLE_AQUI_O_ID_DA_PLANILHA";

var SUCCESS_MESSAGE =
  "Cadastro recebido. A equipe Ultimate Rivals fará a validação operacional antes de liberar próximos passos.";

var STATUS_OPTIONS = [
  "Novo",
  "Em triagem",
  "Qualificado",
  "Aguardando contato",
  "Contato feito",
  "Aguardando retorno",
  "Aprovado para próximo passo",
  "Não prioritário agora",
  "Arquivado",
];

var PRIORITY_OPTIONS = ["Alta", "Média", "Baixa", "A definir"];

var PROFILE_OPTIONS = ["Atleta", "Equipe", "Patrocinador", "Quadra", "Comunidade"];

var RESPONSIBLE_OPTIONS = ["Matheus Walker", "Operação UR", "Comercial UR", "Mídia UR", "A definir"];

var ORIGIN_OPTIONS = [
  "Site / Cadastro UR",
  "Site",
  "Cadastro UR",
  "Instagram",
  "WhatsApp",
  "Comunidade",
  "Indicação",
  "Evento",
  "QR Code",
  "Tráfego pago",
  "Manual",
  "Outro",
];

var CONTACT_TYPE_OPTIONS = [
  "Primeiro contato",
  "Follow-up",
  "Envio de informação",
  "Convite UR Play",
  "Convite reunião",
  "Proposta comercial",
  "Validação de dados",
  "Reativação",
];

var TASK_STATUS_OPTIONS = ["Pendente", "Em andamento", "Concluída", "Sem resposta", "Reagendar", "Cancelada"];

var CRM_HEADERS = [
  "ID do lead",
  "Data de entrada",
  "Perfil",
  "Nome",
  "WhatsApp",
  "Cidade",
  "Polo de interesse",
  "Origem do lead",
  "UTM source",
  "UTM medium",
  "UTM campaign",
  "UTM content",
  "Status",
  "Prioridade",
  "Score",
  "Status sugerido",
  "Responsável",
  "Próximo passo",
  "Próxima data de contato",
  "Último contato",
  "Tentativas de contato",
  "Observações",
  "Motivo de arquivamento",
  "Data de atualização",
];

var CONTACT_TASK_HEADERS = [
  "ID da tarefa",
  "ID do lead",
  "Perfil",
  "Nome",
  "WhatsApp",
  "Responsável",
  "Status atual",
  "Próxima data de contato",
  "Tipo de contato",
  "Mensagem enviada",
  "Resultado",
  "Data de conclusão",
];

var CAMPAIGN_HEADERS = [
  "ID da campanha",
  "Nome da campanha",
  "Canal",
  "Link usado",
  "Página de destino",
  "Público-alvo",
  "Data de início",
  "Data de fim",
  "Leads gerados",
  "Leads qualificados",
  "Observações",
];

var PROFILE_CONFIG = {
  atleta: {
    sheetName: "Atletas",
    prefix: "ATL",
    profileLabel: "Atleta",
    nameField: "nomeCompleto",
    cityField: "cidade",
    poloField: "poloInteresse",
    profileHeaders: [
      "Instagram",
      "Modalidade principal",
      "Posição principal",
      "Formatos de jogo",
      "Nível percebido",
      "Tem equipe?",
      "Objetivo principal",
      "Interesse UR Play",
      "Interesse Torneios",
      "Interesse CT UR",
      "Dias disponíveis",
      "Horário disponível",
      "Ponto de melhoria",
      "Autorizou contato?",
    ],
    fields: {
      Instagram: "instagram",
      "Modalidade principal": "modalidadePrincipal",
      "Posição principal": "posicao",
      "Formatos de jogo": "formatosJogo",
      "Nível percebido": "nivelPercebido",
      "Tem equipe?": "temEquipe",
      "Objetivo principal": "objetivoPrincipal",
      "Interesse UR Play": "interesseUrPlay",
      "Interesse Torneios": "interesseTorneios",
      "Interesse CT UR": "interesseCtUr",
      "Dias disponíveis": "diasDisponiveis",
      "Horário disponível": "horarioDisponivel",
      "Ponto de melhoria": "pontoMelhoria",
      "Autorizou contato?": "autorizacaoContato",
    },
  },

  equipe: {
    sheetName: "Equipes",
    prefix: "EQP",
    profileLabel: "Equipe",
    nameField: "nomeEquipe",
    cityField: "cidade",
    poloField: "cidadePolo",
    profileHeaders: [
      "Responsável/capitão",
      "Instagram da equipe",
      "Modalidade",
      "Formatos de jogo",
      "Elenco definido?",
      "Quantidade de atletas",
      "Nível percebido",
      "Já participa de torneios?",
      "Objetivo principal",
      "Interesse UR Play",
      "Interesse torneios oficiais",
      "Dias disponíveis",
      "Horário disponível",
      "História/objetivo",
      "Autorizou contato?",
    ],
    fields: {
      "Responsável/capitão": "responsavel",
      "Instagram da equipe": "instagramEquipe",
      Modalidade: "modalidade",
      "Formatos de jogo": "formatosJogo",
      "Elenco definido?": "elencoDefinido",
      "Quantidade de atletas": "quantidadeAtletas",
      "Nível percebido": "nivelPercebido",
      "Já participa de torneios?": "participaTorneios",
      "Objetivo principal": "objetivoPrincipal",
      "Interesse UR Play": "interesseUrPlay",
      "Interesse torneios oficiais": "interesseTorneiosOficiais",
      "Dias disponíveis": "diasDisponiveis",
      "Horário disponível": "horarioDisponivel",
      "História/objetivo": "historiaObjetivo",
      "Autorizou contato?": "autorizacaoContato",
    },
  },

  patrocinador: {
    sheetName: "Patrocinadores",
    prefix: "PAT",
    profileLabel: "Patrocinador",
    nameField: "empresaMarca",
    cityField: "cidade",
    poloField: "cidadeRegiao",
    profileHeaders: [
      "Responsável",
      "Cargo/função",
      "E-mail comercial",
      "Instagram/site",
      "Segmento",
      "Cidade/região",
      "Público-alvo",
      "Objetivo comercial",
      "Tipo de ativação",
      "Oferece benefícios?",
      "Faixa de investimento",
      "Expectativa com o UR",
      "Autorizou contato?",
    ],
    fields: {
      Responsável: "responsavel",
      "Cargo/função": "cargoFuncao",
      "E-mail comercial": "emailComercial",
      "Instagram/site": "instagramSite",
      Segmento: "segmento",
      "Cidade/região": "cidadeRegiao",
      "Público-alvo": "publicoAlvo",
      "Objetivo comercial": "objetivoComercial",
      "Tipo de ativação": "tipoAtivacao",
      "Oferece benefícios?": "ofereceBeneficios",
      "Faixa de investimento": "faixaInvestimento",
      "Expectativa com o UR": "expectativaUr",
      "Autorizou contato?": "autorizacaoContato",
    },
  },

  quadra: {
    sheetName: "Quadras",
    prefix: "QDR",
    profileLabel: "Quadra",
    nameField: "nomeQuadra",
    cityField: "cidade",
    poloField: "cidade",
    profileHeaders: [
      "Responsável",
      "Instagram",
      "Endereço/região",
      "Modalidades comportadas",
      "Quantidade de espaços",
      "Possui iluminação?",
      "Possui bar/convivência?",
      "Estrutura para público",
      "Já realiza eventos?",
      "Tipo de parceria",
      "Disponibilidade",
      "Interesse em patrocinadores?",
      "Principais desafios",
      "Motivo de interesse no UR",
      "Autorizou contato?",
    ],
    fields: {
      Responsável: "responsavel",
      Instagram: "instagram",
      "Endereço/região": "enderecoRegiao",
      "Modalidades comportadas": "modalidadesComportadas",
      "Quantidade de espaços": "quantidadeEspacos",
      "Possui iluminação?": "possuiIluminacao",
      "Possui bar/convivência?": "possuiBar",
      "Estrutura para público": "estruturaPublico",
      "Já realiza eventos?": "realizaEventos",
      "Tipo de parceria": "tipoParceria",
      Disponibilidade: "disponibilidade",
      "Interesse em patrocinadores?": "interessePatrocinadores",
      "Principais desafios": "principaisDesafios",
      "Motivo de interesse no UR": "motivoInteresse",
      "Autorizou contato?": "autorizacaoContato",
    },
  },

  comunidade: {
    sheetName: "Comunidade",
    prefix: "COM",
    profileLabel: "Comunidade",
    nameField: "nomeCompleto",
    cityField: "cidade",
    poloField: "cidade",
    profileHeaders: [
      "Instagram",
      "Interesse principal",
      "Perfil da comunidade",
      "Modalidades de interesse",
      "Avisos desejados",
      "Sugestão/observação",
      "Autorizou contato?",
    ],
    fields: {
      Instagram: "instagram",
      "Interesse principal": "interessePrincipal",
      "Perfil da comunidade": "perfilComunidade",
      "Modalidades de interesse": "modalidadesInteresse",
      "Avisos desejados": "avisosDesejados",
      "Sugestão/observação": "sugestaoObservacao",
      "Autorizou contato?": "autorizacaoContato",
    },
  },
};

function doGet() {
  return jsonResponse({
    ok: true,
    message: "Webhook Ultimate Rivals CRM operacional v2 ativo.",
    ts: new Date().toISOString(),
  });
}

function doPost(e) {
  try {
    Logger.log("=== doPost iniciado ===");

    var payload = parsePayload(e);
    var config = PROFILE_CONFIG[payload.profile];

    Logger.log("profile: " + payload.profile);
    Logger.log("payload: " + JSON.stringify(payload));

    if (!config) {
      return jsonResponse({
        ok: false,
        message: "Perfil inválido. Use atleta, equipe, patrocinador, quadra ou comunidade.",
      });
    }

    if (payload.website && String(payload.website).trim() !== "") {
      Logger.log("Honeypot preenchido. Lead descartado silenciosamente.");
      return jsonResponse({ ok: true, message: SUCCESS_MESSAGE });
    }

    var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = getOrCreateSheet(spreadsheet, config.sheetName);
    var headers = buildLeadHeaders(config);

    ensureHeaders(sheet, headers);
    applyBaseSheetFormatting(sheet);
    applyLeadValidations(sheet);

    var leadId = buildLeadId(sheet, config.prefix);
    var now = new Date();
    var rowNumber = sheet.getLastRow() + 1;
    var row = headers.map(function (header) {
      return resolveValue(header, payload, config, leadId, now);
    });

    sheet.appendRow(row);
    applyScoreFormula(sheet, rowNumber);

    Logger.log("Lead gravado com ID: " + leadId);

    return jsonResponse({
      ok: true,
      leadId: leadId,
      profile: payload.profile,
      message: SUCCESS_MESSAGE,
    });
  } catch (err) {
    Logger.log("ERRO em doPost: " + (err ? err.toString() : "desconhecido"));

    return jsonResponse({
      ok: false,
      message: "Erro interno ao processar cadastro: " + (err ? err.message : "desconhecido"),
    });
  }
}

/**
 * Cria e prepara:
 * - Dashboard
 * - 5 abas de leads
 * - Tarefas de Contato
 * - Configurações
 * - Origem dos Leads
 */
function setupSheets() {
  Logger.log("=== setupSheets CRM operacional iniciado ===");

  var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);

  setupConfigSheet(spreadsheet);
  setupDashboardSheet(spreadsheet);
  setupContactTasksSheet(spreadsheet);
  setupOriginsSheet(spreadsheet);

  Object.keys(PROFILE_CONFIG).forEach(function (profile) {
    var config = PROFILE_CONFIG[profile];
    var sheet = getOrCreateSheet(spreadsheet, config.sheetName);
    var headers = buildLeadHeaders(config);

    ensureHeaders(sheet, headers);
    applyBaseSheetFormatting(sheet);
    applyLeadValidations(sheet);
    sheet.autoResizeColumns(1, Math.min(headers.length, 24));

    Logger.log("Aba preparada: " + config.sheetName);
  });

  Logger.log("=== setupSheets CRM operacional concluído ===");
}

function setupConfigSheet(spreadsheet) {
  var sheet = getOrCreateSheet(spreadsheet, "Configurações");
  sheet.clear();

  var columns = [
    ["Status"].concat(STATUS_OPTIONS),
    ["Prioridade"].concat(PRIORITY_OPTIONS),
    ["Perfis"].concat(PROFILE_OPTIONS),
    ["Responsáveis"].concat(RESPONSIBLE_OPTIONS),
    ["Tipos de contato"].concat(CONTACT_TYPE_OPTIONS),
    ["Origens"].concat(ORIGIN_OPTIONS),
    ["Classificação de score", "80 a 100: lead quente", "50 a 79: lead qualificado", "30 a 49: observação", "0 a 29: baixa prioridade"],
  ];

  var maxRows = columns.reduce(function (max, column) {
    return Math.max(max, column.length);
  }, 0);

  var values = [];
  for (var row = 0; row < maxRows; row += 1) {
    values.push(
      columns.map(function (column) {
        return column[row] || "";
      }),
    );
  }

  sheet.getRange(1, 1, values.length, values[0].length).setValues(values);
  applyBaseSheetFormatting(sheet);
  sheet.autoResizeColumns(1, values[0].length);
}

function setupDashboardSheet(spreadsheet) {
  var sheet = getOrCreateSheet(spreadsheet, "Dashboard");
  sheet.clear();

  var totalFormula = buildTotalCountFormula();
  var qualifiedFormula = buildStatusCountFormula("Qualificado");
  var approvedFormula = buildStatusCountFormula("Aprovado para próximo passo");

  var rows = [
    ["Métrica", "Valor", "Uso operacional"],
    ["Total de leads", totalFormula, "Volume total nas abas de leads."],
    ["Atletas", '=COUNTA(Atletas!A2:A)', "Leads captados como atletas."],
    ["Equipes", '=COUNTA(Equipes!A2:A)', "Leads captados como equipes."],
    ["Patrocinadores", '=COUNTA(Patrocinadores!A2:A)', "Leads comerciais."],
    ["Quadras", '=COUNTA(Quadras!A2:A)', "Quadras e arenas interessadas."],
    ["Comunidade", '=COUNTA(Comunidade!A2:A)', "Leads de comunidade."],
    ["Leads novos da semana", buildNewWeekFormula(), "Entradas nos últimos 7 dias."],
    ["Leads qualificados", qualifiedFormula, "Status Qualificado."],
    ["Leads aprovados para próximo passo", approvedFormula, "Status Aprovado para próximo passo."],
    ["Leads aguardando contato", buildStatusCountFormula("Aguardando contato"), "Fila de primeiro contato."],
    ["Leads sem resposta", buildNoResponseFormula(), "Aguardando retorno com último contato acima de 7 dias."],
    ["Prioridade Alta", buildPriorityCountFormula("Alta"), "Leads que exigem ação rápida."],
    ["Prioridade Média", buildPriorityCountFormula("Média"), "Leads qualificados para rotina normal."],
    ["Prioridade Baixa", buildPriorityCountFormula("Baixa"), "Leads de observação."],
    ["Prioridade A definir", buildPriorityCountFormula("A definir"), "Leads sem priorização final."],
    ["Origem com mais leads", buildTopValueFormula("H"), "Maior origem registrada."],
    ["Cidade/polo com mais interessados", buildTopValueFormula("F"), "Cidade mais frequente."],
    ["Modalidade com mais interessados", buildTopModalityFormula(), "Modalidade mais frequente entre perfis aplicáveis."],
    ["Taxa de qualificação", '=IFERROR((' + qualifiedFormula.substring(1) + ')/(' + totalFormula.substring(1) + '),0)', "Qualificados / total."],
    ["Taxa de avanço para próximo passo", '=IFERROR((' + approvedFormula.substring(1) + ')/(' + totalFormula.substring(1) + '),0)', "Aprovados / total."],
  ];

  sheet.getRange(1, 1, rows.length, 3).setValues(rows);
  applyBaseSheetFormatting(sheet);
  sheet.getRange("B20:B21").setNumberFormat("0.00%");
  sheet.autoResizeColumns(1, 3);
}

function setupContactTasksSheet(spreadsheet) {
  var sheet = getOrCreateSheet(spreadsheet, "Tarefas de Contato");

  ensureHeaders(sheet, CONTACT_TASK_HEADERS);
  applyBaseSheetFormatting(sheet);
  applyListValidation(sheet, "Status atual", STATUS_OPTIONS.concat(TASK_STATUS_OPTIONS));
  applyListValidation(sheet, "Tipo de contato", CONTACT_TYPE_OPTIONS);
  applyListValidation(sheet, "Responsável", RESPONSIBLE_OPTIONS);
  sheet.autoResizeColumns(1, CONTACT_TASK_HEADERS.length);
}

function setupOriginsSheet(spreadsheet) {
  var sheet = getOrCreateSheet(spreadsheet, "Origem dos Leads");

  ensureHeaders(sheet, CAMPAIGN_HEADERS);
  applyBaseSheetFormatting(sheet);
  sheet.autoResizeColumns(1, CAMPAIGN_HEADERS.length);
}

function testWriteAtleta() {
  Logger.log("=== testWriteAtleta ===");
  return doPost({
    parameter: {
      profile: "atleta",
      source: "teste",
      sourceLabel: "Site / Cadastro UR",
      page: "/teste",
      createdAt: new Date().toISOString(),
      utm_source: "teste",
      utm_medium: "script",
      utm_campaign: "crm_operacional",
      utm_content: "atleta",
      nomeCompleto: "TESTE ATLETA UR",
      whatsapp: "31900000001",
      instagram: "@teste_atleta",
      cidade: "Belo Horizonte",
      poloInteresse: "Polo em formação",
      modalidadePrincipal: "Vôlei de praia",
      posicao: "Ponteiro(a)",
      formatosJogo: "2x2 (praia / areia)",
      nivelPercebido: "Intermediário",
      temEquipe: "Não",
      objetivoPrincipal: "Entrar no ranking",
      interesseUrPlay: "Sim",
      interesseTorneios: "Sim",
      interesseCtUr: "Talvez",
      diasDisponiveis: "Fins de semana",
      horarioDisponivel: "Manhã (6h - 12h)",
      pontoMelhoria: "Saque",
      autorizacaoContato: "Sim",
    },
  });
}

function testWriteEquipe() {
  Logger.log("=== testWriteEquipe ===");
  return doPost({
    parameter: {
      profile: "equipe",
      source: "teste",
      sourceLabel: "Site / Cadastro UR",
      page: "/teste",
      createdAt: new Date().toISOString(),
      utm_source: "teste",
      utm_medium: "script",
      utm_campaign: "crm_operacional",
      utm_content: "equipe",
      nomeEquipe: "TESTE EQUIPE UR",
      responsavel: "TESTE CAPITÃO UR",
      whatsapp: "31900000002",
      instagramEquipe: "@teste_equipe",
      cidade: "Contagem",
      cidadePolo: "Polo em formação",
      modalidade: "Futset",
      formatosJogo: "4x4",
      elencoDefinido: "Sim, em ajuste",
      quantidadeAtletas: "A definir",
      nivelPercebido: "Competitivo",
      participaTorneios: "Sim",
      objetivoPrincipal: "Ranking coletivo",
      interesseUrPlay: "Sim",
      interesseTorneiosOficiais: "Sim",
      diasDisponiveis: "Fins de semana",
      horarioDisponivel: "Noite (18h - 22h+)",
      historiaObjetivo: "Lead de teste operacional.",
      autorizacaoContato: "Sim",
    },
  });
}

function testWritePatrocinador() {
  Logger.log("=== testWritePatrocinador ===");
  return doPost({
    parameter: {
      profile: "patrocinador",
      source: "teste",
      sourceLabel: "Site / Cadastro UR",
      page: "/teste",
      createdAt: new Date().toISOString(),
      utm_source: "teste",
      utm_medium: "script",
      utm_campaign: "crm_operacional",
      utm_content: "patrocinador",
      empresaMarca: "TESTE PATROCINADOR UR",
      responsavel: "TESTE RESPONSÁVEL UR",
      cargoFuncao: "Comercial",
      whatsapp: "31900000003",
      emailComercial: "teste@exemplo.com",
      instagramSite: "@teste_patrocinador",
      segmento: "Esporte e performance",
      cidade: "Belo Horizonte",
      cidadeRegiao: "Grande BH",
      publicoAlvo: "Atletas",
      objetivoComercial: "Relacionamento",
      tipoAtivacao: "Eventos",
      ofereceBeneficios: "Sim",
      faixaInvestimento: "Depende da proposta comercial",
      expectativaUr: "Validar possibilidades comerciais sem promessa de entrega real.",
      autorizacaoContato: "Sim",
    },
  });
}

function testWriteQuadra() {
  Logger.log("=== testWriteQuadra ===");
  return doPost({
    parameter: {
      profile: "quadra",
      source: "teste",
      sourceLabel: "Site / Cadastro UR",
      page: "/teste",
      createdAt: new Date().toISOString(),
      utm_source: "teste",
      utm_medium: "script",
      utm_campaign: "crm_operacional",
      utm_content: "quadra",
      nomeQuadra: "TESTE QUADRA UR",
      responsavel: "TESTE RESPONSÁVEL QUADRA",
      whatsapp: "31900000004",
      instagram: "@teste_quadra",
      enderecoRegiao: "Região em validação",
      cidade: "Betim",
      modalidadesComportadas: "Vôlei de praia",
      quantidadeEspacos: "A definir",
      possuiIluminacao: "Sim",
      possuiBar: "Em construção",
      estruturaPublico: "Depende do evento",
      realizaEventos: "Tem interesse",
      tipoParceria: "Receber UR Play",
      disponibilidade: "Agenda em formação.",
      interessePatrocinadores: "Sim",
      principaisDesafios: "Lead de teste.",
      motivoInteresse: "Avaliar polo em formação.",
      autorizacaoContato: "Sim",
    },
  });
}

function testWriteComunidade() {
  Logger.log("=== testWriteComunidade ===");
  return doPost({
    parameter: {
      profile: "comunidade",
      source: "teste",
      sourceLabel: "Site / Cadastro UR",
      page: "/teste",
      createdAt: new Date().toISOString(),
      utm_source: "teste",
      utm_medium: "script",
      utm_campaign: "crm_operacional",
      utm_content: "comunidade",
      nomeCompleto: "TESTE COMUNIDADE UR",
      whatsapp: "31900000005",
      instagram: "@teste_comunidade",
      cidade: "Belo Horizonte",
      interessePrincipal: "Acompanhar eventos",
      perfilComunidade: "Torcedor/fã",
      modalidadesInteresse: "Vôlei de praia",
      avisosDesejados: "Eventos",
      sugestaoObservacao: "Lead de teste operacional.",
      autorizacaoContato: "Sim",
    },
  });
}

function parsePayload(e) {
  if (e && e.parameter && e.parameter.profile) {
    return e.parameter;
  }

  if (e && e.parameters && e.parameters.profile) {
    var flat = {};
    Object.keys(e.parameters).forEach(function (key) {
      var value = e.parameters[key];
      flat[key] = Array.isArray(value) ? value[0] : value;
    });
    return flat;
  }

  if (e && e.postData && e.postData.contents) {
    var parsed = JSON.parse(e.postData.contents);

    if (parsed.data && typeof parsed.data === "object") {
      var flatFromData = {};
      Object.keys(parsed).forEach(function (key) {
        if (key !== "data") {
          flatFromData[key] = parsed[key];
        }
      });
      Object.keys(parsed.data).forEach(function (key) {
        flatFromData[key] = parsed.data[key];
      });
      return flatFromData;
    }

    return parsed;
  }

  return {};
}

function buildLeadHeaders(config) {
  return CRM_HEADERS.concat(config.profileHeaders);
}

function getOrCreateSheet(spreadsheet, sheetName) {
  return spreadsheet.getSheetByName(sheetName) || spreadsheet.insertSheet(sheetName);
}

function ensureHeaders(sheet, expectedHeaders) {
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, expectedHeaders.length).setValues([expectedHeaders]);
    sheet.setFrozenRows(1);
    return;
  }

  var lastColumn = Math.max(sheet.getLastColumn(), 1);
  var currentHeaders = sheet.getRange(1, 1, 1, lastColumn).getValues()[0].filter(String);
  var missingHeaders = expectedHeaders.filter(function (header) {
    return currentHeaders.indexOf(header) === -1;
  });

  if (missingHeaders.length > 0) {
    sheet.getRange(1, currentHeaders.length + 1, 1, missingHeaders.length).setValues([missingHeaders]);
  }

  sheet.setFrozenRows(1);
}

function applyBaseSheetFormatting(sheet) {
  var lastColumn = Math.max(sheet.getLastColumn(), 1);
  var headerRange = sheet.getRange(1, 1, 1, lastColumn);

  headerRange.setBackground("#050505");
  headerRange.setFontColor("#ffd84d");
  headerRange.setFontWeight("bold");
  headerRange.setWrap(true);
  sheet.setFrozenRows(1);

  if (!sheet.getFilter()) {
    sheet.getRange(1, 1, Math.max(sheet.getMaxRows(), 2), lastColumn).createFilter();
  }
}

function applyLeadValidations(sheet) {
  applyListValidation(sheet, "Status", STATUS_OPTIONS);
  applyListValidation(sheet, "Prioridade", PRIORITY_OPTIONS);
  applyListValidation(sheet, "Responsável", RESPONSIBLE_OPTIONS);
  applyScoreValidation(sheet);
}

function applyListValidation(sheet, headerName, options) {
  var column = findHeaderColumn(sheet, headerName);
  if (!column) {
    return;
  }

  var rule = SpreadsheetApp.newDataValidation().requireValueInList(options, true).setAllowInvalid(false).build();
  sheet.getRange(2, column, Math.max(sheet.getMaxRows() - 1, 1), 1).setDataValidation(rule);
}

function applyScoreValidation(sheet) {
  var column = findHeaderColumn(sheet, "Score");
  if (!column) {
    return;
  }

  var rule = SpreadsheetApp.newDataValidation().requireNumberBetween(0, 100).setAllowInvalid(false).build();
  sheet.getRange(2, column, Math.max(sheet.getMaxRows() - 1, 1), 1).setDataValidation(rule);
}

function buildLeadId(sheet, prefix) {
  var idColumn = findHeaderColumn(sheet, "ID do lead") || 1;
  var lastRow = sheet.getLastRow();
  var maxNumber = 0;

  if (lastRow > 1) {
    var values = sheet.getRange(2, idColumn, lastRow - 1, 1).getValues();
    values.forEach(function (row) {
      var value = String(row[0] || "");
      var match = value.match(new RegExp("^" + prefix + "-(\\d+)$"));
      if (match) {
        maxNumber = Math.max(maxNumber, Number(match[1]));
      }
    });
  }

  return prefix + "-" + String(maxNumber + 1).padStart(4, "0");
}

function resolveValue(header, payload, config, leadId, now) {
  if (config.fields[header]) {
    return payload[config.fields[header]] || "";
  }

  var name = payload[config.nameField] || payload.nomeCompleto || payload.responsavel || "";
  var city = payload[config.cityField] || payload.cidade || payload.cidadePolo || payload.cidadeRegiao || "";
  var polo = payload[config.poloField] || payload.poloInteresse || payload.cidadePolo || payload.cidadeRegiao || "";

  var automaticValues = {
    "ID do lead": leadId,
    "Data de entrada": payload.createdAt || now,
    Perfil: config.profileLabel,
    Nome: name,
    WhatsApp: payload.whatsapp || "",
    Cidade: city,
    "Polo de interesse": polo,
    "Origem do lead": payload.sourceLabel || "Site / Cadastro UR",
    "UTM source": payload.utm_source || "",
    "UTM medium": payload.utm_medium || "",
    "UTM campaign": payload.utm_campaign || "",
    "UTM content": payload.utm_content || "",
    Status: "Novo",
    Prioridade: "A definir",
    Score: "",
    "Status sugerido": "",
    Responsável: payload.responsavelInicial || "Operação UR",
    "Próximo passo": payload.proximoPassoInicial || "Triagem inicial",
    "Próxima data de contato": "",
    "Último contato": "",
    "Tentativas de contato": 0,
    Observações: "Lead captado pelo formulário próprio do site.",
    "Motivo de arquivamento": "",
    "Data de atualização": now,
  };

  return Object.prototype.hasOwnProperty.call(automaticValues, header) ? automaticValues[header] : "";
}

function applyScoreFormula(sheet, rowNumber) {
  var scoreColumn = findHeaderColumn(sheet, "Score");
  var suggestedColumn = findHeaderColumn(sheet, "Status sugerido");

  if (!scoreColumn || !suggestedColumn) {
    return;
  }

  var scoreCell = columnToLetter(scoreColumn) + rowNumber;
  var formula =
    '=IF(' +
    scoreCell +
    '="","",IF(' +
    scoreCell +
    '>=80,"Qualificado ou Aguardando contato",IF(' +
    scoreCell +
    '>=50,"Em triagem ou Qualificado",IF(' +
    scoreCell +
    '>=30,"Em triagem ou Não prioritário agora","Não prioritário agora ou Arquivado"))))';

  sheet.getRange(rowNumber, suggestedColumn).setFormula(formula);
}

function findHeaderColumn(sheet, headerName) {
  var lastColumn = Math.max(sheet.getLastColumn(), 1);
  var headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];

  for (var i = 0; i < headers.length; i += 1) {
    if (headers[i] === headerName) {
      return i + 1;
    }
  }

  return null;
}

function columnToLetter(column) {
  var temp = "";
  var letter = "";

  while (column > 0) {
    temp = (column - 1) % 26;
    letter = String.fromCharCode(temp + 65) + letter;
    column = (column - temp - 1) / 26;
  }

  return letter;
}

function buildTotalCountFormula() {
  return "=SUM(COUNTA(Atletas!A2:A),COUNTA(Equipes!A2:A),COUNTA(Patrocinadores!A2:A),COUNTA(Quadras!A2:A),COUNTA(Comunidade!A2:A))";
}

function buildStatusCountFormula(status) {
  return (
    '=SUM(COUNTIF(Atletas!M:M,"' +
    status +
    '"),COUNTIF(Equipes!M:M,"' +
    status +
    '"),COUNTIF(Patrocinadores!M:M,"' +
    status +
    '"),COUNTIF(Quadras!M:M,"' +
    status +
    '"),COUNTIF(Comunidade!M:M,"' +
    status +
    '"))'
  );
}

function buildPriorityCountFormula(priority) {
  return (
    '=SUM(COUNTIF(Atletas!N:N,"' +
    priority +
    '"),COUNTIF(Equipes!N:N,"' +
    priority +
    '"),COUNTIF(Patrocinadores!N:N,"' +
    priority +
    '"),COUNTIF(Quadras!N:N,"' +
    priority +
    '"),COUNTIF(Comunidade!N:N,"' +
    priority +
    '"))'
  );
}

function buildNewWeekFormula() {
  return '=SUM(COUNTIFS(Atletas!B:B,">="&TODAY()-7),COUNTIFS(Equipes!B:B,">="&TODAY()-7),COUNTIFS(Patrocinadores!B:B,">="&TODAY()-7),COUNTIFS(Quadras!B:B,">="&TODAY()-7),COUNTIFS(Comunidade!B:B,">="&TODAY()-7))';
}

function buildNoResponseFormula() {
  return '=SUM(COUNTIFS(Atletas!M:M,"Aguardando retorno",Atletas!T:T,"<"&TODAY()-7),COUNTIFS(Equipes!M:M,"Aguardando retorno",Equipes!T:T,"<"&TODAY()-7),COUNTIFS(Patrocinadores!M:M,"Aguardando retorno",Patrocinadores!T:T,"<"&TODAY()-7),COUNTIFS(Quadras!M:M,"Aguardando retorno",Quadras!T:T,"<"&TODAY()-7),COUNTIFS(Comunidade!M:M,"Aguardando retorno",Comunidade!T:T,"<"&TODAY()-7))';
}

function buildTopValueFormula(columnLetter) {
  return (
    '=IFERROR(INDEX(QUERY({Atletas!' +
    columnLetter +
    "2:" +
    columnLetter +
    ";Equipes!" +
    columnLetter +
    "2:" +
    columnLetter +
    ";Patrocinadores!" +
    columnLetter +
    "2:" +
    columnLetter +
    ";Quadras!" +
    columnLetter +
    "2:" +
    columnLetter +
    ";Comunidade!" +
    columnLetter +
    "2:" +
    columnLetter +
    '},"select Col1, count(Col1) where Col1 is not null group by Col1 order by count(Col1) desc limit 1 label count(Col1) \'\'",0),1,1),"")'
  );
}

function buildTopModalityFormula() {
  return '=IFERROR(INDEX(QUERY({Atletas!Z2:Z;Equipes!AA2:AA;Quadras!AB2:AB;Comunidade!AB2:AB},"select Col1, count(Col1) where Col1 is not null group by Col1 order by count(Col1) desc limit 1 label count(Col1) \'\'",0),1,1),"")';
}

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
