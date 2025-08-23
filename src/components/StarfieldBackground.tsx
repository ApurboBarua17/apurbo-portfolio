import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const meteorsRef = useRef<Meteor[]>([]);
  const animationRef = useRef<number>();
  const lastMeteorTime = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      const stars: Star[] = [];
      const starCount = Math.floor((window.innerWidth * window.innerHeight) / 8000);

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2.5 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }

      starsRef.current = stars;
    };

    const createMeteor = () => {
      const meteor: Meteor = {
        x: Math.random() * canvas.width + canvas.width * 0.1,
        y: -50,
        vx: -(Math.random() * 3 + 2),
        vy: Math.random() * 2 + 3,
        length: Math.random() * 80 + 40,
        opacity: Math.random() * 0.7 + 0.3,
        life: 0,
        maxLife: Math.random() * 100 + 80,
      };

      meteorsRef.current.push(meteor);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const currentTime = Date.now();

      // Create meteors randomly
      if (currentTime - lastMeteorTime.current > Math.random() * 3000 + 2000) {
        createMeteor();
        lastMeteorTime.current = currentTime;
      }

      // Draw stars with twinkling effect
      starsRef.current.forEach((star) => {
        const time = currentTime * 0.001;
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.3 + 0.7;
        const finalOpacity = star.opacity * twinkle;

        // Create a subtle red tint for some stars
        const isRedStar = Math.random() > 0.85;
        const color = isRedStar 
          ? `rgba(255, 100, 100, ${finalOpacity})`
          : `rgba(255, 255, 255, ${finalOpacity})`;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        // Add a subtle glow for larger stars
        if (star.size > 1.5) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = isRedStar 
            ? `rgba(255, 100, 100, ${finalOpacity * 0.1})`
            : `rgba(255, 255, 255, ${finalOpacity * 0.1})`;
          ctx.fill();
        }
      });

      // Draw and update meteors
      meteorsRef.current = meteorsRef.current.filter((meteor) => {
        meteor.x += meteor.vx;
        meteor.y += meteor.vy;
        meteor.life++;

        // Calculate opacity based on life
        const lifeRatio = meteor.life / meteor.maxLife;
        const fadeIn = Math.min(meteor.life / 10, 1);
        const fadeOut = Math.max(1 - Math.pow(Math.max(lifeRatio - 0.7, 0) / 0.3, 2), 0);
        const currentOpacity = meteor.opacity * fadeIn * fadeOut;

        if (currentOpacity > 0.01 && meteor.x > -200 && meteor.y < canvas.height + 100) {
          // Draw meteor trail
          const gradient = ctx.createLinearGradient(
            meteor.x,
            meteor.y,
            meteor.x - meteor.vx * meteor.length / 5,
            meteor.y - meteor.vy * meteor.length / 5
          );
          
          gradient.addColorStop(0, `rgba(255, 150, 150, ${currentOpacity})`);
          gradient.addColorStop(0.6, `rgba(255, 100, 100, ${currentOpacity * 0.6})`);
          gradient.addColorStop(1, `rgba(255, 80, 80, 0)`);

          ctx.beginPath();
          ctx.moveTo(meteor.x, meteor.y);
          ctx.lineTo(
            meteor.x - meteor.vx * meteor.length / 5,
            meteor.y - meteor.vy * meteor.length / 5
          );
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 3;
          ctx.stroke();

          // Draw meteor head
          ctx.beginPath();
          ctx.arc(meteor.x, meteor.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 200, 200, ${currentOpacity})`;
          ctx.fill();

          // Add glow around meteor head
          ctx.beginPath();
          ctx.arc(meteor.x, meteor.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 150, 150, ${currentOpacity * 0.3})`;
          ctx.fill();

          return true;
        }

        return false;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createStars();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createStars();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
}
