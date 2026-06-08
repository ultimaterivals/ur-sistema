import { formats, headings } from "@/lib/config/home";
import { Container, Section, SectionHeading, UrButton } from "../primitives";
import { Icon } from "../icons";

export function Formats() {
  const h = headings.formats;
  return (
    <Section id="equipes-duplas">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow={h.eyebrow} title={h.title} lead={h.lead} align="center" />

        <div className="grid gap-4 md:grid-cols-3">
          {formats.map((f, i) => (
            <article
              key={f.title}
              className={`ur-card-hover relative flex flex-col gap-5 rounded-3xl p-8 ${
                i === 2 ? "border-2 border-ur-gold/40 bg-gradient-to-b from-ur-gold/[0.06] to-ur-graphite" : "ur-card"
              }`}
            >
              <span className="inline-flex size-14 items-center justify-center rounded-2xl border border-ur-gold/25 bg-ur-gold/10 text-ur-gold">
                <Icon name={f.icon} className="size-7" />
              </span>
              <h3 className="ur-display text-2xl text-ur-white">{f.title}</h3>
              <p className="text-sm leading-6 text-ur-sand/70">{f.description}</p>
              {i === 2 ? (
                <span className="ur-eyebrow mt-auto w-fit rounded-full bg-ur-gold/15 px-3 py-1 text-[10px] text-ur-gold">
                  Ninguém fica de fora
                </span>
              ) : null}
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <UrButton href={h.cta.href} size="lg">{h.cta.label}</UrButton>
        </div>
      </Container>
    </Section>
  );
}
