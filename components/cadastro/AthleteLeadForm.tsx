import { LeadFormBase } from "@/components/cadastro/LeadFormBase";
import { leadFormConfigs } from "@/lib/lead-fields";

export function AthleteLeadForm() {
  return <LeadFormBase config={leadFormConfigs.athlete} />;
}
