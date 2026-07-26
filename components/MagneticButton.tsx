"use client";

import React, { useRef, useState, useCallback } from "react";
import Link from "next/link";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // max displacement in pixels (default: 16)
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export default function MagneticButton({
  children,
  className = "",
  strength = 16,
  onClick,
  href,
  target,
  rel,
  ariaLabel,
}: MagneticButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      // Magnetic strength formula
      const moveX = (distanceX / (rect.width / 2)) * strength;
      const moveY = (distanceY / (rect.height / 2)) * strength;

      setPosition({ x: moveX, y: moveY });
    },
    [strength]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  }, []);

  const style = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0px) scale(${isHovered ? 1.03 : 1})`,
    willChange: "transform",
  };

  const combinedClassName = `inline-block transition-transform duration-200 ease-out ${className}`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {href ? (
        <Link
          href={href}
          onClick={onClick}
          target={target}
          rel={rel}
          aria-label={ariaLabel}
          className={combinedClassName}
          style={style}
        >
          {children}
        </Link>
      ) : (
        <div
          onClick={onClick}
          aria-label={ariaLabel}
          className={combinedClassName}
          style={style}
        >
          {children}
        </div>
      )}
    </div>
  );
}
