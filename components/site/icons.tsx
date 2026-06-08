import {
  Trophy, Coins, Gift, Video, MapPin, Crown, Play, TrendingUp,
  Wallet, Swords, Shield, Users, Flame, Newspaper, Target,
  Sparkles, Rocket, Star, type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/lib/config/home";

export const iconMap: Record<IconKey, LucideIcon> = {
  trophy: Trophy,
  coins: Coins,
  gift: Gift,
  video: Video,
  mapPin: MapPin,
  crown: Crown,
  play: Play,
  trendingUp: TrendingUp,
  wallet: Wallet,
  swords: Swords,
  shield: Shield,
  users: Users,
  flame: Flame,
  newspaper: Newspaper,
  target: Target,
  sparkles: Sparkles,
  rocket: Rocket,
  star: Star,
};

export function Icon({ name, className }: { name: IconKey; className?: string }) {
  const Cmp = iconMap[name];
  return <Cmp className={className} aria-hidden />;
}
