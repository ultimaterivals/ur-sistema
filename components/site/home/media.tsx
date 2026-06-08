import { media, headings } from "@/lib/config/home";
import { images } from "@/lib/config/images";
import { FocusRail, type FocusRailItem } from "@/components/ui/focus-rail";
import { Container, Section, SectionHeading, UrButton } from "../primitives";

const labels = ["Transmissão", "Entrevista", "Bastidores", "Cobertura", "Destaque", "Melhores momentos"];

const items: FocusRailItem[] = images.media.map((src, i) => ({
  id: i,
  title: labels[i] ?? "Conteúdo",
  description: "Canal oficial Ultimate Rivals",
  imageSrc: src,
  href: "/midia",
  meta: media.types[i % media.types.length],
}));

export function Media() {
  const h = headings.media;
  return (
    <Section id="midia" tone="deep">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={h.eyebrow} title={h.title} lead={h.lead} />
          <UrButton href={h.cta.href} className="shrink-0">{h.cta.label}</UrButton>
        </div>

        <FocusRail items={items} autoPlay loop className="rounded-3xl" />

        <ul className="flex flex-wrap justify-center gap-2">
          {media.types.map((t) => (
            <li key={t} className="ur-condensed rounded-full border border-ur-line bg-white/[0.03] px-4 py-2 text-xs font-medium uppercase tracking-wide text-ur-sand/70">
              {t}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
