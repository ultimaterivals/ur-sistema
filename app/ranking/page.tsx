import { PlaceholderPage } from "@/components/pages/placeholder-page";
import { routePlaceholders } from "@/lib/content/routes";

export default function RankingPage() {
  return <PlaceholderPage {...routePlaceholders["/ranking"]} />;
}
