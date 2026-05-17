import { seasonSteps } from "@/lib/content/home";

export function SeasonTimeline() {
  return (
    <ol className="grid gap-3 md:grid-cols-2 lg:grid-cols-7">
      {seasonSteps.map((step, index) => (
        <li
          className="min-h-[132px] rounded-lg border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-4 transition duration-200 hover:border-[#ffd84d]/25"
          key={step}
        >
          <span className="text-xs font-black uppercase tracking-[0.18em] text-[#ffd84d]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 text-base font-black uppercase leading-tight text-white">{step}</h3>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-white/55">
            temporada em formação
          </p>
        </li>
      ))}
    </ol>
  );
}
