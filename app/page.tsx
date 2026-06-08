import { Hero } from "@/components/site/home/hero";
import { Dispute } from "@/components/site/home/dispute";
import { Journey } from "@/components/site/home/journey";
import { Levels } from "@/components/site/home/levels";
import { Scoring } from "@/components/site/home/scoring";
import { Coins } from "@/components/site/home/coins";
import { Awards } from "@/components/site/home/awards";
import { Ranking } from "@/components/site/home/ranking";
import { Market } from "@/components/site/home/market";
import { Poles } from "@/components/site/home/poles";
import { Formats } from "@/components/site/home/formats";
import { Media } from "@/components/site/home/media";
import { Hunter } from "@/components/site/home/hunter";
import { Blog } from "@/components/site/home/blog";
import { About } from "@/components/site/home/about";
import { FinalCta } from "@/components/site/home/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Dispute />
      <Journey />
      <Levels />
      <Scoring />
      <Coins />
      <Awards />
      <Ranking />
      <Market />
      <Poles />
      <Formats />
      <Media />
      <Hunter />
      <Blog />
      <About />
      <FinalCta />
    </>
  );
}
