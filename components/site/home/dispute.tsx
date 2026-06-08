import { dispute, headings } from "@/lib/config/home";
import { Container, Section, SectionHeading, UrButton } from "../primitives";
import { Icon } from "../icons";

export function Dispute() {
  const h = headings.dispute;
  return (
    <Section id="disputa" tone="panel">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={h.eyebrow} title={h.title} lead={h.lead} />
          <UrButton href={h.cta.href} variant="secondary" className="shrink-0">{h.cta.label}</UrButton>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dispute.map((card) => (
            <li
              key={card.title}
              className="ur-card ur-card-hover group relative overflow-hidden rounded-3xl p-7"
            >
              <div className="absolute -right-10 -top-10 size-32 rounded-full bg-ur-gold/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
              <span className="inline-flex size-14 items-center justify-center rounded-2xl border border-ur-gold/25 bg-ur-gold/10 text-ur-gold">
                <Icon name={card.icon} className="size-7" />
              </span>
              <h3 className="ur-display mt-6 text-2xl text-ur-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ur-sand/65">{card.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
