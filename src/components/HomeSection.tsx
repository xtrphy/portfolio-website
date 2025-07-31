import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { CircleCheck, MapPin } from 'lucide-react';

const HomeSection = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [150, -15]);

    return (
        <>
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#e0e0e0] to-transparent z-10 pointer-events-none" />

            <section
                className='relative h-screen w-full flex items-center overflow-hidden'
                ref={ref}
            >
                <div className='ml-[120px] flex flex-col gap-10 text-7xl'>
                    <h1 className='italic font-black'>
                        <span>Владислав Перепечкин</span>

                        <motion.div
                            style={{ y }}
                        >
                            <Badge className='absolute -top-15 -right-25 -rotate-2 text-base bg-white/10 backdrop-blur-sm text-[#444] border border-white/30 shadow-md px-4 py-1 rounded-xl ring-1 ring-white/20 hover:-rotate-4 hover:scale-103 hover:ring-black transition-all duration-200'>
                                фронтенд разработчик
                            </Badge>
                            <Badge className='absolute -top-5 -right-25 -rotate-2 text-base bg-white/10 backdrop-blur-sm text-[#444] border border-white/30 shadow-md px-4 py-1 rounded-xl ring-1 ring-white/20 hover:rotate-0 hover:scale-103 hover:ring-black transition-all duration-200'>
                                довольный клиент
                            </Badge>
                            <Badge className='absolute top-5 -right-25 -rotate-2 text-base bg-white/10 backdrop-blur-sm text-[#444] border border-white/30 shadow-md px-4 py-1 rounded-xl ring-1 ring-white/20 hover:-rotate-4 hover:scale-103 hover:ring-black transition-all duration-200'>
                                командная работа
                            </Badge>
                            <Badge className='absolute top-15 -right-25 -rotate-2 text-base bg-white/10 backdrop-blur-sm text-[#444] border border-white/30 shadow-md px-4 py-1 rounded-xl ring-1 ring-white/20 hover:rotate-0 hover:scale-103 hover:ring-black transition-all duration-200'>
                                ответственность
                            </Badge>
                        </motion.div>
                    </h1>

                    <ul className='flex flex-col gap-2 text-[#444] text-2xl tracking-wide list-none'>
                        <li className='flex items-center gap-3'>
                            <CircleCheck color='green' strokeWidth={3} />креативный и внимательный к деталям.
                        </li>
                        <li className='flex items-center gap-3'>
                            <CircleCheck color='green' strokeWidth={3} />делаю так, что хочется возвращаться
                        </li>
                        <li className='flex items-center gap-3'>
                            <CircleCheck color='green' strokeWidth={3} />цель номер один: уникальность и функционал
                        </li>
                    </ul>

                    <div className='flex items-start gap-3 mt-5'>
                        <div className='flex flex-col items-center gap-2'>
                            <button className='text-lg font-semibold w-52 p-4 bg-[#444]/85 text-[#cfcfcf] hover:text-[#fff] cursor-none rounded-full hover:bg-[#444] hover:scale-[1.03] transition-all duration-200'>
                                Связаться
                            </button>
                            <span className='flex items-center gap-1 text-sm font-bold text-[#444]'><MapPin size={18} />Астана, Казахстан</span>
                        </div>


                        <button className='text-lg font-semibold w-52 p-4 bg-green-700/85 text-[#cfcfcf] hover:text-[#fff] cursor-none rounded-full hover:bg-green-700 hover:scale-[1.03] transition-all duration-200'>
                            Все проекты
                        </button>
                    </div>
                </div>

                <motion.div
                    className='absolute -right-10 bottom-0 z-5 opacity-70 drop-shadow-[10px_5px_15px_rgba(0,0,0,0.15)]'
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
                        src='/glass_woman1.png'
                        alt='Glass woman'
                        width={900}
                        height={900}
                        className='pointer-events-none select-none'
                    />
                </motion.div>
            </section>

            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#e0e0e0] to-transparent z-10 pointer-events-none" />
        </>
    );
};

export default HomeSection;