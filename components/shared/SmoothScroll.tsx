"use client"
import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';

const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      gestureOrientation: 'vertical',
      smoothWheel: true,
      syncTouch: false,
      
      infinite: false,
    });

    let frameId: number;

    function raf(time: number) {
      lenisRef.current?.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenisRef.current?.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;