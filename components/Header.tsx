"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Internet & Networking", href: "/services/internet-networking" },
      { label: "Solar & Green Energy", href: "/services/solar-green-energy" },
      { label: "IT, Software & Security", href: "/services/it-software-security" },
      { label: "Data Center & Hosting", href: "/services/data-center-hosting" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Government & Enterprise", href: "/government-enterprise" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-obsidian/92 backdrop-blur-md border-b border-champagne/20 py-3 shadow-xl text-paper"
          : "bg-transparent py-5 text-paper"
      }`}
    >
      <div className="container-site flex items-center justify-between gap-4">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display font-extrabold text-paper text-xl md:text-2xl tracking-[-0.02em] flex items-center gap-1.5 hover:text-champagne transition-colors"
        >
          SIGANEXT
          <span className="w-2 h-2 rounded-full bg-champagne shadow-[0_0_8px_#C9A24B]" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 font-mono text-xs uppercase tracking-[0.08em]">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative group">
              {item.children ? (
                <div
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="relative py-2"
                >
                  <button
                    className="flex items-center gap-1 text-paper/85 hover:text-champagne transition-colors"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {item.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180 text-champagne" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 w-64 p-3 rounded-2xl bg-obsidian/95 backdrop-blur-xl border border-champagne/30 shadow-2xl space-y-1"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 rounded-xl text-[11px] text-paper/80 hover:text-champagne hover:bg-champagne/10 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`py-2 transition-colors ${
                    pathname === item.href ? "text-champagne font-bold" : "text-paper/85 hover:text-champagne"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+910000000000"
            className="font-mono text-xs uppercase tracking-[0.08em] text-paper/80 hover:text-champagne transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call
          </a>

          <Link href="/contact" className="btn btn-champagne">
            Get a Free Quote →
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-paper hover:text-champagne"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-obsidian/98 border-b border-champagne/30 overflow-hidden"
          >
            <div className="container-site py-6 space-y-4 font-mono text-xs uppercase tracking-[0.08em]">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div className="space-y-2">
                      <span className="text-champagne font-semibold">{item.label}</span>
                      <div className="pl-4 space-y-2">
                        {item.children.map((child) => (
                          <Link key={child.href} href={child.href} className="block text-paper/80 hover:text-champagne">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link href={item.href} className="block text-paper/80 hover:text-champagne">
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <Link href="/contact" className="btn btn-champagne text-center">
                  Get a Free Quote →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
