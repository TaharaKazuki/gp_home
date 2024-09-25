'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useContext } from 'react';

import { CursorContext } from '@/provider/CursorContext';

const TreatmentPage = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="flex min-h-screen items-center overflow-x-hidden"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute left-0 top-0 size-full object-cover"
      >
        <source src="/assets/home/video.mp4" type="video/mp4" />
        このブラウザではvideoタグがサポートされておりません。
      </video>

      <div className="container z-30 mx-auto flex items-center pb-12 pt-48 xl:pb-0 xl:pt-32">
        <div className="flex size-full items-center justify-between">
          <div>text</div>
          <div className="relative hidden h-[534px] w-[384px] xl:flex">
            <Image
              src="/assets/treatments/img.jpg"
              fill
              quality={100}
              alt="sample image"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TreatmentPage;
