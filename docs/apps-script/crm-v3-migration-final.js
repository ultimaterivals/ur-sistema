/* eslint-disable */

var CRM_V3_LEAD_SHEETS = ["Atletas", "Equipes", "Patrocinadores", "Quadras", "Comunidade"];

var CRM_V3_REQUIRED_SHEETS = [
  "Dashboard",
  "Atletas",
  "Equipes",
  "Patrocinadores",
  "Quadras",
  "Comunidade",
  "Tarefas de Contato",
  "ConfiguraÃ§Ãµes",
  "Origem dos Leads",
  "Board Funil",
  "Board Contatos",
  "Board Prioridades",
  "Board Canais e Polos",
  "Resumo Semanal",
  "Guia Operacional",
  "VÃ­nculos",
];

var CRM_V3_OPERATIONAL_HEADERS = [
  "Semana de entrada",
  "Dias desde entrada",
  "Dias sem contato",
  "SLA de contato",
  "PendÃªncia operacional",
  "Link WhatsApp",
  "Flag de teste",
];

var CRM_V3_POLOS = ["Belo Horizonte", "Contagem", "Betim", "Outro", "Polo em formaÃ§Ã£o"];

var CRM_V3_MODALIDADES = ["VÃ´lei de praia", "FutevÃ´lei", "Futset", "Futebol", "Beach tennis", "Outra"];

function inspectCrmV3LeadByName(sheetName, name) {
  try {
    var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = spreadsheet.getSheetByName(sheetName);
    if (!sheet) {
      return { ok: false, message: "Aba não encontrada.", sheet: sheetName };
    }

    var rowNumber = findCrmV3RowByName(sheet, name);
    if (!rowNumber) {
      return { ok: false, message: "Lead não encontrado.", sheet: sheetName, name: name };
    }

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getDisplayValues()[0];
    var values = sheet.getRange(rowNumber, 1, 1, sheet.getLastColumn()).getDisplayValues()[0];
    var pairs = headers.map(function (header, index) {
      return { column: index + 1, header: header, normalized: normalizeHeader(header), value: values[index] };
    });

    return {
      ok: true,
      sheet: sheetName,
      name: name,
      row: rowNumber,
      keyValues: {
        id: getCrmV3CellDisplayValue(sheet, rowNumber, "ID do lead"),
        status: getCrmV3CellDisplayValue(sheet, rowNumber, "Status"),
        prioridade: getCrmV3CellDisplayValue(sheet, rowNumber, "Prioridade"),
        responsavel: getCrmV3CellDisplayValue(sheet, rowNumber, "Responsável"),
        proximoPasso: getCrmV3CellDisplayValue(sheet, rowNumber, "Próximo passo"),
      },
      pairs: pairs,
    };
  } catch (err) {
    return { ok: false, message: "Falha ao inspecionar lead.", error: err ? err.toString() : "Erro desconhecido" };
  }
}

function repairCrmV3Sheet(sheetName) {
  try {
    var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = spreadsheet.getSheetByName(sheetName);
    if (!sheet || CRM_V3_LEAD_SHEETS.indexOf(sheetName) === -1) {
      return {
        ok: false,
        message: "Aba invÃ¡lida para reparo.",
        sheet: sheetName,
      };
    }

    ensureOperationalHeaders(sheet);
    applyOperationalFormulasForExistingRowsFast(sheet);
    normalizeCrmV3OperationalResponsibleFast(sheet);
    SpreadsheetApp.flush();

    return {
      ok: true,
      message: "Aba reparada.",
      sheet: sheetName,
      rows: Math.max(sheet.getLastRow() - 1, 0),
      formulaErrors: countCrmV3FormulaErrorsFast(sheet),
    };
  } catch (err) {
    return {
      ok: false,
      message: "Falha ao reparar aba CRM v3.",
      sheet: sheetName,
      error: err ? err.toString() : "Erro desconhecido",
    };
  }
}

function normalizeNewLeadCoreValues(sheet, rowNumber, payload, config, now) {
  var name = payload[config.nameField] || payload.nomeCompleto || payload.responsavel || "";
  var city = payload[config.cityField] || payload.cidade || payload.cidadePolo || payload.cidadeRegiao || "";
  var polo = payload[config.poloField] || payload.poloInteresse || payload.cidadePolo || payload.cidadeRegiao || "";

  setCrmV3CellByNormalizedHeader(sheet, rowNumber, "datadeentrada", payload.createdAt || now);
  setCrmV3CellByNormalizedHeader(sheet, rowNumber, "perfil", config.profileLabel);
  setCrmV3CellByNormalizedHeader(sheet, rowNumber, "nome", name);
  setCrmV3CellByNormalizedHeader(sheet, rowNumber, "whatsapp", payload.whatsapp || "");
  setCrmV3CellByNormalizedHeader(sheet, rowNumber, "cidade", city);
  setCrmV3CellByNormalizedHeader(sheet, rowNumber, "polodeinteresse", polo);
  setCrmV3CellByNormalizedHeader(sheet, rowNumber, "origemdolead", payload.sourceLabel || "Site / Cadastro UR");
  setCrmV3CellByNormalizedHeader(sheet, rowNumber, "utmsource", payload.utm_source || "");
  setCrmV3CellByNormalizedHeader(sheet, rowNumber, "utmmedium", payload.utm_medium || "");
  setCrmV3CellByNormalizedHeader(sheet, rowNumber, "utmcampaign", payload.utm_campaign || "");
  setCrmV3CellByNormalizedHeader(sheet, rowNumber, "utmcontent", payload.utm_content || "");
  setCrmV3CellByNormalizedHeader(sheet, rowNumber, "status", payload.statusInicial || "Novo");
  setCrmV3CellByNormalizedHeader(sheet, rowNumber, "prioridade", payload.prioridadeInicial || "A definir");
  setCrmV3CellByNormalizedHeader(sheet, rowNumber, "responsavel", payload.responsavelInicial || "Operação UR");
  setCrmV3CellByNormalizedHeader(sheet, rowNumber, "proximopasso", payload.proximoPassoInicial || "Triagem inicial");
  setCrmV3CellByNormalizedHeader(sheet, rowNumber, "tentativasdecontato", 0);
  setCrmV3CellByNormalizedHeader(sheet, rowNumber, "observacoes", "Lead captado pelo formulário próprio do site.");
  setCrmV3CellByNormalizedHeader(sheet, rowNumber, "datadeatualizacao", now);
}

function setCrmV3CellByNormalizedHeader(sheet, rowNumber, normalizedHeader, value) {
  var lastColumn = Math.max(sheet.getLastColumn(), 1);
  var headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];

  for (var i = 0; i < headers.length; i += 1) {
    if (normalizeHeader(headers[i]) === normalizedHeader) {
      safeSetCrmV3CellValue(sheet.getRange(rowNumber, i + 1), value);
    }
  }
}

function safeSetCrmV3CellValue(range, value) {
  try {
    range.setValue(value);
  } catch (err) {
    range.clearDataValidations();
    range.setValue(value);
  }
}

function repairCrmV3Formulas() {
  try {
    var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    var leadSummary = [];

    Object.keys(PROFILE_CONFIG).forEach(function (profile) {
      var config = PROFILE_CONFIG[profile];
      var sheet = getOrCreateSheet(spreadsheet, config.sheetName);
      ensureOperationalHeaders(sheet);
      applyOperationalFormulasForExistingRows(sheet);
      normalizeCrmV3OperationalResponsible(sheet);
      leadSummary.push({
        sheet: config.sheetName,
        formulaErrors: countCrmV3FormulaErrors(sheet),
      });
    });

    setupCrmV3DashboardSheet(spreadsheet);
    setupCrmV3Boards(spreadsheet);
    applyCrmV3TabColors(spreadsheet);
    cleanupCrmV3ScratchSheet(spreadsheet);
    SpreadsheetApp.flush();

    return {
      ok: leadSummary.every(function (item) {
        return item.formulaErrors === 0;
      }),
      message: "FÃ³rmulas e responsÃ¡veis operacionais revisados.",
      leadSheets: leadSummary,
    };
  } catch (err) {
    return {
      ok: false,
      message: "Falha ao reparar fÃ³rmulas CRM v3.",
      error: err ? err.toString() : "Erro desconhecido",
    };
  }
}

function testCrmV3FormulaLocale() {
  try {
    var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = getOrCreateSheet(spreadsheet, "PÃ¡gina1");
    sheet.getRange("A1:C1").clearContent();
    sheet.getRange("A1").setFormula('=IF(1=1,"OK_COMMA","NO")');
    sheet.getRange("B1").setFormula('=IF(1=1;"OK_SEMICOLON";"NO")');
    sheet.getRange("C1").setFormula('=SE(1=1;"OK_PT";"NO")');
    SpreadsheetApp.flush();
    return {
      ok: true,
      locale: spreadsheet.getSpreadsheetLocale(),
      displays: sheet.getRange("A1:C1").getDisplayValues()[0],
      formulas: sheet.getRange("A1:C1").getFormulas()[0],
    };
  } catch (err) {
    return {
      ok: false,
      error: err ? err.toString() : "Erro desconhecido",
    };
  }
}

function finishCrmV3Boards() {
  try {
    var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    var results = [];
    var steps = [
      ["Board Funil", setupCrmV3BoardFunil],
      ["Board Contatos", setupCrmV3BoardContatos],
      ["Board Prioridades", setupCrmV3BoardPrioridades],
      ["Board Canais e Polos", setupCrmV3BoardCanaisPolos],
      ["Resumo Semanal", setupCrmV3ResumoSemanal],
      ["Guia Operacional", setupCrmV3GuiaOperacional],
      ["VÃ­nculos", setupCrmV3Vinculos],
    ];

    steps.forEach(function (step) {
      try {
        step[1](spreadsheet);
        results.push({ sheet: step[0], ok: true });
      } catch (err) {
        results.push({ sheet: step[0], ok: false, error: err ? err.toString() : "Erro desconhecido" });
      }
    });

    applyCrmV3TabColors(spreadsheet);
    SpreadsheetApp.flush();

    return {
      ok: results.every(function (result) {
        return result.ok;
      }),
      message: "Boards CRM v3 processados.",
      results: results,
    };
  } catch (err) {
    return {
      ok: false,
      message: "Falha ao finalizar boards CRM v3.",
      error: err ? err.toString() : "Erro desconhecido",
    };
  }
}

function inspectCrmV3() {
  try {
    var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheets = spreadsheet.getSheets().map(function (sheet) {
      var name = sheet.getName();
      var headerValues = sheet.getLastColumn() > 0 ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getDisplayValues()[0] : [];
      return {
        name: name,
        rows: sheet.getLastRow(),
        columns: sheet.getLastColumn(),
        hidden: sheet.isSheetHidden(),
        hasOperationalHeaders: CRM_V3_OPERATIONAL_HEADERS.every(function (header) {
          return headerValues.indexOf(header) !== -1;
        }),
      };
    });

    return {
      ok: true,
      title: spreadsheet.getName(),
      sheets: sheets,
      backupTabs: sheets.filter(function (sheet) {
        return sheet.name.indexOf("bkp_v3_") === 0;
      }).length,
      requiredMissing: CRM_V3_REQUIRED_SHEETS.filter(function (sheetName) {
        return !spreadsheet.getSheetByName(sheetName);
      }),
    };
  } catch (err) {
    return {
      ok: false,
      message: "Falha ao inspecionar CRM v3.",
      error: err ? err.toString() : "Erro desconhecido",
    };
  }
}

function migrateCrmOperationalV3() {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    var stamp = crmV3Timestamp();
    var backupSummary = createCrmV3BackupTabs(spreadsheet, stamp);
    var leadSummary = [];
    var archiveSummary = [];

    setupCrmV3ConfigSheet(spreadsheet);
    setupCrmV3DashboardSheet(spreadsheet);
    setupContactTasksSheet(spreadsheet);
    setupOriginsSheet(spreadsheet);

    Object.keys(PROFILE_CONFIG).forEach(function (profile) {
      var config = PROFILE_CONFIG[profile];
      var sheet = getOrCreateSheet(spreadsheet, config.sheetName);
      var headers = buildLeadHeaders(config);

      ensureHeaders(sheet, headers);
      ensureOperationalHeaders(sheet);
      applyBaseSheetFormatting(sheet);
      applyLeadValidations(sheet);
      applyCrmV3LeadValidations(sheet);
      applyOperationalFormulasForExistingRows(sheet);
      archiveSummary.push(archiveCrmV3TestRows(sheet));
      sheet.autoResizeColumns(1, Math.min(sheet.getLastColumn(), 32));

      leadSummary.push({
        sheet: config.sheetName,
        rows: Math.max(sheet.getLastRow() - 1, 0),
        columns: sheet.getLastColumn(),
      });
    });

    setupCrmV3Boards(spreadsheet);
    applyCrmV3TabColors(spreadsheet);
    SpreadsheetApp.flush();

    return {
      ok: true,
      message: "CRM operacional v3 migrado para a planilha oficial.",
      officialSpreadsheetId: SPREADSHEET_ID,
      backupTabs: backupSummary,
      leadSheets: leadSummary,
      archivedExistingTests: archiveSummary,
      requiredSheets: CRM_V3_REQUIRED_SHEETS,
      timestamp: stamp,
    };
  } catch (err) {
    return {
      ok: false,
      message: "Falha ao migrar CRM operacional v3.",
      error: err ? err.toString() : "Erro desconhecido",
    };
  } finally {
    lock.releaseLock();
  }
}

function createCrmV3BackupTabs(spreadsheet, stamp) {
  var copied = [];

  CRM_V3_REQUIRED_SHEETS.forEach(function (sheetName) {
    var source = spreadsheet.getSheetByName(sheetName);
    if (!source) {
      return;
    }

    var backupName = crmV3UniqueSheetName(spreadsheet, "bkp_v3_" + stamp + "_" + sheetName);
    var copy = source.copyTo(spreadsheet);
    copy.setName(backupName);
    copy.hideSheet();
    copied.push(backupName);
  });

  return copied;
}

function setupCrmV3ConfigSheet(spreadsheet) {
  var sheet = getOrCreateSheet(spreadsheet, "ConfiguraÃ§Ãµes");
  sheet.clear();

  var columns = [
    ["Status"].concat(STATUS_OPTIONS),
    ["Prioridade"].concat(PRIORITY_OPTIONS),
    ["Perfis"].concat(PROFILE_OPTIONS),
    ["ResponsÃ¡veis"].concat(RESPONSIBLE_OPTIONS),
    ["Origem do lead"].concat(ORIGIN_OPTIONS),
    ["Polos"].concat(CRM_V3_POLOS),
    ["Modalidades"].concat(CRM_V3_MODALIDADES),
    ["Tipos de contato"].concat(CONTACT_TYPE_OPTIONS),
    ["Status da tarefa"].concat(TASK_STATUS_OPTIONS),
    ["Score", "80 a 100: lead quente", "50 a 79: lead qualificado", "30 a 49: observaÃ§Ã£o", "0 a 29: baixa prioridade"],
    ["SLA", "Novo: primeiro contato pendente", "Aguardando contato: precisa de prÃ³xima data", "Aguardando retorno: revisar apÃ³s 7 dias", "Arquivado: fora da fila ativa"],
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
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, values[0].length);
}

function setupCrmV3DashboardSheet(spreadsheet) {
  var sheet = getOrCreateSheet(spreadsheet, "Dashboard");
  sheet.clear();

  var totalFormula = crmV3TotalCountFormula();
  var qualifiedFormula = crmV3StatusCountFormula("Qualificado");
  var approvedFormula = crmV3StatusCountFormula("Aprovado para prÃ³ximo passo");

  var rows = [
    ["MÃ©trica", "Valor", "Uso operacional"],
    ["Total de leads", totalFormula, "Volume total captado nas abas oficiais."],
    ["Atletas", '=COUNTA(Atletas!A2:A)', "Leads captados como atletas."],
    ["Equipes", '=COUNTA(Equipes!A2:A)', "Equipes interessadas no ecossistema."],
    ["Patrocinadores", '=COUNTA(Patrocinadores!A2:A)', "Leads comerciais."],
    ["Quadras", '=COUNTA(Quadras!A2:A)', "Quadras e arenas interessadas."],
    ["Comunidade", '=COUNTA(Comunidade!A2:A)', "PÃºblico que quer acompanhar o UR."],
    ["Leads novos da semana", crmV3NewWeekFormula(), "Entradas nos Ãºltimos 7 dias."],
    ["Leads em triagem", crmV3StatusCountFormula("Em triagem"), "Leads sob anÃ¡lise operacional."],
    ["Leads qualificados", qualifiedFormula, "Status Qualificado."],
    ["Aguardando contato", crmV3StatusCountFormula("Aguardando contato"), "Fila que precisa de primeiro contato."],
    ["Contato feito", crmV3StatusCountFormula("Contato feito"), "Leads jÃ¡ acionados."],
    ["Aguardando retorno", crmV3StatusCountFormula("Aguardando retorno"), "Leads aguardando resposta."],
    ["Aprovados para prÃ³ximo passo", approvedFormula, "Leads liberados para etapa seguinte."],
    ["Arquivados", crmV3StatusCountFormula("Arquivado"), "Leads fora da fila ativa."],
    ["Prioridade Alta", crmV3PriorityCountFormula("Alta"), "Leads que exigem aÃ§Ã£o rÃ¡pida."],
    ["Prioridade MÃ©dia", crmV3PriorityCountFormula("MÃ©dia"), "Leads de rotina ativa."],
    ["Prioridade Baixa", crmV3PriorityCountFormula("Baixa"), "Leads de observaÃ§Ã£o."],
    ["Prioridade A definir", crmV3PriorityCountFormula("A definir"), "Leads ainda sem triagem final."],
    ["Leads sem resposta", crmV3NoResponseFormula(), "Aguardando retorno hÃ¡ mais de 7 dias."],
    ["Origem com mais leads", crmV3TopValueFormula("H"), "Canal mais frequente."],
    ["Cidade/polo com mais interessados", crmV3TopValueFormula("F"), "Cidade mais frequente."],
    ["Modalidade com mais interessados", crmV3TopModalityFormula(), "Modalidade mais frequente entre perfis aplicÃ¡veis."],
    ["Taxa de qualificaÃ§Ã£o", '=IFERROR((' + qualifiedFormula.substring(1) + ')/(' + totalFormula.substring(1) + ');0)', "Qualificados / total."],
    ["Taxa de avanÃ§o para prÃ³ximo passo", '=IFERROR((' + approvedFormula.substring(1) + ')/(' + totalFormula.substring(1) + ');0)', "Aprovados / total."],
  ];

  sheet.getRange(1, 1, rows.length, 3).setValues(rows);
  applyBaseSheetFormatting(sheet);
  sheet.getRange("B24:B25").setNumberFormat("0.00%");
  sheet.autoResizeColumns(1, 3);
}

function setupCrmV3Boards(spreadsheet) {
  setupCrmV3BoardFunil(spreadsheet);
  setupCrmV3BoardContatos(spreadsheet);
  setupCrmV3BoardPrioridades(spreadsheet);
  setupCrmV3BoardCanaisPolos(spreadsheet);
  setupCrmV3ResumoSemanal(spreadsheet);
  setupCrmV3GuiaOperacional(spreadsheet);
  setupCrmV3Vinculos(spreadsheet);
}

function setupCrmV3BoardFunil(spreadsheet) {
  var sheet = getOrCreateSheet(spreadsheet, "Board Funil");
  sheet.clear();

  var rows = [
    ["Status", "Total", "Leitura operacional"],
    ["Novo", crmV3StatusCountFormula("Novo"), "Entrada bruta captada pelo site."],
    ["Em triagem", crmV3StatusCountFormula("Em triagem"), "Lead sendo avaliado."],
    ["Qualificado", crmV3StatusCountFormula("Qualificado"), "Lead aderente ao prÃ³ximo contato."],
    ["Aguardando contato", crmV3StatusCountFormula("Aguardando contato"), "Precisa de aÃ§Ã£o do responsÃ¡vel."],
    ["Contato feito", crmV3StatusCountFormula("Contato feito"), "Primeiro contato realizado."],
    ["Aguardando retorno", crmV3StatusCountFormula("Aguardando retorno"), "Monitorar sem resposta."],
    ["Aprovado para prÃ³ximo passo", crmV3StatusCountFormula("Aprovado para prÃ³ximo passo"), "Pode avanÃ§ar para aÃ§Ã£o operacional."],
    ["NÃ£o prioritÃ¡rio agora", crmV3StatusCountFormula("NÃ£o prioritÃ¡rio agora"), "Manter em observaÃ§Ã£o."],
    ["Arquivado", crmV3StatusCountFormula("Arquivado"), "Fora da operaÃ§Ã£o ativa."],
  ];

  sheet.getRange(1, 1, rows.length, 3).setValues(rows);
  applyBaseSheetFormatting(sheet);
  sheet.autoResizeColumns(1, 3);
}

function setupCrmV3BoardContatos(spreadsheet) {
  var sheet = getOrCreateSheet(spreadsheet, "Board Contatos");
  sheet.clear();

  var rows = [
    ["Fila de contato operacional", "", "", "", "", "", "", "", "", "", ""],
    ["Atualiza automaticamente a partir das abas de leads. Use esta aba para priorizar contato diÃ¡rio.", "", "", "", "", "", "", "", "", "", ""],
    ["ID do lead", "Perfil", "Nome", "WhatsApp", "Status", "Prioridade", "ResponsÃ¡vel", "PrÃ³ximo passo", "PrÃ³xima data", "Ãšltimo contato", "Tentativas"],
    [
      '=QUERY({Atletas!A2:V;Equipes!A2:V;Patrocinadores!A2:V;Quadras!A2:V;Comunidade!A2:V};"select Col1,Col3,Col4,Col5,Col13,Col14,Col17,Col18,Col19,Col20,Col21 where Col1 is not null and (Col13=\'Novo\' or Col13=\'Aguardando contato\' or Col13=\'Aguardando retorno\') order by Col19 asc";0)',
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  ];

  sheet.getRange(1, 1, rows.length, 11).setValues(rows);
  applyBaseSheetFormatting(sheet);
  sheet.getRange(1, 1, 1, 11).mergeAcross();
  sheet.getRange(2, 1, 1, 11).mergeAcross();
  sheet.autoResizeColumns(1, 11);
}

function setupCrmV3BoardPrioridades(spreadsheet) {
  var sheet = getOrCreateSheet(spreadsheet, "Board Prioridades");
  sheet.clear();

  var rows = [
    ["Prioridade", "Total", "AÃ§Ã£o sugerida"],
    ["Alta", crmV3PriorityCountFormula("Alta"), "Contato rÃ¡pido e responsÃ¡vel definido."],
    ["MÃ©dia", crmV3PriorityCountFormula("MÃ©dia"), "Triagem padrÃ£o e acompanhamento."],
    ["Baixa", crmV3PriorityCountFormula("Baixa"), "Manter em observaÃ§Ã£o."],
    ["A definir", crmV3PriorityCountFormula("A definir"), "Pontuar score e classificar."],
    ["", "", ""],
    ["Leads Alta prioridade", "", ""],
    ["ID", "Perfil", "Nome"],
    [
      '=QUERY({Atletas!A2:V;Equipes!A2:V;Patrocinadores!A2:V;Quadras!A2:V;Comunidade!A2:V};"select Col1,Col3,Col4 where Col14=\'Alta\' and Col13<>\'Arquivado\'";0)',
      "",
      "",
    ],
  ];

  sheet.getRange(1, 1, rows.length, 3).setValues(rows);
  applyBaseSheetFormatting(sheet);
  sheet.autoResizeColumns(1, 3);
}

function setupCrmV3BoardCanaisPolos(spreadsheet) {
  var sheet = getOrCreateSheet(spreadsheet, "Board Canais e Polos");
  sheet.clear();

  var rows = [
    ["Indicador", "Resultado", "Uso"],
    ["Origem com mais leads", crmV3TopValueFormula("H"), "Direcionar esforÃ§o de aquisiÃ§Ã£o."],
    ["Cidade com mais interessados", crmV3TopValueFormula("F"), "Priorizar polo e agenda."],
    ["Polo com mais interesse", crmV3TopValueFormula("G"), "Avaliar expansÃ£o operacional."],
    ["Modalidade mais citada", crmV3TopModalityFormula(), "Ajustar oferta inicial."],
    ["", "", ""],
    ["Leads por origem", "", ""],
    ["Origem", "Total", ""],
    [
      '=QUERY({Atletas!H2:H;Equipes!H2:H;Patrocinadores!H2:H;Quadras!H2:H;Comunidade!H2:H};"select Col1, count(Col1) where Col1 is not null group by Col1 order by count(Col1) desc label count(Col1) \'Total\'";0)',
      "",
      "",
    ],
  ];

  sheet.getRange(1, 1, rows.length, 3).setValues(rows);
  applyBaseSheetFormatting(sheet);
  sheet.autoResizeColumns(1, 3);
}

function setupCrmV3ResumoSemanal(spreadsheet) {
  var sheet = getOrCreateSheet(spreadsheet, "Resumo Semanal");
  sheet.clear();

  var rows = [
    ["Semana", "Total de leads recebidos", "Atletas", "Equipes", "Patrocinadores", "Quadras", "Comunidade", "Leads qualificados", "Contatos realizados", "PrÃ³ximos passos", "Aprendizados", "Gargalos", "DecisÃµes"],
    [
      '=YEAR(TODAY())&"-"&TEXT(ISOWEEKNUM(TODAY());"00")',
      crmV3NewWeekFormula(),
      '=COUNTIFS(Atletas!B:B;">="&TODAY()-7)',
      '=COUNTIFS(Equipes!B:B;">="&TODAY()-7)',
      '=COUNTIFS(Patrocinadores!B:B;">="&TODAY()-7)',
      '=COUNTIFS(Quadras!B:B;">="&TODAY()-7)',
      '=COUNTIFS(Comunidade!B:B;">="&TODAY()-7)',
      crmV3StatusCountFormula("Qualificado"),
      crmV3StatusCountFormula("Contato feito"),
      "Preencher na reuniÃ£o semanal",
      "Preencher na reuniÃ£o semanal",
      "Preencher na reuniÃ£o semanal",
      "Preencher na reuniÃ£o semanal",
    ],
  ];

  sheet.getRange(1, 1, rows.length, rows[0].length).setValues(rows);
  applyBaseSheetFormatting(sheet);
  sheet.autoResizeColumns(1, rows[0].length);
}

function setupCrmV3GuiaOperacional(spreadsheet) {
  var sheet = getOrCreateSheet(spreadsheet, "Guia Operacional");
  sheet.clear();

  var rows = [
    ["Tema", "OrientaÃ§Ã£o"],
    ["Fonte oficial", "A planilha Google Sheets 1SvK... Ã© o CRM oficial. O Excel v3 Ã© blueprint, backup e modelo operacional."],
    ["Triagem diÃ¡ria", "Ver novos leads, definir status, prioridade, score, responsÃ¡vel, prÃ³ximo passo e prÃ³xima data de contato."],
    ["Contato", "Todo lead aguardando contato precisa de responsÃ¡vel e prÃ³xima data."],
    ["Score", "Use pontuaÃ§Ã£o manual de 0 a 100. O status sugerido ajuda, mas nÃ£o substitui decisÃ£o operacional."],
    ["Testes", "Leads de teste devem ser arquivados, nÃ£o deletados, para preservar auditoria do fluxo."],
    ["Planilha antiga", "A planilha 1LFAG38... nÃ£o deve ser usada como fonte da verdade."],
    ["Dados reais", "Dados pÃºblicos entram apenas apÃ³s validaÃ§Ã£o oficial e participaÃ§Ã£o confirmada."],
  ];

  sheet.getRange(1, 1, rows.length, 2).setValues(rows);
  applyBaseSheetFormatting(sheet);
  sheet.autoResizeColumns(1, 2);
}

function setupCrmV3Vinculos(spreadsheet) {
  var sheet = getOrCreateSheet(spreadsheet, "VÃ­nculos");
  sheet.clear();

  var rows = [
    ["Item", "Status", "ObservaÃ§Ã£o"],
    ["Google Sheets oficial", "Fonte da verdade", "Recebe leads do site via Apps Script."],
    ["Excel v3 operacional aprimorado", "Blueprint/backup", "Usar como referÃªncia de layout, boards e governanÃ§a."],
    ["Planilha 1LFAG38...", "NÃ£o usar", "NÃ£o Ã© a base operacional oficial."],
    ["Site /cadastro", "Entrada oficial", "Capta atleta, equipe, patrocinador, quadra e comunidade."],
    ["Tally", "Fallback temporÃ¡rio", "Manter apenas como contingÃªncia enquanto o formulÃ¡rio prÃ³prio opera."],
    ["Apps Script", "IntegraÃ§Ã£o MVP", "Grava leads e mantÃ©m fÃ³rmulas operacionais."],
  ];

  sheet.getRange(1, 1, rows.length, 3).setValues(rows);
  applyBaseSheetFormatting(sheet);
  sheet.autoResizeColumns(1, 3);
}

function ensureOperationalHeaders(sheet) {
  var lastColumn = Math.max(sheet.getLastColumn(), 1);
  var headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0].filter(String);
  var missingHeaders = CRM_V3_OPERATIONAL_HEADERS.filter(function (header) {
    return headers.indexOf(header) === -1;
  });

  if (missingHeaders.length > 0) {
    sheet.getRange(1, headers.length + 1, 1, missingHeaders.length).setValues([missingHeaders]);
  }
}

function applyCrmV3LeadValidations(sheet) {
  applyListValidation(sheet, "Origem do lead", ORIGIN_OPTIONS, true);
  applyListValidation(sheet, "Polo de interesse", CRM_V3_POLOS, true);
  applyListValidation(sheet, "Perfil", PROFILE_OPTIONS, true);
}

function applyOperationalFormulasForExistingRows(sheet) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    return;
  }

  for (var row = 2; row <= lastRow; row += 1) {
    applyOperationalFormulas(sheet, row);
  }
}

function applyOperationalFormulasForExistingRowsFast(sheet) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    return;
  }

  var formulasByHeader = {
    "Status sugerido": [],
    "Semana de entrada": [],
    "Dias desde entrada": [],
    "Dias sem contato": [],
    "SLA de contato": [],
    "PendÃªncia operacional": [],
    "Link WhatsApp": [],
    "Flag de teste": [],
  };

  for (var row = 2; row <= lastRow; row += 1) {
    formulasByHeader["Status sugerido"].push([crmV3StatusSuggestedFormula(sheet, row)]);
    formulasByHeader["Semana de entrada"].push([crmV3WeekFormula(sheet, row)]);
    formulasByHeader["Dias desde entrada"].push([crmV3DaysSinceEntryFormula(sheet, row)]);
    formulasByHeader["Dias sem contato"].push([crmV3DaysWithoutContactFormula(sheet, row)]);
    formulasByHeader["SLA de contato"].push([crmV3SlaFormula(sheet, row)]);
    formulasByHeader["PendÃªncia operacional"].push([crmV3PendingFormula(sheet, row)]);
    formulasByHeader["Link WhatsApp"].push([crmV3WhatsappFormula(sheet, row)]);
    formulasByHeader["Flag de teste"].push([crmV3TestFlagFormula(sheet, row)]);
  }

  Object.keys(formulasByHeader).forEach(function (header) {
    var column = crmV3FindHeaderColumn(sheet, header);
    if (!column) {
      return;
    }
    sheet.getRange(2, column, lastRow - 1, 1).setFormulas(formulasByHeader[header]);
  });
}

function applyOperationalFormulas(sheet, rowNumber) {
  if (rowNumber < 2) {
    return;
  }

  applyStatusSuggestedFormulaV3(sheet, rowNumber);
  applyFormulaByHeader(sheet, rowNumber, "Semana de entrada", crmV3WeekFormula(sheet, rowNumber));
  applyFormulaByHeader(sheet, rowNumber, "Dias desde entrada", crmV3DaysSinceEntryFormula(sheet, rowNumber));
  applyFormulaByHeader(sheet, rowNumber, "Dias sem contato", crmV3DaysWithoutContactFormula(sheet, rowNumber));
  applyFormulaByHeader(sheet, rowNumber, "SLA de contato", crmV3SlaFormula(sheet, rowNumber));
  applyFormulaByHeader(sheet, rowNumber, "PendÃªncia operacional", crmV3PendingFormula(sheet, rowNumber));
  applyFormulaByHeader(sheet, rowNumber, "Link WhatsApp", crmV3WhatsappFormula(sheet, rowNumber));
  applyFormulaByHeader(sheet, rowNumber, "Flag de teste", crmV3TestFlagFormula(sheet, rowNumber));
}

function applyStatusSuggestedFormulaV3(sheet, rowNumber) {
  applyFormulaByHeader(sheet, rowNumber, "Status sugerido", crmV3StatusSuggestedFormula(sheet, rowNumber));
}

function crmV3StatusSuggestedFormula(sheet, rowNumber) {
  var score = crmV3Cell(sheet, "Score", rowNumber);
  if (!score) {
    return "";
  }

  return (
    '=IF(' +
    score +
    '="";"Aguardando score";IFERROR(IF(' +
    score +
    '>=80;"Qualificado ou Aguardando contato";IF(' +
    score +
    '>=50;"Em triagem ou Qualificado";IF(' +
    score +
    '>=30;"Em triagem ou NÃ£o prioritÃ¡rio agora";"NÃ£o prioritÃ¡rio agora ou Arquivado")));"Aguardando score"))'
  );
}

function applyFormulaByHeader(sheet, rowNumber, headerName, formula) {
  var column = crmV3FindHeaderColumn(sheet, headerName);
  if (!column || !formula) {
    return;
  }

  sheet.getRange(rowNumber, column).setFormula(formula);
}

function crmV3WeekFormula(sheet, rowNumber) {
  var date = crmV3Cell(sheet, "Data de entrada", rowNumber);
  if (!date) {
    return "";
  }

  var dateExpr = crmV3DateExpr(date);
  return '=IF(' + date + '="";"";IFERROR(YEAR(' + dateExpr + ')&"-"&TEXT(ISOWEEKNUM(' + dateExpr + ');"00");""))';
}

function crmV3DaysSinceEntryFormula(sheet, rowNumber) {
  var date = crmV3Cell(sheet, "Data de entrada", rowNumber);
  if (!date) {
    return "";
  }

  return '=IF(' + date + '="";"";IFERROR(TODAY()-' + crmV3DateExpr(date) + ';""))';
}

function crmV3DaysWithoutContactFormula(sheet, rowNumber) {
  var entry = crmV3Cell(sheet, "Data de entrada", rowNumber);
  var last = crmV3Cell(sheet, "Ãšltimo contato", rowNumber);
  if (!entry || !last) {
    return "";
  }

  var fallback = crmV3DateExpr(entry);
  var lastExpr = 'IF(' + last + '="";' + fallback + ";" + crmV3DateExpr(last) + ")";
  return '=IF(' + entry + '="";"";IFERROR(TODAY()-' + lastExpr + ';""))';
}

function crmV3SlaFormula(sheet, rowNumber) {
  var id = crmV3Cell(sheet, "ID do lead", rowNumber);
  var status = crmV3Cell(sheet, "Status", rowNumber);
  var next = crmV3Cell(sheet, "PrÃ³xima data de contato", rowNumber);
  if (!id || !status || !next) {
    return "";
  }

  var nextExpr = "IFERROR(" + crmV3DateExpr(next) + ";TODAY()+999)";
  return (
    '=IF(' +
    id +
    '="";"";IF(' +
    status +
    '="Arquivado";"OK";IF(AND(' +
    next +
    '<>"";' +
    nextExpr +
    '<TODAY());"Atrasado";IF(OR(' +
    status +
    '="Novo";' +
    status +
    '="Aguardando contato");"Contato pendente";"OK"))))'
  );
}

function crmV3PendingFormula(sheet, rowNumber) {
  var id = crmV3Cell(sheet, "ID do lead", rowNumber);
  var status = crmV3Cell(sheet, "Status", rowNumber);
  var responsible = crmV3Cell(sheet, "ResponsÃ¡vel", rowNumber);
  var next = crmV3Cell(sheet, "PrÃ³xima data de contato", rowNumber);
  var daysWithoutContact = crmV3Cell(sheet, "Dias sem contato", rowNumber);
  var sla = crmV3Cell(sheet, "SLA de contato", rowNumber);
  if (!id || !status || !responsible || !next || !daysWithoutContact || !sla) {
    return "";
  }

  return (
    '=IF(' +
    id +
    '="";"";IF(' +
    status +
    '="Arquivado";"Arquivado";IF(AND(OR(' +
    status +
    '="Qualificado";' +
    status +
    '="Aguardando contato");' +
    responsible +
    '="");"Definir responsÃ¡vel";IF(AND(' +
    status +
    '="Aguardando contato";' +
    next +
    '="");"Definir prÃ³xima data";IF(AND(' +
    status +
    '="Aguardando retorno";' +
    daysWithoutContact +
    '>7);"Sem resposta >7 dias";IF(' +
    sla +
    '="Atrasado";"Contato atrasado";"OK"))))))'
  );
}

function crmV3WhatsappFormula(sheet, rowNumber) {
  var whatsapp = crmV3Cell(sheet, "WhatsApp", rowNumber);
  if (!whatsapp) {
    return "";
  }

  return '=IF(' + whatsapp + '="";"";HYPERLINK("https://wa.me/55"&REGEXREPLACE(TO_TEXT(' + whatsapp + ');"[^0-9]";"");"Abrir WhatsApp"))';
}

function crmV3TestFlagFormula(sheet, rowNumber) {
  var id = crmV3Cell(sheet, "ID do lead", rowNumber);
  var cells = [
    crmV3Cell(sheet, "ID do lead", rowNumber),
    crmV3Cell(sheet, "Nome", rowNumber),
    crmV3Cell(sheet, "UTM source", rowNumber),
    crmV3Cell(sheet, "UTM medium", rowNumber),
    crmV3Cell(sheet, "UTM campaign", rowNumber),
    crmV3Cell(sheet, "UTM content", rowNumber),
    crmV3Cell(sheet, "ObservaÃ§Ãµes", rowNumber),
  ].filter(String);

  if (!id || cells.length === 0) {
    return "";
  }

  return '=IF(' + id + '="";"";IF(REGEXMATCH(UPPER(TEXTJOIN(" ";TRUE;' + cells.join(";") + '));"TESTE|QA|CRM_OPERACIONAL");"Teste";"Real"))';
}

function crmV3DateExpr(cellRef) {
  return 'IF(ISNUMBER(' + cellRef + ");" + cellRef + ";DATEVALUE(LEFT(TO_TEXT(" + cellRef + ");10)))";
}

function crmV3Cell(sheet, headerName, rowNumber) {
  var column = crmV3FindHeaderColumn(sheet, headerName);
  return column ? columnToLetter(column) + rowNumber : "";
}

function crmV3FindHeaderColumn(sheet, headerName) {
  var lastColumn = Math.max(sheet.getLastColumn(), 1);
  var headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
  var target = normalizeHeader(headerName);

  for (var i = 0; i < headers.length; i += 1) {
    if (normalizeHeader(headers[i]) === target) {
      return i + 1;
    }
  }

  return null;
}

function archiveCrmV3TestRows(sheet) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    return { sheet: sheet.getName(), archived: 0 };
  }

  var lastColumn = sheet.getLastColumn();
  var values = sheet.getRange(2, 1, lastRow - 1, lastColumn).getValues();
  var statusCol = crmV3FindHeaderColumn(sheet, "Status");
  var obsCol = crmV3FindHeaderColumn(sheet, "ObservaÃ§Ãµes");
  var reasonCol = crmV3FindHeaderColumn(sheet, "Motivo de arquivamento");
  var updatedCol = crmV3FindHeaderColumn(sheet, "Data de atualizaÃ§Ã£o");
  var archived = 0;

  values.forEach(function (row, index) {
    var haystack = row.join(" ").toUpperCase();
    if (haystack.indexOf("TESTE") === -1 && haystack.indexOf("QA") === -1 && haystack.indexOf("CRM_OPERACIONAL") === -1) {
      return;
    }

    var rowNumber = index + 2;
    if (statusCol) {
      sheet.getRange(rowNumber, statusCol).setValue("Arquivado");
    }
    if (reasonCol && !sheet.getRange(rowNumber, reasonCol).getValue()) {
      sheet.getRange(rowNumber, reasonCol).setValue("Lead de teste arquivado");
    }
    if (obsCol) {
      var currentObs = String(sheet.getRange(rowNumber, obsCol).getValue() || "");
      if (currentObs.indexOf("Lead de teste arquivado") === -1) {
        sheet.getRange(rowNumber, obsCol).setValue(currentObs ? currentObs + " | Lead de teste arquivado" : "Lead de teste arquivado");
      }
    }
    if (updatedCol) {
      sheet.getRange(rowNumber, updatedCol).setValue(new Date());
    }
    archived += 1;
  });

  return { sheet: sheet.getName(), archived: archived };
}

function runCrmV3QaLeadTests() {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    var payloads = crmV3QaPayloads();
    var results = [];

    payloads.forEach(function (item) {
      doPost({ parameter: item.payload });
      SpreadsheetApp.flush();
      results.push(validateAndArchiveCrmV3QaLead(spreadsheet, item));
    });

    setupCrmV3DashboardSheet(spreadsheet);
    setupCrmV3Boards(spreadsheet);
    SpreadsheetApp.flush();

    return {
      ok: results.every(function (result) {
        return result.passed;
      }),
      message: "Testes QA CRM v3 executados e arquivados.",
      results: results,
    };
  } catch (err) {
    return {
      ok: false,
      message: "Falha nos testes QA CRM v3.",
      error: err ? err.toString() : "Erro desconhecido",
    };
  } finally {
    lock.releaseLock();
  }
}

function validateAndArchiveCrmV3QaLead(spreadsheet, item) {
  var sheet = spreadsheet.getSheetByName(item.sheetName);
  var rowNumber = findCrmV3RowByName(sheet, item.expectedName);
  var validation = {
    profile: item.profile,
    sheet: item.sheetName,
    name: item.expectedName,
    row: rowNumber,
    passed: false,
    checks: {},
  };

  if (!rowNumber) {
    validation.checks.found = false;
    return validation;
  }

  validation.checks.found = true;
  validation.checks.id = getCrmV3CellValue(sheet, rowNumber, "ID do lead");
  validation.checks.statusBeforeArchive = getCrmV3CellValue(sheet, rowNumber, "Status");
  validation.checks.priorityBeforeArchive = getCrmV3CellValue(sheet, rowNumber, "Prioridade");
  validation.checks.responsibleBeforeArchive = getCrmV3CellValue(sheet, rowNumber, "ResponsÃ¡vel");
  validation.checks.nextStepBeforeArchive = getCrmV3CellValue(sheet, rowNumber, "PrÃ³ximo passo");
  validation.checks.statusSuggested = getCrmV3CellDisplayValue(sheet, rowNumber, "Status sugerido");
  validation.checks.testFlag = getCrmV3CellDisplayValue(sheet, rowNumber, "Flag de teste");
  validation.checks.operationalFormulaErrors = crmV3RowHasFormulaError(sheet, rowNumber);

  validation.passed =
    validation.checks.id.indexOf(item.prefix + "-") === 0 &&
    validation.checks.statusBeforeArchive === "Novo" &&
    validation.checks.priorityBeforeArchive === "A definir" &&
    validation.checks.responsibleBeforeArchive === "OperaÃ§Ã£o UR" &&
    validation.checks.nextStepBeforeArchive === "Triagem inicial" &&
    validation.checks.operationalFormulaErrors === false;

  archiveCrmV3QaLead(sheet, rowNumber);
  validation.checks.statusAfterArchive = getCrmV3CellValue(sheet, rowNumber, "Status");
  return validation;
}

function archiveCrmV3QaLead(sheet, rowNumber) {
  var statusCol = crmV3FindHeaderColumn(sheet, "Status");
  var reasonCol = crmV3FindHeaderColumn(sheet, "Motivo de arquivamento");
  var obsCol = crmV3FindHeaderColumn(sheet, "ObservaÃ§Ãµes");
  var updatedCol = crmV3FindHeaderColumn(sheet, "Data de atualizaÃ§Ã£o");

  if (statusCol) {
    sheet.getRange(rowNumber, statusCol).setValue("Arquivado");
  }
  if (reasonCol) {
    sheet.getRange(rowNumber, reasonCol).setValue("Lead de teste QA arquivado");
  }
  if (obsCol) {
    sheet.getRange(rowNumber, obsCol).setValue("Teste QA CRM v3 â€” nÃ£o considerar como lead real");
  }
  if (updatedCol) {
    sheet.getRange(rowNumber, updatedCol).setValue(new Date());
  }
}

function findCrmV3RowByName(sheet, expectedName) {
  var nameCol = crmV3FindHeaderColumn(sheet, "Nome");
  if (!nameCol || sheet.getLastRow() < 2) {
    return null;
  }

  var values = sheet.getRange(2, nameCol, sheet.getLastRow() - 1, 1).getValues();
  for (var i = values.length - 1; i >= 0; i -= 1) {
    if (String(values[i][0] || "") === expectedName) {
      return i + 2;
    }
  }

  return null;
}

function getCrmV3CellValue(sheet, rowNumber, headerName) {
  var col = crmV3FindHeaderColumn(sheet, headerName);
  return col ? String(sheet.getRange(rowNumber, col).getValue() || "") : "";
}

function getCrmV3CellDisplayValue(sheet, rowNumber, headerName) {
  var col = crmV3FindHeaderColumn(sheet, headerName);
  return col ? String(sheet.getRange(rowNumber, col).getDisplayValue() || "") : "";
}

function crmV3RowHasFormulaError(sheet, rowNumber) {
  for (var i = 0; i < CRM_V3_OPERATIONAL_HEADERS.length; i += 1) {
    var display = getCrmV3CellDisplayValue(sheet, rowNumber, CRM_V3_OPERATIONAL_HEADERS[i]);
    if (display.indexOf("#") === 0) {
      return true;
    }
  }

  var statusSuggested = getCrmV3CellDisplayValue(sheet, rowNumber, "Status sugerido");
  return statusSuggested.indexOf("#") === 0;
}

function countCrmV3FormulaErrors(sheet) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    return 0;
  }

  var errors = 0;
  for (var row = 2; row <= lastRow; row += 1) {
    if (crmV3RowHasFormulaError(sheet, row)) {
      errors += 1;
    }
  }

  return errors;
}

function countCrmV3FormulaErrorsFast(sheet) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    return 0;
  }

  var headersToCheck = ["Status sugerido"].concat(CRM_V3_OPERATIONAL_HEADERS);
  var errors = 0;

  headersToCheck.forEach(function (header) {
    var column = crmV3FindHeaderColumn(sheet, header);
    if (!column) {
      return;
    }

    var displays = sheet.getRange(2, column, lastRow - 1, 1).getDisplayValues();
    displays.forEach(function (row) {
      if (String(row[0] || "").indexOf("#") === 0) {
        errors += 1;
      }
    });
  });

  return errors;
}

function normalizeCrmV3OperationalResponsible(sheet) {
  var responsibleColumn = crmV3FindHeaderColumn(sheet, "ResponsÃ¡vel");
  if (!responsibleColumn || sheet.getLastRow() < 2) {
    return;
  }

  var values = sheet.getRange(2, responsibleColumn, sheet.getLastRow() - 1, 1).getValues();
  values.forEach(function (row, index) {
    var current = String(row[0] || "");
    if (!current || RESPONSIBLE_OPTIONS.indexOf(current) !== -1) {
      return;
    }
    sheet.getRange(index + 2, responsibleColumn).setValue("OperaÃ§Ã£o UR");
  });
}

function normalizeCrmV3OperationalResponsibleFast(sheet) {
  var responsibleColumn = crmV3FindHeaderColumn(sheet, "ResponsÃ¡vel");
  if (!responsibleColumn || sheet.getLastRow() < 2) {
    return;
  }

  var range = sheet.getRange(2, responsibleColumn, sheet.getLastRow() - 1, 1);
  var values = range.getValues();
  var changed = false;

  values.forEach(function (row) {
    var current = String(row[0] || "");
    if (!current || RESPONSIBLE_OPTIONS.indexOf(current) !== -1) {
      return;
    }
    row[0] = "OperaÃ§Ã£o UR";
    changed = true;
  });

  if (changed) {
    range.setValues(values);
  }
}

function cleanupCrmV3ScratchSheet(spreadsheet) {
  var sheet = spreadsheet.getSheetByName("PÃ¡gina1");
  if (!sheet) {
    return;
  }

  sheet.clear();
  if (spreadsheet.getSheets().length > 1) {
    sheet.hideSheet();
  }
}

function crmV3QaPayloads() {
  var common = {
    source: "site",
    sourceLabel: "Site / Cadastro UR",
    page: "/cadastro",
    createdAt: new Date().toISOString(),
    utm_source: "teste",
    utm_medium: "qa_crm_v3",
    utm_campaign: "validacao_migracao",
    utm_content: "teste_qa",
    statusInicial: "Novo",
    prioridadeInicial: "A definir",
    responsavelInicial: "OperaÃ§Ã£o UR",
    proximoPassoInicial: "Triagem inicial",
  };

  return [
    {
      profile: "atleta",
      sheetName: "Atletas",
      prefix: "ATL",
      expectedName: "TESTE QA ATLETA CRM V3",
      payload: crmV3Merge(common, {
        profile: "atleta",
        nomeCompleto: "TESTE QA ATLETA CRM V3",
        whatsapp: "31900000001",
        instagram: "@teste_qa_atleta",
        cidade: "Belo Horizonte",
        poloInteresse: "Polo em formaÃ§Ã£o",
        modalidadePrincipal: "VÃ´lei de praia",
        posicao: "A definir",
        formatosJogo: "A definir",
        nivelPercebido: "A definir",
        temEquipe: "A definir",
        objetivoPrincipal: "Validar fluxo de captaÃ§Ã£o",
        interesseUrPlay: "Sim",
        interesseTorneios: "A definir",
        interesseCtUr: "A definir",
        diasDisponiveis: "A definir",
        horarioDisponivel: "A definir",
        pontoMelhoria: "Lead de teste",
        autorizacaoContato: "Sim",
      }),
    },
    {
      profile: "equipe",
      sheetName: "Equipes",
      prefix: "EQP",
      expectedName: "TESTE QA EQUIPE CRM V3",
      payload: crmV3Merge(common, {
        profile: "equipe",
        nomeEquipe: "TESTE QA EQUIPE CRM V3",
        responsavel: "TESTE QA CAPITÃƒO UR",
        whatsapp: "31900000002",
        instagramEquipe: "@teste_qa_equipe",
        cidade: "Belo Horizonte",
        cidadePolo: "Polo em formaÃ§Ã£o",
        modalidade: "Futset",
        formatosJogo: "A definir",
        elencoDefinido: "A definir",
        quantidadeAtletas: "A definir",
        nivelPercebido: "A definir",
        participaTorneios: "A definir",
        objetivoPrincipal: "Validar fluxo de captaÃ§Ã£o",
        interesseUrPlay: "Sim",
        interesseTorneiosOficiais: "Sim",
        diasDisponiveis: "A definir",
        horarioDisponivel: "A definir",
        historiaObjetivo: "Lead de teste",
        autorizacaoContato: "Sim",
      }),
    },
    {
      profile: "patrocinador",
      sheetName: "Patrocinadores",
      prefix: "PAT",
      expectedName: "TESTE QA PATROCINADOR CRM V3",
      payload: crmV3Merge(common, {
        profile: "patrocinador",
        empresaMarca: "TESTE QA PATROCINADOR CRM V3",
        responsavel: "TESTE QA RESPONSÃVEL UR",
        cargoFuncao: "Comercial",
        whatsapp: "31900000003",
        emailComercial: "teste.qa@ultimaterivals.org",
        instagramSite: "@teste_qa_patrocinador",
        segmento: "Teste",
        cidade: "Belo Horizonte",
        cidadeRegiao: "Polo em formaÃ§Ã£o",
        publicoAlvo: "A definir",
        objetivoComercial: "Validar fluxo de captaÃ§Ã£o",
        tipoAtivacao: "A definir",
        ofereceBeneficios: "A definir",
        faixaInvestimento: "A definir",
        expectativaUr: "Lead de teste",
        autorizacaoContato: "Sim",
      }),
    },
    {
      profile: "quadra",
      sheetName: "Quadras",
      prefix: "QDR",
      expectedName: "TESTE QA QUADRA CRM V3",
      payload: crmV3Merge(common, {
        profile: "quadra",
        nomeQuadra: "TESTE QA QUADRA CRM V3",
        responsavel: "TESTE QA RESPONSÃVEL QUADRA",
        whatsapp: "31900000004",
        instagram: "@teste_qa_quadra",
        enderecoRegiao: "Polo em formaÃ§Ã£o",
        cidade: "Belo Horizonte",
        modalidadesComportadas: "VÃ´lei de praia",
        quantidadeEspacos: "A definir",
        possuiIluminacao: "A definir",
        possuiBar: "A definir",
        estruturaPublico: "A definir",
        realizaEventos: "A definir",
        tipoParceria: "Validar fluxo de captaÃ§Ã£o",
        disponibilidade: "A definir",
        interessePatrocinadores: "A definir",
        principaisDesafios: "Lead de teste",
        motivoInteresse: "Validar fluxo de captaÃ§Ã£o",
        autorizacaoContato: "Sim",
      }),
    },
    {
      profile: "comunidade",
      sheetName: "Comunidade",
      prefix: "COM",
      expectedName: "TESTE QA COMUNIDADE CRM V3",
      payload: crmV3Merge(common, {
        profile: "comunidade",
        nomeCompleto: "TESTE QA COMUNIDADE CRM V3",
        whatsapp: "31900000005",
        instagram: "@teste_qa_comunidade",
        cidade: "Belo Horizonte",
        interessePrincipal: "Validar fluxo de captaÃ§Ã£o",
        perfilComunidade: "Comunidade",
        modalidadesInteresse: "A definir",
        avisosDesejados: "A definir",
        sugestaoObservacao: "Lead de teste",
        autorizacaoContato: "Sim",
      }),
    },
  ];
}

function crmV3Merge(base, extra) {
  var output = {};
  Object.keys(base).forEach(function (key) {
    output[key] = base[key];
  });
  Object.keys(extra).forEach(function (key) {
    output[key] = extra[key];
  });
  return output;
}

function crmV3TotalCountFormula() {
  return "=SUM(COUNTA(Atletas!A2:A);COUNTA(Equipes!A2:A);COUNTA(Patrocinadores!A2:A);COUNTA(Quadras!A2:A);COUNTA(Comunidade!A2:A))";
}

function crmV3StatusCountFormula(status) {
  return (
    '=SUM(COUNTIF(Atletas!M:M;"' +
    status +
    '");COUNTIF(Equipes!M:M;"' +
    status +
    '");COUNTIF(Patrocinadores!M:M;"' +
    status +
    '");COUNTIF(Quadras!M:M;"' +
    status +
    '");COUNTIF(Comunidade!M:M;"' +
    status +
    '"))'
  );
}

function crmV3PriorityCountFormula(priority) {
  return (
    '=SUM(COUNTIF(Atletas!N:N;"' +
    priority +
    '");COUNTIF(Equipes!N:N;"' +
    priority +
    '");COUNTIF(Patrocinadores!N:N;"' +
    priority +
    '");COUNTIF(Quadras!N:N;"' +
    priority +
    '");COUNTIF(Comunidade!N:N;"' +
    priority +
    '"))'
  );
}

function crmV3NewWeekFormula() {
  return '=SUM(COUNTIFS(Atletas!B:B;">="&TODAY()-7);COUNTIFS(Equipes!B:B;">="&TODAY()-7);COUNTIFS(Patrocinadores!B:B;">="&TODAY()-7);COUNTIFS(Quadras!B:B;">="&TODAY()-7);COUNTIFS(Comunidade!B:B;">="&TODAY()-7))';
}

function crmV3NoResponseFormula() {
  return '=SUM(COUNTIFS(Atletas!M:M;"Aguardando retorno";Atletas!T:T;"<"&TODAY()-7);COUNTIFS(Equipes!M:M;"Aguardando retorno";Equipes!T:T;"<"&TODAY()-7);COUNTIFS(Patrocinadores!M:M;"Aguardando retorno";Patrocinadores!T:T;"<"&TODAY()-7);COUNTIFS(Quadras!M:M;"Aguardando retorno";Quadras!T:T;"<"&TODAY()-7);COUNTIFS(Comunidade!M:M;"Aguardando retorno";Comunidade!T:T;"<"&TODAY()-7))';
}

function crmV3TopValueFormula(columnLetter) {
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
    '};"select Col1, count(Col1) where Col1 is not null group by Col1 order by count(Col1) desc limit 1 label count(Col1) \'\'";0);1;1);"")'
  );
}

function crmV3TopModalityFormula() {
  return '=IFERROR(INDEX(QUERY({Atletas!Z2:Z;Equipes!AA2:AA;Quadras!AB2:AB;Comunidade!AB2:AB};"select Col1, count(Col1) where Col1 is not null group by Col1 order by count(Col1) desc limit 1 label count(Col1) \'\'";0);1;1);"")';
}

function applyCrmV3TabColors(spreadsheet) {
  var colors = {
    Dashboard: "#d4af37",
    Atletas: "#0f9d58",
    Equipes: "#1a73e8",
    Patrocinadores: "#fbbc04",
    Quadras: "#a142f4",
    Comunidade: "#e8710a",
    "Tarefas de Contato": "#34a853",
    "ConfiguraÃ§Ãµes": "#5f6368",
    "Origem dos Leads": "#46bdc6",
    "Board Funil": "#d4af37",
    "Board Contatos": "#34a853",
    "Board Prioridades": "#fbbc04",
    "Board Canais e Polos": "#46bdc6",
    "Resumo Semanal": "#1a73e8",
    "Guia Operacional": "#5f6368",
    "VÃ­nculos": "#a142f4",
  };

  Object.keys(colors).forEach(function (sheetName) {
    var sheet = spreadsheet.getSheetByName(sheetName);
    if (sheet) {
      sheet.setTabColor(colors[sheetName]);
    }
  });
}

function crmV3Timestamp() {
  return Utilities.formatDate(new Date(), Session.getScriptTimeZone() || "America/Sao_Paulo", "yyyyMMdd-HHmmss");
}

function crmV3UniqueSheetName(spreadsheet, baseName) {
  var maxLength = 95;
  var cleanBase = baseName.substring(0, maxLength);
  var name = cleanBase;
  var counter = 2;

  while (spreadsheet.getSheetByName(name)) {
    name = cleanBase.substring(0, maxLength - String(counter).length - 1) + "_" + counter;
    counter += 1;
  }

  return name;
}
