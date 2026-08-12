"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ClipboardList,
  Heart,
  Home,
  Menu,
  Send,
  UserRound,
  Clapperboard,
} from "lucide-react";
import { navItems } from "@/data/site";

const icons = {
  home: Home,
  about: UserRound,
  services: Clapperboard,
  contact: Send,
  process: ClipboardList,
  testimonials: Heart,
};

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[92px] flex-col border-r border-burgundy/10 bg-cream py-5 lg:flex">
        <Link href="/" className="mx-auto mb-8 block">
          <span className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-burgundy shadow-sm transition-transform duration-300 hover:scale-105">
            <Image
              src="/logo.png"
              alt="Marketing Couple logo"
              width={112}
              height={112}
              quality={100}
              className="h-full w-full object-contain"
              priority
            />
          </span>
        </Link>

        <nav className="flex flex-1 flex-col items-center gap-2 px-2">
          {navItems.map((item) => {
            const Icon = icons[item.icon];
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`group relative flex w-full flex-col items-center gap-1 rounded-xl px-1 py-2.5 transition-all duration-300 ${
                  active
                    ? "bg-burgundy text-cream shadow-sm"
                    : "text-burgundy/65 hover:bg-cream-soft hover:text-burgundy"
                }`}
              >
                {active && (
                  <span className="absolute left-0 top-1/2 h-8 w-[3px] -translate-y-1/2 rounded-r-full bg-gold" />
                )}
                <Icon
                  strokeWidth={active ? 2 : 1.5}
                  className={`h-5 w-5 transition-transform duration-300 ${
                    active ? "scale-110" : "group-hover:-translate-y-0.5"
                  }`}
                />
                <span
                  className={`text-center text-[10px] leading-tight tracking-wide ${
                    active ? "font-semibold" : "font-medium"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto flex flex-col items-center gap-1 pt-4 text-burgundy/70">
          <Menu strokeWidth={1.5} className="h-5 w-5" />
          <span className="text-[10px] font-medium">Menu</span>
        </div>
      </aside>

      <nav className="fixed inset-x-0 bottom-0 z-40 flex items-stretch justify-around gap-0.5 border-t border-burgundy/10 bg-cream/95 px-1 py-1.5 backdrop-blur lg:hidden">
        {navItems.map((item) => {
          const Icon = icons[item.icon];
          const active = isActive(pathname, item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-lg px-0.5 py-1.5 text-[9px] transition-colors ${
                active
                  ? "bg-burgundy text-cream"
                  : "text-burgundy/60 hover:text-burgundy"
              }`}
            >
              <Icon strokeWidth={active ? 2 : 1.5} className="h-4 w-4" />
              <span className="max-w-full truncate text-center font-medium">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
