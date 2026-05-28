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
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {steps.map((step, index) => (
        <SeasonInfoCard
          description={step.description}
          eyebrow={String(index + 1).padStart(2, "0")}
          key={step.title}
          meta={step.label}
          title={step.title}
        />
      ))}
    </div>
  );
}
