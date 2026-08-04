import Link from "next/link";
import { site } from "@/data/site";

export function InsightsDashboard() {
  return (
    <section className="animate-fade-up-delay-1 mt-6 sm:mt-7">
      <Link
        href={site.instagram}
        target="_blank"
        rel="noreferrer"
        className="block w-full rounded-2xl bg-[#efefef] px-4 py-3.5 transition-colors duration-300 hover:bg-[#e8e8e8] sm:px-5 sm:py-4"
      >
        <p className="text-[15px] font-semibold leading-tight text-ink sm:text-base">
          Professional dashboard
        </p>
        <p className="mt-1 text-[13px] leading-snug text-[#737373] sm:text-sm">
          824.7K views in the last 30 days.
        </p>
      </Link>
    </section>
  );
}
