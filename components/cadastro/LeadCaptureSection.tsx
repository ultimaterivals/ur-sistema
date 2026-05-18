"use client";

import type { ComponentType, ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Building2, Handshake, Radio, Shield, Target } from "lucide-react";
import { AthleteLeadForm } from "@/components/cadastro/AthleteLeadForm";
import { CommunityLeadForm } from "@/components/cadastro/CommunityLeadForm";
import { CourtLeadForm } from "@/components/cadastro/CourtLeadForm";
import { SponsorLeadForm } from "@/components/cadastro/SponsorLeadForm";
import { TeamLeadForm } from "@/components/cadastro/TeamLeadForm";
import { SectionHeader } from "@/components/ui/section-header";
import type { LeadProfile } from "@/lib/lead-fields";
import { leadFormConfigs, leadProfileOrder } from "@/lib/lead-fields";
import { cn } from "@/lib/utils/cn";

const icons = {
  athlete: Target,
  team: Shield,
  sponsor: Handshake,
  court: Building2,
  community: Radio,
} satisfies Record<LeadProfile, LucideIcon>;

const forms = {
  athlete: AthleteLeadForm,
  team: TeamLeadForm,
  sponsor: SponsorLeadForm,
  court: CourtLeadForm,
  community: CommunityLeadForm,
} satisfies Record<LeadProfile, ComponentType>;

export function LeadCaptureSection() {
  const [selectedProfile, setSelectedProfile] = useState<LeadProfile>("athlete");
  const ActiveForm = forms[selectedProfile];

  const profiles = useMemo(
    () =>
      leadProfileOrder.map((profile) => ({
        profile,
        Icon: icons[profile],
      })),
    [],
  );

  useEffect(() => {
    function syncFromHash() {
      const hash = window.location.hash.replace("#", "");
      const nextProfile = leadProfileOrder.find((profile) => leadFormConfigs[profile].anchor === hash);

      if (nextProfile) {
        setSelectedProfile(nextProfile);
      }
    }

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  function handleSelect(profile: LeadProfile) {
    const anchor = leadFormConfigs[profile].anchor;

    setSelectedProfile(profile);
    window.history.replaceState(null, "", `#${anchor}`);

    window.setTimeout(() => {
      document.getElementById("formulario-cadastro")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  }

  return (
    <section
      className="scroll-mt-24 overflow-hidden border-t border-white/10 px-5 py-10 md:scroll-mt-28 md:py-14 lg:px-8 lg:py-16"
      id="caminhos"
    >
      <div className="mx-auto max-w-7xl min-w-0">
        <SectionHeader
          description="Escolha um caminho para abrir o formulário próprio no site. O envio vai para Google Sheets quando o endpoint estiver configurado, com Tally preservado como fallback temporário."
          eyebrow="Escolha seu caminho"
          title="Uma porta de entrada para cada perfil."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {profiles.map(({ Icon, profile }, index) => (
            <PathButton
              active={selectedProfile === profile}
              featured={index === 0}
              icon={<Icon aria-hidden className="h-6 w-6 text-[#ffd84d]" />}
              key={profile}
              onClick={() => handleSelect(profile)}
              profile={profile}
            />
          ))}
        </div>

        <div className="mt-6 scroll-mt-28" id="formulario-cadastro">
          <ActiveForm />
        </div>
      </div>
    </section>
  );
}

function PathButton({
  active,
  featured,
  icon,
  onClick,
  profile,
}: {
  active: boolean;
  featured: boolean;
  icon: ReactNode;
  onClick: () => void;
  profile: LeadProfile;
}) {
  const config = leadFormConfigs[profile];

  return (
    <button
      className={cn(
        "flex min-h-[300px] min-w-0 flex-col rounded-lg border bg-[#111218]/90 p-5 text-left shadow-[0_18px_48px_rgba(0,0,0,0.24)] transition duration-200 hover:-translate-y-0.5 hover:border-[#ffd84d]/35 md:p-6",
        featured
          ? "bg-[radial-gradient(circle_at_18%_0%,rgba(255,216,77,0.13),transparent_34%),linear-gradient(160deg,rgba(255,216,77,0.09),rgba(17,18,24,0.94)_42%,rgba(255,255,255,0.035))]"
          : "bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))]",
        active ? "border-[#ffd84d]/55" : "border-white/10",
      )}
      id={config.anchor}
      onClick={onClick}
      type="button"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10">
          {icon}
        </span>
        <span className="max-w-[58%] rounded-md border border-[#ffd84d]/20 px-2 py-1 text-right text-[10px] font-black uppercase leading-4 tracking-[0.12em] text-[#ffe98b]">
          {active ? "formulário aberto" : "interesse"}
        </span>
      </div>
      <h3 className="mt-5 text-2xl font-black uppercase leading-none text-white">{config.cardTitle}</h3>
      <p className="mt-2 text-xs font-black uppercase leading-5 tracking-[0.12em] text-[#ffe98b]">{config.audience}</p>
      <p className="mt-4 flex-1 text-sm leading-6 text-white/70">{config.description}</p>
      <span className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-[#ffd84d]/35 bg-[#ffd84d]/10 px-4 py-3 text-center text-sm font-extrabold uppercase leading-5 tracking-[0.08em] text-[#ffe98b]">
        Abrir formulário
      </span>
    </button>
  );
}
