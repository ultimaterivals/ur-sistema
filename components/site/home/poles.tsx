import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Users } from "lucide-react";
import { poles, headings } from "@/lib/config/home";
import { images } from "@/lib/config/images";
import { poleStandings } from "@/lib/config/ranking";
import { Container, Section, SectionHeading } from "../primitives";

export function Poles() {
  const h = headings.poles;
  return (
    <Section id="polos" tone="deep">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow={h.eyebrow} title={h.title} lead={h.lead} />

        <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          {/* Pole standings map-style board */}
          <div className="ur-card relative overflow-hidden rounded-3xl p-6">
            <Image src={images.poles[0]} alt="" fill sizes="60vw" className="object-cover opacity-15" />
            <div className="relative flex flex-col gap-4">
              <span className="ur-eyebrow text-[11px] text-ur-gold">Ranking dos polos</span>
              <ul className="flex flex-col gap-2.5">
                {poleStandings.map((p, i) => (
                  <li key={p.pole} className="flex items-center gap-4 rounded-2xl border border-ur-line bg-ur-black/50 px-4 py-3.5 backdrop-blur">
                    <span className="ur-display w-7 text-xl text-ur-gold">{i + 1}</span>
                    <div className="flex-1">
                      <p className="ur-display text-xl text-ur-white">{p.pole}</p>
                      <p className="inline-flex items-center gap-1 text-[11px] text-ur-mute"><Users className="size-3" />{p.athletes} atletas</p>
                    </div>
                    <span className="ur-display text-lg text-ur-sand tabular-nums">{p.points.toLocaleString("pt-BR")}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-4">
            {[poles.forAthletes, poles.forCourts].map((b) => (
              <Link
                key={b.title}
                href={b.cta.href}
                className="ur-card ur-card-hover group flex flex-1 flex-col justify-between gap-6 rounded-3xl p-7"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl border border-ur-gold/25 bg-ur-gold/10 text-ur-gold">
                  <MapPin className="size-6" />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="ur-display text-2xl text-ur-white">{b.title}</h3>
                  <p className="text-sm leading-6 text-ur-sand/65">{b.description}</p>
                  <span className="ur-condensed mt-2 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-ur-gold">
                    {b.cta.label}
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
