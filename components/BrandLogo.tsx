"use client";

import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  height?: number;
  showText?: boolean;
  href?: string;
}

export default function BrandLogo({
  className = "",
  height = 36,
  showText = true,
  href = "/",
}: BrandLogoProps) {
  const content = (
    <div className={`inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-90 ${className}`}>
      {/* Logo mark with transparent background filter */}
      <div className="relative flex items-center justify-center">
        <img
          src="/images/siganextlogo.png"
          alt="Siganext Logo"
          style={{ height: `${height}px`, width: "auto" }}
          className="object-contain filter brightness-110 contrast-105 drop-shadow-[0_0_12px_rgba(47,184,198,0.4)]"
        />
      </div>

      {showText && (
        <span className="font-display font-bold text-paper text-[1.25rem] md:text-[1.4rem] leading-none tracking-[-0.03em] flex items-center gap-1.5">
          Siganext
          <span className="inline-block w-2 h-2 rounded-full bg-marigold-gold shadow-[0_0_10px_#E8A33D]" />
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label="Siganext Home">
        {content}
      </Link>
    );
  }

  return content;
}
