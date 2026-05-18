"use client";

import type { FormEvent } from "react";
import { useId, useState } from "react";
import { ArrowRight, CheckCircle2, Clock, Loader2, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { LeadField, LeadFormConfig } from "@/lib/lead-fields";
import { buildLeadPayload, getGoogleScriptUrl, submitLead } from "@/lib/lead-submit";

type LeadFormBaseProps = {
  config: LeadFormConfig;
};

type SubmitStatus = "idle" | "submitting" | "success" | "processing" | "error";

type SubmitState = {
  status: SubmitStatus;
  message: string;
};

const inputClass =
  "min-h-12 w-full rounded-lg border border-white/10 bg-black/35 px-4 py-3 text-sm font-semibold text-white outline-none transition placeholder:text-white/32 focus:border-[#ffd84d]/55 focus:ring-2 focus:ring-[#ffd84d]/15";

const labelClass = "text-xs font-black uppercase leading-4 tracking-[0.12em] text-[#ffe98b]";

export function LeadFormBase({ config }: LeadFormBaseProps) {
  const formId = useId();
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
    message: "",
  });

  const endpointConfigured = Boolean(getGoogleScriptUrl());

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const honeypot = String(formData.get("website") ?? "").trim();

    // Honeypot: bot silencioso
    if (honeypot) {
      setSubmitState({
        status: "success",
        message:
          "Cadastro recebido. A equipe Ultimate Rivals fará a validação operacional antes de liberar próximos passos.",
      });
      form.reset();
      return;
    }

    const data = collectFormData(config.fields, formData);
    const missingField = config.fields.find((field) => field.required && !data[field.name]);

    if (missingField) {
      setSubmitState({
        status: "error",
        message: `Preencha o campo obrigatório: ${missingField.label}.`,
      });
      return;
    }

    setSubmitState({
      status: "submitting",
      message: "Enviando cadastro para a operação UR...",
    });

    const payload = buildLeadPayload(config.profile, data, getUtmParams());
    const result = await submitLead(payload);

    if (result.ok) {
      // usedOpaqueFallback = true: o request foi enviado, mas a resposta é opaca (no-cors).
      // Não é possível confirmar a gravação pelo browser — o usuário deve verificar a planilha.
      setSubmitState({
        status: result.usedOpaqueFallback ? "processing" : "success",
        message: result.message,
      });
      form.reset();
      return;
    }

    setSubmitState({
      status: "error",
      message: result.message,
    });
  }

  return (
    <Card className="p-4 md:p-6" premium>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.38fr)]">
        <div className="min-w-0">
          <div className="inline-flex rounded-md border border-[#ffd84d]/25 bg-[#ffd84d]/10 px-3 py-1 text-[11px] font-black uppercase leading-4 tracking-[0.14em] text-[#ffe98b]">
            Perfil: {config.cardTitle}
          </div>
          <h3 className="mt-5 text-[clamp(1.9rem,7vw,2.6rem)] font-black uppercase leading-[0.96] text-white">
            {config.formTitle}
          </h3>
          <p className="mt-4 text-sm leading-6 text-white/72">{config.formDescription}</p>

          <div className="mt-5 rounded-lg border border-white/10 bg-black/30 p-4">
            <p className="text-xs font-black uppercase leading-5 tracking-[0.12em] text-white/58">
              Dados automáticos enviados
            </p>
            <ul className="mt-3 grid gap-2 text-sm leading-5 text-white/68">
              <li>Status inicial: Novo</li>
              <li>Prioridade inicial: A definir</li>
              <li>Responsável inicial: Operação UR</li>
              <li>Próximo passo: Triagem inicial</li>
              <li>Origem: Site / Cadastro UR</li>
            </ul>
          </div>

          {!endpointConfigured ? (
            <div className="mt-4 rounded-lg border border-amber-400/30 bg-amber-400/10 p-4 text-sm leading-6 text-amber-200">
              <p className="font-black uppercase tracking-wide">Endpoint não configurado</p>
              <p className="mt-1">
                O Google Sheets ainda não está conectado nesta build. Use o botão abaixo para enviar
                pelo Tally enquanto <code className="rounded bg-white/10 px-1">NEXT_PUBLIC_GOOGLE_SCRIPT_URL</code> não
                estiver ativa.
              </p>
            </div>
          ) : null}

          <Button className="mt-5 w-full" href={config.fallbackHref} target="_blank" variant="ghost">
            {config.fallbackLabel}
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Button>
        </div>

        <form className="grid min-w-0 gap-4" onSubmit={handleSubmit}>
          {/* Honeypot — invisível para humanos, visível para bots */}
          <div aria-hidden className="hidden">
            <label htmlFor={`${formId}-website`}>Website</label>
            <input autoComplete="off" id={`${formId}-website`} name="website" tabIndex={-1} type="text" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {config.fields.map((field) => (
              <FormField field={field} formId={formId} key={field.name} />
            ))}
          </div>

          <div className="rounded-lg border border-white/10 bg-black/25 p-4 text-sm leading-6 text-white/68">
            O cadastro não garante vaga, parceria, patrocínio ou participação imediata. A equipe UR fará validação
            operacional antes de liberar próximos passos.
          </div>

          {submitState.message ? <SubmitFeedback state={submitState} fallbackHref={config.fallbackHref} fallbackLabel={config.fallbackLabel} /> : null}

          <button
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-transparent bg-[linear-gradient(135deg,#ffd84d,#c9a84c)] px-5 py-3 text-center text-sm font-extrabold uppercase leading-5 tracking-[0.08em] text-black shadow-[0_0_24px_rgba(255,216,77,0.18)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={submitState.status === "submitting"}
            type="submit"
          >
            {submitState.status === "submitting" ? (
              <Loader2 aria-hidden className="h-4 w-4 animate-spin" />
            ) : (
              <ArrowRight aria-hidden className="h-4 w-4" />
            )}
            Enviar cadastro
          </button>
        </form>
      </div>
    </Card>
  );
}

function SubmitFeedback({
  state,
  fallbackHref,
  fallbackLabel,
}: {
  state: SubmitState;
  fallbackHref: string;
  fallbackLabel: string;
}) {
  const isSuccess = state.status === "success";
  const isProcessing = state.status === "processing";
  const isError = state.status === "error";
  const isSubmitting = state.status === "submitting";

  const colorClass = isSuccess
    ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-100"
    : isProcessing
      ? "border-amber-400/30 bg-amber-400/10 text-amber-200"
      : isError
        ? "border-red-300/25 bg-red-400/10 text-red-100"
        : "border-[#ffd84d]/25 bg-[#ffd84d]/10 text-[#ffe98b]";

  const Icon = isSuccess ? CheckCircle2 : isProcessing ? Clock : isError ? ShieldAlert : Loader2;
  const iconClass = isSubmitting ? "animate-spin" : "";

  return (
    <div className={`grid gap-3 rounded-lg border p-4 text-sm font-semibold leading-6 ${colorClass}`}>
      <div className="flex items-start gap-3">
        <Icon aria-hidden className={`mt-0.5 h-5 w-5 shrink-0 ${iconClass}`} />
        <span>{state.message}</span>
      </div>

      {/* Em processamento: mostrar Tally como confirmação alternativa */}
      {isProcessing ? (
        <a
          className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest underline underline-offset-2 opacity-70 hover:opacity-100"
          href={fallbackHref}
          rel="noopener noreferrer"
          target="_blank"
        >
          <ArrowRight aria-hidden className="h-3 w-3" />
          {fallbackLabel} — confirme pelo Tally se quiser comprovante
        </a>
      ) : null}
    </div>
  );
}

function FormField({ field, formId }: { field: LeadField; formId: string }) {
  const id = `${formId}-${field.name}`;
  const requiredMark = field.required ? <span className="text-[#ffd84d]">*</span> : null;

  if (field.type === "checkbox") {
    return (
      <label className="flex min-h-12 gap-3 rounded-lg border border-white/10 bg-black/25 p-4 text-sm font-semibold leading-6 text-white/75 md:col-span-2">
        <input className="mt-1 h-4 w-4 accent-[#ffd84d]" name={field.name} required={field.required} type="checkbox" value="Sim" />
        <span>
          {field.label} {requiredMark}
        </span>
      </label>
    );
  }

  return (
    <label className={`grid gap-2 ${field.type === "textarea" ? "md:col-span-2" : ""}`} htmlFor={id}>
      <span className={labelClass}>
        {field.label} {requiredMark}
      </span>
      {renderControl(field, id)}
    </label>
  );
}

function renderControl(field: LeadField, id: string) {
  if (field.type === "textarea") {
    return (
      <textarea
        className={`${inputClass} min-h-28 resize-y`}
        id={id}
        name={field.name}
        placeholder={field.placeholder}
        required={field.required}
      />
    );
  }

  if (field.type === "select") {
    return (
      <select className={inputClass} defaultValue="" id={id} name={field.name} required={field.required}>
        <option disabled value="">
          Selecione
        </option>
        {field.options?.map((option) => (
          <option className="bg-[#111218] text-white" key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  return (
    <input
      className={inputClass}
      id={id}
      name={field.name}
      placeholder={field.placeholder}
      required={field.required}
      type={field.type}
    />
  );
}

function collectFormData(fields: readonly LeadField[], formData: FormData) {
  return fields.reduce<Record<string, string>>((acc, field) => {
    if (field.type === "checkbox") {
      acc[field.name] = formData.has(field.name) ? "Sim" : "";
      return acc;
    }

    acc[field.name] = String(formData.get(field.name) ?? "").trim();
    return acc;
  }, {});
}

function getUtmParams() {
  if (typeof window === "undefined") {
    return {};
  }

  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
    utm_content: params.get("utm_content"),
  };
}
