import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { CircleCheck, MapPin } from 'lucide-react';
import { getLenisInstance } from '@/utils/lenisInstance';
import SocialMedia from './custom/SocialMedia';

const HomeSection = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [150, -15]);

    const handleClick = () => {
        const lenis = getLenisInstance();
        const section = document.getElementById('projects');

        if (lenis && section) {
            lenis.scrollTo(section, {
                duration: 2,
                easing: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
            });
        }
    };

    return (
        <section
            className='relative min-h-screen flex items-center overflow-hidden px-4 lg:px-0'
            ref={ref}
        >
            <div className="absolute top-0 left-0 w-full h-20 sm:h-40 bg-gradient-to-b from-[#e0e0e0] to-transparent z-10 pointer-events-none" />

            <div className='mx-auto lg:ml-[60px] xl:ml-[90px] 2xl:ml-[120px] flex flex-col gap-6 lg:gap-8 2xl:gap-10'>
                <h1 className='italic font-black'>
                    <span className='flex flex-col justify-center items-center'>
                        <SocialMedia containerClassName='ml-3 mb-3' className='hover:text-black' />
                        <span className='text-2xl sm:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl'>Владислав Перепечкин</span>
                    </span>

                    <motion.div
                        style={{ y }}
                        className='hidden lg:block'
                    >
                        <Badge className='absolute lg:-top-17 lg:-right-65 xl:-top-15 xl:-right-55 2xl:-right-40 -rotate-2 text-base bg-white/10 backdrop-blur-sm text-[#444] border border-white/30 shadow-md px-4 py-1 rounded-xl ring-1 ring-white/20 hover:-rotate-4 hover:scale-103 hover:ring-black transition-all duration-200'>
                            фронтенд разработчик
                        </Badge>
                        <Badge className='absolute lg:-top-7 lg:-right-65 xl:-top-5 xl:-right-55 2xl:-right-40 -rotate-2 text-base bg-white/10 backdrop-blur-sm text-[#444] border border-white/30 shadow-md px-4 py-1 rounded-xl ring-1 ring-white/20 hover:rotate-0 hover:scale-103 hover:ring-black transition-all duration-200'>
                            довольный клиент
                        </Badge>
                        <Badge className='absolute lg:top-3 lg:-right-65 xl:top-5 xl:-right-55 2xl:-right-40 -rotate-2 text-base bg-white/10 backdrop-blur-sm text-[#444] border border-white/30 shadow-md px-4 py-1 rounded-xl ring-1 ring-white/20 hover:-rotate-4 hover:scale-103 hover:ring-black transition-all duration-200'>
                            командная работа
                        </Badge>
                        <Badge className='absolute lg:top-13 lg:-right-65 xl:top-15 xl:-right-55 2xl:-right-40 -rotate-2 text-base bg-white/10 backdrop-blur-sm text-[#444] border border-white/30 shadow-md px-4 py-1 rounded-xl ring-1 ring-white/20 hover:rotate-0 hover:scale-103 hover:ring-black transition-all duration-200'>
                            ответственность
                        </Badge>
                    </motion.div>
                </h1>

                <ul className='flex flex-col gap-3 text-[#444] text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl tracking-wide list-none'>
                    <li className='flex items-center gap-2 sm:gap-3'>
                        <CircleCheck color='green' strokeWidth={3} />креативный и внимательный к деталям.
                    </li>
                    <li className='flex items-center gap-2 sm:gap-3'>
                        <CircleCheck color='green' strokeWidth={3} />делаю так, что хочется возвращаться
                    </li>
                    <li className='flex items-center gap-2 sm:gap-3'>
                        <CircleCheck color='green' strokeWidth={3} />цель номер один: уникальность и функционал
                    </li>
                </ul>

                <div className='flex flex-col md:flex-row md:items-start items-center gap-3 mt-2 sm:mt-3 lg:mt-5'>
                    <div className='flex flex-col  items-center gap-2'>
                        <a href='https://t.me/xtrphy1' target='_blank' className='order-2 md:order-1 md:text-lg text-center font-semibold w-52 p-4 bg-[#444]/85 text-[#cfcfcf] hover:text-[#fff] cursor-none rounded-full hover:bg-[#444] hover:scale-[1.03] transition-all duration-200'>
                            Связаться
                        </a>
                        <span className='order-1 md:order-2 flex items-center gap-1 text-sm font-bold text-[#444]'><MapPin size={18} />Астана, Казахстан</span>
                    </div>


                    <button
                        onClick={handleClick}
                        className='text-lg font-semibold w-52 p-4 bg-green-700/85 text-[#cfcfcf] hover:text-[#fff] cursor-none rounded-full hover:bg-green-700 hover:scale-[1.03] transition-all duration-200'
                    >
                        Все проекты
                    </button>
                </div>
            </div>

            <motion.div
                className='absolute xl:-right-65 3xl:-right-30 bottom-0 z-5 opacity-70 drop-shadow-[10px_5px_15px_rgba(0,0,0,0.15)]'
                style={{ y }}
                animate={{ rotate: [0.7, -0.7, 0.7] }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: "easeInOut",
                }}
            >
                <Image
                    src='/glass_woman1.webp'
                    alt='Glass woman'
                    width={900}
                    height={900}
                    className='hidden xl:block xl:w-[700px] 4xl:w-[900px] pointer-events-none select-none'
                />
            </motion.div>

            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#e0e0e0] to-transparent z-10 pointer-events-none" />

        </section>
    );
};

export default HomeSection;