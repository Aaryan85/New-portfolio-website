"use client";

import React from "react";

interface DotbgProps {
  className?: string;
  fade?: boolean;
  fadeDirection?: "bottom" | "radial" | "none";
  size?: number;
  dotColor?: string;
}

export default function Dotbg({
  className = "",
  fade = false,
  fadeDirection = "none",
  size = 24,
  dotColor = "var(--dot-pattern, rgba(100, 116, 139, 0.45))",
}: DotbgProps) {
  const dotStyle: React.CSSProperties = {
    backgroundImage: `radial-gradient(${dotColor} 1.25px, transparent 1.25px)`,
    backgroundSize: `${size}px ${size}px`,
  };

  let maskStyle: React.CSSProperties = {};

  if (fadeDirection === "bottom") {
    // Starts visible at top, gradually fades toward bottom without radial artifact
    maskStyle = {
      maskImage: "linear-gradient(to bottom, black 0%, black 45%, transparent 100%)",
      WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 45%, transparent 100%)",
    };
  } else if (fade || fadeDirection === "radial") {
    maskStyle = {
      maskImage: "radial-gradient(ellipse at center, black 65%, transparent 100%)",
      WebkitMaskImage: "radial-gradient(ellipse at center, black 65%, transparent 100%)",
    };
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{ ...dotStyle, ...maskStyle }}
      />
    </div>
  );
}
