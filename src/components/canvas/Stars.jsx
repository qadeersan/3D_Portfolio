import React, { useEffect, useRef } from 'react';

const Stars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const stars = Array.from({ length: 500 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speed: Math.random() * 2,
    }));
    
    const updateStars = () => {
      for (let star of stars) {
        star.x += star.speed;
        star.y += star.speed;
    
        // If the star goes beyond the bottom-right corner
        if (star.x > canvas.width || star.y > canvas.height) {
          star.x = Math.random() * canvas.width;  // random starting point on the top edge
          star.y = Math.random() * canvas.height;  // random starting point on the left edge
          star.size = Math.random() * 2;
          star.speed = Math.random() * 2;
        }
      }
    };
    
    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#FFF";
      for (let star of stars) {
        ctx.fillRect(star.x, star.y, star.size, star.size);
      }
    };
    
    const animate = () => {
      updateStars();
      drawStars();
      requestAnimationFrame(animate);
    };
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    
    animate();
      }, []);

  return <canvas ref={canvasRef} className="w-full h-full absolute inset-0 z-[-2]" />;
};

export default Stars;


