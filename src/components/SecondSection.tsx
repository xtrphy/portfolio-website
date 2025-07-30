import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const SecondSection = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [150, -15]);

    return (
        <section
            className='relative h-screen flex items-center justify-center w-full'
            ref={ref}
        >
            <h1 className='text-7xl'>Следующая</h1>

            <motion.div
                className='absolute left-0 -bottom-5 z-50 opacity-90 drop-shadow-[10px_5px_15px_rgba(0,0,0,0.15)]'
                style={{ y }}
            >
                <Image
                    src='/glass_woman4.png'
                    alt='Glass woman'
                    width={625}
                    height={625}
                    className='pointer-events-none select-none'
                />
            </motion.div>

        </section>
    );
};

export default SecondSection;