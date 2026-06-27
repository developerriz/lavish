"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { Plus, Minus } from "lucide-react";

const pillars = [
  {
    id: "unique",
    title: "Unique",
    description:
      "Each design is a one-of-a-kind creation, blending artistic expression with functional excellence. Our pieces stand apart, making your space truly distinctive.",
    image: "/images/pillar-unique.png",
  },
  {
    id: "materials",
    title: "Materials",
    description:
      "We source only the finest sustainably harvested hardwoods, full-grain leathers, and premium fabrics. Every material is hand-selected for beauty, durability, and environmental responsibility.",
    image: "/images/pillar-materials.png",
  },
  {
    id: "comfort",
    title: "Comfort",
    description:
      "Ergonomic engineering meets luxurious softness. Our furniture is designed to support your body naturally, ensuring all-day comfort without sacrificing style.",
    image: "/images/pillar-comfort.png",
  },
  {
    id: "functionality",
    title: "Functionality",
    description:
      "Smart storage solutions, modular configurations, and adaptable designs that evolve with your lifestyle. Beautiful furniture that works as hard as you do.",
    image: "/images/pillar-functionality.png",
  },
];

export function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="features"
      className="border-t border-neutral-200 py-20 lg:py-28"
      ref={ref}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mx-auto max-w-8xl">
          <div
            className={cn(
              "mb-10 transition-all duration-700 lg:mb-14",
              isVisible ? "animate-fade-in-up" : "opacity-0"
            )}
          >
            <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tight text-black sm:text-5xl lg:text-6xl">
              Unveiling 4
              <br />
              Pillars of
              <br />
              Distinction.
            </h2>
          </div>

          <div
            className={cn(
              "transition-all duration-700",
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
            )}
          >
            <div className="divide-y divide-neutral-600 border-t border-b border-neutral-600">
              {pillars.map((pillar, index) => {
                const isActive = activeIndex === index;
                return (
                  <div key={pillar.id}>
                    <button
                      className="group flex w-full items-center justify-between py-5 text-left lg:py-6"
                      onClick={() => setActiveIndex(isActive ? -1 : index)}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-medium tabular-nums text-neutral-400">
                          0{index + 1}
                        </span>
                        <span
                          className={cn(
                            "text-lg font-bold uppercase tracking-wider transition-colors duration-300 lg:text-xl",
                            isActive
                              ? "text-[#00BFA5]"
                              : "text-black group-hover:text-[#00BFA5]"
                          )}
                        >
                          {pillar.title}
                        </span>
                      </div>
                      <div
                        className={cn(
                          "flex h-8 w-8 items-center justify-center transition-colors duration-300",
                          isActive ? "text-[#00BFA5]" : "text-neutral-400"
                        )}
                      >
                        {isActive ? (
                          <Minus className="size-4" />
                        ) : (
                          <Plus className="size-4" />
                        )}
                      </div>
                    </button>

                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-500 ease-out",
                        isActive ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
                      )}
                    >
                      <div className="grid gap-6 sm:grid-cols-[1fr_1.2fr]">
                        <p className="text-sm leading-relaxed text-neutral-500">
                          {pillar.description}
                        </p>
                        <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                          <Image
                            src={pillar.image}
                            alt={pillar.title}
                            fill
                            sizes="(max-width: 639px) 100vw, 55vw"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
