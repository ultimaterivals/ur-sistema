export type RewardPreviewItem = {
  title: string;
  category: string;
  status: string;
};

type RewardPreviewCardProps = {
  item: RewardPreviewItem;
  index: number;
};

export function RewardPreviewCard({ item, index }: RewardPreviewCardProps) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-4 rounded-lg border border-white/10 bg-black/30 p-4">
      <span className="grid h-11 w-11 place-items-center rounded-md bg-[#ffd84d] text-sm font-black text-black">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3 className="text-base font-black uppercase leading-tight text-white">{item.title}</h3>
        <p className="mt-1 text-sm font-bold text-[#ffe98b]">{item.category}</p>
        <p className="mt-2 text-sm leading-6 text-white/62">{item.status}</p>
      </div>
    </div>
  );
}
