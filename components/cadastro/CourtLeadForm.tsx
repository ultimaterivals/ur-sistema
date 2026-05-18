import { LeadFormBase } from "@/components/cadastro/LeadFormBase";
import { leadFormConfigs } from "@/lib/lead-fields";

export function CourtLeadForm() {
  return <LeadFormBase config={leadFormConfigs.court} />;
}
