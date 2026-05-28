import { SeasonInfoCard } from "./SeasonInfoCard";

type SeasonJourneyStep = {
  label: string;
  title: string;
  description: string;
};

type SeasonJourneyProps = {
  steps: readonly SeasonJourneyStep[];
};

export function SeasonJourney({ steps }: SeasonJourneyProps) {
  return (
    <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 [-webkit-overflow-scrolling:touch] md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3 xl:grid-cols-6">
      {steps.map((step, index) => (
        <div
          className="w-[78vw] max-w-[320px] shrink-0 snap-start md:w-auto md:max-w-none"
          key={step.title}
        >
          <SeasonInfoCard
            description={step.description}
            eyebrow={String(index + 1).padStart(2, "0")}
            meta={step.label}
            title={step.title}
          />
        </div>
      ))}
    </div>
  );
}
