'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaHeartbeat } from 'react-icons/fa';
import { FaPeopleRobbery } from 'react-icons/fa6';
import { RiMentalHealthFill } from 'react-icons/ri';
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
              私たちはサンプルサンプルサンプル
            </h2>
            <p className="lead mx-auto max-w-[600px] xl:mx-0">
              現在、日本ではサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
            </p>
            {/* items */}
            <div className="mx-auto xl:mx-0">
              <h3 className="h4 mb-4 items-center text-accent">
                動物介在活動のもらたす効果
              </h3>
              <div className="mx-auto mb-14 grid grid-cols-3 items-center gap-[30px] xl:mx-0">
                <div className="flex flex-row items-center gap-2">
                  <RiMentalHealthFill size={40} className="text-accent" />
                  <p className="text-xs lg:text-base">心理的効果</p>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <FaHeartbeat size={40} className="text-accent" />
                  <p className="text-xs lg:text-base">生理的効果</p>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <FaPeopleRobbery size={40} className="text-accent" />
                  <p className="text-xs lg:text-base">社会的効果</p>
                </div>
              </div>
            </div>

            <button className="mx-auto btn xl:mx-0">
              お問い合わせはコチラ
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
