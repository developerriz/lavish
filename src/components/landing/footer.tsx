"use client";

import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  features: [
    { name: "Quality", href: "#" },
    { name: "Materials", href: "#" },
    { name: "Custom", href: "#" },
    { name: "Delivery", href: "#" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Blog", href: "#" },
  ],
  resources: [
    { name: "FAQ", href: "#" },
    { name: "Support", href: "#contact" },
    { name: "Returns", href: "#" },
    { name: "Assembly", href: "#" },
  ],
};

function SocialIcon({
  type,
  className,
}: {
  type: string;
  className?: string;
}) {
  switch (type) {
    case "instagram":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case "facebook":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "x":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    default:
      return null;
  }
}

export function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <span className="text-xl font-extrabold tracking-tight text-black uppercase">
              LAVISH.
            </span>
            <p className="text-sm text-neutral-400 leading-relaxed mt-4 max-w-xs">
              Premium handcrafted furniture for modern living. Designed with
              passion, built to last generations.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {["instagram", "facebook", "x"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="w-9 h-9 border border-neutral-200 flex items-center justify-center hover:bg-[#00BFA5] hover:border-[#00BFA5] hover:text-white transition-all duration-200 text-neutral-400"
                >
                  <SocialIcon type={social} className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-5">
              Features
            </h4>
            <ul className="space-y-3">
              {footerLinks.features.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-[#00BFA5] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-[#00BFA5] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-5">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-[#00BFA5] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} LAVISH FURNITURE. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-neutral-400 hover:text-[#00BFA5] transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-neutral-400 hover:text-[#00BFA5] transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
