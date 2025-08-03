import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import TechCard from './custom/TechCard';

const StackSection = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [200, -15]);

    return (
        <section
            className='relative min-h-screen flex justify-center items-center px-4 lg:px-0'
            ref={ref}
        >

            <motion.div
                className='absolute left-0 bottom-0 md:z-10 opacity-70 drop-shadow-[10px_5px_15px_rgba(0,0,0,0.15)] hidden md:block'
                style={{ y }}
            >
                <Image
                    src='/glass_woman4.webp'
                    alt='Glass woman'
                    width={615}
                    height={615}
                    className='w-125 lg:w-auto pointer-events-none select-none fade-bottom'
                />
            </motion.div>

            <div className='md:z-20 md:pt-32 h-full flex flex-col justify-center items-center gap-5 w-full max-w-6xl text-center px-2'>
                <h2 className='text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-black'>Мой стек</h2>

                <p className='text-[#444] lg:max-w-4xl text-sm sm:text-base md:text-lg text-center lg:text-xl 2xl:text-2xl leading-relaxed'>Владею многими современными технологиями, позволяющие создавать высоко-функциональные приложения и эстетичные веб-сайты.</p>

                <div className='z-50 mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full px-2'>
                    <TechCard src='/react.webp' alt='React Logo' title='React' bgColor='bg-cyan-900' />
                    <TechCard src='/typescript.png' alt='TypeScript Logo' title='TypeScript' />
                    <TechCard src='/nextjs.png' alt='Next.js Logo' title='Next.js' bgColor='bg-gray-800' />
                    <TechCard src='/tailwind.png' alt='Tailwind Logo' title='Tailwind' bgColor='bg-200' />
                    <TechCard src='/redux.webp' alt='Redux Logo' title='Redux' />
                    <TechCard src='/git.webp' alt='Git Logo' title='Git' />
                    <TechCard src='/supabase.svg' alt='Supabase Logo' title='Supabase' />
                    <TechCard src='/expressjs.webp' alt='Express.js Logo' title='Express.js' />
                </div>

                <span className='text-sm sm:text-base mt-4'>
                    Больше на{' '}
                    <a
                        href="https://github.com/xtrphy"
                        target='_blank'
                        className='text-[#777] font-medium hover:underline cursor-none'
                    >
                        GitHub</a>
                </span>

            </div>

        </section>
    );
};

export default StackSection;