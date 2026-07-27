"use client";

interface ConfirmTagProps {
  label: string;
  variant?: "badge" | "text" | "inline";
  className?: string;
}

export default function ConfirmTag({
  label,
  variant = "badge",
  className = "",
}: ConfirmTagProps) {
  if (variant === "text") {
    return (
      <span
        title="Pending Founder Confirmation before launch"
        className={`confirm-text font-mono text-[11px] uppercase tracking-[0.08em] ${className}`}
      >
        [CONFIRM: {label}]
      </span>
    );
  }

  if (variant === "inline") {
    return (
      <span
        title="Pending Founder Confirmation before launch"
        className={`border-b border-dashed border-champagne text-champagne font-mono text-xs ${className}`}
      >
        [CONFIRM: {label}]
      </span>
    );
  }

  return (
    <span
      title="Pending Founder Confirmation before launch"
      className={`confirm-badge ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
      [CONFIRM: {label}]
    </span>
  );
}
