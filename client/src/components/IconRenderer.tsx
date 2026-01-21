"use client";

interface IconRendererProps {
  icon: string;
  color?: string;
  size?: number;
  className?: string;
}

export default function IconRenderer({ icon, color = "currentColor", size = 24, className = "" }: IconRendererProps) {
  if (!icon) return null;

  // Check if icon is an SVG path (starts with M or contains path data)
  const isSVGPath = /^[MLHVCSQTAZmlhvcsqtaz\d\s,.-]+$/.test(icon.trim()) && icon.includes('M');

  if (isSVGPath) {
    // It's an SVG path string
    return (
      <svg
        className={className}
        width={size}
        height={size}
        fill="none"
        stroke={color}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={icon}
        />
      </svg>
    );
  }

  // If it's already HTML/SVG, render it directly (sanitized)
  return (
    <div
      className={className}
      style={{ width: size, height: size, color }}
      dangerouslySetInnerHTML={{ __html: icon }}
    />
  );
}
