import { useRef, useEffect } from 'react';

export const useMousePositionRef = (containerRef: React.RefObject<HTMLElement>) => {
    const mousePositionRef = useRef({ x: -9999, y: -9999 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                mousePositionRef.current = {
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top,
                };
            }
        };

        const currentRef = containerRef.current;
        if (currentRef) {
            currentRef.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (currentRef) {
                currentRef.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, [containerRef]);

    return mousePositionRef;
};
