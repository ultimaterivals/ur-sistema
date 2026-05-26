type BadgeType =
  | "n1" | "n2" | "n3"
  | "equipe-registrada" | "formacao-oficial" | "polo-ativo"
  | "classificado-sprint" | "classificado-series" | "convocado-legends"
  | "atleta-evolucao" | "destaque-rodada" | "top-ranking";

interface URBadgeProps {
  type: BadgeType;
  size?: number;
  alt?: string;
  className?: string;
}

export function URBadge({ type, size = 48, alt, className }: URBadgeProps) {
  const label = alt ?? type.replace(/-/g, " ");
  return (
    <img
      alt={label}
      className={className}
      height={size}
      loading="lazy"
      src={`/season-1/badges/badge-${type}.svg`}
      style={{ width: size, height: size, flexShrink: 0 }}
      width={size}
    />
  );
}
