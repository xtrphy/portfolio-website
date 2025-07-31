import React from 'react';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { MoveUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import ButtonWrapper from './custom/ButtonWrapper';

interface ProjectCardProps {
    imageUrl: string;
    title: string;
    description: string;
    badges: string[];
    liveUrl: string;
    codeUrl: string;
};

const ProjectCard = ({ imageUrl, title, description, badges, liveUrl, codeUrl }: ProjectCardProps) => {
    return (
        <div className='flex flex-col justify-start gap-3 w-[535px] rounded-2xl p-8 transition-transform duration-400 hover:scale-[1.015] bg-gradient-to-br from-[#a0a0a0]/90 to-[#0c0c0c]/50 backdrop-blur-xl border border-white/10 shadow-lg'>
            <Image
                src={imageUrl}
                alt={title}
                width={470}
                height={470}
                className='rounded-xl object-cover'
            />

            <h3 className='text-white text-2xl font-semibold mt-1'>{title}</h3>

            <p className='text-[15px] text-[#e0e0e0] mb-3 tracking-wide leading-5'>{description}</p>

            <div className='flex flex-wrap w-[420px] gap-2'>
                {badges.map((badge, index) => (
                    <Badge key={index} className='py-2 px-3 bg-[#333] backdrop-blur-md hover:bg-[#555] transition-colors duration-200'>
                        {badge}
                    </Badge>
                ))}
            </div>

            <div className='ml-auto mt-auto flex gap-3'>
                <ButtonWrapper content='Live'>
                    <a
                        href={liveUrl}
                        target='_blank'
                        className='flex items-center justify-center bg-white/70 w-10 h-10 p-2 rounded-md cursor-none hover:bg-gray-100 transition-colors duration-150'
                    >
                        <MoveUpRight />
                    </a>
                </ButtonWrapper>

                <ButtonWrapper content='Code on Github'>
                    <a
                        href={codeUrl}
                        target='_blank'
                        className='flex items-center w-10 h-10 justify-center bg-white/70 p-2 rounded-md cursor-none hover:bg-gray-100 transition-colors duration-150'
                    >
                        <FaGithub size={30} />
                    </a>
                </ButtonWrapper>
            </div>
        </div>
    );
};

export default ProjectCard;