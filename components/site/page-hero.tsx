import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container, Eyebrow } from "./primitives";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  crumb,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image?: string;
  crumb?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-ur-line">
      {image ? (
        <div className="absolute inset-0 -z-10">
          <Image src={image} alt="" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-ur-black via-ur-black/90 to-ur-black/70" />
        </div>
      ) : (
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_30rem_at_50%_-20%,rgba(212,164,55,0.1),transparent)]" />
      )}

      <Container className="flex flex-col gap-5 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <nav aria-label="Trilha" className="flex items-center gap-1.5 text-xs text-ur-mute">
          <Link href="/" className="hover:text-ur-gold">Início</Link>
          <ChevronRight className="size-3.5" />
          <span className="text-ur-sand/80">{crumb ?? title}</span>
        </nav>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="ur-display max-w-4xl text-5xl leading-[0.9] text-ur-white sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {lead ? <p className="max-w-2xl text-base leading-7 text-ur-sand/75 sm:text-lg">{lead}</p> : null}
      </Container>
    </section>
  );
}
