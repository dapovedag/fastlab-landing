"use client";

import { useEffect, useRef } from "react";

interface BirdsCanvasProps {
  theme: "light" | "dark";
}

export default function BirdsCanvas({ theme }: BirdsCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Canvas de pantalla completa para que los efectos lleguen a todos los rincones
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Posición del centro de la esfera - centrado vertical en la sección hero
    const FIXED_CENTER_X = window.innerWidth * 0.75;
    const FIXED_CENTER_Y = window.innerHeight * 0.5;

    let rotation = 0;
    let time = 0;
    let animationId: number;

    class Bird {
      originalPos: Point3D;
      id: number;
      phase: number;
      speed: number;
      waveFreq: number;
      waveAmp: number;
      zWaveAmp: number;
      delayOffset: number;

      constructor(originalPos: Point3D, id: number) {
        this.originalPos = originalPos;
        this.id = id;
        this.phase = Math.random() * Math.PI * 2;
        this.speed = 0.3 + Math.random() * 0.2;  // Reducido de 0.8-1.2 a 0.3-0.5 (más lento)
        this.waveFreq = 1 + Math.random() * 1.5;  // Reducido de 2-5 a 1-2.5 (ondas más suaves)
        this.waveAmp = 20 + Math.random() * 30;  // Reducido de 30-80 a 20-50 (menos movimiento)
        this.zWaveAmp = 10 + Math.random() * 20;  // Reducido de 20-50 a 10-30
        this.delayOffset = Math.random() * 5;  // Aumentado de 3 a 5 (más variedad en inicio)
      }

      getCurrentPos(t: number) {
        const adjustedTime = (t + this.delayOffset) * this.speed;
        const cycleProgress = (adjustedTime % 12) / 12;  // Aumentado de 6 a 12 segundos (ciclo más lento)

        if (cycleProgress < 0.15) {
          const idleWave = Math.sin(adjustedTime * 4) * 5;
          return {
            x: this.originalPos.x + idleWave,
            y: this.originalPos.y + idleWave * 0.5,
            z: this.originalPos.z + idleWave * 0.3,
            state: "idle",
          };
        } else if (cycleProgress < 0.85) {
          const flyProgress = (cycleProgress - 0.15) / 0.7;
          const easeInOut =
            flyProgress < 0.5
              ? 2 * flyProgress * flyProgress
              : 1 - Math.pow(-2 * flyProgress + 2, 2) / 2;

          const distance = easeInOut * 1200; // Distancia para volar por la pantalla
          const waveOffset =
            Math.sin(adjustedTime * this.waveFreq + this.phase) * this.waveAmp;
          const zWave =
            Math.sin(adjustedTime * this.waveFreq * 0.7 + this.phase) *
            this.zWaveAmp;

          const upLift = Math.sin(flyProgress * Math.PI) * 80;

          return {
            x: this.originalPos.x - distance,
            y: this.originalPos.y + waveOffset + upLift,
            z: this.originalPos.z + zWave,
            state: "flying",
          };
        } else {
          const returnProgress = (cycleProgress - 0.85) / 0.15;
          const easeIn = 1 - Math.pow(1 - returnProgress, 3);

          return {
            x: this.originalPos.x * (1 - easeIn) + this.originalPos.x * easeIn,
            y: this.originalPos.y * (1 - easeIn) + this.originalPos.y * easeIn,
            z: this.originalPos.z * (1 - easeIn) + this.originalPos.z * easeIn,
            state: "returning",
          };
        }
      }
    }

    class Point3D {
      x: number;
      y: number;
      z: number;

      constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
      }

      project(fov: number, viewDist: number) {
        const factor = fov / (viewDist + this.z);
        // Centro de la esfera en posición fija (no se mueve con scroll)
        const x = this.x * factor + FIXED_CENTER_X;
        const y = -this.y * factor + FIXED_CENTER_Y;
        return { x, y, z: this.z, factor };
      }
    }

    function createSphere(radius: number, numPoints: number) {
      const birds: Bird[] = [];

      for (let i = 0; i < numPoints; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        const point = new Point3D(x, y, z);
        birds.push(new Bird(point, i));
      }

      return birds;
    }

    function rotateY(point: Point3D, angle: number) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return new Point3D(
        point.x * cos - point.z * sin,
        point.y,
        point.x * sin + point.z * cos
      );
    }

    function rotateX(point: Point3D, angle: number) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return new Point3D(
        point.x,
        point.y * cos - point.z * sin,
        point.y * sin + point.z * cos
      );
    }

    const birds = createSphere(360, 8000); // Radio aumentado 100% (de 180 a 360)

    function animate() {
      if (!ctx || !canvas) return;

      // Clear canvas con transparencia
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      rotation += 0.001;  // Reducido de 0.003 a 0.001 (rotación mucho más lenta)
      time += 0.008;  // Reducido de 0.016 a 0.008 (tiempo global más lento)

      const projectedBirds = birds.map((bird) => {
        const currentPos = bird.getCurrentPos(time);
        const point = new Point3D(currentPos.x, currentPos.y, currentPos.z);

        let rotated = rotateY(point, rotation);
        rotated = rotateX(rotated, rotation * 0.4);

        const projected = rotated.project(500, 600);
        return { ...projected, state: currentPos.state };
      });

      projectedBirds.sort((a, b) => a.z - b.z);

      projectedBirds.forEach((p) => {
        const depth = Math.max(0, Math.min(1, (p.z + 800) / 1600));

        let size: number, opacity: number;
        if (p.state === "flying") {
          size = 1.5 + depth * 2;
          opacity = 0.6 + depth * 0.4;
        } else if (p.state === "returning") {
          size = 1.2 + depth * 1.5;
          opacity = 0.5 + depth * 0.3;
        } else {
          size = 1.0 + depth * 1.2;
          opacity = 0.7 + depth * 0.3;
        }

        let color: number;
        if (theme === "dark") {
          color = 200 + depth * 55;
          ctx.fillStyle = `rgba(${color}, ${color}, ${color}, ${opacity})`;
        } else {
          color = 55 - depth * 55;
          ctx.fillStyle = `rgba(${color}, ${color}, ${color}, ${opacity})`;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();

        if (p.state === "flying" && Math.random() > 0.95) {
          ctx.strokeStyle = `rgba(${color}, ${color}, ${color}, ${opacity * 0.3})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x - 3, p.y - 1);
          ctx.lineTo(p.x + 3, p.y - 1);
          ctx.moveTo(p.x - 3, p.y + 1);
          ctx.lineTo(p.x + 3, p.y + 1);
          ctx.stroke();
        }
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
