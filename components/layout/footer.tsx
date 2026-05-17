import Image from "next/image";
import Link from "next/link";
import { footerColumns } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-[#ffd84d]/15 bg-black">
      <div className="mx-auto grid max-w-7xl min-w-0 gap-10 px-5 py-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.95fr)] lg:px-8">
        <div className="min-w-0">
          <div className="flex min-w-0 items-center gap-3">
            <Image
              alt="Ultimate Rivals"
              className="h-12 w-12 object-contain"
              height={48}
              src="/brand/logo-ur.png"
              width={48}
            />
            <div className="min-w-0">
              <div className="font-black uppercase tracking-[0.16em] text-[#ffe98b]">Ultimate Rivals</div>
              <div className="text-xs font-bold uppercase leading-4 tracking-[0.16em] text-white/50">
                Ecossistema esportivo e de desenvolvimento
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
            Plataforma esportiva em construção para profissionalizar o esporte amador com ranking,
            temporadas, equipes, mídia, recompensas e comunidade.
          </p>
          <p className="mt-5 inline-flex max-w-full rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10 px-3 py-2 text-xs font-bold uppercase leading-4 tracking-[0.14em] text-[#ffe98b]">
            Polo em formação • Expansão planejada
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4" key={column.title}>
              <h3 className="text-sm font-black uppercase tracking-[0.14em] text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link className="text-sm leading-5 text-white/60 transition hover:text-[#ffe98b]" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs leading-5 text-white/45 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>Ultimate Rivals. Eleve o jogo, supere seus limites.</span>
          <span className="sm:text-right">Política de Privacidade • Termos de Uso • Regulamento Geral em formação</span>
        </div>
      </div>
    </footer>
  );
}
