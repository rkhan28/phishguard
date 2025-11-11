"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();

    const particles: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      size: number;
      hue: number;
    }> = [];

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 2000,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: Math.random() * 1 + 0.5,
        size: Math.random() * 3 + 1,
        hue: Math.random() > 0.5 ? 0 : 1,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.z -= particle.vz;
        
        if (particle.z <= 0) {
          particle.z = 2000;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        const scale = 1000 / (1000 + particle.z);
        const x = particle.x * scale + (canvas.width / 2) * (1 - scale);
        const y = particle.y * scale + (canvas.height / 2) * (1 - scale);
        const size = particle.size * scale * 2;

        const depth = (2000 - particle.z) / 2000;
        const alpha = depth * 0.8;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);

        if (particle.hue === 0) {
          gradient.addColorStop(0, `rgba(248, 113, 113, ${alpha})`);
          gradient.addColorStop(0.5, `rgba(220, 38, 38, ${alpha * 0.5})`);
        } else {
          gradient.addColorStop(0, `rgba(40, 40, 40, ${alpha * 0.7})`);
          gradient.addColorStop(0.5, `rgba(20, 20, 20, ${alpha * 0.4})`);
        }
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const dz = particle.z - other.z;
          const dist3d = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3d < 200) {
            const otherScale = 1000 / (1000 + other.z);
            const ox = other.x * otherScale + (canvas.width / 2) * (1 - otherScale);
            const oy = other.y * otherScale + (canvas.height / 2) * (1 - otherScale);

            const lineAlpha = (1 - dist3d / 200) * depth * 0.25;

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(ox, oy);
            ctx.strokeStyle = `rgba(220, 38, 38, ${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}
