"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    
    // Create points on a sphere
    const points: { x: number; y: number; z: number }[] = [];
    const numPoints = 800;
    const radius = Math.min(width, height) / 2.5;

    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(-1 + (2 * i) / numPoints);
      const theta = Math.sqrt(numPoints * Math.PI) * phi;
      
      points.push({
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
      });
    }

    let angle = 0;
    let animationFrameId: number;

    const render = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);
      
      // Rotate points
      angle += 0.002;

      const projectedPoints = points.map((p) => {
        // Rotate around Y axis
        const x = p.x * Math.cos(angle) - p.z * Math.sin(angle);
        const z = p.x * Math.sin(angle) + p.z * Math.cos(angle);
        const y = p.y; // Keep Y as is (or rotate around X/Z too if needed)

        // Simple perspective projection
        const scale = 300 / (300 + z);
        const px = x * scale + width / 2;
        const py = y * scale + height / 2;
        const alpha = (z + radius) / (2 * radius); // Fade back points

        return { x: px, y: py, z, alpha };
      });

      // Sort by Z to draw back points first (though with simple dots it matters less, but for alpha it helps)
      projectedPoints.sort((a, b) => a.z - b.z);

      projectedPoints.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = resolvedTheme === 'dark' 
          ? `rgba(255, 255, 255, ${Math.max(0.1, p.alpha)})` 
          : `rgba(100, 116, 139, ${Math.max(0.1, p.alpha)})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
        if (canvas) {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [resolvedTheme]);

  return <canvas ref={canvasRef} className="w-full h-full min-h-[400px]" />;
}