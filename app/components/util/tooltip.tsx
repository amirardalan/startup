import { FC, useState, useEffect, useRef, ReactNode } from 'react';
import { useMediaQuery } from '@/app/hooks/mediaquery';

type TooltipProps = {
  pos?: 't' | 'r' | 'b' | 'l' | 'cursor';
  text: string;
  children: ReactNode;
};

const Tooltip: FC<TooltipProps> = ({ pos, text, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isTablet = useMediaQuery(1024);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pos === 'cursor') {
      const currentRef = ref.current;
      if (currentRef) {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = currentRef.getBoundingClientRect();
          setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        };

        currentRef.addEventListener('mousemove', handleMouseMove);

        return () => {
          currentRef.removeEventListener('mousemove', handleMouseMove);
        };
      }
    }
  }, [pos, ref]);

  return (
    <div
      ref={ref}
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div
          className={`absolute z-50 rounded bg-gray-800 px-2 py-1 font-mono text-xs uppercase text-white shadow-md ${
            pos === 't'
              ? '-top-8 left-1/2 -translate-x-1/2'
              : pos === 'r'
                ? 'left-full top-1/2 ml-2 -translate-y-1/2'
                : pos === 'b'
                  ? 'left-1/2 top-full mt-1 -translate-x-1/2'
                  : pos === 'l'
                    ? 'right-full top-1/2 mr-2 -translate-y-1/2'
                    : ''
          }`}
          style={
            pos === 'cursor'
              ? { top: mousePosition.y, left: mousePosition.x }
              : {}
          }
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
