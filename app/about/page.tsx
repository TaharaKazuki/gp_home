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
      <div className="container mx-auto flex items-center pb-12 pt-48 xl:pb-0 xl:pt-32">
        <div className="flex size-full flex-col items-center justify-between xl:flex-row">
          <div className="relative mb-8 h-[423px] w-[304px] xl:mx-0 xl:h-[534px] xl:w-[384px]">
            <Image
              src="/assets/about/img.jpg"
              fill
              quality={100}
              priority
              alt=""
              className="object-contain"
            />
          </div>
          {/* text */}
          <div className="mx-auto flex flex-col items-start text-center xl:mx-0 xl:max-w-[650px] xl:text-left">
            <h2 className="h2 mx-auto mb-6 max-w-[540px] xl:max-w-none">
              {`Committed to Your Skin's Health and Beauty`}
            </h2>
            <p className="lead mx-auto max-w-[600px] xl:mx-0">
              Tailored skincare solutions for a healthy complexion, offering
              customized care for radiant skin
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
