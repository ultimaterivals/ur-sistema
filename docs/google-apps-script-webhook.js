/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Webhook MVP para captação do Ultimate Rivals.
 *
 * Fluxo:
 * Site UR -> formulário próprio -> Google Apps Script -> Google Sheets
 *
 * Como usar:
 * 1. Cole este arquivo no editor do Apps Script.
 * 2. Substitua SPREADSHEET_ID pelo ID da planilha.
 * 3. Publique como Web App com acesso para "Qualquer pessoa".
 */

const SPREADSHEET_ID = "COLE_AQUI_O_ID_DA_PLANILHA";

const SUCCESS_MESSAGE =
  "Cadastro recebido. A equipe Ultimate Rivals fará a validação operacional antes de liberar próximos passos.";

const PROFILE_CONFIG = {
  athlete: {
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
      "Ponto de melhoria como atleta",
      "Autorizou contato?",
      "Origem do lead",
      "UTM/origem da campanha",
      "Status",
      "Prioridade",
      "Responsável pelo contato",
      "Data do primeiro contato",
      "Último contato",
      "Próximo contato",
      "Observações",
      "Próximo passo",
    ],
    fields: {
      "Nome completo": "nomeCompleto",
      WhatsApp: "whatsapp",
      Instagram: "instagram",
      Cidade: "cidade",
      "Polo de interesse": "poloInteresse",
      "Modalidade principal": "modalidadePrincipal",
      "Nível percebido": "nivelPercebido",
      "Tem equipe?": "temEquipe",
      "Objetivo principal": "objetivoPrincipal",
      "Interesse UR Play": "interesseUrPlay",
      "Interesse Torneios": "interesseTorneios",
      "Interesse CT UR": "interesseCtUr",
      Disponibilidade: "disponibilidade",
      "Ponto de melhoria como atleta": "pontoMelhoria",
      "Autorizou contato?": "autorizacaoContato",
    },
  },
  team: {
    sheetName: "Equipes",
    prefix: "EQP",
    headers: [
      "ID do lead",
      "Data de entrada",
      "Nome da equipe",
      "Responsável/capitão",
      "WhatsApp",
      "Instagram da equipe",
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
      "História/objetivo da equipe",
      "Autorizou contato?",
      "Origem do lead",
      "UTM/origem da campanha",
      "Status",
      "Prioridade",
      "Responsável pelo contato",
      "Data do primeiro contato",
      "Último contato",
      "Próximo contato",
      "Observações",
      "Próximo passo",
    ],
    fields: {
      "Nome da equipe": "nomeEquipe",
      "Responsável/capitão": "responsavel",
      WhatsApp: "whatsapp",
      "Instagram da equipe": "instagramEquipe",
      "Cidade/polo": "cidadePolo",
      Modalidade: "modalidade",
      "Elenco definido?": "elencoDefinido",
      "Quantidade de atletas": "quantidadeAtletas",
      "Nível percebido": "nivelPercebido",
      "Já participa de torneios?": "participaTorneios",
      "Objetivo principal": "objetivoPrincipal",
      "Interesse UR Play": "interesseUrPlay",
      "Interesse torneios oficiais": "interesseTorneiosOficiais",
      Disponibilidade: "disponibilidade",
      "História/objetivo da equipe": "historiaObjetivo",
      "Autorizou contato?": "autorizacaoContato",
    },
  },
  sponsor: {
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
      "Cidade/região",
      "Público-alvo desejado",
      "Objetivo comercial",
      "Tipo de ativação de interesse",
      "Interesse em oferecer benefícios reais?",
      "Faixa de investimento",
      "Expectativa com o UR",
      "Autorizou contato?",
      "Origem do lead",
      "UTM/origem da campanha",
      "Status",
      "Prioridade",
      "Responsável pelo contato",
      "Data do primeiro contato",
      "Último contato",
      "Próximo contato",
      "Observações",
      "Próximo passo",
    ],
    fields: {
      "Empresa/marca": "empresaMarca",
      Responsável: "responsavel",
      "Cargo/função": "cargoFuncao",
      WhatsApp: "whatsapp",
      "E-mail comercial": "emailComercial",
      "Instagram/site": "instagramSite",
      Segmento: "segmento",
      "Cidade/região": "cidadeRegiao",
      "Público-alvo desejado": "publicoAlvo",
      "Objetivo comercial": "objetivoComercial",
      "Tipo de ativação de interesse": "tipoAtivacao",
      "Interesse em oferecer benefícios reais?": "ofereceBeneficios",
      "Faixa de investimento": "faixaInvestimento",
      "Expectativa com o UR": "expectativaUr",
      "Autorizou contato?": "autorizacaoContato",
    },
  },
  court: {
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
      "Quantidade de quadras/espaços",
      "Possui iluminação?",
      "Possui bar/convivência?",
      "Estrutura para público",
      "Já realiza eventos?",
      "Tipo de parceria desejada",
      "Disponibilidade",
      "Interesse em patrocinadores?",
      "Principais desafios",
      "Motivo de interesse no UR",
      "Autorizou contato?",
      "Origem do lead",
      "UTM/origem da campanha",
      "Status",
      "Prioridade",
      "Responsável pelo contato",
      "Data do primeiro contato",
      "Último contato",
      "Próximo contato",
      "Observações",
      "Próximo passo",
    ],
    fields: {
      "Nome da quadra/arena": "nomeQuadra",
      Responsável: "responsavel",
      WhatsApp: "whatsapp",
      Instagram: "instagram",
      "Endereço/região": "enderecoRegiao",
      Cidade: "cidade",
      "Modalidades comportadas": "modalidadesComportadas",
      "Quantidade de quadras/espaços": "quantidadeEspacos",
      "Possui iluminação?": "possuiIluminacao",
      "Possui bar/convivência?": "possuiBar",
      "Estrutura para público": "estruturaPublico",
      "Já realiza eventos?": "realizaEventos",
      "Tipo de parceria desejada": "tipoParceria",
      Disponibilidade: "disponibilidade",
      "Interesse em patrocinadores?": "interessePatrocinadores",
      "Principais desafios": "principaisDesafios",
      "Motivo de interesse no UR": "motivoInteresse",
      "Autorizou contato?": "autorizacaoContato",
    },
  },
  community: {
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
      "Autorizou WhatsApp?",
      "Sugestão/observação",
      "Origem do lead",
      "UTM/origem da campanha",
      "Status",
      "Prioridade",
      "Responsável pelo contato",
      "Data do primeiro contato",
      "Último contato",
      "Próximo contato",
      "Observações",
      "Próximo passo",
    ],
    fields: {
      "Nome completo": "nomeCompleto",
      WhatsApp: "whatsapp",
      Instagram: "instagram",
      Cidade: "cidade",
      "Interesse principal": "interessePrincipal",
      Perfil: "perfilComunidade",
      "Modalidades de interesse": "modalidadesInteresse",
      "Avisos desejados": "avisosDesejados",
      "Autorizou WhatsApp?": "autorizacaoContato",
      "Sugestão/observação": "sugestaoObservacao",
    },
  },
};

function doPost(e) {
  try {
    const payload = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    const config = PROFILE_CONFIG[payload.profile];

    if (!config) {
      return jsonResponse({
        success: false,
        message: "Perfil inválido. Use athlete, team, sponsor, court ou community.",
      });
    }

    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = getOrCreateSheet(spreadsheet, config.sheetName);
    ensureHeaders(sheet, config.headers);

    const leadId = buildLeadId(sheet, config.prefix);
    const row = config.headers.map((header) => resolveHeaderValue(header, payload, config, leadId));

    sheet.appendRow(row);

    return jsonResponse({
      success: true,
      id: leadId,
      profile: payload.profile,
      message: SUCCESS_MESSAGE,
    });
  } catch (error) {
    return jsonResponse({
      success: false,
      message: error && error.message ? error.message : "Erro ao processar cadastro.",
    });
  }
}

function doOptions() {
  return jsonResponse({ success: true });
}

function getOrCreateSheet(spreadsheet, sheetName) {
  return spreadsheet.getSheetByName(sheetName) || spreadsheet.insertSheet(sheetName);
}

function ensureHeaders(sheet, headers) {
  if (sheet.getLastRow() > 0) {
    return;
  }

  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.setFrozenRows(1);
}

function buildLeadId(sheet, prefix) {
  const dataRows = Math.max(sheet.getLastRow() - 1, 0);
  const nextNumber = String(dataRows + 1).padStart(4, "0");
  return `${prefix}-${nextNumber}`;
}

function resolveHeaderValue(header, payload, config, leadId) {
  const data = payload.data || {};
  const fieldName = config.fields[header];

  if (fieldName) {
    return data[fieldName] || "";
  }

  const automaticValues = {
    "ID do lead": leadId,
    "Data de entrada": payload.createdAt || new Date().toISOString(),
    "Origem do lead": payload.sourceLabel || "Site / Cadastro UR",
    "UTM/origem da campanha": formatUtm(payload),
    Status: payload.statusInicial || "Novo",
    Prioridade: payload.prioridadeInicial || "A definir",
    "Responsável pelo contato": payload.responsavelInicial || "Operação UR",
    "Próximo passo": payload.proximoPassoInicial || "Triagem inicial",
    Observações: "Lead captado pelo formulário próprio do site.",
  };

  return automaticValues[header] || "";
}

function formatUtm(payload) {
  const parts = [
    payload.utm_source && `utm_source=${payload.utm_source}`,
    payload.utm_medium && `utm_medium=${payload.utm_medium}`,
    payload.utm_campaign && `utm_campaign=${payload.utm_campaign}`,
    payload.utm_content && `utm_content=${payload.utm_content}`,
  ].filter(Boolean);

  return parts.length ? parts.join(" | ") : "";
}

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
