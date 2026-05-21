import Image from "next/image";
import { Camera, Trophy } from "lucide-react";
import type { SiteImage } from "@/lib/content/site-images";
import { cn } from "@/lib/utils/cn";

type EditorialImageProps = {
  image?: SiteImage;
  className?: string;
  priority?: boolean;
  sizes?: string;
  label?: string;
  objectPosition?: string;
};

const toneClasses: Record<NonNullable<SiteImage["fallbackTone"]>, string> = {
  match:
    "bg-[radial-gradient(circle_at_30%_18%,rgba(255,216,77,0.24),transparent_28%),radial-gradient(circle_at_78%_72%,rgba(255,255,255,0.16),transparent_24%),linear-gradient(135deg,#15171d,#040506_62%,#1b1607)]",
  arena:
    "bg-[radial-gradient(circle_at_20%_70%,rgba(255,216,77,0.2),transparent_28%),linear-gradient(135deg,#1b1a16,#06070a_56%,#111827)]",
  media:
    "bg-[radial-gradient(circle_at_70%_18%,rgba(255,255,255,0.16),transparent_26%),radial-gradient(circle_at_20%_80%,rgba(255,216,77,0.18),transparent_26%),linear-gradient(135deg,#10131a,#050506_58%,#211b08)]",
  market:
    "bg-[radial-gradient(circle_at_72%_24%,rgba(255,216,77,0.26),transparent_28%),linear-gradient(145deg,#141414,#050505_52%,#261d07)]",
  community:
    "bg-[radial-gradient(circle_at_24%_18%,rgba(255,216,77,0.18),transparent_24%),radial-gradient(circle_at_76%_74%,rgba(255,255,255,0.14),transparent_28%),linear-gradient(145deg,#11151c,#050506_60%,#161006)]",
};

export function EditorialImage({
  image,
  className,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  label,
  objectPosition = "center",
}: EditorialImageProps) {
  const tone = image?.fallbackTone ?? "match";

  return (
    <div className={cn("relative min-h-full overflow-hidden rounded-lg border border-white/10", className)}>
      {image?.src ? (
        <Image
          alt={image.alt}
          className="h-full w-full object-cover"
          fill
          priority={priority}
          sizes={sizes}
          src={image.src}
          style={{ objectPosition }}
        />
      ) : (
        <div className={cn("absolute inset-0", toneClasses[tone])}>
          <div className="absolute inset-0 opacity-[0.11] [background-image:linear-gradient(rgba(255,255,255,.42)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.42)_1px,transparent_1px)] [background-size:46px_46px]" />
          <div className="absolute left-6 top-6 grid h-12 w-12 place-items-center rounded-lg border border-[#ffd84d]/25 bg-black/35 text-[#ffd84d]">
            <Camera aria-hidden className="h-6 w-6" />
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="max-w-sm text-[11px] font-black uppercase leading-4 tracking-[0.16em] text-[#ffe98b]">
              cobertura oficial em preparação
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/60">
              <Trophy aria-hidden className="h-4 w-4 text-[#ffd84d]" />
              {label ?? image?.label ?? "asset editorial"}
            </div>
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.62))]" />
    </div>
  );
}
