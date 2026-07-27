"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

const NAV = [
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

const PHONE_HREF = "tel:+910000000000";

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.69 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.26a2 2 0 0 1 2.11-.45c.74.33 1.53.56 2.34.69A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // close mobile menu on escape key
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  // close mobile menu on route change (deferred via microtask to avoid
  // synchronous setState within the effect body — see react-hooks/set-state-in-effect)
  useEffect(() => {
    queueMicrotask(() => {
      setMobileOpen(false);
      setServicesOpen(false);
    });
  }, [pathname]);

  // Header text color: light text (paper) over transparent-dark or scrolled-dark.
  // slate-900 over light is not needed because every page opens with a dark hero band
  // (PageHero on secondary pages, hero on home). So we keep #F8FAFC / --paper throughout.
  const linkBase =
    "font-mono uppercase text-[11px] tracking-[0.08em] transition-colors duration-200";

  return (
    <>
      <header
        className={`fixed top-3 md:top-4 inset-x-3 md:inset-x-6 max-w-7xl mx-auto z-50 transition-all duration-500 rounded-full ${
          scrolled
            ? "bg-[#0B1220]/90 backdrop-blur-xl border border-signal-teal/40 shadow-[0_10px_30px_rgba(0,0,0,0.6)] py-1"
            : "bg-[#0B1220]/60 backdrop-blur-md border border-white/10 shadow-lg py-1.5"
        }`}
      >
        <div className="px-4 md:px-6 h-12 md:h-14 flex items-center justify-between gap-4">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-display font-bold text-paper text-[1.2rem] md:text-[1.35rem] leading-none tracking-[-0.02em] flex items-center gap-2 hover:text-signal-teal transition-colors duration-200"
          >
            Siganext
            <span className="inline-block w-2 h-2 rounded-full bg-marigold-gold shadow-[0_0_8px_#E8A33D]" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setServicesOpen((s) => !s)}
                    className={`${linkBase} text-slate-200 hover:text-signal-teal flex items-center gap-1.5 py-2`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`transition-transform duration-200 ${
                        servicesOpen ? "rotate-180 text-signal-teal" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[260px] bg-grid-navy/95 backdrop-blur-2xl border border-signal-teal/30 rounded-2xl overflow-hidden p-2 shadow-2xl"
                      >
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="block px-4 py-3 rounded-xl font-mono uppercase text-[10px] tracking-[0.1em] text-slate-200 hover:text-paper hover:bg-signal-teal/15 transition-all duration-200"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`${linkBase} ${
                    pathname === item.href
                      ? "text-signal-teal font-semibold"
                      : "text-slate-200 hover:text-signal-teal"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Phone — click-to-call with icon and placeholder */}
            <a
              href={PHONE_HREF}
              aria-label="Call Siganext at +91 XXXXX XXXXX"
              title="Call Siganext"
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-signal-teal/40 text-signal-teal hover:bg-signal-teal/10 hover:border-signal-teal transition-all duration-200"
            >
              <PhoneIcon className="w-3.5 h-3.5" />
              <span className="font-mono uppercase text-[10px] tracking-[0.08em] text-paper/90">
                +91 XXXXX XXXXX
              </span>
            </a>

            <MagneticButton href="/contact" className="btn btn-primary hidden md:inline-flex shadow-lg hover:shadow-signal-teal/40 px-5 py-2 text-xs">
              Get a Free Quote
            </MagneticButton>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-paper p-2 -mr-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Open menu"
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-grid-navy lg:hidden"
          >
            <div className="container-site h-16 flex items-center justify-between border-b border-signal-teal/20">
              <span className="font-display font-semibold text-paper text-[1.25rem] flex items-center gap-2">
                Siganext
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-marigold-gold" />
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="text-paper p-1 -mr-1"
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>

            <nav className="container-site flex flex-col pt-6">
              <MobileLink href="/" label="Home" index={0} />
              {/* Services group */}
              <div className="pt-6">
                <div className="font-mono uppercase text-[11px] tracking-[0.08em] text-signal-teal pb-3">
                  Services
                </div>
                <div className="flex flex-col gap-3 pl-3 border-l border-signal-teal/20">
                  {NAV.find((n) => n.label === "Services")?.children?.map(
                    (c, i) => (
                      <MobileLink
                        key={c.href}
                        href={c.href}
                        label={c.label}
                        index={2 + i}
                        small
                      />
                    )
                  )}
                </div>
              </div>
              <MobileLink href="/about" label="About" index={7} />
              <MobileLink
                href="/government-enterprise"
                label="Government & Enterprise"
                index={8}
              />
              <MobileLink href="/contact" label="Contact" index={9} />

              <div className="mt-10 flex flex-col gap-3">
                <a
                  href={PHONE_HREF}
                  aria-label="Call Siganext at +91 XXXXX XXXXX"
                  className="inline-flex items-center justify-center gap-2.5 h-11 px-5 rounded-full border border-signal-teal/40 text-signal-teal hover:bg-signal-teal/10 transition-colors"
                >
                  <PhoneIcon className="w-4 h-4" />
                  <span className="font-mono uppercase text-xs tracking-[0.08em] text-paper">
                    +91 XXXXX XXXXX
                  </span>
                </a>
                <Link href="/contact" className="btn btn-primary w-full">
                  Get a Free Quote
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileLink({
  href,
  label,
  index,
  small = false,
}: {
  href: string;
  label: string;
  index: number;
  small?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: 0.04 + index * 0.05,
        ease: [0.22, 0.61, 0.36, 1],
      }}
    >
      <Link
        href={href}
        className={`block font-display ${
          small ? "text-[1rem]" : "text-[1.75rem]"
        } font-medium text-paper/90 hover:text-paper transition-colors duration-200`}
      >
        {label}
      </Link>
    </motion.div>
  );
}
