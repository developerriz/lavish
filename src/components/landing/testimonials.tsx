"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const instaPosts = [
  "/images/product-chair-yellow.png",
  "/images/interior-living.png",
  "/images/pillar-materials.png",
  "/images/product-green-sofa.png",
  "/images/pillar-comfort.png",
];

export function Instagram() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 border-t border-neutral-200" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div
          className={cn(
            "text-center mb-12 transition-all duration-700",
            isVisible ? "animate-fade-in-up" : "opacity-0"
          )}
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-black">
            Instagram
          </h2>
          <p className="text-neutral-400 text-sm uppercase tracking-[0.3em] mt-2">
            @lavish
          </p>
        </div>

        <div
          className={cn(
            "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-neutral-200 transition-all duration-700",
            isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
          )}
        >
          {instaPosts.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden bg-neutral-100 cursor-pointer group"
            >
              <Image
                src={src}
                alt={`LAVISH FURNITURE Instagram post ${i + 1}`}
                fill
                sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 20vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="size-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
