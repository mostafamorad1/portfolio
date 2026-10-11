"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";

interface Star {
  x: number;
  y: number;
  r: number;
  depth: number; // 0.1 (deep) .. 1.0 (foreground)
  phase: number;
  speed: number;
  temp: number; // 0: blue-hot, 1: white, 2: warm-gold, 3: red-giant
  hasSpikes: boolean;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  life: number;
  maxLife: number;
  color: string;
}

interface NebulaCloud {
  x: number;
  y: number;
  rx: number;
  ry: number;
  color: string;
  driftX: number;
  driftY: number;
}

const STAR_COLORS = [
  { core: "rgba(224, 242, 254, 1)", glow: "rgba(125, 211, 252, 0.55)", spike: "rgba(186, 230, 253, 0.7)" }, // O/B Blue
  { core: "rgba(255, 255, 255, 1)", glow: "rgba(241, 245, 249, 0.50)", spike: "rgba(255, 255, 255, 0.7)" }, // A/F Diamond White
  { core: "rgba(254, 243, 199, 1)", glow: "rgba(252, 211, 77, 0.50)", spike: "rgba(253, 230, 138, 0.7)" },  // G Warm Gold
  { core: "rgba(254, 205, 211, 1)", glow: "rgba(244, 63, 94, 0.40)", spike: "rgba(251, 113, 133, 0.6)" },   // M Red Giant
];

function generateStars(w: number, h: number): Star[] {
  // Density calibrated for crisp, authentic astrophotography
  const count = Math.min(650, Math.floor((w * h) / 3200));
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    const layer = Math.random();
    // 60% distant micro-dust, 28% mid-field, 12% bright foreground
    let depth: number;
    let r: number;
    let hasSpikes = false;

    if (layer < 0.60) {
      depth = 0.15 + Math.random() * 0.25;
      r = 0.35 + Math.random() * 0.55;
    } else if (layer < 0.88) {
      depth = 0.45 + Math.random() * 0.3;
      r = 0.8 + Math.random() * 0.8;
    } else {
      depth = 0.8 + Math.random() * 0.2;
      r = 1.6 + Math.random() * 1.4;
      hasSpikes = Math.random() < 0.35; // Brightest stars get subtle diffraction spikes
    }

    const tempIndex = Math.random() < 0.4 ? 0 : Math.random() < 0.7 ? 1 : Math.random() < 0.9 ? 2 : 3;

    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r,
      depth,
      phase: Math.random() * Math.PI * 2,
      speed: 0.8 + Math.random() * 2.2,
      temp: tempIndex,
      hasSpikes,
    });
  }
  return stars;
}

function generateNebulae(w: number, h: number): NebulaCloud[] {
  return [
    { x: w * 0.25, y: h * 0.30, rx: w * 0.35, ry: h * 0.25, color: "rgba(139, 92, 246, 0.08)", driftX: 0.02, driftY: 0.01 }, // Deep violet
    { x: w * 0.75, y: h * 0.60, rx: w * 0.40, ry: h * 0.30, color: "rgba(14, 165, 233, 0.07)", driftX: -0.015, driftY: 0.02 }, // Cyan gas
    { x: w * 0.85, y: h * 0.25, rx: w * 0.30, ry: h * 0.22, color: "rgba(236, 72, 153, 0.05)", driftX: 0.01, driftY: -0.01 }, // Magenta emission
    { x: w * 0.45, y: h * 0.80, rx: w * 0.45, ry: h * 0.25, color: "rgba(79, 70, 229, 0.06)", driftX: -0.02, driftY: -0.01 }, // Indigo backdrop
  ];
}

export default function SpaceBackground() {
  const { theme } = useThemeLanguage();
  const isDark = theme === "dark";
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const darkRef = useRef(isDark);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    darkRef.current = isDark;
  }, [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, dpr = 1;
    let stars: Star[] = [];
    let nebulae: NebulaCloud[] = [];
    const meteors: ShootingStar[] = [];
    let mouseX = 0, mouseY = 0, curX = 0, curY = 0;
    let visibility = darkRef.current ? 1 : 0;
    let raf = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = generateStars(w, h);
      nebulae = generateNebulae(w, h);
    };

    const onMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / w - 0.5) * 2;
      mouseY = (e.clientY / h - 0.5) * 2;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse);

    const draw = (timestamp: number) => {
      const target = darkRef.current ? 1 : 0;
      visibility += (target - visibility) * 0.04;
      ctx.clearRect(0, 0, w, h);

      if (visibility > 0.005) {
        curX += (mouseX - curX) * 0.035;
        curY += (mouseY - curY) * 0.035;
        const scroll = window.scrollY;
        const time = timestamp / 1000;

        // 1. Draw volumetric nebulae with soft composite
        ctx.save();
        ctx.globalCompositeOperation = "screen";
        for (const neb of nebulae) {
          const nx = neb.x - curX * 12 + Math.sin(time * 0.1) * 20 * neb.driftX;
          const ny = neb.y - scroll * 0.05 + Math.cos(time * 0.1) * 20 * neb.driftY;
          const grad = ctx.createRadialGradient(nx, ny, 0, nx, ny, neb.rx);
          grad.addColorStop(0, neb.color);
          grad.addColorStop(0.5, neb.color.replace(/[\d\.]+\)$/, "0.02)"));
          grad.addColorStop(1, "rgba(0,0,0,0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.ellipse(nx, ny, neb.rx, neb.ry, Math.PI / 6, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();

        // 2. Draw photorealistic starfield
        for (const s of stars) {
          const px = s.x - curX * 22 * s.depth;
          let py = (s.y - scroll * 0.14 * s.depth - curY * 22 * s.depth) % h;
          if (py < 0) py += h;

          // Atmospheric scintillation / twinkling
          const twinkle = reduceMotion
            ? 0.9
            : 0.65 + 0.35 * Math.sin(time * s.speed + s.phase) * Math.cos(time * 0.5 * s.speed);
          const alpha = Math.max(0, Math.min(1, twinkle * visibility * (0.35 + s.depth * 0.65)));

          const c = STAR_COLORS[s.temp];

          // Bright star halo & diffraction spikes (astronomical realism)
          if (s.hasSpikes && s.depth > 0.75) {
            const spikeLen = s.r * 7;

            // Soft Airy disc glow
            const glowGrad = ctx.createRadialGradient(px, py, 0, px, py, s.r * 5);
            glowGrad.addColorStop(0, c.glow.replace(/[\d\.]+\)$/, `${alpha * 0.9})`));
            glowGrad.addColorStop(0.4, c.glow.replace(/[\d\.]+\)$/, `${alpha * 0.25})`));
            glowGrad.addColorStop(1, "rgba(0,0,0,0)");
            ctx.fillStyle = glowGrad;
            ctx.beginPath();
            ctx.arc(px, py, s.r * 5, 0, Math.PI * 2);
            ctx.fill();

            // 4-point razor diffraction spikes with inverse-square falloff
            ctx.save();
            ctx.strokeStyle = c.spike.replace(/[\d\.]+\)$/, `${alpha * 0.55})`);
            ctx.lineWidth = 0.65;
            ctx.beginPath();
            // Horizontal spike
            ctx.moveTo(px - spikeLen, py);
            ctx.lineTo(px + spikeLen, py);
            // Vertical spike
            ctx.moveTo(px, py - spikeLen);
            ctx.lineTo(px, py + spikeLen);
            ctx.stroke();

            // Diagonal faint micro-spikes (secondary diffraction)
            ctx.strokeStyle = c.spike.replace(/[\d\.]+\)$/, `${alpha * 0.22})`);
            ctx.lineWidth = 0.45;
            ctx.beginPath();
            ctx.moveTo(px - spikeLen * 0.5, py - spikeLen * 0.5);
            ctx.lineTo(px + spikeLen * 0.5, py + spikeLen * 0.5);
            ctx.moveTo(px + spikeLen * 0.5, py - spikeLen * 0.5);
            ctx.lineTo(px - spikeLen * 0.5, py + spikeLen * 0.5);
            ctx.stroke();
            ctx.restore();
          } else if (s.depth > 0.5) {
            // Soft glow for medium stars
            const g = ctx.createRadialGradient(px, py, 0, px, py, s.r * 2.8);
            g.addColorStop(0, c.glow.replace(/[\d\.]+\)$/, `${alpha * 0.65})`));
            g.addColorStop(1, "rgba(0,0,0,0)");
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(px, py, s.r * 2.8, 0, Math.PI * 2);
            ctx.fill();
          }

          // Star core (sharp and intense)
          ctx.fillStyle = c.core.replace(/[\d\.]+\)$/, `${alpha})`);
          ctx.beginPath();
          ctx.arc(px, py, s.r, 0, Math.PI * 2);
          ctx.fill();
        }

        // 3. Realistic shooting stars (meteors with ionized trails)
        if (!reduceMotion && Math.random() < 0.006 && meteors.length < 2) {
          const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.35; // ~45 degree entry
          meteors.push({
            x: Math.random() * w * 0.85,
            y: Math.random() * h * 0.4,
            length: 120 + Math.random() * 160,
            speed: 14 + Math.random() * 10,
            angle,
            life: 0,
            maxLife: 35 + Math.random() * 25,
            color: Math.random() < 0.6 ? "rgba(186, 230, 253," : "rgba(254, 240, 138,",
          });
        }

        for (let i = meteors.length - 1; i >= 0; i--) {
          const m = meteors[i];
          m.life++;
          const progress = m.life / m.maxLife;
          const trailAlpha = Math.sin(progress * Math.PI) * visibility;

          m.x += Math.cos(m.angle) * m.speed;
          m.y += Math.sin(m.angle) * m.speed;

          const tailX = m.x - Math.cos(m.angle) * m.length;
          const tailY = m.y - Math.sin(m.angle) * m.length;

          const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
          grad.addColorStop(0, `${m.color}${trailAlpha})`);
          grad.addColorStop(0.2, `${m.color}${trailAlpha * 0.7})`);
          grad.addColorStop(1, "rgba(255,255,255,0)");

          ctx.save();
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.8;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(m.x, m.y);
          ctx.lineTo(tailX, tailY);
          ctx.stroke();

          // Brilliant head spark
          ctx.fillStyle = `rgba(255, 255, 255, ${trailAlpha})`;
          ctx.beginPath();
          ctx.arc(m.x, m.y, 2.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();

          if (m.life >= m.maxLife) {
            meteors.splice(i, 1);
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Sky Base: Dark Cosmos (Dark Mode) */}
      <div
        className="absolute inset-0 transition-opacity duration-[1400ms] ease-in-out"
        style={{
          opacity: isDark ? 1 : 0,
          background:
            "radial-gradient(ellipse at 85% 15%, rgba(99, 102, 241, 0.16), transparent 50%), radial-gradient(ellipse at 15% 75%, rgba(168, 85, 247, 0.12), transparent 45%), radial-gradient(ellipse at 50% 40%, rgba(14, 165, 233, 0.08), transparent 60%), linear-gradient(180deg, #020308 0%, #050816 45%, #080d24 100%)",
        }}
      />

      {/* Sky Base: Physically-Calibrated Rayleigh Daylight Atmosphere (Light Mode) */}
      <div
        className="absolute inset-0 transition-opacity duration-[1400ms] ease-in-out"
        style={{
          opacity: isDark ? 0 : 1,
          background:
            "radial-gradient(circle at 75% 20%, rgba(254, 243, 199, 0.95) 0%, rgba(224, 242, 254, 0.7) 35%, transparent 70%), linear-gradient(180deg, #38bdf8 0%, #7dd3fc 25%, #bae6fd 55%, #f0f9ff 85%, #fdfcf7 100%)",
        }}
      />

      {/* Canvas for Astrophotography Starfield & Nebulae */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Photorealistic Volumetric Daylight Clouds (Light Mode) */}
      <div className={`transition-opacity duration-[1600ms] ${isDark ? "opacity-0" : "opacity-100"}`}>
        <div className="sky-cloud-realistic cloud-layer-1" style={{ top: "14%", width: 440, animationDuration: "140s" }} />
        <div className="sky-cloud-realistic cloud-layer-2" style={{ top: "36%", width: 340, animationDuration: "180s", animationDelay: "-60s" }} />
        <div className="sky-cloud-realistic cloud-layer-3" style={{ top: "62%", width: 520, animationDuration: "220s", animationDelay: "-110s" }} />
      </div>

      {/* =========================================================================
          ATMOSPHERIC SKY LIGHTING:
          Pure deep-space cosmic depth (Dark) <---> Ambient morning sunlight & clouds (Light)
          Zero intrusive foreground bodies to distract or collide with content
         ========================================================================= */}
      {/* Ambient Morning Sunlight Wash (Light Mode) */}
      <div
        className={`absolute top-0 right-0 w-[550px] h-[550px] rounded-full pointer-events-none transition-opacity duration-[1400ms] ${
          isDark ? "opacity-0" : "opacity-100"
        }`}
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(254, 240, 138, 0.45) 0%, rgba(251, 191, 36, 0.20) 35%, rgba(125, 211, 252, 0.10) 65%, transparent 85%)",
          filter: "blur(40px)",
        }}
      />

      {/* Gentle Ambient Cosmic Nebula Core (Dark Mode - Soft & Distant, Zero Distraction) */}
      <div
        className={`absolute top-1/4 left-1/3 w-[600px] h-[400px] rounded-full pointer-events-none transition-opacity duration-[1400ms] ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.08) 0%, rgba(168, 85, 247, 0.04) 45%, transparent 75%)",
          filter: "blur(60px)",
        }}
      />

      {/* Gentle Dawn Light Breakthrough Wave on Theme Switch */}
      <AnimatePresence>
        {mounted && !isDark && (
          <motion.div
            key="supernova-flash"
            className="absolute rounded-full pointer-events-none"
            style={{
              top: "85px",
              right: "6%",
              width: 50,
              height: 50,
              x: "50%",
              y: "-50%",
              background:
                "radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(254, 240, 138, 0.7) 35%, rgba(251, 191, 36, 0.3) 65%, transparent 80%)",
            }}
            initial={{ scale: 0, opacity: 0.9 }}
            animate={{ scale: 80, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
