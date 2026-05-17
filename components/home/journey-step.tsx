type JourneyStepProps = {
  step: string;
  title: string;
  description: string;
};

export function JourneyStep({ step, title, description }: JourneyStepProps) {
  return (
    <div className="relative min-h-[178px] rounded-lg border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.18)] transition duration-200 hover:border-[#ffd84d]/25 md:p-6">
      <div className="flex items-center gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-[#ffd84d]/30 bg-[#ffd84d]/10 text-sm font-black text-[#ffe98b]">
          {step}
        </span>
        <h3 className="text-lg font-black uppercase leading-tight text-white">{title}</h3>
      </div>
      <p className="mt-4 text-sm leading-6 text-white/70">{description}</p>
    </div>
  );
}
