import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export function BookCallButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href={site.bookCall}
      className={`inline-flex items-center gap-2 rounded-md bg-burgundy px-4 py-2.5 text-sm font-medium text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-burgundy-deep ${className}`}
    >
      Book a Call
      <ArrowUpRight strokeWidth={1.75} className="h-4 w-4" />
    </Link>
  );
}
