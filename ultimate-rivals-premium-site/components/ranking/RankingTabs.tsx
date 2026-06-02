"use client";

interface Tab {
  id: string;
  label: string;
}

const defaultTabs: Tab[] = [
  { id: "atletas", label: "Atletas" },
  { id: "equipes", label: "Equipes" },
  { id: "duplas", label: "Duplas" },
  { id: "polos", label: "Polos" },
  { id: "funcoes", label: "Funções" },
  { id: "evolucao", label: "Evolução" },
  { id: "fairplay", label: "Fair Play" },
];

interface RankingTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs?: Tab[];
}

export default function RankingTabs({
  activeTab,
  onTabChange,
  tabs = defaultTabs,
}: RankingTabsProps) {
  return (
    <div className="flex gap-0 overflow-x-auto scrollbar-none">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative px-5 py-3.5 font-display font-bold text-sm uppercase tracking-wider whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer ${
              isActive
                ? "text-ur-white"
                : "text-ur-muted hover:text-ur-sand"
            }`}
          >
            {tab.label}
            {isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-ur-gold rounded-t-sm" />
            )}
          </button>
        );
      })}
    </div>
  );
}
