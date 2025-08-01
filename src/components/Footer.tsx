import React from 'react';
import SocialMedia from './custom/SocialMedia';

const Footer = () => {
    return (
        <footer className='flex items-center justify-center gap-7 h-20 text-[#e0e0e0] bg-[#121212] p-5 z-999'>
            <span className='font-extralight'>
                <span className='mr-0.5'>Владислав</span> Перепечкин
            </span>
            <SocialMedia className='text-[#e0e0e0] hover:text-[#888]' />
        </footer>
    );
};

export default Footer;