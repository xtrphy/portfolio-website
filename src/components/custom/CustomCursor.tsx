'use client';

import { useState, useEffect } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveHandler = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', moveHandler);

        return () => {
            window.removeEventListener('mousemove', moveHandler);
        }

    }, []);

    return (
        <div
            className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white mix-blend-difference pointer-events-none z-[9999]"
            style={{
                transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0)`,
            }}
        />
    );
};

export default CustomCursor;