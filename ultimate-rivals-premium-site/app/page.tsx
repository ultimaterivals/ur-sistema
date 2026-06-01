import HeroCinematic from "@/components/home/HeroCinematic";
import ProblemSection from "@/components/home/ProblemSection";
import DashboardPanel from "@/components/home/DashboardPanel";
import JourneyTimeline from "@/components/home/JourneyTimeline";
import EntryModalities from "@/components/home/EntryModalities";
import PolosArena from "@/components/home/PolosArena";
import RankingSpectacle from "@/components/home/RankingSpectacle";
import MarketShowcase from "@/components/home/MarketShowcase";
import MediaSection from "@/components/home/MediaSection";
import HunterSection from "@/components/home/HunterSection";
import LegendsSection from "@/components/home/LegendsSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroCinematic />
      <ProblemSection />
      <DashboardPanel />
      <JourneyTimeline />
      <EntryModalities />
      <PolosArena />
      <RankingSpectacle />
      <MarketShowcase />
      <MediaSection />
      <HunterSection />
      <LegendsSection />
      <FinalCTA />
    </>
  );
}
