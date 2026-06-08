import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blog, headings } from "@/lib/config/home";
import { images } from "@/lib/config/images";
import { Container, Section, SectionHeading, UrButton } from "../primitives";

export function Blog() {
  const h = headings.blog;
  return (
    <Section id="blog" tone="panel">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={h.eyebrow} title={h.title} lead={h.lead} />
          <UrButton href={h.cta.href} variant="secondary" className="shrink-0">{h.cta.label}</UrButton>
        </div>

        <ul className="flex flex-wrap gap-2">
          {blog.categories.map((c) => (
            <li key={c} className="ur-condensed rounded-full border border-ur-line bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ur-sand/70">
              {c}
            </li>
          ))}
        </ul>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {images.blog.map((src, i) => (
            <Link
              key={i}
              href="/blog"
              className="ur-card-hover group relative flex min-h-[18rem] flex-col justify-end overflow-hidden rounded-3xl border border-ur-line"
            >
              <Image src={src} alt="" fill sizes="(max-width:768px) 100vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ur-black-deep via-ur-black-deep/60 to-transparent" />
              <div className="relative flex flex-col gap-2 p-5">
                <span className="ur-eyebrow text-[10px] text-ur-gold">{blog.categories[i % blog.categories.length]}</span>
                <p className="ur-display text-lg leading-tight text-ur-white">Conteúdo da temporada em formação</p>
                <span className="ur-condensed inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-ur-sand/70">
                  Ler matéria <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
