import Image from "next/image";
import { levels, headings } from "@/lib/config/home";
import { images } from "@/lib/config/images";
import { Container, Section, SectionHeading, UrButton } from "../primitives";

export function Levels() {
  const h = headings.levels;
  return (
    <Section id="niveis" tone="deep">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow={h.eyebrow} title={h.title} lead={h.lead} />

        <div className="grid gap-4 md:grid-cols-3">
          {levels.map((lv, i) => (
            <article
              key={lv.tag}
              className="ur-card-hover group relative flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-3xl border border-ur-line"
            >
              <Image
                src={images.levels[i]}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ur-black-deep via-ur-black-deep/70 to-transparent" />
              <div className="relative flex flex-col gap-2 p-7">
                <span
                  className="ur-display w-fit rounded-lg px-3 py-1 text-2xl text-ur-black-deep"
                  style={{ backgroundColor: lv.accent }}
                >
                  {lv.tag}
                </span>
                <h3 className="ur-display text-3xl text-ur-white">{lv.title}</h3>
                <p className="text-sm leading-6 text-ur-sand/75">{lv.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="ur-display max-w-md text-2xl text-ur-sand">
            Nenhum atleta começa atrasado. Todos começam de onde realmente pertencem.
          </p>
          <UrButton href={h.cta.href} variant="secondary" className="shrink-0">{h.cta.label}</UrButton>
        </div>
      </Container>
    </Section>
  );
}
