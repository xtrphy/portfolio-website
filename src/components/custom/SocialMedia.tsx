import React from 'react';
import { FaGithub, FaTelegram, FaVk } from 'react-icons/fa';

export const socials = [
    { icon: <FaGithub size={25} />, href: "https://github.com/xtrphy", label: 'Github' },
    { icon: <FaTelegram size={25} />, href: "https://t.me/xtrphy1", label: 'Telegram' },
    { icon: <FaVk size={25} />, href: "https://vk.com/xtrphyo", label: 'VK' },
];

interface SocialMediaProps {
    containerClassName?: string;
    className?: string;
}

const SocialMedia = ({ containerClassName, className }: SocialMediaProps) => {
    return (
        <div className={`flex gap-2.5 text-[#444] ${containerClassName}`}>
            {socials.map(({ icon, href, label }) => (
                <a
                    key={label}
                    href={href}
                    target='_blank'
                    className={`hover:scale-115 transition-all duration-200 ${className}`}
                >
                    {icon}
                </a>
            ))}
        </div>
    );
};

export default SocialMedia;