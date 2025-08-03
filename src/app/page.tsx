'use client';

import Footer from '@/components/Footer';
import HomeSection from '@/components/HomeSection';
import ProjectsSection from '@/components/ProjectsSection';
import StackSection from '@/components/StackSection';
import { motion } from 'framer-motion';

const Home = () => {

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <HomeSection />
            <StackSection />
            <ProjectsSection />
            <Footer />
        </motion.main>
    );
};

export default Home;
