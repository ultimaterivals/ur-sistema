import Link from "next/link";
import { URArtCard } from "./URArtCard";
import type { season1 } from "@/lib/content/season1";

type LadderItem = (typeof season1.ladder)[number];

interface ProductArtCardProps {
  product: LadderItem;
  className?: string;
}

export function ProductArtCard({ product, className }: ProductArtCardProps) {
  const isLegends = product.id === "ur-legends";
  return (
    <Link href={product.href} className="block">
      <URArtCard
        variant={isLegends ? "legends" : "default"}
        className={`flex flex-col items-center justify-between p-6 md:p-8 min-h-[280px] md:min-h-[340px] cursor-pointer ${className ?? ""}`}
      >
        {/* Texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "url(/season-1/textures/bg-arena-grid.svg)",
            backgroundSize: "cover",
          }}
        />
        {/* Symbol */}
        <div className="relative z-10 flex flex-col items-center gap-6 w-full">
          <div className="flex items-center justify-center w-[100px] h-[100px] md:w-[120px] md:h-[120px]">
            <img
              alt={product.name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-250"
              loading="lazy"
              src={product.symbolSolid}
            />
          </div>
          <div className="text-center">
            <h3
              className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-[#D4A437] group-hover:text-[#F4F0E6] transition-colors"
              style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em" }}
            >
              {product.name}
            </h3>
            <p className="mt-2 text-sm text-[#8A8A93] leading-5 max-w-[200px] mx-auto" style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}>
              {product.description}
            </p>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4A437]/60 group-hover:text-[#D4A437] transition-colors" style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}>
            {product.cta} →
          </span>
        </div>
      </URArtCard>
    </Link>
  );
}
