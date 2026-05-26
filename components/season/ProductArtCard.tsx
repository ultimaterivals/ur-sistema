import Link from "next/link";
import { URArtCard } from "./URArtCard";
import type { season1 } from "@/lib/content/season1";

type LadderItem = (typeof season1.ladder)[number];

interface ProductArtCardProps {
  product: LadderItem;
  className?: string;
}

const productConfig: Record<
  string,
  { accent: string; texture: string; symbolSize: number }
> = {
  "ur-play": {
    accent: "rgba(20,180,150,0.08)",
    texture: "bg-arena-grid.svg",
    symbolSize: 96,
  },
  "ur-sprint": {
    accent: "rgba(220,120,20,0.08)",
    texture: "bg-energy-lines.svg",
    symbolSize: 96,
  },
  "ur-series": {
    accent: "rgba(80,120,220,0.08)",
    texture: "bg-broadcast.svg",
    symbolSize: 96,
  },
  "ur-legends": {
    accent: "rgba(212,164,55,0.12)",
    texture: "bg-legends.svg",
    symbolSize: 112,
  },
};

export function ProductArtCard({ product, className }: ProductArtCardProps) {
  const isLegends = product.id === "ur-legends";
  const config = productConfig[product.id] ?? productConfig["ur-play"];

  return (
    <Link href={product.href} className="block">
      <URArtCard
        variant={isLegends ? "legends" : "default"}
        className={[
          "flex flex-col items-center justify-between p-6 md:p-8 cursor-pointer",
          "min-h-[320px] md:min-h-[400px]",
          // Scale only on non-touch devices
          "sm:hover:scale-[1.02]",
          className ?? "",
        ].join(" ")}
      >
        {/* Per-product texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(/season-1/textures/${config.texture})`,
            backgroundSize: "cover",
            opacity: 0.08,
          }}
        />
        {/* Per-product accent gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 40%, ${config.accent} 0%, transparent 70%)`,
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-5 w-full h-full">
          {/* Symbol — upper 60% */}
          <div
            className="flex items-center justify-center mt-2"
            style={{ width: config.symbolSize, height: config.symbolSize }}
          >
            <img
              alt={product.name}
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
              src={product.symbolSolid}
              style={{ transition: "transform 300ms cubic-bezier(0.4,0,0.2,1)" }}
            />
          </div>

          {/* Name + description */}
          <div className="text-center flex-1 flex flex-col items-center gap-2">
            <h3
              className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-[#D4A437] group-hover:text-[#F4F0E6] transition-colors duration-200"
              style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em" }}
            >
              {product.name}
            </h3>
            <p
              className="text-sm text-[#8A8A93] leading-5 max-w-[200px]"
              style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
            >
              {product.description}
            </p>
          </div>

          {/* CTA at bottom */}
          <span
            className="text-xs font-bold uppercase tracking-widest text-[#D4A437]/60 group-hover:text-[#D4A437] transition-colors duration-200"
            style={{ fontFamily: "'Manrope', system-ui, sans-serif", letterSpacing: "0.14em" }}
          >
            {product.cta} →
          </span>
        </div>
      </URArtCard>
    </Link>
  );
}
