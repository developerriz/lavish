"use client";

import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "New Arrivals", href: "#arrivals" },
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header id="main-header" className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center" id="logo-link">
            <span className="text-xl lg:text-3xl font-extrabold tracking-tight text-black uppercase">
              LAVISH.
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[16px] font-medium text-neutral-500 hover:text-black transition-colors duration-200 uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="relative text-black hover:text-[#00BFA5] transition-colors"
              id="cart-button"
            >
              <ShoppingBag className="size-5" strokeWidth={1.5} />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#00BFA5] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                2
              </span>
            </a>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-black"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              id="mobile-menu-toggle"
            >
              {isMobileOpen ? (
                <X className="size-6" strokeWidth={1.5} />
              ) : (
                <Menu className="size-6" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-neutral-200" />

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-400 ease-out",
          isMobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
        id="mobile-menu"
      >
        <div className="bg-white border-b border-neutral-200 px-6 py-6">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="py-3 text-sm font-medium text-neutral-600 hover:text-black transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
