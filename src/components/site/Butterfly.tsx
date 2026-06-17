import type { SVGProps } from "react";

export function Butterfly({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Body */}
      <line x1="60" y1="20" x2="60" y2="80" />
      <circle cx="60" cy="18" r="2" />
      {/* Antennae */}
      <path d="M60 20 C 56 12, 52 10, 48 8" />
      <path d="M60 20 C 64 12, 68 10, 72 8" />
      {/* Left upper wing */}
      <path d="M60 30 C 30 10, 8 22, 10 44 C 12 58, 36 56, 60 50" />
      {/* Right upper wing */}
      <path d="M60 30 C 90 10, 112 22, 110 44 C 108 58, 84 56, 60 50" />
      {/* Left lower wing */}
      <path d="M60 52 C 38 58, 18 70, 24 86 C 30 96, 52 82, 60 72" />
      {/* Right lower wing */}
      <path d="M60 52 C 82 58, 102 70, 96 86 C 90 96, 68 82, 60 72" />
      {/* Detail */}
      <path d="M30 36 Q 40 40 50 38" opacity="0.7" />
      <path d="M90 36 Q 80 40 70 38" opacity="0.7" />
    </svg>
  );
}
