import { URArtCard } from "./URArtCard";

interface RewardArtCardProps {
  icon: string; // SVG path
  title: string;
  description: string;
  note?: string;
  className?: string;
}

export function RewardArtCard({ icon, title, description, note, className }: RewardArtCardProps) {
  return (
    <URArtCard className={`flex flex-col gap-3 p-5 ${className ?? ""}`}>
      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(212,164,55,0.2)] bg-[rgba(212,164,55,0.08)]">
        <img alt="" aria-hidden className="h-5 w-5" loading="lazy" src={icon} />
      </div>
      <h4
        className="text-sm font-bold uppercase leading-tight text-[#F4F0E6] group-hover:text-[#D4A437] transition-colors"
        style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.06em" }}
      >
        {title}
      </h4>
      <p className="text-xs leading-5 text-[#8A8A93]" style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}>
        {description}
      </p>
      {note && (
        <p className="mt-auto text-[10px] italic text-[#8A8A93]/60" style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}>
          {note}
        </p>
      )}
    </URArtCard>
  );
}
