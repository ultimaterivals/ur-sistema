import { Award, TrendingUp, ArrowRight, User, Zap, Heart, Star, ChevronUp } from "lucide-react";

const badges = [
  {
    id: "n1-elite",
    label: "N1 · Elite",
    desc: "Nível mais alto do sistema competitivo UR",
    icon: Award,
    color: "#D4A437",
    bg: "#D4A43715",
    border: "#D4A43740",
  },
  {
    id: "n2-avancado",
    label: "N2 · Avançado",
    desc: "Atleta com curva de evolução consolidada",
    icon: TrendingUp,
    color: "#F0C060",
    bg: "#F0C06015",
    border: "#F0C06030",
  },
  {
    id: "n3-desenvolvimento",
    label: "N3 · Desenvolvimento",
    desc: "Entrada, preparação e orientação competitiva",
    icon: ArrowRight,
    color: "#C8B99A",
    bg: "#C8B99A15",
    border: "#C8B99A30",
  },
  {
    id: "representante-polo",
    label: "Representante do Polo",
    desc: "Referência e voz ativa da comunidade local",
    icon: User,
    color: "#7CB9E8",
    bg: "#7CB9E815",
    border: "#7CB9E830",
  },
  {
    id: "sequencia-ativa",
    label: "Sequência Ativa",
    desc: "Participação contínua e sem interrupção nas rodadas",
    icon: Zap,
    color: "#FF8C42",
    bg: "#FF8C4215",
    border: "#FF8C4230",
  },
  {
    id: "fair-play",
    label: "Fair Play",
    desc: "Conduta exemplar dentro e fora da quadra",
    icon: Heart,
    color: "#4CAF50",
    bg: "#4CAF5015",
    border: "#4CAF5030",
  },
  {
    id: "caminho-legends",
    label: "Caminho para Legends",
    desc: "Trajetória alinhada com o evento final da temporada",
    icon: Star,
    color: "#D4A437",
    bg: "#D4A43720",
    border: "#D4A43750",
  },
  {
    id: "destaque-rodada",
    label: "Destaque da Rodada",
    desc: "Melhor desempenho da rodada no polo",
    icon: ChevronUp,
    color: "#D4A437",
    bg: "#D4A43715",
    border: "#D4A43730",
  },
];

export default function AchievementBadges() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {badges.map((badge) => {
        const Icon = badge.icon;
        return (
          <div
            key={badge.id}
            className="bg-card rounded-sm p-4 border hover:shadow-card-hover transition-all duration-300 group"
            style={{ borderColor: badge.border }}
          >
            <div
              className="w-10 h-10 rounded-sm flex items-center justify-center mb-3 border"
              style={{ backgroundColor: badge.bg, borderColor: badge.border }}
            >
              <Icon size={17} style={{ color: badge.color }} />
            </div>
            <p
              className="font-display font-bold text-[11px] uppercase leading-tight mb-1.5 tracking-wide"
              style={{ color: badge.color }}
            >
              {badge.label}
            </p>
            <p className="text-ur-muted text-[10px] font-body leading-relaxed">{badge.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
