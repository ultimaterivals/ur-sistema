import { Coins as CoinsIcon, Check } from "lucide-react";
import { coins, headings } from "@/lib/config/home";
import { Container, Section, SectionHeading, UrButton } from "../primitives";

export function Coins() {
  const h = headings.coins;
  return (
    <Section id="ur-coins">
      <Container>
        <div className="ur-card relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
          <div className="absolute -right-20 -top-20 size-72 rounded-full bg-ur-gold/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div className="flex flex-col gap-6">
              <span className="inline-flex size-16 items-center justify-center rounded-2xl border border-ur-gold/30 bg-ur-gold/10 text-ur-gold">
                <CoinsIcon className="size-8" />
              </span>
              <SectionHeading eyebrow={h.eyebrow} title={h.title} lead={h.lead} />
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <UrButton href={h.cta.href} size="lg">{h.cta.label}</UrButton>
                <p className="ur-condensed text-sm uppercase tracking-wide text-ur-sand/60">
                  Quanto maior sua participação, maior sua evolução.
                </p>
              </div>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {coins.examples.map((ex) => (
                <li key={ex} className="flex items-center gap-3 rounded-2xl border border-ur-line bg-white/[0.03] px-4 py-4">
                  <span className="inline-flex size-7 items-center justify-center rounded-full bg-ur-gold/15 text-ur-gold">
                    <Check className="size-4" />
                  </span>
                  <span className="ur-condensed text-base font-medium text-ur-white">{ex}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
