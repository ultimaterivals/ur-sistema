import Image from "next/image";
import { Check } from "lucide-react";
import { hunter, headings } from "@/lib/config/home";
import { images } from "@/lib/config/images";
import { Container, Section, SectionHeading, UrButton } from "../primitives";

export function Hunter() {
  const h = headings.hunter;
  return (
    <Section id="hunter">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow={h.eyebrow} title={h.title} lead={h.lead} />

        <div className="grid gap-4 lg:grid-cols-2">
          {/* Mentalidade — image-led, premium dark */}
          <article className="relative flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-3xl border border-ur-line">
            <Image src={images.hunter} alt="" fill sizes="50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ur-black-deep via-ur-black-deep/80 to-ur-black-deep/20" />
            <div className="relative flex flex-col gap-3 p-8">
              <span className="ur-eyebrow text-[11px] text-ur-gold">Elite • Disciplina • Evolução</span>
              <h3 className="ur-display text-3xl text-ur-white">{hunter.mindset.title}</h3>
              <p className="max-w-md text-sm leading-6 text-ur-sand/80">{hunter.mindset.description}</p>
              <UrButton href={hunter.mindset.cta.href} variant="secondary" className="mt-2 w-fit">
                {hunter.mindset.cta.label}
              </UrButton>
            </div>
          </article>

          {/* Program — structured */}
          <article className="ur-card flex flex-col gap-6 rounded-3xl p-8">
            <span className="ur-eyebrow text-[11px] text-ur-gold">Programa oficial</span>
            <h3 className="ur-display text-3xl text-ur-white">{hunter.program.title}</h3>
            <p className="text-sm leading-6 text-ur-sand/70">{hunter.program.description}</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {hunter.program.includes.map((it) => (
                <li key={it} className="flex items-center gap-3 rounded-2xl border border-ur-line bg-white/[0.03] px-4 py-3.5">
                  <span className="inline-flex size-7 items-center justify-center rounded-full bg-ur-gold/15 text-ur-gold">
                    <Check className="size-4" />
                  </span>
                  <span className="ur-condensed text-sm font-medium text-ur-white">{it}</span>
                </li>
              ))}
            </ul>
            <UrButton href={hunter.program.cta.href} className="mt-auto w-fit">{hunter.program.cta.label}</UrButton>
          </article>
        </div>
      </Container>
    </Section>
  );
}
