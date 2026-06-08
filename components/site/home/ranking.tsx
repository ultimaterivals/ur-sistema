import Image from "next/image";
import { ChevronUp, ChevronDown, Minus, Coins } from "lucide-react";
import { ranking, type RankedAthlete } from "@/lib/config/ranking";
import { headings } from "@/lib/config/home";
import { Container, Section, SectionHeading, UrButton } from "../primitives";

function Sparkline({ data }: { data: number[] }) {
  const w = 72;
  const h = 24;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const span = max - min || 1;
  const pts = data
    .map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / span) * h}`)
    .join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible" aria-hidden>
      <polyline points={pts} fill="none" stroke="var(--ur-gold)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Variation({ value }: { value: number }) {
  if (value === 0) return <span className="inline-flex items-center text-ur-mute"><Minus className="size-3.5" /></span>;
  const up = value > 0;
  return (
    <span className={`ur-condensed inline-flex items-center gap-0.5 text-sm font-semibold tabular-nums ${up ? "text-ur-pos" : "text-ur-neg"}`}>
      {up ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
      {Math.abs(value)}
    </span>
  );
}

function Podium({ athlete, place }: { athlete: RankedAthlete; place: 1 | 2 | 3 }) {
  const styles = {
    1: { ring: "ring-ur-gold", glow: "shadow-[0_0_50px_rgba(224,168,46,0.35)]", order: "order-2 lg:-translate-y-5", badge: "bg-ur-gold text-ur-black-deep" },
    2: { ring: "ring-ur-sand/40", glow: "", order: "order-1", badge: "bg-ur-sand text-ur-black-deep" },
    3: { ring: "ring-[#b98a23]/50", glow: "", order: "order-3", badge: "bg-[#b98a23] text-ur-black-deep" },
  }[place];
  return (
    <div className={`ur-card ur-card-hover flex flex-col items-center gap-3 rounded-3xl p-6 text-center ${styles.order} ${styles.glow}`}>
      <div className="relative">
        <Image src={athlete.photo} alt={athlete.name} width={104} height={104} className={`size-26 rounded-2xl object-cover ring-2 ${styles.ring}`} style={{ width: 104, height: 104 }} />
        <span className={`ur-display absolute -bottom-3 left-1/2 inline-flex size-9 -translate-x-1/2 items-center justify-center rounded-full text-lg ${styles.badge}`}>
          {place}
        </span>
      </div>
      <h3 className="ur-display mt-2 text-xl text-ur-white">{athlete.name}</h3>
      <p className="text-xs text-ur-mute">{athlete.pole} • {athlete.level}</p>
      <div className="flex items-center gap-4">
        <span className="ur-display text-2xl ur-gold-text">{athlete.points.toLocaleString("pt-BR")}</span>
        <span className="inline-flex items-center gap-1 text-sm text-ur-gold-bright"><Coins className="size-3.5" />{athlete.coins}</span>
      </div>
    </div>
  );
}

export function Ranking() {
  const h = headings.ranking;
  const podium = ranking.slice(0, 3);
  const rest = ranking.slice(3);
  return (
    <Section id="ranking">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={h.eyebrow} title={h.title} lead={h.lead} />
          <UrButton href={h.cta.href} variant="secondary" className="shrink-0">{h.cta.label}</UrButton>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Podium athlete={podium[1]} place={2} />
          <Podium athlete={podium[0]} place={1} />
          <Podium athlete={podium[2]} place={3} />
        </div>

        <div className="ur-card overflow-hidden rounded-3xl">
          <div className="hidden grid-cols-[3rem_1fr_5rem_5rem_5rem_4rem] items-center gap-4 border-b border-ur-line bg-white/[0.02] px-6 py-3 sm:grid">
            <span className="ur-eyebrow text-[10px] text-ur-gold">#</span>
            <span className="ur-eyebrow text-[10px] text-ur-gold">Atleta</span>
            <span className="ur-eyebrow text-right text-[10px] text-ur-gold">Pontos</span>
            <span className="ur-eyebrow text-right text-[10px] text-ur-gold">Coins</span>
            <span className="ur-eyebrow text-center text-[10px] text-ur-gold">Evolução</span>
            <span className="ur-eyebrow text-right text-[10px] text-ur-gold">Var.</span>
          </div>
          <ul>
            {rest.map((a) => (
              <li key={a.position} className="grid grid-cols-[2rem_1fr_auto] items-center gap-3 px-4 py-3.5 transition-colors hover:bg-ur-gold/[0.04] sm:grid-cols-[3rem_1fr_5rem_5rem_5rem_4rem] sm:gap-4 sm:px-6">
                <span className="ur-display text-lg text-ur-sand/70">{a.position}</span>
                <div className="flex min-w-0 items-center gap-3">
                  <Image src={a.photo} alt={a.name} width={40} height={40} className="size-10 rounded-lg object-cover" />
                  <div className="min-w-0">
                    <p className="ur-condensed truncate text-base font-semibold text-ur-white">{a.name}</p>
                    <p className="text-[11px] text-ur-mute">{a.pole} • {a.level}</p>
                  </div>
                </div>
                <span className="ur-display text-right text-lg text-ur-gold tabular-nums sm:w-20">{a.points.toLocaleString("pt-BR")}</span>
                <span className="hidden items-center justify-end gap-1 text-sm text-ur-gold-bright tabular-nums sm:flex"><Coins className="size-3.5" />{a.coins}</span>
                <span className="hidden justify-center sm:flex"><Sparkline data={a.spark} /></span>
                <span className="hidden justify-end sm:flex"><Variation value={a.variation} /></span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
