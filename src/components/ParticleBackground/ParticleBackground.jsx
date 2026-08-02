import { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './ParticleBackground.module.css';

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    let mouse = { x: null, y: null };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = Math.min(60, Math.floor((canvas.width * canvas.height) / 20000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.8 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = themeRef.current === 'dark';
      const particleColor = isDark ? '139, 124, 247' : '108, 92, 231';
      const mouseColor = isDark ? '167, 139, 250' : '124, 58, 237';
      const time = Date.now() * 0.001;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Pulsing opacity
        const pulse = Math.sin(time + p.pulsePhase) * 0.15 + 0.85;
        const currentOpacity = p.opacity * pulse;

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${currentOpacity})`;
        ctx.fill();

        // Subtle glow around particle
        if (p.size > 1.2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${particleColor}, ${currentOpacity * 0.05})`;
          ctx.fill();
        }

        // Draw connections between nearby particles (Neural Network style)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            // Calculate a pulsing data-flow effect for the connection line
            const connectionPulse = Math.sin(time * 2 + p.pulsePhase + p2.pulsePhase) * 0.5 + 0.5;
            const baseOpacity = 0.08 * (1 - dist / 180);
            const lineOpacity = baseOpacity + (baseOpacity * connectionPulse * 1.5);
            
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${particleColor}, ${lineOpacity})`;
            ctx.lineWidth = connectionPulse > 0.8 ? 1.2 : 0.6; // Thicker line when "data" is pulsing
            ctx.stroke();
          }
        }

        // Mouse interaction — neural node attraction
        if (mouse.x !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 220) {
            const strength = 1 - dist / 220;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            // Glowing connection to cursor
            ctx.strokeStyle = `rgba(${mouseColor}, ${0.15 * strength})`;
            ctx.lineWidth = 1.5 * strength;
            ctx.stroke();

            // Stronger magnetic attraction to mouse for network feel
            p.x -= dx * 0.004;
            p.y -= dy * 0.004;
          }
        }
      }

      animationId = requestAnimationFrame(drawParticles);
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    resize();
    createParticles();
    drawParticles();

    const resizeHandler = () => {
      resize();
      createParticles();
    };

    window.addEventListener('resize', resizeHandler);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeHandler);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.particleCanvas} />;
}
