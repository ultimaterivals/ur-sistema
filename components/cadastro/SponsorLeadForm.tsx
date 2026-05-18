import { LeadFormBase } from "@/components/cadastro/LeadFormBase";
import { leadFormConfigs } from "@/lib/lead-fields";

export function SponsorLeadForm() {
  return <LeadFormBase config={leadFormConfigs.sponsor} />;
}
