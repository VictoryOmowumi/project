import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      if (cursor) {
        gsap.to(cursor, {
          x: event.clientX - cursor.clientWidth / 2,
          y: event.clientY - cursor.clientHeight / 2,
          duration: 0.1,
          ease: 'power3.out',
        });
      }
    };

    const handleMouseEnter = () => {
      if (cursor) {
        gsap.to(cursor, { scale: 1.5, duration: 0.3, ease: 'power3.out' });
      }
    };

    const handleMouseLeave = () => {
      if (cursor) {
        gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'power3.out' });
      }
    };

    const interactiveElements = document.querySelectorAll('.cursor-hover');

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-10 h-10 bg-indigo-600 rounded-full pointer-events-none z-50 opacity-70"
    />
  );
};

export default CustomCursor;