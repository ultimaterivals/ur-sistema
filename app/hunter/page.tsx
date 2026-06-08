import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Hunter } from "@/components/site/home/hunter";

export const metadata: Metadata = { title: "Mentalidade Hunter" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Mentalidade Hunter" title="Hunter não é olheiro. É mentalidade." lead="Evolução contínua, disciplina e desenvolvimento técnico e comportamental através do Hunter Program." />
      <Hunter />
    </>
  );
}
