const nodes = [
  { id: "entrada", label: "UR Play", sublabel: "Entrada", color: "#5A8A5A", x: "10%", y: "50%" },
  { id: "competicao1", label: "UR Sprint", sublabel: "Competição", color: "#D4A437", x: "33%", y: "25%" },
  { id: "competicao2", label: "UR Series", sublabel: "Competição", color: "#D4A437", x: "33%", y: "75%" },
  { id: "progressao", label: "Ranking", sublabel: "Progressão", color: "#F0C060", x: "55%", y: "50%" },
  { id: "comunidade", label: "Polos", sublabel: "Comunidade", color: "#C8B99A", x: "70%", y: "30%" },
  { id: "visibilidade", label: "Mídia", sublabel: "Visibilidade", color: "#8BA8C8", x: "70%", y: "70%" },
  { id: "valor", label: "UR Market", sublabel: "Valor", color: "#A87CC8", x: "85%", y: "50%" },
  { id: "espetaculo", label: "UR Legends", sublabel: "Espetáculo", color: "#FFD700", x: "95%", y: "50%" },
];

export default function DashboardPanel() {
  return (
    <section className="py-14 sm:py-24 bg-ur-black">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">O Ecossistema</p>
          <h2 className="font-display font-black uppercase text-[clamp(2rem,5vw,3.5rem)] text-ur-white leading-none mb-4">
            A TEMPORADA EM<br />
            <span className="text-gold-gradient">UMA TELA.</span>
          </h2>
          <p className="text-ur-sand text-base font-body max-w-xl mx-auto">
            Um sistema conectado para jogar, evoluir, aparecer e representar.
          </p>
        </div>

        {/* Dashboard grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
          {nodes.map((node) => (
            <div
              key={node.id}
              className="bg-card rounded-sm p-5 sm:p-6 border border-white/5 hover:border-ur-gold/30 hover:shadow-card-hover transition-all duration-300 group cursor-default"
              style={{ borderLeft: `3px solid ${node.color}40` }}
            >
              <div
                className="w-3 h-3 sm:w-4 sm:h-4 rounded-full mb-3 sm:mb-4 group-hover:scale-125 transition-transform duration-200"
                style={{ backgroundColor: node.color, boxShadow: `0 0 8px ${node.color}60` }}
              />
              <p className="section-label text-[11px] mb-1 opacity-60">{node.sublabel}</p>
              <p className="font-display font-bold text-sm sm:text-base uppercase text-ur-white group-hover:text-ur-gold transition-colors duration-200">
                {node.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
