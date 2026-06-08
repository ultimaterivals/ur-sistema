import { Check, Crown } from "lucide-react";
import { awards, headings } from "@/lib/config/home";
import { Container, Section, SectionHeading, UrButton } from "../primitives";

export function Awards() {
  const h = headings.awards;
  return (
    <Section id="premiacoes" tone="deep">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow={h.eyebrow} title={h.title} lead={h.lead} align="center" />

        <div className="grid gap-4 lg:grid-cols-3">
          {awards.tiers.map((t) => (
            <article
              key={t.name}
              className={`ur-card-hover relative flex flex-col gap-6 overflow-hidden rounded-3xl p-8 ${
                t.featured
                  ? "border-2 border-ur-gold bg-gradient-to-b from-ur-gold/[0.08] to-ur-graphite shadow-[0_0_60px_rgba(224,168,46,0.18)]"
                  : "ur-card"
              }`}
            >
              {t.featured ? (
                <span className="ur-eyebrow absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-ur-gold px-3 py-1 text-[10px] text-ur-black-deep">
                  <Crown className="size-3" /> Destaque
                </span>
              ) : null}
              <h3 className="ur-display text-2xl text-ur-white">{t.name}</h3>
              <div className="flex flex-col gap-1">
                <span className="ur-eyebrow text-[10px] text-ur-mute">Premiação</span>
                <span className="ur-display text-4xl ur-gold-text">{t.prize}</span>
              </div>
              <div className="flex flex-col gap-1 border-t border-ur-line pt-4">
                <span className="ur-eyebrow text-[10px] text-ur-mute">Repasse</span>
                <span className="ur-display text-2xl text-ur-sand">{t.repasse}</span>
              </div>
              <ul className="flex flex-col gap-2.5 border-t border-ur-line pt-4">
                {t.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm text-ur-sand/80">
                    <Check className="size-4 text-ur-gold" /> {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6">
          <ul className="flex flex-wrap justify-center gap-2">
            {awards.categories.map((c) => (
              <li key={c} className="ur-condensed rounded-full border border-ur-line bg-white/[0.03] px-4 py-2 text-xs font-medium uppercase tracking-wide text-ur-sand/70">
                {c}
              </li>
            ))}
          </ul>
          <p className="max-w-xl text-center text-xs text-ur-mute">{awards.note}</p>
          <UrButton href={h.cta.href} size="lg">{h.cta.label}</UrButton>
        </div>
      </Container>
    </Section>
  );
}
