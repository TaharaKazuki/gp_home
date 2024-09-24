'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="flex min-h-screen items-center overflow-x-hidden"
    >
      <div className="container mx-auto">
        <div>
          <div className="relative h-[423px] w-[304px]">
            <Image src="/assets/about/img.jpg" fill quality={100} alt="" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
