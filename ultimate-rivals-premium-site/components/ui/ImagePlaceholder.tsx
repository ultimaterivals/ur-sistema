interface ImagePlaceholderProps {
  label?: string;
  aspectRatio?: string;
  className?: string;
}

export default function ImagePlaceholder({
  label,
  aspectRatio = "aspect-video",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden bg-ur-graphite-2 border border-white/5 flex items-center justify-center ${aspectRatio} ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 court-lines opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-ur-gold/4 via-transparent to-transparent" />
      {label && (
        <span className="relative font-display font-semibold text-[10px] uppercase tracking-[0.2em] text-ur-gold/30">
          {label}
        </span>
      )}
    </div>
  );
}
