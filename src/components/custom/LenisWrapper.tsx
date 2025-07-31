'use client';

import { useEffect } from "react";
import Lenis from "lenis";

const LenisWrapper = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            orientation: 'vertical',
            gestureOrientation: 'vertical',
        });

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };

    }, []);

    return null;
};

export default LenisWrapper;