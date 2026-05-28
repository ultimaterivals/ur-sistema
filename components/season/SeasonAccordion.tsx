import { ChevronDown } from "lucide-react";

type SeasonAccordionItem = {
  title?: string;
  description?: string;
  question?: string;
  answer?: string;
};

type SeasonAccordionProps = {
  items: readonly SeasonAccordionItem[];
};

export function SeasonAccordion({ items }: SeasonAccordionProps) {
  return (
    <div className="grid gap-3">
      {items.map((item) => {
        const title = item.question ?? item.title ?? "";
        const description = item.answer ?? item.description ?? "";

        return (
          <details
            className="group/accordion rounded-lg border border-[rgba(212,164,55,0.16)] bg-[#14141A] px-4 py-3 open:border-[rgba(212,164,55,0.36)]"
            key={title}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span
                className="text-sm font-bold uppercase leading-5 text-[#F4F0E6]"
                style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em" }}
              >
                {title}
              </span>
              <ChevronDown
                aria-hidden
                className="h-4 w-4 shrink-0 text-[#D4A437] transition group-open/accordion:rotate-180"
              />
            </summary>
            <p
              className="mt-3 text-sm leading-6 text-[#8A8A93]"
              style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
            >
              {description}
            </p>
          </details>
        );
      })}
    </div>
  );
}
