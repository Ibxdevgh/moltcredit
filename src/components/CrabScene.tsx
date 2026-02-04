"use client";

import { useEffect, useRef } from "react";

/*
  AgentNetwork3D — Recreated from the original molt.credit
  A 3D network of agent nodes on a sphere with glowing center core,
  orbital rings, and animated connection lines.
  Uses Canvas 2D with projected 3D math (no WebGL dependency).
*/

interface Node3D {
  x: number; y: number; z: number;
  size: number;
  chain: { name: string; color: string };
  opacity: number;
}

interface Connection {
  from: Node3D;
  to: Node3D;
  progress: number;
  speed: number;
  phase: "drawing" | "holding" | "fading";
  timer: number;
}

const CHAINS = [
  { name: "Solana", color: "#9945FF" },
  { name: "Base", color: "#0052FF" },
  { name: "XRPL", color: "#111111" },
];

export default function CrabScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = container.clientWidth;
    let H = container.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      W = container.clientWidth;
      H = container.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Camera params (perspective projection)
    const fov = 45;
    const near = 0.1;
    const camDist = 1800;

    // Create nodes on a sphere
    const RADIUS = 700;
    const nodes: Node3D[] = [];
    for (let i = 0; i < 200; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = RADIUS * (0.55 + 0.55 * Math.random());
      nodes.push({
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        size: 10 + 10 * Math.random(),
        chain: CHAINS[Math.floor(Math.random() * CHAINS.length)],
        opacity: 0,
      });
    }

    // Connections
    const connections: Connection[] = [];
    const coreConnections: Connection[] = [];

    // Rotation state
    let autoRotation = 0;
    let rotX = -0.55;
    let rotY = 0;
    let targetRotX = -0.55;
    let targetRotY = 0;
    let isDragging = false;
    let lastMX = 0, lastMY = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      lastMX = e.clientX;
      lastMY = e.clientY;
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      targetRotY += (e.clientX - lastMX) * 0.004;
      targetRotX += (e.clientY - lastMY) * 0.004;
      lastMX = e.clientX;
      lastMY = e.clientY;
    };
    const onPointerUp = () => { isDragging = false; };
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      targetRotX += e.deltaY * 0.002;
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);
    canvas.addEventListener("wheel", onWheel, { passive: false });

    // 3D → 2D projection
    const project = (x: number, y: number, z: number): [number, number, number] => {
      // Apply rotation
      const cosY = Math.cos(rotY + autoRotation);
      const sinY = Math.sin(rotY + autoRotation);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Rotate Y
      let rx = x * cosY - z * sinY;
      let rz = x * sinY + z * cosY;
      let ry = y;

      // Rotate X
      let ry2 = ry * cosX - rz * sinX;
      let rz2 = ry * sinX + rz * cosX;

      // Camera offset (push scene back along view axis)
      rz2 -= camDist;

      // Perspective
      const fovRad = (fov * Math.PI) / 180;
      const scale = (H / 2) / Math.tan(fovRad / 2);
      const depth = -rz2 + near;
      if (depth <= 0) return [0, 0, -1];

      const sx = W / 2 + (rx / depth) * scale;
      const sy = H / 2 + (ry2 / depth) * scale;

      return [sx, sy, depth];
    };

    // Quadratic bezier for connections
    const bezierPoint = (
      p0: [number, number], p1: [number, number], p2: [number, number], t: number
    ): [number, number] => {
      const u = 1 - t;
      return [
        u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0],
        u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1],
      ];
    };

    let frame = 0;
    let oscPhase = 0;

    const animate = () => {
      frame++;
      oscPhase = (oscPhase + 0.015) % (Math.PI * 2);

      if (!isDragging) autoRotation += 0.0006;
      rotX += (targetRotX - rotX) * 0.08;
      rotY += (targetRotY - rotY) * 0.08;

      ctx.clearRect(0, 0, W, H);

      // Background
      ctx.fillStyle = "#2D2521";
      ctx.fillRect(0, 0, W, H);

      // Project all nodes
      const projected = nodes.map(n => {
        const [sx, sy, depth] = project(n.x, n.y, n.z);
        return { node: n, sx, sy, depth };
      });

      // Sort by depth (far first)
      projected.sort((a, b) => b.depth - a.depth);

      // Add new connections periodically
      if (frame % 16 === 0 && connections.length < 40 && nodes.length > 2) {
        const a = nodes[Math.floor(Math.random() * nodes.length)];
        let b = nodes[Math.floor(Math.random() * nodes.length)];
        while (b === a && nodes.length > 1) b = nodes[Math.floor(Math.random() * nodes.length)];
        connections.push({
          from: a, to: b, progress: 0,
          speed: 0.008 + Math.random() * 0.008,
          phase: "drawing", timer: 120,
        });
      }

      // Core connections
      if (frame % 14 === 0 && coreConnections.length < 20 && nodes.length > 0) {
        const target = nodes[Math.floor(Math.random() * nodes.length)];
        coreConnections.push({
          from: { x: 0, y: 0, z: 0, size: 0, chain: CHAINS[0], opacity: 1 },
          to: target, progress: 0,
          speed: 0.012 + Math.random() * 0.01,
          phase: "drawing", timer: 40,
        });
      }

      // Draw connections
      const drawConns = (conns: Connection[], baseOpacity: number) => {
        for (let i = conns.length - 1; i >= 0; i--) {
          const c = conns[i];
          if (c.phase === "drawing") {
            c.progress = Math.min(1, c.progress + c.speed);
            if (c.progress >= 1) c.phase = "holding";
          } else if (c.phase === "holding") {
            c.timer--;
            if (c.timer <= 0) { c.phase = "fading"; c.timer = 24; }
          } else {
            c.timer--;
            if (c.timer <= 0) { conns.splice(i, 1); continue; }
          }

          const [fx, fy] = project(c.from.x, c.from.y, c.from.z);
          const [tx, ty] = project(c.to.x, c.to.y, c.to.z);

          // Midpoint with offset for curve
          const mx = (fx + tx) / 2 + (fy - ty) * 0.14;
          const my = (fy + ty) / 2 + (tx - fx) * 0.14;

          const opacity = c.phase === "fading"
            ? (c.timer / 24) * baseOpacity
            : baseOpacity;

          const segs = Math.max(2, Math.floor(42 * c.progress));
          ctx.beginPath();
          for (let s = 0; s <= segs; s++) {
            const t = s / 42;
            const [px, py] = bezierPoint([fx, fy], [mx, my], [tx, ty], t);
            if (s === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      };

      drawConns(connections, 0.25);
      drawConns(coreConnections, 0.28);

      // Draw center glow
      const [cx, cy] = project(0, 0, 0);
      const pulse = 1 + 0.08 * Math.sin(oscPhase);
      const glowR = 60 * pulse;
      const grad = ctx.createRadialGradient(cx, cy, 5, cx, cy, glowR);
      grad.addColorStop(0, "rgba(255,170,135,0.9)");
      grad.addColorStop(0.3, "rgba(255,120,90,0.5)");
      grad.addColorStop(0.6, "rgba(255,98,74,0.25)");
      grad.addColorStop(1, "rgba(255,98,74,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, glowR, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Draw orbital rings around center
      for (let r = 0; r < 3; r++) {
        const ringR = (55 + 14 * r) * 0.3;
        const ringPulse = 1 + 0.05 * Math.sin(oscPhase + r);
        const rr = ringR * ringPulse;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rr * 1.4, rr * 0.5, oscPhase * 0.3 + r * 0.7, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,98,74,${0.22 + 0.03 * r + 0.04 * Math.sin(oscPhase + r)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw nodes
      for (const p of projected) {
        if (p.depth <= 0) continue;
        const n = p.node;

        // Fade in
        if (n.opacity < 0.95) n.opacity = Math.min(0.95, n.opacity + 0.02);

        // Depth-based sizing and opacity
        const depthFactor = Math.min(1, Math.max(0.2, 1 - (p.depth - 500) / 3000));
        const screenSize = n.size * depthFactor * 0.4;
        const alpha = n.opacity * (0.35 + 0.65 * depthFactor);

        // Node circle
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, Math.max(1, screenSize), 0, Math.PI * 2);
        const nodeGrad = ctx.createRadialGradient(
          p.sx, p.sy, 0,
          p.sx, p.sy, screenSize
        );
        nodeGrad.addColorStop(0, `rgba(255,255,255,${alpha * 0.95})`);
        nodeGrad.addColorStop(0.4, `rgba(245,245,245,${alpha * 0.92})`);
        nodeGrad.addColorStop(1, `rgba(220,220,220,${alpha * 0.9})`);
        ctx.fillStyle = nodeGrad;
        ctx.fill();

        // Node border
        ctx.strokeStyle = `rgba(120,110,100,${alpha * 0.5})`;
        ctx.lineWidth = Math.max(0.5, screenSize * 0.08);
        ctx.stroke();
      }

      // Center dot
      ctx.beginPath();
      ctx.arc(cx, cy, 4 * pulse, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,98,74,0.95)";
      ctx.fill();

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
      canvas.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
