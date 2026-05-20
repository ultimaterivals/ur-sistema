import { cn } from "@/lib/utils/cn";

type AdSlotHorizontalProps = {
  label?: string;
  className?: string;
};

export function AdSlotHorizontal({ label = "Espaço premium para patrocinador", className }: AdSlotHorizontalProps) {
  return (
    <aside
      aria-label={label}
      className={cn(
        "overflow-hidden rounded-lg border border-dashed border-[#ffd84d]/28 bg-[linear-gradient(135deg,rgba(255,216,77,0.1),rgba(255,255,255,0.035))] p-4",
        className,
      )}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ffe98b]">mídia patrocinada</div>
          <div className="mt-1 text-sm font-extrabold uppercase leading-5 text-white/78">{label}</div>
        </div>
        <div className="rounded-md border border-white/10 bg-black/30 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white/50">
          slot preparado
        </div>
      </div>
    </aside>
  );
}

