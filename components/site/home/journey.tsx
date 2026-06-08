import { journey, headings } from "@/lib/config/home";
import { Container, Section, SectionHeading, UrButton } from "../primitives";
import { Icon } from "../icons";

export function Journey() {
  const h = headings.journey;
  return (
    <Section id="como-funciona">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow={h.eyebrow} title={h.title} lead={h.lead} align="center" />

        <ol className="relative grid gap-4 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-ur-gold/40 to-transparent lg:block" />
          {journey.map((s) => (
            <li key={s.step} className="ur-card ur-card-hover relative flex flex-col items-center gap-4 rounded-3xl p-7 text-center">
              <span className="relative inline-flex size-16 items-center justify-center rounded-2xl border border-ur-gold/30 bg-ur-black text-ur-gold">
                <Icon name={s.icon} className="size-7" />
                <span className="ur-display absolute -right-2 -top-2 inline-flex size-7 items-center justify-center rounded-full bg-ur-gold text-sm text-ur-black-deep">
                  {s.step.replace("0", "")}
                </span>
              </span>
              <h3 className="ur-display text-xl text-ur-white">{s.title}</h3>
              <p className="text-sm leading-6 text-ur-sand/65">{s.description}</p>
            </li>
          ))}
        </ol>

        <div className="flex justify-center">
          <UrButton href={h.cta.href} variant="primary" size="lg">{h.cta.label}</UrButton>
        </div>
      </Container>
    </Section>
  );
}
