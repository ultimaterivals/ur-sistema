import Image from "next/image";
import { vision, headings } from "@/lib/config/home";
import { images } from "@/lib/config/images";
import { Container, Section, SectionHeading, UrButton } from "../primitives";

export function About() {
  const hAbout = headings.about;
  const hVision = headings.vision;
  return (
    <Section id="quem-somos" tone="deep">
      <Container className="flex flex-col gap-16">
        {/* Quem somos */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-ur-line">
            <Image src={images.about} alt="" fill sizes="50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ur-black-deep/70 to-transparent" />
          </div>
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow={hAbout.eyebrow} title={hAbout.title} lead={hAbout.lead} />
            <UrButton href={hAbout.cta.href} variant="secondary" className="w-fit">{hAbout.cta.label}</UrButton>
          </div>
        </div>

        {/* Visão de futuro — roadmap */}
        <div className="flex flex-col gap-10">
          <SectionHeading eyebrow={hVision.eyebrow} title={hVision.title} lead={hVision.lead} />
          <ol className="relative grid gap-4 md:grid-cols-5">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-ur-gold/10 via-ur-gold/40 to-ur-gold/10 md:block" />
            {vision.roadmap.map((r) => (
              <li key={r.year} className="relative flex flex-col gap-3">
                <span className="ur-display relative z-10 inline-flex w-fit items-center rounded-full border border-ur-gold/30 bg-ur-black px-3 py-1 text-lg text-ur-gold">
                  {r.year}
                </span>
                <h3 className="ur-condensed text-base font-semibold uppercase tracking-wide text-ur-white">{r.title}</h3>
                <p className="text-sm leading-6 text-ur-sand/60">{r.description}</p>
              </li>
            ))}
          </ol>
          <UrButton href={hVision.cta.href} className="w-fit">{hVision.cta.label}</UrButton>
        </div>
      </Container>
    </Section>
  );
}
