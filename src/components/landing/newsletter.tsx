"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function Newsletter() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 border-t border-neutral-200" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end">
          {/* Left - Big heading */}
          <div
            className={cn(
              "transition-all duration-700",
              isVisible ? "animate-fade-in-up" : "opacity-0",
            )}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tight text-black">
              Get Your
              <br />
              Monthly
              <br />
              Updates and
              <br />
              Offers!
            </h2>
          </div>

          {/* Right - Email input */}
          <div
            className={cn(
              "transition-all duration-700",
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0",
            )}
          >
            <p className="text-neutral-500 text-sm leading-relaxed mb-8 max-w-sm">
              Subscribe to our newsletter and be the first to know about new
              collections, exclusive deals, and design inspiration delivered
              straight to your inbox.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border-b-2 border-black bg-transparent py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-[#00BFA5] transition-colors"
                id="newsletter-email"
              />
              <button
                className="bg-[#00BFA5] text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-[#00A98F] transition-colors"
                id="newsletter-subscribe"
              >
                Go
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
