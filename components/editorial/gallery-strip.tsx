import type { SiteImage } from "@/lib/content/site-images";
import { cn } from "@/lib/utils/cn";
import { EditorialImage } from "./editorial-image";

type GalleryStripProps = {
  images: readonly SiteImage[];
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
};

export function GalleryStrip({
  images,
  eyebrow = "Acervo oficial",
  title = "O jogo real agora aparece na página.",
  description = "Fotos oficiais dão textura de liga, comunidade, competição e mídia para a experiência pública do UR.",
  className,
}: GalleryStripProps) {
  const featured = images[0];
  const secondary = images.slice(1, 5);

  return (
    <div className={cn("grid gap-5 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-stretch", className)}>
      <div className="rounded-lg border border-[#ffd84d]/20 bg-[radial-gradient(circle_at_0%_0%,rgba(255,216,77,0.16),transparent_28%),linear-gradient(145deg,#111218,#050506)] p-5 md:p-7">
        <div className="text-[11px] font-black uppercase tracking-[0.18em] text-[#ffe98b]">{eyebrow}</div>
        <h2 className="mt-4 text-balance text-[clamp(2.2rem,8vw,3.5rem)] font-black uppercase leading-[0.9] text-white">
          {title}
        </h2>
        <p className="mt-5 text-base leading-7 text-white/70">{description}</p>
        <div className="mt-6 text-xs font-bold uppercase leading-5 tracking-[0.12em] text-white/45">
          Acervo Ultimate Rivals
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {featured ? (
          <EditorialImage
            className="min-h-[300px] sm:col-span-2 lg:col-span-2 lg:row-span-2"
            image={featured}
            label={featured.label}
          />
        ) : null}
        {secondary.map((image) => (
          <EditorialImage className="min-h-[144px] md:min-h-[170px]" image={image} key={image.id} label={image.label} />
        ))}
      </div>
    </div>
  );
}
