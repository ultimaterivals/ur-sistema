/* eslint-disable */
/**
 * ============================================================
 * Ultimate Rivals — Google Apps Script Webhook v2
 * ============================================================
 *
 * Fluxo:
 *   Site UR → formulário próprio → Apps Script v2 → Google Sheets nativo
 *
 * Como usar (passo a passo completo em docs/captacao-google-sheets.md):
 *   1. Crie uma planilha Google Sheets NATIVA (não importada de .xlsx):
 *      "Leads Ultimate Rivals — Captação MVP v2"
 *   2. Copie e cole este arquivo no editor do Apps Script (Extensões > Apps Script).
 *   3. Substitua SPREADSHEET_ID abaixo pelo ID da sua planilha.
 *   4. Salve (Ctrl+S).
 *   5. Execute setupSheets() para criar as 5 abas com cabeçalhos.
 *   6. Execute testWriteAtleta() para confirmar que grava uma linha real.
 *   7. Publique como Web App:
 *      Implantar > Nova implantação > Tipo: Web App
 *      Executar como: Eu | Quem tem acesso: Qualquer pessoa
 *   8. Copie a URL /exec e configure NEXT_PUBLIC_GOOGLE_SCRIPT_URL na Vercel.
 *   9. Reimplante sempre que alterar o script.
 *
 * Perfis aceitos (português, conforme enviado pelo site):
 *   atleta | equipe | patrocinador | quadra | comunidade
 *
 * Formato de envio do site:
 *   application/x-www-form-urlencoded (sem preflight CORS)
 *   Campos no nível raiz: profile, source, createdAt, utm_*, statusInicial, ...
 *   Campos de dados no nível raiz também: nomeCompleto, whatsapp, cidade, ...
 *
 * ============================================================
 */

// ─── CONFIGURAÇÃO ───────────────────────────────────────────
// Substitua pelo ID da sua planilha Google Sheets nativa.
// O ID aparece na URL: docs.google.com/spreadsheets/d/SEU_ID_AQUI/edit
var SPREADSHEET_ID = "COLE_AQUI_O_ID_DA_PLANILHA";

var SUCCESS_MESSAGE =
  "Cadastro recebido. A equipe Ultimate Rivals fará a validação operacional antes de liberar próximos passos.";

// ─── CONFIGURAÇÃO DAS ABAS ──────────────────────────────────

var PROFILE_CONFIG = {
  atleta: {
    sheetName: "Atletas",
    prefix: "ATL",
    headers: [
      "ID do lead",
      "Data de entrada",
      "Nome completo",
      "WhatsApp",
      "Instagram",
      "Cidade",
      "Polo de interesse",
      "Modalidade principal",
      "Nível percebido",
      "Tem equipe?",
      "Objetivo principal",
      "Interesse UR Play",
      "Interesse Torneios",
      "Interesse CT UR",
      "Disponibilidade",
      "Ponto de melhoria",
      "Autorizou contato?",
      "Origem",
      "UTMs",
      "Status",
      "Prioridade",
      "Responsável",
      "Data 1º contato",
      "Último contato",
      "Próximo contato",
      "Observações",
      "Próximo passo",
    ],
    fields: {
      "Nome completo": "nomeCompleto",
      "WhatsApp": "whatsapp",
      "Instagram": "instagram",
      "Cidade": "cidade",
      "Polo de interesse": "poloInteresse",
      "Modalidade principal": "modalidadePrincipal",
      "Nível percebido": "nivelPercebido",
      "Tem equipe?": "temEquipe",
      "Objetivo principal": "objetivoPrincipal",
      "Interesse UR Play": "interesseUrPlay",
      "Interesse Torneios": "interesseTorneios",
      "Interesse CT UR": "interesseCtUr",
      "Disponibilidade": "disponibilidade",
      "Ponto de melhoria": "pontoMelhoria",
      "Autorizou contato?": "autorizacaoContato",
    },
  },

  equipe: {
    sheetName: "Equipes",
    prefix: "EQP",
    headers: [
      "ID do lead",
      "Data de entrada",
      "Nome da equipe",
      "Responsável/capitão",
      "WhatsApp",
      "Instagram da equipe",
      "Cidade",
      "Cidade/polo",
      "Modalidade",
      "Elenco definido?",
      "Quantidade de atletas",
      "Nível percebido",
      "Já participa de torneios?",
      "Objetivo principal",
      "Interesse UR Play",
      "Interesse torneios oficiais",
      "Disponibilidade",
      "História/objetivo",
      "Autorizou contato?",
      "Origem",
      "UTMs",
      "Status",
      "Prioridade",
      "Responsável",
      "Data 1º contato",
      "Último contato",
      "Próximo contato",
      "Observações",
      "Próximo passo",
    ],
    fields: {
      "Nome da equipe": "nomeEquipe",
      "Responsável/capitão": "responsavel",
      "WhatsApp": "whatsapp",
      "Instagram da equipe": "instagramEquipe",
      "Cidade": "cidade",
      "Cidade/polo": "cidadePolo",
      "Modalidade": "modalidade",
      "Elenco definido?": "elencoDefinido",
      "Quantidade de atletas": "quantidadeAtletas",
      "Nível percebido": "nivelPercebido",
      "Já participa de torneios?": "participaTorneios",
      "Objetivo principal": "objetivoPrincipal",
      "Interesse UR Play": "interesseUrPlay",
      "Interesse torneios oficiais": "interesseTorneiosOficiais",
      "Disponibilidade": "disponibilidade",
      "História/objetivo": "historiaObjetivo",
      "Autorizou contato?": "autorizacaoContato",
    },
  },

  patrocinador: {
    sheetName: "Patrocinadores",
    prefix: "PAT",
    headers: [
      "ID do lead",
      "Data de entrada",
      "Empresa/marca",
      "Responsável",
      "Cargo/função",
      "WhatsApp",
      "E-mail comercial",
      "Instagram/site",
      "Segmento",
      "Cidade",
      "Cidade/região",
      "Público-alvo",
      "Objetivo comercial",
      "Tipo de ativação",
      "Oferece benefícios?",
      "Faixa de investimento",
      "Expectativa com o UR",
      "Autorizou contato?",
      "Origem",
      "UTMs",
      "Status",
      "Prioridade",
      "Responsável",
      "Data 1º contato",
      "Último contato",
      "Próximo contato",
      "Observações",
      "Próximo passo",
    ],
    fields: {
      "Empresa/marca": "empresaMarca",
      "Responsável": "responsavel",
      "Cargo/função": "cargoFuncao",
      "WhatsApp": "whatsapp",
      "E-mail comercial": "emailComercial",
      "Instagram/site": "instagramSite",
      "Segmento": "segmento",
      "Cidade": "cidade",
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
    headers: [
      "ID do lead",
      "Data de entrada",
      "Nome da quadra/arena",
      "Responsável",
      "WhatsApp",
      "Instagram",
      "Endereço/região",
      "Cidade",
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
      "Origem",
      "UTMs",
      "Status",
      "Prioridade",
      "Responsável",
      "Data 1º contato",
      "Último contato",
      "Próximo contato",
      "Observações",
      "Próximo passo",
    ],
    fields: {
      "Nome da quadra/arena": "nomeQuadra",
      "Responsável": "responsavel",
      "WhatsApp": "whatsapp",
      "Instagram": "instagram",
      "Endereço/região": "enderecoRegiao",
      "Cidade": "cidade",
      "Modalidades comportadas": "modalidadesComportadas",
      "Quantidade de espaços": "quantidadeEspacos",
      "Possui iluminação?": "possuiIluminacao",
      "Possui bar/convivência?": "possuiBar",
      "Estrutura para público": "estruturaPublico",
      "Já realiza eventos?": "realizaEventos",
      "Tipo de parceria": "tipoParceria",
      "Disponibilidade": "disponibilidade",
      "Interesse em patrocinadores?": "interessePatrocinadores",
      "Principais desafios": "principaisDesafios",
      "Motivo de interesse no UR": "motivoInteresse",
      "Autorizou contato?": "autorizacaoContato",
    },
  },

  comunidade: {
    sheetName: "Comunidade",
    prefix: "COM",
    headers: [
      "ID do lead",
      "Data de entrada",
      "Nome completo",
      "WhatsApp",
      "Instagram",
      "Cidade",
      "Interesse principal",
      "Perfil",
      "Modalidades de interesse",
      "Avisos desejados",
      "Autorizou contato?",
      "Sugestão/observação",
      "Origem",
      "UTMs",
      "Status",
      "Prioridade",
      "Responsável",
      "Data 1º contato",
      "Último contato",
      "Próximo contato",
      "Observações",
      "Próximo passo",
    ],
    fields: {
      "Nome completo": "nomeCompleto",
      "WhatsApp": "whatsapp",
      "Instagram": "instagram",
      "Cidade": "cidade",
      "Interesse principal": "interessePrincipal",
      "Perfil": "perfilComunidade",
      "Modalidades de interesse": "modalidadesInteresse",
      "Avisos desejados": "avisosDesejados",
      "Autorizou contato?": "autorizacaoContato",
      "Sugestão/observação": "sugestaoObservacao",
    },
  },
};

// ─── HANDLERS HTTP ───────────────────────────────────────────

/**
 * GET — health check. Confirma que o script está publicado e ativo.
 * Teste: abra a URL /exec no browser. Deve retornar {"ok":true,...}
 */
function doGet() {
  return jsonResponse({ ok: true, message: "Webhook Ultimate Rivals v2 ativo.", ts: new Date().toISOString() });
}

/**
 * POST — recebe o lead do site e grava na aba correta.
 *
 * Aceita dois formatos:
 *   1. application/x-www-form-urlencoded → lê e.parameter (campos no nível raiz)
 *   2. text/plain ou application/json → faz JSON.parse de e.postData.contents
 */
function doPost(e) {
  try {
    Logger.log("=== doPost iniciado ===");
    Logger.log("postData type: " + (e && e.postData ? e.postData.type : "sem postData"));

    var payload = parsePayload(e);
    Logger.log("payload.profile: " + payload.profile);
    Logger.log("payload completo: " + JSON.stringify(payload));

    // Validar perfil
    var config = PROFILE_CONFIG[payload.profile];
    if (!config) {
      Logger.log("ERRO: perfil inválido — " + payload.profile);
      return jsonResponse({
        ok: false,
        message:
          "Perfil inválido: '" +
          payload.profile +
          "'. Use atleta, equipe, patrocinador, quadra ou comunidade.",
      });
    }

    // Honeypot: rejeitar silenciosamente se o campo website estiver preenchido
    if (payload.website && String(payload.website).trim() !== "") {
      Logger.log("Honeypot ativo — descartando lead.");
      return jsonResponse({ ok: true, message: SUCCESS_MESSAGE });
    }

    // Abrir planilha e aba
    var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = getOrCreateSheet(spreadsheet, config.sheetName);
    ensureHeaders(sheet, config.headers);

    // Gerar ID e gravar linha
    var leadId = buildLeadId(sheet, config.prefix);
    var row = config.headers.map(function (header) {
      return resolveValue(header, payload, config, leadId);
    });

    sheet.appendRow(row);
    Logger.log("Lead gravado com ID: " + leadId);

    return jsonResponse({ ok: true, leadId: leadId, profile: payload.profile, message: SUCCESS_MESSAGE });
  } catch (err) {
    Logger.log("ERRO CRÍTICO em doPost: " + (err ? err.toString() : "desconhecido"));
    return jsonResponse({
      ok: false,
      message: "Erro interno ao processar o cadastro: " + (err ? err.message : "desconhecido"),
    });
  }
}

// ─── SETUP ───────────────────────────────────────────────────

/**
 * setupSheets() — cria as 5 abas com cabeçalhos.
 *
 * Execute uma vez após colar o script numa planilha nativa nova.
 * Não apaga dados existentes; só cria headers se a aba estiver vazia.
 */
function setupSheets() {
  Logger.log("=== setupSheets iniciado ===");
  var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);

  Object.keys(PROFILE_CONFIG).forEach(function (profile) {
    var config = PROFILE_CONFIG[profile];
    Logger.log("Criando/verificando aba: " + config.sheetName);

    var sheet = getOrCreateSheet(spreadsheet, config.sheetName);
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, config.headers.length).setValues([config.headers]);
      sheet.setFrozenRows(1);
      // Formatação básica do cabeçalho
      var headerRange = sheet.getRange(1, 1, 1, config.headers.length);
      headerRange.setBackground("#1a1a2e");
      headerRange.setFontColor("#ffd84d");
      headerRange.setFontWeight("bold");
      Logger.log("  Cabeçalhos criados em " + config.sheetName + " (" + config.headers.length + " colunas)");
    } else {
      Logger.log("  Aba " + config.sheetName + " já tem dados — cabeçalhos não sobrescritos.");
    }
  });

  Logger.log("=== setupSheets concluído ===");
}

// ─── FUNÇÕES DE TESTE ─────────────────────────────────────────
// Execute manualmente pelo editor do Apps Script para confirmar que a gravação funciona.
// Cada função grava UMA linha real na aba correspondente.

function testWriteAtleta() {
  Logger.log("=== testWriteAtleta ===");
  var result = doPost({
    parameter: {
      profile: "atleta",
      source: "teste",
      sourceLabel: "Teste Manual",
      page: "/teste",
      createdAt: new Date().toISOString(),
      utm_source: "teste",
      utm_medium: "script",
      utm_campaign: "debug",
      utm_content: "",
      statusInicial: "Novo",
      prioridadeInicial: "A definir",
      responsavelInicial: "Operação UR",
      proximoPassoInicial: "Triagem inicial",
      nomeCompleto: "TESTE Atleta v2",
      whatsapp: "31900000001",
      instagram: "@teste_atleta",
      cidade: "Belo Horizonte",
      poloInteresse: "BH",
      modalidadePrincipal: "Vôlei de praia",
      nivelPercebido: "Intermediário",
      temEquipe: "Não",
      objetivoPrincipal: "Entrar no ranking",
      interesseUrPlay: "Sim",
      interesseTorneios: "Sim",
      interesseCtUr: "Talvez",
      disponibilidade: "Fins de semana",
      pontoMelhoria: "Saque",
      autorizacaoContato: "Sim",
    },
  });
  Logger.log("Resultado: " + (result ? result.getContent() : "sem resposta"));
}

function testWriteEquipe() {
  Logger.log("=== testWriteEquipe ===");
  var result = doPost({
    parameter: {
      profile: "equipe",
      source: "teste",
      sourceLabel: "Teste Manual",
      page: "/teste",
      createdAt: new Date().toISOString(),
      utm_source: "teste",
      utm_medium: "script",
      utm_campaign: "debug",
      utm_content: "",
      statusInicial: "Novo",
      prioridadeInicial: "A definir",
      responsavelInicial: "Operação UR",
      proximoPassoInicial: "Triagem inicial",
      nomeEquipe: "TESTE Equipe v2",
      responsavel: "TESTE Capitão",
      whatsapp: "31900000002",
      instagramEquipe: "@testeequipe",
      cidade: "Contagem",
      cidadePolo: "Contagem",
      modalidade: "Futset",
      elencoDefinido: "Sim, em ajuste",
      quantidadeAtletas: "6",
      nivelPercebido: "Competitivo",
      participaTorneios: "Sim",
      objetivoPrincipal: "Ranking coletivo",
      interesseUrPlay: "Sim",
      interesseTorneiosOficiais: "Sim",
      disponibilidade: "Sábados",
      historiaObjetivo: "Equipe formada em 2025",
      autorizacaoContato: "Sim",
    },
  });
  Logger.log("Resultado: " + (result ? result.getContent() : "sem resposta"));
}

function testWritePatrocinador() {
  Logger.log("=== testWritePatrocinador ===");
  var result = doPost({
    parameter: {
      profile: "patrocinador",
      source: "teste",
      sourceLabel: "Teste Manual",
      page: "/teste",
      createdAt: new Date().toISOString(),
      utm_source: "teste",
      utm_medium: "script",
      utm_campaign: "debug",
      utm_content: "",
      statusInicial: "Novo",
      prioridadeInicial: "A definir",
      responsavelInicial: "Operação UR",
      proximoPassoInicial: "Triagem inicial",
      empresaMarca: "TESTE Marca v2",
      responsavel: "TESTE Responsável",
      cargoFuncao: "Gerente",
      whatsapp: "31900000003",
      emailComercial: "teste@marca.com",
      instagramSite: "@testemarca",
      segmento: "Esporte e performance",
      cidade: "Belo Horizonte",
      cidadeRegiao: "BH / Grande BH",
      publicoAlvo: "Atletas",
      objetivoComercial: "Visibilidade",
      tipoAtivacao: "Eventos",
      ofereceBeneficios: "Sim",
      faixaInvestimento: "A definir",
      expectativaUr: "Visibilidade regional e conexão com atletas",
      autorizacaoContato: "Sim",
    },
  });
  Logger.log("Resultado: " + (result ? result.getContent() : "sem resposta"));
}

function testWriteQuadra() {
  Logger.log("=== testWriteQuadra ===");
  var result = doPost({
    parameter: {
      profile: "quadra",
      source: "teste",
      sourceLabel: "Teste Manual",
      page: "/teste",
      createdAt: new Date().toISOString(),
      utm_source: "teste",
      utm_medium: "script",
      utm_campaign: "debug",
      utm_content: "",
      statusInicial: "Novo",
      prioridadeInicial: "A definir",
      responsavelInicial: "Operação UR",
      proximoPassoInicial: "Triagem inicial",
      nomeQuadra: "TESTE Arena v2",
      responsavel: "TESTE Dono",
      whatsapp: "31900000004",
      instagram: "@testearena",
      enderecoRegiao: "Av. Teste, 100 — Savassi",
      cidade: "Belo Horizonte",
      modalidadesComportadas: "Vôlei de praia",
      quantidadeEspacos: "4",
      possuiIluminacao: "Sim",
      possuiBar: "Sim",
      estruturaPublico: "Pouca estrutura",
      realizaEventos: "Sim",
      tipoParceria: "Receber UR Play",
      disponibilidade: "Fins de semana",
      interessePatrocinadores: "Sim",
      principaisDesafios: "Ocupação durante a semana",
      motivoInteresse: "Expandir público e agenda",
      autorizacaoContato: "Sim",
    },
  });
  Logger.log("Resultado: " + (result ? result.getContent() : "sem resposta"));
}

function testWriteComunidade() {
  Logger.log("=== testWriteComunidade ===");
  var result = doPost({
    parameter: {
      profile: "comunidade",
      source: "teste",
      sourceLabel: "Teste Manual",
      page: "/teste",
      createdAt: new Date().toISOString(),
      utm_source: "teste",
      utm_medium: "script",
      utm_campaign: "debug",
      utm_content: "",
      statusInicial: "Novo",
      prioridadeInicial: "A definir",
      responsavelInicial: "Operação UR",
      proximoPassoInicial: "Triagem inicial",
      nomeCompleto: "TESTE Comunidade v2",
      whatsapp: "31900000005",
      instagram: "@testecomunidade",
      cidade: "Betim",
      interessePrincipal: "Acompanhar eventos",
      perfilComunidade: "Torcedor/fã",
      modalidadesInteresse: "Vôlei de praia",
      avisosDesejados: "Eventos",
      autorizacaoContato: "Sim",
      sugestaoObservacao: "Linha de teste automatizado v2",
    },
  });
  Logger.log("Resultado: " + (result ? result.getContent() : "sem resposta"));
}

// ─── HELPERS ─────────────────────────────────────────────────

/**
 * Parseia o payload de e.parameter (URLSearchParams) ou e.postData.contents (JSON).
 */
function parsePayload(e) {
  // Prioridade 1: URLSearchParams via e.parameter (enviado pelo site com no-cors)
  if (e && e.parameter && e.parameter.profile) {
    Logger.log("Lendo payload de e.parameter (URLSearchParams)");
    return e.parameter;
  }

  // Prioridade 2: e.parameters (array) — flatten para valor único
  if (e && e.parameters && e.parameters.profile) {
    Logger.log("Lendo payload de e.parameters (arrays) — achatando");
    var flat = {};
    Object.keys(e.parameters).forEach(function (key) {
      var val = e.parameters[key];
      flat[key] = Array.isArray(val) ? val[0] : val;
    });
    return flat;
  }

  // Prioridade 3: JSON em e.postData.contents (text/plain)
  if (e && e.postData && e.postData.contents) {
    Logger.log("Lendo payload de e.postData.contents (JSON)");
    var parsed = JSON.parse(e.postData.contents);

    // Suporte ao formato antigo: { profile, data: { campos } }
    if (parsed.data && typeof parsed.data === "object") {
      var flat2 = {};
      Object.keys(parsed).forEach(function (k) {
        if (k !== "data") flat2[k] = parsed[k];
      });
      Object.keys(parsed.data).forEach(function (k) {
        flat2[k] = parsed.data[k];
      });
      return flat2;
    }

    return parsed;
  }

  Logger.log("AVISO: nenhum dado encontrado em e.parameter ou e.postData");
  return {};
}

function getOrCreateSheet(spreadsheet, sheetName) {
  return spreadsheet.getSheetByName(sheetName) || spreadsheet.insertSheet(sheetName);
}

function ensureHeaders(sheet, headers) {
  if (sheet.getLastRow() > 0) {
    return; // Já tem dados — não sobrescreve
  }
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.setFrozenRows(1);
}

function buildLeadId(sheet, prefix) {
  // Conta linhas de dados (exclui header)
  var dataRows = Math.max(sheet.getLastRow() - 1, 0);
  var nextNumber = String(dataRows + 1).padStart(4, "0");
  return prefix + "-" + nextNumber;
}

function resolveValue(header, payload, config, leadId) {
  // 1. Campo de dado mapeado
  var fieldName = config.fields[header];
  if (fieldName) {
    return payload[fieldName] || "";
  }

  // 2. Valores automáticos
  var utmParts = [
    payload.utm_source && "utm_source=" + payload.utm_source,
    payload.utm_medium && "utm_medium=" + payload.utm_medium,
    payload.utm_campaign && "utm_campaign=" + payload.utm_campaign,
    payload.utm_content && "utm_content=" + payload.utm_content,
  ].filter(Boolean);
  var utmString = utmParts.length ? utmParts.join(" | ") : "";

  var automaticValues = {
    "ID do lead": leadId,
    "Data de entrada": payload.createdAt || new Date().toISOString(),
    "Origem": payload.sourceLabel || "Site / Cadastro UR",
    "UTMs": utmString,
    "Status": payload.statusInicial || "Novo",
    "Prioridade": payload.prioridadeInicial || "A definir",
    "Responsável": payload.responsavelInicial || "Operação UR",
    "Próximo passo": payload.proximoPassoInicial || "Triagem inicial",
    "Observações": "Lead captado pelo formulário próprio do site.",
    "Data 1º contato": "",
    "Último contato": "",
    "Próximo contato": "",
  };

  return automaticValues[header] !== undefined ? automaticValues[header] : "";
}

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
