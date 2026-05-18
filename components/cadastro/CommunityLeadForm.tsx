import { LeadFormBase } from "@/components/cadastro/LeadFormBase";
import { leadFormConfigs } from "@/lib/lead-fields";

export function CommunityLeadForm() {
  return <LeadFormBase config={leadFormConfigs.community} />;
}
