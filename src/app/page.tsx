'use client';

import HomeSection from '@/components/HomeSection';
import SecondSection from '@/components/SecondSection';
import { motion } from 'framer-motion';

const Home = () => {

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <HomeSection />
            <SecondSection />
        </motion.main>
    );
};

export default Home;
