import {
  ArrowRight,
  Camera,
  Clapperboard,
  FileText,
  Search,
  Send,
  Target,
  TrendingUp,
} from "lucide-react";
import { processSteps } from "@/data/site";

const icons = {
  search: Search,
  target: Target,
  file: FileText,
  camera: Camera,
  clapper: Clapperboard,
  send: Send,
  growth: TrendingUp,
};

export function ProcessStrip() {
  return (
    <section className="animate-fade-up-delay-1 mt-8 border-y border-burgundy/10 py-6 sm:mt-10">
      <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:justify-between sm:gap-1 sm:overflow-visible sm:pb-0">
        {processSteps.map((step, index) => {
          const Icon = icons[step.icon];
          return (
            <div key={step.label} className="flex items-center gap-2 sm:gap-1">
              <div className="flex min-w-[72px] flex-col items-center gap-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream-soft text-burgundy transition-transform duration-300 hover:-translate-y-1">
                  <Icon strokeWidth={1.4} className="h-6 w-6" />
                </div>
                <span className="text-center text-[11px] font-medium tracking-wide text-burgundy">
                  {step.label}
                </span>
              </div>
              {index < processSteps.length - 1 && (
                <ArrowRight
                  strokeWidth={1.25}
                  className="mb-5 h-4 w-4 shrink-0 text-burgundy/40"
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
