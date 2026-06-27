"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 lg:py-28 border-t border-neutral-200" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-16">
          <div
            className={cn(
              "transition-all duration-700",
              isVisible ? "animate-slide-in-left" : "opacity-0"
            )}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black uppercase leading-[1.1] tracking-tight text-black">
              An innovative template ideal for interior design firms and anyone seeking a simple, stylish, and impactful method to share their work with a delightful user experience.
            </h2>
          </div>

          <div
            className={cn(
              "flex flex-col justify-end transition-all duration-700",
              isVisible ? "animate-slide-in-right" : "opacity-0"
            )}
          >
            <p className="text-neutral-500 text-sm lg:text-base leading-relaxed mb-6">
              Every piece in our collection represents the intersection of artisan craft and contemporary design thinking. We believe furniture should do more than fill a space — it should define it.
            </p>
            <p className="text-neutral-500 text-sm lg:text-base leading-relaxed mb-8">
              Our designers and craftsmen work hand-in-hand, from initial sketches through final finishing, ensuring that quality is never compromised. Each material is sustainably sourced, each joint precision-engineered.
            </p>
            <a
              href="#features"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-black hover:text-[#00BFA5] transition-colors group"
            >
              Learn More
              <span className="w-8 h-px bg-black group-hover:bg-[#00BFA5] group-hover:w-12 transition-all duration-300" />
            </a>
          </div>
        </div>

        <div
          className={cn(
            "relative w-full rounded-4xl aspect-[21/9] overflow-hidden transition-all duration-700",
            isVisible ? "animate-fade-in-up delay-300" : "opacity-0"
          )}
        >
          <Image
            src="/images/interior-living.png"
            alt="Modern interior design by LAVISH FURNITURE"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
