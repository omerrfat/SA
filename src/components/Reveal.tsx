import React from 'react';
import { useGsapReveal } from '../hooks/useGsapReveal';

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    y?: number;
    duration?: number;
    delay?: number;
}

/** Fades + slides a section into view once as it scrolls into the viewport. */
const Reveal: React.FC<RevealProps> = ({ children, className = '', y, duration, delay }) => {
    const ref = useGsapReveal<HTMLDivElement>({ y, duration, delay });
    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
};

export default Reveal;
