"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    name: "Velvet Accent Chair",
    price: "$599",
    image: "/images/product-chair-yellow.png",
    tag: "New",
  },
  {
    name: "Oak Sideboard",
    price: "$1,249",
    image: "/images/product-cabinet.png",
    tag: null,
  },
  {
    name: "Teak Folding Chair",
    price: "$349",
    image: "/images/product-folding-chair.png",
    tag: "Sale",
  },
  {
    name: "Emerald Sofa Set",
    price: "$2,899",
    image: "/images/product-green-sofa.png",
    tag: "New",
  },
];

export function NewArrivals() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="arrivals" className="py-20 lg:py-28" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mb-14">
          <div
            className={cn(
              "transition-all duration-700",
              isVisible ? "animate-fade-in-up" : "opacity-0"
            )}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tight text-black">
              New
              <br />
              Arrivals
            </h2>
          </div>
          <div
            className={cn(
              "flex items-end transition-all duration-700",
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
            )}
          >
            <p className="text-neutral-500 text-sm lg:text-base leading-relaxed max-w-md">
              Discover our latest collection of thoughtfully designed furniture pieces, each crafted with precision and an eye for modern aesthetics.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={cn(
                "group bg-white relative cursor-pointer transition-all duration-500",
                isVisible ? "animate-fade-in-up" : "opacity-0"
              )}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative border-2 aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                />

                {product.tag && (
                  <span
                    className={cn(
                      "absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest",
                      product.tag === "New"
                        ? "bg-[#00BFA5] text-white"
                        : "bg-black text-white"
                    )}
                  >
                    {product.tag}
                  </span>
                )}

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />

                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="size-4" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-sm font-semibold text-black uppercase tracking-wider">
                  {product.name}
                </h3>
                <p className="text-sm text-neutral-500 mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
