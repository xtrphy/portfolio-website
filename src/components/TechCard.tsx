import React from 'react';
import Image from 'next/image';

interface TechCardProps {
    src: string;
    alt: string;
    title: string;
}

const TechCard = ({ src, alt, title }: TechCardProps) => {
    return (
        <div className='bg-white/30 backdrop-blur-[5px] border border-white/40 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] ring-1 ring-white/70 p-3 text-[#333] flex items-center gap-2 hover:scale-103 hover:ring-white hover:ring-2 hover:underline transition-all duration-200'>
            <Image
                src={src}
                alt={alt}
                width={48}
                height={48}
                className='bg-[#121212] rounded-md p-2'
            />
            <span className='text-[#121212] text-lg'>{title}</span>
        </div>
    );
};

export default TechCard;