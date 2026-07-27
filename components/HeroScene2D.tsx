"use client";

import { useEffect, useRef } from "react";

export default function HeroScene2D({ fill = true }: { fill?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Node topology setup
    const NODE_COUNT = 45;
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      pulse: number;
    }> = [];

    const colors = ["#2FB8C6", "#E8A33D", "#1F6E4A", "#F5F7FA"];

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2.5 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.25;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(47, 184, 198, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Update and draw nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Subtle mouse pull
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          node.x += (dx / dist) * 0.3;
          node.y += (dy / dist) * 0.3;
        }

        node.pulse += 0.03;
        const glowRadius = node.radius + Math.sin(node.pulse) * 1.2;

        // Node glow aura
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius * 3, 0, Math.PI * 2);
        ctx.fillStyle = node.color === "#E8A33D" ? "rgba(232, 163, 61, 0.15)" : "rgba(47, 184, 198, 0.15)";
        ctx.fill();

        // Node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`${fill ? "absolute inset-0 pointer-events-none" : "relative w-full h-[400px]"}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
