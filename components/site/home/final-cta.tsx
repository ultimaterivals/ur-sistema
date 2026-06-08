import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cta, site } from "@/lib/config/site";
import { images } from "@/lib/config/images";
import { Container } from "../primitives";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image src={images.finalCta} alt="" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-ur-black-deep via-ur-black-deep/85 to-ur-black-deep/65" />
        <div className="absolute inset-0 bg-[radial-gradient(60rem_30rem_at_50%_120%,rgba(224,168,46,0.18),transparent)]" />
      </div>

      <Container className="flex flex-col items-center gap-7 py-28 text-center sm:py-36">
        <span className="ur-eyebrow rounded-full border border-ur-gold/30 bg-ur-black/40 px-4 py-2 text-xs text-ur-gold backdrop-blur">
          Temporada 1 • Aberta
        </span>
        <h2 className="ur-display max-w-4xl text-5xl leading-[0.9] text-ur-white sm:text-7xl">
          A temporada 1 está <span className="ur-gold-text">aberta</span>.
        </h2>
        <p className="max-w-xl text-base leading-7 text-ur-sand/80 sm:text-lg">
          Escolha seu nível. Entre pelo UR Play. Construa sua trajetória. Defenda seu polo.
          Sua posição no ranking começa na próxima partida.
        </p>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Link
            href={cta.primary.href}
            className="ur-condensed group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-ur-gold-bright to-ur-gold px-9 py-4 text-base font-semibold uppercase tracking-wide text-ur-black-deep shadow-[0_10px_40px_rgba(224,168,46,0.4)] transition-transform hover:-translate-y-0.5"
          >
            {cta.primary.label}
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href={cta.regulamento.href}
            className="ur-condensed inline-flex items-center justify-center rounded-full border border-ur-gold/40 px-9 py-4 text-base font-semibold uppercase tracking-wide text-ur-gold transition-colors hover:bg-ur-gold/10"
          >
            {cta.regulamento.label}
          </Link>
        </div>

        <p className="ur-display mt-6 text-xl tracking-wide text-ur-gold">{site.tagline}</p>
      </Container>
    </section>
  );
}
