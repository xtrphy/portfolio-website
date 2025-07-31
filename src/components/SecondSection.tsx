import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import TechCard from './TechCard';

const SecondSection = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [200, -15]);

    return (
        <section className='relative h-screen flex justify-center w-full' ref={ref}>

            <motion.div
                className='absolute left-0 bottom-0 z-50 opacity-70 drop-shadow-[10px_5px_15px_rgba(0,0,0,0.15)]'
                style={{ y }}
            >
                <Image
                    src='/glass_woman4.png'
                    alt='Glass woman'
                    width={615}
                    height={615}
                    className='pointer-events-none select-none'
                />
            </motion.div>

            <div className='mt-20 h-full flex flex-col justify-center items-center gap-5 max-w-6xl'>
                <h2 className='text-6xl font-black'>Мой стек</h2>

                <p className='text-[#444] text-center w-4xl text-2xl leading-9'>Владею многими современными технологиями, позволяющие создавать высоко-функциональные приложения и эстетичные веб-сайты.</p>

                <div className='z-50 mt-5 grid grid-cols-4 gap-5 w-5xl'>
                    <TechCard src='/react.webp' alt='React Logo' title='React' bgColor='bg-cyan-900' />
                    <TechCard src='/typescript.png' alt='TypeScript Logo' title='TypeScript' />
                    <TechCard src='/nextjs.png' alt='Next.js Logo' title='Next.js' bgColor='bg-gray-800' />
                    <TechCard src='/tailwind.png' alt='Tailwind Logo' title='Tailwind' bgColor='bg-200' />
                    <TechCard src='/redux.webp' alt='Redux Logo' title='Redux' />
                    <TechCard src='/git.webp' alt='Git Logo' title='Git' />
                    <TechCard src='/supabase.svg' alt='Supabase Logo' title='Supabase' />
                    <TechCard src='/expressjs.png' alt='Express.js Logo' title='Express.js' />
                </div>
                <span className='mt-1'>И другие...</span>
            </div>
        </section>
    );
};

export default SecondSection;