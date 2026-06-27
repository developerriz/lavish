"use client";

import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    name: "CHAIR",
    label: "Accent Lounge Chair",
    price: "$420.00",
    image: "/images/heroimg.png",
    alt: "Modern accent chair in a warm luxury living room",
    eyebrow: "Signature Seat",
    title: "Chair Designed For Pure Comfort",
    description:
      "A sculptural lounge chair with soft curves, plush cushioning, and a calm statement-making presence.",
  },
  {
    name: "TABLE",
    label: "Round Coffee Table",
    price: "$240.00",
    image: "/images/table.png",
    alt: "Round black coffee table styled in a modern living room",
    eyebrow: "Feature Piece",
    title: "Table Made For Warm Evenings",
    description:
      "A sculptural centerpiece that grounds the room with soft lighting and a rich marble finish.",
  },
  {
    name: "SOFA",
    label: "Luxury Sofa",
    price: "$800.00",
    image: "/images/sofa.png",
    alt: "Luxury sectional sofa in a moody modern interior",
    eyebrow: "Best Comfort",
    title: "Sofa Built For Deep Comfort",
    description:
      "Layered cushions, generous seating, and a calm silhouette for slow modern living.",
  },
  {
    name: "LAMP",
    label: "Standing Lamp",
    price: "$180.00",
    image: "/images/lamp.png",
    alt: "Black standing lamp glowing on a wooden console table",
    eyebrow: "Soft Lighting",
    title: "Lamp That Sets The Mood",
    description:
      "A bold black dome lamp that adds warmth, contrast, and a gallery-like glow to the space.",
  },
] as const;

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <section id="home" className="relative pt-[68px] lg:pt-[84px]">
      <div className="px-5 pt-4 lg:px-8">
        <div
          className="relative w-full overflow-hidden rounded-2xl bg-[#120d09]"
          style={{ height: "calc(100vh - 110px)" }}
        >
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            speed={700}
            autoplay={{ delay: 3200, disableOnInteraction: false }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setActiveIndex(swiper.realIndex);
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="h-full w-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={slide.name}>
                <div className="relative h-full w-full">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    sizes="100vw"
                    preload={index === 0}
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/35" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 lg:flex-row lg:p-12">
            <div className="flex flex-1 flex-col justify-end">
              <div
                className={`max-w-xl transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-white/70">
                  {activeSlide.eyebrow}
                </p>
                <h1 className="text-4xl font-black uppercase leading-[0.92] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)] sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5.5rem]">
                  {activeSlide.title.split(" ").map((word, index) => (
                    <span
                      key={`${activeSlide.name}-${word}-${index}`}
                      className="block"
                    >
                      {word}
                    </span>
                  ))}
                </h1>
                <p className="mt-5 max-w-md text-sm leading-6 text-white/75 sm:text-base">
                  {activeSlide.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#arrivals"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.12em] text-neutral-900 shadow-xl transition-all duration-300 hover:bg-neutral-900 hover:text-white"
                    id="hero-shop-now"
                  >
                    Shop Now
                    <span className="flex rounded-full h-7 w-7 items-center justify-center bg-neutral-900 text-white transition-all duration-300 group-hover:bg-white group-hover:text-neutral-900">
                      <ArrowUpRight className="size-3.5" strokeWidth={2.5} />
                    </span>
                  </a>

                  <div className="hero-float-card flex rounded-full items-center gap-3 bg-white/92 py-2.5 pl-4 pr-3 shadow-2xl backdrop-blur-xl">
                    <div>
                      <p className="text-[11px] font-bold leading-tight tracking-wide text-neutral-800">
                        {activeSlide.label}
                      </p>
                      <p className="mt-0.5 text-[13px] font-extrabold leading-tight text-[#00BFA5]">
                        {activeSlide.price}
                      </p>
                    </div>
                    <button
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white transition-colors hover:bg-[#00BFA5]"
                      aria-label={`Add ${activeSlide.label} to cart`}
                    >
                      <Plus className="size-3" strokeWidth={3} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 hidden flex-1 items-end justify-end lg:mt-0 lg:flex">
              <div
                className={`w-full max-w-[320px] overflow-hidden rounded-2xl border border-white/12 bg-white/10 backdrop-blur-md transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100 delay-[200ms]"
                    : "translate-y-6 opacity-0"
                }`}
              >
                {slides.map((slide, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={slide.name}
                      type="button"
                      onClick={() => swiperRef.current?.slideToLoop(index)}
                      className={`group flex w-full items-center justify-between border-b border-white/10 px-5 py-4 text-left transition-all duration-200 last:border-b-0 ${
                        isActive
                          ? "bg-white/18 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                      aria-pressed={isActive}
                    >
                      <div>
                        <span className="block text-[13px] font-semibold tracking-[0.18em]">
                          {slide.name}
                        </span>
                        <span className="mt-1 block text-xs tracking-[0.08em] text-white/60">
                          {slide.price}
                        </span>
                      </div>
                      <Plus
                        className={`size-4 transition-all duration-300 ${
                          isActive
                            ? "rotate-45 opacity-100"
                            : "opacity-40 group-hover:rotate-90 group-hover:opacity-100"
                        }`}
                        strokeWidth={1.8}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
