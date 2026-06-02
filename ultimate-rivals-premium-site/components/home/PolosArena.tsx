import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const polos = [
  {
    name: "Belo Horizonte",
    short: "BH",
    desc: "Polo central com múltiplas quadras parceiras e comunidade ativa em formação.",
    accentColor: "#D4A437",
    imageSlot: "polos/bh",
  },
  {
    name: "Betim",
    short: "BT",
    desc: "Polo em expansão com forte presença de atletas em diferentes níveis de desenvolvimento.",
    accentColor: "#F0C060",
    imageSlot: "polos/betim",
  },
  {
    name: "Contagem",
    short: "CG",
    desc: "Polo consolidado com rivalidade saudável, calendário contínuo e identidade comunitária.",
    accentColor: "#C8B99A",
    imageSlot: "polos/contagem",
  },
];

export default function PolosArena() {
  return (
    <section className="py-14 sm:py-24 bg-ur-graphite">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Os Polos</p>
          <h2 className="font-display font-black uppercase text-[clamp(2rem,5vw,3.5rem)] text-ur-white leading-none mb-4">
            DEFENDA SEU POLO.<br />
            <span className="text-gold-gradient">CONSTRUA SUA HISTÓRIA.</span>
          </h2>
          <p className="text-ur-sand text-base font-body max-w-xl mx-auto">
            Belo Horizonte, Betim e Contagem têm o mesmo peso. O que muda é a força que cada comunidade constrói dentro da quadra.
          </p>
        </div>

        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {polos.map((polo) => (
              <div
                key={polo.name}
                className="bg-card rounded-sm border border-white/5 hover:border-ur-gold/20 transition-all duration-300 group"
              >
                {/* @asset-slot: polo image */}
                <ImagePlaceholder
                  label={polo.short}
                  aspectRatio="aspect-[4/3]"
                  className="border-0 border-b border-white/5"
                />

                <div className="p-8 relative">
                  {/* Accent corner */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ backgroundColor: polo.accentColor }}
                  />

                  {/* Shield */}
                  <div
                    className="w-14 h-14 rounded-sm flex items-center justify-center mb-6 border"
                    style={{
                      backgroundColor: `${polo.accentColor}15`,
                      borderColor: `${polo.accentColor}30`,
                    }}
                  >
                    <span
                      className="font-display font-black text-xl"
                      style={{ color: polo.accentColor }}
                    >
                      {polo.short}
                    </span>
                  </div>

                  <h3 className="font-display font-black uppercase text-xl text-ur-white mb-3 group-hover:text-ur-gold transition-colors duration-200">
                    {polo.name}
                  </h3>
                  <p className="text-ur-sand text-sm leading-relaxed font-body mb-6">{polo.desc}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="chip-sand text-[10px] py-0.5">Dupla</span>
                      <span className="chip-sand text-[10px] py-0.5">Quarteto</span>
                    </div>
                    <Link
                      href="/polos-quadras"
                      className="inline-flex items-center gap-1 text-ur-gold font-display font-semibold text-xs uppercase tracking-wider hover:gap-2 transition-all duration-200 cursor-pointer"
                    >
                      Representar <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="text-center">
          <p className="text-ur-muted text-sm font-body italic">
            O polo não é só onde você joga. É a comunidade que você ajuda a construir.
          </p>
        </div>
      </div>
    </section>
  );
}
