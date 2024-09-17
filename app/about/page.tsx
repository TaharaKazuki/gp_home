'use client';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="flex min-h-screen items-center overflow-x-hidden"
    >
      about page
    </motion.section>
  );
};

export default AboutPage;
