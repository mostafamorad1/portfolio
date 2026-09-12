"use client";

import React, { useMemo } from "react";

// Data-themed symbols for the rain effect
const DATA_SYMBOLS = [
  // Numbers
  "0", "1", "0", "1", "0", "1", "42", "7", "3", "9", "256", "1024",
  // SQL / Data keywords
  "SELECT", "FROM", "JOIN", "WHERE", "GROUP BY", "ETL", "SQL", "INSERT",
  "INDEX", "QUERY", "TABLE", "VIEW", "SCHEMA", "NULL", "KEY", "AVG",
  // Data/Math symbols
  "Σ", "π", "σ", "λ", "Δ", "∞", "≈", "∫", "√", "μ",
  // Data structures
  "{}", "[]", "()", "<>", "=>", "//", "&&", "||", "!=", "==",
  // Analytics
  "KPI", "DAX", "BI", "CSV", "JSON", "API", "DB", "ROW", "COL",
  // Binary
  "01", "10", "11", "00", "110", "101", "010", "001",
  "X", "Y", "Z", "📈", "📉", "📊", "⤡", "⟿", "x-axis", "y-axis",
  // Python & Data Science
  "Python", "Pandas", "NumPy", "import", "def", "pd", "np", "DataFrame", "Series", ".csv", ".py"
];

// Blueprint-style small icons (SVG paths for data concepts)
const BLUEPRINT_ICONS = [
  // Bar chart
  `M2 16h4v4H2zM8 12h4v8H8zM14 8h4v12h-4zM20 4h4v16h-4z`,
  // Database cylinder
  `M12 2C6.48 2 2 3.34 2 5v14c0 1.66 4.48 3 10 3s10-1.34 10-3V5c0-1.66-4.48-3-10-3zm0 4c4.42 0 8-1.12 8-2.5S16.42 1 12 1 4 2.12 4 3.5 7.58 6 12 6z`,
  // Pie chart
  `M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8v8l5.66 5.66C14.54 19.12 13.32 20 12 20z`,
  // Flow/Pipeline
  `M4 6h4v4H4zM12 6h4v4h-4zM20 6h4v4h-4zM8 8h4M16 8h4`,
  // Table/Grid
  `M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18`,
];

interface RainDrop {
  id: number;
  text: string;
  x: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  rotation: number;
  scale: number;
  blur: string;
  isIcon: boolean;
  iconPath?: string;
}

function generateDrops(count: number): RainDrop[] {
  const drops: RainDrop[] = [];
  for (let i = 0; i < count; i++) {
    const isIcon = Math.random() < 0.12; // 12% chance to be a blueprint icon
    drops.push({
      id: i,
      text: DATA_SYMBOLS[Math.floor(Math.random() * DATA_SYMBOLS.length)],
      x: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 12 + Math.random() * 18,
      size: isIcon ? 20 + Math.random() * 16 : 14 + Math.random() * 10,
      opacity: 0.05 + Math.random() * 0.10, // Reduced opacity
      rotation: Math.random() > 0.5 ? (Math.random() * 60 - 30) : (Math.random() > 0.5 ? 180 : 0),
      scale: 0.5 + Math.random() * 0.8,
      blur: Math.random() < 0.2 ? '2px' : (Math.random() < 0.1 ? '4px' : '0px'),
      isIcon,
      iconPath: isIcon
        ? BLUEPRINT_ICONS[Math.floor(Math.random() * BLUEPRINT_ICONS.length)]
        : undefined,
    });
  }
  return drops;
}

export default function DataRainBackground() {
  const drops = useMemo(() => generateDrops(45), []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="data-rain-drop absolute"
          style={{
            left: `${drop.x}%`,
            top: "-60px",
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
            zIndex: drop.scale > 1 ? 10 : 0,
          }}
        >
          <div
            style={{
              transform: `rotate(${drop.rotation}deg) scale(${drop.scale})`,
              filter: `blur(${drop.blur})`,
              opacity: drop.opacity,
              fontSize: `${drop.size}px`,
            }}
            className="flex items-center justify-center"
          >
            {drop.isIcon && drop.iconPath ? (
              <svg
                width={drop.size}
                height={drop.size}
                viewBox="0 0 28 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-cyan-400"
              >
                <path d={drop.iconPath} />
              </svg>
            ) : (
              <span className="text-cyan-400/80 font-mono whitespace-nowrap select-none">
                {drop.text}
              </span>
            )}
          </div>
        </div>
      ))}

      {/* Floating blueprint grid nodes */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`node-${i}`}
          className="data-rain-node absolute rounded-full"
          style={{
            left: `${8 + (i % 4) * 25 + Math.random() * 10}%`,
            top: `${10 + Math.floor(i / 4) * 30 + Math.random() * 10}%`,
            width: `${3 + Math.random() * 4}px`,
            height: `${3 + Math.random() * 4}px`,
            opacity: 0.06 + Math.random() * 0.06,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}
