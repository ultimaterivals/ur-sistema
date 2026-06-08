import { scoring, headings } from "@/lib/config/home";
import { Container, Section, SectionHeading, UrButton } from "../primitives";

export function Scoring() {
  const h = headings.scoring;
  return (
    <Section id="pontuacao" tone="panel">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={h.eyebrow} title={h.title} lead={h.lead} />
          <UrButton href={h.cta.href} variant="secondary" className="shrink-0">{h.cta.label}</UrButton>
        </div>

        <div className="ur-card overflow-hidden rounded-3xl">
          <div className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-ur-line bg-white/[0.02] px-6 py-4">
            {scoring.columns.map((c, i) => (
              <span
                key={c}
                className={`ur-eyebrow text-[11px] text-ur-gold ${i > 0 ? "text-right tabular-nums" : ""}`}
              >
                {c}
              </span>
            ))}
          </div>
          <ul>
            {scoring.rows.map((r, i) => (
              <li
                key={r.action}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-4 px-6 py-4 transition-colors hover:bg-ur-gold/[0.04] data-[alt=true]:bg-white/[0.015]"
                data-alt={i % 2 === 1}
              >
                <span className="ur-condensed text-base font-medium text-ur-white">{r.action}</span>
                <span className="ur-display w-20 text-right text-xl text-ur-gold tabular-nums">{r.points}</span>
                <span className="ur-display w-20 text-right text-xl text-ur-gold-bright tabular-nums">{r.coins}</span>
              </li>
            ))}
          </ul>
          <p className="border-t border-ur-line px-6 py-4 text-xs text-ur-mute">{scoring.note}</p>
        </div>
      </Container>
    </Section>
  );
}
