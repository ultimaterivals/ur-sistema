import type { LeadFormData, LeadPayload, LeadProfile } from "@/lib/lead-fields";

export type LeadSubmitResult = {
  ok: boolean;
  message: string;
  code?: "missing_endpoint" | "network_error";
  usedOpaqueFallback?: boolean;
};

type UtmParams = {
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
};

/**
 * Mapeamento interno TypeScript (inglês) → valor enviado ao Apps Script (português).
 * O Apps Script v2 usa as chaves em português.
 */
const PROFILE_PT: Record<LeadProfile, string> = {
  athlete: "atleta",
  team: "equipe",
  sponsor: "patrocinador",
  court: "quadra",
  community: "comunidade",
};

const MSG_PROCESSING =
  "Cadastro enviado para processamento. Confirme na planilha antes de considerar o lead validado.";

export function getGoogleScriptUrl() {
  return process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL?.trim() ?? "";
}

export function buildLeadPayload(
  profile: LeadProfile,
  data: Record<string, string>,
  utm: UtmParams = {},
): LeadPayload {
  return {
    profile,
    source: "site",
    sourceLabel: "Site / Cadastro UR",
    page: "/cadastro",
    createdAt: new Date().toISOString(),
    utm_source: utm.utm_source ?? "",
    utm_medium: utm.utm_medium ?? "",
    utm_campaign: utm.utm_campaign ?? "",
    utm_content: utm.utm_content ?? "",
    statusInicial: "Novo",
    prioridadeInicial: "A definir",
    responsavelInicial: "Operação UR",
    proximoPassoInicial: "Triagem inicial",
    data: {
      ...data,
      profile,
    } as LeadFormData,
  };
}

/**
 * Serializa o payload como application/x-www-form-urlencoded (request "simples", sem preflight CORS).
 *
 * - profile é convertido para português antes do envio.
 * - Os campos do objeto data são promovidos ao nível raiz do URLSearchParams
 *   para que o Apps Script possa ler via e.parameter (sem precisar fazer JSON.parse).
 */
function buildUrlSearchParams(payload: LeadPayload): URLSearchParams {
  const params = new URLSearchParams();

  params.set("profile", PROFILE_PT[payload.profile] ?? payload.profile);
  params.set("source", payload.source);
  params.set("sourceLabel", payload.sourceLabel);
  params.set("page", payload.page);
  params.set("createdAt", payload.createdAt);
  params.set("utm_source", payload.utm_source ?? "");
  params.set("utm_medium", payload.utm_medium ?? "");
  params.set("utm_campaign", payload.utm_campaign ?? "");
  params.set("utm_content", payload.utm_content ?? "");
  params.set("statusInicial", payload.statusInicial);
  params.set("prioridadeInicial", payload.prioridadeInicial);
  params.set("responsavelInicial", payload.responsavelInicial);
  params.set("proximoPassoInicial", payload.proximoPassoInicial);

  // Promover campos do objeto data para o nível raiz (exceto "profile" — já está acima)
  const data = payload.data as Record<string, unknown>;
  for (const [key, value] of Object.entries(data)) {
    if (key !== "profile" && value !== undefined && value !== null) {
      params.set(key, String(value));
    }
  }

  return params;
}

/**
 * Envia o lead para o Google Apps Script via POST no-cors.
 *
 * Por que no-cors?
 * O Google Apps Script redireciona POSTs para script.googleusercontent.com, que não
 * retorna headers CORS. Tentar ler a resposta com redirect:"follow" sempre resulta em
 * CORS error no browser. A única solução compatível sem backend próprio é mode:"no-cors",
 * que envia o request mas retorna uma resposta opaca (sem body legível).
 *
 * application/x-www-form-urlencoded é um content-type "simples" (sem preflight),
 * garantindo que o POST chegue ao GAS mesmo no modo no-cors.
 *
 * Limitação conhecida: não é possível confirmar o sucesso pelo browser.
 * Verifique a planilha após o envio para validar.
 */
export async function submitLead(payload: LeadPayload): Promise<LeadSubmitResult> {
  const endpoint = getGoogleScriptUrl();

  if (!endpoint) {
    return {
      ok: false,
      code: "missing_endpoint",
      message:
        "Endpoint do Google Sheets ainda não configurado. Use o fallback Tally temporário ou configure NEXT_PUBLIC_GOOGLE_SCRIPT_URL.",
    };
  }

  const params = buildUrlSearchParams(payload);

  if (process.env.NODE_ENV === "development") {
    console.log("[lead-submit] POST →", endpoint);
    console.log("[lead-submit] profile →", params.get("profile"));
    console.log("[lead-submit] payload →", Object.fromEntries(params));
  }

  try {
    // Simple request (sem preflight) + no-cors (envia mas não lê resposta)
    await fetch(endpoint, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    if (process.env.NODE_ENV === "development") {
      console.log(
        "[lead-submit] Resposta opaca recebida (no-cors). Request chegou ao GAS. Verifique a planilha para confirmar a gravação.",
      );
    }

    return {
      ok: true,
      usedOpaqueFallback: true,
      message: MSG_PROCESSING,
    };
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.error("[lead-submit] Erro de rede:", err);
    }

    return {
      ok: false,
      code: "network_error",
      message:
        "Não foi possível enviar ao Google Sheets. Verifique sua conexão ou use o Tally como alternativa.",
    };
  }
}
