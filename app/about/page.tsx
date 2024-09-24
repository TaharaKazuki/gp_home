'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useContext } from 'react';
import { FaHeartbeat } from 'react-icons/fa';
import { FaPeopleRobbery } from 'react-icons/fa6';
import { RiMentalHealthFill } from 'react-icons/ri';

import { CursorContext } from '@/provider/CursorContext';

const AboutPage = () => {
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
        <div className="flex size-full flex-col items-center justify-between xl:flex-row">
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: 'easeInOut' },
            }}
            className="relative mb-8 h-[423px] w-[304px] xl:mx-0 xl:h-[534px] xl:w-[384px]"
          >
            <Image
              src="/assets/about/img.jpg"
              fill
              quality={100}
              priority
              alt=""
              className="object-contain"
            />
          </motion.div>
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: 'easeInOut' },
            }}
            className="mx-auto flex flex-col items-start text-center xl:mx-0 xl:max-w-[650px] xl:text-left"
          >
            <h2 className="h2 mx-auto mb-6 max-w-[540px] xl:max-w-none">
              私たちはサンプルサンプルサンプル
            </h2>
            <p className="lead mx-auto max-w-[600px] xl:mx-0">
              現在、日本ではサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
            </p>
            {/* items */}
            <div className="mx-auto xl:mx-0">
              <h3 className="h4 mb-4 items-center text-white">
                動物介在活動のもらたす効果
              </h3>
              <div className="mx-auto mb-14 grid grid-cols-3 items-center gap-[30px] xl:mx-0">
                <div className="flex flex-row items-center gap-2">
                  <RiMentalHealthFill size={40} className="text-white" />
                  <p className="text-xs lg:text-base">心理的効果</p>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <FaHeartbeat size={40} className="text-white" />
                  <p className="text-xs lg:text-base">生理的効果</p>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <FaPeopleRobbery size={40} className="text-white" />
                  <p className="text-xs lg:text-base">社会的効果</p>
                </div>
              </div>
            </div>

            <button className="mx-auto btn xl:mx-0">
              お問い合わせはコチラ
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
