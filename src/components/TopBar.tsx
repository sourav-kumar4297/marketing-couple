"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { BookCallButton } from "./BookCallButton";

export function TopBar() {
  return (
    <div className="mb-6 flex items-center justify-end gap-3 sm:mb-8">
      <BookCallButton />
      <Link
        href="/contact"
        aria-label="Open menu"
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-burgundy transition-colors hover:bg-cream-soft"
      >
        <Menu strokeWidth={1.5} className="h-6 w-6" />
      </Link>
    </div>
  );
}
