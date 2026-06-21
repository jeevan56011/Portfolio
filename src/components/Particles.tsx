import { useEffect, useRef, useState } from "react";

export function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(m.matches);
    const h = (e: MediaQueryListEvent) => setReduce(e.matches);
    m.addEventListener("change", h);
    return () => m.removeEventListener("change", h);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const onR = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener("resize", onR);

    const count = Math.min(60, Math.floor((w * h) / 28000));
    const parts = Array.from({ length: count }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      r: Math.random() * 1.2 + 0.4,
    }));

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.35)";
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onR); };
  }, [reduce]);

  return <canvas ref={ref} className="fixed inset-0 pointer-events-none z-0 opacity-50" />;
}
