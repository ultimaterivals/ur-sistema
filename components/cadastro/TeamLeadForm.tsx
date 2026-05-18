import { LeadFormBase } from "@/components/cadastro/LeadFormBase";
import { leadFormConfigs } from "@/lib/lead-fields";

export function TeamLeadForm() {
  return <LeadFormBase config={leadFormConfigs.team} />;
}
