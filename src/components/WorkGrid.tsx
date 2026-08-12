import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { recentWork, site } from "@/data/site";

export function WorkGrid() {
  return (
    <section className="animate-fade-up-delay-2 mt-8 sm:mt-10">
      <div className="mb-4 flex items-end justify-between gap-4">
        <h2 className="text-xs font-semibold tracking-[0.18em] text-burgundy">
          OUR RECENT WORK
        </h2>
        <Link
          href={site.instagram}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-medium text-burgundy/80 transition-colors hover:text-burgundy"
        >
          View all on Instagram →
        </Link>
      </div>

      <div className="work-scroll flex gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4">
        {recentWork.map((item, index) => (
          <article
            key={item.title}
            className="group relative aspect-[9/16] w-[48vw] max-w-[220px] shrink-0 overflow-hidden rounded-sm bg-burgundy sm:w-auto sm:max-w-none"
            style={{ animationDelay: `${0.05 * index}s` }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              quality={90}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 48vw, 25vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-sm bg-black/45 px-1.5 py-0.5 text-[11px] font-medium text-white backdrop-blur-sm">
              <Play className="h-3 w-3 fill-white" />
              {item.views}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
