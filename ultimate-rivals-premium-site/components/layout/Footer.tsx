import Link from "next/link";

const columns = [
  {
    heading: "Jornada",
    links: [
      { label: "UR Play", href: "/ur-play" },
      { label: "Temporada", href: "/temporada" },
      { label: "Ranking", href: "/ranking" },
      { label: "UR Legends", href: "/temporada#legends" },
    ],
  },
  {
    heading: "Ecossistema",
    links: [
      { label: "Atletas", href: "/atletas" },
      { label: "Equipes e Duplas", href: "/equipes-duplas" },
      { label: "Polos e Quadras", href: "/polos-quadras" },
      { label: "UR Market", href: "/ur-market" },
      { label: "Mídia", href: "/midia" },
    ],
  },
  {
    heading: "Desenvolvimento",
    links: [
      { label: "Metodologia Hunter", href: "/metodologia-hunter" },
      { label: "CT UR", href: "/metodologia-hunter#ct-ur" },
      { label: "Blog", href: "/blog" },
      { label: "Regulamento", href: "/regulamento" },
    ],
  },
  {
    heading: "Parcerias",
    links: [
      { label: "Patrocinadores", href: "/patrocinadores" },
      { label: "Quadras Parceiras", href: "/polos-quadras" },
      { label: "Cadastro", href: "/cadastro" },
      { label: "Entrar", href: "/entrar" },
    ],
  },
];

const polos = ["Belo Horizonte", "Betim", "Contagem"];

export default function Footer() {
  return (
    <footer className="bg-ur-graphite border-t border-white/5 mt-24">
      {/* Arena gradient top */}
      <div className="h-px bg-gradient-to-r from-transparent via-ur-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group" aria-label="Ultimate Rivals">
              <div className="w-9 h-9 bg-ur-gold rounded-sm flex items-center justify-center">
                <span className="font-display font-black text-ur-black text-sm">UR</span>
              </div>
              <span className="font-display font-black text-ur-white uppercase tracking-wide text-sm">
                Ultimate<br />Rivals
              </span>
            </Link>
            <p className="text-ur-muted text-sm leading-relaxed mb-6">
              Ecossistema esportivo para organizar, profissionalizar e valorizar o esporte amador.
            </p>
            {/* Polos */}
            <div>
              <p className="section-label text-[10px] mb-2">Polos Ativos</p>
              <div className="flex flex-wrap gap-1.5">
                {polos.map((polo) => (
                  <span key={polo} className="chip-sand text-[10px] py-0.5 px-2">{polo}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Nav Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.heading}>
                <h3 className="section-label text-[10px] mb-4">{col.heading}</h3>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-ur-muted hover:text-ur-sand text-sm transition-colors duration-200 font-body cursor-pointer"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Jornada bar */}
        <div className="border-t border-white/5 pt-8 mb-8">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            {["UR Play", "UR Sprint", "UR Series", "UR Legends"].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="font-display font-bold text-xs uppercase tracking-wider text-ur-sand">{step}</span>
                {i < 3 && <span className="text-ur-gold opacity-40 text-xs">→</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ur-muted text-xs font-body">
            © {new Date().getFullYear()} Ultimate Rivals. Todos os direitos reservados.
          </p>
          <p className="text-ur-muted text-xs font-body text-center">
            Modalidades: Dupla · Quarteto · Níveis N1, N2, N3
          </p>
          <div className="flex items-center gap-4">
            <Link href="/regulamento" className="text-ur-muted hover:text-ur-sand text-xs transition-colors duration-200 cursor-pointer">Regulamento</Link>
            <span className="text-ur-muted text-xs opacity-30">·</span>
            <Link href="/metodologia-hunter" className="text-ur-muted hover:text-ur-sand text-xs transition-colors duration-200 cursor-pointer">Metodologia Hunter</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
