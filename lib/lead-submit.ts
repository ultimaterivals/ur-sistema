import type { LeadFormData, LeadPayload, LeadProfile } from "@/lib/lead-fields";

export type LeadSubmitResult = {
  ok: boolean;
  message: string;
  code?: "missing_endpoint" | "validation_error" | "network_error" | "server_error";
  usedOpaqueFallback?: boolean;
};

type UtmParams = {
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
};

const successMessage =
  "Cadastro recebido. A equipe Ultimate Rivals fará a validação operacional antes de liberar próximos passos.";

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

  const body = JSON.stringify(payload);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body,
      redirect: "follow",
    });

    const text = await response.text();
    const result = tryParseJson(text);

    if (!response.ok) {
      return {
        ok: false,
        code: "server_error",
        message: result?.message ?? "O Google Sheets não confirmou o recebimento. Tente novamente ou use o fallback Tally.",
      };
    }

    if (result && result.success === false) {
      return {
        ok: false,
        code: "validation_error",
        message: result.message ?? "O cadastro não passou na validação do Google Sheets.",
      };
    }

    return {
      ok: true,
      message: result?.message ?? successMessage,
    };
  } catch {
    try {
      await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body,
      });

      return {
        ok: true,
        message: successMessage,
        usedOpaqueFallback: true,
      };
    } catch {
      return {
        ok: false,
        code: "network_error",
        message:
          "Não foi possível enviar ao Google Sheets agora. Verifique a conexão, o Apps Script ou use o fallback Tally temporário.",
      };
    }
  }
}

function tryParseJson(text: string): { success?: boolean; message?: string } | null {
  try {
    return JSON.parse(text) as { success?: boolean; message?: string };
  } catch {
    return null;
  }
}
