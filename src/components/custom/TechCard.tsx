import React from 'react';
import Image from 'next/image';

interface TechCardProps {
    src: string;
    alt: string;
    title: string;
    bgColor?: string;
}

const TechCard = ({ src, alt, title, bgColor }: TechCardProps) => {
    return (
        <div className='w-full bg-white/30 backdrop-blur-[5px] border border-white/40 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] ring-1 ring-white/70 p-3 text-[#333] flex items-center justify-start gap-2 hover:scale-103 hover:ring-white hover:ring-2 hover:underline transition-all duration-200'>
            <Image
                src={src}
                alt={alt}
                width={40}
                height={40}
                className={`${bgColor} w-8 h-8 sm:w-10 sm:h-10 rounded-md p-1 sm:p-1.5`}
            />
            <span className='text-[#121212] text-xs sm:text-lg font-medium'>{title}</span>
        </div>
    );
};

export default TechCard;