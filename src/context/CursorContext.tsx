import React, { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';
import { CursorState } from '../types';

interface CursorContextType {
  cursorState: CursorState;
  setCursorState: (state: CursorState) => void;
  isTouchDevice: boolean;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within CursorProvider');
  }
  return context;
};

interface CursorProviderProps {
  children: ReactNode;
}

export const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const mousePosition = useRef({ x: 0, y: 0 });
  const followerPosition = useRef({ x: 0, y: 0 });

  // Detect touch devices
  useEffect(() => {
    const checkTouch = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(isTouch);
      
      if (!isTouch) {
        document.body.classList.add('cursor-active');
      } else {
        document.body.classList.remove('cursor-active');
      }
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  // Smooth cursor follower animation using lerp (linear interpolation)
  useEffect(() => {
    if (isTouchDevice || !followerRef.current) return;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      if (!followerRef.current) return;

      // Smooth following with spring-like effect
      const factor = 0.15; // Lower = smoother but slower
      followerPosition.current.x = lerp(
        followerPosition.current.x,
        mousePosition.current.x,
        factor
      );
      followerPosition.current.y = lerp(
        followerPosition.current.y,
        mousePosition.current.y,
        factor
      );

      followerRef.current.style.transform = `translate(${followerPosition.current.x}px, ${followerPosition.current.y}px)`;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isTouchDevice]);

  // Track mouse position
  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      
      // Update cursor dot position immediately
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isTouchDevice]);

  // Get cursor size and label based on state
  const getCursorConfig = () => {
    switch (cursorState) {
      case 'hover':
        return { size: 'var(--cursor-size-hover)', label: '' };
      case 'product':
        return { size: 'var(--cursor-size-product)', label: 'View' };
      case 'cta':
        return { size: 'var(--cursor-size-cta)', label: 'Add' };
      default:
        return { size: 'var(--cursor-size)', label: '' };
    }
  };

  const config = getCursorConfig();

  if (isTouchDevice) {
    return <>{children}</>;
  }

  return (
    <CursorContext.Provider value={{ cursorState, setCursorState, isTouchDevice }}>
      {children}
      {/* Cursor dot - follows mouse immediately */}
      <div
        ref={cursorRef}
        className="cursor-dot"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-primary)',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'opacity var(--transition-fast)',
        }}
      />
      {/* Cursor follower - smooth animated ring */}
      <div
        ref={followerRef}
        className="cursor-follower"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: config.size,
          height: config.size,
          borderRadius: '50%',
          border: '1.5px solid var(--color-primary)',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          transition: 'width var(--transition-base), height var(--transition-base), border-color var(--transition-base)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: cursorState === 'cta' ? 'var(--color-primary)' : 'transparent',
        }}
      >
        {config.label && (
          <span
            style={{
              fontSize: '10px',
              fontWeight: 500,
              color: cursorState === 'cta' ? 'var(--color-white)' : 'var(--color-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              transition: 'opacity var(--transition-base)',
            }}
          >
            {config.label}
          </span>
        )}
      </div>
    </CursorContext.Provider>
  );
};
