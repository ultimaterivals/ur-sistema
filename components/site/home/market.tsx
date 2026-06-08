import { market, headings } from "@/lib/config/home";
import { Container, Section, SectionHeading, UrButton } from "../primitives";
import { Icon } from "../icons";

export function Market() {
  const h = headings.market;
  return (
    <Section id="ur-market" tone="panel">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={h.eyebrow} title={h.title} lead={h.lead} />
          <UrButton href={h.cta.href} className="shrink-0">{h.cta.label}</UrButton>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {market.categories.map((c, i) => (
            <li
              key={c.title}
              className={`ur-card ur-card-hover group flex items-center gap-4 rounded-2xl p-5 ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl border border-ur-gold/25 bg-ur-gold/10 text-ur-gold transition-transform duration-300 group-hover:scale-110">
                <Icon name={c.icon} className="size-6" />
              </span>
              <span className="ur-condensed text-base font-semibold uppercase tracking-wide text-ur-white">{c.title}</span>
            </li>
          ))}
          <li className="flex items-center justify-center rounded-2xl border border-dashed border-ur-gold/30 bg-ur-gold/[0.04] p-5">
            <span className="ur-condensed text-center text-sm font-semibold uppercase tracking-wide text-ur-gold">
              Vitrine premium • acesso por UR Coins
            </span>
          </li>
        </ul>
      </Container>
    </Section>
  );
}
