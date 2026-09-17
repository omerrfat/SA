import { useRef } from 'react';
import { gsap, useGSAP, ScrollTrigger } from '../lib/gsap';

interface RevealOptions {
    y?: number;
    duration?: number;
    delay?: number;
    ease?: string;
    start?: string;
}

export function useGsapReveal<T extends HTMLElement>(options: RevealOptions = {}) {
    const ref = useRef<T>(null);
    const { y = 32, duration = 0.9, delay = 0, ease = 'power3.out', start = 'top 85%' } = options;

    useGSAP(() => {
        if (!ref.current) return;

        const mm = gsap.matchMedia();
        mm.add({ reduceMotion: '(prefers-reduced-motion: reduce)' }, (context) => {
            const { reduceMotion } = context.conditions as { reduceMotion: boolean };
            gsap.fromTo(
                ref.current,
                { autoAlpha: 0, y: reduceMotion ? 0 : y },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: reduceMotion ? 0.01 : duration,
                    delay: reduceMotion ? 0 : delay,
                    ease,
                    scrollTrigger: {
                        trigger: ref.current,
                        start,
                        once: true,
                    },
                }
            );
        });

        return () => mm.revert();
    }, { scope: ref });

    return ref;
}

/** Scroll-triggered stagger reveal for a grid/list of children within a container. */
export function useStaggerReveal<T extends HTMLElement>(selector: string, options: RevealOptions = {}) {
    const containerRef = useRef<T>(null);
    const { y = 28, duration = 0.7, ease = 'power3.out' } = options;

    useGSAP(() => {
        if (!containerRef.current) return;

        const mm = gsap.matchMedia();
        mm.add({ reduceMotion: '(prefers-reduced-motion: reduce)' }, (context) => {
            const { reduceMotion } = context.conditions as { reduceMotion: boolean };
            const items = gsap.utils.toArray<HTMLElement>(selector, containerRef.current);

            if (reduceMotion) {
                gsap.set(items, { autoAlpha: 1, y: 0 });
                return;
            }

            gsap.set(items, { autoAlpha: 0, y });

            ScrollTrigger.batch(items, {
                start: 'top 88%',
                once: true,
                onEnter: (batch: Element[]) =>
                    gsap.to(batch, { autoAlpha: 1, y: 0, duration, ease, stagger: 0.08, overwrite: true }),
            });
        });

        return () => mm.revert();
    }, { scope: containerRef });

    return containerRef;
}
